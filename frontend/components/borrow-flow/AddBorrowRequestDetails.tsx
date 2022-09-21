import Button from "components/ui/Button";
import Heading from "components/ui/Heading";
import { Input } from "components/ui/Input";
import { BiDollar } from "react-icons/bi";
import {
  TbBrandLinkedin,
  TbBrandTwitter,
  TbMail,
  TbPercentage,
} from "react-icons/tb";
import { useForm, UseFormRegister, UseFormWatch } from "react-hook-form";
import { TextArea } from "components/ui/TextArea";
import { FiGlobe } from "react-icons/fi";
import { BorrowLoanFormData, StripeReport } from "types";
import { Dispatch, SetStateAction } from "react";
import { Steps } from "pages/borrow";

type Props = {
  register: UseFormRegister<BorrowLoanFormData>;
  setStep: Dispatch<SetStateAction<Steps>>;
  report: StripeReport;
  watch: UseFormWatch<BorrowLoanFormData>;
};

function currencyFormat(num: number) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const AddBorrowRequestDetails = ({
  register,
  setStep,
  watch,
  report,
}: Props) => {
  return (
    <div className="max-w-2xl  space-y-6 mx-auto ">
      <Heading>Create a Borrow Loan Request</Heading>
      <h6 className="text-sm font-bold text-brand-500">COMPANY DETAILS</h6>
      <Input
        label="Company Name"
        placeholder="Enter your company name here"
        {...register("name")}
      />
      <Input
        pre={<TbMail className="h-6 w-6" />}
        label="Company Email"
        placeholder="Enter your company email here "
        {...register("email")}
        type="email"
      />
      <TextArea
        label="Company Description"
        placeholder="Tell your story ... "
        {...register("description")}
      />
      <h6 className="text-sm font-bold text-brand-500">LINKS</h6>
      <Input
        pre={<TbBrandLinkedin className="h-6 w-6" />}
        label="LinkedIn"
        placeholder="LinkedIn link "
        {...register("linkedIn")}
      />
      <Input
        pre={<FiGlobe className="h-6 w-6" />}
        label="Official Website"
        placeholder="Website Link"
        {...register("website")}
      />
      <Input
        pre={<TbBrandTwitter className="h-6 w-6" />}
        label="Twitter"
        placeholder="Twitter Link "
        {...register("twitter")}
      />

      <h6 className="text-sm font-bold text-brand-500 ">LOAN DETAILS</h6>

      <Input
        pre={
          <div className="text-sm font-medium">
            {report?.currency.toUpperCase()}
          </div>
        }
        type="number"
        label="Borrow Amount"
        placeholder="Enter borrow amount"
        {...register("amount")}
      />
      <Input
        pre={<TbPercentage className="h-6 w-6" />}
        type="number"
        label="Interest Rate"
        placeholder="Enter loan amount"
        disabled
        value={10}
      />
      <p>
        Total Repayable Amount : {currencyFormat(watch("amount") * 1.1 || 0)}{" "}
        {report?.currency.toUpperCase()}
      </p>
      <div className="grid grid-cols-2 gap-4 pt-6">
        <Button
          type="button"
          onClick={() => setStep(Steps.GET_STARTED)}
          size="lg"
        >
          Cancel
        </Button>
        <Button type="submit" variant="primary" size="lg">
          Mint Loan Request NFT
        </Button>
      </div>
    </div>
  );
};

export default AddBorrowRequestDetails;

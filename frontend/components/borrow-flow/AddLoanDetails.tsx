import Button from "components/ui/Button";
import Heading from "components/ui/Heading";
import { Input } from "components/ui/Input";
import { BiDollar } from "react-icons/bi";
import {
  TbBrandLinkedin,
  TbBrandTwitter,
  TbGlobe,
  TbMail,
  TbPercentage,
} from "react-icons/tb";
import { useForm } from "react-hook-form";
import { TextArea } from "components/ui/TextArea";
import { FiGlobe } from "react-icons/fi";
import { BorrowLoanFormData } from "types";

type Props = {};

function currencyFormat(num: number) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const AddLoanDetails = (props: Props) => {
  const { register, watch } = useForm<BorrowLoanFormData>();

  return (
    <div className="flex flex-col items-center justify-center ">
      <Heading>Create a Borrow Loan Request</Heading>
      <form className="max-w-2xl w-full space-y-6 mt-8">
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
          pre={<BiDollar className="h-6 w-6" />}
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
        <p>Total Repayable Amount : {currencyFormat(watch("amount")*1.1 || 0)}</p>
        <div className="grid grid-cols-2 gap-4 pt-6">
          <Button size="lg">Cancel</Button>
          <Button variant="primary" size="lg">
            Mint Loan Request NFT
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddLoanDetails;

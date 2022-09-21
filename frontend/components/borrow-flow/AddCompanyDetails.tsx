import Button from "components/ui/Button";
import Heading from "components/ui/Heading";
import { Input } from "components/ui/Input";
import { BiDollar } from "react-icons/bi";
import { TbBrandLinkedin, TbBrandTwitter, TbMail } from "react-icons/tb";
import { FieldErrorsImpl, useForm, UseFormRegister, UseFormWatch } from "react-hook-form";
import { TextArea } from "components/ui/TextArea";
import { FiGlobe } from "react-icons/fi";
import { BorrowLoanFormData, StripeReport } from "types";
import { Dispatch, SetStateAction } from "react";
import { Steps } from "pages/borrow";

type Props = {
  register: UseFormRegister<BorrowLoanFormData>;
  setStep: Dispatch<SetStateAction<Steps>>;
  errors: FieldErrorsImpl<BorrowLoanFormData>
};

const AddCompanyDetails = ({ register, setStep ,errors}: Props) => {
  return (
    <div className="max-w-2xl  space-y-6 mx-auto ">
      <Heading>Create a Borrow Loan Request</Heading>
      <h6 className="text-sm font-bold text-brand-500">COMPANY DETAILS</h6>
      <Input
        label="Company Name"
        placeholder="Enter your company name here"
        {...register("name",{required:{value:true,message:'This field is required'}})}
        error={errors?.name?.message}
      />
      <Input
        pre={<TbMail className="h-6 w-6" />}
        label="Company Email"
        placeholder="Enter your company email here "
        {...register("email",{required:{value:true,message:'This field is required'}})}
        type="email"
        error={errors?.email?.message}
      />
      <TextArea
        label="Company Description"
        placeholder="Tell your story ... "
        {...register("description",{required:{value:true,message:'This field is required'}})}
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

      <div className="grid grid-cols-2 gap-4 pt-6">
        <Button
          type="button"
          onClick={() => setStep(Steps.GET_STARTED)}
          size="lg"
        >
          Cancel
        </Button>
        <Button
          type="button"
          onClick={() => setStep(Steps.ADD_BORROW_DETAILS)}
          variant="primary"
          size="lg"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default AddCompanyDetails;

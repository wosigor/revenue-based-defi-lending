import Button from "components/ui/Button";
import Heading from "components/ui/Heading";
import { Input } from "components/ui/Input";
import { Steps } from "pages/borrow";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { BorrowLoanFormData } from "types";

type Props = {
  setStep: Dispatch<SetStateAction<Steps>>;
  register: UseFormRegister<BorrowLoanFormData>;
  stripeKeyValue: string;
};

const ConnectStripe = ({ setStep, register, stripeKeyValue }: Props) => {
  const [stripeError, setStripeError] = useState<string>("");

  const handleConnectStripe = () => {
    // if the field is empty , show error
    if (stripeKeyValue === "") {
      setStripeError("This field cannot be empty");
      return;
    }
    // else move to next step
    setStep(Steps.SHOW_REVENUE_REPORT);
  };

  return (
    <div className="flex flex-col  items-center justify-center ">
      <Heading> Connect Stripe </Heading>
      <div className="max-w-2xl">
        <p className="mb-8 mt-4 text-center">
          Connect and authorize Stripe account for verifying revenue
          information.
        </p>
        <Input
          placeholder="Enter your stripe api key here"
          className="w-full"
          {...register("stripeKey", {
            required: { value: true, message: "This field cannot be empty" },
          })}
          error={stripeError}
        />
        <div className="flex mt-8 items-cente justify-center">
          <Button
            type="button"
            onClick={handleConnectStripe}
            size="lg"
            variant="primary"
            className="t"
          >
            Connect Stripe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConnectStripe;

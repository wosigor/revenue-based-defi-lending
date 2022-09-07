import React, { useState, useCallback } from "react";
import { NextPage } from "next";
import Heading from "components/ui/Heading";
import { Input } from "components/ui/Input";
import Button from "components/ui/Button";
import { BiDollar } from "react-icons/bi";
import { FiPercent } from "react-icons/fi";
import { useRouter } from "next/router";

type Props = {};

enum Steps {
  GET_STARTED,
  SPRUCEID_SIGNUP,
  CONNECT_STRIPE,
  ADD_LOAN_DETAILS,
}

const BorrowPage: NextPage = (props: Props) => {
  // current step , defined in Steps enum
  const [step, setStep] = useState<Steps>(Steps.GET_STARTED);
  const router = useRouter();
  

  const renderBorrowFlow = useCallback(() => {
    switch (step) {
      case Steps.GET_STARTED: {
        return (
          <div className="flex flex-col items-center justify-center ">
            <Heading>Ready to get started? </Heading>
            <p className=" max-w-2xl my-8 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              provident similique vitae rem tenetur est facilis praesentium
              odit, deserunt blanditiis velit recusandae iste inventore optio?
              Dolores optio qui modi deleniti.
            </p>
            <Button
              onClick={() => setStep(Steps.SPRUCEID_SIGNUP)}
              size="lg"
              variant="primary"
            >
              Let's Start
            </Button>
          </div>
        );
      }
      case Steps.SPRUCEID_SIGNUP: {
        return (
          <div className="flex flex-col items-center justify-center ">
            <Heading className="">Signup with SpruceID </Heading>
            <p className=" max-w-2xl my-8 text-center">
              Sign-in with Ethereum, enabling users to control their identity
              with their Ethereum account and ENS Profile instead of relying on
              a traditional intermediary.
            </p>
            <Button
              onClick={() => setStep(Steps.CONNECT_STRIPE)}
              size="lg"
              variant="primary"
            >
              Start
            </Button>
          </div>
        );
      }
      case Steps.CONNECT_STRIPE: {
        return (
          <div className="flex flex-col items-center justify-center ">
            <Heading> Connect Stripe </Heading>
            <p className=" max-w-2xl my-8 text-center">
              Connect and authorize Stripe account for verifying revenue
              information.
            </p>
            <Button
              onClick={() => setStep(Steps.ADD_LOAN_DETAILS)}
              size="lg"
              variant="primary"
            >
              Connect Stripe
            </Button>
          </div>
        );
      }

      case Steps.ADD_LOAN_DETAILS: {
        return (
          <div className="flex flex-col items-center justify-center ">
            <Heading>Add Loan Details</Heading>
            <div className="max-w-2xl w-full space-y-6 mt-12">
              <Input
                pre={<BiDollar className="h-6 w-6" />}
                type="number"
                label="Loan Amount"
                placeholder="Enter loan amount"
              />
              <Input
                pre={<FiPercent className="h-6 w-6" />}
                type="number"
                label="Minimum Interest Rate"
                placeholder="Enter minimum interest rate you can offer"
              />
              <Input
                pre={<FiPercent className="h-6 w-6" />}
                type="number"
                label="Maximum Interest Rate"
                placeholder="Enter maximum interest rate you can offer"
              />
              <div className="grid grid-cols-2 gap-4 pt-6">
                <Button size="lg" onClick={()=>router.push('/')}>Cancel</Button>
                <Button variant="primary" size="lg">
                  Mint Loan Request NFT
                </Button>
              </div>
            </div>
          </div>
        );
      }
      default:
        return <div>Seems like you are lost friend </div>;
    }
  }, [step]);

  return <div className="pt-16">{renderBorrowFlow()}</div>;
};

export default BorrowPage;

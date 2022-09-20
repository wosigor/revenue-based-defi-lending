import React, { useState, useCallback } from "react";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Heading from "components/ui/Heading";
import { Input } from "components/ui/Input";
import Button from "components/ui/Button";
import { BiDollar } from "react-icons/bi";
import { FiPercent } from "react-icons/fi";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import DetailsForm from "components/borrow-flow/AddLoanDetails";
import AddLoanDetails from "components/borrow-flow/AddLoanDetails";

type AuthenticatedPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

enum Steps {
  GET_STARTED,
  CONNECT_STRIPE,
  ADD_LOAN_DETAILS,
}

const BorrowPage: NextPage = ({ address }: AuthenticatedPageProps) => {
  // current step , defined in Steps enum
  const [step, setStep] = useState<Steps>(Steps.GET_STARTED);
  const router = useRouter();
  const { openConnectModal } = useConnectModal();

  if (!address && openConnectModal) {
    openConnectModal();
  }

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
              onClick={() => setStep(Steps.CONNECT_STRIPE)}
              size="lg"
              variant="primary"
            >
              Let's Start
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
        return <AddLoanDetails />;
      }
      default:
        return <div>Seems like you are lost friend </div>;
    }
  }, [step]);

  return <div>{renderBorrowFlow()}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const token = await getToken({ req: context.req });

  const address = token?.sub ?? null;
  // if we have address value , server knows we are authenticated

  return {
    props: {
      address,
    },
  };
};

export default BorrowPage;

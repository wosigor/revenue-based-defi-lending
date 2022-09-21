import React, { useState, useCallback } from "react";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Heading from "components/ui/Heading";
import Button from "components/ui/Button";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import AddLoanDetails from "components/borrow-flow/AddLoanDetails";
import ConnectStripe from "components/borrow-flow/ConnectStripe";
import { useForm } from "react-hook-form";
import { BorrowLoanFormData } from "types";

type AuthenticatedPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export enum Steps {
  GET_STARTED,
  CONNECT_STRIPE,
  SHOW_REVENUE_REPORT,
  ADD_LOAN_DETAILS,
}

const BorrowPage: NextPage = ({ address }: AuthenticatedPageProps) => {
  // current step , defined in Steps enum
  const [step, setStep] = useState<Steps>(Steps.CONNECT_STRIPE);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    watch,
  } = useForm<BorrowLoanFormData>({});

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
          <ConnectStripe
            stripeKeyValue={watch("stripeKey")}
            register={register}
            setStep={setStep}
          />
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

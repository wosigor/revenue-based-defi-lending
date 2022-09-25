import React, { useState, useCallback } from "react";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Heading from "components/ui/Heading";
import Button from "components/ui/Button";
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import ConnectStripe from "components/borrow-flow/ConnectStripe";
import { SubmitHandler, useForm } from "react-hook-form";
import { BorrowLoanFormData, StripeReport } from "types";
import ShowRevenueReport from "components/borrow-flow/ShowRevenueReport";
import AddBorrowRequestDetails from "components/borrow-flow/AddBorrowDetails";
import AddCompanyDetails from "components/borrow-flow/AddCompanyDetails";

type AuthenticatedPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export enum Steps {
  GET_STARTED,
  CONNECT_STRIPE,
  SHOW_REVENUE_REPORT,
  ADD_COMPANY_DETAILS,
  ADD_BORROW_DETAILS,
}

const BorrowPage: NextPage = ({ address }: AuthenticatedPageProps) => {
  // current step , defined in Steps enum
  const [step, setStep] = useState<Steps>(Steps.GET_STARTED);
  const [stripeReport, setStripeReport] = useState<StripeReport | null>(null);

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<BorrowLoanFormData>({
    mode: "onBlur",
    defaultValues: {
      name: "Example Name",
      description: "Super cool company ",
      email: "example@xyz.com",
      linkedIn: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
      website: "https://example.xyz",
    },
  });

  const { openConnectModal } = useConnectModal();

  if (!address && openConnectModal) {
    openConnectModal();
  }

  const createBorrowRequest: SubmitHandler<BorrowLoanFormData> = (data) => {
    console.log("Form Data", data);
    console.log("Stripe Report", stripeReport);

    // 1. Mint NFT from NFTPort 
    // 2. Get tokenId
    // 3. call createBorrowRequest from smart contract
    // 4. Redirect to Marketplace

  };

  const renderBorrowFlow = useCallback(() => {
    switch (step) {
      case Steps.GET_STARTED: {
        return (
          <div className="flex flex-col items-center justify-center ">
            <Heading>Ready to get started? </Heading>
            <p className=" max-w-2xl my-8 text-center">

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
      case Steps.SHOW_REVENUE_REPORT: {
        return (
          <ShowRevenueReport
            stripeKey={watch("stripeKey")}
            setStep={setStep}
            setReport={setStripeReport}
          />
        );
      }
      case Steps.ADD_COMPANY_DETAILS: {
        return (
          <AddCompanyDetails
            errors={errors}
            register={register}
            setStep={setStep}
          />
        );
      }
      case Steps.ADD_BORROW_DETAILS: {
        return (
          <AddBorrowRequestDetails
            watch={watch}
            register={register}
            setStep={setStep}
            report={stripeReport}
          />
        );
      }
      default:
        return <div>Seems like you are lost friend </div>;
    }
  }, [step]);

  return (
    <form onSubmit={handleSubmit(createBorrowRequest)}>
      {renderBorrowFlow()}
    </form>
  );
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

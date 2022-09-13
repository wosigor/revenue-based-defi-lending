import Button from "components/ui/Button";
import Heading from "components/ui/Heading";
import { Input } from "components/ui/Input";
import SelectInput, { SelectOption } from "components/ui/SelectInput";
import React, { useState } from "react";

type Props = {};

const ASSET_OPTIONS: SelectOption[] = [{ id: 0, name: "USDC", value: "usdc" },{ id: 1, name: "MATIC", value: "matic" }];

const AddLoanDetailsForm = (props: Props) => {
  const [asset, setAsset] = useState<SelectOption>(ASSET_OPTIONS[0]);
  return (
    <div className="max-w-2xl w-full space-y-6 mt-12">
      <Heading className="mb-8 text-center ">Add Loan Details</Heading>
      <SelectInput
        label="Asset"
        options={ASSET_OPTIONS}
        setValue={setAsset}
        value={asset}
      />
      <Input
        type="number"
        label="Amount"
        placeholder={`0.00 ${asset.name.toUpperCase()}`}
      />
      <Input type="number" label="Interest Rate" placeholder={`10 %`} />
      <div className="grid grid-cols-2 gap-4 pt-6">
        <Button size="lg">Cancel</Button>
        <Button variant="primary" size="lg">
          Mint Loan Request NFT
        </Button>
      </div>
    </div>
  );
};

export default AddLoanDetailsForm;

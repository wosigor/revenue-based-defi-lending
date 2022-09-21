import MarketplaceRowItem from "components/marketplace/MarketplaceRowItem";
import Heading from "components/ui/Heading";
import { NextPage } from "next";
import React from "react";

type Props = {};

type MarketplaceItem = {
  borrower: string;
  revenue: string;
  loanRequested: string;
  loanFilled: string;
  lendApr: string;
  status: string;
};

const MarketsPage: NextPage = (props: Props) => {
  const marketplaceItems = [{}, {}, {}, {}, {}];
  return (
    <div>
      <Heading className="mb-8">Explore Marketplace</Heading>
      <table className="w-full text-left text-gray-800 ">
        <thead className="text-xs border-y text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="py-3 px-6">
              Borrower
            </th>
            <th scope="col" className="py-3 px-6">
              Revenue
            </th>
            <th scope="col" className="py-3 px-6">
              Loan Requested
            </th>
            <th scope="col" className="py-3 px-6">
              Loan Filled ( % )
            </th>
            <th scope="col" className="py-3 px-6">
              Interest Rate
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {marketplaceItems.map((_, index) => (
            <MarketplaceRowItem key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketsPage;

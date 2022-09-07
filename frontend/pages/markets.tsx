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
      <table className="w-full">
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
                Lend Apr
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {marketplaceItems.map((_, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap"
                >
                  <img
                    className="w-10 h-10 rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                    alt="Jese image"
                  />
                  <div className="pl-3">Company Name</div>
                </th>
                <td className="py-4 px-6 ">$100k / month</td>
                <td className="py-4 px-6">$50,000</td>
                <td className="py-4 px-6">50%</td>
                <td className="py-4 px-6">10% - 12%</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 mr-2" />{" "}
                    Active
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </table>
    </div>
  );
};

export default MarketsPage;

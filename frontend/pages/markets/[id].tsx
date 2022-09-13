import Button from "components/ui/Button";
import Heading from "components/ui/Heading";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

type Props = {};

const LoanPage = (props: Props) => {
  return (
    <div className="">
      <div className="flex   items-center gap-8">
        <img
          className="w-20 h-20 rounded-full object-cover object-center"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          alt="image"
        />
        <div>
          <p className="uppercase text-gray-500 mb-1">Borrower</p>
          <p className="font-medium text-lg">Company Name</p>
        </div>
        <div className="border-l-2 pl-8 py-2 ">
          <p className="uppercase text-gray-500 mb-1">Revenue</p>
          <p className="font-medium text-lg">$100k</p>
        </div>
        <div className="border-l-2 pl-8 py-2 ">
          <p className="uppercase text-gray-500 mb-1">Interest Rate</p>
          <p className="font-medium text-lg">10-12%</p>
        </div>
        <div className="border-l-2 pl-8 py-2 ">
          <p className="uppercase text-gray-500 mb-1">Status</p>
          <p className="font-medium text-lg text-emerald-600">Active</p>
        </div>
      </div>
      <div className="">
        <h2 className="mt-8 mb-4 text-2xl font-medium text-gray-800 ">
          Borrower Overview
        </h2>
        <h6 className="uppercase mb-2 text-gray-500 font-medium">
          Buisness Description
        </h6>
        <p className="text-gray-800 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet
          iste dolore, odit illum non est suscipit omnis tempore dolores enim
          delectus autem quis praesentium quas similique magnam ipsum
          reprehenderit fugit? Ab veniam cum recusandae. Fugit sint inventore
          ullam ut vero asperiores, accusantium est quasi facilis veniam sed
          dolorem libero laudantium ducimus, omnis iste qui et aspernatur
          voluptas ex, quas nostrum porro temporibus? Nisi, obcaecati fugit.
          Accusantium similique quae atque impedit at hic autem rerum
          consequuntur vero, incidunt corrupti error qui fuga quam aut ad
          mollitia. Officiis exercitationem molestiae reiciendis deserunt!
          Blanditiis maxime doloremque iste architecto eius aspernatur eaque
          deserunt!
        </p>
        <h6 className="uppercase mt-4 mb-2  text-gray-500 font-medium">
          Links
        </h6>
        <div className="space-y-2">
          <a
            href="#"
            className="flex gap-2 items-center hover:underline underline-offset-4 cursor-pointer "
          >
            Official Website <FiExternalLink />
          </a>
          <a
            href="#"
            className="flex gap-2 items-center hover:underline underline-offset-4 cursor-pointer "
          >
            Twitter <FiExternalLink />
          </a>
          <a
            href="#"
            className="flex gap-2 items-center hover:underline underline-offset-4 cursor-pointer "
          >
            LinkedIn <FiExternalLink />
          </a>
        </div>
        <div className="flex items-center gap-4 justify-end">
          <Button size="lg">Message</Button>
          <Button size="lg" variant="primary">
            Lend
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoanPage;

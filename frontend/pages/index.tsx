import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20">
        {/* Hero Left Side */}
        <div>
          <h1 className="text-5xl text-gray-800 font-medium leading-normal">
            Introducing <br />
            <span className="font-bold bg-brand-500 text-white px-4">Revenue based defi</span>
            <br />
            Lending / Borrowing
          </h1>
        </div>
        {/* Hero Right Side */}
        <div></div>
      </section>
    </main>
  );
};

export default Home;

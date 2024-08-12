import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const LoggedIn = {
    firstName: "Shakib",
    lastName: "Hossen",
    email: "shakib.csebrur@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={LoggedIn.firstName || "guest"}
            subtext="Access and manage your account transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar
        user={LoggedIn as User}
        transactions={[]}
        banks={[{ currentBalance: 125.8 }, { currentBalance: 500 }]}
      />
    </section>
  );
};

export default Home;

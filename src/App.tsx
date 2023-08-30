import React, { useEffect, useState } from "react";
import "./App.css";
import RightSide from "./right-side";
import MainBox from "./main-box";
import { initialCustomersList, machinesList } from "./configs";
import { CustomerDetails } from "./interfaces";

function App() {
  const [customersList, setCustomersList] =
    useState<CustomerDetails[]>(initialCustomersList);

  return (
    <div className=" overflow-hidden text-[white] bg-[#222] h-screen text-center">
      <div className="mt-10 flex items-center justify-center">
        <MainBox customersList={customersList} billMachines={machinesList} />
        <RightSide
          customersList={customersList}
          setCustomersList={setCustomersList}
        />
      </div>
    </div>
  );
}

export default App;

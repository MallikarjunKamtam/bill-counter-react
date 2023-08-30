import React from "react";
import { CustomerDetails } from "./interfaces";

const MainBox = ({
  billMachines,
  customersList,
}: {
  billMachines: { id: number }[];
  customersList: CustomerDetails[];
}) => {
  const BillingMachine = () => {
    return <div className="w-[50px] h-[50px] rounded-lg bg-green-400"></div>;
  };

  const Customer = ({
    numberOfItems,
    isCompleted,
  }: {
    numberOfItems: number;
    isCompleted: boolean;
  }) => {
    return (
      <div
        className={`w-[50px] h-[50px] rounded-full ${
          isCompleted ? "bg-lime-700" : "bg-slate-500"
        } flex items-center justify-center font-bold`}
      >
        {numberOfItems}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 border-2 border-white rounded h-[900px] w-2/3">
      <div className="overflow-auto h-[350px]   rounded w-3/4 items-end justify-evenly grid grid-cols-12">
        {customersList
          ?.filter((item) => item?.isCompletedBilling === true)
          ?.map((item, index) => (
            <div
              key={index}
              className={` ${
                item?.billingMachineLineId === "a"
                  ? "col-start-2 col-end-3"
                  : item.billingMachineLineId === "b"
                  ? "col-start-4 col-end-5"
                  : item.billingMachineLineId === "c"
                  ? "col-start-6 col-end-7"
                  : item.billingMachineLineId === "d"
                  ? "col-start-8 col-end-9"
                  : "col-start-10 col-end-11"
              }`}
            >
              <Customer
                isCompleted={item?.isCompletedBilling}
                numberOfItems={item?.numberOfItems}
              />
            </div>
          ))}
      </div>
      <div className="h-20  border-b rounded w-3/4   items-center justify-evenly grid grid-cols-12">
        {billMachines.map((item, index) => (
          <div
            key={index}
            className={` ${
              item?.id === 1
                ? "col-start-2 col-end-3"
                : item?.id === 2
                ? "col-start-4 col-end-5"
                : item?.id === 3
                ? "col-start-6 col-end-7"
                : item?.id === 4
                ? "col-start-8 col-end-9"
                : "col-start-10 col-end-11"
            }`}
          >
            <BillingMachine key={item?.id} />
          </div>
        ))}
      </div>
      <div className="overflow-auto h-[350px]  rounded w-3/4 items-start justify-evenly grid grid-cols-12 ">
        {customersList
          ?.filter((item) => item?.isCompletedBilling === false)
          ?.map((item, index) => (
            <div
              key={index}
              className={` my-1 ${
                item?.billingMachineLineId === "a"
                  ? "col-start-2 col-end-3"
                  : item.billingMachineLineId === "b"
                  ? "col-start-4 col-end-5"
                  : item.billingMachineLineId === "c"
                  ? "col-start-6 col-end-7"
                  : item.billingMachineLineId === "d"
                  ? "col-start-8 col-end-9"
                  : "col-start-10 col-end-11"
              }`}
            >
              <Customer
                isCompleted={item?.isCompletedBilling}
                numberOfItems={item?.numberOfItems}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainBox;

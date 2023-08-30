import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { CustomerDetails } from "./interfaces";
import { sendingButtons } from "./configs";

const RightSide = ({
  setCustomersList,
  customersList,
}: {
  customersList: CustomerDetails[];
  setCustomersList: Dispatch<SetStateAction<CustomerDetails[]>>;
}) => {
  const [queue, setQueue] = useState<any>({});
  const [minKey, setMinKey] = useState<any>("a");

  useEffect(() => {
    const list: any = Object.assign({}, queue);

    customersList
      ?.filter((item) => item?.isCompletedBilling === false)
      ?.forEach((item) => {
        if (list[item.billingMachineLineId]) {
          list[item.billingMachineLineId] =
            list[item.billingMachineLineId] + item.numberOfItems;
        } else {
          list[item.billingMachineLineId] = +item?.numberOfItems;
        }
      });

    setQueue(list);
  }, []);

  useEffect(() => {
    let minValue = Infinity;

    for (const item in queue) {
      if (queue[item] < minValue) {
        minValue = queue[item];
        setMinKey(item);
      }
    }
  }, [queue]);

  // useEffect(() => {
  //   let tempQueue = Object.assign({}, queue);

  //   let tempCustomers = [...customersList];

  //   setTimeout(() => {

  //   }, 1000);
  // });

  return (
    <div className="w-1/4 flex flex-col items-center justify-center gap-10">
      <span className="">Send more customers...</span>

      {sendingButtons?.map((item) => (
        <Button
          onClick={async () => {
            await setQueue({ ...queue, [minKey]: queue[minKey] + item?.value });

            setCustomersList([
              ...customersList,
              {
                billingMachineLineId: minKey,
                isCompletedBilling: false,
                numberOfItems: +item?.value,
              },
            ]);
          }}
          key={item?.id}
          color="inherit"
          className="border-2 rounded-full w-20 h-20 text-white"
          variant="outlined"
        >
          {item?.value}
        </Button>
      ))}
    </div>
  );
};

export default RightSide;

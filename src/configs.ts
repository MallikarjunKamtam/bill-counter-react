import { CustomerDetails } from "./interfaces";

export const machinesList = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];

export const initialCustomersList: CustomerDetails[] = [
  { billingMachineLineId: "a", isCompletedBilling: false, numberOfItems: 3 },
  { billingMachineLineId: "b", isCompletedBilling: false, numberOfItems: 5 },
  { billingMachineLineId: "c", isCompletedBilling: false, numberOfItems: 1 },
  { billingMachineLineId: "d", isCompletedBilling: false, numberOfItems: 2 },
  { billingMachineLineId: "e", isCompletedBilling: false, numberOfItems: 3 },
  { billingMachineLineId: "a", isCompletedBilling: false, numberOfItems: 10 },
  { billingMachineLineId: "b", isCompletedBilling: false, numberOfItems: 4 },
  { billingMachineLineId: "c", isCompletedBilling: false, numberOfItems: 7 },
  { billingMachineLineId: "e", isCompletedBilling: false, numberOfItems: 2 },

  { billingMachineLineId: "a", isCompletedBilling: true, numberOfItems: 7 },
  { billingMachineLineId: "b", isCompletedBilling: true, numberOfItems: 6 },
  { billingMachineLineId: "c", isCompletedBilling: true, numberOfItems: 5 },
  { billingMachineLineId: "d", isCompletedBilling: true, numberOfItems: 7 },
  { billingMachineLineId: "e", isCompletedBilling: true, numberOfItems: 11 },
];

export const sendingButtons = [
  { id: 1, value: 1 },
  { id: 3, value: 3 },
  { id: 5, value: 5 },
  { id: 10, value: 10 },
];

export type TSlot = {
  service: object;
  date: string;
  startTime: string;
  isBooked: "available" | "booked" | "canceled" | "processing";
  endTime: string;
};

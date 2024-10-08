import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { services } from "./slot.services";

// Create service
const createSlot = catchAsync(async (req, res) => {
  const duration = 60; // Assume 60 minutes for the example

  const serviceData = req.body;
  

  const result = await services.createSlotServicesIntoDB(serviceData, duration);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slot created successfully",
    data: result,
  });
});

export const getAvailableSlots = catchAsync(async (req, res) => {
  const { date, serviceId } = req.query;
  console.log(date,serviceId)

  if (!date || !serviceId) {
    res
      .status(400)
      .json({ success: false, message: "Date and serviceId are required" });
    return;
  }

  const slots = await services.getAvilabeSlotIntoDB(
    serviceId as string,
    date as string,
  );
  //  console.log(slots)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Available slots retrieved successfully",
    data: slots,
  });
});


const getAllSlots = catchAsync(async (req, res) => {
  const result = await services.getAllSlotsIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slots retrieved successfully",
    data: result,
  });
});


const toggleSlotStatus = catchAsync(async (req, res) => {
  const { slotId } = req.params;

  const result = await services.toggleSlotStatusInDB(slotId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slot status updated successfully",
    data: result,
  });
});


export const slotControllers = {
  createSlot,
  getAvailableSlots,
  getAllSlots,
  toggleSlotStatus
};

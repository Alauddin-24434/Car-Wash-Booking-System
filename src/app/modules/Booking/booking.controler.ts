
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { services } from "./booking.services";
import sendResponse from "../../utils/sendResponse";

const createBooking = catchAsync(async (req, res) => {
  const bookingData = req.body;
  const token :any= req.headers.authorization?.replace("Bearer ", "");

  const createdBooking = await services.createBookingServicesIntoDB(
    bookingData,token
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking successful",
    data: createdBooking,
  });
});

const getAllBooking = catchAsync(async (req, res) => {
  const findBooking = await services.getAllBookingIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All bookings retrieved successfully",
    data: findBooking,
  });
});


const getMyBookings = catchAsync(async (req, res,) => {
    const userId = req?.user?.id; // Assuming user ID is stored in req.user.id after authentication
  
    const userBookings = await services.getBookingsByUserId(userId);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User bookings retrieved successfully",
      data: userBookings,
    });
  });
  

export const BookingControllers = {
  createBooking,
  getAllBooking,
  getMyBookings
};
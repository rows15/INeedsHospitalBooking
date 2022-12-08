import { AppDataSource } from "../data-source";
import { Booking } from "../entities/Booking";

export const bookingRepository = AppDataSource.getRepository(Booking)
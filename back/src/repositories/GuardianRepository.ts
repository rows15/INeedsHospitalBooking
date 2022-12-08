import { AppDataSource } from "../data-source";
import { Guardian } from "../entities/Guardian";

export const guardianRepository = AppDataSource.getRepository(Guardian)
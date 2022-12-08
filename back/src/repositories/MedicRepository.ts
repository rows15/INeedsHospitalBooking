import { AppDataSource } from "../data-source";
import { Medic } from "../entities/Medic";

export const medicRepository = AppDataSource.getRepository(Medic)
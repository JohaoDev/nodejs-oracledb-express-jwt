/**
 * Data Model Interfaces
 */
import { generateToken } from "./auth.controller";

/**
 * Service Methods
 */
export const getNewToken = async (): Promise<string> => {
  return generateToken();
};

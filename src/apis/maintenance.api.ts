import axios from "axios";
import { getAPIBaseUrl } from "../utils/utils";
import {
  AddMainteanceAPIResponse,
  AddMaintenanceData,
  ClearMaintenanceHistoryResponse,
} from "./api.types";

const baseURL = getAPIBaseUrl();

/**
 * @desc: Function is defined to manage adding maintenance data
 * @param addMaintenaceData
 * @returns Promise<AddMainteanceAPIResponse>
 */
export const addMaintenance = async (
  addMaintenaceData: AddMaintenanceData
): Promise<AddMainteanceAPIResponse> => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(
    `${baseURL}/api/maintenance/add-maintenance`,
    addMaintenaceData,
    config
  );
  return response.data;
};

/**
 * @desc: Function is defined to clear the maintenance record history
 * @returns Promise<ClearMaintenanceHistoryResponse>
 */
export const clearMaintenanceHistory =
  async (): Promise<ClearMaintenanceHistoryResponse> => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.delete(
      `${baseURL}/api/maintenance/clear-maintenance-data`,
      config
    );
    return response.data;
  };

import axios from "axios";
import { getAPIBaseUrl } from "../utils/utils";
import { UserCredentials, UserLoginAPIResponse } from "./api.types";

const baseURL = getAPIBaseUrl();

/**
 * @desc: Function is defined to manage user login events
 * @param usercredentials UserCredentials
 * @returns
 */
export const loginUser = async (
  usercredentials: UserCredentials
): Promise<UserLoginAPIResponse> => {
  const response = await axios.post(
    `${baseURL}/api/users/login`,
    usercredentials
  );
  return response.data;
};

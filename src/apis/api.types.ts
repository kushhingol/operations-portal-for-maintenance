type APIResponse = {
  statusCode: number;
  status: string;
  message: string;
};

export type UserCredentials = {
  email: string;
  password: string;
};

export type UserLoginResponse = {
  token: string;
  token_expiry_time: string;
};

export type UserLoginAPIResponse = APIResponse & {
  body: UserLoginResponse;
};

export type AddMaintenanceData = {
  name: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
};

export type AddMainteanceAPIResponse = APIResponse & {
  body: AddMaintenanceData;
};

export type ClearMaintenanceHistoryResponse = APIResponse & {
  body: null | Array<unknown>;
};

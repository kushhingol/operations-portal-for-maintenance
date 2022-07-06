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
  start_date: string;
  start_time: string;
  end_date: string;
  end_time: string;
};

export type AddMainteanceAPIResponse = APIResponse & {
  body: AddMaintenanceData;
};

export type ClearMaintenanceHistoryResponse = APIResponse & {
  body: null | Array<unknown>;
};

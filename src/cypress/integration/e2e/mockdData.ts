export const successLoginResponse = {
  body: {
    statusCode: 200,
    status: "success",
    body: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNjU3MTA5MDkzLCJleHAiOjE2NTc3MDkwOTN9.ScbPqbyHNngs3ZRk-random-token",
      token_expiry_time: "10 minutes",
    },
    message: "",
  },
};

export const unsuccessfulLogin = {
  body: {
    statusCode: 401,
    status: "error",
    body: null,
    message: "Bad Credentials. Username or password is incorrect",
  },
};

export const addMaintenanceMockData = {
  body: {
    statusCode: 200,
    status: "success",
    body: {
      name: "Name",
      start_date: "2022-07-07",
      start_time: "8:52 PM",
      end_date: "2022-07-26",
      end_time: "8:52 PM",
      created_at: "2022-07-06T12:19:16.198Z",
      updated_at: "2022-07-06T12:19:16.198Z",
    },
    message: "Maintenance Window Added Successfully!",
  },
};

export const clearAllMaintenanceData = {
  body: {
    statusCode: 200,
    status: "success",
    body: [],
    message: "All maintenance timelines deleted Successfully",
  },
};

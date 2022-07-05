/**
 * @desc: Function is defined to get the API base URL
 * @returns 
 */
export const getAPIBaseUrl = () => {
  return process.env.REACT_APP_API_URL;
};

/**
 * @desc: Function is defined to convert time from 24hr format to 12hr format
 * @param timeIn24hrFormat : string
 * @returns : string
 */
export const tConv24 = (timeIn24hrFormat: string) => {
  const [sHours, minutes] = timeIn24hrFormat
    .match(/([0-9]{1,2}):([0-9]{2})/)
    ?.slice(1) ?? ["", ""];
  const period = +sHours < 12 ? "AM" : "PM";
  const hours = +sHours % 12 || 12;

  return `${hours}:${minutes} ${period}`;
};

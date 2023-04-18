import { TimeLeftObj } from '../interfaces/page_interface';

const DROP_DATE = new Date("2023/05/01 18:00:00 EST");

export const calculateTimeLeft = (): TimeLeftObj => {
  const startDate = new Date();

  const startDateInUTC = new Date(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate(), startDate.getUTCHours(), startDate.getUTCMinutes(), startDate.getUTCSeconds());
  const endDateInUTC = new Date(DROP_DATE.getUTCFullYear(), DROP_DATE.getUTCMonth(), DROP_DATE.getUTCDate(), DROP_DATE.getUTCHours(), DROP_DATE.getUTCMinutes(), DROP_DATE.getUTCSeconds());
  // @ts-ignore
  const difference = Date.parse(endDateInUTC) - Date.parse(startDateInUTC);

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

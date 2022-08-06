export const calculateTimeLeft = (dropDate: Date) => {
  const startDate = new Date();

  const startDateInUTC = new Date(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate(), startDate.getUTCHours(), startDate.getUTCMinutes(), startDate.getUTCSeconds());
  const endDateInUTC = new Date(dropDate.getUTCFullYear(), dropDate.getUTCMonth(), dropDate.getUTCDate(), dropDate.getUTCHours(), dropDate.getUTCMinutes(), dropDate.getUTCSeconds());
  // @ts-ignore
  const difference = Date.parse(endDateInUTC) - Date.parse(startDateInUTC);

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  return timeLeft;
};

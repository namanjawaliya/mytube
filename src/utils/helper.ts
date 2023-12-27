const formatCount = (count: number, divisor: number, symbol: string) => {
  return count >= divisor
    ? `${(count / divisor).toFixed()}${symbol}`
    : count.toString();
};

export const formatViewsCount = (viewsCount: string) => {
  const MILLION = 1000000;
  const THOUSAND = 1000;

  const count = parseInt(viewsCount);

  if (count >= MILLION) {
    return `${formatCount(count, MILLION, "M")} views`;
  } else if (count >= THOUSAND) {
    return `${formatCount(count, THOUSAND, "K")} views`;
  } else {
    return `${viewsCount} views`;
  }
};

export const getFormattedTime = (timestamp: string) => {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;

  const now = new Date();
  const date = new Date(timestamp);
  const timeDifference: number = now.getTime() - date.getTime();

  const intervals = [
    { name: "day", duration: DAY },
    { name: "hour", duration: HOUR },
    { name: "minute", duration: MINUTE },
    { name: "second", duration: SECOND },
  ];

  for (const interval of intervals) {
    const count = Math.floor(timeDifference / interval.duration);

    if (count > 0) {
      return count === 1
        ? `1 ${interval.name} ago`
        : `${count} ${interval.name}s ago`;
    }
  }

  return "just now";
};

export const getFormattedDuration = (durationStr: string) => {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const matches = durationStr.match(regex);

  if (!matches) {
    return "Invalid duration format";
  }

  const hours = parseInt(matches[1]) || 0;
  const minutes = parseInt(matches[2]) || 0;
  const seconds = parseInt(matches[3]) || 0;

  let formattedString = "";
  if (hours > 0) {
    formattedString += hours.toString().padStart(2, "0") + ":";
  }
  formattedString +=
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");

  return formattedString;
};

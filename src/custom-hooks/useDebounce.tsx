export const useDebounce = (
  fn: (event: React.ChangeEvent<HTMLInputElement>) => void,
  delay: number = 500
) => {
  let timeout: NodeJS.Timeout | null;

  return function (event: React.ChangeEvent<HTMLInputElement>) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => fn(event), delay);
  };
};

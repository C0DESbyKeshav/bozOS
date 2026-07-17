import { useTheme } from "styled-components";
import { DEFAULT_LOCALE } from "utils/constants";

type LocaleDateTime = {
  date: string;
  time: string;
  dateTime: string;
};

const useLocaleDateTime = (now: Date): LocaleDateTime => {
  const { formats } = useTheme();
  const date = new Intl.DateTimeFormat(DEFAULT_LOCALE, formats.date).format(
    now
  );
  const time = new Intl.DateTimeFormat(DEFAULT_LOCALE, formats.time).format(
    now
  );
  const dateTime = now.toISOString();

  return { date, time, dateTime };
};

export default useLocaleDateTime;

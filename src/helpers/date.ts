import * as dateFns from "date-fns";

class DateHelper {
  public IntervalFromated(start: Date, end: Date) {
    const date = dateFns.intervalToDuration({ start, end });

    return `
    ${("0" + date.minutes).slice(-2)}:${("0" + date.seconds).slice(-2)}
    `;
  }
  public formatedStandart(date: Date) {
    return dateFns.format(date, "HH:mm a");
  }
}

const dateHelper = new DateHelper();

export default dateHelper;

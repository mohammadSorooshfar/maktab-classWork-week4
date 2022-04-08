function weekend(date) {
  if (date.getDay() == 4 || date.getDay() == 5) {
    return true;
  } else {
    return false;
  }
}

function differenceInDays(date, date2) {
  let milisecondsDiff = Math.abs(date2.getTime() - date.getTime());
  let dayDiff = milisecondsDiff / (1000 * 3600 * 24);
  return dayDiff;
}

function calcThreeThings(date) {
  let day;
  switch (date.getDay() - 1) {
    case 0:
      day = "sunday";
      break;
    case 1:
      day = "monday";
      break;
    case 2:
      day = "tuesday";
      break;
    case 3:
      day = "wednesday";
      break;
    case 4:
      day = "thursday";
      break;
    case 5:
      day = "friday";
      break;
    case -1:
      day = "saturday";
      break;

    default:
      break;
  }

  let thisMonth = date.getMonth();

  let previous = new Date();
  previous.setMonth(thisMonth - 1);
  let previousMonth = previous.toLocaleString("default", { month: "long" });

  let next = new Date();
  next.setMonth(thisMonth + 1);
  let nextMonth = next.toLocaleString("default", { month: "long" });

  return { day: day, previousMonth: previousMonth, nextMonth: nextMonth };
}
function dayOfMonth(date) {
  if (date.getDate() < 10) {
    return "0" + date.getDate();
  }
  date.getDate();
}
function getAmPm(date) {
  return date.toLocaleString("en-US", { hour: "numeric", hour12: true });
}

function differenceInminutes(date2, date) {
  let milisecondsDiff = Math.abs(date2.getTime() - date.getTime());
  let minuteDiff = milisecondsDiff / (1000 * 60);
  return minuteDiff;
}

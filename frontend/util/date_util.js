export const beautifyDate = (uglyDate) => {
  const date = new Date(uglyDate);
  const currentYear = new Date().getFullYear();
  let dateOptions = {}

  // Don't display year in date if message is in the current year
  if (date.getFullYear() < currentYear) {
    dateOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
  } else {
    dateOptions = { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    };
  }

  // Add date ordinal
  const nth = (d) =>  {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  
        return "st";
      case 2:  
        return "nd";
      case 3:  return "rd";
      default: 
        return "th";
    }
  }

  const dayOfMonth = date.getDate();
  const msgDate = date.toLocaleDateString('en-US', dateOptions)

  return [msgDate, nth(dayOfMonth) ].join("")
}


export const beautifyTime = (uglyDate) => {
  const date = new Date(uglyDate);
  const timeOptions = {
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true,
  }
  return new Intl.DateTimeFormat("en-US", timeOptions).format(date);
}
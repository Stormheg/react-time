export default (timeZone) => {
  const options = {
    timeZone,
    hour12: false,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  new Intl.DateTimeFormat([], options)
    .formatToParts(new Date())
    .map(({ type, value }) => {
      switch (type) {
        case 'hour': hours = value; break;
        case 'minute': minutes = value; break;
        case 'second': seconds = value; break;
        default: break;
      }
      return null;
    });

  return { hours, minutes, seconds };
};

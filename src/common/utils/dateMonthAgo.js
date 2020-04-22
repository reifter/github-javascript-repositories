function dateMonthAgo() {
  const dateObj = new Date((new Date().getTime() - 1000 * 60 * 60 * 24 * 30).valueOf());
  return [
    `${dateObj.getUTCFullYear()}`,
    `${dateObj.getUTCMonth() + 1}`.padStart(2, 0),
    `${dateObj.getUTCDate()}`.padStart(2, 0)
  ].join('-');
}

export default dateMonthAgo;
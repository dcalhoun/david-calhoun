// TODO: Convert to ESM when supported by Next.js
function sortByPostPublishDateString(a, b) {
  return parseDate(b.date) - parseDate(a.date);
}

function parseDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return new Date(year, month - 1, day);
}

module.exports = { sortByPostPublishDateString };

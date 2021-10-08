const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function FormattedDate({
  ariaHidden,
  className = "",
  dateString,
}) {
  const [year, month, day] = dateString.split("-");

  return (
    <time
      aria-hidden={ariaHidden}
      className={`text-gray-700 dark:text-gray-400 ${className}`}
      itemProp="dateCreated datePublished"
      dateTime={dateString}
    >
      {`${day} ${MONTHS[month - 1]} ${year}`}
    </time>
  );
}

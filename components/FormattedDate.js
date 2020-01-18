export default function FormattedDate({ dateString }) {
  const months = [
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
    "December"
  ];
  let [year, month, day] = dateString.split(/-/g);
  return `${day} ${months[month - 1]} ${year}`;
}

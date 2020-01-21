interface Props {
  dateString: string;
}

export default function FormattedDate({ dateString }: Props): string {
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
  return `${day} ${months[parseInt(month) - 1]} ${year}`;
}

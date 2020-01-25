interface Props {
  dateString: string;
}

export default function FormattedDate({
  dateString
}: Props): React.ReactElement {
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
  // Return fragment to workaround https://git.io/Jvq25
  return <>{`${day} ${months[parseInt(month) - 1]} ${year}`}</>;
}

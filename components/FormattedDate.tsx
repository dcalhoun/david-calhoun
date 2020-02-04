interface Props {
  dateString: string;
}

let FormattedDate: React.FC<Props> = ({ dateString }) => {
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
  return <>{`${parseInt(day, 10)} ${months[parseInt(month) - 1]} ${year}`}</>;
};

export default FormattedDate;

import { Link } from "react-router-dom";

const ReservationCard = ({ reservation }) => {
    const { restaurant } = reservation;
    const date = reservation.day;
    const [year, month, day] = date.split("-");
    const formattedDate = [month, day, year].join("/")

    const fixTimes = (timeString) => {
        const stringArr = timeString?.split(":");
        const intArr = [];
        stringArr?.forEach(element => {
            intArr.push(parseInt(element))
        });
        let amPm = "AM";
        if (intArr[0] >= 12) {
            if (intArr[0] > 12) {
                intArr[0] -= 12;
            }
            amPm = "PM";
        }
        if (intArr[0] === 0) {
            intArr[0] = 12;
        }
      return `${intArr[0]}:${stringArr[1]} ${amPm}`
      };

      const time = fixTimes(reservation.timeslot)

    return (<div className="reservation-card">
        <Link to={`/restaurants/${restaurant.url}`}>
            {restaurant.name}
        </Link>
        <div className="reservation-details">Party of {reservation.party_size}, at {time} on {formattedDate}</div>
    </div>);
}

export default ReservationCard;

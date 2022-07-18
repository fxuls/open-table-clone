import * as reservationActions from "../../store/reservations"
import { useSelector } from "react-redux";

const ProfileReservations = () => {
const reservations = useSelector(reservationActions.allReservationsSelector);

    return <div><h2>Reservations</h2></div>;
}

export default ProfileReservations;

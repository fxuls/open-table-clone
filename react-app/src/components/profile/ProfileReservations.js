import { useSelector } from "react-redux";
import { allReservationsSelector } from "../../store/reservations";
import Spinner from "../Spinner";
import ReservationCard from "./ReservationCard";

const ProfileReservations = ({ loaded }) => {
  // pull data from store
  const reservations = useSelector(allReservationsSelector);

  // sort reservations into past and upcoming
  const pastReservations = [];
  const upcomingReservations = [];

  if (loaded && reservations) {
    Object.values(reservations).forEach((reservation) => {
      const [year, month, day] = reservation.day.split("-").map((res) => parseInt(res));
      const resDay = new Date(year, month - 1, day);
      const today = new Date();

      if (today > resDay) pastReservations.push(reservation);
      else upcomingReservations.push(reservation);
    });

    // sort reservations happening soonest first
    upcomingReservations.sort((a, b) => a.day < b.day ? -1 : 1);

    // sort most recent reservations first
    pastReservations.sort((a, b) => a.day > b.day ? -1 : 1);
  }

  return (
    <div className="profile-content">
      <div className="profile-content-header card-background">Reservations</div>

      <div className="reservations upcoming card-background">
        <h2>Upcoming</h2>

        {loaded ? (
          reservations && upcomingReservations.length ? (
            <div className="reservations-list">
              {upcomingReservations.map((reservation) => (
                <ReservationCard
                  key={reservation.id}
                  reservation={reservation}
                  upcoming={true}
                />
              ))}
            </div>
          ) : (
            <p>Nothing to show!</p>
          )
        ) : (
          <Spinner />
        )}
      </div>

      <div className="reservations past card-background">
        <h2>Past</h2>

        {loaded ? (
          reservations && pastReservations.length ? (
            <div className="reservations-list">
              {pastReservations.map((reservation) => (
                <ReservationCard
                  key={reservation.id}
                  reservation={reservation}
                  upcoming={false}
                />
              ))}
            </div>
          ) : (
            <p>Nothing to show!</p>
          )
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default ProfileReservations;

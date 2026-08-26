import { LuDoorOpen } from "react-icons/lu";
import { GiVacuumCleaner } from "react-icons/gi";
import { GiAutoRepair } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";

import "./Room.css";

const statusLabels = {
  ready: "Ready",
  empty: "Empty",
  cleaning: "Cleaning",
  inspection: "Inspection",
  maintainance: "Maintainance",
  booked: "Booked",
};

function RoomIcon({ status }) {
  if (status == "cleaning") {
    return <GiVacuumCleaner aria-hidden="true" className="room__icon" />
  }
  else if (status == "inspection") {
    return <IoSearchSharp aria-hidden="true" className="room__icon" />
  }
  else if (status == "maintainance") {
    return <GiAutoRepair aria-hidden="true" className="room__icon" />
  }
  else {
    return <LuDoorOpen aria-hidden="true" className="room__icon" />
  }
}
// status = [ready, empty, cleaning, inspection, maintainance, booked]
const Room = ({ roomNo, status = "ready" }) => {
  const normalizedStatus = String(status).trim().toLowerCase();
  const statusLabel = statusLabels[normalizedStatus] ?? "Unknown";

  return (
    <article
      aria-label={`Room ${roomNo}, ${statusLabel}`}
      className={`room room--${normalizedStatus}`}
    >
      <div className="room__icon-wrap">
        <RoomIcon status={status} />
      </div>
      <strong className="room__number">{roomNo}</strong>
      <span className="room__status">{statusLabel}</span>
    </article>
  );
};

export default Room;

import { LuDoorOpen } from "react-icons/lu";
import { GiVacuumCleaner } from "react-icons/gi";
import { GiAutoRepair } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./Room.css";

const statusLabels = {
  available: "Available",
  occupied: "Occupied",
  empty: "Empty",
  cleaning: "Cleaning",
  inspection: "Inspection",
  maintenance: "Maintenance",
  booked: "Booked",
  ready: "Available",
  maintainance: "Maintenance",
};

function RoomIcon({ status }) {
  const normalizedStatus = String(status || "").trim().toLowerCase();

  if (normalizedStatus === "cleaning") {
    return <GiVacuumCleaner aria-hidden="true" className="room__icon" />;
  }

  if (normalizedStatus === "inspection") {
    return <IoSearchSharp aria-hidden="true" className="room__icon" />;
  }

  if (["maintenance", "maintainance"].includes(normalizedStatus)) {
    return <GiAutoRepair aria-hidden="true" className="room__icon" />;
  }

  return <LuDoorOpen aria-hidden="true" className="room__icon" />;
}

const Room = ({ roomNo, status = "available" }) => {
  const normalizedStatus = String(status).trim().toLowerCase();
  const resolvedStatus =
    normalizedStatus === "ready"
      ? "available"
      : normalizedStatus === "maintainance"
        ? "maintenance"
        : normalizedStatus === "checkout"
          ? "available"
          : normalizedStatus;

  const statusLabel = statusLabels[resolvedStatus] ?? "Unknown";

  return (
    <Link
      aria-label={`Room ${roomNo}, ${statusLabel}`}
      className={`room room--${resolvedStatus}`}
      to={`/room/${roomNo}`}
    >
      <div className="room__icon-wrap">
        <RoomIcon status={resolvedStatus} />
      </div>
      <strong className="room__number">{roomNo}</strong>
      <span className="room__status">{statusLabel}</span>
    </Link>
  );
};

export default Room;

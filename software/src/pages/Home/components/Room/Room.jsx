import { LuDoorOpen } from "react-icons/lu";
import "./Room.css";

const statusLabels = {
  ready: "Ready",
  empty: "Empty",
  cleaning: "Cleaning",
  inspection: "Inspection",
  maintainance: "Maintainance",
  booked: "Booked",
};
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
        <LuDoorOpen aria-hidden="true" className="room__icon" />
      </div>
      <strong className="room__number">{roomNo}</strong>
      <span className="room__status">{statusLabel}</span>
    </article>
  );
};

export default Room;

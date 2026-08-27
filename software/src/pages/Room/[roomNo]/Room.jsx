import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiCalendar, FiCheckCircle, FiClock, FiInfo, FiUsers, FiUserCheck, FiUserPlus, FiX } from "react-icons/fi";
import { LuBedDouble, LuBuilding2, LuDoorOpen, LuWrench } from "react-icons/lu";
import { GiVacuumCleaner } from "react-icons/gi";
import roomData from "../../Home/data.js";
import "./Room.css";

const statusLabels = {
  available: "Available",
  occupied: "Occupied",
  empty: "Empty",
  cleaning: "Cleaning",
  inspection: "Inspection",
  maintenance: "Maintenance",
  booked: "Booked",
};

const normalizeStatus = (status) => {
  const normalizedStatus = String(status || "").trim().toLowerCase();

  if (["available", "checkout", "ready"].includes(normalizedStatus)) return "available";
  if (["maintenance", "maintainance"].includes(normalizedStatus)) return "maintenance";
  return statusLabels[normalizedStatus] ? normalizedStatus : "available";
};

const allRooms = Object.values(roomData).flat();
const workers = ["Ravi Kumar", "Maya Joshi", "Arjun Rao", "Kavya Menon", "Zoya Ali"];

const formatTimeRemaining = (milliseconds) => {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [days, hours, minutes, seconds]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
};

const RoomCountdown = ({ targetTime, label }) => {
  const targetTimestamp = new Date(targetTime).getTime();
  const [timeRemaining, setTimeRemaining] = useState(() =>
    formatTimeRemaining(targetTimestamp - Date.now())
  );

  useEffect(() => {
    const updateCountdown = () => {
      setTimeRemaining(formatTimeRemaining(targetTimestamp - Date.now()));
    };

    updateCountdown();
    const timerId = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timerId);
  }, [targetTimestamp]);

  return (
    <div className="room-details__countdown" aria-live="polite">
      <FiClock aria-hidden="true" />
      <div>
        <span>{label}</span>
        <strong>{timeRemaining}</strong>
      </div>
    </div>
  );
};

const DetailItem = ({ icon: Icon, label, value }) => (
  <div className="room-details__item">
    <Icon aria-hidden="true" className="room-details__item-icon" />
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  </div>
);

const EmptyRoomAssignment = ({ room }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(workers[0]);
  const [personalNote, setPersonalNote] = useState("");
  const [assignment, setAssignment] = useState(null);

  const assignTask = (event) => {
    event.preventDefault();
    setAssignment({ worker: selectedWorker, note: personalNote.trim() || "No personal note added" });
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="room-details__panel">
        <div className="room-details__panel-heading"><FiInfo aria-hidden="true" /><h2>Why Room Is Empty</h2></div>
        <div className="room-details__empty-reason"><DetailItem label="Current Reason" value={room.emptyReason ?? "Reason not recorded"} icon={FiInfo} /></div>
        <div className="room-details__assignment-action">
          {assignment && <DetailItem label="Assigned Worker" value={assignment.worker} icon={FiUserCheck} />}
          <button className="room-details__assign-button" type="button" onClick={() => setIsModalOpen(true)}><FiUserPlus aria-hidden="true" /> {assignment ? "Reassign Task" : "Assign Task"}</button>
        </div>
        {assignment && <p className="room-details__assignment-note"><strong>Personal note:</strong> {assignment.note}</p>}
      </section>

      {isModalOpen && (
        <div className="room-details__modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setIsModalOpen(false)}>
          <form className="room-details__modal" onSubmit={assignTask}>
            <div className="room-details__modal-header"><div><span className="room-details__eyebrow">Room {room.roomNo}</span><h2>Assign Task</h2></div><button className="room-details__modal-close" type="button" aria-label="Close assignment dialog" onClick={() => setIsModalOpen(false)}><FiX aria-hidden="true" /></button></div>
            <label htmlFor="worker">Assign to worker</label>
            <select id="worker" value={selectedWorker} onChange={(event) => setSelectedWorker(event.target.value)}>{workers.map((worker) => <option key={worker} value={worker}>{worker}</option>)}</select>
            <label htmlFor="personal-note">Personal note</label>
            <textarea id="personal-note" value={personalNote} onChange={(event) => setPersonalNote(event.target.value)} placeholder="Add instructions for the worker..." rows="4" />
            <button className="room-details__assign-submit" type="submit"><FiUserCheck aria-hidden="true" /> Assign {selectedWorker}</button>
          </form>
        </div>
      )}
    </>
  );
};

const RoomDetails = () => {
  const { roomNo } = useParams();
  const room = allRooms.find((item) => String(item.roomNo) === roomNo);

  if (!room) {
    return (
      <main className="room-details room-details--not-found">
        <Link className="room-details__back" to="/rooms">
          <FiArrowLeft aria-hidden="true" /> Back to rooms
        </Link>
        <h1>Room not found</h1>
        <p>No room matches number {roomNo}.</p>
      </main>
    );
  }

  const status = normalizeStatus(room.status);
  const statusLabel = statusLabels[status];
  const floorLabel = `${room.floorNo}${room.floorNo === 1 ? "st" : room.floorNo === 2 ? "nd" : room.floorNo === 3 ? "rd" : "th"} Floor`;
  const capacity = room.roomType === "Double" ? "2 Guests" : "1 Guest";
  const hasBooking = status === "occupied" || status === "booked";
  const hasAssignment = status === "cleaning" || status === "inspection";
  const hasMaintenance = status === "maintenance";
  const isEmpty = status === "empty";

  return (
    <main className={`room-details room-details--${status}`}>
      <Link className="room-details__back" to="/rooms">
        <FiArrowLeft aria-hidden="true" /> Back to all rooms
      </Link>

      <header className="room-details__header">
        <div className="room-details__room-number">{room.roomNo}</div>
        <div>
          <p className="room-details__eyebrow">Floor {room.floorNo}</p>
          <h1>Room {room.roomNo}</h1>
          <p>{room.roomType} Room</p>
        </div>
        <span className="room-details__status"><FiCheckCircle aria-hidden="true" /> {statusLabel}</span>
      </header>
      {
        hasBooking &&
        <section className="room-details__panel">
          <div className="room-details__panel-heading"><FiCalendar aria-hidden="true" /><h2>Booking Information</h2></div>
          <div className="room-details__booking-grid">
            <DetailItem label="Guest Name" value={room.customer.customer_name} icon={FiUsers} />
            <DetailItem label="Check-out" value={room.customer.checkout_time} icon={FiClock} />
            <DetailItem label="Check-in" value={room.customer.checkin_time} icon={FiCalendar} />
            <DetailItem label="Booking Status" value={room.status === "booked" ? "Booked" : "No Future Booking"} icon={FiInfo} />
            {status === "booked" && <DetailItem label="Priority Score" value={room.priorityScore ?? "Not assigned"} icon={LuWrench} />}
          </div>
          <RoomCountdown targetTime={status === "booked" ? room.customer.checkin_time : room.customer.checkout_time} label={status === "booked" ? "Time until next guest arrives" : "Time until room is empty"} />
        </section>
      }

      {hasAssignment && (
        <section className="room-details__panel">
          <div className="room-details__panel-heading"><FiUserCheck aria-hidden="true" /><h2>Assigned Worker</h2></div>
          <div className="room-details__booking-grid">
            <DetailItem label="Worker Name" value={room.worker?.worker_name ?? "Not assigned"} icon={FiUsers} />
            <DetailItem label="Task Assigned" value={room.worker?.assigned_at ?? "Not recorded"} icon={FiCalendar} />
          </div>
        </section>
      )}

      {hasMaintenance && (
        <section className="room-details__panel">
          <div className="room-details__panel-heading"><LuWrench aria-hidden="true" /><h2>Maintenance Details</h2></div>
          <div className="room-details__booking-grid">
            <DetailItem label="Work in Progress" value={room.maintenance?.work ?? "Not specified"} icon={LuWrench} />
            <DetailItem label="Assigned Worker" value={room.maintenance?.worker_name ?? "Not assigned"} icon={FiUsers} />
            <DetailItem label="Required Time" value={room.maintenance?.required_time ?? "Not estimated"} icon={FiClock} />
          </div>
        </section>
      )}

      {isEmpty && <EmptyRoomAssignment room={room} />}

      {room.futureBooking && !hasMaintenance && (
        <section className="room-details__panel">
          <div className="room-details__panel-heading"><FiCalendar aria-hidden="true" /><h2>Next Guest Booking</h2></div>
          <div className="room-details__booking-grid">
            <DetailItem label="Guest Name" value={room.futureBooking.customer_name} icon={FiUsers} />
            <DetailItem label="Check-in Time" value={room.futureBooking.checkin_time} icon={FiClock} />
            <DetailItem label="Priority Score" value={room.futureBooking.priorityScore} icon={LuWrench} />
          </div>
          <RoomCountdown targetTime={room.futureBooking.checkin_time} label="Time until next guest arrives" />
        </section>
      )}

      <section className="room-details__panel">
        <div className="room-details__panel-heading">
          <FiInfo aria-hidden="true" />
          <h2>Room Details</h2>
        </div>
        <div className="room-details__info-grid">
          <DetailItem label="Room Type" value={room.roomType} icon={LuDoorOpen} />
          <DetailItem label="Capacity" value={capacity} icon={FiUsers} />
          <DetailItem label="Floor" value={floorLabel} icon={LuBuilding2} />
          <DetailItem label="Bed Type" value={`${room.roomType} Bed`} icon={LuBedDouble} />
          {!hasBooking && !hasMaintenance && !room.futureBooking && <DetailItem label="Priority Score" value={room.priorityScore ?? "Not assigned"} icon={LuWrench} />}
        </div>
      </section>
    </main>
  );
};

export default RoomDetails;

import { useEffect, useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Room from "./components/Room/Room.jsx";
import roomData from "./data.js";
import "./Home.css";

const statusLegend = [
  { key: "available", label: "Available", color: "#1ca465" },
  { key: "occupied", label: "Occupied", color: "#2d7ce8" },
  { key: "empty", label: "Empty", color: "#d95e5e" },
  { key: "cleaning", label: "Cleaning", color: "#d8a000" },
  { key: "inspection", label: "Inspection", color: "#d8892d" },
  { key: "maintenance", label: "Maintenance", color: "#b14343" },
  { key: "booked", label: "Booked", color: "#7d8b8d" },
];

const filters = [
  { key: "all", label: "All" },
  { key: "available", label: "Available" },
  { key: "occupied", label: "Occupied" },
  { key: "empty", label: "Empty" },
  { key: "cleaning", label: "Cleaning" },
  { key: "inspection", label: "Inspection" },
  { key: "maintenance", label: "Maintenance" },
  { key: "booked", label: "Booked" },
];

const normalizeStatus = (status) => {
  const currentStatus = String(status || "").trim().toLowerCase();

  if (["available", "checkout", "ready"].includes(currentStatus)) return "available";
  if (currentStatus === "occupied") return "occupied";
  if (currentStatus === "empty") return "empty";
  if (currentStatus === "cleaning") return "cleaning";
  if (currentStatus === "inspection") return "inspection";
  if (["maintenance", "maintainance"].includes(currentStatus)) return "maintenance";
  if (currentStatus === "booked") return "booked";

  return "available";
};

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => window.clearInterval(timer);
  }, []);

  const currentDateText = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(now),
    [now]
  );

  const currentTimeText = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }).format(now),
    [now]
  );

  const allRooms = useMemo(
    () => Object.values(roomData).flat().sort((a, b) => a.roomNo - b.roomNo),
    []
  );

  const summary = useMemo(() => {
    const counts = {
      all: allRooms.length,
      available: allRooms.filter((room) => normalizeStatus(room.status) === "available").length,
      occupied: allRooms.filter((room) => normalizeStatus(room.status) === "occupied").length,
      empty: allRooms.filter((room) => normalizeStatus(room.status) === "empty").length,
      cleaning: allRooms.filter((room) => normalizeStatus(room.status) === "cleaning").length,
      inspection: allRooms.filter((room) => normalizeStatus(room.status) === "inspection").length,
      maintenance: allRooms.filter((room) => normalizeStatus(room.status) === "maintenance").length,
      booked: allRooms.filter((room) => normalizeStatus(room.status) === "booked").length,
    };

    return counts;
  }, [allRooms]);

  const filteredRooms = useMemo(() => {
    return allRooms.filter((room) => {
      const matchesSearch = !searchText || String(room.roomNo).includes(searchText.trim());
      const roomStatus = normalizeStatus(room.status);

      if (!matchesSearch) return false;

      if (activeFilter === "all") return true;
      if (activeFilter === roomStatus) return true;

      return false;
    });
  }, [activeFilter, allRooms, searchText]);

  return (
    <main className="home-page">
      <header className="topbar">
        <section className="status-legend" aria-label="Room status legend">
          {statusLegend.map((status) => (
            <div className="status-legend__item" key={status.key}>
              <span
                className="status-legend__swatch"
                style={{ backgroundColor: status.color }}
                aria-hidden="true"
              />
              <span className="status-legend__label">{status.label}</span>
            </div>
          ))}
        </section>
        <div className="topbar__meta">
          <p className="topbar__date">{currentDateText}</p>
          <span className="topbar__divider" aria-hidden="true" />
          <p className="topbar__time">{currentTimeText}</p>
        </div>
      </header>

      <section className="home-header">
        <div className="home-header__title-wrap">
          <h1>All Rooms</h1>
          <p>Overview of all rooms and their current status</p>
        </div>

        <div className="home-header__controls">
          <div className="home-header__search">
            <input
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Search room number..."
              aria-label="Search room number"
            />
            <CiSearch className="home-header__search-icon" />
          </div>
        </div>
      </section>

      {/* <section className="stats-grid" aria-label="Room statistics">
        <article className="stat-card stat-card--all">
          <div className="stat-card__icon-wrap">
            <span className="stat-card__value">{summary.all}</span>
          </div>
          <div className="stat-card__content">
            <h2>{summary.all}</h2>
            <span>All Rooms</span>
          </div>
        </article>

        <article className="stat-card stat-card--ready">
          <div className="stat-card__icon-wrap">
            <span className="stat-card__value">{summary.ready}</span>
          </div>
          <div className="stat-card__content">
            <h2>{summary.ready}</h2>
            <span>Clean / Ready</span>
          </div>
        </article>

        <article className="stat-card stat-card--cleaning">
          <div className="stat-card__icon-wrap">
            <span className="stat-card__value">{summary.cleaning}</span>
          </div>
          <div className="stat-card__content">
            <h2>{summary.cleaning}</h2>
            <span>Cleaning</span>
          </div>
        </article>

        <article className="stat-card stat-card--maintenance">
          <div className="stat-card__icon-wrap">
            <span className="stat-card__value">{summary.maintenance}</span>
          </div>
          <div className="stat-card__content">
            <h2>{summary.maintenance}</h2>
            <span>Maintenance</span>
          </div>
        </article>

        <article className="stat-card stat-card--empty">
          <div className="stat-card__icon-wrap">
            <span className="stat-card__value">{summary.empty}</span>
          </div>
          <div className="stat-card__content">
            <h2>{summary.empty}</h2>
            <span>Empty</span>
          </div>
        </article>
      </section> */}

      <div className="room-filter-bar" aria-label="Room status filters">
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            className={`filter-chip ${activeFilter === filter.key ? "filter-chip--active" : ""}`}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label} ({filter.key === "all" ? summary.all : summary[filter.key]})
          </button>
        ))}
      </div>

      <section className="room-grid" aria-live="polite">
        {filteredRooms.map((room) => (
          <Room
            key={`${room.floorNo}-${room.roomNo}`}
            roomNo={room.roomNo}
            status={normalizeStatus(room.status)}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;

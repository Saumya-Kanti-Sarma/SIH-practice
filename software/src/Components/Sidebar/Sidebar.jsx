import {
  FiBarChart2,
  FiChevronDown,
  FiClipboard,
  FiGrid,
  FiLogOut,
  FiSettings,
  FiTool,
  FiUsers,
  FiUser,
} from "react-icons/fi";
import "./Sidebar.css";

const primaryItems = [
  { label: "All Rooms", icon: FiGrid, active: true },
  { label: "Empty Rooms", icon: FiClipboard },
  { label: "Occupied Rooms", icon: FiUser },
  { label: "Under Maintenance", icon: FiTool, v2: true },
];

const secondaryItems = [
  { label: "Employees", icon: FiUsers },
  { label: "Settings", icon: FiSettings, v2: true },
];

const Sidebar = () => {
  return (
    <aside className="sidebar" aria-label="Main navigation">
      <div className="sidebar__content">
        <div className="sidebar__brand">
          <span className="sidebar__brand-mark">HT</span>
          <span className="sidebar__brand-name">Hotel Turnaround</span>
        </div>

        <nav className="sidebar__nav">
          <div className="sidebar__nav-group">
            {primaryItems.map(({ label, icon: Icon, active }) => (
              <a
                className={`sidebar__link${active ? " sidebar__link--active" : ""}`}
                href={`/${label.toLowerCase().replaceAll(" ", "-")}`}
                key={label}
              >
                <Icon aria-hidden="true" className="sidebar__icon" />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <div className="sidebar__divider" />

          <div className="sidebar__nav-group">
            {secondaryItems.map(({ label, icon: Icon }) => (
              <a
                className="sidebar__link"
                href={`/${label.toLowerCase()}`}
                key={label}
              >
                <Icon aria-hidden="true" className="sidebar__icon" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="sidebar__account">
        <div className="sidebar__profile">
          <div aria-hidden="true" className="sidebar__avatar">S</div>
          <div className="sidebar__profile-copy">
            <strong>Saumya</strong>
            <span>Housekeeping Staff</span>
          </div>
          <FiChevronDown aria-hidden="true" className="sidebar__chevron" />
        </div>
        <a className="sidebar__logout" href="#log-out">
          <FiLogOut aria-hidden="true" className="sidebar__icon" />
          <span>Log out</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;

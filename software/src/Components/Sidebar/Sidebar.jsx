import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
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

const Sidebar = ({ collapsed, onToggle }) => {
  return (
    <aside className={`sidebar ${collapsed ? "sidebar--collapsed" : ""}`} aria-label="Main navigation">
      <div className="sidebar__content">
        <div className="sidebar__brand">
          {!collapsed && <span className="sidebar__brand-mark">HT</span>}
          {!collapsed && <span className="sidebar__brand-name">Hotel Turnaround</span>}
          <button
            type="button"
            className="sidebar__collapse-toggle"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={onToggle}
          >
            {collapsed ? <FiChevronRight aria-hidden="true" /> : <FiChevronLeft aria-hidden="true" />}
          </button>
        </div>

        <nav className="sidebar__nav">
          <div className="sidebar__nav-group">
            {primaryItems.map(({ label, icon: Icon, active }) => (
              <a
                className={`sidebar__link${active ? " sidebar__link--active" : ""}`}
                href={`/${label.toLowerCase().replaceAll(" ", "-")}`}
                key={label}
                title={collapsed ? label : undefined}
              >
                <Icon aria-hidden="true" className="sidebar__icon" />
                {!collapsed && <span className="sidebar__link-label">{label}</span>}
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
                title={collapsed ? label : undefined}
              >
                <Icon aria-hidden="true" className="sidebar__icon" />
                {!collapsed && <span className="sidebar__link-label">{label}</span>}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="sidebar__account">
        {!collapsed && (
          <div className="sidebar__profile">
            <div aria-hidden="true" className="sidebar__avatar">S</div>
            <div className="sidebar__profile-copy">
              <strong>Saumya</strong>
              <span>Housekeeping Staff</span>
            </div>
            <FiChevronDown className="sidebar__chevron" />
          </div>
        )}
        {!collapsed && (
          <a className="sidebar__logout" href="#log-out">
            <FiLogOut className="sidebar__icon" />
            <span className="sidebar__logout-label">Log out</span>
          </a>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;

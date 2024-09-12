import React from "react";
import "./Notifications.css";
import { getLatestNotification } from './utils'
function Notifications() {
  const handleButtonClick = () => {
    console.log("Close button has clicked");
  }
  return (
    <div className="Notifications">
      <button
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img src={closeIcon} alt="Close icon" width="10px" height="10px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;
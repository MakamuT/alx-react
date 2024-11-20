import React from "react";
import "./Notifications.css";

export default function Notifications() {
  return (
    <div className="Notifications">
      <button arial-label="Close" onClick={handleCloseClick}
      style={{background:'black',color:'red',cursor:'pointer',outline:'none'}}
      >
        <img src="close-icon.png" alt="" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
       </ul>
    </div>
  );
}

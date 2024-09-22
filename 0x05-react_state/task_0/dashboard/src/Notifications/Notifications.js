import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // Update if the length of listNotifications increases or if displayDrawer changes
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    return (
      <div className="Notifications-container">
        <div className="menuItem" onClick={handleDisplayDrawer}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className="Notifications">
            <button
              className="close-btn"
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              Close
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 && (
                <li>No new notifications for now</li>
              )}
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={() => this.markAsRead(notification.id)}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;

// src/Notifications/NotificationItem.js
import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, id, markAsRead } = this.props;
    return (
      <li
        data-notification-type={type}
        onClick={() => markAsRead(id)}
        dangerouslySetInnerHTML={html ? { __html: html.__html } : undefined}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
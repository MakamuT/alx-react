// src/Notifications/Notifications.js
import React, { Component } from 'react';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { listNotifications } = this.props;
    return (
      <div>
        <ul>
          {listNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              id={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.html}
              markAsRead={this.markAsRead}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Notifications;
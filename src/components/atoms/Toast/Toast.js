import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Confirm, Warning } from '../icons';

toast.configure({
  autoClose: 3000,
  draggable: true,
  hideProgressBar: true,
});

const onNotification = (message, icon, type) => {
  return toast(
    <div className="notification-item">
      <span className="icon">{icon}</span>
      <span className="message">{message}</span>
    </div>,
    {
      position: toast.POSITION.BOTTOM_LEFT,
      className: `notification-${type}`,
    }
  );
};

export const notify = (message, type) => {
  if (type === "success") {
    return onNotification(
      message
      // <Confirm size="medium" fill="#fff" />,
      // 'success'
    );
  } else if (type === "warning") {
    return onNotification(
      message
      // <Warning size="medium" fill="#fff" />,
      // 'warning'
    );
  } else {
    return toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export default { notify };

import { createContext, useReducer, useContext } from "react";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return action.payload;
    case "HIDE_NOTIFICATION":
      return null;
    default:
      return state;
  }
};

const NotificationContext = createContext();

export function NotificationContextProvider({ children }) {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    null
  );

  function setNotification(content, seconds) {
    notificationDispatch({ type: "SHOW_NOTIFICATION", payload: content });
    setTimeout(
      () => notificationDispatch({ type: "HIDE_NOTIFICATION" }),
      seconds * 1000
    );
  }
  return (
    <NotificationContext.Provider value={[notification, setNotification]}>
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotificationContent = () => {
  const counterAndDispatch = useContext(NotificationContext);
  return counterAndDispatch[0];
};

export const useSetNotification = () => {
  const counterAndDispatch = useContext(NotificationContext);
  return counterAndDispatch[1];
};

export default NotificationContext;

import "./NotificationCard.css";

const NotificationCard = ({ item }) => {
  return (
    <div className={`card ${item.Type.toLowerCase()}`}>
      <h3>{item.Type}</h3>

      <p>{item.Message}</p>

      <small>{item.Timestamp}</small>
    </div>
  );
};

export default NotificationCard;
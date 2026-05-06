import { useEffect, useState } from "react";
import { fetchNotifications } from "./services/notificationService";
import NotificationCard from "./components/NotificationCard";
import "./App.css";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const loadNotifications = async () => {
    setLoading(true);

    const data = await fetchNotifications(page, 10, type);

    setNotifications(data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadNotifications();
  }, [page, type]);

  return (
    <div className="container">
      <h1>Campus Notifications</h1>

      <div className="filters">
        <select onChange={(e) => setType(e.target.value)}>
          <option value="">All</option>
          <option value="Event">Event</option>
          <option value="Result">Result</option>
          <option value="Placement">Placement</option>
        </select>
      </div>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        notifications.map((item) => (
          <NotificationCard key={item.ID} item={item} />
        ))
      )}

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>

        <span>Page {page}</span>

        <button onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
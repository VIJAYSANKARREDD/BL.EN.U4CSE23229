export const getPriorityScore = (notification) => {
  let weight = 0;

  switch (notification.Type) {
    case "Placement":
      weight = 3;
      break;

    case "Result":
      weight = 2;
      break;

    case "Event":
      weight = 1;
      break;

    default:
      weight = 0;
  }

  const timeScore = new Date(notification.Timestamp).getTime();

  return weight * 10000000000000 + timeScore;
};

export const getTopNotifications = (notifications, topN = 10) => {
  return notifications
    .sort((a, b) => getPriorityScore(b) - getPriorityScore(a))
    .slice(0, topN);
};
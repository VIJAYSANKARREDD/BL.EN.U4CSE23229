import { Log } from "../utils/logger";

const BASE_URL = "/evaluation-service/notifications";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJibC5lbi51NGNzZTIzMjI5QGJsLnN0dWRlbnRzLmFtcml0YS5lZHUiLCJleHAiOjE3NzgwNTgyNjEsImlhdCI6MTc3ODA1NzM2MSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjM0NmJhNDk2LTE2MTAtNDA4ZC1iODM1LTcyY2QzZjI2NjU3OSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImsudmlqYXkgc2Fua2FyIHJlZGR5Iiwic3ViIjoiYzZiN2JmN2ItYzg5MS00M2RmLWFmYzAtZmE2YjY5MGJiN2VlIn0sImVtYWlsIjoiYmwuZW4udTRjc2UyMzIyOUBibC5zdHVkZW50cy5hbXJpdGEuZWR1IiwibmFtZSI6ImsudmlqYXkgc2Fua2FyIHJlZGR5Iiwicm9sbE5vIjoiYmwuZW4udTRjc2UyMzIyOSIsImFjY2Vzc0NvZGUiOiJQVEJNbVEiLCJjbGllbnRJRCI6ImM2YjdiZjdiLWM4OTEtNDNkZi1hZmMwLWZhNmI2OTBiYjdlZSIsImNsaWVudFNlY3JldCI6ImFuc3RKcXJ2YllWcGJyUVcifQ.e9PDipmcNclQ5reBHH0gfOqBLa5Y46zegkuDIqkLuYw";

export const fetchNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  try {
    let url = `${BASE_URL}?page=${page}&limit=${limit}`;

    if (type) {
      url += `&notification_type=${type}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }

    const data = await response.json();

    Log(
      "frontend",
      "info",
      "api",
      "Notifications fetched successfully"
    );

    return data.notifications || [];
  } catch (error) {
    console.error(error);

    Log(
      "frontend",
      "error",
      "api",
      `Fetch failed ${error.message}`
    );

    return [];
  }
};
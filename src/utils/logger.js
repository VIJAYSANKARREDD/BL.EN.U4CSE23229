const LOG_API = "/evaluation-service/logs";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJibC5lbi51NGNzZTIzMjI5QGJsLnN0dWRlbnRzLmFtcml0YS5lZHUiLCJleHAiOjE3NzgwNTgyNjEsImlhdCI6MTc3ODA1NzM2MSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjM0NmJhNDk2LTE2MTAtNDA4ZC1iODM1LTcyY2QzZjI2NjU3OSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImsudmlqYXkgc2Fua2FyIHJlZGR5Iiwic3ViIjoiYzZiN2JmN2ItYzg5MS00M2RmLWFmYzAtZmE2YjY5MGJiN2VlIn0sImVtYWlsIjoiYmwuZW4udTRjc2UyMzIyOUBibC5zdHVkZW50cy5hbXJpdGEuZWR1IiwibmFtZSI6ImsudmlqYXkgc2Fua2FyIHJlZGR5Iiwicm9sbE5vIjoiYmwuZW4udTRjc2UyMzIyOSIsImFjY2Vzc0NvZGUiOiJQVEJNbVEiLCJjbGllbnRJRCI6ImM2YjdiZjdiLWM4OTEtNDNkZi1hZmMwLWZhNmI2OTBiYjdlZSIsImNsaWVudFNlY3JldCI6ImFuc3RKcXJ2YllWcGJyUVcifQ.e9PDipmcNclQ5reBHH0gfOqBLa5Y46zegkuDIqkLuYw";

export const Log = async (
  stack,
  level,
  pkg,
  message
) => {
  try {
    await fetch(LOG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message,
      }),
    });
  } catch (error) {
    console.error("Logger Error", error);
  }
};
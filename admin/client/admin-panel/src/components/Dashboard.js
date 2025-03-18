import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    users: 0,
    transactions: 0,
    revenue: 0,
    issues: 0,
  });
  useEffect(() => {
    fetch("http://localhost:5003/api/dashboard")
      .then((response) => response.json())
      .then((data) => setDashboardData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="dashboard">
      <div className="card">
        <h3>Total Users</h3>
        <p>{dashboardData.users}</p>
      </div>
      <div className="card">
        <h3>Total Transactions</h3>
        <p>{dashboardData.transactions}</p>
      </div>
      <div className="card">
        <h3>Total Revenue</h3>
        <p>${dashboardData.revenue}</p>
      </div>
      <div className="card">
        <h3>Pending Issues</h3>
        <p>{dashboardData.issues}</p>
      </div>
    </section>
  );
};

export default Dashboard;

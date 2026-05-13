import React from "react";

// Static issues data
const issues = [
  {
    id: 1,
    title: "Bug in Login",
    description: "Fix login button not working",
    status: "Open",
  },
  {
    id: 2,
    title: "UI Fix",
    description: "Align header text properly",
    status: "Closed",
  },
  {
    id: 3,
    title: "Performance Issue",
    description: "Optimize API calls for dashboard",
    status: "Open",
  },
  {
    id: 4,
    title: "Security Alert",
    description: "Check SQL injection vulnerability",
    status: "Closed",
  },
];

// IssueList Component - Functional Component
const IssueList = ({ issues }) => {
  return (
    <div
      style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "Arial" }}
    >
      <h2>Issue Tracker</h2>
      {issues.map((issue) => (
        <div
          key={issue.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{issue.title}</h3>
          <p>{issue.description}</p>
          <p>
            Status: <strong>{issue.status}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

// Main App Component
function App() {
  return (
    <div>
      <IssueList issues={issues} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

const FetchDataComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const urlUsers = "http://localhost:5001/users"; // Corrected URL format
    try {
      const response = await fetch(urlUsers, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setData(json); // Store data in state
    } catch (error) {
      setError(error.message); // Store error in state
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Users</button>
      {error && <p>Error: {error}</p>}
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Display JSON data
      )}
    </div>
  );
};

export default FetchDataComponent;

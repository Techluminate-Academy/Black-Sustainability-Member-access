async function fetchMemberRecords(apiToken) {
    try {
      const response = await fetch("https://maps.blacksustainability.org/api/member-records?page=1&limit=50", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiToken}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch member records");
      }
      console.log("Member Records:", data);
      return data;
    } catch (error) {
      console.error("Error fetching member records:", error.message);
      return null;
    }
  }
  
  // Example usage:
  const myApiToken = "YOUR_API_TOKEN_HERE"; // Replace with your token
  fetchMemberRecords(myApiToken);
  
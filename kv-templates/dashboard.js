// Sample data for leaderboard
const data = {
    attendance: [
      { name: "John Doe", score: 95 },
      { name: "Jane Smith", score: 90 },
      { name: "Alice Johnson", score: 85 },
      { name: "Bob Brown", score: 80 },
    ],
    assignments: [
      { name: "John Doe", score: 88 },
      { name: "Jane Smith", score: 92 },
      { name: "Alice Johnson", score: 85 },
      { name: "Bob Brown", score: 78 },
    ],
    assessments: [
      { name: "John Doe", score: 90 },
      { name: "Jane Smith", score: 85 },
      { name: "Alice Johnson", score: 88 },
      { name: "Bob Brown", score: 82 },
    ],
    aggregate: [
      { name: "John Doe", score: 91 },
      { name: "Jane Smith", score: 89 },
      { name: "Alice Johnson", score: 86 },
      { name: "Bob Brown", score: 80 },
    ],
  };
  
  // Function to populate the leaderboard lists
  function populateLeaderboard() {
    for (const category in data) {
      const list = document.getElementById(`${category}List`);
      data[category].forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.name}: ${entry.score}`;
        list.appendChild(listItem);
      });
    }
  }
  
  // Call the function to populate data when the page loads
  window.onload = populateLeaderboard;
  
const API_BASE = "https://fund-raiser-nldl.onrender.com";

fetch(`${API_BASE}/leaderboard`)
  .then(res => res.json())
  .then(data => {
    const leaderboardContainer = document.getElementById("leaderboard-container");

    leaderboardContainer.innerHTML = data
      .map(
        (user, index) => `
        <div class="leaderboard-entry">
          <span class="rank">#${index + 1}</span>
          <span class="name">${user.name}</span>
          <span class="donations">₹${user.donations}</span>
        </div>
      `
      )
      .join("");
  })
  .catch(err => {
    console.error("Failed to load leaderboard:", err);
  });

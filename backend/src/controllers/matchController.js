import axios from "axios";

const getUpcomingMatches = async (req, res) => {
  try {
    const response = await axios.get(
      "https://v3.football.api-sports.io/fixtures?next=10",
      {
        headers: {
          "x-apisports-key": process.env.API_KEY,
        },
      }
    );

    const matches = response.data.response.map((match) => ({
      homeTeam: match.teams.home.name,
      awayTeam: match.teams.away.name,
      date: match.fixture.date,
    }));

    res.json(matches);
  } catch (error) {
    console.error("Error fetching matches:", error.message);
    res.status(500).json({ error: "Failed to fetch matches" });
  }
};

export { getUpcomingMatches };

# ⚽ Upcoming Soccer Matches App

A full-stack web application that displays upcoming soccer matches using a free public API. The app includes a clean UI, production-quality backend, and friendly date formatting using `dayjs`.

---

## 🚀 Features

- Fetches next 10 upcoming soccer matches
- Displays teams and match date/time (formatted)
- Full-stack architecture (Node.js + React)
- Responsive and modern UI with Tailwind CSS
- Uses Day.js for user-friendly date formatting

---

## 📦 Tech Stack

### Frontend

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Day.js](https://day.js.org/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [API-Football](https://www.api-football.com/documentation-v3)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🧠 API Used

> [API-Football (v3)](https://www.api-football.com/documentation)

You need to sign up for a **free account** and get your API key.

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/upcoming-soccer-matches.git
cd upcoming-soccer-matches
```
### 2. Set Up Backend
```bash
cd server
npm install
```
Create a .env file in the server/ directory:

```bash
API_KEY=your_api_key_here
```
Run the backend:
```bash
npm run dev
```
### 3. Set Up Frontend

Open a new terminal tab:
```bash
cd client
npm install
npm run dev
```
Visit: http://localhost:5173

## 🧹 Future Improvements

  - Add filtering by country/league

  - Add match venue or stadium info

  - Add team logos and flags

  - Add pagination or infinite scroll

## 📄 License

This project is licensed under the MIT License.


---

Would you like this README saved to a file and zipped with the project structure for download?

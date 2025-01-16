import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Request completed");
      });
  }, []);

  return (
    <>
      <h1>Randome Jokes</h1>
      <p>Jokes : {jokes.length}</p>

      <div
        style={{
          width: "1000px",
        }}
      >
        {jokes.map((joke) => (
          <p key={joke.id} className="joke">
            {joke.joke}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;

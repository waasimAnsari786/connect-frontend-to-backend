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
    <div className="container h-screen bg-lime-800 p-4 mx-auto ">
      <div className=" flex justify-center">
        <p className="text-white p-5 bg-lime-900 rounded-full text-6xl font-bold">
          Randome Jokes
        </p>
      </div>
      <p className="text-center text-white text-2xl">Jokes : {jokes.length}</p>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mt-8">
        {jokes.map((joke) => (
          <div
            key={joke.id}
            className="card bg-lime-900 text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="card-body">
              <p>{joke.joke}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

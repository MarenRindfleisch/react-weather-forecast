import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Berlin" />
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/marenrindfleisch/"
          target="_blank"
          rel="noreferrer"
        >
          Maren Rindfleisch
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/MarenRindfleisch/react-weather-forecast"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
      </footer>
    </div>
  );
}

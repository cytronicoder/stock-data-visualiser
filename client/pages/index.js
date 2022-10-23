import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch message from API
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>This is a stock data visualizer.</h1>
        <p className={styles.description}>
          It is currently in development, and I will be adding more features as
          I learn more about data visualisation.
        </p>
        <button className={styles.button}>Run the sample LSTM model</button>
        <p className={styles.description}>
          {/* hidden until user clicks on button */}
          {loading ? "" : message}
        </p>
      </main>

      <footer className={styles.footer}>
        You can find the code for this project on{" "}
        <a
          href="https://github.com/cytronicoder/stock-data-visualiser" // Link to GitHub repo
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

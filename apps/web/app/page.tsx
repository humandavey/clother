"use client"
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const Home = () => {

  const [name, setName] = useState<string | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getName`);

      return await response.json();
    }

    fetchData().then((res) => setName(res.name));
  }, []);

  return (
    <div className={styles.page}>
      Name: {name ?? "No user added yet"}
    </div>
  );
}

export default Home;
import React, { useState, useEffect } from 'react';
import clsx from "clsx";
import styles from "./styles.module.css";


function LatestUpdates({ date, description }) {
  return (
    <div>
      <h3>{ date }</h3>
      <ul>
        <li>{ description }</li>
      </ul>
    </div>
  );
}

export default function HomePageLatestUpdates() {
  const [latestUpdates, setLatestUpdates] = useState([]);

  useEffect(() => {   
    fetch('data/latest_updates.json')           //api for the get request
      .then(response => response.json())
      .then(data => {
        setLatestUpdates(data)
      });
  }, []);

  return (
    <div className={clsx(styles.latestUpdates)}>
      <h2>Latest Updates</h2>
      { latestUpdates.map((props, idx) => (
        <LatestUpdates key={idx} {...props} />
      ))}
    </div>
  );
}

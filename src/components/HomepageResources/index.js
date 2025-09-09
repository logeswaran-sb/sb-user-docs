import React, { useState, useEffect } from 'react';
import clsx from "clsx";
import styles from "./styles.module.css";


function Resources({ title, img, link, description }) {
  return (

    <div className={clsx(styles.featureBox)}>
      <a href={link}>
        <div className={clsx(styles.sbCardTitle)}>
          <img src={img} width={45} height={45} />
          <span>{title}</span>
        </div>
        <div className={clsx(styles.sbCardBody)}>
          {description}
        </div>
      </a>
    </div>

  );
}

export default function HomepageResources() {

  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch('data/resources.json')           //api for the get request
      .then(response => response.json())
      .then(data => setResources(data));
  }, []);

  return (
    <div className={clsx(styles.sbFeatures)}>
      {resources.map((props, idx) => (
        <Resources key={idx} {...props} />
      ))}
    </div>
  );
}

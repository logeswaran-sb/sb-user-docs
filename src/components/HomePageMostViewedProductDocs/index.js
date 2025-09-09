import React, { useState, useEffect } from 'react';
import clsx from "clsx";
import styles from "./styles.module.css";

function MostViewedProductDocs({ text, link }) {
  return (
      <li>
        <a href={link}>
          {text}
        </a>
      </li>
  );
}

export default function HomePageMostViewedProductDocs() {
  const [leftColumn, setLeftColumn] = useState([]);
  const [rightColumn, setRightColumn] = useState([]);

  useEffect(() => {   
    fetch('data/most_viewed_documents.json')           //api for the get request
      .then(response => response.json())
      .then(data => {
        let value = data.length / 2;
        setLeftColumn(data.slice(0, value))
        setRightColumn(data.slice(value, data.length))
      });
  }, []);

  return (
    <div className={clsx(styles.mostViewdDocs)}>
      <h2>Most Viewed Topics</h2>
      <div className="row">
        <div className="col">
          <ul>
            {leftColumn.map((props, idx) => (
              <MostViewedProductDocs key={idx} {...props} />
            ))}
          </ul>
        </div>
        <div className="col">
          <ul>
            {rightColumn.map((props, idx) => (
              <MostViewedProductDocs key={idx} {...props} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

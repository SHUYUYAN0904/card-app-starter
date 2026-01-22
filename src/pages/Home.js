import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main 
    // style={styles.container}
    >
      <h1 
      // style={styles.title}
      >Card App</h1>

      <p 
      // style={styles.subtitle}
      >
        Welcome to the Card App.  
      </p>

      <div 
      // style={styles.actions}
      >
        <Link to="/cards" 
        // style={styles.button}
        >
          View Cards
        </Link>

        <Link to="/cards/new" 
        // style={styles.buttonAlt}
        >
          Add Card
        </Link>
      </div>
    </main>
  );
}


/* TODO: Design and complete the Home page
    - display instructions
    - link to Cards page
    - style as a landing page */

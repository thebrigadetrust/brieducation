import React from "react";
import "./JoinForm.css";

export default function JoinForm() {
  return (
    <section className="join-form">
      <h2>Join Us</h2>
      <p>To join our team, please visit our Microsoft Teams channel:</p>
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLScAmE-7ui3Dl7n7onQOdAX2vZl1R5V6y7S2wFC1ZDzUbs4_hA/viewform?usp=dialog"
        target="_blank"
        rel="noopener noreferrer"
        className="teams-link-button"
      >
      </a>
    </section>
  );
}

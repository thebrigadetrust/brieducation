import React from "react";
import "./Invitation.css";

export default function Invitation() {
  return (
    <section className="invitation-section">
      <div className="invitation-container">

        <div className="invitation-card">
          <img
            src="/images/invitation.jpeg"
            alt="Invitation"
            className="invitation-img"
          />
        </div>
        <div className="invite-cta">
          <button
            className="associate-button"
            onClick={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScAmE-7ui3Dl7n7onQOdAX2vZl1R5V6y7S2wFC1ZDzUbs4_hA/viewform?usp=dialog",
                "_blank"
              );
            }}
          >
            CLICK HERE TO ASSOCIATE
          </button>
        </div>

      </div>
    </section>
  );
}

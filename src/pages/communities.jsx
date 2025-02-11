import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./communities.css";

export default function Communities() {
  const navigate = useNavigate();

  const goToSubscriptions = (path) => {
    navigate(path);
  };
  return (
    <div className="communities">
      <div className="communitiesDarkOverlay">
      <div className="communitiesBox">
      <div className="communitiesTop">
        <h1>Access denied!</h1>
      </div>
      <div className="communitiesBottom">
          <p>You need to get a personal plan first!</p>
          <button className="communitiesGoToSub" onClick={() => goToSubscriptions("/subscriptions")}>Go to Subscriptions</button>
      </div>
      </div>
      </div>
    </div>
  );
}
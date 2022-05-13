import React from "react";
import "../styles/spinner.css";

export default function LoadingSpinner() {
  return (
    <div className = "spinner-wrapper">
        <div className="spinner-container">
            <div className="loading-spinner">
            </div>
        </div>
    </div>
  );
}
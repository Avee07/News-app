import React from "react";
import './About.css'
export default function About() {
  return (
    <div>
      <div class="card" data-tilt data-tilt-scale="0.95" data-tilt-startY="40">
        <div class="welcome">About:</div>
        <div class="year">
          <span>This is my first React website.I made it using mainly React function based Components and News API .</span>
          <span>It fetches the daily updated news for you.</span>
          <span>Hope yoy will enjoy that</span>
        </div>
      </div>
    </div>
  );
}

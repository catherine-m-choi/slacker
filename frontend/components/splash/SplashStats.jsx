import React from "react";

function SplashStats(props) {
  return (
    <div className="SplashStats">
      <h3>Teams large and small rely on Slack</h3>
      <ul>
        <li>
          <p className="SplashStats_stat">75%</p>
          <p className="SplashStats_stat-copy">of users depend on Slack to get work done</p>
        </li>
        <li>
          <p className="SplashStats_stat">84%</p>
          <p className="SplashStats_stat-copy">feel more connected to their teams</p>
        </li>
        <li>
          <p className="SplashStats_stat">91%</p>
          <p className="SplashStats_stat-copy">feel their ability to work remotely has improved</p>
        </li>
      </ul>
    </div>
  )
}

export default SplashStats;
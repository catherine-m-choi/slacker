import React from "react";
import { Link } from "react-router-dom";

function SplashFooter(props) {
  return (
    <div className="SplashFooter">
      <div className="SplashFooter_content">
        <ul>
          <span>WHY SLACK?</span>
          <li>Slack vs. Email</li>
          <li>Channels</li>
          <li>Engagement</li>
          <li>Scale</li>
          <li>Watch the Demo</li>
        </ul>

        <ul>
          <span>PRODUCT</span>
          <li>Features</li>
          <li>Integrations</li>
          <li>Enterprise</li>
          <li>Solutions</li>
        </ul>
        
        <ul>
          <span>PRICING</span>
          <li>Plans</li>
          <li>Paid vs. Free</li>
        </ul>

        <ul>
          <span>RESOURCES</span>
          <li>Partners</li>
          <li>Developers</li>
          <li>Community</li>
          <li>Apps</li>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Events</li>
        </ul>

        <ul>
          <span>COMPANY</span>
          <li>About Us</li>
          <li>Leadership</li>
          <li>Investor Relations</li>
          <li>News</li>
          <li>Media Kit</li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
  )
}

export default SplashFooter;
import React, { useState } from "react";
import "./BlogDetail.css"; // Import the CSS file

const BlogDetail: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">5 Tips for Traveling on a Budget</h1>
      <p className="blog-content">
        Traveling on a budget doesn’t mean compromising on your experience. Here
        are 5 essential tips to help you save money while traveling:
      </p>
      <ul className="blog-list">
        <li>1. Book Flights in Advance</li>
        <li>2. Stay in Budget-Friendly Accommodations</li>
        <li>3. Use Public Transportation</li>
        <li>4. Find Free or Low-Cost Activities</li>
        <li>5. Pack Smart and Light</li>
      </ul>

      {isExpanded && (
        <div className="additional-content">
          <h3>More Budget Travel Tips</h3>
          <ul className="blog-list">
            <li>6. Avoid Expensive Tourist Traps</li>
            <li>7. Use Travel Reward Programs</li>
            <li>8. Bring Your Own Snacks</li>
            <li>9. Travel Off-Season</li>
            <li>10. Stay Safe and Healthy</li>
          </ul>

          <h3>Travel Resources:</h3>
          <ul className="blog-list">
            <li>
              <a
                href="https://www.skyscanner.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Skyscanner
              </a>{" "}
              - Find cheap flights.
            </li>
            <li>
              <a
                href="https://www.hostelworld.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hostelworld
              </a>{" "}
              - Book budget stays.
            </li>
          </ul>

          <h3>Personal Story:</h3>
          <p className="blog-content">
            During my trip to Southeast Asia, I used public buses instead of
            taxis, which saved money and let me experience local culture!
          </p>
        </div>
      )}

      <p className="blog-content">
        For more detailed tips, check out our full blog post!
      </p>

      <button
        className="blog-footer"
        onClick={toggleContent}
        aria-expanded={isExpanded}
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
};

export default BlogDetail;

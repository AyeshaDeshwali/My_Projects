import React from "react";
import "./Resources.css";

function Resources() {
  return (
    <>
      <div className="resources-container" id="resources">
        <h2 className="resources">
          <span className="highlight">Helpfull</span> Resources
        </h2>
        <p className="resources-intro">
          Access a wide range of valuable resources designed to enhance your
          knowledge and support your journey.
        </p>
      </div>

      <div className="container">
        <div className="resources-list">
          <div className="resources-card">
            <div className="resource-icon">
              <i className="fas fa-blog"></i> {/* Blog icon */}
            </div>
            <div className="resources-info">
              <h3>Blog Articles</h3>
              <p>
                Explore insightful articles that cover various topics to help
                you stay informed.
              </p>
            </div>
          </div>
          <div className="resources-card">
            <div className="resource-icon">
              <i className="fas fa-file"></i> {/* PDF icon */}
            </div>
            <div className="resources-info">
              <h3>Guides & eBooks</h3>
              <p>
                Download helpful guides and eBooks for in-depth understanding of
                complex subjects.
              </p>
            </div>
          </div>
          <div className="resources-card">
            <div className="resource-icon">
              <i className="fas fa-book-open"></i> {/* Book icon */}
            </div>
            <div className="resources-info">
              <h3>Case Studies</h3>
              <p>
                Learn from real-world examples with our collection of case
                studies across industries.
              </p>
            </div>
          </div>
          <div className="resources-card">
            <div className="resource-icon">
              <i className="fas fa-video"></i> {/* Video icon */}
            </div>
            <div className="resources-info">
              <h3>Video Tutorials</h3>
              <p>
                Watch our video tutorials for step-by-step instructions on
                various topics.
              </p>
            </div>
          </div>
          <div className="resources-card">
            <div className="resource-icon">
              <i className="fas fa-tools"></i> {/* Tools icon */}
            </div>
            <div className="resources-info">
              <h3>Online Tools</h3>
              <p>
                Access online tools that can help you streamline your work and
                boost productivity.
              </p>
            </div>
          </div>
          <div className="resources-card">
            <div className="resource-icon">
              <i className="fas fa-star"></i> {/* Star icon */}
            </div>
            <div className="resources-info">
              <h3>Expert Reviews</h3>
              <p>
                Read reviews and recommendations from experts in the field to
                make informed decisions.
              </p>
            </div>
          </div>
          <div className="resources-card">
            <div className="resource-icon">
              <i className="fas fa-file-alt"></i> {/* File icon */}
            </div>
            <div className="resources-info">
              <h3>Whitepapers</h3>
              <p>
                Get detailed whitepapers on important trends and developments in
                your industry.
              </p>
            </div>
          </div>
          <div className="resources-card">
            <div className="resource-icon">
              <i className="fas fa-comments"></i> {/* Chat icon */}
            </div>
            <div className="resources-info">
              <h3>Community Support</h3>
              <p>
                Join our community and get advice, tips, and support from fellow
                users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;

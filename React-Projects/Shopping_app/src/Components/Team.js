import React from "react";
import "./Team.css";

function Team() {
  return (
    <>
      <div className="team-container" id="team">
        <h2 className="teams">
          <span>Our</span> Team
        </h2>
      </div>

      <div className="container">
        <div className="slider">
          <div className="same-card">
            <img
              src="https://peepingmoon-cdn.sgp1.digitaloceanspaces.com/engpeepingmoon/140919054722tiger-shroff.jpg"
              alt="team member 1"
            />
            <div>
              <h5>Tiger Shroff </h5>
              <h6>Co-Founder</h6>
              <p>
                Dedicated to driving innovation
                <br /> and results.
              </p>
            </div>
          </div>
          <div className="same-card">
            <img
              src="https://static.javatpoint.com/biography/images/madhuri-dixit.png"
              alt="team member 2"
            />
            <div>
              <h5>Madhuri Dixit</h5>
              <h6>Designer</h6>
              <p>
                Creative and detail-oriented <br /> with a passion for design.
              </p>
            </div>
          </div>
          <div className="same-card">
            <img
              src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg"
              className="card-img-top"
              alt="team member 3"
            />
            <div>
              <h5>Salman khan</h5>
              <h6>Software Engineer</h6>
              <p>
                Expert in writing clean and <br />
                scalable code.
              </p>
            </div>
          </div>
          <div className="same-card">
            <img
              src="https://ichef.bbci.co.uk/images/ic/640x360/p07r0s8z.jpg"
              className="card-img-top"
              alt="team member 4"
            />
            <div>
              <h5>TARA Sutaria</h5>
              <h6>Marketing</h6>
              <p>Passionate about building brands and market strategies.</p>
            </div>
          </div>
          {/* Duplicate cards to create a continuous effect */}
          <div className="same-card">
            <img
              src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/09/26/Pictures/htmetro_5cc0a9ac-83e9-11e6-ad59-fe0cd67003de.JPG"
              className="card-img-top"
              alt="team member 5"
            />
            <div>
              <h5>Ranbir Kapoor </h5>
              <h6>Data Analyst</h6>
              <p>Expert in data collection and analysis.</p>
            </div>
          </div>
          <div className="same-card">
            <img
              src="https://morungexpress.com/uploads/2022/10/56008032_1665417900_83aa270cc4286864eaaac2f3295ad9b7.jpg"
              className="card-img-top"
              alt="team member 4"
            />
            <div>
              <h5>Katrina Kaif</h5>
              <h6>Marketing</h6>
              <p>Passionate about building brands and market strategies.</p>
            </div>
          </div>{" "}
          <div className="same-card">
            <img
              src="https://i.pinimg.com/236x/b1/fb/45/b1fb45f910c4eca683910ea08694fcff.jpg"
              className="card-img-top"
              alt="team member 7"
            />
            <div>
              <h5> Hrithik Roshan</h5>
              <h6>Project Manager</h6>
              <p>Proficient in leading teams and managing resources.</p>
            </div>
          </div>
          <div className="same-card">
            <img
              src="https://www.breezemasti.com/wp-content/uploads/Alia-Bhatt-actress-wiki-age-height-family-husband-movies.jpg"
              className="card-img-top"
              alt="team member 8"
            />
            <div>
              <h5>Alia Bhatt</h5>
              <h6>UI/UX Designer</h6>
              <p>
                Expert in crafting intuitive and <br /> visually appealing
                designs.
              </p>
            </div>
          </div>
          <div className="same-card">
            <img
              src="https://m.photos.timesofindia.com/thumb.cms?msid=49240135&width=500&resizemode=4"
              className="card-img-top"
              alt="team member 6"
            />
            <div>
              <h5>Aishwarya Rai</h5>
              <h6>HR</h6>
              <p>
                Skilled in managing talent and fostering positive work
                environments.
              </p>
            </div>
          </div>
          <div className="same-card">
            <img
              src="https://peepingmoon-cdn.sgp1.digitaloceanspaces.com/engpeepingmoon/140919054722tiger-shroff.jpg"
              alt="team member 1"
            />
            <div>
              <h5>Tiger Shroff </h5>
              <h6>Co-Founder</h6>
              <p>
                Dedicated to driving innovation
                <br /> and results.
              </p>
            </div>
          </div>
          <div className="same-card">
            <img
              src="https://static.javatpoint.com/biography/images/madhuri-dixit.png"
              alt="team member 2"
            />
            <div>
              <h5>Madhuri Dixit</h5>
              <h6>Designer</h6>
              <p>
                Creative and detail-oriented <br /> with a passion for design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;

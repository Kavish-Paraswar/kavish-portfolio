import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>TakeTwo (trytaketwo.app)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Worked on a production-grade AI video generation platform for the film industry. Delivered core features including AI music generator and a Canvas-style builder.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Lead</h4>
                <h5>GEDIT Coding Club</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Led a team to design and launch a Next.js Web Platform. Conducted workshops on Data Structures, Web Development and mentored more than 150 students.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science (BTech)</h4>
                <h5>Vishwakarma Institute of Technology</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Undergraduate student specializing in Artificial Intelligence. Active participant in coding challenges, achieving Knight status on LeetCode.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

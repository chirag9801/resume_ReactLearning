import "./resume.css"

function Resume({ Interest, skills, education, experience }) {
  return (
    <>
      <div className="Resume" style={{borderStyle:'double'}}>Resume</div>
      <div className="border">
      <div class="interest">
        {Interest}
        <ul>
          <li>Drawing</li>
          <li>Photography</li>
          <li>Design</li>
          <li>Programming</li>
          <li>Computer Science</li>
        </ul>
      </div>
      <div className="skills">Skills{skills}</div>
      <div className="education">Education{education}</div>
      <div className="experience">Experience{experience}</div>
      </div>
    </>
  );
}

export default Resume;

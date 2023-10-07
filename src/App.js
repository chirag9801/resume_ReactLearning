import "./App.css";
import Resume from "./Components/resume";

function App() {
  let title = "Interests";
  let skills = (
    <ul>
      <li>Web Design with HTML & CSS</li>
    </ul>
  );
  let education = (
    <ul>
      <li>Wilton High School</li>
      <li>Silvermine School of Arts</li>
      <li>Codeacademy</li>
    </ul>
  );
  let experience = (
    <ul>
      <li>Student Technology Intern for Wilton School District</li>
    </ul>
  );
  

  return (
    <>
      <div className="App">
        <Resume
          Interest={title}
          skills={skills}
          education={education}
          experience={experience}
        ></Resume>
      </div>
    </>
  );
}

export default App;

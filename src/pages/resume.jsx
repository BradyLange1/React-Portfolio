export default function Resume() {
  return (
    <>
      <div className="pageHeaderBox">
        <h2 className="pageHeader">My Resume &#128195; <a href="#">Download</a></h2>
      </div>
      <div className="skillsBox">
        <h2 className="skillsHeader">Front-End Proficiencies</h2>
        <ul>
          <li className="skills">HTML</li>
          <li className="skills">CSS</li>
          <li className="skills">JavaScript</li>
          <li className="skills">JQuery</li>
          <li className="skills">React</li>
          <li className="skills">Bootstrap</li>
        </ul>
        <h2 className="skillsHeader">Back-end Proficiencies</h2>
        <ul>
          <li className="skills">APIs</li>
          <li className="skills">Express</li>
          <li className="skills">Node</li>
          <li className="skills">MySQL Sequelize</li>
          <li className="skills">MERN</li>
          <li className="skills">GraphQL</li>
        </ul>
      </div>
    </>
  );
}

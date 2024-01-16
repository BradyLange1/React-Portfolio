export default function Project(props) {
  return (
    <>
      <div className="projectCard">
        <img className="projectImage" src={props.image} alt="project-image" />
        <h3 className="projectName">{props.name}</h3>
        <div className="projectLinks">
          <a href={props.urlLink} className="projectLinkURL">
            <img src="/assets/pageLink.png" alt="page-link-image" />
          </a>
          <a href={props.gitHubLink} className="projectLinkGitHub">
            <img src="/assets/GitHubCat.png" alt="github-link-image" />
          </a>
        </div>
      </div>
    </>
  );
}

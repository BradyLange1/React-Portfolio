import Project from "../components/project";

export default function Portfolio() {
  return (
    <>
      <div className="pageHeaderBox">
        <h2 className="pageHeader">My Projects &#128193;</h2>
      </div>
      <div className="projects">
        <Project
          name={"Tech Blog"}
          urlLink={"https://radiant-bayou-53591-d064af5a6617.herokuapp.com/"}
          gitHubLink={"https://github.com/BradyLange1/Tech-Blog"}
          image={
            "https://logo.com/image-cdn/images/kts928pd/production/f8930dc16b61049931afec210ae32d614e763895-345x348.png?w=1080&q=72"
          }
        />
        <Project
          name={"Weather Dashboard"}
          urlLink={"https://bradylange1.github.io/Weather-Dashboard/"}
          gitHubLink={"https://github.com/BradyLange1/Weather-Dashboard"}
          image={"https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png"}
        />
        <Project
          name={"Playlist Creator"}
          urlLink={"https://bradylange1.github.io/Playlist-Creator/"}
          gitHubLink={"https://github.com/BradyLange1/Playlist-Creator"}
          image={
            "https://img.freepik.com/premium-vector/love-music-sticker-logo-icon-vector-songs-music-player-playlist-logo-vector-isolated-background-eps-10_399089-1088.jpg"
          }
        />
        <Project
          name={"Text Editor"}
          urlLink={"https://dry-ocean-79058-57e3d46cd78d.herokuapp.com/"}
          gitHubLink={"https://github.com/BradyLange1/text-editor-PWA"}
          image={
            "https://static.vecteezy.com/system/resources/thumbnails/004/909/777/small/coding-logo-design-template-vector.jpg"
          }
        />
        <Project
          name={"Coding Quiz"}
          urlLink={"https://bradylange1.github.io/Coding-Quiz/"}
          gitHubLink={"https://github.com/BradyLange1/Coding-Quiz"}
          image={
            "https://img.freepik.com/premium-vector/quiz-logo_2728-12.jpg?w=2000"
          }
        />
        <Project
          name={"Password Generator"}
          urlLink={"https://bradylange1.github.io/Password-Generator/"}
          gitHubLink={"https://github.com/BradyLange1/Password-Generator"}
          image={
            "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/124951eb-1d8e-477b-bc49-bf8c4a82e72f.png?w=90&h=90&fit=max&dpr=3&auto=format&q=50"
          }
        />
      </div>
    </>
  );
}

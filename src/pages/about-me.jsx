export default function AboutMe() {
  return (
    <>
      <div className="pageHeaderBox">
        <h2 className="pageHeader">
          Hi, I'm Brady <span> &#9996; </span>
        </h2>
      </div>
      <div className="aboutMeBody">
        <img
          src="/assets/boy-icon.png"
          alt="boy-waving"
          className="boyWaving"
        />
        <p className="aboutMeText">
          {/* I am a full stack web developer based in Minneapolis. I have completed
          a full stack bootcamp at the University of Minnesota along with a few entry
          level CS courses at the University of North Dakota. I am passionate
          about front end web development, reading, aviation, and working in teams. */}
          Empowering digital landscapes through innovative and seamless web solutions, I am a Full Stack Web Developer dedicated to crafting immersive user experiences. With a passion for cutting-edge technologies and a commitment to robust, scalable development, I bring a dynamic blend of creativity and technical expertise to elevate brands and transform ideas into exceptional online realities.
        </p>
      </div>
    </>
  );
}

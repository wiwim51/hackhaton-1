import "./Home.css";
import Header from "../components/Header";
// import yoda from '../assets/img/yoda.svg'
// import ReactAudioPlayer from 'react-audio-player';
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";

const Home = () => {
  const musicTracks = [
    {
      name: "starwars",
      src: "https://www.cjoint.com/doc/21_05/KEhhYBEVF5L_Star-Wars-Theme-Song-.mp3",
    },
    {
      name: "Memories",
      src: "https://www.cjoint.com/doc/21_05/KEhhYBEVF5L_Star-Wars-Theme-Song-.mp3",
    },
    {
      name: "Creative Minds",
      src: "https://www.cjoint.com/doc/21_05/KEhhYBEVF5L_Star-Wars-Theme-Song-.mp3",
    },
  ];

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  // let spin = keyframes`
  //   {
  //     0%
  // {
  // opacity: 0,
  // }

  // 20% {
  //     opacity: 1,
  // }

  // 80% {
  //     opacity: 1,
  // }
  // 100% {
  // opacity: 0,
  // }}`;

  const styleText = {
    color: "#4bd5ee",
    fontSize: "32px",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    // opacity: "0",
    // animationDelay: `${spin} 0.5`,
    // animationDuration: `${spin} 2.5`,
    // animationTimingFunction: `${spin} ease - out`,
  };

  return (
    <div className="home">
      <div className="homeSound">
        <AudioPlayer
          // style={{ width: "300px" }}
          style={{ borderRadius: "1rem" }}
          autoPlay
          // layout="horizontal"
          src={musicTracks[trackIndex].src}
          onPlay={(e) => console.log("onPlay")}
          showSkipControls={true}
          showJumpControls={false}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
          // other props here
        />
      </div>
      <Header />

      <div class="a-long-time-ago">
        <p style={styleText}>
          A long time ago, in a galaxy far,
          <br /> far away..
        </p>
      </div>

      <div class="crawl">
        <div>
          <p>
            It is a period of civil war. Rebel spaceships, striking from a
            hidden base, have won their first victory against the evil Galactic
            Empire.
          </p>
          <p>
            During the battle, Rebel spies managed to steal secret plans to the
            Empire's ultimate weapon, the DEATH STAR, an armored space station
            with enough power to destroy an entire planet.
          </p>
          <p>
            Pursued by the Empire's sinister agents, Princess Leia races home
            aboard her starship, custodian of the stolen plan that can save her
            people and restore freedom to the galaxy....
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

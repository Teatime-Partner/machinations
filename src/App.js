import React from "react";
import "./custom.scss";
import Machinations from "./components/Machinations";
import Daring from "./components/Daring";

function App() {
  return (
    <>
      <div className="container-lg">
        <div className="intro">
          <h1>
            Welcome to
            <span>
              <img src="./dawntrails.png" className="img-fluid" alt="Dawntrail logo"></img>
            </span>
            <em>Machinations</em> counter!
          </h1>
          <p className="intro-para">
            You have probably noticed by now. You have probably heard it too - the drums rolling in
            the background every time the group and WoL put their heads together to devise a new
            brilliant plan that will save yet another day. <br></br>The dread you feel the moment
            you hear it. <br></br>
            You might ask: "Oh, Soken! Why!? Why do you torment us with this track? Why does it play
            every second cutscene? Tell us, why must we suffer?" <br></br>The answer will not come.
            <br></br>
            You carry on with the Main Scenario quest, hopefull that you will hear new sounds, new
            music that will elevate your experience, that will make you <em>feel something</em> and
            make the story a bit more engaging. Yet, you hear it again. The drums. The dread. The A
            Realm Reborn soundtrack that played over 10 times already... <br></br>
            ... Did it? You're unsure. So you go back an start counting your suffering.
          </p>
        </div>
        <hr></hr>
        <div className="counters">
          <p>
            I got fed up with hearing ARR music in Dawntrail, so after suffering with my friend,
            I've decided to make this counter so we know <em>exactly</em> how many times we were
            forced to hear this uninspired piece over and over during MSQ. There are over 733
            soundtracks in the game. Do better, SE. <br></br>Enjoy counting!
          </p>
          <div className="count-div row d-flex flex-wrap align-items-center">
            <Machinations name="Machinations" />
            <Daring name="Daring Dalliances" />
          </div>
          {/* other counters - maybe in the future */}
          {/* <div className="count-div-small row d-flex flex-wrap align-items-center">
          <Counter name="ARR soundtrack" id="3" />
        </div> */}
        </div>
      </div>
      <div className="footnote container-lg">
        <p>
          FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. FINAL FANTASY
          XIV © 2010 - 2024 SQUARE ENIX CO., LTD. All Rights Reserved.{" "}
        </p>
      </div>
    </>
  );
}

export default App;

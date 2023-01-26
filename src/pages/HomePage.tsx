import { ConnectButton } from "@rainbow-me/rainbowkit";
import snacker from "../assets/snacker.png";
import { useEffect, useState } from "react";
import DescriptionBox from "../components/DescriptionBox";
import PictureBox2 from "../components/PictureBox2";
import KillBox from "../components/KillBox";

import ape from "../assets/contentImages/ape.png";
import ape2 from "../assets/contentImages/ape2.png";
import ape3 from "../assets/contentImages/ape3.png";



export default function HomePage() {

  const contentImages = [ape, ape2, ape3];

  function textRepeat(int: number){
    let s = ""
    for(let i = 0; i < (int-1); i++){
      s += "SNACKER ";
    }
    s+= "SNACKER";
    return s;
  }

  return (
    <div className="HomePage">

      <div className="Header">
        <ConnectButton />
      </div>

      <div className="ContentContainer">

      {/* style={{marginTop: "3rem"}} */}
          <div className="Marquee">
            <div className="MarqueeInnerLeft">
              <div className="SnackerText">{textRepeat(20)}</div>
            </div>
            <pre>" "</pre>
            <div className="MarqueeInnerLeft">
              <div className="SnackerText">{textRepeat(20)}</div>
            </div>
            <pre>" "</pre>
            <div className="MarqueeInnerLeft">
              <div className="SnackerText">{textRepeat(20)}</div>
            </div>
          </div>

        <div className="CenterContainer">
          <DescriptionBox />
          <div className="ContentStyleContainer">
          <PictureBox2 text="Content Image" image={ape}/>
          <PictureBox2 text="Style Image" image={ape2}/>
          </div>
          <div className="OutputContainer">
          <PictureBox2 text="Output Image" image={ape3}/>
          </div>

          <div className="KillContainer">
          <KillBox/>
          <PictureBox2 text="Recent Kills" image={ape}/>
          </div>

          {/* <div
              style={{
                marginTop: "auto",
                marginBottom: "7rem",
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <img src={snacker}></img>
            </div> */}
        </div>

        <div className="Marquee">
            <div className="MarqueeInnerRight">
              <div className="SnackerText">{textRepeat(20)}</div>
            </div>
            <pre>" "</pre>
            <div className="MarqueeInnerRight">
              <div className="SnackerText">{textRepeat(20)}</div>
            </div>
            <pre>" "</pre>
            <div className="MarqueeInnerRight">
              <div className="SnackerText">{textRepeat(20)}</div>
            </div>
          </div>

      </div>

    </div>
  );
}

//Global tracking of scroll position
// const [scrollPosition, setScrollPosition] = useState(0);

// const handleScroll = () => {
//   const position = window.pageYOffset;
//   setScrollPosition(position);
//   // console.log(scrollPosition);
// };

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }

// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

{
  /* <div style={{ height: "200px", width: "200px", backgroundColor: "red", marginTop: "75rem", marginRight: "140rem", transform: `translateX(${scrollPosition - 2}px)` }}>test</div> */
}

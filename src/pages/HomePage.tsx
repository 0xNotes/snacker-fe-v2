import { ConnectButton } from "@rainbow-me/rainbowkit";
import snacker from "../assets/snacker.png";
import { useEffect, useState } from "react";
import DescriptionBox from "../components/DescriptionBox";
import PictureBox from "../components/PictureBox";
import { transform } from "typescript";


export default function HomePage() {

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


          <div className="Marquee">
            <div className="MarqueeInnerLeft">
              <div className="SnackerText" style={{marginTop: "3rem"}}>{textRepeat(20)}</div>
            </div>
            <div className="MarqueeInnerLeft">
              <div className="SnackerText">{textRepeat(20)}</div>
            </div>
            <div className="MarqueeInnerLeft">
              <div className="SnackerText">{textRepeat(20)}</div>
            </div>
          </div>

        <div className="CenterContainer">
          <DescriptionBox />
          <PictureBox />
          <div
            style={{
              marginTop: "auto",
              marginBottom: "7rem",
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div

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
              <div className="SnackerText" style={{marginBottom: "3rem"}}>{textRepeat(20)}</div>
            </div>
            <div className="MarqueeInnerRight">
              <div className="SnackerText">{textRepeat(20)}</div>
            </div>
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

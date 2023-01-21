import { ConnectButton } from "@rainbow-me/rainbowkit";
import snacker from "../assets/snacker.png";
import { useEffect, useState } from "react";
import DescriptionBox from "../components/DescriptionBox";
import { transform } from "typescript";


export default function HomePage() {
  return (
    <div className="HomePage">

      <div className="Header">
        <ConnectButton />
      </div>

      <div className="ContentContainer">

      <div className="SnackerText">SNACKER SNACKER SNACKER SNACKER SNACKER SNACKER SNACKER SNACKER SNACKER</div>
      
        <div className="CenterContainer">
          <div className="DescriptionText">
            <DescriptionBox />
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

          <div className="SnackerTextReverse">
          SNACKER SNACKER SNACKER SNACKER SNACKER SNACKER SNACKER SNACKER SNACKER
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

import { ConnectButton } from "@rainbow-me/rainbowkit";
import snacker from "../assets/snacker.png";
import { useEffect, useState } from "react";





export default function HomePage() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    // console.log(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="HomePage">
      {/* <div className="Socials">
        <ConnectButton />
      </div> */}
      <div className="Header">
        <ConnectButton />
      </div>
      <div style={{height: "200px", width: "200px", backgroundColor: "red", marginTop: "75rem", marginRight: "140rem", transform: `translateX(${scrollPosition -2}px)`}}>test</div> 
      <div style={{ marginTop: "auto", marginBottom: "7rem", display: "flex", width: "100%", justifyContent: "center" }}>
        <img src={snacker}></img>
      </div>
    </div>
  );
}

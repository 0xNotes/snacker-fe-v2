import { ConnectButton } from "@rainbow-me/rainbowkit";
import snacker from "../assets/snacker.png";
import { useEffect, useState } from "react";





export default function HomePage() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(position);
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
      <div style={{ marginTop: "auto", marginBottom: "7rem", display: "flex", width: "100%", justifyContent: "center" }}>
        {/* <div style={{height: "100px", width: "100px", backgroundColor: "red", marginTop: "10rem", transform: `translateY(${offset * 0.5}px)`}}></div> */}
        <img src={snacker}></img>
      </div>
    </div>
  );
}

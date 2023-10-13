import React from "react";
import Modelss from  "../videos/Model-sv.mp4";

const Backgroundvid = () => {
    return (
      <div className="background-video">
        <video autoPlay loop muted>
          <source src={Modelss} type="video/mp4" />
        </video>
      </div>
    );
  };
  
 export default Backgroundvid;
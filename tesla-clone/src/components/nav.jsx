import React from "react";
import Question from "./questionicon";

import TeslaLogo from "./teslaLogo";
import Web from "./webicon";
import User from "./usericon";
  const Nav =()=>
  {
    return (
          <div className="nav-bar">
    <p><span>$7500 federal tax credit</span> available certain tesla models . Take delivery by Dec 31 for full $7,500 credit. Reductions likely for certain vehicles in 2024</p>
    <header className="nav-items">
      <TeslaLogo />
      <nav className="nav-links">
        <ul>
          <li><button>vehicle</button></li>
          <li><button>energy</button></li>
          <li><button>charging</button></li>
          <li><button>discover</button></li>
          <li><button>shop</button></li>
        </ul>
      </nav>
      <div className="side-icons">
          <Question />
          <Web />
          <User />
        </div>
    </header>
    </div>
    );
  }
export default Nav;
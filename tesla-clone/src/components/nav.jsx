import React from "react";

function Nav() {
  return (
    <div className="nav-bar">
    <p><span>$7500 federal tax credit</span> available certain tesla models . Take delivery by Dec 31 for full $7,500 credit. Reductions likely for certain vehicles in 2024</p>
    <header className="nav-items">
      <h1>Logo</h1>
      <nav className="nav-links">
        <ul>
          <li><button>vehicle</button></li>
          <li><button>energy</button></li>
          <li><button>charging</button></li>
          <li><button>discover</button></li>
          <li><button>shop</button></li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Nav;

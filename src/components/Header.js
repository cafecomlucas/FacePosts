import React from "react";

import "./Header.css";
import facebook from "../assets/facebook.svg";

const Header = () => (
  <header>
    <ul>
      <li>
        <a href="#">
          <img src={facebook} title="Facebook" alt="Facebook logo" />
        </a>
      </li>
      <li className="perfil">
        <a href="#">Meu perfil</a>
      </li>
    </ul>
  </header>
);

export default Header;

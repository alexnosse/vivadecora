import React from "react";
import { A } from "hookrouter";
import "./side-menu.component.scss";
import Button from "../button/button.component";
import hamburgerIcon from "../../assets/images/menu-lateral.png";

const SideMenu = ({ onClick, isOpen }) => {
  const classNames = isOpen ? "-show" : "";
  return (
    <div className={`side-menu ${classNames}`}>
      <div className="content">
        <ul>
          <li>
            <A href="/" onClick={onClick}>
              Filmes Não Curados
            </A>
          </li>

          <li>
            <A href="/liked" onClick={onClick}>
              Filmes Curtidos
            </A>
          </li>
          <li>
            <A href="/disliked" onClick={onClick}>
              Filmes Não Curtidos
            </A>
          </li>
        </ul>
      </div>
      <div className="button-container">
        <Button
          onClick={onClick}
          label={"Open Menu"}
          image={hamburgerIcon}
          classNames={"button"}
        />
      </div>
    </div>
  );
};

export default SideMenu;

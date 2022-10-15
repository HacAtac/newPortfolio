import React from "react";
import Nav from "../Nav";
// import Nav from "../Nav";

function Header(props) {
  const { currentPage, setCurrentPage } = props;

  return (
    <header className="flex flex-wrap justify-between px-1 header">
      <h2>
        <a href="/" className="navActive" id="name-style">
          <span id="icon" role="img" aria-label="icon" className="navActive">
            🖥️
          </span>{" "}
          Jordan Hackworth
        </a>
      </h2>
      <div>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}></Nav>
      </div>
    </header>
  );
}

export default Header;

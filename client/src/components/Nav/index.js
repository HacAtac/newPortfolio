import React, { useEffect } from "react";

function Nav(props) {
  const { currentPage, setCurrentPage } = props;

  useEffect(() => {
    //What we've done here is used the useEffect hook to set the currentPage to the value of the currentPage prop
    //Complicated? It is! Here's the explanation: https://reactjs.org/docs/hooks-effect.html
    //The useEffect hook is used to run a piece of code based on a specific condition.
    //In this case, we're using it to set the currentPage to the value of the currentPage prop
    //When the currentPage prop changes, the useEffect hook will run and the currentPage will be set to the value of the currentPage prop
    //This is a great way to keep track of the current page in the app
    // setCurrentPage(props.currentPage); // setCurrentPage is a function that we passed down from the parent component (App)
    document.title = currentPage; //set the document title to the currentPage prop
  }, [currentPage]); //this is the second argument to useEffect. It's an array of dependencies.
  //In this case, we're passing in the currentPage prop

  //{currentPage === "about" ? "mx-2 navActive" : "mx-2"} is a ternary operator
  //that will return the string "mx-2 navActive" if the current page is "about"
  //so basically one click it runs a different className for color on click
  // ternary operator is a shortcut for if/else statements
  // ? is the condition and : is the else
  // really handy JSX syntax here! :)
  //{() => setCurrentPage("about")}
  //this is a function that will set the current page to "about"
  //when the user clicks on the about link
  //so basically when the nav buttons are clicked, were using arrow functions to set the current page to the page they clicked on

  return (
    <nav id="nav-fix">
      <ul className="flex-row mobile-view mt-3 ">
        <li className={currentPage === "about" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentPage("about")}>About Me</span>
        </li>
        <li className={currentPage === "portfolio" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentPage("portfolio")}>Portfolio</span>
        </li>
        <li className={currentPage === "contact" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentPage("contact")}>Contact</span>
        </li>
        <li className={currentPage === "resume" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentPage("resume")}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

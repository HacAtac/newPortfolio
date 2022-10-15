import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const handleClick = () => {
    switch (currentPage) {
      case "about": //this is basically saying if the current page is "about" then return the About component
        return <About />; //return the About component if the current page is "about"
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;

      default:
        return <About> Your current feed</About>;
      //this is basically saying if the current page is not "about"
      // return null; //then return null
      //this is nice because it will not render anything other than the About component
    }
  };

  return (
    //make a div styled with tailwind
    <div>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>
      <div>
        <main>{handleClick()}</main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

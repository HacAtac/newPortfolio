import React from "react";

export default function Footer() {
  //need to have a footer that will center three icons for github, linkedin, and stackoverflow
  return (
    <div className="flex justify-center">
      <a
        href="https://github.com/HacAtac "
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          id="icon-animate"
          className="animate-bounce"
          src="https://img.icons8.com/color/48/000000/github.png"
          alt="github"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/jordan-hackworth-898205217/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/color/48/000000/linkedin.png"
          alt="linkedin"
          //make this icon animate by adding tailwind classes to it
          className="animate-bounce"
        />
      </a>
      <a
        href="https://stackoverflow.com/users/16417931/hacatac"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/color/48/000000/stack-overflow.png"
          alt="stackoverflow"
          className="animate-bounce"
        />
      </a>
    </div>
  );
}

//export default function Footer() {
//Going to need a footer component that will display the current year month and day in the footer and also has favicon icons for github linkedin and stackoverflow that is centered
//}

//export default function Footer() {
//where can I find icons for github linkedin and stackoverflow?
// https://fontawesome.com/icons?d=gallery&m=free
// https://fontawesome.com/how-to-use/on-the-web/using-with/react

//how can I center the icons and text?
//we can use flexbox to center the icons and text
//by default, flexbox is set to flex-start which means the items will be left aligned
//we can change this to flex-end or center or space-between or space-around
//we can also change the direction of the flexbox to row or column
//we can also change the items to flex-start, flex-end, center, space-between, space-around

//how can I make the icons bigger?
//we can use the font-size property to make the icons bigger
//like this: font-size: 3rem; or font-size: 4rem;
//   return (
//     <div className="flex-row">
//       <footer id="footer-center">
//         <p>
//           <a
//             href="https://github.com/HacAtac"
//             target="_blank"
//             rel="noopener noreferrer" //this is a security feature that prevents a browser from opening a new tab
//           >
//             <i className="fab fa-github  " id="font-size"></i>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/jordan-hackworth-898205217/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fab fa-linkedin  icon-margin-r" id="font-size"></i>
//           </a>
//           <a
//             href="https://stackoverflow.com/users/16417931/hacatac"
//             target="_blank"
//             rel="noopener noreferrer "
//           >
//             <i className="fab fa-stack-overflow  " id="font-size"></i>
//           </a>
//         </p>
//       </footer>
//     </div>
//   );
// }

import { useState } from "react";

import "../assets/picture.css";

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = "background";
  let pictureClassName = "picture";

  if (isActive) {
    pictureClassName += " picture--active";
  } else {
    backgroundClassName += " background--active";
  }

  return (
    <div className={backgroundClassName} onClick={() => setIsActive(false)}>
      <img
        className={pictureClassName}
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
        alt="Rainbow houses in "
        src="https://react.dev/images/docs/scientists/5qwVYb1.jpeg"
      />
      <img src="https://react.dev/images/docs/scientists/5qwVYb1.jpeg" alt="" />
    </div>
  );
}

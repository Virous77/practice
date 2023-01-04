import React, { useState } from "react";
import ExpandImage from "./components/ExpandImage";
import Project from "./components/Project";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle && <ExpandImage />}
      {!toggle && <Project />}
      <p
        className="fixed top-5 left-5 bg-white py-1.5 px-3.5 rounded-md text-black cursor-pointer text-base"
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </p>
    </>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import { yogas } from "../utils/data";
import { RxCross1 } from "react-icons/rx";

const Project = () => {
  const [info, setInfo] = useState(yogas[0]);

  return (
    <>
      <main className="flex gap-2 items-center w-4/5 m-auto yoga">
        {yogas.map((yoga) => (
          <div
            className="yogaList"
            key={yoga.id}
            onMouseEnter={() => setInfo(yoga)}
            onMouseLeave={() => setInfo("")}
          >
            <img src={yoga.image} alt={yoga.name} className="cursor-pointer" />
            <p
              className={` ${
                yoga.word === "A"
                  ? "first subMain"
                  : yoga.word === "H"
                  ? "third subMain"
                  : "second subMain"
              }`}
            >
              {yoga.name}
            </p>
          </div>
        ))}
      </main>

      {info && (
        <>
          <div className="overLay"></div>

          <section
            className="yogaInfo w-4/5 m-auto"
            onMouseEnter={() => setInfo(info)}
            onMouseLeave={() => setInfo("")}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-white text-lg uppercase underline">
                {info.name}
              </h2>
              <span onClick={() => setInfo("")}>
                <RxCross1 color="white" size={23} cursor={"pointer"} />
              </span>
            </div>

            <div className="contentBar">
              <img src={info.image} alt="" />
              <p className="text-white leading-tight">{info.about}</p>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Project;

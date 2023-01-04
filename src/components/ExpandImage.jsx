import React, { useState } from "react";
import { data } from "../utils/data";
import { RxCross1 } from "react-icons/rx";

const ExpandImage = () => {
  const [fullImage, setFullImage] = useState("");
  const [number, setNumber] = useState(null);

  return (
    <>
      {!fullImage && (
        <main className="main flex gap-2 items-center w-4/5 m-auto">
          {data.map((imgs) => (
            <div
              key={imgs.id}
              className="relative"
              onClick={() => setFullImage(imgs)}
              onMouseEnter={() => setNumber({ id: imgs.id, word: imgs.word })}
              onMouseLeave={() => setNumber(null)}
            >
              <img
                src={imgs.image}
                alt={imgs.name}
                className="opacity-80 h-96 cursor-pointer"
              />
              <p className=" absolute z-10 text-white uppercase top-2/4 text-2xl left-1/2">
                {imgs.name}
              </p>
              {number && number.id !== imgs.id && (
                <span className="opacity top-0 left-0 w-full h-full cursor-pointer absolute z-10"></span>
              )}
              {number && number.id === imgs.id && (
                <h1 className="absolute text-white left-1/2 z-20 cursor-pointer">
                  {number.word}
                </h1>
              )}
            </div>
          ))}
        </main>
      )}

      {fullImage && (
        <section className="relative h-screen m-auto flex items-center justify-center w-full section">
          <img src={fullImage.image} alt="" className="w-full" />
          <div className="fullName absolute w-11/12 flex items-center justify-between z-10">
            <h2 className="text-white text-3xl font-black">AYUSH</h2>
            <span onClick={() => setFullImage("")}>
              <RxCross1 color="white" size={30} cursor={"pointer"} />
            </span>
          </div>
        </section>
      )}
    </>
  );
};

export default ExpandImage;

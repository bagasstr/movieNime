import Image from "next/image";
import React from "react";

const Card = ({ image, judul }) => {
  return (
    <>
      <div className="shadow-md w-[145px]">
        <div className="">
          <Image
            src={image}
            width={1000}
            height={1000}
            alt="image"
            className="w-full"
          />
        </div>
        <div className="px-2">
          <h1 className="text-text font-semibold">{judul}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;

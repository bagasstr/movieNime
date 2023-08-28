import React, { useEffect, useState } from "react";
import Card from "./element/Card";
import axios from "axios";

const AnimeOnGoind = () => {
  const [getData, setData] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      const res = await axios.get("http://localhost:3000/api/movie");
      const data = await res.data;
      setData(data.onGoing);
    };
    getMovie();
  }, []);
  //   console.log(getData);
  return (
    <>
      <div className="w-full mt-10">
        <div className="contener">
          <div className="flex items-center gap-x-2">
            <h1 className="text-accent font-semibold text-3xl">OnGoing</h1>
            <p className="text-accent2 font-medium">Anime berlanjut</p>
          </div>
          <div className="grid grid-cols-4 justify-center gap-x-16 gap-y-8 ">
            {getData &&
              getData.map((val, index) => (
                <>
                  <Card image={val.image.src} judul={val.title} />
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeOnGoind;

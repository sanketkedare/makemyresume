import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const HomeProcess = () => {
  return (
    <div className="h-[100vh] p-4 bg-[#091f1f2a] ">
      {/* Proccess */}
      <div className="rounded-xl border-2 border-sky-600 h-[100%]">
        <h1 className="text-white text-center font-bold text-[40px] my-10">
          How to use ?
        </h1>

        <div className="flex justify-center items-center h-[20%]">
          <div className="flex text-white justify-evenly items-center lg:w-[70%]">
            <div
              className=" lg:w-[200px]  w-[100px] 
                            bg-gradient-to-r from-violet-800 to-blue-600 
                            border-2 border-white p-3 rounded-full 
                            flex justify-center items-center 
                            lg:text-xl text-sm  font-bold"
            >
              <h1 className="text-white bg-transparent text-center">
                Fill Your Details
              </h1>
            </div>

            <FaLongArrowAltRight />

            <div
              className=" lg:w-[200px]  w-[100px] 
                            bg-gradient-to-r from-blue-600 to-red-700 
                            border-2 border-white p-3 rounded-full 
                            flex justify-center items-center 
                            lg:text-xl text-sm  font-bold"
            >
              <h1 className="text-white bg-transparent text-center">
                Select Template
              </h1>
            </div>

            <FaLongArrowAltRight />

            <div
              className=" lg:w-[200px] w-[100px] 
                            bg-gradient-to-r from-red-800 to-yellow-600 
                            border-2 border-white p-3 rounded-full 
                            flex justify-center items-center 
                            lg:text-xl text-sm font-bold"
            >
              <h1 className="text-white bg-transparent text-center">
                Download Resume
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[80%] h-[50%] flex justify-center items-start m-auto overflow-y-auto py-5">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            voluptatibus dolorum sunt cum pariatur atque commodi iure cupiditate
            tenetur saepe odit quibusdam, animi ipsum facilis ullam rem? Fugiat,
            explicabo commodi reprehenderit nesciunt, animi ex soluta atque sunt
            magni delectus nobis corrupti sit. Temporibus, architecto. Iste,
            quam? Dicta, placeat nihil qui porro dolore sed repellat natus
            fugiat minima eaque itaque nisi libero doloribus minus? Animi cum
            voluptas veritatis quod veniam. Enim non quod tenetur corrupti
            similique vel voluptatum atque, temporibus architecto et unde
            accusantium deleniti. Repellendus, quos hic. Quasi quam incidunt
            architecto culpa obcaecati itaque facere, iste officia accusantium
            atque doloribus et eius unde libero aperiam, eos qui vero, molestias
            ipsam amet iusto repellat labore nemo ipsum. Architecto quae
            deserunt, fugiat id perspiciatis ducimus, magni placeat commodi
            numquam dolorum aliquid necessitatibus ad molestias aspernatur
            tenetur sunt rerum voluptatum sapiente dolore blanditiis ipsam vero
            dolores. Deserunt veritatis, architecto vitae dignissimos pariatur
            tempore perspiciatis sunt eligendi fuga exercitationem eaque, omnis
            ullam! Vero laboriosam tenetur fuga, corporis magni molestiae
            consectetur odio ipsa iusto hic pariatur eligendi nemo expedita
            corrupti praesentium obcaecati repudiandae non ducimus natus sunt
            vitae, alias dolorum quod laborum! Molestiae odit explicabo
            aspernatur voluptate, quibusdam accusamus veritatis cupiditate
            deserunt, veniam nobis reiciendis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeProcess;

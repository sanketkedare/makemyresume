import React from "react";

import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div id="download" className="h-[100vh] ">
      
      <Link to={"/templates"} className="bg-inherit">
        <button className="bg-green-400 p-4 m-3 border-2 border-black rounded-2xl text-black font-bold lg:fixed top-16 hover:bg-sky-600">
          Back To Templates
        </button>
      </Link>


      {/* Sample Template */}
      <div className="flex justify-center p-3 ">
        <div className="w-[50vh] h-[70vh] border-2 border-black p-3 bg-inherit">
          <div className="h-[100%] w-[100%] flex bg-gray-300 p-3">
            {/* Left Section */}
            <div className="w-[30%] bg-inherit pr-3">
              <div className="bg-inherit h-[25%] w-full">
                <div className="bg-blue-500 rounded-full lg:text-[0.7vw] text-[2.5vw] w-[50px] h-[50px] m-auto flex justify-center items-center">
                  Photo
                </div>
                <h1 className="bg-inherit pt-3 lg:text-[0.7vw] text-[2.5vw] text-center font-bold">
                  Name Name
                </h1>
                <h4 className="bg-inherit text-center text-[8px]"> Role</h4>
              </div>

              <div className="bg-inherit h-[25%] w-full flex justify-center items-start bg-pink-300">
                <div className="bg-inherit">
                  <h1 className="p-1 w-[80%] m-2 bg-yellow-950 text-center uppercase lg:text-[0.4vw] text-[1.5vw] text-white font-bold rounded-xl">
                    Contact
                  </h1>
                  <table className="bg-inherit">
                    <tbody className="bg-inherit">
                      <tr className="bg-inherit my-1">
                        <th className="bg-inherit text-[6px] w-[20%]">0</th>
                        <td className="bg-inherit text-[6px] w-[60%]">
                          Loremipsumdol.
                        </td>
                      </tr>
                      <tr className="bg-inherit my-1">
                        <th className="bg-inherit text-[6px] w-[20%]">0</th>
                        <td className="bg-inherit text-[6px] w-[60%]">
                          Loremipsumdol.
                        </td>
                      </tr>
                      <tr className="bg-inherit my-1">
                        <th className="bg-inherit text-[6px] w-[20%]">0</th>
                        <td className="bg-inherit text-[6px] w-[60%]">
                          Loremipsumdol.
                        </td>
                      </tr>
                      <tr className="bg-inherit my-1">
                        <th className="bg-inherit text-[6px] w-[20%]">0</th>
                        <td className="bg-inherit text-[6px] w-[60%]">
                          Loremipsumdol.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-inherit h-[25%] w-full flex justify-center items-start bg-pink-300">
                <div className="bg-inherit">
                  <h1 className="p-1 w-[80%] m-2 bg-yellow-950 text-center uppercase lg:text-[0.4vw] text-[1.5vw] text-white font-bold rounded-xl">
                    Contact
                  </h1>
                  <table className="bg-inherit">
                    <tbody className="bg-inherit">
                      <tr className="bg-inherit my-1">
                        <th className="bg-inherit text-[6px] w-[20%]">0</th>
                        <td className="bg-inherit text-[6px] w-[60%]">
                          Loremipsumdol.
                        </td>
                      </tr>
                      <tr className="bg-inherit my-1">
                        <th className="bg-inherit text-[6px] w-[20%]">0</th>
                        <td className="bg-inherit text-[6px] w-[60%]">
                          Loremipsumdol.
                        </td>
                      </tr>
                      <tr className="bg-inherit my-1">
                        <th className="bg-inherit text-[6px] w-[20%]">0</th>
                        <td className="bg-inherit text-[6px] w-[60%]">
                          Loremipsumdol.
                        </td>
                      </tr>
                      <tr className="bg-inherit my-1">
                        <th className="bg-inherit text-[6px] w-[20%]">0</th>
                        <td className="bg-inherit text-[6px] w-[60%]">
                          Loremipsumdol.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-inherit h-[25%] w-full flex justify-center items-start bg-pink-300">
                <div className="bg-inherit">
                  <h1 className="p-1 w-[80%] m-2 bg-yellow-950 text-center uppercase lg:text-[0.4vw] text-[1.5vw] text-white font-bold rounded-xl">
                    Contact
                  </h1>
                  <table className="bg-inherit">
                    <tbody className="bg-inherit">
                      <tr className="bg-inherit my-1">
                        <th className="bg-inherit text-[6px] w-[20%]">0</th>
                        <td className="bg-inherit text-[6px] w-[60%]">
                          Loremipsumdol.
                        </td>
                      </tr>
                      <tr className="bg-inherit my-1">
                        <th className="bg-inherit text-[6px] w-[20%]">0</th>
                        <td className="bg-inherit text-[6px] w-[60%]">
                          Loremipsumdol.
                        </td>
                      </tr>
                      <tr className="bg-inherit my-1">
                        <th className="bg-inherit text-[6px] w-[20%]">0</th>
                        <td className="bg-inherit text-[6px] w-[60%]">
                          Loremipsumdol.
                        </td>
                      </tr>
                      <tr className="bg-inherit my-1">
                        <th className="bg-inherit text-[6px] w-[20%]">0</th>
                        <td className="bg-inherit text-[6px] w-[60%]">
                          Loremipsumdol.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Rigth Section */}
            <div className="w-[70%] bg-inherit">
              {/* About Me */}
              <div className="bg-inherit">
                <h1 className="bg-inherit font-bold lg:text-[0.7vw] text-[2.5vw] border-b-2 w-full border-black">
                  About Me
                </h1>
                <p className="bg-inherit lg:text-[0.5vw] text-[2vw] py-2 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam dolorum porro suscipit itaque unde odio nesciunt
                  repellendus praesentium at modi?
                </p>
              </div>

              {/* Educationn */}
              <div className="bg-inherit">
                <h1 className="bg-inherit font-bold lg:text-[0.7vw] text-[2.5vw] border-b-2 w-full border-black">
                  Education
                </h1>
                <div className="bg-inherit">
                  <div className="bg-inherit my-2">
                    <h1 className="bg-inherit font-bold text-[8px] ">
                      School Name
                    </h1>
                    <h1 className="bg-inherit text-[8px] ">2020-2024</h1>
                    <p className="bg-inherit text-[8px] text-justify">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, debitis!
                    </p>
                  </div>
                  <div className="bg-inherit my-2">
                    <h1 className="bg-inherit font-bold text-[8px] ">
                      School Name
                    </h1>
                    <h1 className="bg-inherit text-[8px] ">2020-2024</h1>
                    <p className="bg-inherit text-[8px] text-justify">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, debitis!
                    </p>
                  </div>
                  <div className="bg-inherit my-2">
                    <h1 className="bg-inherit font-bold text-[8px] ">
                      School Name
                    </h1>
                    <h1 className="bg-inherit text-[8px] ">2020-2024</h1>
                    <p className="bg-inherit text-[8px] text-justify">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, debitis!
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-inherit">
                <h1 className="bg-inherit font-bold lg:text-[0.7vw] text-[2.5vw] border-b-2 w-full border-black">
                  Experience
                </h1>
                <div className="bg-inherit">
                  <div className="bg-inherit my-2">
                    <h1 className="bg-inherit font-bold text-[8px] ">
                      Work Name
                    </h1>
                    <h1 className="bg-inherit text-[8px] ">2020-2024</h1>
                    <p className="bg-inherit text-[8px] text-justify">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, debitis!
                    </p>
                  </div>
                  <div className="bg-inherit my-2">
                    <h1 className="bg-inherit font-bold text-[8px] ">
                      Work Name
                    </h1>
                    <h1 className="bg-inherit text-[8px] ">2020-2024</h1>
                    <p className="bg-inherit text-[8px] text-justify">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, debitis!
                    </p>
                  </div>
                  <div className="bg-inherit my-2">
                    <h1 className="bg-inherit font-bold text-[8px] ">
                      Work Name
                    </h1>
                    <h1 className="bg-inherit text-[8px] ">2020-2024</h1>
                    <p className="bg-inherit text-[8px] text-justify">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, debitis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Download;

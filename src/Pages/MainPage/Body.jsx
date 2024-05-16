import {  useRef } from "react";
import toggleMode from "../../services/toggleMode";
import CentralBankRate from "./CentralBankRate";
import Colors from "../../hooks/Colors";

const Body = () => {

  const toggleButtonRChildContianerRef = useRef();
  const [colorPalette, setColorPalette] = Colors();

  const toggleModeHandle = (e)=>{
      const colors  = toggleMode(e);
      setColorPalette(colors)
  }

 
  return (
    <>
      <div 
      className="w-screen h-auto overflow-hidden  lg:px-[2.5vw] lg:py-[6vh] bg-opacity-60"
      style={{ backgroundColor: colorPalette.background_Color}}
      >
        <div
          className=" lg:w-[95vw] lg:h-[88vh] rounded-md shadow-md shadow-gray-400 
          md:py-[3%] lg:py-0 ring-1 ring-purple-300  overflow-hidden"
          style={{ backgroundColor: colorPalette.container_Color}}
        >
          <div className="flex justify-between">
            <h5 className="text-left font-mono font-black py-5 pl-[2vw] md:text-[1.5rem] lg:text-[1.2rem]"
            style={{ color: colorPalette.text_color}}
            >
              LB Currency Converter
            </h5>
            <div 
             className="bg-white ring-2 ring-purple-800 w-[5rem] h-[2rem] mt-[1rem] mr-[2rem]
             hover:cursor-pointer"
             style={{
              background: "#e0e0e0",
              boxShadow: "-20px -20px 60px #bebebe, 20px 20px 60px #ffffff"
             }} 
             onClick={(e)=> toggleModeHandle(e)}
             >
                <div
                className="w-[1.5rem] h-[1.5rem] bg-black my-[.25rem] relative
                 backdrop-blur-sm bg-opacity-65 hover:bg-opacity-100 border border-gray-10"
                 ref={toggleButtonRChildContianerRef}
                style={{position: "relative", left: ".5rem"}}
              ></div>
            </div>
          </div>
          <hr />
          <CentralBankRate colorPalette={colorPalette} />
        </div>
      </div>
    </>
  );
};

export default Body;

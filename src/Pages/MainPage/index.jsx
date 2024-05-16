import { useEffect, useRef } from "react";
import Animations from "./Animations";
import CurrencyConverter from "./CurrencyConverter";
import "./mainPage.css";


const CurrencyConverterApp = () => {
const animationRef = useRef();
  useEffect(()=>{
    setTimeout(() => {
      let count = 1;
      if (count < 100) {
        
        setInterval(() => {
          count += 1;
         animationRef.current.style.top = `-${count}vw`;
         animationRef.current.classList.add('transition-element');
         animationRef.current.classList.add('active');
        }, 5);
      }
    }, 4000);
  })
  return (
    <>
      <div className="relative h-[110vh]" >
        <CurrencyConverter />
        <div className=" absolute top-0 left-0" ref={animationRef}>
          <Animations />
        </div>
      </div>
    </>
  );
};

export default CurrencyConverterApp;

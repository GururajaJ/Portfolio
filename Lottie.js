import React from "react";
import { Lottie } from "lottie-react";
import animationData from "./animations/lottie.json";

export default function Lotti(){
     return(
        <>
           <div  >
            <Lottie animationData={animationData} loop={true} />
        </div>
        </>
     );
}
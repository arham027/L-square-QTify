import React, { useState,useEffect} from "react";
import { useSwiper } from "swiper/react";
import Styles from "./CarouselLeftNavigation.css"
import {ReactComponent as LeftArrow} from "../../../assets/Group 3741.svg";

export default function CarouselLeftNavigation(){
    const swiper=useSwiper();
    const [isBeginning,setIsBeginning]=useState(swiper.isBeginning);

    useEffect(() => {
      swiper.on("slideChange", function(){
          setIsBeginning(swiper.isBeginning);
      });
  });
    return(
        <div className={Styles.leftNavigation}>
          {!isBeginning && (
            <LeftArrow onClick={()=>{
                swiper.slidePrev();
            }}
            />
    )}
        </div>
    );
}
import React, {useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import Styles from "./CarouselRightNavigation.css"
import { ReactComponent as RightArrow } from "../../../assets/Group 3740.svg";


export default function CarouselRightNavigation(){
    const swiper=useSwiper();
    const [isEnd,setIsEnd]=useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd);
        });
    });
    //     const handleSlideChange = () => {
    //       setIsEnd(swiper.isEnd);
    //     };
    
    //     swiper.on("slideChange", handleSlideChange);
    
    //     return () => {
    //       // Cleanup the event listener when the component unmounts
    //       swiper.off("slideChange", handleSlideChange);
    //     };
    //   }, [swiper]);
    return(
        <div className={Styles.rightNavigation}>
            {!isEnd && (
            <RightArrow onClick={()=>{
                swiper.slideNext();
            }}
            />
    )}
        </div>
    );
}
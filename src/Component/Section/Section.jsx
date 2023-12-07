
import React ,{useState,useEffect} from "react";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from  "./Section.css";
// import { useEffect } from "react";
import Filters from "../Filter/Filter";

export default function Section ({title,data,filterSource,type}){
    const [filters,setFilters]=useState([{key:"all",label:"All"}]);
    const [selectedFilterIndex,setSelectedFilterIndex]=useState(0);
    const [carouselToggle,setCarouselToggle]=useState(true);

    useEffect(() => {
        if (filterSource) {
            filterSource().then((response) => {
                const { data } = response;
                setFilters([...filters, ...data]);
            });
        }
    }, [filterSource, filters]);
    

    const showFilters=filters.length > 1;
    const cardsToRender=data.filter((card)=>
    showFilters && selectedFilterIndex !==0
    ? card.genre.key === filters[selectedFilterIndex].key: card
    );

    const handleToggle=()=>{
        setCarouselToggle((prevState)=>!prevState);
    }
    return(
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toogleText} onClick={handleToggle}>
                    {!carouselToggle?"Collapse All":"Show All"}
                </h4>
            </div>
            {showFilters && (
                <div className={styles.filterWrapper}>
                    <Filters
                    filters={filters}
                    selectedFilteredIndex={selectedFilterIndex}
                    setSelectedFilteredIndex={setSelectedFilterIndex}
                    />
                    </div>
            )}
            {data.length===0?(
                <CircularProgress/>
            ):(
                <div className={styles.cardsWrapper}>
                    {!carouselToggle?(
                        <div className={styles.wrapper}>
                            {cardsToRender.map((ele)=>(
                            <Card data={ele} type={type}/>

                        ))}
                        </div>
                    ):(
                        <Carousel
                        data={cardsToRender}
                        renderComponent={(data)=><Card data={data} type={type}/>}
                        />
                    )}

                </div>
            )}
        </div>
    )
}
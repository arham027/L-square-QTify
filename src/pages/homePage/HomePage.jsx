import React from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../../Component/Hero/Hero";
import Section from "../../Component/Section/Section";
import Styles from "./HomePage.css";
import { fetchFilters} from "../../Component/api/api";

function HomePage(props){
    const {data}=useOutletContext();
    const {topAlbums,newAlbums,songs}=data;
    return<>
    <Hero/>
    <div className={Styles.wrapper}>
        <Section title="Top Albums"  data={topAlbums} type="album"/>
        <Section title="New Albums"  data={newAlbums} type="album"/>
        <Section title="Songs"  data={songs} filterSource={fetchFilters}  type="songs"/>



    </div>
   </>

}

export default HomePage
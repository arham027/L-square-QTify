import React from "react";
import Styles from "./Card.css";
import {Tooltip,Chip} from '@mui/material';
import { Link } from "react-router-dom";

function Card ({data,type}){
    const getCard=(type)=>{
    switch(type){
            case "album":{
    const {image,title,songs,slug,follows}= data;

    return(
        <Tooltip title={`${songs.length} songs`} placement="top" arrow>
        <Link to={`/album/${slug}`}>
            <div className={Styles.wrapper}>
                <div className={Styles.card}>
                <div className={Styles.cardimgframe}>
                    <img className={Styles.cardimg} src={image} alt="album" loading="lazy" />
                    </div>
                    <div className={Styles.banner}>
                        <Chip
                            label={`${follows} Follows`}
                            size="small"
                            className={Styles.chip}
                        />
                    </div>
                </div>
                <div className={Styles.titleWrapper}>
                    <p>{title}</p>
                </div>
            </div>
        </Link>
    </Tooltip>
    );
}
            case "song":{
    const {image,likes,title}=data;
    return(
        <div className={Styles.wrapper}>
        <div className={Styles.card}>
            <img src={image} alt="song" loading="lazy" />
            <div className={Styles.banner}>
                <div className={Styles.pills}>
                    <p>{likes} Likes</p>
                </div>
            </div>
        </div>
        <div className={Styles.titleWrapper}>
            <p>{title}</p>
        </div>
    </div>
    );
  
}
            default:
                console.error(`Invalid card type: ${type}`);
                  return <></>;
}
};
return getCard(type);
}

export default Card;
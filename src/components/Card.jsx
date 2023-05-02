import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import video from "../assets/movie.mov"
import {IoPlayCircleSharp} from "react-icons/io5";
import {RiThumbUpFill, RiThumbDownFill} from "react-icons/ri";
import {BsCheck} from "react-icons/bs"
import {AiOutlinePlus} from "react-icons/ai"
import {BiChevronDown} from "react-icons/bi"
function Card({movieData, isLiked = false}) {
    const [isHovered, setisHovered] = useState(false);
    const navigate = useNavigate();
  return (
  <Container onMouseEnter={() => setisHovered(true)} onMouseLeave={() =>setisHovered(false)}>
    <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt= "movie"
    />
    {isHovered && (
            <div className="hover">
                <div className="image-vide-container">
                    <img
                    src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
                    alt= "movie"
                    onClick={() => navigate("/player")}
                     />
                     <video src={video} 
                     autoPlay loop muted onClick={() => navigate('/player')}  
                     />
                </div>
                <div className="info-container flex column">
                    <h3 className='name' onClick={() => navigate("/player")}>
                        {movieData.name}
                    </h3>
                    <div className="icons flex j between">
                        <div className="controls flex"></div>
                        <IoPlayCircleSharp title="play"
                        onClick={() => navigate("/player")} 
                        />
                        <RiThumbUpFill title="Like" />
                        <RiThumbDownFill title="Dislike" />
                        { isLiked ? (
                                <BsCheck title="Remove From List" /> 
                        ) :(
                                <AiOutlinePlus title="Add to my list" />
                            
                        )}
                    </div>
                    <div className="info">
                        <BiChevronDown title= "More Info" />
                    </div>
                </div>
            </div>
        )
    }
  </Container>
   
  );  
}
const Container = styled.div``;

export default Card;
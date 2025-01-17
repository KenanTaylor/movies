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
                <div className="genres flex">
                    <ul className="flex">
                        {movieData.genres.map((genre) => {
                        <li> {genre}
                        </li>
                    })}
                    </ul>
                </div>
            </div>
        )
    }
  </Container>
   
  );  
}
const Container = styled.div`
    max-width: 230px;
    width: 230px;
    height: 100%;
    cursor: pointer;
    position: relative;
    img{
        border-radius: 0.2rem;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
    .hover{
        z-index: 90;
        height: max-content;
        width: 20rem;
        position: absolute:
        top: -18vh;
        left: 0;
        border-radius: 0.3rem;
        box-shadow:rgba(0,0,0, 0.75) 0px 3px 10px;
        background-color: #181818;
        transition: 0.3s ease-in-out;
        .image-video-container{
            position: relative;
            height: 140px;
            img{
                width: 100%;
                height: 140px;
                object-fit: cover;
                border-radius: 0.3rem;
                top: 0;
                z-index: 4;
                position: absolute;
            }
            video{
                display: none;
                width: 100%;
                height: 140px;
                object-fit: cover;
                border-radius: 0.3rem;
                top: 0;
                z-index: 5;
                position: absolute;
            }
        }
    }


`;

export default Card;
import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../Actions/DetailAction";
import { Link } from "react-router-dom";
import { popUp } from "../Animation";
import { smallImage } from "../util";

const Game = ({ name, released, image, id }) => {
  const stringPathID = id.toString();

  const dispatch = useDispatch();
  const loadEventHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={stringPathID}
      onClick={loadEventHandler}
    >
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathID}`}
          src={smallImage(image, 640)}
          alt="Games"
        ></motion.img>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  cursor: pointer;
`;

export default Game;

import React from "react";

// STYLE AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";

interface IGameProps {
  name: string;
  released: string;
  id?: number;
  image: string;
}

function Game(props: IGameProps) {
  const { name, released, image } = props;
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  img {
    width: 100%;
    min-height: 60vh;
    object-fit: cover;
    border-radius: 3px;
  }
  text-align: center;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
`;

export default Game;

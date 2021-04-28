import React, { useEffect } from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../../src/actions/gamesAction";

// STYLE AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";

//Import Components
import Game from "../components/Game";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // get data
  const { popular, newGames, upComing } = useSelector(
    (state: any) => state.games
  );
  return (
    <StyledGameList>
      <h2>Upcoming Games</h2>
      <StyledGames>
        {upComing.map((game: any) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </StyledGames>

      {/* Popular Games */}
      <h2>Popular Games</h2>
      <StyledGames>
        {popular.map((game: any) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </StyledGames>

      {/* New Games */}
      <h2>New Games</h2>
      <StyledGames>
        {newGames.map((game: any) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </StyledGames>
    </StyledGameList>
  );
}

const StyledGameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;

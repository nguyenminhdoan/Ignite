const initialState = {
  popular: [],
  newGames: [],
  upComing: [],
};

const gamesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upComing: action.payload.upcomingGames,
      };

    default:
      return { ...state };
  }
};

export default gamesReducer;

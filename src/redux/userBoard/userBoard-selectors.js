export const selectIsLoading = (state) => state.boards.isLoading;

export const selectBoards = (state) => state.boards.items;

export const selectError = (state) => state.boards.error;

export const selectCurrentBoard = (state) => state.boards.currentBoard;

export const selectCurrentBoardData = (state) =>
  state.boards.items[state.boards.currentBoard];

export const getFilter = (state) => state.filter.filter;

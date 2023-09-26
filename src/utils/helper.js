export const createComment = (comment) => {
  return {
    id: Math.random().toString(36).substring(2, 9),
    userComment: comment,
  };
};

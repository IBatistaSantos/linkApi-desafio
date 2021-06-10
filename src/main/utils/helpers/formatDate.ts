const formatDate = (date: Date): Date => {
  return new Date(
    `${date.getFullYear()}-${
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }-${date.getDate()}`
  );
};

export { formatDate };

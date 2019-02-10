export default (text, trimLength) => {
  return (
    text.length > trimLength ? text.substring(0, trimLength - 3) + "..." : text
  );
};

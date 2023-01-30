const offsetY = element => {
  const rect = element.getBoundingClientRect(),
    scrollTop = window.scrollY;
  return rect.top + scrollTop;
};

export default offsetY;

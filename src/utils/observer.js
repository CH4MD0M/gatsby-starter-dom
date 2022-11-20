const observerOption = {
  threshold: 0.4,
  rootMargin: "-200px 0px 0px 0px",
};

const getIntersectionObserver = (setState) => {
  let direction;
  let prevYposition = 0;

  const checkScrollDirection = (prevY) => {
    if (window.scrollY === 0 && prevY === 0) return;
    else if (window.scrollY > prevY) direction = "down";
    else direction = "up";

    prevYposition = window.scrollY;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      checkScrollDirection(prevYposition);

      if (
        (direction === "down" && !entry.isIntersecting) ||
        (direction === "up" && entry.isIntersecting)
      ) {
        setState(entry.target.id);
      }
    });
  }, observerOption);

  return observer;
};

export default getIntersectionObserver;

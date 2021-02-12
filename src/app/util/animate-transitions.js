export const playTransition = data => {
  return new Promise((resolve, reject) => {
    // console.log(data.animation);
    // console.log(data.node);
    data.node.classList.add("animate__animated", "animate__" + data.animation);
    data.node.addEventListener(
      "animationend",
      () => {
        data.node.classList.remove(
          "animate__animated",
          "animate__" + data.animation
        );
        resolve();
      },
      { once: true }
    );
  });
};

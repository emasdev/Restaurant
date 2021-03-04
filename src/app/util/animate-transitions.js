const playTransition = data => new Promise(resolve => {
  data.node.classList.add('animate__animated', `animate__${data.animation}`);
  data.node.addEventListener(
    'animationend',
    () => {
      data.node.classList.remove(
        'animate__animated',
        `animate__${data.animation}`,
      );
      resolve();
    },
    { once: true },
  );
});

export default playTransition;

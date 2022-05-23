let pause;

export const throttle = (callback, interval) => {
  if (pause) return;

  pause = true;

  setTimeout(() => {
    callback();

    pause = false;
  }, interval);
};

export const hoverEffects = {
  hovering: {
    scale: 1.1,
    zIndex: 30,
    // filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    // originX: 0.5,
    // originY: 0.5,
    transition: { type: "spring", stiffness: 200, damping: 17 },
  },
  clicking: {
    scale: 0.9,
    zIndex: 30,
    // filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    // originX: 0.5,
    // originY: 0.5,
    transition: { type: "spring", stiffness: 200, damping: 17 },
  },
  clicked: {
    scale: 1,
    zIndex: -1,
    // filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.25))",
    // originX: 0.5,[]
    // originY: 0.5,
    rotate: 360,
    transition: { duration: 1, ease: "linear" },
  },
  initial: {
    scale: 1,
    zIndex: -1,
    // filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.25))",
    // originX: 0.5,
    // originY: 0.5,
  },
};

export const linearRotation = {
  rotating: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 7,
      delay: 1,
      ease: "linear",
    },
  },
  stopped: {
    rotate: 0,
    transition: {
      ease: "linear",
    },
  },
};

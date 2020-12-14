module.exports = {
  purge: ["./pages/**/*.{js,res,bs.js}", "./components/**/*.{js,res,bs.js}"],
  variants: {
    accessibility: ({ after }) => after(["focus-within"]),
    extend: {
      opacity: ["active"],
    },
  },
};

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/mtm-prototype/" : "/",
};

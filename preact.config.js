export default (config) => {
  const { PUBLIC_PATH } = process.env;
  if (PUBLIC_PATH) {
    config.output.publicPath = PUBLIC_PATH;
  }
};

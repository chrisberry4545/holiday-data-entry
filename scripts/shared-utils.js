module.exports = {
  getPartnerNames: (processArgs) => {
    return processArgs.slice(2)[0];
  },
};

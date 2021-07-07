let envVariables = require('../../.env.lcl.js');

if (process.env.ENVIRONMENT) {
  /* eslint-disable */
  envVariables = require(`../../.env.${process.env.ENVIRONMENT}.js`);
}

export const { API_ROOT } = envVariables;

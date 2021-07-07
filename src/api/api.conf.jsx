let envVariables = {};
const env = process.env.ENVIRONMENT || 'lcl';
/* eslint-disable */
envVariables = require(`../../.env.${env}.js`);

export const { API_ROOT } = envVariables;

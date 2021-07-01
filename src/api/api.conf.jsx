let envVariables = {};

/* eslint-disable */
envVariables = require(`../../.env.${process.env.ENVIRONMENT}.js`);

export const { API_ROOT } = envVariables;

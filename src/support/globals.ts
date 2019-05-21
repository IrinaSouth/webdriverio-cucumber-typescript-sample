const path = require('path');

export namespace Globals {
    const env = process.env.ENV || 'ci';

    //provide edge api url
    export const edgeAPI = "https://";
    export const edgeAPI_username = " ";
    export const edgeAPI_password = " ";
    export const featureService = '';
}

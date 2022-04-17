'use strict';

require('dotenv').config({path: "test/.env-test"});
const ScreaminServer = require('@screaminsauce/screaminserver');
const AuthModuleApi = require('@screaminsauce/scrmn_auth').api;
const AuthModuleGui = require('@screaminsauce/scrmn_auth').gui
const GspfModuleApi = require('@screaminsauce/scrmn_gspfscreen').api;
const GspfModuleGui = require('@screaminsauce/scrmn_gspfscreen').gui;

let server = new ScreaminServer({
    name: 'screaminapps',
    options: {
        port: 3000,
        host: 'localhost'
    },
    modules: [AuthModuleApi, AuthModuleGui, GspfModuleApi, GspfModuleGui],
    auth: {
        secret: process.env.SCREAMIN_AUTH_KEY,
        cookieDurationInMillis: 1000 * 60 * 60 * 24 * 30,
        cookieName: "screaminCookie",
        isSecure: false
    },
    defaultGuiRoute: "/public/auth/login.html"
});

process.on('unhandledRejection', (err)=>{
    console.log(err);
    process.exit(1);
})

server.startup();
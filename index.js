'use strict';
const ScreaminServer = require('@screaminsauce/screaminserver');
const AuthModule = require('@screaminsauce/scrmn_auth');
const GspfScreenModule = require('@screaminsauce/scrmn_gspfscreen');

let server = new ScreaminServer({
    name: 'screaminapps',
    type: 'both',
    options: {
        port: 3000,
        host: 'localhost'
    },
    modules: [AuthModule, GspfScreenModule],
    wwwDir: 'public',
    auth: {
        secret: process.env.SCREAMIN_AUTH_KEY,
        cookieName: "screaminCookie",
        redirectTo: false,
        isSecure: false
    }
});

process.on('unhandledRejection', (err)=>{
    console.log(err);
    process.exit(1);
})

server.startup();
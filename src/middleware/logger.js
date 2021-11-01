'use strict';

function logger(req, res, next) {
    console.log('REQUEST: ', req.method, req.path);
    // call next so that tha function in the next line can do its work 
    next();

}

module.exports = logger;

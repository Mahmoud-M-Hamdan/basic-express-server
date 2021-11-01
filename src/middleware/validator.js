
"use strict";

function validator(req, res, next){
    if(! req.query.name && req.path === "/person"){
        throw new Error("Opps ! , Bad query Name");
    };

    next();
};

module.exports= validator;
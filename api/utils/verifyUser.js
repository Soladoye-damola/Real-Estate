import { handleError } from "./error.js";
import jwt from 'jsonwebtoken';

const verifyTokens = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token) return next(handleError(401, 'Unauthorized'));
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return next(handleError(403, 'Forbidden'));
        req.user = user;
        next();
    });
};

export default verifyTokens;
import jwt from 'jsonwebtoken';
import env from '../../env';

export const genToken = (userobj) => {
    return jwt.sign(userobj, env.MY_SECRET_KEY, { expiresIn: '30m' });
}

export const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];

  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    jwt.verify(bearerToken, env.MY_SECRET_KEY, (err) => {
        if(err) {
            res.sendStatus(401);
        } else {
            next();
        }
    });
  } else {
    // Uauthorized
    res.sendStatus(401);
  }
}

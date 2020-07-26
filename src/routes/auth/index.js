import express from 'express';
import knex from '../../db/connection';
import { encryptPassword, decryptPassword } from '../../utils/common';

let AuthRouter = express.Router();

AuthRouter.get('/testLogin', (req, res) => {
	knex.from('users').select('*').then((result) => {
        console.log('result', result);
        res.json(result);
	}).catch(err => {
        console.log('err', err);
    });
});

AuthRouter.post('/signup',  (req, res) => {
	knex.from('users').select('*').then((result) => {
        console.log('result', result);
        res.json(result);
	}).catch(err => {
        console.log('err', err);
    });
});

export default AuthRouter;
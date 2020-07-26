import express from 'express';
import knex from '../../db/connection';
import { encryptPassword, decryptPassword } from '../../utils/common';

let UserRouter = express.Router();

UserRouter.get('/test', (req, res) => {
	knex.from('users').select('*').then((result) => {
        console.log('result', result);
        res.json(result);
	}).catch(err => {
        console.log('err', err);
    })
});

export default UserRouter;
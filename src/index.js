import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import './env';
import './db/bookshelf';

import AuthRoute from './routes/auth';
import UsersRoute from './routes/users';

let app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());

app.use("/api/auth", AuthRoute);
app.use("/api/users", UsersRoute);

app.use((req, res) => {
	res.status(404).json({
		errors: {
			global: "Page Not Found."
		}
	})
});

let port = process.env.PORT || 7070;

app.listen(port, () => console.log('Running on localhost:'+port));
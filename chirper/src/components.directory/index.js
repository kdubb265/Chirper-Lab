import React from 'react' ;
import ReactDOM from 'react-dom' ;
import App from '.App' ;

ReactDOM.render(<App />, document.getElementById('root')) ;

import { join } from "path";
import express from "express";
import routes from "./routes";
import stateRouting from "./middleware/routing.mw";

const CLIENT_PATH = join(__dirname, "../../client");

let app = express();

app.use(express.static(CLIENT_PATH));
app.use(express.json());

app.use("/api", routes);

app.use(stateRouting);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


import { Router } from "express";
import chirpsRouter from "./chirps";

let router = Router();

router.use("/chirps", chirpsRouter);

export default router;
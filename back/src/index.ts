import express from 'express';
import "reflect-metadata";
import { AppDataSource } from './data-source';
import routes from './routes';


AppDataSource.initialize().then(() => {

    const app = express();

    app.use(express.json())
    app.use(routes)
    return app.listen(3001, () => console.log("Server is on"));


})




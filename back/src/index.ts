import express from 'express';
import "reflect-metadata";
import { AppDataSource } from './data-source';
import routes from './routes';
import cors from 'cors';

AppDataSource.initialize().then(() => {
    const allowedOrigins = '*';
    const options: cors.CorsOptions ={
        origin: allowedOrigins
    };
    const app = express();
    app.use(cors(options));
    app.use(express.json())
    app.use(routes)
    return app.listen(3001, () => console.log("Server is on"));


})




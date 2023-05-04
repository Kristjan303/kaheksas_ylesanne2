import express, { Express, Request, Response } from "express";
import stringsController from "./controllers/strings";
import product from "./controllers/product";
import productlist from "./controllers/productlist";
import cors from "cors";
import bodyParser from "body-parser";
import uuscontroller from "./controllers/uuscontroller";



const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', productlist);
app.use('/', product);
app.use('/', stringsController);
app.use(cors({
    origin: ['http://localhost:3006']
}));
app.use(bodyParser.json());
app.use('/', uuscontroller);



app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});
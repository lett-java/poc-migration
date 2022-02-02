import app from "./app";
import "reflect-metadata";
import "./database";

app.listen(3500, () => {
    console.log('Running Server');
})
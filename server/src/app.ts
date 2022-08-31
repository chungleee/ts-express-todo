import { config } from "dotenv";
import express, { Application, RequestHandler } from "express";

config();

const app: Application = express();

app.get<RequestHandler>("/", (req, res) => {
	res.send("Express server with TS");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

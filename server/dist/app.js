"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const todos_route_1 = __importDefault(require("./api/todos/todos.route"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use("/todos", todos_route_1.default);
app.get("/", (req, res) => {
    res.send("Express server with TS");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

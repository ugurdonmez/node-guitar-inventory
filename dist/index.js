"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const sessionAuth = __importStar(require("./middleware/sessionAuth"));
const routes = __importStar(require("./routes"));
dotenv_1.default.config();
const port = process.env.SERVER_PORT;
const app = express_1.default();
app.use(express_1.default.json());
// const port = 8080
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
sessionAuth.register(app);
routes.register(app);
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map
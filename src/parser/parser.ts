import {generate, Parser} from "pegjs";
import * as fs from "fs";
import * as path from "path";

let grammar: string = fs.readFileSync(path.join(__dirname, "../../grammar.pegjs"), "utf8");

export let parser: Parser = generate(grammar);
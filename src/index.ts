import {Literal, Node} from "./ast/ast";
import {ast} from "./ast/test-ast";
import {Transpiler} from "./transpiler/transpiler";

try {
    let transplr: Transpiler = new Transpiler(ast);
    console.log(transplr.js);
} catch (e) {
    console.error(e);
}

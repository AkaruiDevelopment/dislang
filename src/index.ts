import {Literal, Node} from "./ast/ast";
// import {ast} from "./ast/test-ast";
// import {Transpiler} from "./transpiler/transpiler";

// try {
//     let transplr: Transpiler = new Transpiler(ast);
//     console.log(transplr.js);
// } catch (e) {
//     console.error(e);
// }

import {parser} from "./parser/parser";

try {
    let parsed: Node = parser.parse(`var hi = "hey there"`);
    console.log(JSON.stringify(parsed, null, 4));
} catch (e) {
    console.error(e);
}
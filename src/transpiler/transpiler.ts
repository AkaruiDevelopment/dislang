import { Literal, Node } from "../ast/ast";

export class Transpiler {
    ast: Node;
    public js: string = "";

    // vars: {[key: string]: any} = {};

    types = {}; // TODO: populate with native types; add type support

    // functions: {[key: string]: (Function|Node)} = {
    //     "log": function(): void {
    //         try {
    //             console.log(arguments);
    //         } catch (e) {
    //             throw new Error("invalid arguments");
    //         }
    //     }
    // };

    constructor(ast: Node) {
        this.ast = ast;
        this.parseNode(ast);
    };

    parseNode(node: Node) {
        // console.log(node);
        switch (node.kind) {
            case "program":
                if (!node.body) throw new Error("Invalid AST"); // TODO: handle errors
                for (let i = 0; i < node.body.length; i++) {
                    this.parseNode(node.body![i]);
                }
                break;
            case "literal":
                return {
                    value: node.value,
                    raw: node.raw
                };
            case "identifier":
                if (!node.name) throw new Error("Invalid AST"); // TODO: handle errors
                return node.name;
            case "variableDeclaration":
                // TODO: add type check
                if (!node.name) throw new Error("Invalid AST"); // TODO: handle errors
                // if (this.vars.hasOwnProperty(node.name)) throw new Error("Variable already exists"); // TODO: handle errors
                if (!node.initializer) throw new Error("Invalid AST"); // TODO: handle errors
                this.js += `let ${node.name} = ${node.initializer.raw};\n`;
                break;
            case "callExpression":
                // TODO: add function support
                if (!node.callee) throw new Error("Invalid AST"); // TODO: handle errors
                if (!node.arguments) throw new Error("Invalid AST"); // TODO: handle errors
                let args: Node[] = [];
                for (let i = 0; i < node.arguments.length; i++) args.push(this.parseNode(node.arguments[i])! as Node);
                this.js += `${node.callee.name}(${args.join(", ")});\n`;
                break;
            default:
                throw new Error("Invalid AST"); // TODO: handle errors
        }
    }
}
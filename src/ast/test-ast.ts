import {Node} from "./ast";

export let ast: Node = {
    "kind": "program",
    "body": [
        {
            "kind": "variableDeclaration",
            "type": {
                "kind": "typeReference",
                "name": "string"
            },
            "name": "someString",
            "initializer": {
                "kind": "literal",
                "value": "Hello, World!",
                "raw": "\"Hello, World!\""
            }
        },
        {
            "kind": "callExpression",
            "callee": {
                "kind": "identifier",
                "name": "log"
            },
            "arguments": [
                {
                    "kind": "identifier",
                    "name": "someString"
                }
            ]
        }
    ]
};
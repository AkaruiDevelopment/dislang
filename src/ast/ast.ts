export interface Node {
    kind: string;
    type?: Node;
    body?: Node[];
    name?: string;
    initializer?: Node;
    value?: Literal;
    raw?: string;
    callee?: Node;
    arguments?: Node[];
}

export type Literal = string | number | boolean | null;
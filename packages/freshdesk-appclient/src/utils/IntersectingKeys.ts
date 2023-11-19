/**
 * 
 */
export type IntersectingKeys<T> = {
    [Lhs in keyof T]: {
        [Rhs in keyof T]: Lhs extends Rhs ? never : {
            [LhsKey in keyof T[Lhs]]: LhsKey extends keyof T[Rhs] ? T[Lhs][LhsKey] extends T[Rhs][LhsKey] ? never : LhsKey : never;
        }[keyof T[Lhs]];
    }[keyof T];
}[keyof T];

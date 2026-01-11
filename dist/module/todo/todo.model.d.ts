import type { ITodo } from "./todo.interface.js";
export declare const TodoModel: import("mongoose").Model<ITodo, {}, {}, {}, import("mongoose").Document<unknown, {}, ITodo, {}, import("mongoose").DefaultSchemaOptions> & ITodo & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ITodo>;
//# sourceMappingURL=todo.model.d.ts.map
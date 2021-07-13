"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const insert_node_1 = __importDefault(require("./insert-node"));
const merge_node_1 = __importDefault(require("./merge-node"));
const move_node_1 = __importDefault(require("./move-node"));
const remove_node_1 = __importDefault(require("./remove-node"));
const set_node_1 = __importDefault(require("./set-node"));
const split_node_1 = __importDefault(require("./split-node"));
const mapper = {
    insert_node: insert_node_1.default,
    merge_node: merge_node_1.default,
    move_node: move_node_1.default,
    remove_node: remove_node_1.default,
    set_node: set_node_1.default,
    split_node: split_node_1.default
};
exports.default = mapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwbHktdG8teWpzL25vZGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxnRUFBdUM7QUFDdkMsOERBQXFDO0FBQ3JDLDREQUFtQztBQUNuQyxnRUFBdUM7QUFDdkMsMERBQWlDO0FBQ2pDLDhEQUFxQztBQUVyQyxNQUFNLE1BQU0sR0FBNEI7SUFDdEMsV0FBVyxFQUFFLHFCQUFVO0lBQ3ZCLFVBQVUsRUFBRSxvQkFBUztJQUNyQixTQUFTLEVBQUUsbUJBQVE7SUFDbkIsV0FBVyxFQUFFLHFCQUFVO0lBQ3ZCLFFBQVEsRUFBRSxrQkFBTztJQUNqQixVQUFVLEVBQUUsb0JBQVM7Q0FDdEIsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQyJ9
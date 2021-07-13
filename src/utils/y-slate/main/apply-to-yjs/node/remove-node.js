"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const model_1 = require("../../model");
const path_1 = require("../../path");
/**
 * Applies a remove node operation to a SharedType.
 *
 * @param doc
 * @param op
 */
function removeNode(doc, op) {
    const [parent, index] = path_1.getParent(doc, op.path);
    if (model_1.SyncNode.getText(parent) !== undefined) {
        throw new TypeError('Can\'t insert node into text node');
    }
    const children = model_1.SyncNode.getChildren(parent);
    tiny_invariant_1.default(children, 'Parent should have children');
    children.delete(index);
    return doc;
}
exports.default = removeNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLW5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwbHktdG8teWpzL25vZGUvcmVtb3ZlLW5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxvRUFBdUM7QUFDdkMsdUNBQW1EO0FBQ25ELHFDQUF1QztBQUV2Qzs7Ozs7R0FLRztBQUNILFNBQXdCLFVBQVUsQ0FDaEMsR0FBZSxFQUNmLEVBQXVCO0lBRXZCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcsZ0JBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhELElBQUksZ0JBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxFQUFFO1FBQzFDLE1BQU0sSUFBSSxTQUFTLENBQUMsbUNBQW1DLENBQUMsQ0FBQztLQUMxRDtJQUVELE1BQU0sUUFBUSxHQUFHLGdCQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLHdCQUFTLENBQUMsUUFBUSxFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDbkQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV2QixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFmRCw2QkFlQyJ9
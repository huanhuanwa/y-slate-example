"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const model_1 = require("../../model");
const path_1 = require("../../path");
const convert_1 = require("../../utils/convert");
/**
 * Applies an insert node operation to a SharedType.
 *
 * @param doc
 * @param op
 */
function insertNode(doc, op) {
    const [parent, index] = path_1.getParent(doc, op.path);
    const children = model_1.SyncNode.getChildren(parent);
    if (model_1.SyncNode.getText(parent) !== undefined || !children) {
        throw new TypeError('Can\'t insert node into text node');
    }
    tiny_invariant_1.default(children, 'cannot apply insert node operation to text node');
    children.insert(index, [convert_1.toSyncElement(op.node)]);
    return doc;
}
exports.default = insertNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXJ0LW5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwbHktdG8teWpzL25vZGUvaW5zZXJ0LW5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxvRUFBdUM7QUFDdkMsdUNBQW1EO0FBQ25ELHFDQUF1QztBQUN2QyxpREFBb0Q7QUFFcEQ7Ozs7O0dBS0c7QUFDSCxTQUF3QixVQUFVLENBQ2hDLEdBQWUsRUFDZixFQUF1QjtJQUV2QixNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLGdCQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoRCxNQUFNLFFBQVEsR0FBRyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxJQUFJLGdCQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQVMsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUN2RCxNQUFNLElBQUksU0FBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7S0FDMUQ7SUFFRCx3QkFBUyxDQUFDLFFBQVEsRUFBRSxpREFBaUQsQ0FBQyxDQUFDO0lBRXZFLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsdUJBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQWZELDZCQWVDIn0=
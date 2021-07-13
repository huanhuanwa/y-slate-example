"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const model_1 = require("../../model");
const path_1 = require("../../path");
const utils_1 = require("../../utils");
/**
 * Applies a merge node operation to a SharedType.
 *
 * @param doc
 * @param op
 */
function mergeNode(doc, op) {
    const [parent, index] = path_1.getParent(doc, op.path);
    const children = model_1.SyncNode.getChildren(parent);
    tiny_invariant_1.default(children, 'Parent of element should have children');
    const prev = children.get(index - 1);
    const next = children.get(index);
    const prevText = model_1.SyncNode.getText(prev);
    const nextText = model_1.SyncNode.getText(next);
    if (prevText && nextText) {
        prevText.insert(prevText.length, nextText.toString());
    }
    else {
        const nextChildren = model_1.SyncNode.getChildren(next);
        const prevChildren = model_1.SyncNode.getChildren(prev);
        tiny_invariant_1.default(nextChildren, 'Next element should have children');
        tiny_invariant_1.default(prevChildren, 'Prev element should have children');
        const toPush = nextChildren.map(utils_1.cloneSyncElement);
        prevChildren.push(toPush);
    }
    children.delete(index, 1);
    return doc;
}
exports.default = mergeNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2Utbm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHBseS10by15anMvbm9kZS9tZXJnZS1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esb0VBQXVDO0FBQ3ZDLHVDQUFtRDtBQUNuRCxxQ0FBdUM7QUFDdkMsdUNBQStDO0FBRS9DOzs7OztHQUtHO0FBQ0gsU0FBd0IsU0FBUyxDQUMvQixHQUFlLEVBQ2YsRUFBc0I7SUFFdEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBRyxnQkFBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFaEQsTUFBTSxRQUFRLEdBQUcsZ0JBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsd0JBQVMsQ0FBQyxRQUFRLEVBQUUsd0NBQXdDLENBQUMsQ0FBQztJQUU5RCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpDLE1BQU0sUUFBUSxHQUFHLGdCQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sUUFBUSxHQUFHLGdCQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXhDLElBQUksUUFBUSxJQUFJLFFBQVEsRUFBRTtRQUN4QixRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDdkQ7U0FBTTtRQUNMLE1BQU0sWUFBWSxHQUFHLGdCQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELE1BQU0sWUFBWSxHQUFHLGdCQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhELHdCQUFTLENBQUMsWUFBWSxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFDN0Qsd0JBQVMsQ0FBQyxZQUFZLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUU3RCxNQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLHdCQUFnQixDQUFDLENBQUM7UUFDbEQsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMzQjtJQUVELFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQTlCRCw0QkE4QkMifQ==
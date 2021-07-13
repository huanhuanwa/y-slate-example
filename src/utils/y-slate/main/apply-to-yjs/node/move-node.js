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
 * Applies a move node operation to a SharedType.
 *
 * @param doc
 * @param op
 */
function moveNode(doc, op) {
    const [from, fromIndex] = path_1.getParent(doc, op.path);
    const [to, toIndex] = path_1.getParent(doc, op.newPath);
    if (model_1.SyncNode.getText(from) !== undefined ||
        model_1.SyncNode.getText(to) !== undefined) {
        throw new TypeError('Can\'t move node as child of a text node');
    }
    const fromChildren = model_1.SyncNode.getChildren(from);
    const toChildren = model_1.SyncNode.getChildren(to);
    tiny_invariant_1.default(fromChildren, 'From element should not be a text node');
    tiny_invariant_1.default(toChildren, 'To element should not be a text node');
    const toMove = fromChildren.get(fromIndex);
    const toInsert = utils_1.cloneSyncElement(toMove);
    fromChildren.delete(fromIndex);
    toChildren.insert(Math.min(toIndex, toChildren.length), [toInsert]);
    return doc;
}
exports.default = moveNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS1ub2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcGx5LXRvLXlqcy9ub2RlL21vdmUtbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLG9FQUF1QztBQUN2Qyx1Q0FBbUQ7QUFDbkQscUNBQXVDO0FBQ3ZDLHVDQUErQztBQUUvQzs7Ozs7R0FLRztBQUNILFNBQXdCLFFBQVEsQ0FDOUIsR0FBZSxFQUNmLEVBQXFCO0lBRXJCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUcsZ0JBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsZ0JBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWpELElBQ0UsZ0JBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUztRQUNwQyxnQkFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxTQUFTLEVBQ2xDO1FBQ0EsTUFBTSxJQUFJLFNBQVMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0tBQ2pFO0lBRUQsTUFBTSxZQUFZLEdBQUcsZ0JBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsTUFBTSxVQUFVLEdBQUcsZ0JBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFNUMsd0JBQVMsQ0FBQyxZQUFZLEVBQUUsd0NBQXdDLENBQUMsQ0FBQztJQUNsRSx3QkFBUyxDQUFDLFVBQVUsRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDO0lBRTlELE1BQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0MsTUFBTSxRQUFRLEdBQUcsd0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFMUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFcEUsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBM0JELDJCQTJCQyJ9
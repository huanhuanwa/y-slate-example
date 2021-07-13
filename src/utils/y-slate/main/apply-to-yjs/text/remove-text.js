"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../model");
const path_1 = require("../../path");
/**
 * Applies a remove text operation to a SharedType.
 *
 * @param doc
 * @param op
 */
function removeText(doc, op) {
    const node = path_1.getTarget(doc, op.path);
    const nodeText = model_1.SyncElement.getText(node);
    nodeText.delete(op.offset, op.text.length);
    return doc;
}
exports.default = removeText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLXRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwbHktdG8teWpzL3RleHQvcmVtb3ZlLXRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1Q0FBc0Q7QUFDdEQscUNBQXVDO0FBRXZDOzs7OztHQUtHO0FBQ0gsU0FBd0IsVUFBVSxDQUNoQyxHQUFlLEVBQ2YsRUFBdUI7SUFFdkIsTUFBTSxJQUFJLEdBQUcsZ0JBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBZ0IsQ0FBQztJQUNwRCxNQUFNLFFBQVEsR0FBRyxtQkFBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsQ0FBQztJQUM1QyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFSRCw2QkFRQyJ9
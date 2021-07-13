"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slate_1 = require("slate");
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const convert_1 = require("../utils/convert");
/**
 * Translates a Yjs array event into a slate operations.
 *
 * @param event
 */
function translateArrayEvent(editor, event) {
    const targetPath = convert_1.toSlatePath(event.path);
    const targetElement = slate_1.Node.get(editor, targetPath);
    tiny_invariant_1.default(!slate_1.Text.isText(targetElement), 'Cannot apply array event to text node');
    let offset = 0;
    const ops = [];
    const children = Array.from(targetElement.children);
    event.changes.delta.forEach((delta) => {
        var _a, _b;
        if ('retain' in delta) {
            offset += (_a = delta.retain) !== null && _a !== void 0 ? _a : 0;
        }
        if ('delete' in delta) {
            const path = [...targetPath, offset];
            children.splice(offset, (_b = delta.delete) !== null && _b !== void 0 ? _b : 0).forEach((node) => {
                ops.push({ type: 'remove_node', path, node });
            });
        }
        if ('insert' in delta) {
            tiny_invariant_1.default(Array.isArray(delta.insert), `Unexpected array insert content type: expected array, got ${JSON.stringify(delta.insert)}`);
            const toInsert = delta.insert.map(convert_1.toSlateNode);
            toInsert.forEach((node, i) => {
                ops.push({
                    type: 'insert_node',
                    path: [...targetPath, offset + i],
                    node
                });
            });
            children.splice(offset, 0, ...toInsert);
            offset += delta.insert.length;
        }
    });
    return ops;
}
exports.default = translateArrayEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwbHktdG8tc2xhdGUvYXJyYXktZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBMEQ7QUFDMUQsb0VBQXVDO0FBR3ZDLDhDQUE0RDtBQUU1RDs7OztHQUlHO0FBQ0gsU0FBd0IsbUJBQW1CLENBQ3pDLE1BQWMsRUFDZCxLQUFpQztJQUVqQyxNQUFNLFVBQVUsR0FBRyxxQkFBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxNQUFNLGFBQWEsR0FBRyxZQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUVuRCx3QkFBUyxDQUNQLENBQUMsWUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFDM0IsdUNBQXVDLENBQ3hDLENBQUM7SUFFRixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixNQUFNLEdBQUcsR0FBb0IsRUFBRSxDQUFDO0lBQ2hDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXBELEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFOztRQUNwQyxJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQUU7WUFDckIsTUFBTSxJQUFJLE1BQUEsS0FBSyxDQUFDLE1BQU0sbUNBQUksQ0FBQyxDQUFDO1NBQzdCO1FBRUQsSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDckMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBQSxLQUFLLENBQUMsTUFBTSxtQ0FBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDMUQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksUUFBUSxJQUFJLEtBQUssRUFBRTtZQUNyQix3QkFBUyxDQUNQLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUMzQiw2REFBNkQsSUFBSSxDQUFDLFNBQVMsQ0FDekUsS0FBSyxDQUFDLE1BQU0sQ0FDYixFQUFFLENBQ0osQ0FBQztZQUVGLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFXLENBQUMsQ0FBQztZQUUvQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDO29CQUNQLElBQUksRUFBRSxhQUFhO29CQUNuQixJQUFJLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNqQyxJQUFJO2lCQUNMLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUM7WUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFwREQsc0NBb0RDIn0=
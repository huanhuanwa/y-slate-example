"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("../../path");
/**
 * Applies a setNode operation to a SharedType
 *
 * @param doc
 * @param op
 */
function setNode(doc, op) {
    const node = path_1.getTarget(doc, op.path);
    Object.entries(op.newProperties).forEach(([key, value]) => {
        if (key === 'children' || key === 'text') {
            throw new Error(`Cannot set the "${key}" property of nodes!`);
        }
        node.set(key, value);
    });
    return doc;
}
exports.default = setNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwbHktdG8teWpzL25vZGUvc2V0LW5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxxQ0FBdUM7QUFFdkM7Ozs7O0dBS0c7QUFDSCxTQUF3QixPQUFPLENBQzdCLEdBQWUsRUFDZixFQUFvQjtJQUVwQixNQUFNLElBQUksR0FBRyxnQkFBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFnQixDQUFDO0lBRXBELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7UUFDeEQsSUFBSSxHQUFHLEtBQUssVUFBVSxJQUFJLEdBQUcsS0FBSyxNQUFNLEVBQUU7WUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFmRCwwQkFlQyJ9
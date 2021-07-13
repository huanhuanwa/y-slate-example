"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applySlateOp = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const node_1 = __importDefault(require("./node"));
const text_1 = __importDefault(require("./text"));
const nullOp = (doc) => doc;
const opMappers = Object.assign(Object.assign(Object.assign({}, text_1.default), node_1.default), { 
    // SetSelection is currently a null op since we don't support cursors
    set_selection: nullOp });
/**
 * Applies a slate operation to a SharedType
 *
 * @param sharedType
 * @param op
 */
function applySlateOp(sharedType, op) {
    const apply = opMappers[op.type];
    if (!apply) {
        throw new Error(`Unknown operation: ${op.type}`);
    }
    return apply(sharedType, op);
}
exports.applySlateOp = applySlateOp;
/**
 * Applies slate operations to a SharedType
 *
 * @param sharedType
 * @param op
 */
function applySlateOps(sharedType, ops) {
    tiny_invariant_1.default(sharedType.doc, 'Shared type without attached document');
    if (ops.length > 0) {
        sharedType.doc.transact(() => {
            ops.forEach((op) => applySlateOp(sharedType, op));
        });
    }
    return sharedType;
}
exports.default = applySlateOps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwbHktdG8teWpzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLG9FQUF1QztBQUV2QyxrREFBMEI7QUFDMUIsa0RBQTBCO0FBRzFCLE1BQU0sTUFBTSxHQUFjLENBQUMsR0FBZSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFFbkQsTUFBTSxTQUFTLGlEQUNWLGNBQUksR0FDSixjQUFJO0lBRVAscUVBQXFFO0lBQ3JFLGFBQWEsRUFBRSxNQUFNLEdBQ3RCLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILFNBQWdCLFlBQVksQ0FDMUIsVUFBc0IsRUFDdEIsRUFBYTtJQUViLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUF5QixDQUFDO0lBQ3pELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUNsRDtJQUVELE9BQU8sS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBVkQsb0NBVUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQXdCLGFBQWEsQ0FDbkMsVUFBc0IsRUFDdEIsR0FBZ0I7SUFFaEIsd0JBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLHVDQUF1QyxDQUFDLENBQUM7SUFFbkUsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNsQixVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDM0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBYkQsZ0NBYUMifQ==
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const model_1 = require("../../model");
const path_1 = require("../../path");
const clone_1 = __importDefault(require("../../utils/clone"));
/**
 * Applies a split node operation to a SharedType
 *
 * @param doc
 * @param op
 */
function splitNode(doc, op) {
    const [parent, index] = path_1.getParent(doc, op.path);
    const children = model_1.SyncNode.getChildren(parent);
    tiny_invariant_1.default(children, 'Parent of node should have children');
    const target = children.get(index);
    const inject = clone_1.default(target);
    children.insert(index + 1, [inject]);
    Object.entries(op.properties).forEach(([key, value]) => inject.set(key, value));
    if (model_1.SyncNode.getText(target) !== undefined) {
        const targetText = model_1.SyncNode.getText(target);
        const injectText = model_1.SyncNode.getText(inject);
        tiny_invariant_1.default(targetText);
        tiny_invariant_1.default(injectText);
        if (targetText.length > op.position) {
            targetText.delete(op.position, targetText.length - op.position);
        }
        if (injectText !== undefined && op.position !== undefined) {
            injectText.delete(0, op.position);
        }
    }
    else {
        const targetChildren = model_1.SyncNode.getChildren(target);
        const injectChildren = model_1.SyncNode.getChildren(inject);
        tiny_invariant_1.default(targetChildren);
        tiny_invariant_1.default(injectChildren);
        targetChildren.delete(op.position, targetChildren.length - op.position);
        if (op.position !== undefined) {
            injectChildren.delete(0, op.position);
        }
    }
    return doc;
}
exports.default = splitNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtbm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHBseS10by15anMvbm9kZS9zcGxpdC1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esb0VBQXVDO0FBQ3ZDLHVDQUFtRDtBQUNuRCxxQ0FBdUM7QUFDdkMsOERBQWlEO0FBRWpEOzs7OztHQUtHO0FBQ0gsU0FBd0IsU0FBUyxDQUMvQixHQUFlLEVBQ2YsRUFBc0I7SUFFdEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBdUIsZ0JBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBFLE1BQU0sUUFBUSxHQUFHLGdCQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLHdCQUFTLENBQUMsUUFBUSxFQUFFLHFDQUFxQyxDQUFDLENBQUM7SUFFM0QsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxNQUFNLE1BQU0sR0FBRyxlQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUNyRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FDdkIsQ0FBQztJQUVGLElBQUksZ0JBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxFQUFFO1FBQzFDLE1BQU0sVUFBVSxHQUFHLGdCQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE1BQU0sVUFBVSxHQUFHLGdCQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVDLHdCQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEIsd0JBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV0QixJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNuQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLFVBQVUsS0FBSyxTQUFTLElBQUksRUFBRSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDekQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25DO0tBQ0Y7U0FBTTtRQUNMLE1BQU0sY0FBYyxHQUFHLGdCQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELE1BQU0sY0FBYyxHQUFHLGdCQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBELHdCQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUIsd0JBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUxQixjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEUsSUFBSSxFQUFFLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUM3QixjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkM7S0FDRjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQTlDRCw0QkE4Q0MifQ==
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSyncNodePath = exports.getArrayPosition = exports.getParent = exports.getTarget = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const Y = __importStar(require("yjs"));
const model_1 = require("../model");
const convert_1 = require("../utils/convert");
const isTree = (node) => !!model_1.SyncNode.getChildren(node);
/**
 * Returns the SyncNode referenced by the path
 *
 * @param doc
 * @param path
 */
function getTarget(doc, path) {
    function iterate(current, idx) {
        const children = model_1.SyncNode.getChildren(current);
        if (!isTree(current) || !(children === null || children === void 0 ? void 0 : children.get(idx))) {
            throw new TypeError(`path ${path.toString()} does not match doc ${JSON.stringify(convert_1.toSlateDoc(doc))}`);
        }
        return children.get(idx);
    }
    return path.reduce(iterate, doc);
}
exports.getTarget = getTarget;
function getParentPath(path, level = 1) {
    if (level > path.length) {
        throw new TypeError('requested ancestor is higher than root');
    }
    return [path[path.length - level], path.slice(0, path.length - level)];
}
function getParent(doc, path, level = 1) {
    const [idx, parentPath] = getParentPath(path, level);
    const parent = getTarget(doc, parentPath);
    tiny_invariant_1.default(parent, 'Parent node should exists');
    return [parent, idx];
}
exports.getParent = getParent;
/**
 * Returns the position of the sync item inside inside it's parent array.
 *
 * @param item
 */
function getArrayPosition(item) {
    let i = 0;
    let c = item.parent._start;
    while (c !== item && c !== null) {
        if (!c.deleted) {
            i += 1;
        }
        c = c.right;
    }
    return i;
}
exports.getArrayPosition = getArrayPosition;
/**
 * Returns the document path of a sync item
 *
 * @param node
 */
function getSyncNodePath(node) {
    if (!node) {
        return [];
    }
    const { parent } = node;
    if (!parent) {
        return [];
    }
    if (parent instanceof Y.Array) {
        tiny_invariant_1.default(node._item, 'Parent should be associated with a item');
        return [...getSyncNodePath(parent), getArrayPosition(node._item)];
    }
    if (parent instanceof Y.Map) {
        return getSyncNodePath(parent);
    }
    throw new Error(`Unknown parent type ${parent}`);
}
exports.getSyncNodePath = getSyncNodePath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGF0aC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esb0VBQXVDO0FBQ3ZDLHVDQUF5QjtBQUN6QixvQ0FBNkQ7QUFDN0QsOENBQThDO0FBRTlDLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBYyxFQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFekU7Ozs7O0dBS0c7QUFDSCxTQUFnQixTQUFTLENBQUMsR0FBZSxFQUFFLElBQVU7SUFDbkQsU0FBUyxPQUFPLENBQUMsT0FBaUIsRUFBRSxHQUFXO1FBQzdDLE1BQU0sUUFBUSxHQUFHLGdCQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUEsRUFBRTtZQUMzQyxNQUFNLElBQUksU0FBUyxDQUNqQixRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUUsdUJBQXVCLElBQUksQ0FBQyxTQUFTLENBQzFELG9CQUFVLENBQUMsR0FBRyxDQUFDLENBQ2hCLEVBQUUsQ0FDSixDQUFDO1NBQ0g7UUFFRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBVyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQWhCRCw4QkFnQkM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxJQUFVLEVBQUUsS0FBSyxHQUFHLENBQUM7SUFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUN2QixNQUFNLElBQUksU0FBUyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7S0FDL0Q7SUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFFRCxTQUFnQixTQUFTLENBQ3ZCLEdBQWUsRUFDZixJQUFVLEVBQ1YsS0FBSyxHQUFHLENBQUM7SUFFVCxNQUFNLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckQsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxQyx3QkFBUyxDQUFDLE1BQU0sRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0lBQy9DLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkIsQ0FBQztBQVRELDhCQVNDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLGdCQUFnQixDQUFDLElBQVk7SUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsSUFBSSxDQUFDLEdBQUksSUFBSSxDQUFDLE1BQStCLENBQUMsTUFBTSxDQUFDO0lBRXJELE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ2QsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNSO1FBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDYjtJQUVELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQVpELDRDQVlDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLGVBQWUsQ0FBQyxJQUFjO0lBQzVDLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztJQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELElBQUksTUFBTSxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUU7UUFDN0Isd0JBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLHlDQUF5QyxDQUFDLENBQUM7UUFDakUsT0FBTyxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ25FO0lBRUQsSUFBSSxNQUFNLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUMzQixPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNoQztJQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQXBCRCwwQ0FvQkMifQ==
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSlatePath = exports.toSharedType = exports.toSyncElement = exports.toSlateDoc = exports.toSlateNode = void 0;
const slate_1 = require("slate");
const Y = __importStar(require("yjs"));
const model_1 = require("../model");
/**
 * Converts a sync element to a slate node
 *
 * @param element
 */
function toSlateNode(element) {
    const text = model_1.SyncElement.getText(element);
    const children = model_1.SyncElement.getChildren(element);
    const node = {};
    if (text !== undefined) {
        node.text = text.toString();
    }
    if (children !== undefined) {
        node.children = children.map(toSlateNode);
    }
    Array.from(element.entries()).forEach(([key, value]) => {
        if (key !== 'children' && key !== 'text') {
            node[key] = value;
        }
    });
    return node;
}
exports.toSlateNode = toSlateNode;
/**
 * Converts a SharedType to a Slate doc
 * @param doc
 */
function toSlateDoc(doc) {
    return doc.map(toSlateNode);
}
exports.toSlateDoc = toSlateDoc;
/**
 * Converts a slate node to a sync element
 *
 * @param node
 */
function toSyncElement(node) {
    const element = new Y.Map();
    if (slate_1.Element.isElement(node)) {
        const childElements = node.children.map(toSyncElement);
        const childContainer = new Y.Array();
        childContainer.insert(0, childElements);
        element.set('children', childContainer);
    }
    if (slate_1.Text.isText(node)) {
        const textElement = new Y.Text(node.text);
        element.set('text', textElement);
    }
    Object.entries(node).forEach(([key, value]) => {
        if (key !== 'children' && key !== 'text') {
            element.set(key, value);
        }
    });
    return element;
}
exports.toSyncElement = toSyncElement;
/**
 * Converts all elements int a Slate doc to SyncElements and adds them
 * to the SharedType
 *
 * @param sharedType
 * @param doc
 */
function toSharedType(sharedType, doc) {
    sharedType.insert(0, doc.map(toSyncElement));
}
exports.toSharedType = toSharedType;
/**
 * Converts a SharedType path the a slate path
 *
 * @param path
 */
function toSlatePath(path) {
    return path.filter((node) => typeof node === 'number');
}
exports.toSlatePath = toSlatePath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9jb252ZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBa0Q7QUFDbEQsdUNBQXlCO0FBQ3pCLG9DQUFtRDtBQUVuRDs7OztHQUlHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFDLE9BQW9CO0lBQzlDLE1BQU0sSUFBSSxHQUFHLG1CQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLE1BQU0sUUFBUSxHQUFHLG1CQUFXLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWxELE1BQU0sSUFBSSxHQUFrQixFQUFFLENBQUM7SUFDL0IsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzdCO0lBQ0QsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUMzQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUNyRCxJQUFJLEdBQUcsS0FBSyxVQUFVLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtZQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLElBQVksQ0FBQztBQUN0QixDQUFDO0FBbkJELGtDQW1CQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLFVBQVUsQ0FBQyxHQUFlO0lBQ3hDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRkQsZ0NBRUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsYUFBYSxDQUFDLElBQVU7SUFDdEMsTUFBTSxPQUFPLEdBQWdCLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRXpDLElBQUksZUFBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMzQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2RCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztLQUN6QztJQUVELElBQUksWUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQ2xDO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO1FBQzVDLElBQUksR0FBRyxLQUFLLFVBQVUsSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBdEJELHNDQXNCQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQWdCLFlBQVksQ0FBQyxVQUFzQixFQUFFLEdBQVc7SUFDOUQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFGRCxvQ0FFQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixXQUFXLENBQUMsSUFBeUI7SUFDbkQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQVMsQ0FBQztBQUNqRSxDQUFDO0FBRkQsa0NBRUMifQ==
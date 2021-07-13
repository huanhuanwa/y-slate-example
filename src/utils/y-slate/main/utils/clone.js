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
const Y = __importStar(require("yjs"));
const model_1 = require("../model");
function cloneSyncElement(element) {
    const text = model_1.SyncElement.getText(element);
    const children = model_1.SyncElement.getChildren(element);
    const clone = new Y.Map();
    if (text !== undefined) {
        const textElement = new Y.Text(text.toString());
        clone.set('text', textElement);
    }
    if (children !== undefined) {
        const childElements = children.map(cloneSyncElement);
        const childContainer = new Y.Array();
        childContainer.insert(0, childElements);
        clone.set('children', childContainer);
    }
    Array.from(element.entries()).forEach(([key, value]) => {
        if (key !== 'children' && key !== 'text') {
            clone.set(key, value);
        }
    });
    return clone;
}
exports.default = cloneSyncElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvY2xvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXlCO0FBQ3pCLG9DQUF1QztBQUV2QyxTQUF3QixnQkFBZ0IsQ0FBQyxPQUFvQjtJQUMzRCxNQUFNLElBQUksR0FBRyxtQkFBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxNQUFNLFFBQVEsR0FBRyxtQkFBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVsRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUUxQixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7UUFDdEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQ2hDO0lBRUQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1FBQzFCLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNyRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN4QyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztLQUN2QztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUNyRCxJQUFJLEdBQUcsS0FBSyxVQUFVLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtZQUN4QyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBekJELG1DQXlCQyJ9
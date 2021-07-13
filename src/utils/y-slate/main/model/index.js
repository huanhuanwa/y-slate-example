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
exports.SyncNode = exports.SyncElement = void 0;
const Y = __importStar(require("yjs"));
exports.SyncElement = {
    getText(element) {
        return element === null || element === void 0 ? void 0 : element.get('text');
    },
    getChildren(element) {
        return element === null || element === void 0 ? void 0 : element.get('children');
    }
};
exports.SyncNode = {
    getChildren(node) {
        if (node instanceof Y.Array) {
            return node;
        }
        return exports.SyncElement.getChildren(node);
    },
    getText(node) {
        if (node instanceof Y.Array) {
            return undefined;
        }
        return exports.SyncElement.getText(node);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVDQUF5QjtBQWFaLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLE9BQU8sQ0FBQyxPQUFvQjtRQUMxQixPQUFPLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFvQjtRQUM5QixPQUFPLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGLENBQUM7QUFFVyxRQUFBLFFBQVEsR0FBRztJQUN0QixXQUFXLENBQUMsSUFBYztRQUN4QixJQUFJLElBQUksWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLG1CQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBYztRQUNwQixJQUFJLElBQUksWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQzNCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxtQkFBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0YsQ0FBQyJ9
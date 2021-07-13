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
exports.relativePositionToAbsolutePosition = exports.absolutePositionToRelativePosition = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const Y = __importStar(require("yjs"));
const model_1 = require("../model");
const path_1 = require("../path");
function absolutePositionToRelativePosition(sharedType, point) {
    const target = path_1.getTarget(sharedType, point.path);
    const text = model_1.SyncElement.getText(target);
    tiny_invariant_1.default(text, 'Slate point should point to Text node');
    return Y.createRelativePositionFromTypeIndex(text, point.offset);
}
exports.absolutePositionToRelativePosition = absolutePositionToRelativePosition;
function relativePositionToAbsolutePosition(sharedType, relativePosition) {
    tiny_invariant_1.default(sharedType.doc, 'Shared type should be bound to a document');
    const pos = Y.createAbsolutePositionFromRelativePosition(relativePosition, sharedType.doc);
    if (!pos) {
        return null;
    }
    return {
        path: path_1.getSyncNodePath(pos.type.parent),
        offset: pos.index
    };
}
exports.relativePositionToAbsolutePosition = relativePositionToAbsolutePosition;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3Vyc29yL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvRUFBdUM7QUFDdkMsdUNBQXlCO0FBQ3pCLG9DQUE2RDtBQUM3RCxrQ0FBcUQ7QUFFckQsU0FBZ0Isa0NBQWtDLENBQ2hELFVBQXNCLEVBQ3RCLEtBQVk7SUFFWixNQUFNLE1BQU0sR0FBRyxnQkFBUyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsTUFBTSxJQUFJLEdBQUcsbUJBQVcsQ0FBQyxPQUFPLENBQUMsTUFBcUIsQ0FBQyxDQUFDO0lBQ3hELHdCQUFTLENBQUMsSUFBSSxFQUFFLHVDQUF1QyxDQUFDLENBQUM7SUFDekQsT0FBTyxDQUFDLENBQUMsbUNBQW1DLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuRSxDQUFDO0FBUkQsZ0ZBUUM7QUFFRCxTQUFnQixrQ0FBa0MsQ0FDaEQsVUFBc0IsRUFDdEIsZ0JBQW9DO0lBRXBDLHdCQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSwyQ0FBMkMsQ0FBQyxDQUFDO0lBRXZFLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQywwQ0FBMEMsQ0FDdEQsZ0JBQWdCLEVBQ2hCLFVBQVUsQ0FBQyxHQUFHLENBQ2YsQ0FBQztJQUVGLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsT0FBTztRQUNMLElBQUksRUFBRSxzQkFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBa0IsQ0FBQztRQUNsRCxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUs7S0FDbEIsQ0FBQztBQUNKLENBQUM7QUFuQkQsZ0ZBbUJDIn0=
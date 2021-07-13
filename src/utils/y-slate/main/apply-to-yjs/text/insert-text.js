"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const model_1 = require("../../model");
const path_1 = require("../../path");
/**
 * Applies a insert text operation to a SharedType.
 *
 * @param doc
 * @param op
 */
function insertText(doc, op) {
    const node = path_1.getTarget(doc, op.path);
    const nodeText = model_1.SyncElement.getText(node);
    tiny_invariant_1.default(nodeText, 'Apply text operation to non text node');
    nodeText.insert(op.offset, op.text);
    return doc;
}
exports.default = insertText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXJ0LXRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwbHktdG8teWpzL3RleHQvaW5zZXJ0LXRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxvRUFBdUM7QUFDdkMsdUNBQXNEO0FBQ3RELHFDQUF1QztBQUV2Qzs7Ozs7R0FLRztBQUNILFNBQXdCLFVBQVUsQ0FDaEMsR0FBZSxFQUNmLEVBQXVCO0lBRXZCLE1BQU0sSUFBSSxHQUFHLGdCQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQWdCLENBQUM7SUFDcEQsTUFBTSxRQUFRLEdBQUcsbUJBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFM0Msd0JBQVMsQ0FBQyxRQUFRLEVBQUUsdUNBQXVDLENBQUMsQ0FBQztJQUU3RCxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQVhELDZCQVdDIn0=
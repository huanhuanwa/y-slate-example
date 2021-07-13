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
exports.applyYjsEvents = exports.translateYjsEvent = void 0;
const slate_1 = require("slate");
const Y = __importStar(require("yjs"));
const array_event_1 = __importDefault(require("./array-event"));
const map_event_1 = __importDefault(require("./map-event"));
const text_event_1 = __importDefault(require("./text-event"));
/**
 * Translates a Yjs event into slate editor operations.
 *
 * @param event
 */
function translateYjsEvent(editor, event) {
    if (event instanceof Y.YArrayEvent) {
        return array_event_1.default(editor, event);
    }
    if (event instanceof Y.YMapEvent) {
        return map_event_1.default(editor, event);
    }
    if (event instanceof Y.YTextEvent) {
        return text_event_1.default(editor, event);
    }
    throw new Error('Unsupported yjs event');
}
exports.translateYjsEvent = translateYjsEvent;
/**
 * Applies multiple yjs events to a slate editor.
 *
 * @param event
 */
function applyYjsEvents(editor, events) {
    slate_1.Editor.withoutNormalizing(editor, () => {
        events.forEach((event) => translateYjsEvent(editor, event).forEach(editor.apply));
    });
}
exports.applyYjsEvents = applyYjsEvents;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwbHktdG8tc2xhdGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUEwQztBQUMxQyx1Q0FBeUI7QUFDekIsZ0VBQWdEO0FBQ2hELDREQUE0QztBQUM1Qyw4REFBOEM7QUFFOUM7Ozs7R0FJRztBQUNILFNBQWdCLGlCQUFpQixDQUMvQixNQUFjLEVBQ2QsS0FBZTtJQUVmLElBQUksS0FBSyxZQUFZLENBQUMsQ0FBQyxXQUFXLEVBQUU7UUFDbEMsT0FBTyxxQkFBbUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDM0M7SUFFRCxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsU0FBUyxFQUFFO1FBQ2hDLE9BQU8sbUJBQWlCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3pDO0lBRUQsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDLFVBQVUsRUFBRTtRQUNqQyxPQUFPLG9CQUFrQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMxQztJQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBakJELDhDQWlCQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixjQUFjLENBQUMsTUFBYyxFQUFFLE1BQWtCO0lBQy9ELGNBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1FBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUN2QixpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FDdkQsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQU5ELHdDQU1DIn0=
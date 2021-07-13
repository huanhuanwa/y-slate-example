"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withCursor = exports.CursorEditor = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const utils_1 = require("../cursor/utils");
const yjs_editor_1 = require("./yjs-editor");
const AWARENESS = new WeakMap();
exports.CursorEditor = {
    awareness(editor) {
        const awareness = AWARENESS.get(editor);
        tiny_invariant_1.default(awareness, 'CursorEditor without attaches awareness');
        return awareness;
    },
    updateCursor: (editor) => {
        const sharedType = yjs_editor_1.YjsEditor.sharedType(editor);
        const { selection } = editor;
        const anchor = selection &&
            utils_1.absolutePositionToRelativePosition(sharedType, selection.anchor);
        const focus = selection &&
            utils_1.absolutePositionToRelativePosition(sharedType, selection.focus);
        const awareness = exports.CursorEditor.awareness(editor);
        awareness.setLocalState(Object.assign(Object.assign({}, awareness.getLocalState()), { anchor, focus }));
    }
};
function withCursor(editor, awareness) {
    const e = editor;
    AWARENESS.set(e, awareness);
    e.awareness = awareness;
    const { onChange } = editor;
    e.onChange = () => {
        setTimeout(() => exports.CursorEditor.updateCursor(e), 0);
        if (onChange) {
            onChange();
        }
    };
    return e;
}
exports.withCursor = withCursor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Vyc29yLWVkaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW4vY3Vyc29yLWVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxvRUFBdUM7QUFFdkMsMkNBQXFFO0FBQ3JFLDZDQUF5QztBQUV6QyxNQUFNLFNBQVMsR0FBK0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQU0vQyxRQUFBLFlBQVksR0FBRztJQUMxQixTQUFTLENBQUMsTUFBb0I7UUFDNUIsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4Qyx3QkFBUyxDQUFDLFNBQVMsRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxZQUFZLEVBQUUsQ0FBQyxNQUFvQixFQUFRLEVBQUU7UUFDM0MsTUFBTSxVQUFVLEdBQUcsc0JBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUU3QixNQUFNLE1BQU0sR0FDVixTQUFTO1lBQ1QsMENBQWtDLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVuRSxNQUFNLEtBQUssR0FDVCxTQUFTO1lBQ1QsMENBQWtDLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsRSxNQUFNLFNBQVMsR0FBRyxvQkFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxTQUFTLENBQUMsYUFBYSxpQ0FBTSxTQUFTLENBQUMsYUFBYSxFQUFFLEtBQUUsTUFBTSxFQUFFLEtBQUssSUFBRyxDQUFDO0lBQzNFLENBQUM7Q0FDRixDQUFDO0FBRUYsU0FBZ0IsVUFBVSxDQUN4QixNQUFTLEVBQ1QsU0FBb0I7SUFFcEIsTUFBTSxDQUFDLEdBQUcsTUFBMEIsQ0FBQztJQUVyQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUV4QixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBRTVCLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQ2hCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVsRCxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDLENBQUM7SUFFRixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFwQkQsZ0NBb0JDIn0=
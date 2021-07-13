import invariant from 'tiny-invariant';
import { absolutePositionToRelativePosition } from '../cursor/utils';
import { YjsEditor } from './yjs-editor';
const AWARENESS = new WeakMap();
export const CursorEditor = {
    awareness(editor) {
        const awareness = AWARENESS.get(editor);
        invariant(awareness, 'CursorEditor without attaches awareness');
        return awareness;
    },
    updateCursor: (editor) => {
        const sharedType = YjsEditor.sharedType(editor);
        const { selection } = editor;
        const anchor = selection &&
            absolutePositionToRelativePosition(sharedType, selection.anchor);
        const focus = selection &&
            absolutePositionToRelativePosition(sharedType, selection.focus);
        const awareness = CursorEditor.awareness(editor);
        awareness.setLocalState(Object.assign(Object.assign({}, awareness.getLocalState()), { anchor, focus }));
    }
};
export function withCursor(editor, awareness) {
    const e = editor;
    AWARENESS.set(e, awareness);
    e.awareness = awareness;
    const { onChange } = editor;
    e.onChange = () => {
        setTimeout(() => CursorEditor.updateCursor(e), 0);
        if (onChange) {
            onChange();
        }
    };
    return e;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Vyc29yLWVkaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW4vY3Vyc29yLWVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpDLE1BQU0sU0FBUyxHQUErQixJQUFJLE9BQU8sRUFBRSxDQUFDO0FBTTVELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRztJQUMxQixTQUFTLENBQUMsTUFBb0I7UUFDNUIsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxTQUFTLENBQUMsU0FBUyxFQUFFLHlDQUF5QyxDQUFDLENBQUM7UUFDaEUsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELFlBQVksRUFBRSxDQUFDLE1BQW9CLEVBQVEsRUFBRTtRQUMzQyxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFFN0IsTUFBTSxNQUFNLEdBQ1YsU0FBUztZQUNULGtDQUFrQyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkUsTUFBTSxLQUFLLEdBQ1QsU0FBUztZQUNULGtDQUFrQyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEUsTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxTQUFTLENBQUMsYUFBYSxpQ0FBTSxTQUFTLENBQUMsYUFBYSxFQUFFLEtBQUUsTUFBTSxFQUFFLEtBQUssSUFBRyxDQUFDO0lBQzNFLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsTUFBUyxFQUNULFNBQW9CO0lBRXBCLE1BQU0sQ0FBQyxHQUFHLE1BQTBCLENBQUM7SUFFckMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFFeEIsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUU1QixDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsRUFBRTtRQUNoQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVsRCxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDLENBQUM7SUFFRixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUMifQ==
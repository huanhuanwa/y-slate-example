import { Editor } from 'slate';
import * as Y from 'yjs';
import translateArrayEvent from './array-event';
import translateMapEvent from './map-event';
import translateTextEvent from './text-event';
/**
 * Translates a Yjs event into slate editor operations.
 *
 * @param event
 */
export function translateYjsEvent(editor, event) {
    if (event instanceof Y.YArrayEvent) {
        return translateArrayEvent(editor, event);
    }
    if (event instanceof Y.YMapEvent) {
        return translateMapEvent(editor, event);
    }
    if (event instanceof Y.YTextEvent) {
        return translateTextEvent(editor, event);
    }
    throw new Error('Unsupported yjs event');
}
/**
 * Applies multiple yjs events to a slate editor.
 *
 * @param event
 */
export function applyYjsEvents(editor, events) {
    Editor.withoutNormalizing(editor, () => {
        events.forEach((event) => translateYjsEvent(editor, event).forEach(editor.apply));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwbHktdG8tc2xhdGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBYSxNQUFNLE9BQU8sQ0FBQztBQUMxQyxPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztBQUN6QixPQUFPLG1CQUFtQixNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLGlCQUFpQixNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLGtCQUFrQixNQUFNLGNBQWMsQ0FBQztBQUU5Qzs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixNQUFjLEVBQ2QsS0FBZTtJQUVmLElBQUksS0FBSyxZQUFZLENBQUMsQ0FBQyxXQUFXLEVBQUU7UUFDbEMsT0FBTyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDM0M7SUFFRCxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsU0FBUyxFQUFFO1FBQ2hDLE9BQU8saUJBQWlCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3pDO0lBRUQsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDLFVBQVUsRUFBRTtRQUNqQyxPQUFPLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMxQztJQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxjQUFjLENBQUMsTUFBYyxFQUFFLE1BQWtCO0lBQy9ELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1FBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUN2QixpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FDdkQsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyJ9
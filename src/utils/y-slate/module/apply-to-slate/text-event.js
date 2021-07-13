import { Node, Text } from 'slate';
import invariant from 'tiny-invariant';
import { toSlatePath } from '../utils/convert';
/**
 * Translates a Yjs text event into a slate operations.
 *
 * @param event
 */
export default function translateTextEvent(editor, event) {
    const targetPath = toSlatePath(event.path);
    const targetText = Node.get(editor, targetPath);
    invariant(Text.isText(targetText), 'Cannot apply text event to non-text node');
    let offset = 0;
    let { text } = targetText;
    const ops = [];
    event.changes.delta.forEach((delta) => {
        var _a, _b;
        if ('retain' in delta) {
            offset += (_a = delta.retain) !== null && _a !== void 0 ? _a : 0;
        }
        if ('delete' in delta) {
            const endOffset = offset + ((_b = delta.delete) !== null && _b !== void 0 ? _b : 0);
            ops.push({
                type: 'remove_text',
                offset,
                path: targetPath,
                text: text.slice(offset, endOffset)
            });
            text = text.slice(0, offset) + text.slice(endOffset);
        }
        if ('insert' in delta) {
            invariant(typeof delta.insert === 'string', `Unexpected text insert content type: expected string, got ${typeof delta.insert}`);
            ops.push({
                type: 'insert_text',
                offset,
                text: delta.insert,
                path: targetPath
            });
            offset += delta.insert.length;
            text = text.slice(0, offset) + delta.insert + text.slice(offset);
        }
    });
    return ops;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHBseS10by1zbGF0ZS90ZXh0LWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBVSxJQUFJLEVBQUUsSUFBSSxFQUFpQixNQUFNLE9BQU8sQ0FBQztBQUMxRCxPQUFPLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0M7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxPQUFPLFVBQVUsa0JBQWtCLENBQ3hDLE1BQWMsRUFDZCxLQUFtQjtJQUVuQixNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRWhELFNBQVMsQ0FDUCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUN2QiwwQ0FBMEMsQ0FDM0MsQ0FBQztJQUVGLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxVQUFVLENBQUM7SUFDMUIsTUFBTSxHQUFHLEdBQW9CLEVBQUUsQ0FBQztJQUVoQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7UUFDcEMsSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxNQUFBLEtBQUssQ0FBQyxNQUFNLG1DQUFJLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQUksUUFBUSxJQUFJLEtBQUssRUFBRTtZQUNyQixNQUFNLFNBQVMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFBLEtBQUssQ0FBQyxNQUFNLG1DQUFJLENBQUMsQ0FBQyxDQUFDO1lBRS9DLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLE1BQU07Z0JBQ04sSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUM7YUFDcEMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdEQ7UUFFRCxJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQUU7WUFDckIsU0FBUyxDQUNQLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQ2hDLDZEQUE2RCxPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FDbkYsQ0FBQztZQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLE1BQU07Z0JBQ04sSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNO2dCQUNsQixJQUFJLEVBQUUsVUFBVTthQUNqQixDQUFDLENBQUM7WUFFSCxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDOUIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIn0=
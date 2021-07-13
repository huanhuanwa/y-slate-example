import { Node, Text } from 'slate';
import invariant from 'tiny-invariant';
import { toSlateNode, toSlatePath } from '../utils/convert';
/**
 * Translates a Yjs array event into a slate operations.
 *
 * @param event
 */
export default function translateArrayEvent(editor, event) {
    const targetPath = toSlatePath(event.path);
    const targetElement = Node.get(editor, targetPath);
    invariant(!Text.isText(targetElement), 'Cannot apply array event to text node');
    let offset = 0;
    const ops = [];
    const children = Array.from(targetElement.children);
    event.changes.delta.forEach((delta) => {
        var _a, _b;
        if ('retain' in delta) {
            offset += (_a = delta.retain) !== null && _a !== void 0 ? _a : 0;
        }
        if ('delete' in delta) {
            const path = [...targetPath, offset];
            children.splice(offset, (_b = delta.delete) !== null && _b !== void 0 ? _b : 0).forEach((node) => {
                ops.push({ type: 'remove_node', path, node });
            });
        }
        if ('insert' in delta) {
            invariant(Array.isArray(delta.insert), `Unexpected array insert content type: expected array, got ${JSON.stringify(delta.insert)}`);
            const toInsert = delta.insert.map(toSlateNode);
            toInsert.forEach((node, i) => {
                ops.push({
                    type: 'insert_node',
                    path: [...targetPath, offset + i],
                    node
                });
            });
            children.splice(offset, 0, ...toInsert);
            offset += delta.insert.length;
        }
    });
    return ops;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwbHktdG8tc2xhdGUvYXJyYXktZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFVLElBQUksRUFBaUIsSUFBSSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQzFELE9BQU8sU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBR3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFNUQ7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxPQUFPLFVBQVUsbUJBQW1CLENBQ3pDLE1BQWMsRUFDZCxLQUFpQztJQUVqQyxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRW5ELFNBQVMsQ0FDUCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQzNCLHVDQUF1QyxDQUN4QyxDQUFDO0lBRUYsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsTUFBTSxHQUFHLEdBQW9CLEVBQUUsQ0FBQztJQUNoQyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVwRCxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7UUFDcEMsSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxNQUFBLEtBQUssQ0FBQyxNQUFNLG1DQUFJLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQUksUUFBUSxJQUFJLEtBQUssRUFBRTtZQUNyQixNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQUEsS0FBSyxDQUFDLE1BQU0sbUNBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzFELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQUU7WUFDckIsU0FBUyxDQUNQLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUMzQiw2REFBNkQsSUFBSSxDQUFDLFNBQVMsQ0FDekUsS0FBSyxDQUFDLE1BQU0sQ0FDYixFQUFFLENBQ0osQ0FBQztZQUVGLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRS9DLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBQ1AsSUFBSSxFQUFFLGFBQWE7b0JBQ25CLElBQUksRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ2pDLElBQUk7aUJBQ0wsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztZQUN4QyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDL0I7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyJ9
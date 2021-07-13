import invariant from 'tiny-invariant';
import { SyncNode } from '../../model';
import { getParent } from '../../path';
import { cloneSyncElement } from '../../utils';
/**
 * Applies a move node operation to a SharedType.
 *
 * @param doc
 * @param op
 */
export default function moveNode(doc, op) {
    const [from, fromIndex] = getParent(doc, op.path);
    const [to, toIndex] = getParent(doc, op.newPath);
    if (SyncNode.getText(from) !== undefined ||
        SyncNode.getText(to) !== undefined) {
        throw new TypeError('Can\'t move node as child of a text node');
    }
    const fromChildren = SyncNode.getChildren(from);
    const toChildren = SyncNode.getChildren(to);
    invariant(fromChildren, 'From element should not be a text node');
    invariant(toChildren, 'To element should not be a text node');
    const toMove = fromChildren.get(fromIndex);
    const toInsert = cloneSyncElement(toMove);
    fromChildren.delete(fromIndex);
    toChildren.insert(Math.min(toIndex, toChildren.length), [toInsert]);
    return doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS1ub2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcGx5LXRvLXlqcy9ub2RlL21vdmUtbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQWMsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRS9DOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE9BQU8sVUFBVSxRQUFRLENBQzlCLEdBQWUsRUFDZixFQUFxQjtJQUVyQixNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFakQsSUFDRSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVM7UUFDcEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxTQUFTLEVBQ2xDO1FBQ0EsTUFBTSxJQUFJLFNBQVMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0tBQ2pFO0lBRUQsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTVDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsd0NBQXdDLENBQUMsQ0FBQztJQUNsRSxTQUFTLENBQUMsVUFBVSxFQUFFLHNDQUFzQyxDQUFDLENBQUM7SUFFOUQsTUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUxQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVwRSxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMifQ==
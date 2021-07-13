import invariant from 'tiny-invariant';
import { SyncNode } from '../../model';
import { getParent } from '../../path';
import { cloneSyncElement } from '../../utils';
/**
 * Applies a merge node operation to a SharedType.
 *
 * @param doc
 * @param op
 */
export default function mergeNode(doc, op) {
    const [parent, index] = getParent(doc, op.path);
    const children = SyncNode.getChildren(parent);
    invariant(children, 'Parent of element should have children');
    const prev = children.get(index - 1);
    const next = children.get(index);
    const prevText = SyncNode.getText(prev);
    const nextText = SyncNode.getText(next);
    if (prevText && nextText) {
        prevText.insert(prevText.length, nextText.toString());
    }
    else {
        const nextChildren = SyncNode.getChildren(next);
        const prevChildren = SyncNode.getChildren(prev);
        invariant(nextChildren, 'Next element should have children');
        invariant(prevChildren, 'Prev element should have children');
        const toPush = nextChildren.map(cloneSyncElement);
        prevChildren.push(toPush);
    }
    children.delete(index, 1);
    return doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2Utbm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHBseS10by15anMvbm9kZS9tZXJnZS1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBYyxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN2QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFL0M7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsT0FBTyxVQUFVLFNBQVMsQ0FDL0IsR0FBZSxFQUNmLEVBQXNCO0lBRXRCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFaEQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxTQUFTLENBQUMsUUFBUSxFQUFFLHdDQUF3QyxDQUFDLENBQUM7SUFFOUQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqQyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFeEMsSUFBSSxRQUFRLElBQUksUUFBUSxFQUFFO1FBQ3hCLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUN2RDtTQUFNO1FBQ0wsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhELFNBQVMsQ0FBQyxZQUFZLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUM3RCxTQUFTLENBQUMsWUFBWSxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFFN0QsTUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xELFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDM0I7SUFFRCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMifQ==
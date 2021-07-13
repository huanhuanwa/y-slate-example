import invariant from 'tiny-invariant';
import { SyncNode } from '../../model';
import { getParent } from '../../path';
/**
 * Applies a remove node operation to a SharedType.
 *
 * @param doc
 * @param op
 */
export default function removeNode(doc, op) {
    const [parent, index] = getParent(doc, op.path);
    if (SyncNode.getText(parent) !== undefined) {
        throw new TypeError('Can\'t insert node into text node');
    }
    const children = SyncNode.getChildren(parent);
    invariant(children, 'Parent should have children');
    children.delete(index);
    return doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLW5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwbHktdG8teWpzL25vZGUvcmVtb3ZlLW5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFjLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXZDOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE9BQU8sVUFBVSxVQUFVLENBQ2hDLEdBQWUsRUFDZixFQUF1QjtJQUV2QixNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhELElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLEVBQUU7UUFDMUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0tBQzFEO0lBRUQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxTQUFTLENBQUMsUUFBUSxFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDbkQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV2QixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMifQ==
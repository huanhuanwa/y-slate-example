import invariant from 'tiny-invariant';
import { SyncElement } from '../../model';
import { getTarget } from '../../path';
/**
 * Applies a insert text operation to a SharedType.
 *
 * @param doc
 * @param op
 */
export default function insertText(doc, op) {
    const node = getTarget(doc, op.path);
    const nodeText = SyncElement.getText(node);
    invariant(nodeText, 'Apply text operation to non text node');
    nodeText.insert(op.offset, op.text);
    return doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXJ0LXRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwbHktdG8teWpzL3RleHQvaW5zZXJ0LXRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXZDOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE9BQU8sVUFBVSxVQUFVLENBQ2hDLEdBQWUsRUFDZixFQUF1QjtJQUV2QixNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQWdCLENBQUM7SUFDcEQsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUzQyxTQUFTLENBQUMsUUFBUSxFQUFFLHVDQUF1QyxDQUFDLENBQUM7SUFFN0QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMifQ==
import invariant from 'tiny-invariant';
import node from './node';
import text from './text';
const nullOp = (doc) => doc;
const opMappers = Object.assign(Object.assign(Object.assign({}, text), node), { 
    // SetSelection is currently a null op since we don't support cursors
    set_selection: nullOp });
/**
 * Applies a slate operation to a SharedType
 *
 * @param sharedType
 * @param op
 */
export function applySlateOp(sharedType, op) {
    const apply = opMappers[op.type];
    if (!apply) {
        throw new Error(`Unknown operation: ${op.type}`);
    }
    return apply(sharedType, op);
}
/**
 * Applies slate operations to a SharedType
 *
 * @param sharedType
 * @param op
 */
export default function applySlateOps(sharedType, ops) {
    invariant(sharedType.doc, 'Shared type without attached document');
    if (ops.length > 0) {
        sharedType.doc.transact(() => {
            ops.forEach((op) => applySlateOp(sharedType, op));
        });
    }
    return sharedType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwbHktdG8teWpzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQztBQUMxQixPQUFPLElBQUksTUFBTSxRQUFRLENBQUM7QUFHMUIsTUFBTSxNQUFNLEdBQWMsQ0FBQyxHQUFlLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUVuRCxNQUFNLFNBQVMsaURBQ1YsSUFBSSxHQUNKLElBQUk7SUFFUCxxRUFBcUU7SUFDckUsYUFBYSxFQUFFLE1BQU0sR0FDdEIsQ0FBQztBQUVGOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FDMUIsVUFBc0IsRUFDdEIsRUFBYTtJQUViLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUF5QixDQUFDO0lBQ3pELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUNsRDtJQUVELE9BQU8sS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsT0FBTyxVQUFVLGFBQWEsQ0FDbkMsVUFBc0IsRUFDdEIsR0FBZ0I7SUFFaEIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsdUNBQXVDLENBQUMsQ0FBQztJQUVuRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ2xCLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUMzQixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUVELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUMifQ==
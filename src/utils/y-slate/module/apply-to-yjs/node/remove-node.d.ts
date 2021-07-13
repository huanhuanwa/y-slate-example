import { RemoveNodeOperation } from 'slate';
import { SharedType } from '../../model';
/**
 * Applies a remove node operation to a SharedType.
 *
 * @param doc
 * @param op
 */
export default function removeNode(doc: SharedType, op: RemoveNodeOperation): SharedType;

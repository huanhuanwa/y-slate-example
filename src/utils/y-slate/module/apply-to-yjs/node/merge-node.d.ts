import { MergeNodeOperation } from 'slate';
import { SharedType } from '../../model';
/**
 * Applies a merge node operation to a SharedType.
 *
 * @param doc
 * @param op
 */
export default function mergeNode(doc: SharedType, op: MergeNodeOperation): SharedType;

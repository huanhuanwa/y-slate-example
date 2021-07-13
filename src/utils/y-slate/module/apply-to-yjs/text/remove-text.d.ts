import { RemoveTextOperation } from 'slate';
import { SharedType } from '../../model';
/**
 * Applies a remove text operation to a SharedType.
 *
 * @param doc
 * @param op
 */
export default function removeText(doc: SharedType, op: RemoveTextOperation): SharedType;

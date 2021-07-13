import { InsertTextOperation } from 'slate';
import { SharedType } from '../../model';
/**
 * Applies a insert text operation to a SharedType.
 *
 * @param doc
 * @param op
 */
export default function insertText(doc: SharedType, op: InsertTextOperation): SharedType;

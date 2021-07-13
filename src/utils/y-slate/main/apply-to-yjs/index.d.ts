import { Operation } from 'slate';
import { SharedType } from '../model';
/**
 * Applies a slate operation to a SharedType
 *
 * @param sharedType
 * @param op
 */
export declare function applySlateOp(sharedType: SharedType, op: Operation): SharedType;
/**
 * Applies slate operations to a SharedType
 *
 * @param sharedType
 * @param op
 */
export default function applySlateOps(sharedType: SharedType, ops: Operation[]): SharedType;

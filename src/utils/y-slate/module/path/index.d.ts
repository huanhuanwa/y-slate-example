import { Path } from 'slate';
import * as Y from 'yjs';
import { SharedType, SyncNode } from '../model';
/**
 * Returns the SyncNode referenced by the path
 *
 * @param doc
 * @param path
 */
export declare function getTarget(doc: SharedType, path: Path): SyncNode;
export declare function getParent(doc: SharedType, path: Path, level?: number): [SyncNode, number];
/**
 * Returns the position of the sync item inside inside it's parent array.
 *
 * @param item
 */
export declare function getArrayPosition(item: Y.Item): number;
/**
 * Returns the document path of a sync item
 *
 * @param node
 */
export declare function getSyncNodePath(node: SyncNode): Path;

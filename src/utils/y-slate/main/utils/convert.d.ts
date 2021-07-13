import { Node, Path } from 'slate';
import { SharedType, SyncElement } from '../model';
/**
 * Converts a sync element to a slate node
 *
 * @param element
 */
export declare function toSlateNode(element: SyncElement): Node;
/**
 * Converts a SharedType to a Slate doc
 * @param doc
 */
export declare function toSlateDoc(doc: SharedType): Node[];
/**
 * Converts a slate node to a sync element
 *
 * @param node
 */
export declare function toSyncElement(node: Node): SyncElement;
/**
 * Converts all elements int a Slate doc to SyncElements and adds them
 * to the SharedType
 *
 * @param sharedType
 * @param doc
 */
export declare function toSharedType(sharedType: SharedType, doc: Node[]): void;
/**
 * Converts a SharedType path the a slate path
 *
 * @param path
 */
export declare function toSlatePath(path: (string | number)[]): Path;

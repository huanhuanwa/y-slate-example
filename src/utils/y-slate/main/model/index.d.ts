import { Range } from 'slate';
import * as Y from 'yjs';
export declare type SyncElement = Y.Map<any>;
export declare type SharedType = Y.Array<SyncElement>;
export declare type SyncNode = SharedType | SyncElement;
export interface Cursor extends Range {
    data: {
        [key: string]: unknown;
    };
}
export declare const SyncElement: {
    getText(element: SyncElement): Y.Text | undefined;
    getChildren(element: SyncElement): Y.Array<SyncElement> | undefined;
};
export declare const SyncNode: {
    getChildren(node: SyncNode): Y.Array<SyncElement> | undefined;
    getText(node: SyncNode): Y.Text | undefined;
};

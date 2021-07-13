import { Editor, Operation } from 'slate';
import * as Y from 'yjs';
import { SharedType } from '../model';
export interface YjsEditor extends Editor {
    sharedType: SharedType;
}
export declare const YjsEditor: {
    /**
     * Set the editor value to the content of the to the editor bound shared type.
     */
    synchronizeValue: (e: YjsEditor) => void;
    /**
     * Returns whether the editor currently is applying remote changes.
     */
    sharedType: (editor: YjsEditor) => SharedType;
    /**
     * Applies a slate operations to the bound shared type.
     */
    applySlateOperations: (editor: YjsEditor, operations: Operation[]) => void;
    /**
     * Returns whether the editor currently is applying remote changes.
     */
    isRemote: (editor: YjsEditor) => boolean;
    /**
     * Performs an action as a remote operation.
     */
    asRemote: (editor: YjsEditor, fn: () => void) => void;
    /**
     * Apply Yjs events to slate
     */
    applyYjsEvents: (editor: YjsEditor, events: Y.YEvent[]) => void;
    /**
     * Performs an action as a local operation.
     */
    asLocal: (editor: YjsEditor, fn: () => void) => void;
    /**
     * Returns whether the editor currently is applying a remote change to the yjs doc.
     */
    isLocal: (editor: YjsEditor) => boolean;
};
export declare function withYjs<T extends Editor>(editor: T, sharedType: SharedType): T & YjsEditor;

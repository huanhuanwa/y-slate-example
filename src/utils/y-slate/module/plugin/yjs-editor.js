import { Editor } from 'slate';
import invariant from 'tiny-invariant';
import { applyYjsEvents } from '../apply-to-slate';
import applySlateOps from '../apply-to-yjs';
import { toSlateDoc } from '../utils/convert';
const IS_REMOTE = new WeakSet();
const IS_LOCAL = new WeakSet();
const SHARED_TYPES = new WeakMap();
export const YjsEditor = {
    /**
     * Set the editor value to the content of the to the editor bound shared type.
     */
    synchronizeValue: (e) => {
        Editor.withoutNormalizing(e, () => {
            e.children = toSlateDoc(e.sharedType);
            e.onChange();
        });
    },
    /**
     * Returns whether the editor currently is applying remote changes.
     */
    sharedType: (editor) => {
        const sharedType = SHARED_TYPES.get(editor);
        invariant(sharedType, 'YjsEditor without attached shared type');
        return sharedType;
    },
    /**
     * Applies a slate operations to the bound shared type.
     */
    applySlateOperations: (editor, operations) => {
        YjsEditor.asLocal(editor, () => {
            applySlateOps(YjsEditor.sharedType(editor), operations);
        });
    },
    /**
     * Returns whether the editor currently is applying remote changes.
     */
    isRemote: (editor) => {
        return IS_REMOTE.has(editor);
    },
    /**
     * Performs an action as a remote operation.
     */
    asRemote: (editor, fn) => {
        const wasRemote = YjsEditor.isRemote(editor);
        IS_REMOTE.add(editor);
        fn();
        if (!wasRemote) {
            Promise.resolve().then(() => IS_REMOTE.delete(editor));
        }
    },
    /**
     * Apply Yjs events to slate
     */
    applyYjsEvents: (editor, events) => {
        YjsEditor.asRemote(editor, () => {
            applyYjsEvents(editor, events);
        });
    },
    /**
     * Performs an action as a local operation.
     */
    asLocal: (editor, fn) => {
        const wasLocal = YjsEditor.isLocal(editor);
        IS_LOCAL.add(editor);
        fn();
        if (!wasLocal) {
            IS_LOCAL.delete(editor);
        }
    },
    /**
     * Returns whether the editor currently is applying a remote change to the yjs doc.
     */
    isLocal: (editor) => {
        return IS_LOCAL.has(editor);
    }
};
export function withYjs(editor, sharedType) {
    const e = editor;
    e.sharedType = sharedType;
    SHARED_TYPES.set(editor, sharedType);
    setTimeout(() => {
        YjsEditor.synchronizeValue(e);
    });
    sharedType.observeDeep((events) => {
        if (!YjsEditor.isLocal(e)) {
            YjsEditor.applyYjsEvents(e, events);
        }
    });
    const { onChange } = editor;
    e.onChange = () => {
        if (!YjsEditor.isRemote(e)) {
            YjsEditor.applySlateOperations(e, e.operations);
        }
        onChange();
    };
    return e;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWpzLWVkaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW4veWpzLWVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFhLE1BQU0sT0FBTyxDQUFDO0FBQzFDLE9BQU8sU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLGFBQWEsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFOUMsTUFBTSxTQUFTLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7QUFDakQsTUFBTSxRQUFRLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7QUFDaEQsTUFBTSxZQUFZLEdBQWdDLElBQUksT0FBTyxFQUFFLENBQUM7QUFNaEUsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHO0lBQ3ZCOztPQUVHO0lBQ0gsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFZLEVBQVEsRUFBRTtRQUN2QyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUNoQyxDQUFDLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVLEVBQUUsQ0FBQyxNQUFpQixFQUFjLEVBQUU7UUFDNUMsTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxTQUFTLENBQUMsVUFBVSxFQUFFLHdDQUF3QyxDQUFDLENBQUM7UUFDaEUsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUUsQ0FB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
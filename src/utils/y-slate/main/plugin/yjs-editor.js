"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withYjs = exports.YjsEditor = void 0;
const slate_1 = require("slate");
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const apply_to_slate_1 = require("../apply-to-slate");
const apply_to_yjs_1 = __importDefault(require("../apply-to-yjs"));
const convert_1 = require("../utils/convert");
const IS_REMOTE = new WeakSet();
const IS_LOCAL = new WeakSet();
const SHARED_TYPES = new WeakMap();
exports.YjsEditor = {
    /**
     * Set the editor value to the content of the to the editor bound shared type.
     */
    synchronizeValue: (e) => {
        slate_1.Editor.withoutNormalizing(e, () => {
            e.children = convert_1.toSlateDoc(e.sharedType);
            e.onChange();
        });
    },
    /**
     * Returns whether the editor currently is applying remote changes.
     */
    sharedType: (editor) => {
        const sharedType = SHARED_TYPES.get(editor);
        tiny_invariant_1.default(sharedType, 'YjsEditor without attached shared type');
        return sharedType;
    },
    /**
     * Applies a slate operations to the bound shared type.
     */
    applySlateOperations: (editor, operations) => {
        exports.YjsEditor.asLocal(editor, () => {
            apply_to_yjs_1.default(exports.YjsEditor.sharedType(editor), operations);
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
        const wasRemote = exports.YjsEditor.isRemote(editor);
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
        exports.YjsEditor.asRemote(editor, () => {
            apply_to_slate_1.applyYjsEvents(editor, events);
        });
    },
    /**
     * Performs an action as a local operation.
     */
    asLocal: (editor, fn) => {
        const wasLocal = exports.YjsEditor.isLocal(editor);
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
function withYjs(editor, sharedType) {
    const e = editor;
    e.sharedType = sharedType;
    SHARED_TYPES.set(editor, sharedType);
    setTimeout(() => {
        exports.YjsEditor.synchronizeValue(e);
    });
    sharedType.observeDeep((events) => {
        if (!exports.YjsEditor.isLocal(e)) {
            exports.YjsEditor.applyYjsEvents(e, events);
        }
    });
    const { onChange } = editor;
    e.onChange = () => {
        if (!exports.YjsEditor.isRemote(e)) {
            exports.YjsEditor.applySlateOperations(e, e.operations);
        }
        onChange();
    };
    return e;
}
exports.withYjs = withYjs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWpzLWVkaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW4veWpzLWVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpQ0FBMEM7QUFDMUMsb0VBQXVDO0FBRXZDLHNEQUFtRDtBQUNuRCxtRUFBNEM7QUFFNUMsOENBQThDO0FBRTlDLE1BQU0sU0FBUyxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2pELE1BQU0sUUFBUSxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2hELE1BQU0sWUFBWSxHQUFnQyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBTW5ELFFBQUEsU0FBUyxHQUFHO0lBQ3ZCOztPQUVHO0lBQ0gsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFZLEVBQVEsRUFBRTtRQUN2QyxjQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUNoQyxDQUFDLENBQUMsUUFBUSxHQUFHLG9CQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVSxFQUFFLENBQUMsTUFBaUIsRUFBYyxFQUFFO1FBQzVDLE1BQU0sVUFBVSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsd0JBQVMsQ0FBQyxVQUFVLEVBQUUsd0NBQXdDLENBQUMsQ0FBQztRQUNoRSxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxvQkFBb0IsRUFBRSxDQUFDLE1BQWlCLEVBQUUsVUFBdUIsRUFBUSxFQUFFO1FBQ3pFLGlCQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDN0Isc0JBQWEsQ0FBQyxpQkFBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxV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
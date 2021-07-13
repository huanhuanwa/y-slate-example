import { Editor, TextOperation } from 'slate';
import * as Y from 'yjs';
/**
 * Translates a Yjs text event into a slate operations.
 *
 * @param event
 */
export default function translateTextEvent(editor: Editor, event: Y.YTextEvent): TextOperation[];

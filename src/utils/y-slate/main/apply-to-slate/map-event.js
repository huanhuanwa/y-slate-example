"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slate_1 = require("slate");
const convert_1 = require("../utils/convert");
/**
 * Translates a Yjs map event into a slate operations.
 *
 * @param event
 */
function translateMapEvent(editor, event) {
    const targetPath = convert_1.toSlatePath(event.path);
    const targetSyncElement = event.target;
    const targetElement = slate_1.Node.get(editor, targetPath);
    const keyChanges = Array.from(event.changes.keys.entries());
    const newProperties = Object.fromEntries(keyChanges.map(([key, info]) => [
        key,
        info.action === 'delete' ? null : targetSyncElement.get(key)
    ]));
    const properties = Object.fromEntries(keyChanges.map(([key]) => [key, targetElement[key]]));
    return [{ type: 'set_node', newProperties, properties, path: targetPath }];
}
exports.default = translateMapEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcGx5LXRvLXNsYXRlL21hcC1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFvRDtBQUdwRCw4Q0FBK0M7QUFFL0M7Ozs7R0FJRztBQUNILFNBQXdCLGlCQUFpQixDQUN2QyxNQUFjLEVBQ2QsS0FBMkI7SUFFM0IsTUFBTSxVQUFVLEdBQUcscUJBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsTUFBcUIsQ0FBQztJQUN0RCxNQUFNLGFBQWEsR0FBRyxZQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUVuRCxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUQsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FDdEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUM5QixHQUFHO1FBQ0gsSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztLQUM3RCxDQUFDLENBQ0gsQ0FBQztJQUVGLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQ25DLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUNyRCxDQUFDO0lBRUYsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQzdFLENBQUM7QUFyQkQsb0NBcUJDIn0=
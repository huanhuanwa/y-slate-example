"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCursors = void 0;
const slate_1 = require("slate");
const utils_1 = require("../cursor/utils");
const rxjs_1 = require("rxjs");
const useCursors = (editor) => {
    let decorate$ = new rxjs_1.Subject();
    let cursors = [];
    editor.awareness.on('update', () => {
        cursors = Array.from(editor.awareness.getStates())
            .filter(([clientId]) => { var _a; return clientId !== ((_a = editor.sharedType.doc) === null || _a === void 0 ? void 0 : _a.clientID); })
            .map(([, awareness]) => {
            let anchor = null;
            let focus = null;
            if (awareness.anchor) {
                anchor = utils_1.relativePositionToAbsolutePosition(editor.sharedType, awareness.anchor);
            }
            if (awareness.focus) {
                focus = utils_1.relativePositionToAbsolutePosition(editor.sharedType, awareness.focus);
            }
            return { anchor, focus, data: awareness };
        })
            .filter((cursor) => cursor.anchor && cursor.focus);
        const decorate = ([node, path]) => {
            const ranges = [];
            if (slate_1.Text.isText(node) && (cursors === null || cursors === void 0 ? void 0 : cursors.length)) {
                cursors.forEach((cursor) => {
                    if (slate_1.Range.includes(cursor, path)) {
                        const { focus, anchor, data } = cursor;
                        const isFocusNode = slate_1.Path.equals(focus.path, path);
                        const isAnchorNode = slate_1.Path.equals(anchor.path, path);
                        const isForward = slate_1.Range.isForward({ anchor, focus });
                        ranges.push({
                            data,
                            isForward,
                            isCaret: isFocusNode,
                            anchor: {
                                path,
                                // eslint-disable-next-line no-nested-ternary
                                offset: isAnchorNode
                                    ? anchor.offset
                                    : isForward
                                        ? 0
                                        : node.text.length
                            },
                            focus: {
                                path,
                                // eslint-disable-next-line no-nested-ternary
                                offset: isFocusNode
                                    ? focus.offset
                                    : isForward
                                        ? node.text.length
                                        : 0
                            }
                        });
                    }
                });
            }
            return ranges;
        };
        decorate$.next({
            decorate,
            cursors
        });
    });
};
exports.useCursors = useCursors;
exports.default = exports.useCursors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWN1cnNvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGx1Z2luL3VzZS1jdXJzb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFxRDtBQUVyRCwyQ0FBcUU7QUFFckUsK0JBQStCO0FBRXhCLE1BQU0sVUFBVSxHQUFHLENBQ3hCLE1BQW9CLEVBQ3BCLEVBQUU7SUFDRixJQUFJLFNBQVMsR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO0lBQzlCLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztJQUUzQixNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ2pDLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDL0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFdBQUMsT0FBQSxRQUFRLE1BQUssTUFBQSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsMENBQUUsUUFBUSxDQUFBLENBQUEsRUFBQSxDQUFDO2FBQ3BFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFO1lBQ3JCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7WUFFakIsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNwQixNQUFNLEdBQUcsMENBQWtDLENBQ3pDLE1BQU0sQ0FBQyxVQUFVLEVBQ2pCLFNBQVMsQ0FBQyxNQUFNLENBQ2pCLENBQUM7YUFDSDtZQUVELElBQUksU0FBUyxDQUFDLEtBQUssRUFBRTtnQkFDbkIsS0FBSyxHQUFHLDBDQUFrQyxDQUN4QyxNQUFNLENBQUMsVUFBVSxFQUNqQixTQUFTLENBQUMsS0FBSyxDQUNoQixDQUFDO2FBQ0g7WUFFRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDNUMsQ0FBQyxDQUFDO2FBQ0QsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQWEsQ0FBQztRQUNqRSxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBWSxFQUFFLEVBQUU7WUFDM0MsTUFBTSxNQUFNLEdBQVksRUFBRSxDQUFDO1lBQzNCLElBQUksWUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsTUFBTSxDQUFBLEVBQUU7Z0JBQ3hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDekIsSUFBSSxhQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTt3QkFDaEMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDO3dCQUV2QyxNQUFNLFdBQVcsR0FBRyxZQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ2xELE1BQU0sWUFBWSxHQUFHLFlBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDcEQsTUFBTSxTQUFTLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO3dCQUVyRCxNQUFNLENBQUMsSUFBSSxDQUFDOzRCQUNWLElBQUk7NEJBQ0osU0FBUzs0QkFDVCxPQUFPLEVBQUUsV0FBVzs0QkFDcEIsTUFBTSxFQUFFO2dDQUNOLElBQUk7Z0NBQ0osNkNBQTZDO2dDQUM3QyxNQUFNLEVBQUUsWUFBWTtvQ0FDbEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNO29DQUNmLENBQUMsQ0FBQyxTQUFTO3dDQUNULENBQUMsQ0FBQyxDQUFDO3dDQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07NkJBQ3ZCOzRCQUNELEtBQUssRUFBRTtnQ0FDTCxJQUFJO2dDQUNKLDZDQUE2QztnQ0FDN0MsTUFBTSxFQUFFLFdBQVc7b0NBQ2pCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTTtvQ0FDZCxDQUFDLENBQUMsU0FBUzt3Q0FDVCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO3dDQUNsQixDQUFDLENBQUMsQ0FBQzs2QkFDUjt5QkFDRixDQUFDLENBQUM7cUJBQ0o7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztRQUNGLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDYixRQUFRO1lBQ1IsT0FBTztTQUNSLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBMUVXLFFBQUEsVUFBVSxjQTBFckI7QUFFRixrQkFBZSxrQkFBVSxDQUFDIn0=
import { Path, Range, Text } from 'slate';
import { relativePositionToAbsolutePosition } from '../cursor/utils';
import { Subject } from 'rxjs';
export const useCursors = (editor) => {
    let decorate$ = new Subject();
    let cursors = [];
    editor.awareness.on('update', () => {
        cursors = Array.from(editor.awareness.getStates())
            .filter(([clientId]) => { var _a; return clientId !== ((_a = editor.sharedType.doc) === null || _a === void 0 ? void 0 : _a.clientID); })
            .map(([, awareness]) => {
            let anchor = null;
            let focus = null;
            if (awareness.anchor) {
                anchor = relativePositionToAbsolutePosition(editor.sharedType, awareness.anchor);
            }
            if (awareness.focus) {
                focus = relativePositionToAbsolutePosition(editor.sharedType, awareness.focus);
            }
            return { anchor, focus, data: awareness };
        })
            .filter((cursor) => cursor.anchor && cursor.focus);
        const decorate = ([node, path]) => {
            const ranges = [];
            if (Text.isText(node) && (cursors === null || cursors === void 0 ? void 0 : cursors.length)) {
                cursors.forEach((cursor) => {
                    if (Range.includes(cursor, path)) {
                        const { focus, anchor, data } = cursor;
                        const isFocusNode = Path.equals(focus.path, path);
                        const isAnchorNode = Path.equals(anchor.path, path);
                        const isForward = Range.isForward({ anchor, focus });
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
export default useCursors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWN1cnNvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGx1Z2luL3VzZS1jdXJzb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUVyRCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUN4QixNQUFvQixFQUNwQixFQUFFO0lBQ0YsSUFBSSxTQUFTLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUM5QixJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7SUFFM0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUNqQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQy9DLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxXQUFDLE9BQUEsUUFBUSxNQUFLLE1BQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLDBDQUFFLFFBQVEsQ0FBQSxDQUFBLEVBQUEsQ0FBQzthQUNwRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBRWpCLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDcEIsTUFBTSxHQUFHLGtDQUFrQyxDQUN6QyxNQUFNLENBQUMsVUFBVSxFQUNqQixTQUFTLENBQUMsTUFBTSxDQUNqQixDQUFDO2FBQ0g7WUFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ25CLEtBQUssR0FBRyxrQ0FBa0MsQ0FDeEMsTUFBTSxDQUFDLFVBQVUsRUFDakIsU0FBUyxDQUFDLEtBQUssQ0FDaEIsQ0FBQzthQUNIO1lBRUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDO1FBQzVDLENBQUMsQ0FBQzthQUNELE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFhLENBQUM7UUFDakUsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQVksRUFBRSxFQUFFO1lBQzNDLE1BQU0sTUFBTSxHQUFZLEVBQUUsQ0FBQztZQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sQ0FBQSxFQUFFO2dCQUN4QyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7b0JBQ3pCLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7d0JBQ2hDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQzt3QkFFdkMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNsRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3BELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzt3QkFFckQsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDVixJQUFJOzRCQUNKLFNBQVM7NEJBQ1QsT0FBTyxFQUFFLFdBQVc7NEJBQ3BCLE1BQU0sRUFBRTtnQ0FDTixJQUFJO2dDQUNKLDZDQUE2QztnQ0FDN0MsTUFBTSxFQUFFLFlBQVk7b0NBQ2xCLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTTtvQ0FDZixDQUFDLENBQUMsU0FBUzt3Q0FDVCxDQUFDLENBQUMsQ0FBQzt3Q0FDSCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNOzZCQUN2Qjs0QkFDRCxLQUFLLEVBQUU7Z0NBQ0wsSUFBSTtnQ0FDSiw2Q0FBNkM7Z0NBQzdDLE1BQU0sRUFBRSxXQUFXO29DQUNqQixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU07b0NBQ2QsQ0FBQyxDQUFDLFNBQVM7d0NBQ1QsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTt3Q0FDbEIsQ0FBQyxDQUFDLENBQUM7NkJBQ1I7eUJBQ0YsQ0FBQyxDQUFDO3FCQUNKO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUM7UUFDRixTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ2IsUUFBUTtZQUNSLE9BQU87U0FDUixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLGVBQWUsVUFBVSxDQUFDIn0=
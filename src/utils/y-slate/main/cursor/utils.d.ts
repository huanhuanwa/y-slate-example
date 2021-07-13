import { Point } from 'slate';
import * as Y from 'yjs';
import { SharedType } from '../model';
export declare function absolutePositionToRelativePosition(sharedType: SharedType, point: Point): Y.RelativePosition;
export declare function relativePositionToAbsolutePosition(sharedType: SharedType, relativePosition: Y.RelativePosition): Point | null;

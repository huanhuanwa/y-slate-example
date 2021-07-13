"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applySlateOps = exports.applyYjsEvents = exports.translateYjsEvent = exports.toSyncElement = exports.toSlateDoc = exports.toSharedType = exports.YjsEditor = exports.withYjs = exports.withCursor = exports.useCursors = exports.SyncNode = exports.SyncElement = exports.CursorEditor = void 0;
const apply_to_slate_1 = require("./apply-to-slate");
Object.defineProperty(exports, "applyYjsEvents", { enumerable: true, get: function () { return apply_to_slate_1.applyYjsEvents; } });
Object.defineProperty(exports, "translateYjsEvent", { enumerable: true, get: function () { return apply_to_slate_1.translateYjsEvent; } });
const apply_to_yjs_1 = __importDefault(require("./apply-to-yjs"));
exports.applySlateOps = apply_to_yjs_1.default;
const model_1 = require("./model");
Object.defineProperty(exports, "SyncElement", { enumerable: true, get: function () { return model_1.SyncElement; } });
Object.defineProperty(exports, "SyncNode", { enumerable: true, get: function () { return model_1.SyncNode; } });
const plugin_1 = require("./plugin");
Object.defineProperty(exports, "CursorEditor", { enumerable: true, get: function () { return plugin_1.CursorEditor; } });
Object.defineProperty(exports, "useCursors", { enumerable: true, get: function () { return plugin_1.useCursors; } });
Object.defineProperty(exports, "withCursor", { enumerable: true, get: function () { return plugin_1.withCursor; } });
Object.defineProperty(exports, "withYjs", { enumerable: true, get: function () { return plugin_1.withYjs; } });
Object.defineProperty(exports, "YjsEditor", { enumerable: true, get: function () { return plugin_1.YjsEditor; } });
const utils_1 = require("./utils");
Object.defineProperty(exports, "toSharedType", { enumerable: true, get: function () { return utils_1.toSharedType; } });
Object.defineProperty(exports, "toSlateDoc", { enumerable: true, get: function () { return utils_1.toSlateDoc; } });
Object.defineProperty(exports, "toSyncElement", { enumerable: true, get: function () { return utils_1.toSyncElement; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscURBQXFFO0FBeUJuRSwrRkF6Qk8sK0JBQWMsT0F5QlA7QUFEZCxrR0F4QnVCLGtDQUFpQixPQXdCdkI7QUF2Qm5CLGtFQUEyQztBQXlCekMsd0JBekJLLHNCQUFhLENBeUJMO0FBeEJmLG1DQUE0RDtBQWExRCw0RkFibUIsbUJBQVcsT0FhbkI7QUFDWCx5RkFkZ0MsZ0JBQVEsT0FjaEM7QUFiVixxQ0FNa0I7QUFLaEIsNkZBVkEscUJBQVksT0FVQTtBQUdaLDJGQVpBLG1CQUFVLE9BWUE7QUFDViwyRkFaQSxtQkFBVSxPQVlBO0FBQ1Ysd0ZBWkEsZ0JBQU8sT0FZQTtBQUNQLDBGQVpBLGtCQUFTLE9BWUE7QUFWWCxtQ0FBa0U7QUFXaEUsNkZBWE8sb0JBQVksT0FXUDtBQUNaLDJGQVpxQixrQkFBVSxPQVlyQjtBQUNWLDhGQWJpQyxxQkFBYSxPQWFqQyJ9
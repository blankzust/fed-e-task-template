"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["LOADING"] = 1] = "LOADING";
    PostStatus[PostStatus["LOADED"] = 2] = "LOADED";
    PostStatus[PostStatus["LOADFAIL"] = 3] = "LOADFAIL";
})(PostStatus || (PostStatus = {}));
PostStatus;
PostStatus[0];
// Constant[0]
var res = {
    status: PostStatus.LOADING,
    nextStatus: 4 /* LOADFAIL */
};

"use strict";
var Comment = (function () {
    function Comment(userId, id, title, body) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
    Comment.prototype.toForm = function () {
        return "userId=" + this.userId + "&id=" + this.id + "&title=" + this.title + "&body=" + this.body;
    };
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map
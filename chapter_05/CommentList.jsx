import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "짱구",
        comment: "안녕하세요, 짱구입니다.",
    },
    {
        name: "펭수",
        comment: "리액트 재미있어요!",
    },
    {
        name: "펭도리",
        comment: "저도 리액트 배워볼래요",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) =>  {
                return (
                    <Comment name={comment.name} comment={comment.comment}  />
                );
            })}
        </div>
    );
}

export default CommentList;
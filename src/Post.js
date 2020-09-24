import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt={username}
          src="./images/avatar.jpg"
        />
        <h4>{username}</h4>
      </div>

      <img src={imageUrl} alt="" className="post_image" />
      <h5 className="post_text">
        <strong>{username}</strong> {caption}
      </h5>
    </div>
  );
}

export default Post;

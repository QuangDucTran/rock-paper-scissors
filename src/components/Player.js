import React from "react";

function Player({ avatarUrl, name }) {
  //TODO
  return (
    <div className="user">
      <span>{name}</span>
      <img className="avatar" src={avatarUrl} alt="avatar" />
    </div>
  );
}

export default Player;

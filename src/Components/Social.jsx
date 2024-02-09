import React from "react";

export default function Social({ social }) {
  return (
    <div className="flex space-x-2">
      {social.map((socialItem, index) => (
        <img
          key={index}
          src={socialItem.src}
          className={socialItem.className}
          alt=""
        />
      ))}
    </div>
  );
}

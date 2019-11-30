import React from 'react';

const cdn_url = process.env.REACT_APP_AVATAR_CDN;

function Avatar({ icon, alt, type }) {
  let url = `${cdn_url}/${icon}`;

  if (!icon) {
    url = `${cdn_url}/img/${type}/${alt}.png`;
  }

  return (
    <div className="Avatar">
      <img src={url} alt={alt} className="Avatar__img" />
    </div>
  );
}

export default Avatar;

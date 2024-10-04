import * as React from 'react';

const LocationVideo = () => (
  // eslint-disable-next-line jsx-a11y/media-has-caption
  <video
    loop
    controls
    preload="none"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    poster="path.webp"
  >
    <source src="welcome.mp4" type="video/mp4" />
  </video>
);

export const MemoizedLocationVideo = React.memo(LocationVideo);

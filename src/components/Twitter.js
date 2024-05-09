import React from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";
function Twitter({ url, title }) {
  return (
    <TwitterShareButton url={url} title={title}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  );
}

export default Twitter;

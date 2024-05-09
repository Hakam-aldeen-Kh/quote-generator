import React from "react";
import { FacebookShareButton ,FacebookIcon} from "react-share";

function Facebook({url}) {
  return (
    <div>
      <FacebookShareButton
        url={url}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
}

export default Facebook;

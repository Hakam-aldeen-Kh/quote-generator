import React from "react";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
function Whatsapp({ title,url }) {
  return (
    <div>
      <WhatsappShareButton title={title} url={url}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
}

export default Whatsapp;

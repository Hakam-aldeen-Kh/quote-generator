import React from "react";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
function Whatsapp({ url }) {
  return (
    <div>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
}

export default Whatsapp;

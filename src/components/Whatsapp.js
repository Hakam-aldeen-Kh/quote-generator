import React from "react";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
function Whatsapp({ url }) {
  return (
    <WhatsappShareButton url={url}>
      <WhatsappIcon size={32} round />
    </WhatsappShareButton>
  );
}

export default Whatsapp;

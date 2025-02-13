import { useEffect } from "react";
import { FBWindow } from "./types";
import { MessengerEmbedProps } from "./types";

declare let window: FBWindow;

export default function MessengerChat({
  shouldInitializeEmbed
}: MessengerEmbedProps) {
  useEffect(() => {
    if (!shouldInitializeEmbed) {
      return;
    }

    const chatbox = document.getElementById("fb-customer-chat");
    if (chatbox) {
      chatbox.setAttribute(
        "page_id",
        process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || ""
      );
      chatbox.setAttribute("attribution", "biz_inbox");
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v18.0"
      });
    };

    (function (d, s, id) {
      const fts = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      const ts = d.createElement(s) as HTMLScriptElement;
      ts.id = id;
      ts.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      if (fts.parentNode) {
        fts.parentNode.insertBefore(ts, fts);
      }
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat outline-none"></div>
    </div>
  );
}

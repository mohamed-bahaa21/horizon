import React from "react";

import SERVER_URI from "../../reusable/api";

const demos = {
  horizon:
    `<iframe width="100%" height="500px" scrolling="yes" frameborder="yes" allow="autoplay" src='${SERVER_URI}'></iframe>`,
};

//codesandbox.io/s/react-iframe-demo-g3vst codePen =
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

const Preview = () => {
  return (
    <Iframe iframe={demos["horizon"]} allow="autoplay" />
  )
};

export default Preview;

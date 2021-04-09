import React from "react";

var SERVER_URI = "http://localhost:5000";

if (process.env.NODE_ENV === "development") {
  SERVER_URI = "http://localhost:5000";
}

if (process.env.NODE_ENV === "production") {
  SERVER_URI = "https://horizon-server.herokuapp.com";
}

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

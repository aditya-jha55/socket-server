
import { renderStill } from "@remotion/renderer";
import { bundle } from "@remotion/bundler";

const start = async () => {
  // The composition you want to render
  const compositionId = "myComp";
const composition = "mycomp";
const bundleLocation = ""

  const outputLocation = `out/${compositionId}.mp4`;
  console.log("Attempting to render:", outputLocation);
  await renderStill({
    composition,
    serveUrl: bundleLocation,
    output: "/tmp/still.png",
    inputProps: {
      custom: "data",
    },
  });
  console.log("Render done!");
};

start();
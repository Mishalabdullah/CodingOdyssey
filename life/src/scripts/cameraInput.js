function takePicture() {
  let videoStream = null;
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");
  const captureButton = document.getElementById("captureButton");
  const takePictureButton = document.getElementById("takePictureButton");

  // Access the user's webcam and stream it to the video element
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
      videoStream = stream;
      takePictureButton.style.display = "none";
      captureButton.style.display = "inline";
    })
    .catch(function (error) {
      console.error("Error accessing webcam:", error);
    });

  // When the "Click to Save" button is clicked, capture a snapshot and stop streaming
  captureButton.addEventListener("click", function () {
    // Draw the snapshot onto the canvas
    canvas.style.display = "flex";
    canvas.style.flexDirection = "column";
    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    video.style.display = "none";
    videoStream.getTracks().forEach((track) => track.stop());
    // Convert the image data to a base64-encoded string and log it to the console
    const base64Image = canvas.toDataURL("image/png");
  });
}

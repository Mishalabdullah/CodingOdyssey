function toggleUI() {
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");
  const captureButton = document.getElementById("captureButton");
  const takePictureButton = document.getElementById("takePictureButton");

  if (video.style.display === "block") {
    video.style.display = "none";
    canvas.style.display = "block";
    captureButton.style.display = "block";
    takePictureButton.style.display = "none";
  } else {
    video.style.display = "block";
    canvas.style.display = "none";
    captureButton.style.display = "none";
    takePictureButton.style.display = "block";
  }
}

function takePicture() {
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");
  const captureButton = document.getElementById("captureButton");
  const takePictureButton = document.getElementById("takePictureButton");

  // Access the user's webcam and stream it to the video element
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (error) {
      console.error("Error accessing webcam:", error);
    });

  // When the "Take Picture" button is clicked, capture a snapshot
  captureButton.addEventListener("click", function () {
    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    toggleUI(); // Toggle the visibility of elements
  });
}

const robotHead = document.querySelector('.letter-o');
const leftEye = document.querySelector('.left-eye');
const rightEye = document.querySelector('.right-eye');

document.addEventListener('mousemove', function (event) {
  const x = event.clientX;
  const y = event.clientY;
  const leftEyeRect = leftEye.getBoundingClientRect();
  const rightEyeRect = rightEye.getBoundingClientRect();

  // Calculate the angle between the cursor position and the center of the left eye
  const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
  const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;
  const leftEyeAngle = Math.atan2(y - leftEyeCenterY, x - leftEyeCenterX);
  const leftEyeRotation = leftEyeAngle * (180 / Math.PI) + 90;

  // Calculate the angle between the cursor position and the center of the right eye
  const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
  const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;
  const rightEyeAngle = Math.atan2(y - rightEyeCenterY, x - rightEyeCenterX);
  const rightEyeRotation = rightEyeAngle * (180 / Math.PI) + 90;

  // Apply the eye rotations
  leftEye.style.transform = `rotate(${leftEyeRotation}deg)`;
  rightEye.style.transform = `rotate(${rightEyeRotation}deg)`;
});

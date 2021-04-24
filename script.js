const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play;
async function selectMediaStream(){
    try{
        const mediaStraem = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStraem;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    }catch(error){
        console.log('Error caught: ', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;

});

selectMediaStream();
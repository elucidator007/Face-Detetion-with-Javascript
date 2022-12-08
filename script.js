const video = document.getElementById('video')

Promise.all;;([
    faceapi.nets.tnyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo)


function startVideo() {
    console.log('startVideo function running sussesfully!')
    // in order to use webcam we use navigator.getUserMedia
    // prompts the user for permission to use up to one video input device (such as a camera or 
    // shared screen) and up to one audio input device (such as a microphone) as the source for a
    // mediaStream
    navigator.getUserMedia(
        { video : {} },
        stream => video.srcObject = stream,
        err => console.error('ERROR FOUND', err)
    )
}
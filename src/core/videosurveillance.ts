export interface MotionSensor {
    isDetectingMotion(): boolean;
}

export interface VideoRecorder {
    startRecording(): void;
    stopRecording(): void;
}

export function videoSurveillanceController(recorder, sensor:MotionSensor) {
    try {
        sensor.isDetectingMotion()
            ? recorder.startRecording()
            : recorder.stopRecording()
    } catch {
        console.log('an error was received from the motion sensor')
        recorder.stopRecording()
    }


    return null;
}




import {videoSurveillanceController, MotionSensor, VideoRecorder} from '../core/videosurveillance'

class FakeMotionSensor implements MotionSensor {
	isDetectingMotion() {
	  return false
	}
}

class VideoRecorderSpy implements VideoRecorder {
	public stopRecording = jest.fn()
	public startRecording = jest.fn()
}

describe('videoSurveillanceController', () => {
	it('Instructs the recorder to stop recording when no motion is detected by the sensor', () => {
		const motionSensor = new FakeMotionSensor()
		const detectingMotionStub = jest.spyOn(motionSensor, 'isDetectingMotion')
		detectingMotionStub.mockImplementation(() => false);

		const videoRecorderSpy = new VideoRecorderSpy()
		videoSurveillanceController(videoRecorderSpy, motionSensor)
		expect(videoRecorderSpy.stopRecording).toHaveBeenCalledTimes(1)
	})
	it('Instructs the recorder to start recording when the sensor detects motion.', () => {	
		const motionSensorStub = new FakeMotionSensor()
		motionSensorStub.isDetectingMotion = () => true
		const videoRecorderSpy = new VideoRecorderSpy()
		videoSurveillanceController(videoRecorderSpy, motionSensorStub)
		expect(videoRecorderSpy.startRecording).toHaveBeenCalledTimes(1)
	})
	it('Instructs the recorder to stop recording when the sensor throws an error.', () => {

		const motionSensorStub = new FakeMotionSensor()
		motionSensorStub.isDetectingMotion = () => {
			throw('unknown error')
			return false
		  }
		const videoRecorderSpy = new VideoRecorderSpy()
		videoSurveillanceController(videoRecorderSpy, motionSensorStub)
		expect(videoRecorderSpy.stopRecording).toHaveBeenCalledTimes(1)
	})

	it('Checks the status of the motion sensor once per second.' , () => {
		
	})
})

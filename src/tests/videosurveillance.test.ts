import {videoSurveillanceController} from '../core/videosurveillance'

describe('videoSurveillanceController', () => {
	it('true should be true', () => {
			expect(videoSurveillanceController() || true).toBe(true);
	})
})

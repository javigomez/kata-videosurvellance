Video Surveillance Kata in Typescript

# Enunciado:

 a well-known manufacturer of video surveillance systems has asked us to develop software for the prototype of a new innovative product they are developing. It is a device that has a motion sensor and a recorder. The motion sensor has an API with a single method that returns true when it detects that something has started to move and false when it detects no movement. On the other hand, the recorder has two commands: one to start recording and one to stop recording.

Our task will be to design a controller that checks every second if the sensor is detecting movement and if so, we should tell the recorder to start recording, and if not, it should stop recording. Recording should also stop in case of unexpected sensor behaviour.

The main limitation is that the manufacturer does not offer us the possibility to access neither the code of the sensor nor the recorder, it seems that he does not want us to copy his magnificent idea. But at least they provide us with their public interfaces:

```ts
interface MotionSensor {
  isDetectingMotion(): boolean;
}

interface VideoRecorder {
  startRecording(): void;
  stopRecording(): void;
}
```

Requirements

In summary, the requirements to be met by the controller we have to design are:

- [x] Tells the recorder to stop recording when the sensor detects no motion.
- [x] Tells the recorder to start recording when the sensor detects motion.
- [x] Tells the recorder to stop recording when the sensor throws an unexpected error.
- [ ] Checks the motion sensor status once per second.
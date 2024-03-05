export class TabRecorder {
    mediaRecorder: MediaRecorder | null = null;
    chunks: any[] = [];
    isRecording: boolean = false;

    constructor() {}

    async startRecording() {
        if (this.isRecording) {
            console.warn("Recording is already in progress.");
            return;
        }

        try {
            const stream = document.querySelector('canvas')!.captureStream(45);
            this.chunks = [];
            this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });

            this.mediaRecorder.ondataavailable = event => {
                if (event.data.size > 0) {
                    this.chunks.push(event.data);
                }
            };

            this.mediaRecorder.start(1000);
            this.isRecording = true;
            console.log("Recording started.");
        } catch (error) {
            console.error("Error starting recording:", error);
        }
    }

    stopRecording() {
        if (!this.isRecording) {
            console.warn("No recording in progress to stop.");
            return;
        }

        this.mediaRecorder!.stop();
        this.isRecording = false;
        console.log("Recording stopped.");
    }

    saveRecording() {
        const blob = new Blob(this.chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'recording.webm';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        console.log("Recording saved.");
    }
}

export class TabClipper {
    recorders: TabRecorder[] = [];

    constructor() {}

    startCapturing() {
        this.recorders = [];
        this.recorders.push(new TabRecorder());
        this.recorders[0].startRecording();

        setInterval(() => {
            this.addRecorder();
        }, 10000);
    }

    addRecorder() {
        let index = this.recorders.push(new TabRecorder()) - 1;
        this.recorders.at(index)?.startRecording();

        setTimeout(() => {
            this.recorders.at(index)?.stopRecording();
            this.recorders.splice(index, 1);
        }, 30000);
    }

    stopCapturing() {
        for (let recorder of this.recorders) {
            recorder.stopRecording();
        }
    }

    saveClip() {
        this.recorders.at(0)?.saveRecording();
    }
}
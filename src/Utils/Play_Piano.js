import Notes2Hertz from "./Notes2Hertz.json" assert {type: "json"};

const audioContext = new AudioContext();
const NoteDuration = 500;

export function HandleClick(note) {
    const oscillator = audioContext.createOscillator();
    oscillator.frequency.setValueAtTime(Notes2Hertz[note], audioContext.currentTime);
    console.log("fun");
    oscillator.connect(audioContext.destination)
    oscillator.start();
    setTimeout(function () {
        oscillator.stop();
    }, NoteDuration)
}
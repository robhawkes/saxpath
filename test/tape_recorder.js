// XXX: TODO: rename to TapeRecorder
function TapeRecorder() {
    this.box = [];
    this.tape = null;

    this.tapeOn = false;
}


TapeRecorder.prototype.start = function() {
    console.log('o_o TapeRecorder.start');
    if (this.tapeOn) {
        throw new Error("Tape is already on");
    }

    this.tapeOn = true;

    this.tape = [];
    this.tape.push({ start: true });
};

TapeRecorder.prototype.stop = function() {
    console.log('o_o TapeRecorder.stop');
    this.tapeOn = false;

    this.tape.push({ stop: true });
    this.box.push(this.tape);
    this.tape = null;
};

TapeRecorder.prototype.isRecording = function() {
    return this.tapeOn;
};

TapeRecorder.prototype.onOpenTag = function(node) {
    if (this.tapeOn) {
        this.tape.push({ openTag: node });
    }
};

TapeRecorder.prototype.onCloseTag = function(tag) {
    if (this.tapeOn) {
        this.tape.push({ closeTag: tag });
    }
};

TapeRecorder.prototype.onText = function (text) {
    if (this.tapeOn) {
        this.tape.push({ text: text });
    }
};


module.exports = TapeRecorder;

const fs = require('fs');

module.exports = class Writer {
    constructor() {
        this.options = {
            encoding: 'utf-8',
            flag: 'a',
        }
        this.filename = 'access.txt';
        this.Logger = null;
        return this;
    }

    init = (Logger) => {
        this.Logger = Logger;
        this.Logger.setContext('Writer');
        return this;
    }

    fileLog = (content) => {
        if (this.Logger !== null) {
            this.Logger.setContext('Writer');
            this.Logger.log(content);
        }
    }

    writeFile = (content) => fs.writeFile(this.filename, content + '\n', this.options, (err, res) => {
        this.fileLog(`Write new content to ${this.filename}`);
        if (err) {
            this.log(`Write file error: ${err}`);
        }
        return;
    });
}
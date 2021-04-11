module.exports = class Logger {
    constructor(context = 'Logger') {
        this.context = context;

        this.Writer = null;
        return this;
    }

    init = (Writer) => {
        this.Writer = Writer;
        return this;
    }

    setContext = (context) => {
        this.context = context;
        this.log(`Logger module initialized`);
        return this;
    }

    log = (msg = '') => {
        const content = `${new Date()} - [${this.context}] ${msg}`; 
        this.Writer.writeFile(content)       
        console.log(content);
    }
}
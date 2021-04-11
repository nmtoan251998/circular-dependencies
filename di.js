const Logger = require('./logger');
const Writer = require('./writer');

const logger = new Logger().init(new Writer());
const writer = new Writer().init(logger);

logger.setContext('DI')
logger.log('Dependencies initialized');

module.exports = {
    Logger: logger,
    Writer: writer,
}
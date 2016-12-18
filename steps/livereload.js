
const log = require('../utils/log.js');
const addPartial = require('../utils/partialfn.js');

let lr_server;
const runLivereload = () => {
	log.checkProduction('livereload');
	const livereload = require('livereload');
	log.watch('livereload running');
	if(!lr_server) lr_server = livereload.createServer();
	return lr_server.watch(`build`);
};

module.exports = addPartial(runLivereload);
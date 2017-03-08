
var glob        = require('glob');
var isEmpty     = require('lodash.isempty');
var bowerdir    = 'bower_components';
var bowerrcobj  = glob.sync('.bowerrc' , {nodir: true});
var cwd         = process.cwd();
var fs          = require('fs');

if( isEmpty( bowerrcobj ) === false ){
  var bowerrc = JSON.parse( fs.readFileSync( cwd + '/.bowerrc', 'utf8') );
  if( bowerrc.directory ){
    bowerdir = bowerrc.directory;
  }
}

module.exports = bowerdir;

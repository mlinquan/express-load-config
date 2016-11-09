var fs = require('fs');
var resolve = require('app-root-path').resolve;
var objectAssign = require('object-assign');

function loadAllConfig(pth, env, opts) {
  if (typeof pth === 'string') {
    pth = {
      path: resolve(pth).replace(/\\/g, '/')
    };
  }

  if (typeof env === 'string') {
    env = {
      env: env
    };
  }

  opts = objectAssign({
    path: resolve('./config').replace(/\\/g, '/'),
    env_path: 'env',
    env: 'development'
  }, opts, env, pth);

  var env_config_pth = opts.path + '/' + opts.env_path + '/' + opts.env + '.js';
  var common_config_pth = opts.path + '/config.js';
  var configs = {};
  try{
    var env_config = require(env_config_pth);
    objectAssign(configs, env_config);
  } catch(e) {};
  try{
    common_config = require(common_config_pth);
    objectAssign(configs, common_config);
  } catch(e) {};
  var congif_files = fs.readdirSync(opts.path);
  congif_files.forEach(function(cfg_file, i) {
      if(cfg_file == 'config.js') {
        return;
      }
      var cfg_path = opts.path + '/' + cfg_file;
      var cfg_key = cfg_file.replace(/\.js$/, '');
      var cfg_obj = {};
      var cfg_stat = fs.lstatSync(cfg_path);
      if(cfg_stat.isDirectory()) {
        return;
      }
      cfg_obj[cfg_key] = require(cfg_path);
      objectAssign(configs, cfg_obj);
  });
  return configs;
}

module.exports = loadAllConfig;
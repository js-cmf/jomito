// plugin-controller.js
const Plugin = require('../models/plugin');

let pluginController = {};

// creating the plugin on mongo
pluginController.createPlugin = (req, res) => {
  let bodyObj = req.body;

  let newPlugin = new Plugin();
  newPlugin.name = bodyObj.name;
  newPlugin.plugin_properties = bodyObj.properties;
  newPlugin.mount_point = bodyObj.user_id;

  newPlugin.save(function(err){
    if (err) throw err;
  });

  return res.sendStatus(200);
};

//listing all the plugins
pluginController.getAllPlugins = (req, res) => {
  Plugin.find({}, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.json(result); 
  });
};

//listing plugin by id
pluginController.getPluginById = (req, res) => {
  Plugin.findById(req.params.plugin_id, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.json(result); 
  });
};

//updating collection by id
pluginController.updatePluginById = (req, res) => {
  Plugin.findByIdAndUpdate(req.params.plugin_id, req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(result);
  });
};

// deleting plugin by id
pluginController.deletePluginById = (req, res) => {
  Plugin.findByIdAndRemove(req.params.plugin_id, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send('plugin deleted!');
  });
};

module.exports = pluginController;

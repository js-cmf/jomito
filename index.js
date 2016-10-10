#!/usr/bin/env node
const program = require('commander');
console.log('welcome, hi there, we\'re team synthesis!');

program
  .arguments('<plugin>')
  .option('-f, --force-reload', 'force reload your plugin')
  .option('-n, --new-plugin', 'creates a new plugin for synthesis')
  .option('-u, --username <username>', 'set user for plugin')
  .option('-p, --password <password>', 'set password for plugin')  
  .action(function (plugin) {
    console.log('user: %s pass: %s for plugin %s',
      program.username, program.password, plugin);
  })
  .parse(process.argv);


'use strict';

const neeoapi = require('neeo-sdk');
const controller = require('./controller');

console.log('NEEO SDK "FreeboxPlayer" adapter');
console.log('------------------------------------------');

/*
 * Adapter - an Adapter contains one or more DEVICES. In this case we only use a single very
 * simple device.
 */

// first we set the device info, used to identify it on the Brain
const customLightDevice = neeoapi.buildDevice('Freebox Player API')
  .setManufacturer('Free')
  .addAdditionalSearchToken('freebox')
  .setType('DVB')

  // Then we add the capabilities of the device
  .addButton({ name: 'button-av', label: 'AV' })
  .addButtonGroup('Numpad')
  .addButtonGroup('Controlpad')
  .addButtonGroup('Color Buttons')
  .addButtonGroup('Menu and Back')
  .addButtonGroup('Channel Zapper')
  .addButtonGroup('Transport')
  .addButtonGroup('Transport Search')
  .addButtonGroup('Transport Scan')
  .addButtonGroup('POWER')
  .addButton({ name: 'RECORD'})

  .addButtonHandler(controller.onButtonPressed);

function startSdkExample(brain) {
  console.log('- Start server');
  neeoapi.startServer({
    brain: '192.168.1.53',
    port: 6337,
    name: 'freebox-player-api',
    devices: [customLightDevice]
  })
  .then(() => {
    console.log('# READY! use the NEEO app to search for "NEEO Freebox API".');
  })
  .catch((error) => {
    //if there was any error, print message out to console
    console.error('ERROR!', error.message);
    process.exit(1);
  });
}

const brainIp = process.env.BRAINIP;
if (brainIp) {
  console.log('- use NEEO Brain IP from env variable', brainIp);
  startSdkExample(brainIp);
} else {
  console.log('- discover one NEEO Brain...');
  neeoapi.discoverOneBrain()
    .then((brain) => {
      console.log('- Brain discovered:', brain.name);
      startSdkExample(brain);
    });
}

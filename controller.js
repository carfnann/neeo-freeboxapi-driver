'use strict';

/*
 * Device Controller
 * Events on that device from the Brain will be forwarded here for handling.
 */

module.exports.onButtonPressed = function onButtonPressed(name) {
  console.log(`[CONTROLLER] ${name} button pressed`);

  if (name === "DIGIT 0") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=0", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "DIGIT 1") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=1", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "DIGIT 2") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=2", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "DIGIT 3") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=3", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "DIGIT 4") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=4", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "DIGIT 5") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=5", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "DIGIT 6") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=6", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "DIGIT 7") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=7", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "DIGIT 8") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=8", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "DIGIT 9") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=9", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "CURSOR ENTER") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=ok", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "CURSOR UP") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=up", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "CURSOR DOWN") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=down", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "CURSOR LEFT") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=left", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "CURSOR RIGHT") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=right", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "FUNCTION RED") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=red", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "FUNCTION BLUE") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=blue", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "FUNCTION YELLOW") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=yellow", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "FUNCTION GREEN") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=green", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "MENU") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=home", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "BACK") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=swap", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "CHANNEL UP") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=prgm_inc", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "CHANNEL DOWN") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=prgm_dec", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "PLAY") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=play", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "PAUSE") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=play", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "STOP") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=prgm_dec", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "REVERSE") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=bwd", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "FORWARD") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=fwd", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "NEXT") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=next", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "PREVIOUS") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=prev", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "RECORD") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=rec", function(error, response, body) {
      console.log(body);
    });
  }
  
  if (name === "POWER ON") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=power", function(error, response, body) {
      console.log(body);
    });
  }
  if (name === "POWER OFF") {
    var request = require("request");
    request("http://192.168.1.36/pub/remote_control?code=30624814&key=power", function(error, response, body) {
      console.log(body);
    });
  }

};
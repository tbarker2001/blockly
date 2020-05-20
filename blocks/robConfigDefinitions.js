/**
 * @fileoverview Sensor blocks for all systems.
 * @requires Blockly.Blocks
 * @author Beate
 */

'use strict';

goog.provide('Blockly.Blocks.robConfigDefinitions');

goog.require('Blockly.Blocks');

// define sensors here as a property of sensors  ********************************************************************************

/*- minimal example:
 *
 * confBlocks.lcdi2c.arduino = {
 * title : 'LCDI2C',
 *  sensor: false
 };
 *
 */

/*- all supported properties:
 *
 * title,
 * ports,
 * pins,
 * sensor
 * standardPins
 */

var confBlocks = {};
function createPins(startNumber, endNumber, opt_prefix_ext, opt_prefix_int) {
    if (!opt_prefix_ext) {
        opt_prefix_ext = "";
    }
    if (!opt_prefix_int) {
        opt_prefix_int = "";
    }
    var array = [];
    for (var i = startNumber; i <= endNumber; i++) {
        var pin_ext = opt_prefix_ext + i;
        var pin_int = opt_prefix_int + i;
        array.push([ pin_ext.toString(), pin_int.toString() ]);
    }
    return array;
}

Blockly.Blocks.robConfigDefinitions['pinsDigital'] = {};
Blockly.Blocks.robConfigDefinitions['pinsDigital'].uno = function() {
    return createPins(0, 13);
};
Blockly.Blocks.robConfigDefinitions['pinsDigital'].unowifirev2 = function() {
    return createPins(0, 13);
};
Blockly.Blocks.robConfigDefinitions['pinsDigital'].nano = function() {
    return createPins(0, 13, "D");
};
Blockly.Blocks.robConfigDefinitions['pinsDigital'].mega = function() {
    return createPins(0, 53);
};
Blockly.Blocks.robConfigDefinitions['pinsDigital'].sensebox = function() {
    var array = createPins(1, 2, "A");
    array = array.concat(createPins(3, 4, "B"));
    array = array.concat(createPins(5, 6, "C"));
    return array;
};
Blockly.Blocks.robConfigDefinitions['pinsDigital'].festobionic = function() {
    return createPins(1, 4);
};
Blockly.Blocks.robConfigDefinitions['pinsDigital'].calliope = function() {
    var array = [ [ 'P0', '0' ], [ 'P1', '1' ], [ 'P2', '2' ], [ 'P3', '3' ], [ 'A0', '4' ], [ 'A1', '5' ], [ 'C04', 'C04' ], [ 'C05', 'C05' ],
    [ 'C06', 'C06' ], [ 'C07', 'C07' ], [ 'C08', 'C08' ], [ 'C09', 'C09' ], [ 'C10', 'C10' ], [ 'C11', 'C11' ], [ 'C12', 'C12' ],
    [ 'C16', 'C16' ], [ 'C17', 'C17' ], [ 'C18', 'C18' ], [ 'C19', 'C19' ] ]
    return array;
};
Blockly.Blocks.robConfigDefinitions['pinsDigital'].microbit = function() {
    var array = createPins(0, 16);
    array = array.concat(createPins(19, 20));
    return array;
};

Blockly.Blocks.robConfigDefinitions['pinsAnalog'] = {};
Blockly.Blocks.robConfigDefinitions['pinsAnalog'].uno = function() {
    return createPins(0, 5, "A", "A");
};
Blockly.Blocks.robConfigDefinitions['pinsAnalog'].unowifirev2 = function() {
    return createPins(0, 5, "A", "A");
};
Blockly.Blocks.robConfigDefinitions['pinsAnalog'].nano = function() {
    return createPins(0, 7, "A", "A");
};
Blockly.Blocks.robConfigDefinitions['pinsAnalog'].mega = function() {
    return createPins(0, 15, "A", "A");
};
Blockly.Blocks.robConfigDefinitions['pinsAnalog'].sensebox = function() {
    var array = createPins(1, 2, "A");
    array = array.concat(createPins(3, 4, "B"));
    array = array.concat(createPins(5, 6, "C"));
    return array;
};
Blockly.Blocks.robConfigDefinitions['pinsAnalog'].calliope = function() {
    var array = [ [ 'P1', '1' ], [ 'P2', '2' ], [ 'A1', '5' ], [ 'C04', 'C04' ], [ 'C05', 'C05' ], [ 'C06', 'C06' ], [ 'C16', 'C16' ],
    [ 'C17', 'C17' ] ];
    return array;
};
Blockly.Blocks.robConfigDefinitions['pinsAnalog'].microbit = function() {
    var array = createPins(0, 4);
    array = array.concat(createPins(10, 10));
    return array;
};

Blockly.Blocks.robConfigDefinitions['pinsAnalogWrite'] = {};
Blockly.Blocks.robConfigDefinitions['pinsAnalogWrite'].uno = function() {
    var part1 = createPins(3, 3);
    var part2 = createPins(5, 6);
    var part3 = createPins(9, 11);
    return part1.concat(part2).concat(part3);
};
Blockly.Blocks.robConfigDefinitions['pinsAnalogWrite'].unowifirev2 = function() {
    var part1 = createPins(3, 3);
    var part2 = createPins(5, 6);
    var part3 = createPins(9, 10);
    return part1.concat(part2).concat(part3);
};
Blockly.Blocks.robConfigDefinitions['pinsAnalogWrite'].nano = function() {
    var part1 = createPins(3, 3, "D");
    var part2 = createPins(5, 6, "D");
    var part3 = createPins(9, 11, "D");
    return part1.concat(part2).concat(part3);
};
Blockly.Blocks.robConfigDefinitions['pinsAnalogWrite'].mega = function() {
    var part1 = createPins(2, 13);
    var part2 = createPins(44, 46);
    return part1.concat(part2);
};
Blockly.Blocks.robConfigDefinitions['pinsAnalogWrite'].sensebox = function() {
    var array = createPins(1, 2, "A");
    array = array.concat(createPins(3, 4, "B"));
    array = array.concat(createPins(5, 6, "C"));
    return array;
};
Blockly.Blocks.robConfigDefinitions['pinsAnalogWrite'].calliope = function() {
    var array = [ [ 'P1', '1' ], [ 'P2', '2' ], [ 'A1', '5' ], [ 'C04', 'C04' ], [ 'C05', 'C05' ], [ 'C06', 'C06' ], [ 'C16', 'C16' ],
    [ 'C17', 'C17' ] ];
    return array;
};
Blockly.Blocks.robConfigDefinitions['pinsAnalogWrite'].microbit = function() {
    var array = createPins(0, 4);
    array = array.concat(createPins(10, 10));
    return array;
};

Blockly.Blocks.robConfigDefinitions['pins_wedo'] = function() {
    return createPins(1, 2);
};

confBlocks.ultrasonic = {};
confBlocks.ultrasonic.arduino = {
    title : 'ULTRASONIC',
    ports : [ [ 'trig', 'TRIG' ], [ 'echo', 'ECHO' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : true,
    standardPins : [ '7', '6' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ] ]
};

confBlocks.ultrasonic.sensebox = {
    title : 'ULTRASONIC',
    ports : [ [ 'trig', 'TRIG' ], [ 'echo', 'ECHO' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : true,
    standardPins : [ '1', '2' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ] ]
};

confBlocks.light = {};
confBlocks.light.arduino = {
    title : 'LIGHT',
    ports : [ [ 'output', 'OUTPUT' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsAnalog'][a];
    },
    sensor : true,
    standardPins : [ 'A0' ],
    fixedPorts : [ [ 'VCC', '5V' ] ]
};
confBlocks.light.calliope = {
    title: 'LIGHT',
    ports : [ [ 'pin', 'PIN1' ] ],
    pins : function(a) {
        return [[Blockly.Msg.PORT_INTERNAL, 'LED_BUILTIN']]; // only inbuilt
    },
    sensor : true
};
confBlocks.light.microbit = confBlocks.light.calliope;
confBlocks.light.sensebox = {
    title : 'LIGHT',
    ports : [ [ 'output', 'OUTPUT' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsAnalog'][a];
    },
    sensor : true,
    standardPins : [ '1' ],
    fixedPorts : [ [ 'VCC', '5V' ] ]
};

confBlocks.lightveml = {};
confBlocks.lightveml.sensebox = {
    title : 'LIGHTVEML',
    ports : [ [ 'I2C', 'I2C' ] ],
    pins : function(a) {
        return [ [ 'I2C', 'I2C' ] ];
    },
    sensor : true
};

confBlocks.accelerometer = {};
confBlocks.accelerometer.sensebox = {
    title : 'ACCELEROMETER',
    sensor : true
};
confBlocks.accelerometer.arduino = confBlocks.accelerometer.sensebox;

confBlocks.compass = {};
confBlocks.compass.calliope = {
    title: 'COMPASS',
    ports : [ [ 'pin', 'PIN1' ] ],
    pins : function(a) {
        return [[Blockly.Msg.PORT_INTERNAL, 'LED_BUILTIN']]; // only inbuilt
    },
    sensor : true
};
confBlocks.compass.sensebox = {
    title : 'COMPASS',
    sensor : true
};

confBlocks.moisture = {};
confBlocks.moisture.arduino = {
    title : 'MOISTURE',
    ports : [ [ 'S', 'S' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsAnalog'][a];
    },
    sensor : true,
    standardPins : [ 'A0' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ] ]
};

confBlocks.potentiometer = {};
confBlocks.potentiometer.arduino = {
    title : 'POTENTIOMETER',
    ports : [ [ 'output', 'OUTPUT' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsAnalog'][a];
    },
    sensor : true,
    standardPins : [ 'A0' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ] ]
};

confBlocks.potentiometer.sensebox = {
    title : 'POTENTIOMETER',
    ports : [ [ 'output', 'OUTPUT' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsAnalog'][a];
    },
    sensor : true,
    standardPins : [ '1' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ] ]
};

confBlocks.infrared = {};
confBlocks.infrared.wedo = {
    title : 'INFRARED',
    bricks : true,
    ports : [ [ 'CONNECTOR', 'CONNECTOR' ] ],
    pins : Blockly.Blocks.robConfigDefinitions['pins_wedo'],
    sensor : true
};

confBlocks.infrared.arduino = {
    title : 'INFRARED',
    ports : [ [ 'output', 'OUTPUT' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : true,
    standardPins : [ '11' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ] ]
};

confBlocks.temperature = {};
confBlocks.temperature.arduino = {
    title : 'TEMPERATURE',
    ports : [ [ 'output', 'OUTPUT' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsAnalog'][a];
    },
    sensor : true,
    standardPins : [ 'A0' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ] ]
};
confBlocks.temperature.calliope = {
    title: 'TEMPERATURE',
    ports : [ [ 'pin', 'PIN1' ] ],
    pins : function(a) {
        return [[Blockly.Msg.PORT_INTERNAL, 'LED_BUILTIN']]; // only inbuilt
    },
    sensor : true
};
confBlocks.temperature.microbit = confBlocks.temperature.calliope;
confBlocks.temperature.sensebox = {
    title : 'TEMPERATURE',
    ports : [ [ 'I2C', 'I2C' ] ],
    pins : function(a) {
        return [ [ 'I2C', 'I2C' ] ];
    },
    sensor : true
};

confBlocks.humidity = {};
confBlocks.humidity.arduino = {
    title : 'HUMIDITY',
    ports : [ [ 'output', 'OUTPUT' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : true,
    standardPins : [ '2' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ] ]
};

confBlocks.humidity.sensebox = {
    title : 'HUMIDITY',
    ports : [ [ 'I2C', 'I2C' ] ],
    pins : function() {
        return [ [ 'I2C', 'I2C' ] ];
    },
    sensor : true
};

confBlocks.encoder = {};
confBlocks.encoder.arduino = {
    title : 'ENCODER',
    ports : [ [ 'output', 'OUTPUT' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsAnalog'][a];
    },
    sensor : true,
    standardPins : [ '2' ]
};

confBlocks.motion = {};
confBlocks.motion.arduino = {
    title : 'MOTION',
    ports : [ [ 'output', 'OUTPUT' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : true,
    standardPins : [ '7' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ] ]
};

confBlocks.key = {};
confBlocks.key.arduino = {
    title : 'KEY',
    ports : [ [ 'pin', 'PIN1' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : true,
    standardPins : [ '2' ],
    fixedPorts : [ [ 'VCC', '5V' ] ]
};
confBlocks.key.calliope = {
    title: 'KEY',
    ports : [ [ 'pin', 'PIN1' ] ],
    pins : function() {
        return [ [ 'A', 'A' ], [ 'B', 'B' ] ];
    },
    sensor : true,
    standardPins : [ 'A' ],
};
confBlocks.key.microbit = confBlocks.key.calliope;
confBlocks.key.sensebox = confBlocks.key.arduino;
confBlocks.key.wedo = {
    title : 'KEY',
    bricks : true,
    sensor : true
};

confBlocks.drop = {};
confBlocks.drop.arduino = {
    title : 'DROP',
    ports : [ [ 'S', 'S' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsAnalog'][a];
    },
    sensor : true,
    standardPins : [ 'A0' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ] ]
};

confBlocks.pulse = {};
confBlocks.pulse.arduino = {
    title : 'PULSE',
    ports : [ [ 'S', 'S' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsAnalog'][a];
    },
    sensor : true,
    standardPins : [ 'A0' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ] ]
};

confBlocks.rfid = {};
confBlocks.rfid.arduino = {
    title : 'RFID',
    ports : [ [ 'RST', 'RST' ], [ 'SDA', 'SDA' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : true,
    standardPins : [ '9', '10', '13', '11', '12' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ '3,3V', '3,3V' ], [ 'SCK', '13' ], [ 'MOSI', '11' ], [ 'MISO', '12' ] ]
};

confBlocks.lcd = {};
confBlocks.lcd.arduino = {
    title : 'LCD',
    ports : [ [ 'RS', 'RS' ], [ 'E', 'E' ], [ 'D4', 'D4' ], [ 'D5', 'D5' ], [ 'D6', 'D6' ], [ 'D7', 'D7' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : false,
    standardPins : [ '12', '11', '5', '4', '3', '2' ],
    fixedPorts : [ [ 'VSS', 'GND' ], [ 'VDD', '5V' ], [ 'V0', 'Vp' ], [ 'RW', 'GND' ] ]
};

confBlocks.lcdi2c = {};
confBlocks.lcdi2c.arduino = {
    title : 'LCDI2C',
    sensor : false,
    inputs : [ [ 'ADDRESS', '0x27' ] ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ], [ 'SDA', 'A4' ], [ 'SCL', 'A5' ] ]
};

confBlocks.lcdi2c.sensebox = {
    title : 'LCDI2C',
    ports : [ [ 'I2C', 'I2C' ] ],
    pins : function(a) {
        return [ [ 'I2C', 'I2C' ] ];
    },
    inputs : [ [ 'TITLE', 'P' ], [ 'XLABEL', 'X' ], [ 'YLABEL', 'Y' ], [ 'XSTART', '0' ], [ 'XEND', '100' ], [ 'YSTART', '0' ], [ 'YEND', '50' ],
            [ 'XTICK', '10' ], [ 'YTICK', '10' ] ],
    sensor : false
};

confBlocks.led = {};
confBlocks.led.arduino = {
    title : 'LED',
    ports : [ [ 'input', 'INPUT' ] ],
    pins : function(a) {
        var pins = Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
        if (pins !== undefined) {
            pins = pins().concat([[Blockly.Msg.PORT_INTERNAL, 'LED_BUILTIN']]); // add internal LED to available LEDs
        }
        return pins;
    },
    sensor : false,
    standardPins : [ 'LED_BUILTIN' ],
    fixedPorts : [ [ 'GND', 'GND' ] ]
};
confBlocks.led.festobionic = {
    title : 'LED',
    ports : [ [ 'input', 'INPUT' ] ],
    pins : function(a) {
        return [[Blockly.Msg.PORT_INTERNAL, 'LED_BUILTIN']]; // only inbuilt LED
    },
    sensor : false,
    standardPins : [ 'LED_BUILTIN' ],
    fixedPorts : [ [ 'GND', 'GND' ] ]
};

confBlocks.led.sensebox = {
    title : 'LED',
    ports : [ [ 'input', 'INPUT' ] ],
    pins : function(a) {
        var array = createPins(1, 2, "A");
        array = array.concat(createPins(3, 4, "B"));
        array = array.concat(createPins(5, 6, "C"));
        array = array.concat(createPins(7, 8));
        return array;
    },
    sensor : false,
    standardPins : [ 'A1' ],
    fixedPorts : [ [ 'GND', 'GND' ] ]
};

confBlocks.led.wedo = {
    title : 'LED',
    bricks : true,
    action : true
};

confBlocks.buzzer = {};
confBlocks.buzzer.arduino = {
    title : 'BUZZER',
    ports : [ [ '+', '+' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : false,
    standardPins : [ '5' ],
    fixedPorts : [ [ 'GND', 'GND' ] ]
};

confBlocks.buzzer.sensebox = {
    title : 'BUZZER',
    ports : [ [ '+', '+' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : false,
    standardPins : [ '1' ],
    fixedPorts : [ [ 'GND', 'GND' ] ]
};

confBlocks.buzzer.wedo = {
    title : 'BUZZER',
    bricks : true,
    action : true
};

confBlocks.sound = {};
confBlocks.sound.calliope = {
    title: 'SOUND',
    ports : [ [ 'pin', 'PIN1' ] ],
    pins : function(a) {
        return [[Blockly.Msg.PORT_INTERNAL, 'LED_BUILTIN']]; // only inbuilt
    },
    sensor : true
};
confBlocks.sound.sensebox = {
    title : 'SOUND',
    ports : [ [ 'out', 'OUT' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : true,
    standardPins : [ '1' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ] ]
};

confBlocks.relay = {};
confBlocks.relay.arduino = {
    title : 'RELAY',
    ports : [ [ 'IN', 'IN' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : false,
    standardPins : [ '6' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ] ]
};

confBlocks.rgbled = {};
confBlocks.rgbled.arduino = {
    title : 'RGBLED',
    ports : [ [ 'red', 'RED' ], [ 'green', 'GREEN' ], [ 'blue', 'BLUE' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : false,
    standardPins : [ '5', '6', '3' ],
    fixedPorts : [ [ 'GND', 'GND' ] ]
};

confBlocks.rgbled.sensebox = {
    title : 'RGBLED',
    ports : [ [ 'red', 'RED' ], [ 'green', 'GREEN' ], [ 'blue', 'BLUE' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : false,
    standardPins : [ '1', '2', '3' ],
    fixedPorts : [ [ 'GND', 'GND' ] ]
};

confBlocks.stepmotor = {};
confBlocks.stepmotor.arduino = {
    title : 'STEPMOTOR',
    ports : [ [ 'IN1', 'IN1' ], [ 'IN2', 'IN2' ], [ 'IN3', 'IN3' ], [ 'IN4', 'IN4' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : false,
    standardPins : [ '6', '5', '4', '3' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ] ]
};

confBlocks.servo = {};
confBlocks.servo.arduino = {
    title : 'SERVO',
    ports : [ [ 'pulse', 'PULSE' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : false,
    standardPins : [ '8' ],
    fixedPorts : [ [ 'GND', 'GND' ], [ 'VCC', '5V' ] ]
};
confBlocks.servo.festobionic = confBlocks.servo.arduino;
confBlocks.servo.festobionic.standardPins = [ '1' ];

confBlocks.gyro = {};
confBlocks.gyro.wedo = {
    title : 'GYRO',
    bricks : true,
    ports : [ [ 'CONNECTOR', 'CONNECTOR' ] ],
    pins : Blockly.Blocks.robConfigDefinitions['pins_wedo'],
    sensor : true
};

confBlocks.gyro.sensebox = {
    title : 'GYRO',
    sensor : true
};

confBlocks.gyro.arduino = confBlocks.gyro.sensebox;

confBlocks.motor = {};
confBlocks.motor.wedo = {
    title : 'MOTOR',
    bricks : true,
    ports : [ [ 'CONNECTOR', 'CONNECTOR' ] ],
    pins : Blockly.Blocks.robConfigDefinitions['pins_wedo'],
    action : true
};

confBlocks.digitalout = {};
confBlocks.digitalout.arduino = {
    title : 'DIGITALOUT',
    ports : [ [ 'SENSOR_PIN', 'OUTPUT' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : true,
};
confBlocks.digitalout.sensebox = confBlocks.digitalout.arduino;

confBlocks.analogout = {};
confBlocks.analogout.arduino = {
    title : 'ANALOGOUT',
    ports : [ [ 'SENSOR_PIN', 'OUTPUT' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsAnalog'][a];
    },
    sensor : true,
};
confBlocks.analogout.sensebox = confBlocks.analogout.arduino;

confBlocks.digitalin = {};
confBlocks.digitalin.arduino = {
    title : 'DIGITALIN',
    ports : [ [ 'SENSOR_PIN', 'INPUT' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsDigital'][a];
    },
    sensor : false,
};
confBlocks.digitalin.calliope = confBlocks.digitalin.arduino;
confBlocks.digitalin.microbit = confBlocks.digitalin.arduino;
confBlocks.digitalin.sensebox = confBlocks.digitalin.arduino;

confBlocks.analogin = {};
confBlocks.analogin.arduino = {
    title : 'ANALOGIN',
    ports : [ [ 'SENSOR_PIN', 'INPUT' ] ],
    pins : function(a) {
        return Blockly.Blocks.robConfigDefinitions['pinsAnalogWrite'][a];
    },
    sensor : false,
};
confBlocks.analogin.calliope = confBlocks.analogin.arduino;
confBlocks.analogin.microbit = confBlocks.analogin.arduino;
confBlocks.analogin.sensebox = confBlocks.analogin.arduino;

confBlocks.wireless = {}
confBlocks.wireless.sensebox = {
    title : 'WIRELESS',
    dropdowns : [ [ 'SOCKET', [ [ 'XBEE1', 'XBEE1' ] ] ] ],
    sensor : false
};

confBlocks.sdcard = {}
confBlocks.sdcard.sensebox = {
    title : 'SDCARD',
    inputs : [ [ 'NAO_FILENAME', 'FILE.TXT' ] ],
    dropdowns : [ [ 'SOCKET', [ [ 'XBEE2', 'XBEE2' ] ] ] ],
    sensor : false
};

confBlocks.plotting = {}
confBlocks.plotting.sensebox = {
    title : 'PLOTTING',
    inputs : [ [ 'TITLE', 'P' ], [ 'XLABEL', 'X' ], [ 'YLABEL', 'Y' ], [ 'XSTART', '0' ], [ 'XEND', '100' ], [ 'YSTART', '0' ], [ 'YEND', '50' ],
            [ 'XTICK', '10' ], [ 'YTICK', '10' ] ],
    sensor : false
};

confBlocks.particle = {}
confBlocks.particle.sensebox = {
    title : 'PARTICLE',
    ports : [ [ 'Serial', 'SERIAL' ] ],
    pins : function(a) {
        return [ [ 'Serial1', 'Serial1' ], [ 'Serial2', 'Serial2' ] ];
    },
    sensor : true  
};

confBlocks.gps = {}
confBlocks.gps.sensebox = {
    title : 'GPS',
    ports : [ [ 'I2C', 'I2C' ] ],
    pins : function() {
        return [ [ 'I2C', 'I2C' ] ];
    },
    sensor : true
};

function initConfBlocks() {
    for ( var confBlock in confBlocks) {
        if (confBlocks.hasOwnProperty(confBlock)) {
            Blockly.Blocks['robConf_' + confBlock] = {
                confBlock : confBlock,
                init : function() {
                    Blockly.Blocks['robConf_generic'].init.call(this, confBlocks[this.confBlock][this.workspace.device]);
                }
            };
        }
    }
};

initConfBlocks();

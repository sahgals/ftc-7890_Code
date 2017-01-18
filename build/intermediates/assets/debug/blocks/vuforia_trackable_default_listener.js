/**
 * @fileoverview FTC robot blocks related to VuforiaTrackableDefaultListener
 * @author lizlooney@google.com (Liz Looney)
 */

// The following are generated dynamically in HardwareUtil.fetchJavaScriptForHardware():
// vuforiaTrackableDefaultListenerIdentifier
// The following are defined in vars.js:
// createNonEditableField
// functionColor

Blockly.Blocks['vuforiaTrackableDefaultListener_setPhoneInformation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('VuforiaTrackableDefaultListener'))
        .appendField('.')
        .appendField(createNonEditableField('setPhoneInformation'));
    this.appendValueInput('VUFORIA_TRACKABLE_DEFAULT_LISTENER')
        .appendField('vuforiaTrackableDefaultListener')
        .setCheck('VuforiaTrackableDefaultListener')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('PHONE_LOCATION_ON_ROBOT')
        .appendField('phoneLocationOnRobot')
        .setCheck('OpenGLMatrix')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('CAMERA_DIRECTION')
        .appendField('cameraDirection')
        .setCheck('CameraDirection')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Informs the listener of the location of the phone on the robot and the ' +
        'identity of the camera being used. This information is needed in order to compute the ' +
        'robot location. phoneLocationOnRobot must be an OpenGLMatrix object.');
  }
};

Blockly.JavaScript['vuforiaTrackableDefaultListener_setPhoneInformation'] = function(block) {
  var vuforiaTrackableDefaultListener = Blockly.JavaScript.valueToCode(
      block, 'VUFORIA_TRACKABLE_DEFAULT_LISTENER', Blockly.JavaScript.ORDER_NONE);
  var phoneLocationOnRobot = Blockly.JavaScript.valueToCode(
      block, 'PHONE_LOCATION_ON_ROBOT', Blockly.JavaScript.ORDER_NONE);
  var cameraDirection = Blockly.JavaScript.valueToCode(
      block, 'CAMERA_DIRECTION', Blockly.JavaScript.ORDER_NONE);
  return vuforiaTrackableDefaultListenerIdentifier + '.setPhoneInformation(' +
      vuforiaTrackableDefaultListener + ', ' + phoneLocationOnRobot + ', ' +
      cameraDirection + ');\n';
};

Blockly.Blocks['vuforiaTrackableDefaultListener_isVisible'] = {
  init: function() {
    this.setOutput(true, 'Boolean');
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('VuforiaTrackableDefaultListener'))
        .appendField('.')
        .appendField(createNonEditableField('isVisible'));
    this.appendValueInput('VUFORIA_TRACKABLE_DEFAULT_LISTENER')
        .appendField('vuforiaTrackableDefaultListener')
        .setCheck('VuforiaTrackableDefaultListener')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(functionColor);
    this.setTooltip('Returns true if the associated trackable is visible, false otherwise.');
  }
};

Blockly.JavaScript['vuforiaTrackableDefaultListener_isVisible'] = function(block) {
  var vuforiaTrackableDefaultListener = Blockly.JavaScript.valueToCode(
      block, 'VUFORIA_TRACKABLE_DEFAULT_LISTENER', Blockly.JavaScript.ORDER_NONE);
  var code = vuforiaTrackableDefaultListenerIdentifier + '.isVisible(' +
      vuforiaTrackableDefaultListener + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['vuforiaTrackableDefaultListener_getUpdatedRobotLocation'] = {
  init: function() {
    this.setOutput(true, 'OpenGLMatrix');
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('VuforiaTrackableDefaultListener'))
        .appendField('.')
        .appendField(createNonEditableField('getUpdatedRobotLocation'));
    this.appendValueInput('VUFORIA_TRACKABLE_DEFAULT_LISTENER')
        .appendField('vuforiaTrackableDefaultListener')
        .setCheck('VuforiaTrackableDefaultListener')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(functionColor);
    this.setTooltip('Returns the location of the robot as an OpenGLMatrix, but only if a new ' +
        'location has been detected since the last call to getUpdatedRobotLocation.');
  }
};

Blockly.JavaScript['vuforiaTrackableDefaultListener_getUpdatedRobotLocation'] = function(block) {
  var vuforiaTrackableDefaultListener = Blockly.JavaScript.valueToCode(
      block, 'VUFORIA_TRACKABLE_DEFAULT_LISTENER', Blockly.JavaScript.ORDER_NONE);
  var code = vuforiaTrackableDefaultListenerIdentifier + '.getUpdatedRobotLocation(' +
      vuforiaTrackableDefaultListener + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


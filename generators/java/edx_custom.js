/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Python for variable blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Java.edx_custom');

goog.require('Blockly.Java');


Blockly.Java['edx_set_variable_zero'] = function(block) {
  // Variable getter.
  var code = "int variable = 0;\n";
  return [code, Blockly.Java.ORDER_ATOMIC];
};

Blockly.Java['edx_print_variable'] = function(block) {
  var code = 'System.out.println("variable ="+variable);\n';
  return code;
};

Blockly.Java['edx_basic_declare_boolean'] = function(block) {
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
  Blockly.Java.ORDER_ASSIGNMENT) || 'false';
  var varName = Blockly.Java.variableDB_.getName(
    block.getFieldValue('VAR_BOOL'), Blockly.Variables.NAME_TYPE);
  var type = 'boolean';
  return type + ' ' +varName + ' = ' + argument0 + ';\n';
};

Blockly.Java['edx_basic_declare_int'] = function(block) {
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
  Blockly.Java.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Java.variableDB_.getName(
    block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var type = 'int';
  return type + ' ' +varName + ' = ' + argument0 + ';\n';
};

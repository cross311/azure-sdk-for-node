/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the InputPort class.
 * @constructor
 * Asset input port
 *
 * @member {string} [type] Port data type. Possible values include: 'Dataset'.
 * Default value: 'Dataset' .
 *
 */
class InputPort {
  constructor() {
  }

  /**
   * Defines the metadata of InputPort
   *
   * @returns {object} metadata of InputPort
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'InputPort',
      type: {
        name: 'Composite',
        className: 'InputPort',
        modelProperties: {
          type: {
            required: false,
            serializedName: 'type',
            defaultValue: 'Dataset',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = InputPort;
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

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const WebResource = msRest.WebResource;

/**
 * Query pipeline runs in the factory based on input filter conditions.
 *
 * @param {string} resourceGroupName The resource group name.
 *
 * @param {string} factoryName The factory name.
 *
 * @param {object} filterParameters Parameters to filter the pipeline run.
 *
 * @param {string} [filterParameters.continuationToken] The continuation token
 * for getting the next page of results. Null for first page.
 *
 * @param {date} filterParameters.lastUpdatedAfter The time at or after which
 * the pipeline run event was updated in 'ISO 8601' format.
 *
 * @param {date} filterParameters.lastUpdatedBefore The time at or before which
 * the pipeline run event was updated in 'ISO 8601' format.
 *
 * @param {array} [filterParameters.filters] List of filters.
 *
 * @param {array} [filterParameters.orderBy] List of OrderBy option.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PipelineRunQueryResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _queryByFactory(resourceGroupName, factoryName, filterParameters, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName !== null && resourceGroupName !== undefined) {
      if (resourceGroupName.length > 90)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MaxLength": 90');
      }
      if (resourceGroupName.length < 1)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MinLength": 1');
      }
      if (resourceGroupName.match(/^[-\w\._\(\)]+$/) === null)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "Pattern": /^[-\w\._\(\)]+$/');
      }
    }
    if (factoryName === null || factoryName === undefined || typeof factoryName.valueOf() !== 'string') {
      throw new Error('factoryName cannot be null or undefined and it must be of type string.');
    }
    if (factoryName !== null && factoryName !== undefined) {
      if (factoryName.length > 63)
      {
        throw new Error('"factoryName" should satisfy the constraint - "MaxLength": 63');
      }
      if (factoryName.length < 3)
      {
        throw new Error('"factoryName" should satisfy the constraint - "MinLength": 3');
      }
      if (factoryName.match(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/) === null)
      {
        throw new Error('"factoryName" should satisfy the constraint - "Pattern": /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/');
      }
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (filterParameters === null || filterParameters === undefined) {
      throw new Error('filterParameters cannot be null or undefined.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelineruns';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{factoryName}', encodeURIComponent(factoryName));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (filterParameters !== null && filterParameters !== undefined) {
      let requestModelMapper = new client.models['PipelineRunFilterParameters']().mapper();
      requestModel = client.serialize(requestModelMapper, filterParameters, 'filterParameters');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(filterParameters, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PipelineRunQueryResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * Get a pipeline run by its run ID.
 *
 * @param {string} resourceGroupName The resource group name.
 *
 * @param {string} factoryName The factory name.
 *
 * @param {string} runId The pipeline run identifier.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PipelineRun} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _get(resourceGroupName, factoryName, runId, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName !== null && resourceGroupName !== undefined) {
      if (resourceGroupName.length > 90)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MaxLength": 90');
      }
      if (resourceGroupName.length < 1)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MinLength": 1');
      }
      if (resourceGroupName.match(/^[-\w\._\(\)]+$/) === null)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "Pattern": /^[-\w\._\(\)]+$/');
      }
    }
    if (factoryName === null || factoryName === undefined || typeof factoryName.valueOf() !== 'string') {
      throw new Error('factoryName cannot be null or undefined and it must be of type string.');
    }
    if (factoryName !== null && factoryName !== undefined) {
      if (factoryName.length > 63)
      {
        throw new Error('"factoryName" should satisfy the constraint - "MaxLength": 63');
      }
      if (factoryName.length < 3)
      {
        throw new Error('"factoryName" should satisfy the constraint - "MinLength": 3');
      }
      if (factoryName.match(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/) === null)
      {
        throw new Error('"factoryName" should satisfy the constraint - "Pattern": /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/');
      }
    }
    if (runId === null || runId === undefined || typeof runId.valueOf() !== 'string') {
      throw new Error('runId cannot be null or undefined and it must be of type string.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelineruns/{runId}';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{factoryName}', encodeURIComponent(factoryName));
  requestUrl = requestUrl.replace('{runId}', encodeURIComponent(runId));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PipelineRun']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a PipelineRuns. */
class PipelineRuns {
  /**
   * Create a PipelineRuns.
   * @param {DataFactoryManagementClient} client Reference to the service client.
   */
  constructor(client) {
    this.client = client;
    this._queryByFactory = _queryByFactory;
    this._get = _get;
  }

  /**
   * Query pipeline runs in the factory based on input filter conditions.
   *
   * @param {string} resourceGroupName The resource group name.
   *
   * @param {string} factoryName The factory name.
   *
   * @param {object} filterParameters Parameters to filter the pipeline run.
   *
   * @param {string} [filterParameters.continuationToken] The continuation token
   * for getting the next page of results. Null for first page.
   *
   * @param {date} filterParameters.lastUpdatedAfter The time at or after which
   * the pipeline run event was updated in 'ISO 8601' format.
   *
   * @param {date} filterParameters.lastUpdatedBefore The time at or before which
   * the pipeline run event was updated in 'ISO 8601' format.
   *
   * @param {array} [filterParameters.filters] List of filters.
   *
   * @param {array} [filterParameters.orderBy] List of OrderBy option.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PipelineRunQueryResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  queryByFactoryWithHttpOperationResponse(resourceGroupName, factoryName, filterParameters, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._queryByFactory(resourceGroupName, factoryName, filterParameters, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Query pipeline runs in the factory based on input filter conditions.
   *
   * @param {string} resourceGroupName The resource group name.
   *
   * @param {string} factoryName The factory name.
   *
   * @param {object} filterParameters Parameters to filter the pipeline run.
   *
   * @param {string} [filterParameters.continuationToken] The continuation token
   * for getting the next page of results. Null for first page.
   *
   * @param {date} filterParameters.lastUpdatedAfter The time at or after which
   * the pipeline run event was updated in 'ISO 8601' format.
   *
   * @param {date} filterParameters.lastUpdatedBefore The time at or before which
   * the pipeline run event was updated in 'ISO 8601' format.
   *
   * @param {array} [filterParameters.filters] List of filters.
   *
   * @param {array} [filterParameters.orderBy] List of OrderBy option.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PipelineRunQueryResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PipelineRunQueryResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  queryByFactory(resourceGroupName, factoryName, filterParameters, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._queryByFactory(resourceGroupName, factoryName, filterParameters, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._queryByFactory(resourceGroupName, factoryName, filterParameters, options, optionalCallback);
    }
  }

  /**
   * Get a pipeline run by its run ID.
   *
   * @param {string} resourceGroupName The resource group name.
   *
   * @param {string} factoryName The factory name.
   *
   * @param {string} runId The pipeline run identifier.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PipelineRun>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getWithHttpOperationResponse(resourceGroupName, factoryName, runId, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._get(resourceGroupName, factoryName, runId, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Get a pipeline run by its run ID.
   *
   * @param {string} resourceGroupName The resource group name.
   *
   * @param {string} factoryName The factory name.
   *
   * @param {string} runId The pipeline run identifier.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PipelineRun} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PipelineRun} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  get(resourceGroupName, factoryName, runId, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._get(resourceGroupName, factoryName, runId, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._get(resourceGroupName, factoryName, runId, options, optionalCallback);
    }
  }

}

module.exports = PipelineRuns;
// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2017-09-01.6.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 02 Oct 2017 21:51:54 GMT',
  etag: '0x8D509DFCBDC3490',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e88f0a3b-fa64-461d-914b-f6668ffcc8bb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask',
  date: 'Mon, 02 Oct 2017 21:51:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2017-09-01.6.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 02 Oct 2017 21:51:54 GMT',
  etag: '0x8D509DFCBDC3490',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e88f0a3b-fa64-461d-914b-f6668ffcc8bb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask',
  date: 'Mon, 02 Oct 2017 21:51:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask?api-version=2017-09-01.6.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"ApplicationPacakgeReferenceTask\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask\",\"eTag\":\"0x8D509DFCBDC3490\",\"creationTime\":\"2017-10-02T21:51:54.5356432Z\",\"lastModified\":\"2017-10-02T21:51:54.5356432Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-10-02T21:51:54.5356432Z\",\"commandLine\":\"cmd /c echo hello world\",\"applicationPackageReferences\":[\r\n    {\r\n      \"applicationId\":\"my_application_id\"\r\n    }\r\n  ],\"userIdentity\":{\r\n    \"autoUser\":{\r\n      \"elevationLevel\":\"nonadmin\"\r\n    }\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 02 Oct 2017 21:51:54 GMT',
  etag: '0x8D509DFCBDC3490',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'eec466cd-5dec-4d5e-b8a0-0d150a7a5049',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 21:51:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask?api-version=2017-09-01.6.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"ApplicationPacakgeReferenceTask\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask\",\"eTag\":\"0x8D509DFCBDC3490\",\"creationTime\":\"2017-10-02T21:51:54.5356432Z\",\"lastModified\":\"2017-10-02T21:51:54.5356432Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-10-02T21:51:54.5356432Z\",\"commandLine\":\"cmd /c echo hello world\",\"applicationPackageReferences\":[\r\n    {\r\n      \"applicationId\":\"my_application_id\"\r\n    }\r\n  ],\"userIdentity\":{\r\n    \"autoUser\":{\r\n      \"elevationLevel\":\"nonadmin\"\r\n    }\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 02 Oct 2017 21:51:54 GMT',
  etag: '0x8D509DFCBDC3490',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'eec466cd-5dec-4d5e-b8a0-0d150a7a5049',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 21:51:54 GMT',
  connection: 'close' });
 return result; }]];
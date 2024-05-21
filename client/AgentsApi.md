# .AgentsApi

All URIs are relative to *https://api.spacetraders.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAgent**](AgentsApi.md#getAgent) | **GET** /agents/{agentSymbol} | Get Public Agent
[**getAgents**](AgentsApi.md#getAgents) | **GET** /agents | List Agents
[**getMyAgent**](AgentsApi.md#getMyAgent) | **GET** /my/agent | Get Agent


# **getAgent**
> GetMyAgent200Response getAgent()

Fetch agent details.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentsApi(configuration);

let body:.AgentsApiGetAgentRequest = {
  // string | The agent symbol
  agentSymbol: "FEBA66",
};

apiInstance.getAgent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentSymbol** | [**string**] | The agent symbol | defaults to 'FEBA66'


### Return type

**GetMyAgent200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched agent details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAgents**
> GetAgents200Response getAgents()

Fetch agents details.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentsApi(configuration);

let body:.AgentsApiGetAgentsRequest = {
  // number | What entry offset to request (optional)
  page: 1,
  // number | How many entries to return per page (optional)
  limit: 10,
};

apiInstance.getAgents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | What entry offset to request | (optional) defaults to 1
 **limit** | [**number**] | How many entries to return per page | (optional) defaults to 10


### Return type

**GetAgents200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched agents details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMyAgent**
> GetMyAgent200Response getMyAgent()

Fetch your agent\'s details.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentsApi(configuration);

let body:any = {};

apiInstance.getMyAgent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetMyAgent200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched agent details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



# .ContractsApi

All URIs are relative to *https://api.spacetraders.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptContract**](ContractsApi.md#acceptContract) | **POST** /my/contracts/{contractId}/accept | Accept Contract
[**deliverContract**](ContractsApi.md#deliverContract) | **POST** /my/contracts/{contractId}/deliver | Deliver Cargo to Contract
[**fulfillContract**](ContractsApi.md#fulfillContract) | **POST** /my/contracts/{contractId}/fulfill | Fulfill Contract
[**getContract**](ContractsApi.md#getContract) | **GET** /my/contracts/{contractId} | Get Contract
[**getContracts**](ContractsApi.md#getContracts) | **GET** /my/contracts | List Contracts


# **acceptContract**
> AcceptContract200Response acceptContract()

Accept a contract by ID.   You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContractsApi(configuration);

let body:.ContractsApiAcceptContractRequest = {
  // string | The contract ID to accept.
  contractId: "contractId_example",
};

apiInstance.acceptContract(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | [**string**] | The contract ID to accept. | defaults to undefined


### Return type

**AcceptContract200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesfully accepted contract. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deliverContract**
> DeliverContract200Response deliverContract()

Deliver cargo to a contract.  In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.  Cargo that was delivered will be removed from the ship\'s cargo.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContractsApi(configuration);

let body:.ContractsApiDeliverContractRequest = {
  // string | The ID of the contract.
  contractId: "contractId_example",
  // DeliverContractRequest |  (optional)
  deliverContractRequest: {
    shipSymbol: "shipSymbol_example",
    tradeSymbol: "tradeSymbol_example",
    units: 1,
  },
};

apiInstance.deliverContract(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deliverContractRequest** | **DeliverContractRequest**|  |
 **contractId** | [**string**] | The ID of the contract. | defaults to undefined


### Return type

**DeliverContract200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully delivered cargo to contract. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **fulfillContract**
> FulfillContract200Response fulfillContract()

Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContractsApi(configuration);

let body:.ContractsApiFulfillContractRequest = {
  // string | The ID of the contract to fulfill.
  contractId: "contractId_example",
};

apiInstance.fulfillContract(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | [**string**] | The ID of the contract to fulfill. | defaults to undefined


### Return type

**FulfillContract200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fulfilled a contract. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getContract**
> GetContract200Response getContract()

Get the details of a contract by ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContractsApi(configuration);

let body:.ContractsApiGetContractRequest = {
  // string | The contract ID
  contractId: "contractId_example",
};

apiInstance.getContract(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | [**string**] | The contract ID | defaults to undefined


### Return type

**GetContract200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched contract. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getContracts**
> GetContracts200Response getContracts()

Return a paginated list of all your contracts.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContractsApi(configuration);

let body:.ContractsApiGetContractsRequest = {
  // number | What entry offset to request (optional)
  page: 1,
  // number | How many entries to return per page (optional)
  limit: 10,
};

apiInstance.getContracts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | What entry offset to request | (optional) defaults to 1
 **limit** | [**number**] | How many entries to return per page | (optional) defaults to 10


### Return type

**GetContracts200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesfully listed contracts. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



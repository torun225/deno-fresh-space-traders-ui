# .FactionsApi

All URIs are relative to *https://api.spacetraders.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFaction**](FactionsApi.md#getFaction) | **GET** /factions/{factionSymbol} | Get Faction
[**getFactions**](FactionsApi.md#getFactions) | **GET** /factions | List Factions


# **getFaction**
> GetFaction200Response getFaction()

View the details of a faction.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FactionsApi(configuration);

let body:.FactionsApiGetFactionRequest = {
  // string | The faction symbol
  factionSymbol: "COSMIC",
};

apiInstance.getFaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **factionSymbol** | [**string**] | The faction symbol | defaults to undefined


### Return type

**GetFaction200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched a faction. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFactions**
> GetFactions200Response getFactions()

Return a paginated list of all the factions in the game.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FactionsApi(configuration);

let body:.FactionsApiGetFactionsRequest = {
  // number | What entry offset to request (optional)
  page: 1,
  // number | How many entries to return per page (optional)
  limit: 10,
};

apiInstance.getFactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | What entry offset to request | (optional) defaults to 1
 **limit** | [**number**] | How many entries to return per page | (optional) defaults to 10


### Return type

**GetFactions200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesfully fetched factions. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



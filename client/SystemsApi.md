# .SystemsApi

All URIs are relative to *https://api.spacetraders.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConstruction**](SystemsApi.md#getConstruction) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/construction | Get Construction Site
[**getJumpGate**](SystemsApi.md#getJumpGate) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate | Get Jump Gate
[**getMarket**](SystemsApi.md#getMarket) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/market | Get Market
[**getShipyard**](SystemsApi.md#getShipyard) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard | Get Shipyard
[**getSystem**](SystemsApi.md#getSystem) | **GET** /systems/{systemSymbol} | Get System
[**getSystemWaypoints**](SystemsApi.md#getSystemWaypoints) | **GET** /systems/{systemSymbol}/waypoints | List Waypoints in System
[**getSystems**](SystemsApi.md#getSystems) | **GET** /systems | List Systems
[**getWaypoint**](SystemsApi.md#getWaypoint) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol} | Get Waypoint
[**supplyConstruction**](SystemsApi.md#supplyConstruction) | **POST** /systems/{systemSymbol}/waypoints/{waypointSymbol}/construction/supply | Supply Construction Site


# **getConstruction**
> GetConstruction200Response getConstruction()

Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiGetConstructionRequest = {
  // string | The system symbol
  systemSymbol: "systemSymbol_example",
  // string | The waypoint symbol
  waypointSymbol: "waypointSymbol_example",
};

apiInstance.getConstruction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSymbol** | [**string**] | The system symbol | defaults to undefined
 **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined


### Return type

**GetConstruction200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched construction site. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getJumpGate**
> GetJumpGate200Response getJumpGate()

Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  Waypoints connected to this jump gate can be 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiGetJumpGateRequest = {
  // string | The system symbol
  systemSymbol: "systemSymbol_example",
  // string | The waypoint symbol
  waypointSymbol: "waypointSymbol_example",
};

apiInstance.getJumpGate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSymbol** | [**string**] | The system symbol | defaults to undefined
 **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined


### Return type

**GetJumpGate200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched jump gate. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMarket**
> GetMarket200Response getMarket()

Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiGetMarketRequest = {
  // string | The system symbol
  systemSymbol: "systemSymbol_example",
  // string | The waypoint symbol
  waypointSymbol: "waypointSymbol_example",
};

apiInstance.getMarket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSymbol** | [**string**] | The system symbol | defaults to undefined
 **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined


### Return type

**GetMarket200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched the market. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getShipyard**
> GetShipyard200Response getShipyard()

Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiGetShipyardRequest = {
  // string | The system symbol
  systemSymbol: "systemSymbol_example",
  // string | The waypoint symbol
  waypointSymbol: "waypointSymbol_example",
};

apiInstance.getShipyard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSymbol** | [**string**] | The system symbol | defaults to undefined
 **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined


### Return type

**GetShipyard200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched the shipyard. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSystem**
> GetSystem200Response getSystem()

Get the details of a system.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiGetSystemRequest = {
  // string | The system symbol
  systemSymbol: "X1-OE",
};

apiInstance.getSystem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSymbol** | [**string**] | The system symbol | defaults to 'X1-OE'


### Return type

**GetSystem200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched the system. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSystemWaypoints**
> GetSystemWaypoints200Response getSystemWaypoints()

Return a paginated list of all of the waypoints for a given system.  If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiGetSystemWaypointsRequest = {
  // string | The system symbol
  systemSymbol: "systemSymbol_example",
  // number | What entry offset to request (optional)
  page: 1,
  // number | How many entries to return per page (optional)
  limit: 10,
  // WaypointType | Filter waypoints by type. (optional)
  type: "PLANET",
  // GetSystemWaypointsTraitsParameter | Filter waypoints by one or more traits. (optional)
  traits: null,
};

apiInstance.getSystemWaypoints(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSymbol** | [**string**] | The system symbol | defaults to undefined
 **page** | [**number**] | What entry offset to request | (optional) defaults to 1
 **limit** | [**number**] | How many entries to return per page | (optional) defaults to 10
 **type** | **WaypointType** | Filter waypoints by type. | (optional) defaults to undefined
 **traits** | **GetSystemWaypointsTraitsParameter** | Filter waypoints by one or more traits. | (optional) defaults to undefined


### Return type

**GetSystemWaypoints200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched all waypoints in the system. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSystems**
> GetSystems200Response getSystems()

Return a paginated list of all systems.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiGetSystemsRequest = {
  // number | What entry offset to request (optional)
  page: 1,
  // number | How many entries to return per page (optional)
  limit: 10,
};

apiInstance.getSystems(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | What entry offset to request | (optional) defaults to 1
 **limit** | [**number**] | How many entries to return per page | (optional) defaults to 10


### Return type

**GetSystems200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully listed systems. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWaypoint**
> GetWaypoint200Response getWaypoint()

View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiGetWaypointRequest = {
  // string | The system symbol
  systemSymbol: "systemSymbol_example",
  // string | The waypoint symbol
  waypointSymbol: "waypointSymbol_example",
};

apiInstance.getWaypoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSymbol** | [**string**] | The system symbol | defaults to undefined
 **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined


### Return type

**GetWaypoint200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched waypoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **supplyConstruction**
> SupplyConstruction201Response supplyConstruction()

Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.  The good must be in your ship\'s cargo. The good will be removed from your ship\'s cargo and added to the construction site\'s materials.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiSupplyConstructionRequest = {
  // string | The system symbol
  systemSymbol: "systemSymbol_example",
  // string | The waypoint symbol
  waypointSymbol: "waypointSymbol_example",
  // SupplyConstructionRequest |  (optional)
  supplyConstructionRequest: {
    shipSymbol: "shipSymbol_example",
    tradeSymbol: "tradeSymbol_example",
    units: 1,
  },
};

apiInstance.supplyConstruction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplyConstructionRequest** | **SupplyConstructionRequest**|  |
 **systemSymbol** | [**string**] | The system symbol | defaults to undefined
 **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined


### Return type

**SupplyConstruction201Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successfully supplied construction site. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



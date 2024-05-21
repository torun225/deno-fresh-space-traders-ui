// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { GetConstruction200Response } from '../models/GetConstruction200Response.ts';
import { GetJumpGate200Response } from '../models/GetJumpGate200Response.ts';
import { GetMarket200Response } from '../models/GetMarket200Response.ts';
import { GetShipyard200Response } from '../models/GetShipyard200Response.ts';
import { GetSystem200Response } from '../models/GetSystem200Response.ts';
import { GetSystemWaypoints200Response } from '../models/GetSystemWaypoints200Response.ts';
import { GetSystemWaypointsTraitsParameter } from '../models/GetSystemWaypointsTraitsParameter.ts';
import { GetSystems200Response } from '../models/GetSystems200Response.ts';
import { GetWaypoint200Response } from '../models/GetWaypoint200Response.ts';
import { SupplyConstruction201Response } from '../models/SupplyConstruction201Response.ts';
import { SupplyConstructionRequest } from '../models/SupplyConstructionRequest.ts';
import { WaypointType } from '../models/WaypointType.ts';

/**
 * no description
 */
export class SystemsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
     * Get Construction Site
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public async getConstruction(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'systemSymbol' is not null or undefined
        if (systemSymbol === null || systemSymbol === undefined) {
            throw new RequiredError("SystemsApi", "getConstruction", "systemSymbol");
        }


        // verify required parameter 'waypointSymbol' is not null or undefined
        if (waypointSymbol === null || waypointSymbol === undefined) {
            throw new RequiredError("SystemsApi", "getConstruction", "waypointSymbol");
        }


        // Path Params
        const localVarPath = '/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction'
            .replace('{' + 'systemSymbol' + '}', encodeURIComponent(String(systemSymbol)))
            .replace('{' + 'waypointSymbol' + '}', encodeURIComponent(String(waypointSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["AgentToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  Waypoints connected to this jump gate can be 
     * Get Jump Gate
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public async getJumpGate(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'systemSymbol' is not null or undefined
        if (systemSymbol === null || systemSymbol === undefined) {
            throw new RequiredError("SystemsApi", "getJumpGate", "systemSymbol");
        }


        // verify required parameter 'waypointSymbol' is not null or undefined
        if (waypointSymbol === null || waypointSymbol === undefined) {
            throw new RequiredError("SystemsApi", "getJumpGate", "waypointSymbol");
        }


        // Path Params
        const localVarPath = '/systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate'
            .replace('{' + 'systemSymbol' + '}', encodeURIComponent(String(systemSymbol)))
            .replace('{' + 'waypointSymbol' + '}', encodeURIComponent(String(waypointSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["AgentToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
     * Get Market
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public async getMarket(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'systemSymbol' is not null or undefined
        if (systemSymbol === null || systemSymbol === undefined) {
            throw new RequiredError("SystemsApi", "getMarket", "systemSymbol");
        }


        // verify required parameter 'waypointSymbol' is not null or undefined
        if (waypointSymbol === null || waypointSymbol === undefined) {
            throw new RequiredError("SystemsApi", "getMarket", "waypointSymbol");
        }


        // Path Params
        const localVarPath = '/systems/{systemSymbol}/waypoints/{waypointSymbol}/market'
            .replace('{' + 'systemSymbol' + '}', encodeURIComponent(String(systemSymbol)))
            .replace('{' + 'waypointSymbol' + '}', encodeURIComponent(String(waypointSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["AgentToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public async getShipyard(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'systemSymbol' is not null or undefined
        if (systemSymbol === null || systemSymbol === undefined) {
            throw new RequiredError("SystemsApi", "getShipyard", "systemSymbol");
        }


        // verify required parameter 'waypointSymbol' is not null or undefined
        if (waypointSymbol === null || waypointSymbol === undefined) {
            throw new RequiredError("SystemsApi", "getShipyard", "waypointSymbol");
        }


        // Path Params
        const localVarPath = '/systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard'
            .replace('{' + 'systemSymbol' + '}', encodeURIComponent(String(systemSymbol)))
            .replace('{' + 'waypointSymbol' + '}', encodeURIComponent(String(waypointSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["AgentToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the details of a system.
     * Get System
     * @param systemSymbol The system symbol
     */
    public async getSystem(systemSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'systemSymbol' is not null or undefined
        if (systemSymbol === null || systemSymbol === undefined) {
            throw new RequiredError("SystemsApi", "getSystem", "systemSymbol");
        }


        // Path Params
        const localVarPath = '/systems/{systemSymbol}'
            .replace('{' + 'systemSymbol' + '}', encodeURIComponent(String(systemSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["AgentToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Return a paginated list of all of the waypoints for a given system.  If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
     * List Waypoints in System
     * @param systemSymbol The system symbol
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     * @param type Filter waypoints by type.
     * @param traits Filter waypoints by one or more traits.
     */
    public async getSystemWaypoints(systemSymbol: string, page?: number, limit?: number, type?: WaypointType, traits?: GetSystemWaypointsTraitsParameter, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'systemSymbol' is not null or undefined
        if (systemSymbol === null || systemSymbol === undefined) {
            throw new RequiredError("SystemsApi", "getSystemWaypoints", "systemSymbol");
        }






        // Path Params
        const localVarPath = '/systems/{systemSymbol}/waypoints'
            .replace('{' + 'systemSymbol' + '}', encodeURIComponent(String(systemSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "WaypointType", ""));
        }

        // Query Params
        if (traits !== undefined) {
            requestContext.setQueryParam("traits", ObjectSerializer.serialize(traits, "GetSystemWaypointsTraitsParameter", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["AgentToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Return a paginated list of all systems.
     * List Systems
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public async getSystems(page?: number, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/systems';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["AgentToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
     * Get Waypoint
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public async getWaypoint(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'systemSymbol' is not null or undefined
        if (systemSymbol === null || systemSymbol === undefined) {
            throw new RequiredError("SystemsApi", "getWaypoint", "systemSymbol");
        }


        // verify required parameter 'waypointSymbol' is not null or undefined
        if (waypointSymbol === null || waypointSymbol === undefined) {
            throw new RequiredError("SystemsApi", "getWaypoint", "waypointSymbol");
        }


        // Path Params
        const localVarPath = '/systems/{systemSymbol}/waypoints/{waypointSymbol}'
            .replace('{' + 'systemSymbol' + '}', encodeURIComponent(String(systemSymbol)))
            .replace('{' + 'waypointSymbol' + '}', encodeURIComponent(String(waypointSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["AgentToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.  The good must be in your ship\'s cargo. The good will be removed from your ship\'s cargo and added to the construction site\'s materials.
     * Supply Construction Site
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     * @param supplyConstructionRequest 
     */
    public async supplyConstruction(systemSymbol: string, waypointSymbol: string, supplyConstructionRequest?: SupplyConstructionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'systemSymbol' is not null or undefined
        if (systemSymbol === null || systemSymbol === undefined) {
            throw new RequiredError("SystemsApi", "supplyConstruction", "systemSymbol");
        }


        // verify required parameter 'waypointSymbol' is not null or undefined
        if (waypointSymbol === null || waypointSymbol === undefined) {
            throw new RequiredError("SystemsApi", "supplyConstruction", "waypointSymbol");
        }



        // Path Params
        const localVarPath = '/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction/supply'
            .replace('{' + 'systemSymbol' + '}', encodeURIComponent(String(systemSymbol)))
            .replace('{' + 'waypointSymbol' + '}', encodeURIComponent(String(waypointSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(supplyConstructionRequest, "SupplyConstructionRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["AgentToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class SystemsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConstruction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConstructionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetConstruction200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetConstruction200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetConstruction200Response", ""
            ) as GetConstruction200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetConstruction200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetConstruction200Response", ""
            ) as GetConstruction200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJumpGate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJumpGateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetJumpGate200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetJumpGate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetJumpGate200Response", ""
            ) as GetJumpGate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetJumpGate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetJumpGate200Response", ""
            ) as GetJumpGate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMarket
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMarketWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMarket200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMarket200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMarket200Response", ""
            ) as GetMarket200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetMarket200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMarket200Response", ""
            ) as GetMarket200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getShipyard
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getShipyardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetShipyard200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetShipyard200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetShipyard200Response", ""
            ) as GetShipyard200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetShipyard200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetShipyard200Response", ""
            ) as GetShipyard200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSystem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSystemWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetSystem200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetSystem200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetSystem200Response", ""
            ) as GetSystem200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetSystem200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetSystem200Response", ""
            ) as GetSystem200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSystemWaypoints
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSystemWaypointsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetSystemWaypoints200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetSystemWaypoints200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetSystemWaypoints200Response", ""
            ) as GetSystemWaypoints200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetSystemWaypoints200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetSystemWaypoints200Response", ""
            ) as GetSystemWaypoints200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSystems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSystemsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetSystems200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetSystems200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetSystems200Response", ""
            ) as GetSystems200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetSystems200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetSystems200Response", ""
            ) as GetSystems200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWaypoint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWaypointWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetWaypoint200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetWaypoint200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetWaypoint200Response", ""
            ) as GetWaypoint200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetWaypoint200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetWaypoint200Response", ""
            ) as GetWaypoint200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to supplyConstruction
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async supplyConstructionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SupplyConstruction201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SupplyConstruction201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupplyConstruction201Response", ""
            ) as SupplyConstruction201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SupplyConstruction201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupplyConstruction201Response", ""
            ) as SupplyConstruction201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

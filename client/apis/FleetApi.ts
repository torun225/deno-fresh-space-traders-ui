// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreateChart201Response } from '../models/CreateChart201Response.ts';
import { CreateShipShipScan201Response } from '../models/CreateShipShipScan201Response.ts';
import { CreateShipSystemScan201Response } from '../models/CreateShipSystemScan201Response.ts';
import { CreateShipWaypointScan201Response } from '../models/CreateShipWaypointScan201Response.ts';
import { CreateSurvey201Response } from '../models/CreateSurvey201Response.ts';
import { DockShip200Response } from '../models/DockShip200Response.ts';
import { ExtractResources201Response } from '../models/ExtractResources201Response.ts';
import { ExtractResourcesRequest } from '../models/ExtractResourcesRequest.ts';
import { GetMounts200Response } from '../models/GetMounts200Response.ts';
import { GetMyShip200Response } from '../models/GetMyShip200Response.ts';
import { GetMyShipCargo200Response } from '../models/GetMyShipCargo200Response.ts';
import { GetMyShips200Response } from '../models/GetMyShips200Response.ts';
import { GetRepairShip200Response } from '../models/GetRepairShip200Response.ts';
import { GetScrapShip200Response } from '../models/GetScrapShip200Response.ts';
import { GetShipCooldown200Response } from '../models/GetShipCooldown200Response.ts';
import { GetShipNav200Response } from '../models/GetShipNav200Response.ts';
import { InstallMount201Response } from '../models/InstallMount201Response.ts';
import { InstallMountRequest } from '../models/InstallMountRequest.ts';
import { Jettison200Response } from '../models/Jettison200Response.ts';
import { JettisonRequest } from '../models/JettisonRequest.ts';
import { JumpShip200Response } from '../models/JumpShip200Response.ts';
import { JumpShipRequest } from '../models/JumpShipRequest.ts';
import { NavigateShip200Response } from '../models/NavigateShip200Response.ts';
import { NavigateShipRequest } from '../models/NavigateShipRequest.ts';
import { NegotiateContract200Response } from '../models/NegotiateContract200Response.ts';
import { OrbitShip200Response } from '../models/OrbitShip200Response.ts';
import { PatchShipNavRequest } from '../models/PatchShipNavRequest.ts';
import { PurchaseCargo201Response } from '../models/PurchaseCargo201Response.ts';
import { PurchaseCargoRequest } from '../models/PurchaseCargoRequest.ts';
import { PurchaseShip201Response } from '../models/PurchaseShip201Response.ts';
import { PurchaseShipRequest } from '../models/PurchaseShipRequest.ts';
import { RefuelShip200Response } from '../models/RefuelShip200Response.ts';
import { RefuelShipRequest } from '../models/RefuelShipRequest.ts';
import { RemoveMount201Response } from '../models/RemoveMount201Response.ts';
import { RemoveMountRequest } from '../models/RemoveMountRequest.ts';
import { RepairShip200Response } from '../models/RepairShip200Response.ts';
import { ScrapShip200Response } from '../models/ScrapShip200Response.ts';
import { SellCargo201Response } from '../models/SellCargo201Response.ts';
import { SellCargoRequest } from '../models/SellCargoRequest.ts';
import { ShipRefine201Response } from '../models/ShipRefine201Response.ts';
import { ShipRefineRequest } from '../models/ShipRefineRequest.ts';
import { SiphonResources201Response } from '../models/SiphonResources201Response.ts';
import { Survey } from '../models/Survey.ts';
import { TransferCargo200Response } from '../models/TransferCargo200Response.ts';
import { TransferCargoRequest } from '../models/TransferCargoRequest.ts';
import { WarpShip200Response } from '../models/WarpShip200Response.ts';

/**
 * no description
 */
export class FleetApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Command a ship to chart the waypoint at its current location.  Most waypoints in the universe are uncharted by default. These waypoints have their traits hidden until they have been charted by a ship.  Charting a waypoint will record your agent as the one who created the chart, and all other agents would also be able to see the waypoint\'s traits.
     * Create Chart
     * @param shipSymbol The symbol of the ship.
     */
    public async createChart(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "createChart", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/chart'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Scan for nearby ships, retrieving information for all ships in range.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Ships
     * @param shipSymbol The ship symbol.
     */
    public async createShipShipScan(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "createShipShipScan", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/scan/ships'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Scan for nearby systems, retrieving information on the systems\' distance from the ship and their waypoints. Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Systems
     * @param shipSymbol The ship symbol.
     */
    public async createShipSystemScan(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "createShipSystemScan", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/scan/systems'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Scan for nearby waypoints, retrieving detailed information on each waypoint in range. Scanning uncharted waypoints will allow you to ignore their uncharted state and will list the waypoints\' traits.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Waypoints
     * @param shipSymbol The ship symbol.
     */
    public async createShipWaypointScan(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "createShipWaypointScan", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/scan/waypoints'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Create surveys on a waypoint that can be extracted such as asteroid fields. A survey focuses on specific types of deposits from the extracted location. When ships extract using this survey, they are guaranteed to procure a high amount of one of the goods in the survey.  In order to use a survey, send the entire survey details in the body of the extract request.  Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown after surveying in which it is unable to perform certain actions. Surveys will eventually expire after a period of time or will be exhausted after being extracted several times based on the survey\'s size. Multiple ships can use the same survey for extraction.  A ship must have the `Surveyor` mount installed in order to use this function.
     * Create Survey
     * @param shipSymbol The symbol of the ship.
     */
    public async createSurvey(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "createSurvey", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/survey'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Attempt to dock your ship at its current location. Docking will only succeed if your ship is capable of docking at the time of the request.  Docked ships can access elements in their current location, such as the market or a shipyard, but cannot do actions that require the ship to be above surface such as navigating or extracting.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
     * Dock Ship
     * @param shipSymbol The symbol of the ship.
     */
    public async dockShip(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "dockShip", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/dock'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Extract resources from a waypoint that can be extracted, such as asteroid fields, into your ship. Send an optional survey as the payload to target specific yields.  The ship must be in orbit to be able to extract and must have mining equipments installed that can extract goods, such as the `Gas Siphon` mount for gas-based goods or `Mining Laser` mount for ore-based goods.  The survey property is now deprecated. See the `extract/survey` endpoint for more details.
     * Extract Resources
     * @param shipSymbol The ship symbol.
     * @param extractResourcesRequest 
     */
    public async extractResources(shipSymbol: string, extractResourcesRequest?: ExtractResourcesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "extractResources", "shipSymbol");
        }



        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/extract'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(extractResourcesRequest, "ExtractResourcesRequest", ""),
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

    /**
     * Use a survey when extracting resources from a waypoint. This endpoint requires a survey as the payload, which allows your ship to extract specific yields.  Send the full survey object as the payload which will be validated according to the signature. If the signature is invalid, or any properties of the survey are changed, the request will fail.
     * Extract Resources with Survey
     * @param shipSymbol The ship symbol.
     * @param survey 
     */
    public async extractResourcesWithSurvey(shipSymbol: string, survey?: Survey, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "extractResourcesWithSurvey", "shipSymbol");
        }



        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/extract/survey'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(survey, "Survey", ""),
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

    /**
     * Get the mounts installed on a ship.
     * Get Mounts
     * @param shipSymbol The ship\&#39;s symbol.
     */
    public async getMounts(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "getMounts", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/mounts'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

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
     * Retrieve the details of a ship under your agent\'s ownership.
     * Get Ship
     * @param shipSymbol The symbol of the ship.
     */
    public async getMyShip(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "getMyShip", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

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
     * Retrieve the cargo of a ship under your agent\'s ownership.
     * Get Ship Cargo
     * @param shipSymbol The symbol of the ship.
     */
    public async getMyShipCargo(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "getMyShipCargo", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/cargo'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

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
     * Return a paginated list of all of ships under your agent\'s ownership.
     * List Ships
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public async getMyShips(page?: number, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/my/ships';

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
     * Get the cost of repairing a ship.
     * Get Repair Ship
     * @param shipSymbol The ship symbol.
     */
    public async getRepairShip(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "getRepairShip", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/repair'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

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
     * Get the amount of value that will be returned when scrapping a ship.
     * Get Scrap Ship
     * @param shipSymbol The ship symbol.
     */
    public async getScrapShip(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "getScrapShip", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/scrap'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

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
     * Retrieve the details of your ship\'s reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.
     * Get Ship Cooldown
     * @param shipSymbol The symbol of the ship.
     */
    public async getShipCooldown(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "getShipCooldown", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/cooldown'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

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
     * Get the current nav status of a ship.
     * Get Ship Nav
     * @param shipSymbol The ship symbol.
     */
    public async getShipNav(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "getShipNav", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/nav'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

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
     * Install a mount on a ship.  In order to install a mount, the ship must be docked and located in a waypoint that has a `Shipyard` trait. The ship also must have the mount to install in its cargo hold.  An installation fee will be deduced by the Shipyard for installing the mount on the ship. 
     * Install Mount
     * @param shipSymbol The ship\&#39;s symbol.
     * @param installMountRequest 
     */
    public async installMount(shipSymbol: string, installMountRequest?: InstallMountRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "installMount", "shipSymbol");
        }



        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/mounts/install'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(installMountRequest, "InstallMountRequest", ""),
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

    /**
     * Jettison cargo from your ship\'s cargo hold.
     * Jettison Cargo
     * @param shipSymbol The ship symbol.
     * @param jettisonRequest 
     */
    public async jettison(shipSymbol: string, jettisonRequest?: JettisonRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "jettison", "shipSymbol");
        }



        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/jettison'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jettisonRequest, "JettisonRequest", ""),
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

    /**
     * Jump your ship instantly to a target connected waypoint. The ship must be in orbit to execute a jump.  A unit of antimatter is purchased and consumed from the market when jumping. The price of antimatter is determined by the market and is subject to change. A ship can only jump to connected waypoints
     * Jump Ship
     * @param shipSymbol The ship symbol.
     * @param jumpShipRequest 
     */
    public async jumpShip(shipSymbol: string, jumpShipRequest?: JumpShipRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "jumpShip", "shipSymbol");
        }



        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/jump'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(jumpShipRequest, "JumpShipRequest", ""),
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

    /**
     * Navigate to a target destination. The ship must be in orbit to use this function. The destination waypoint must be within the same system as the ship\'s current location. Navigating will consume the necessary fuel from the ship\'s manifest based on the distance to the target waypoint.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.  To travel between systems, see the ship\'s Warp or Jump actions.
     * Navigate Ship
     * @param shipSymbol The ship symbol.
     * @param navigateShipRequest 
     */
    public async navigateShip(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "navigateShip", "shipSymbol");
        }



        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/navigate'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(navigateShipRequest, "NavigateShipRequest", ""),
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

    /**
     * Negotiate a new contract with the HQ.  In order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.  Once a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept.   The ship must be present at any waypoint with a faction present to negotiate a contract with that faction.
     * Negotiate Contract
     * @param shipSymbol The ship\&#39;s symbol.
     */
    public async negotiateContract(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "negotiateContract", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/negotiate/contract'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Attempt to move your ship into orbit at its current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  Orbiting ships are able to do actions that require the ship to be above surface such as navigating or extracting, but cannot access elements in their current waypoint, such as the market or a shipyard.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
     * Orbit Ship
     * @param shipSymbol The symbol of the ship.
     */
    public async orbitShip(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "orbitShip", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/orbit'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Update the nav configuration of a ship.  Currently only supports configuring the Flight Mode of the ship, which affects its speed and fuel consumption.
     * Patch Ship Nav
     * @param shipSymbol The ship symbol.
     * @param patchShipNavRequest 
     */
    public async patchShipNav(shipSymbol: string, patchShipNavRequest?: PatchShipNavRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "patchShipNav", "shipSymbol");
        }



        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/nav'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(patchShipNavRequest, "PatchShipNavRequest", ""),
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

    /**
     * Purchase cargo from a market.  The ship must be docked in a waypoint that has `Marketplace` trait, and the market must be selling a good to be able to purchase it.  The maximum amount of units of a good that can be purchased in each transaction are denoted by the `tradeVolume` value of the good, which can be viewed by using the Get Market action.  Purchased goods are added to the ship\'s cargo hold.
     * Purchase Cargo
     * @param shipSymbol The ship\&#39;s symbol.
     * @param purchaseCargoRequest 
     */
    public async purchaseCargo(shipSymbol: string, purchaseCargoRequest?: PurchaseCargoRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "purchaseCargo", "shipSymbol");
        }



        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/purchase'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(purchaseCargoRequest, "PurchaseCargoRequest", ""),
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

    /**
     * Purchase a ship from a Shipyard. In order to use this function, a ship under your agent\'s ownership must be in a waypoint that has the `Shipyard` trait, and the Shipyard must sell the type of the desired ship.  Shipyards typically offer ship types, which are predefined templates of ships that have dedicated roles. A template comes with a preset of an engine, a reactor, and a frame. It may also include a few modules and mounts.
     * Purchase Ship
     * @param purchaseShipRequest 
     */
    public async purchaseShip(purchaseShipRequest?: PurchaseShipRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/my/ships';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(purchaseShipRequest, "PurchaseShipRequest", ""),
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

    /**
     * Refuel your ship by buying fuel from the local market.  Requires the ship to be docked in a waypoint that has the `Marketplace` trait, and the market must be selling fuel in order to refuel.  Each fuel bought from the market replenishes 100 units in your ship\'s fuel.  Ships will always be refuel to their frame\'s maximum fuel capacity when using this action.
     * Refuel Ship
     * @param shipSymbol The ship symbol.
     * @param refuelShipRequest 
     */
    public async refuelShip(shipSymbol: string, refuelShipRequest?: RefuelShipRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "refuelShip", "shipSymbol");
        }



        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/refuel'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(refuelShipRequest, "RefuelShipRequest", ""),
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

    /**
     * Remove a mount from a ship.  The ship must be docked in a waypoint that has the `Shipyard` trait, and must have the desired mount that it wish to remove installed.  A removal fee will be deduced from the agent by the Shipyard.
     * Remove Mount
     * @param shipSymbol The ship\&#39;s symbol.
     * @param removeMountRequest 
     */
    public async removeMount(shipSymbol: string, removeMountRequest?: RemoveMountRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "removeMount", "shipSymbol");
        }



        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/mounts/remove'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(removeMountRequest, "RemoveMountRequest", ""),
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

    /**
     * Repair a ship, restoring the ship to maximum condition. The ship must be docked at a waypoint that has the `Shipyard` trait in order to use this function. To preview the cost of repairing the ship, use the Get action.
     * Repair Ship
     * @param shipSymbol The ship symbol.
     */
    public async repairShip(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "repairShip", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/repair'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Scrap a ship, removing it from the game and returning a portion of the ship\'s value to the agent. The ship must be docked in a waypoint that has the `Shipyard` trait in order to use this function. To preview the amount of value that will be returned, use the Get Ship action.
     * Scrap Ship
     * @param shipSymbol The ship symbol.
     */
    public async scrapShip(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "scrapShip", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/scrap'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Sell cargo in your ship to a market that trades this cargo. The ship must be docked in a waypoint that has the `Marketplace` trait in order to use this function.
     * Sell Cargo
     * @param shipSymbol Symbol of a ship.
     * @param sellCargoRequest 
     */
    public async sellCargo(shipSymbol: string, sellCargoRequest?: SellCargoRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "sellCargo", "shipSymbol");
        }



        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/sell'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(sellCargoRequest, "SellCargoRequest", ""),
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

    /**
     * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request. In order to be able to refine, a ship must have goods that can be refined and have installed a `Refinery` module that can refine it.  When refining, 30 basic goods will be converted into 10 processed goods.
     * Ship Refine
     * @param shipSymbol The symbol of the ship.
     * @param shipRefineRequest 
     */
    public async shipRefine(shipSymbol: string, shipRefineRequest?: ShipRefineRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "shipRefine", "shipSymbol");
        }



        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/refine'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(shipRefineRequest, "ShipRefineRequest", ""),
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

    /**
     * Siphon gases, such as hydrocarbon, from gas giants.  The ship must be in orbit to be able to siphon and must have siphon mounts and a gas processor installed.
     * Siphon Resources
     * @param shipSymbol The ship symbol.
     */
    public async siphonResources(shipSymbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "siphonResources", "shipSymbol");
        }


        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/siphon'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Transfer cargo between ships.  The receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.  The response body\'s cargo shows the cargo of the transferring ship after the transfer is complete.
     * Transfer Cargo
     * @param shipSymbol The transferring ship\&#39;s symbol.
     * @param transferCargoRequest 
     */
    public async transferCargo(shipSymbol: string, transferCargoRequest?: TransferCargoRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "transferCargo", "shipSymbol");
        }



        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/transfer'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(transferCargoRequest, "TransferCargoRequest", ""),
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

    /**
     * Warp your ship to a target destination in another system. The ship must be in orbit to use this function and must have the `Warp Drive` module installed. Warping will consume the necessary fuel from the ship\'s manifest.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at its destination.
     * Warp Ship
     * @param shipSymbol The ship symbol.
     * @param navigateShipRequest 
     */
    public async warpShip(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipSymbol' is not null or undefined
        if (shipSymbol === null || shipSymbol === undefined) {
            throw new RequiredError("FleetApi", "warpShip", "shipSymbol");
        }



        // Path Params
        const localVarPath = '/my/ships/{shipSymbol}/warp'
            .replace('{' + 'shipSymbol' + '}', encodeURIComponent(String(shipSymbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(navigateShipRequest, "NavigateShipRequest", ""),
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

export class FleetApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createChart
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createChartWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateChart201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateChart201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateChart201Response", ""
            ) as CreateChart201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateChart201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateChart201Response", ""
            ) as CreateChart201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createShipShipScan
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createShipShipScanWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateShipShipScan201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateShipShipScan201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateShipShipScan201Response", ""
            ) as CreateShipShipScan201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateShipShipScan201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateShipShipScan201Response", ""
            ) as CreateShipShipScan201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createShipSystemScan
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createShipSystemScanWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateShipSystemScan201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateShipSystemScan201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateShipSystemScan201Response", ""
            ) as CreateShipSystemScan201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateShipSystemScan201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateShipSystemScan201Response", ""
            ) as CreateShipSystemScan201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createShipWaypointScan
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createShipWaypointScanWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateShipWaypointScan201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateShipWaypointScan201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateShipWaypointScan201Response", ""
            ) as CreateShipWaypointScan201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateShipWaypointScan201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateShipWaypointScan201Response", ""
            ) as CreateShipWaypointScan201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSurvey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSurveyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateSurvey201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateSurvey201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateSurvey201Response", ""
            ) as CreateSurvey201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateSurvey201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateSurvey201Response", ""
            ) as CreateSurvey201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dockShip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dockShipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DockShip200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DockShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DockShip200Response", ""
            ) as DockShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DockShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DockShip200Response", ""
            ) as DockShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to extractResources
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async extractResourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ExtractResources201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ExtractResources201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExtractResources201Response", ""
            ) as ExtractResources201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExtractResources201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExtractResources201Response", ""
            ) as ExtractResources201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to extractResourcesWithSurvey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async extractResourcesWithSurveyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ExtractResources201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ExtractResources201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExtractResources201Response", ""
            ) as ExtractResources201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExtractResources201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExtractResources201Response", ""
            ) as ExtractResources201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMounts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMountsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMounts200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMounts200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMounts200Response", ""
            ) as GetMounts200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetMounts200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMounts200Response", ""
            ) as GetMounts200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMyShip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMyShipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMyShip200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMyShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMyShip200Response", ""
            ) as GetMyShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetMyShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMyShip200Response", ""
            ) as GetMyShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMyShipCargo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMyShipCargoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMyShipCargo200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMyShipCargo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMyShipCargo200Response", ""
            ) as GetMyShipCargo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetMyShipCargo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMyShipCargo200Response", ""
            ) as GetMyShipCargo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMyShips
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMyShipsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetMyShips200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetMyShips200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMyShips200Response", ""
            ) as GetMyShips200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetMyShips200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetMyShips200Response", ""
            ) as GetMyShips200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRepairShip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRepairShipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetRepairShip200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetRepairShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetRepairShip200Response", ""
            ) as GetRepairShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetRepairShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetRepairShip200Response", ""
            ) as GetRepairShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getScrapShip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getScrapShipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetScrapShip200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetScrapShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetScrapShip200Response", ""
            ) as GetScrapShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetScrapShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetScrapShip200Response", ""
            ) as GetScrapShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getShipCooldown
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getShipCooldownWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void | GetShipCooldown200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetShipCooldown200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetShipCooldown200Response", ""
            ) as GetShipCooldown200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void | GetShipCooldown200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void | GetShipCooldown200Response", ""
            ) as void | GetShipCooldown200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getShipNav
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getShipNavWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetShipNav200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetShipNav200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetShipNav200Response", ""
            ) as GetShipNav200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetShipNav200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetShipNav200Response", ""
            ) as GetShipNav200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to installMount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async installMountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InstallMount201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: InstallMount201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InstallMount201Response", ""
            ) as InstallMount201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InstallMount201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InstallMount201Response", ""
            ) as InstallMount201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jettison
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jettisonWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Jettison200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Jettison200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Jettison200Response", ""
            ) as Jettison200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Jettison200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Jettison200Response", ""
            ) as Jettison200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jumpShip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jumpShipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JumpShip200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JumpShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JumpShip200Response", ""
            ) as JumpShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JumpShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JumpShip200Response", ""
            ) as JumpShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to navigateShip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async navigateShipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<NavigateShip200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NavigateShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NavigateShip200Response", ""
            ) as NavigateShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NavigateShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NavigateShip200Response", ""
            ) as NavigateShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to negotiateContract
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async negotiateContractWithHttpInfo(response: ResponseContext): Promise<HttpInfo<NegotiateContract200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: NegotiateContract200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NegotiateContract200Response", ""
            ) as NegotiateContract200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NegotiateContract200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NegotiateContract200Response", ""
            ) as NegotiateContract200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orbitShip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orbitShipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrbitShip200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrbitShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrbitShip200Response", ""
            ) as OrbitShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrbitShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrbitShip200Response", ""
            ) as OrbitShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchShipNav
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchShipNavWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetShipNav200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetShipNav200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetShipNav200Response", ""
            ) as GetShipNav200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetShipNav200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetShipNav200Response", ""
            ) as GetShipNav200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to purchaseCargo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async purchaseCargoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PurchaseCargo201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: PurchaseCargo201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PurchaseCargo201Response", ""
            ) as PurchaseCargo201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PurchaseCargo201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PurchaseCargo201Response", ""
            ) as PurchaseCargo201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to purchaseShip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async purchaseShipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PurchaseShip201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: PurchaseShip201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PurchaseShip201Response", ""
            ) as PurchaseShip201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PurchaseShip201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PurchaseShip201Response", ""
            ) as PurchaseShip201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to refuelShip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async refuelShipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RefuelShip200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RefuelShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RefuelShip200Response", ""
            ) as RefuelShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RefuelShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RefuelShip200Response", ""
            ) as RefuelShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeMount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeMountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RemoveMount201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: RemoveMount201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemoveMount201Response", ""
            ) as RemoveMount201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RemoveMount201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemoveMount201Response", ""
            ) as RemoveMount201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to repairShip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async repairShipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RepairShip200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RepairShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RepairShip200Response", ""
            ) as RepairShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RepairShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RepairShip200Response", ""
            ) as RepairShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to scrapShip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async scrapShipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ScrapShip200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ScrapShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ScrapShip200Response", ""
            ) as ScrapShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ScrapShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ScrapShip200Response", ""
            ) as ScrapShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sellCargo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sellCargoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SellCargo201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SellCargo201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SellCargo201Response", ""
            ) as SellCargo201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SellCargo201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SellCargo201Response", ""
            ) as SellCargo201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to shipRefine
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async shipRefineWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShipRefine201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ShipRefine201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShipRefine201Response", ""
            ) as ShipRefine201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ShipRefine201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShipRefine201Response", ""
            ) as ShipRefine201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to siphonResources
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async siphonResourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SiphonResources201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SiphonResources201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SiphonResources201Response", ""
            ) as SiphonResources201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SiphonResources201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SiphonResources201Response", ""
            ) as SiphonResources201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to transferCargo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async transferCargoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TransferCargo200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TransferCargo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransferCargo200Response", ""
            ) as TransferCargo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TransferCargo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TransferCargo200Response", ""
            ) as TransferCargo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to warpShip
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async warpShipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WarpShip200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WarpShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WarpShip200Response", ""
            ) as WarpShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WarpShip200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WarpShip200Response", ""
            ) as WarpShip200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

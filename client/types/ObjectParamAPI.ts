import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

import { AcceptContract200Response } from '../models/AcceptContract200Response.ts';
import { AcceptContract200ResponseData } from '../models/AcceptContract200ResponseData.ts';
import { ActivityLevel } from '../models/ActivityLevel.ts';
import { Agent } from '../models/Agent.ts';
import { Chart } from '../models/Chart.ts';
import { Construction } from '../models/Construction.ts';
import { ConstructionMaterial } from '../models/ConstructionMaterial.ts';
import { Contract } from '../models/Contract.ts';
import { ContractDeliverGood } from '../models/ContractDeliverGood.ts';
import { ContractPayment } from '../models/ContractPayment.ts';
import { ContractTerms } from '../models/ContractTerms.ts';
import { Cooldown } from '../models/Cooldown.ts';
import { CreateChart201Response } from '../models/CreateChart201Response.ts';
import { CreateChart201ResponseData } from '../models/CreateChart201ResponseData.ts';
import { CreateShipShipScan201Response } from '../models/CreateShipShipScan201Response.ts';
import { CreateShipShipScan201ResponseData } from '../models/CreateShipShipScan201ResponseData.ts';
import { CreateShipSystemScan201Response } from '../models/CreateShipSystemScan201Response.ts';
import { CreateShipSystemScan201ResponseData } from '../models/CreateShipSystemScan201ResponseData.ts';
import { CreateShipWaypointScan201Response } from '../models/CreateShipWaypointScan201Response.ts';
import { CreateShipWaypointScan201ResponseData } from '../models/CreateShipWaypointScan201ResponseData.ts';
import { CreateSurvey201Response } from '../models/CreateSurvey201Response.ts';
import { CreateSurvey201ResponseData } from '../models/CreateSurvey201ResponseData.ts';
import { DeliverContract200Response } from '../models/DeliverContract200Response.ts';
import { DeliverContract200ResponseData } from '../models/DeliverContract200ResponseData.ts';
import { DeliverContractRequest } from '../models/DeliverContractRequest.ts';
import { DockShip200Response } from '../models/DockShip200Response.ts';
import { ExtractResources201Response } from '../models/ExtractResources201Response.ts';
import { ExtractResources201ResponseData } from '../models/ExtractResources201ResponseData.ts';
import { ExtractResources201ResponseDataEventsInner } from '../models/ExtractResources201ResponseDataEventsInner.ts';
import { ExtractResourcesRequest } from '../models/ExtractResourcesRequest.ts';
import { Extraction } from '../models/Extraction.ts';
import { ExtractionYield } from '../models/ExtractionYield.ts';
import { Faction } from '../models/Faction.ts';
import { FactionSymbol } from '../models/FactionSymbol.ts';
import { FactionTrait } from '../models/FactionTrait.ts';
import { FactionTraitSymbol } from '../models/FactionTraitSymbol.ts';
import { FulfillContract200Response } from '../models/FulfillContract200Response.ts';
import { GetAgents200Response } from '../models/GetAgents200Response.ts';
import { GetConstruction200Response } from '../models/GetConstruction200Response.ts';
import { GetContract200Response } from '../models/GetContract200Response.ts';
import { GetContracts200Response } from '../models/GetContracts200Response.ts';
import { GetFaction200Response } from '../models/GetFaction200Response.ts';
import { GetFactions200Response } from '../models/GetFactions200Response.ts';
import { GetJumpGate200Response } from '../models/GetJumpGate200Response.ts';
import { GetMarket200Response } from '../models/GetMarket200Response.ts';
import { GetMounts200Response } from '../models/GetMounts200Response.ts';
import { GetMyAgent200Response } from '../models/GetMyAgent200Response.ts';
import { GetMyShip200Response } from '../models/GetMyShip200Response.ts';
import { GetMyShipCargo200Response } from '../models/GetMyShipCargo200Response.ts';
import { GetMyShips200Response } from '../models/GetMyShips200Response.ts';
import { GetRepairShip200Response } from '../models/GetRepairShip200Response.ts';
import { GetRepairShip200ResponseData } from '../models/GetRepairShip200ResponseData.ts';
import { GetScrapShip200Response } from '../models/GetScrapShip200Response.ts';
import { GetScrapShip200ResponseData } from '../models/GetScrapShip200ResponseData.ts';
import { GetShipCooldown200Response } from '../models/GetShipCooldown200Response.ts';
import { GetShipNav200Response } from '../models/GetShipNav200Response.ts';
import { GetShipyard200Response } from '../models/GetShipyard200Response.ts';
import { GetStatus200Response } from '../models/GetStatus200Response.ts';
import { GetStatus200ResponseAnnouncementsInner } from '../models/GetStatus200ResponseAnnouncementsInner.ts';
import { GetStatus200ResponseLeaderboards } from '../models/GetStatus200ResponseLeaderboards.ts';
import { GetStatus200ResponseLeaderboardsMostCreditsInner } from '../models/GetStatus200ResponseLeaderboardsMostCreditsInner.ts';
import { GetStatus200ResponseLeaderboardsMostSubmittedChartsInner } from '../models/GetStatus200ResponseLeaderboardsMostSubmittedChartsInner.ts';
import { GetStatus200ResponseLinksInner } from '../models/GetStatus200ResponseLinksInner.ts';
import { GetStatus200ResponseServerResets } from '../models/GetStatus200ResponseServerResets.ts';
import { GetStatus200ResponseStats } from '../models/GetStatus200ResponseStats.ts';
import { GetSystem200Response } from '../models/GetSystem200Response.ts';
import { GetSystemWaypoints200Response } from '../models/GetSystemWaypoints200Response.ts';
import { GetSystemWaypointsTraitsParameter } from '../models/GetSystemWaypointsTraitsParameter.ts';
import { GetSystems200Response } from '../models/GetSystems200Response.ts';
import { GetWaypoint200Response } from '../models/GetWaypoint200Response.ts';
import { InstallMount201Response } from '../models/InstallMount201Response.ts';
import { InstallMount201ResponseData } from '../models/InstallMount201ResponseData.ts';
import { InstallMountRequest } from '../models/InstallMountRequest.ts';
import { Jettison200Response } from '../models/Jettison200Response.ts';
import { Jettison200ResponseData } from '../models/Jettison200ResponseData.ts';
import { JettisonRequest } from '../models/JettisonRequest.ts';
import { JumpGate } from '../models/JumpGate.ts';
import { JumpShip200Response } from '../models/JumpShip200Response.ts';
import { JumpShip200ResponseData } from '../models/JumpShip200ResponseData.ts';
import { JumpShipRequest } from '../models/JumpShipRequest.ts';
import { Market } from '../models/Market.ts';
import { MarketTradeGood } from '../models/MarketTradeGood.ts';
import { MarketTransaction } from '../models/MarketTransaction.ts';
import { Meta } from '../models/Meta.ts';
import { NavigateShip200Response } from '../models/NavigateShip200Response.ts';
import { NavigateShip200ResponseData } from '../models/NavigateShip200ResponseData.ts';
import { NavigateShipRequest } from '../models/NavigateShipRequest.ts';
import { NegotiateContract200Response } from '../models/NegotiateContract200Response.ts';
import { NegotiateContract200ResponseData } from '../models/NegotiateContract200ResponseData.ts';
import { OrbitShip200Response } from '../models/OrbitShip200Response.ts';
import { OrbitShip200ResponseData } from '../models/OrbitShip200ResponseData.ts';
import { PatchShipNavRequest } from '../models/PatchShipNavRequest.ts';
import { PurchaseCargo201Response } from '../models/PurchaseCargo201Response.ts';
import { PurchaseCargoRequest } from '../models/PurchaseCargoRequest.ts';
import { PurchaseShip201Response } from '../models/PurchaseShip201Response.ts';
import { PurchaseShip201ResponseData } from '../models/PurchaseShip201ResponseData.ts';
import { PurchaseShipRequest } from '../models/PurchaseShipRequest.ts';
import { RefuelShip200Response } from '../models/RefuelShip200Response.ts';
import { RefuelShip200ResponseData } from '../models/RefuelShip200ResponseData.ts';
import { RefuelShipRequest } from '../models/RefuelShipRequest.ts';
import { Register201Response } from '../models/Register201Response.ts';
import { Register201ResponseData } from '../models/Register201ResponseData.ts';
import { RegisterRequest } from '../models/RegisterRequest.ts';
import { RemoveMount201Response } from '../models/RemoveMount201Response.ts';
import { RemoveMount201ResponseData } from '../models/RemoveMount201ResponseData.ts';
import { RemoveMountRequest } from '../models/RemoveMountRequest.ts';
import { RepairShip200Response } from '../models/RepairShip200Response.ts';
import { RepairShip200ResponseData } from '../models/RepairShip200ResponseData.ts';
import { RepairTransaction } from '../models/RepairTransaction.ts';
import { ScannedShip } from '../models/ScannedShip.ts';
import { ScannedShipEngine } from '../models/ScannedShipEngine.ts';
import { ScannedShipFrame } from '../models/ScannedShipFrame.ts';
import { ScannedShipMountsInner } from '../models/ScannedShipMountsInner.ts';
import { ScannedShipReactor } from '../models/ScannedShipReactor.ts';
import { ScannedSystem } from '../models/ScannedSystem.ts';
import { ScannedWaypoint } from '../models/ScannedWaypoint.ts';
import { ScrapShip200Response } from '../models/ScrapShip200Response.ts';
import { ScrapShip200ResponseData } from '../models/ScrapShip200ResponseData.ts';
import { ScrapTransaction } from '../models/ScrapTransaction.ts';
import { SellCargo201Response } from '../models/SellCargo201Response.ts';
import { SellCargo201ResponseData } from '../models/SellCargo201ResponseData.ts';
import { SellCargoRequest } from '../models/SellCargoRequest.ts';
import { Ship } from '../models/Ship.ts';
import { ShipCargo } from '../models/ShipCargo.ts';
import { ShipCargoItem } from '../models/ShipCargoItem.ts';
import { ShipConditionEvent } from '../models/ShipConditionEvent.ts';
import { ShipCrew } from '../models/ShipCrew.ts';
import { ShipEngine } from '../models/ShipEngine.ts';
import { ShipFrame } from '../models/ShipFrame.ts';
import { ShipFuel } from '../models/ShipFuel.ts';
import { ShipFuelConsumed } from '../models/ShipFuelConsumed.ts';
import { ShipModificationTransaction } from '../models/ShipModificationTransaction.ts';
import { ShipModule } from '../models/ShipModule.ts';
import { ShipMount } from '../models/ShipMount.ts';
import { ShipNav } from '../models/ShipNav.ts';
import { ShipNavFlightMode } from '../models/ShipNavFlightMode.ts';
import { ShipNavRoute } from '../models/ShipNavRoute.ts';
import { ShipNavRouteWaypoint } from '../models/ShipNavRouteWaypoint.ts';
import { ShipNavStatus } from '../models/ShipNavStatus.ts';
import { ShipReactor } from '../models/ShipReactor.ts';
import { ShipRefine201Response } from '../models/ShipRefine201Response.ts';
import { ShipRefine201ResponseData } from '../models/ShipRefine201ResponseData.ts';
import { ShipRefine201ResponseDataProducedInner } from '../models/ShipRefine201ResponseDataProducedInner.ts';
import { ShipRefineRequest } from '../models/ShipRefineRequest.ts';
import { ShipRegistration } from '../models/ShipRegistration.ts';
import { ShipRequirements } from '../models/ShipRequirements.ts';
import { ShipRole } from '../models/ShipRole.ts';
import { ShipType } from '../models/ShipType.ts';
import { Shipyard } from '../models/Shipyard.ts';
import { ShipyardShip } from '../models/ShipyardShip.ts';
import { ShipyardShipCrew } from '../models/ShipyardShipCrew.ts';
import { ShipyardShipTypesInner } from '../models/ShipyardShipTypesInner.ts';
import { ShipyardTransaction } from '../models/ShipyardTransaction.ts';
import { Siphon } from '../models/Siphon.ts';
import { SiphonResources201Response } from '../models/SiphonResources201Response.ts';
import { SiphonResources201ResponseData } from '../models/SiphonResources201ResponseData.ts';
import { SiphonYield } from '../models/SiphonYield.ts';
import { SupplyConstruction201Response } from '../models/SupplyConstruction201Response.ts';
import { SupplyConstruction201ResponseData } from '../models/SupplyConstruction201ResponseData.ts';
import { SupplyConstructionRequest } from '../models/SupplyConstructionRequest.ts';
import { SupplyLevel } from '../models/SupplyLevel.ts';
import { Survey } from '../models/Survey.ts';
import { SurveyDeposit } from '../models/SurveyDeposit.ts';
import { System } from '../models/System.ts';
import { SystemFaction } from '../models/SystemFaction.ts';
import { SystemType } from '../models/SystemType.ts';
import { SystemWaypoint } from '../models/SystemWaypoint.ts';
import { TradeGood } from '../models/TradeGood.ts';
import { TradeSymbol } from '../models/TradeSymbol.ts';
import { TransferCargo200Response } from '../models/TransferCargo200Response.ts';
import { TransferCargoRequest } from '../models/TransferCargoRequest.ts';
import { WarpShip200Response } from '../models/WarpShip200Response.ts';
import { WarpShip200ResponseData } from '../models/WarpShip200ResponseData.ts';
import { Waypoint } from '../models/Waypoint.ts';
import { WaypointFaction } from '../models/WaypointFaction.ts';
import { WaypointModifier } from '../models/WaypointModifier.ts';
import { WaypointModifierSymbol } from '../models/WaypointModifierSymbol.ts';
import { WaypointOrbital } from '../models/WaypointOrbital.ts';
import { WaypointTrait } from '../models/WaypointTrait.ts';
import { WaypointTraitSymbol } from '../models/WaypointTraitSymbol.ts';
import { WaypointType } from '../models/WaypointType.ts';

import { ObservableAgentsApi } from "./ObservableAPI.ts";
import { AgentsApiRequestFactory, AgentsApiResponseProcessor} from "../apis/AgentsApi.ts";

export interface AgentsApiGetAgentRequest {
    /**
     * The agent symbol
     * @type string
     * @memberof AgentsApigetAgent
     */
    agentSymbol: string
}

export interface AgentsApiGetAgentsRequest {
    /**
     * What entry offset to request
     * @type number
     * @memberof AgentsApigetAgents
     */
    page?: number
    /**
     * How many entries to return per page
     * @type number
     * @memberof AgentsApigetAgents
     */
    limit?: number
}

export interface AgentsApiGetMyAgentRequest {
}

export class ObjectAgentsApi {
    private api: ObservableAgentsApi

    public constructor(configuration: Configuration, requestFactory?: AgentsApiRequestFactory, responseProcessor?: AgentsApiResponseProcessor) {
        this.api = new ObservableAgentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch agent details.
     * Get Public Agent
     * @param param the request object
     */
    public getAgentWithHttpInfo(param: AgentsApiGetAgentRequest, options?: Configuration): Promise<HttpInfo<GetMyAgent200Response>> {
        return this.api.getAgentWithHttpInfo(param.agentSymbol,  options).toPromise();
    }

    /**
     * Fetch agent details.
     * Get Public Agent
     * @param param the request object
     */
    public getAgent(param: AgentsApiGetAgentRequest, options?: Configuration): Promise<GetMyAgent200Response> {
        return this.api.getAgent(param.agentSymbol,  options).toPromise();
    }

    /**
     * Fetch agents details.
     * List Agents
     * @param param the request object
     */
    public getAgentsWithHttpInfo(param: AgentsApiGetAgentsRequest = {}, options?: Configuration): Promise<HttpInfo<GetAgents200Response>> {
        return this.api.getAgentsWithHttpInfo(param.page, param.limit,  options).toPromise();
    }

    /**
     * Fetch agents details.
     * List Agents
     * @param param the request object
     */
    public getAgents(param: AgentsApiGetAgentsRequest = {}, options?: Configuration): Promise<GetAgents200Response> {
        return this.api.getAgents(param.page, param.limit,  options).toPromise();
    }

    /**
     * Fetch your agent\'s details.
     * Get Agent
     * @param param the request object
     */
    public getMyAgentWithHttpInfo(param: AgentsApiGetMyAgentRequest = {}, options?: Configuration): Promise<HttpInfo<GetMyAgent200Response>> {
        return this.api.getMyAgentWithHttpInfo( options).toPromise();
    }

    /**
     * Fetch your agent\'s details.
     * Get Agent
     * @param param the request object
     */
    public getMyAgent(param: AgentsApiGetMyAgentRequest = {}, options?: Configuration): Promise<GetMyAgent200Response> {
        return this.api.getMyAgent( options).toPromise();
    }

}

import { ObservableContractsApi } from "./ObservableAPI.ts";
import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi.ts";

export interface ContractsApiAcceptContractRequest {
    /**
     * The contract ID to accept.
     * @type string
     * @memberof ContractsApiacceptContract
     */
    contractId: string
}

export interface ContractsApiDeliverContractRequest {
    /**
     * The ID of the contract.
     * @type string
     * @memberof ContractsApideliverContract
     */
    contractId: string
    /**
     * 
     * @type DeliverContractRequest
     * @memberof ContractsApideliverContract
     */
    deliverContractRequest?: DeliverContractRequest
}

export interface ContractsApiFulfillContractRequest {
    /**
     * The ID of the contract to fulfill.
     * @type string
     * @memberof ContractsApifulfillContract
     */
    contractId: string
}

export interface ContractsApiGetContractRequest {
    /**
     * The contract ID
     * @type string
     * @memberof ContractsApigetContract
     */
    contractId: string
}

export interface ContractsApiGetContractsRequest {
    /**
     * What entry offset to request
     * @type number
     * @memberof ContractsApigetContracts
     */
    page?: number
    /**
     * How many entries to return per page
     * @type number
     * @memberof ContractsApigetContracts
     */
    limit?: number
}

export class ObjectContractsApi {
    private api: ObservableContractsApi

    public constructor(configuration: Configuration, requestFactory?: ContractsApiRequestFactory, responseProcessor?: ContractsApiResponseProcessor) {
        this.api = new ObservableContractsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Accept a contract by ID.   You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.
     * Accept Contract
     * @param param the request object
     */
    public acceptContractWithHttpInfo(param: ContractsApiAcceptContractRequest, options?: Configuration): Promise<HttpInfo<AcceptContract200Response>> {
        return this.api.acceptContractWithHttpInfo(param.contractId,  options).toPromise();
    }

    /**
     * Accept a contract by ID.   You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.
     * Accept Contract
     * @param param the request object
     */
    public acceptContract(param: ContractsApiAcceptContractRequest, options?: Configuration): Promise<AcceptContract200Response> {
        return this.api.acceptContract(param.contractId,  options).toPromise();
    }

    /**
     * Deliver cargo to a contract.  In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.  Cargo that was delivered will be removed from the ship\'s cargo.
     * Deliver Cargo to Contract
     * @param param the request object
     */
    public deliverContractWithHttpInfo(param: ContractsApiDeliverContractRequest, options?: Configuration): Promise<HttpInfo<DeliverContract200Response>> {
        return this.api.deliverContractWithHttpInfo(param.contractId, param.deliverContractRequest,  options).toPromise();
    }

    /**
     * Deliver cargo to a contract.  In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.  Cargo that was delivered will be removed from the ship\'s cargo.
     * Deliver Cargo to Contract
     * @param param the request object
     */
    public deliverContract(param: ContractsApiDeliverContractRequest, options?: Configuration): Promise<DeliverContract200Response> {
        return this.api.deliverContract(param.contractId, param.deliverContractRequest,  options).toPromise();
    }

    /**
     * Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.
     * Fulfill Contract
     * @param param the request object
     */
    public fulfillContractWithHttpInfo(param: ContractsApiFulfillContractRequest, options?: Configuration): Promise<HttpInfo<FulfillContract200Response>> {
        return this.api.fulfillContractWithHttpInfo(param.contractId,  options).toPromise();
    }

    /**
     * Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.
     * Fulfill Contract
     * @param param the request object
     */
    public fulfillContract(param: ContractsApiFulfillContractRequest, options?: Configuration): Promise<FulfillContract200Response> {
        return this.api.fulfillContract(param.contractId,  options).toPromise();
    }

    /**
     * Get the details of a contract by ID.
     * Get Contract
     * @param param the request object
     */
    public getContractWithHttpInfo(param: ContractsApiGetContractRequest, options?: Configuration): Promise<HttpInfo<GetContract200Response>> {
        return this.api.getContractWithHttpInfo(param.contractId,  options).toPromise();
    }

    /**
     * Get the details of a contract by ID.
     * Get Contract
     * @param param the request object
     */
    public getContract(param: ContractsApiGetContractRequest, options?: Configuration): Promise<GetContract200Response> {
        return this.api.getContract(param.contractId,  options).toPromise();
    }

    /**
     * Return a paginated list of all your contracts.
     * List Contracts
     * @param param the request object
     */
    public getContractsWithHttpInfo(param: ContractsApiGetContractsRequest = {}, options?: Configuration): Promise<HttpInfo<GetContracts200Response>> {
        return this.api.getContractsWithHttpInfo(param.page, param.limit,  options).toPromise();
    }

    /**
     * Return a paginated list of all your contracts.
     * List Contracts
     * @param param the request object
     */
    public getContracts(param: ContractsApiGetContractsRequest = {}, options?: Configuration): Promise<GetContracts200Response> {
        return this.api.getContracts(param.page, param.limit,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI.ts";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi.ts";

export interface DefaultApiGetStatusRequest {
}

export interface DefaultApiRegisterRequest {
    /**
     * 
     * @type RegisterRequest
     * @memberof DefaultApiregister
     */
    registerRequest?: RegisterRequest
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return the status of the game server. This also includes a few global elements, such as announcements, server reset dates and leaderboards.
     * Get Status
     * @param param the request object
     */
    public getStatusWithHttpInfo(param: DefaultApiGetStatusRequest = {}, options?: Configuration): Promise<HttpInfo<GetStatus200Response>> {
        return this.api.getStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Return the status of the game server. This also includes a few global elements, such as announcements, server reset dates and leaderboards.
     * Get Status
     * @param param the request object
     */
    public getStatus(param: DefaultApiGetStatusRequest = {}, options?: Configuration): Promise<GetStatus200Response> {
        return this.api.getStatus( options).toPromise();
    }

    /**
     * Creates a new agent and ties it to an account.  The agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.  This new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 150,000 credits.  > #### Keep your token safe and secure > > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.  If you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through basic API requests in just a few minutes.
     * Register New Agent
     * @param param the request object
     */
    public registerWithHttpInfo(param: DefaultApiRegisterRequest = {}, options?: Configuration): Promise<HttpInfo<Register201Response>> {
        return this.api.registerWithHttpInfo(param.registerRequest,  options).toPromise();
    }

    /**
     * Creates a new agent and ties it to an account.  The agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.  This new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 150,000 credits.  > #### Keep your token safe and secure > > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.  If you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through basic API requests in just a few minutes.
     * Register New Agent
     * @param param the request object
     */
    public register(param: DefaultApiRegisterRequest = {}, options?: Configuration): Promise<Register201Response> {
        return this.api.register(param.registerRequest,  options).toPromise();
    }

}

import { ObservableFactionsApi } from "./ObservableAPI.ts";
import { FactionsApiRequestFactory, FactionsApiResponseProcessor} from "../apis/FactionsApi.ts";

export interface FactionsApiGetFactionRequest {
    /**
     * The faction symbol
     * @type string
     * @memberof FactionsApigetFaction
     */
    factionSymbol: string
}

export interface FactionsApiGetFactionsRequest {
    /**
     * What entry offset to request
     * @type number
     * @memberof FactionsApigetFactions
     */
    page?: number
    /**
     * How many entries to return per page
     * @type number
     * @memberof FactionsApigetFactions
     */
    limit?: number
}

export class ObjectFactionsApi {
    private api: ObservableFactionsApi

    public constructor(configuration: Configuration, requestFactory?: FactionsApiRequestFactory, responseProcessor?: FactionsApiResponseProcessor) {
        this.api = new ObservableFactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * View the details of a faction.
     * Get Faction
     * @param param the request object
     */
    public getFactionWithHttpInfo(param: FactionsApiGetFactionRequest, options?: Configuration): Promise<HttpInfo<GetFaction200Response>> {
        return this.api.getFactionWithHttpInfo(param.factionSymbol,  options).toPromise();
    }

    /**
     * View the details of a faction.
     * Get Faction
     * @param param the request object
     */
    public getFaction(param: FactionsApiGetFactionRequest, options?: Configuration): Promise<GetFaction200Response> {
        return this.api.getFaction(param.factionSymbol,  options).toPromise();
    }

    /**
     * Return a paginated list of all the factions in the game.
     * List Factions
     * @param param the request object
     */
    public getFactionsWithHttpInfo(param: FactionsApiGetFactionsRequest = {}, options?: Configuration): Promise<HttpInfo<GetFactions200Response>> {
        return this.api.getFactionsWithHttpInfo(param.page, param.limit,  options).toPromise();
    }

    /**
     * Return a paginated list of all the factions in the game.
     * List Factions
     * @param param the request object
     */
    public getFactions(param: FactionsApiGetFactionsRequest = {}, options?: Configuration): Promise<GetFactions200Response> {
        return this.api.getFactions(param.page, param.limit,  options).toPromise();
    }

}

import { ObservableFleetApi } from "./ObservableAPI.ts";
import { FleetApiRequestFactory, FleetApiResponseProcessor} from "../apis/FleetApi.ts";

export interface FleetApiCreateChartRequest {
    /**
     * The symbol of the ship.
     * @type string
     * @memberof FleetApicreateChart
     */
    shipSymbol: string
}

export interface FleetApiCreateShipShipScanRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApicreateShipShipScan
     */
    shipSymbol: string
}

export interface FleetApiCreateShipSystemScanRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApicreateShipSystemScan
     */
    shipSymbol: string
}

export interface FleetApiCreateShipWaypointScanRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApicreateShipWaypointScan
     */
    shipSymbol: string
}

export interface FleetApiCreateSurveyRequest {
    /**
     * The symbol of the ship.
     * @type string
     * @memberof FleetApicreateSurvey
     */
    shipSymbol: string
}

export interface FleetApiDockShipRequest {
    /**
     * The symbol of the ship.
     * @type string
     * @memberof FleetApidockShip
     */
    shipSymbol: string
}

export interface FleetApiExtractResourcesRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApiextractResources
     */
    shipSymbol: string
    /**
     * 
     * @type ExtractResourcesRequest
     * @memberof FleetApiextractResources
     */
    extractResourcesRequest?: ExtractResourcesRequest
}

export interface FleetApiExtractResourcesWithSurveyRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApiextractResourcesWithSurvey
     */
    shipSymbol: string
    /**
     * 
     * @type Survey
     * @memberof FleetApiextractResourcesWithSurvey
     */
    survey?: Survey
}

export interface FleetApiGetMountsRequest {
    /**
     * The ship\&#39;s symbol.
     * @type string
     * @memberof FleetApigetMounts
     */
    shipSymbol: string
}

export interface FleetApiGetMyShipRequest {
    /**
     * The symbol of the ship.
     * @type string
     * @memberof FleetApigetMyShip
     */
    shipSymbol: string
}

export interface FleetApiGetMyShipCargoRequest {
    /**
     * The symbol of the ship.
     * @type string
     * @memberof FleetApigetMyShipCargo
     */
    shipSymbol: string
}

export interface FleetApiGetMyShipsRequest {
    /**
     * What entry offset to request
     * @type number
     * @memberof FleetApigetMyShips
     */
    page?: number
    /**
     * How many entries to return per page
     * @type number
     * @memberof FleetApigetMyShips
     */
    limit?: number
}

export interface FleetApiGetRepairShipRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApigetRepairShip
     */
    shipSymbol: string
}

export interface FleetApiGetScrapShipRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApigetScrapShip
     */
    shipSymbol: string
}

export interface FleetApiGetShipCooldownRequest {
    /**
     * The symbol of the ship.
     * @type string
     * @memberof FleetApigetShipCooldown
     */
    shipSymbol: string
}

export interface FleetApiGetShipNavRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApigetShipNav
     */
    shipSymbol: string
}

export interface FleetApiInstallMountRequest {
    /**
     * The ship\&#39;s symbol.
     * @type string
     * @memberof FleetApiinstallMount
     */
    shipSymbol: string
    /**
     * 
     * @type InstallMountRequest
     * @memberof FleetApiinstallMount
     */
    installMountRequest?: InstallMountRequest
}

export interface FleetApiJettisonRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApijettison
     */
    shipSymbol: string
    /**
     * 
     * @type JettisonRequest
     * @memberof FleetApijettison
     */
    jettisonRequest?: JettisonRequest
}

export interface FleetApiJumpShipRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApijumpShip
     */
    shipSymbol: string
    /**
     * 
     * @type JumpShipRequest
     * @memberof FleetApijumpShip
     */
    jumpShipRequest?: JumpShipRequest
}

export interface FleetApiNavigateShipRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApinavigateShip
     */
    shipSymbol: string
    /**
     * 
     * @type NavigateShipRequest
     * @memberof FleetApinavigateShip
     */
    navigateShipRequest?: NavigateShipRequest
}

export interface FleetApiNegotiateContractRequest {
    /**
     * The ship\&#39;s symbol.
     * @type string
     * @memberof FleetApinegotiateContract
     */
    shipSymbol: string
}

export interface FleetApiOrbitShipRequest {
    /**
     * The symbol of the ship.
     * @type string
     * @memberof FleetApiorbitShip
     */
    shipSymbol: string
}

export interface FleetApiPatchShipNavRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApipatchShipNav
     */
    shipSymbol: string
    /**
     * 
     * @type PatchShipNavRequest
     * @memberof FleetApipatchShipNav
     */
    patchShipNavRequest?: PatchShipNavRequest
}

export interface FleetApiPurchaseCargoRequest {
    /**
     * The ship\&#39;s symbol.
     * @type string
     * @memberof FleetApipurchaseCargo
     */
    shipSymbol: string
    /**
     * 
     * @type PurchaseCargoRequest
     * @memberof FleetApipurchaseCargo
     */
    purchaseCargoRequest?: PurchaseCargoRequest
}

export interface FleetApiPurchaseShipRequest {
    /**
     * 
     * @type PurchaseShipRequest
     * @memberof FleetApipurchaseShip
     */
    purchaseShipRequest?: PurchaseShipRequest
}

export interface FleetApiRefuelShipRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApirefuelShip
     */
    shipSymbol: string
    /**
     * 
     * @type RefuelShipRequest
     * @memberof FleetApirefuelShip
     */
    refuelShipRequest?: RefuelShipRequest
}

export interface FleetApiRemoveMountRequest {
    /**
     * The ship\&#39;s symbol.
     * @type string
     * @memberof FleetApiremoveMount
     */
    shipSymbol: string
    /**
     * 
     * @type RemoveMountRequest
     * @memberof FleetApiremoveMount
     */
    removeMountRequest?: RemoveMountRequest
}

export interface FleetApiRepairShipRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApirepairShip
     */
    shipSymbol: string
}

export interface FleetApiScrapShipRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApiscrapShip
     */
    shipSymbol: string
}

export interface FleetApiSellCargoRequest {
    /**
     * Symbol of a ship.
     * @type string
     * @memberof FleetApisellCargo
     */
    shipSymbol: string
    /**
     * 
     * @type SellCargoRequest
     * @memberof FleetApisellCargo
     */
    sellCargoRequest?: SellCargoRequest
}

export interface FleetApiShipRefineRequest {
    /**
     * The symbol of the ship.
     * @type string
     * @memberof FleetApishipRefine
     */
    shipSymbol: string
    /**
     * 
     * @type ShipRefineRequest
     * @memberof FleetApishipRefine
     */
    shipRefineRequest?: ShipRefineRequest
}

export interface FleetApiSiphonResourcesRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApisiphonResources
     */
    shipSymbol: string
}

export interface FleetApiTransferCargoRequest {
    /**
     * The transferring ship\&#39;s symbol.
     * @type string
     * @memberof FleetApitransferCargo
     */
    shipSymbol: string
    /**
     * 
     * @type TransferCargoRequest
     * @memberof FleetApitransferCargo
     */
    transferCargoRequest?: TransferCargoRequest
}

export interface FleetApiWarpShipRequest {
    /**
     * The ship symbol.
     * @type string
     * @memberof FleetApiwarpShip
     */
    shipSymbol: string
    /**
     * 
     * @type NavigateShipRequest
     * @memberof FleetApiwarpShip
     */
    navigateShipRequest?: NavigateShipRequest
}

export class ObjectFleetApi {
    private api: ObservableFleetApi

    public constructor(configuration: Configuration, requestFactory?: FleetApiRequestFactory, responseProcessor?: FleetApiResponseProcessor) {
        this.api = new ObservableFleetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Command a ship to chart the waypoint at its current location.  Most waypoints in the universe are uncharted by default. These waypoints have their traits hidden until they have been charted by a ship.  Charting a waypoint will record your agent as the one who created the chart, and all other agents would also be able to see the waypoint\'s traits.
     * Create Chart
     * @param param the request object
     */
    public createChartWithHttpInfo(param: FleetApiCreateChartRequest, options?: Configuration): Promise<HttpInfo<CreateChart201Response>> {
        return this.api.createChartWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Command a ship to chart the waypoint at its current location.  Most waypoints in the universe are uncharted by default. These waypoints have their traits hidden until they have been charted by a ship.  Charting a waypoint will record your agent as the one who created the chart, and all other agents would also be able to see the waypoint\'s traits.
     * Create Chart
     * @param param the request object
     */
    public createChart(param: FleetApiCreateChartRequest, options?: Configuration): Promise<CreateChart201Response> {
        return this.api.createChart(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scan for nearby ships, retrieving information for all ships in range.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Ships
     * @param param the request object
     */
    public createShipShipScanWithHttpInfo(param: FleetApiCreateShipShipScanRequest, options?: Configuration): Promise<HttpInfo<CreateShipShipScan201Response>> {
        return this.api.createShipShipScanWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scan for nearby ships, retrieving information for all ships in range.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Ships
     * @param param the request object
     */
    public createShipShipScan(param: FleetApiCreateShipShipScanRequest, options?: Configuration): Promise<CreateShipShipScan201Response> {
        return this.api.createShipShipScan(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scan for nearby systems, retrieving information on the systems\' distance from the ship and their waypoints. Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Systems
     * @param param the request object
     */
    public createShipSystemScanWithHttpInfo(param: FleetApiCreateShipSystemScanRequest, options?: Configuration): Promise<HttpInfo<CreateShipSystemScan201Response>> {
        return this.api.createShipSystemScanWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scan for nearby systems, retrieving information on the systems\' distance from the ship and their waypoints. Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Systems
     * @param param the request object
     */
    public createShipSystemScan(param: FleetApiCreateShipSystemScanRequest, options?: Configuration): Promise<CreateShipSystemScan201Response> {
        return this.api.createShipSystemScan(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scan for nearby waypoints, retrieving detailed information on each waypoint in range. Scanning uncharted waypoints will allow you to ignore their uncharted state and will list the waypoints\' traits.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Waypoints
     * @param param the request object
     */
    public createShipWaypointScanWithHttpInfo(param: FleetApiCreateShipWaypointScanRequest, options?: Configuration): Promise<HttpInfo<CreateShipWaypointScan201Response>> {
        return this.api.createShipWaypointScanWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scan for nearby waypoints, retrieving detailed information on each waypoint in range. Scanning uncharted waypoints will allow you to ignore their uncharted state and will list the waypoints\' traits.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Waypoints
     * @param param the request object
     */
    public createShipWaypointScan(param: FleetApiCreateShipWaypointScanRequest, options?: Configuration): Promise<CreateShipWaypointScan201Response> {
        return this.api.createShipWaypointScan(param.shipSymbol,  options).toPromise();
    }

    /**
     * Create surveys on a waypoint that can be extracted such as asteroid fields. A survey focuses on specific types of deposits from the extracted location. When ships extract using this survey, they are guaranteed to procure a high amount of one of the goods in the survey.  In order to use a survey, send the entire survey details in the body of the extract request.  Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown after surveying in which it is unable to perform certain actions. Surveys will eventually expire after a period of time or will be exhausted after being extracted several times based on the survey\'s size. Multiple ships can use the same survey for extraction.  A ship must have the `Surveyor` mount installed in order to use this function.
     * Create Survey
     * @param param the request object
     */
    public createSurveyWithHttpInfo(param: FleetApiCreateSurveyRequest, options?: Configuration): Promise<HttpInfo<CreateSurvey201Response>> {
        return this.api.createSurveyWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Create surveys on a waypoint that can be extracted such as asteroid fields. A survey focuses on specific types of deposits from the extracted location. When ships extract using this survey, they are guaranteed to procure a high amount of one of the goods in the survey.  In order to use a survey, send the entire survey details in the body of the extract request.  Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown after surveying in which it is unable to perform certain actions. Surveys will eventually expire after a period of time or will be exhausted after being extracted several times based on the survey\'s size. Multiple ships can use the same survey for extraction.  A ship must have the `Surveyor` mount installed in order to use this function.
     * Create Survey
     * @param param the request object
     */
    public createSurvey(param: FleetApiCreateSurveyRequest, options?: Configuration): Promise<CreateSurvey201Response> {
        return this.api.createSurvey(param.shipSymbol,  options).toPromise();
    }

    /**
     * Attempt to dock your ship at its current location. Docking will only succeed if your ship is capable of docking at the time of the request.  Docked ships can access elements in their current location, such as the market or a shipyard, but cannot do actions that require the ship to be above surface such as navigating or extracting.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
     * Dock Ship
     * @param param the request object
     */
    public dockShipWithHttpInfo(param: FleetApiDockShipRequest, options?: Configuration): Promise<HttpInfo<DockShip200Response>> {
        return this.api.dockShipWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Attempt to dock your ship at its current location. Docking will only succeed if your ship is capable of docking at the time of the request.  Docked ships can access elements in their current location, such as the market or a shipyard, but cannot do actions that require the ship to be above surface such as navigating or extracting.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
     * Dock Ship
     * @param param the request object
     */
    public dockShip(param: FleetApiDockShipRequest, options?: Configuration): Promise<DockShip200Response> {
        return this.api.dockShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Extract resources from a waypoint that can be extracted, such as asteroid fields, into your ship. Send an optional survey as the payload to target specific yields.  The ship must be in orbit to be able to extract and must have mining equipments installed that can extract goods, such as the `Gas Siphon` mount for gas-based goods or `Mining Laser` mount for ore-based goods.  The survey property is now deprecated. See the `extract/survey` endpoint for more details.
     * Extract Resources
     * @param param the request object
     */
    public extractResourcesWithHttpInfo(param: FleetApiExtractResourcesRequest, options?: Configuration): Promise<HttpInfo<ExtractResources201Response>> {
        return this.api.extractResourcesWithHttpInfo(param.shipSymbol, param.extractResourcesRequest,  options).toPromise();
    }

    /**
     * Extract resources from a waypoint that can be extracted, such as asteroid fields, into your ship. Send an optional survey as the payload to target specific yields.  The ship must be in orbit to be able to extract and must have mining equipments installed that can extract goods, such as the `Gas Siphon` mount for gas-based goods or `Mining Laser` mount for ore-based goods.  The survey property is now deprecated. See the `extract/survey` endpoint for more details.
     * Extract Resources
     * @param param the request object
     */
    public extractResources(param: FleetApiExtractResourcesRequest, options?: Configuration): Promise<ExtractResources201Response> {
        return this.api.extractResources(param.shipSymbol, param.extractResourcesRequest,  options).toPromise();
    }

    /**
     * Use a survey when extracting resources from a waypoint. This endpoint requires a survey as the payload, which allows your ship to extract specific yields.  Send the full survey object as the payload which will be validated according to the signature. If the signature is invalid, or any properties of the survey are changed, the request will fail.
     * Extract Resources with Survey
     * @param param the request object
     */
    public extractResourcesWithSurveyWithHttpInfo(param: FleetApiExtractResourcesWithSurveyRequest, options?: Configuration): Promise<HttpInfo<ExtractResources201Response>> {
        return this.api.extractResourcesWithSurveyWithHttpInfo(param.shipSymbol, param.survey,  options).toPromise();
    }

    /**
     * Use a survey when extracting resources from a waypoint. This endpoint requires a survey as the payload, which allows your ship to extract specific yields.  Send the full survey object as the payload which will be validated according to the signature. If the signature is invalid, or any properties of the survey are changed, the request will fail.
     * Extract Resources with Survey
     * @param param the request object
     */
    public extractResourcesWithSurvey(param: FleetApiExtractResourcesWithSurveyRequest, options?: Configuration): Promise<ExtractResources201Response> {
        return this.api.extractResourcesWithSurvey(param.shipSymbol, param.survey,  options).toPromise();
    }

    /**
     * Get the mounts installed on a ship.
     * Get Mounts
     * @param param the request object
     */
    public getMountsWithHttpInfo(param: FleetApiGetMountsRequest, options?: Configuration): Promise<HttpInfo<GetMounts200Response>> {
        return this.api.getMountsWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Get the mounts installed on a ship.
     * Get Mounts
     * @param param the request object
     */
    public getMounts(param: FleetApiGetMountsRequest, options?: Configuration): Promise<GetMounts200Response> {
        return this.api.getMounts(param.shipSymbol,  options).toPromise();
    }

    /**
     * Retrieve the details of a ship under your agent\'s ownership.
     * Get Ship
     * @param param the request object
     */
    public getMyShipWithHttpInfo(param: FleetApiGetMyShipRequest, options?: Configuration): Promise<HttpInfo<GetMyShip200Response>> {
        return this.api.getMyShipWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Retrieve the details of a ship under your agent\'s ownership.
     * Get Ship
     * @param param the request object
     */
    public getMyShip(param: FleetApiGetMyShipRequest, options?: Configuration): Promise<GetMyShip200Response> {
        return this.api.getMyShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Retrieve the cargo of a ship under your agent\'s ownership.
     * Get Ship Cargo
     * @param param the request object
     */
    public getMyShipCargoWithHttpInfo(param: FleetApiGetMyShipCargoRequest, options?: Configuration): Promise<HttpInfo<GetMyShipCargo200Response>> {
        return this.api.getMyShipCargoWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Retrieve the cargo of a ship under your agent\'s ownership.
     * Get Ship Cargo
     * @param param the request object
     */
    public getMyShipCargo(param: FleetApiGetMyShipCargoRequest, options?: Configuration): Promise<GetMyShipCargo200Response> {
        return this.api.getMyShipCargo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Return a paginated list of all of ships under your agent\'s ownership.
     * List Ships
     * @param param the request object
     */
    public getMyShipsWithHttpInfo(param: FleetApiGetMyShipsRequest = {}, options?: Configuration): Promise<HttpInfo<GetMyShips200Response>> {
        return this.api.getMyShipsWithHttpInfo(param.page, param.limit,  options).toPromise();
    }

    /**
     * Return a paginated list of all of ships under your agent\'s ownership.
     * List Ships
     * @param param the request object
     */
    public getMyShips(param: FleetApiGetMyShipsRequest = {}, options?: Configuration): Promise<GetMyShips200Response> {
        return this.api.getMyShips(param.page, param.limit,  options).toPromise();
    }

    /**
     * Get the cost of repairing a ship.
     * Get Repair Ship
     * @param param the request object
     */
    public getRepairShipWithHttpInfo(param: FleetApiGetRepairShipRequest, options?: Configuration): Promise<HttpInfo<GetRepairShip200Response>> {
        return this.api.getRepairShipWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Get the cost of repairing a ship.
     * Get Repair Ship
     * @param param the request object
     */
    public getRepairShip(param: FleetApiGetRepairShipRequest, options?: Configuration): Promise<GetRepairShip200Response> {
        return this.api.getRepairShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Get the amount of value that will be returned when scrapping a ship.
     * Get Scrap Ship
     * @param param the request object
     */
    public getScrapShipWithHttpInfo(param: FleetApiGetScrapShipRequest, options?: Configuration): Promise<HttpInfo<GetScrapShip200Response>> {
        return this.api.getScrapShipWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Get the amount of value that will be returned when scrapping a ship.
     * Get Scrap Ship
     * @param param the request object
     */
    public getScrapShip(param: FleetApiGetScrapShipRequest, options?: Configuration): Promise<GetScrapShip200Response> {
        return this.api.getScrapShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Retrieve the details of your ship\'s reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.
     * Get Ship Cooldown
     * @param param the request object
     */
    public getShipCooldownWithHttpInfo(param: FleetApiGetShipCooldownRequest, options?: Configuration): Promise<HttpInfo<void | GetShipCooldown200Response>> {
        return this.api.getShipCooldownWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Retrieve the details of your ship\'s reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.
     * Get Ship Cooldown
     * @param param the request object
     */
    public getShipCooldown(param: FleetApiGetShipCooldownRequest, options?: Configuration): Promise<void | GetShipCooldown200Response> {
        return this.api.getShipCooldown(param.shipSymbol,  options).toPromise();
    }

    /**
     * Get the current nav status of a ship.
     * Get Ship Nav
     * @param param the request object
     */
    public getShipNavWithHttpInfo(param: FleetApiGetShipNavRequest, options?: Configuration): Promise<HttpInfo<GetShipNav200Response>> {
        return this.api.getShipNavWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Get the current nav status of a ship.
     * Get Ship Nav
     * @param param the request object
     */
    public getShipNav(param: FleetApiGetShipNavRequest, options?: Configuration): Promise<GetShipNav200Response> {
        return this.api.getShipNav(param.shipSymbol,  options).toPromise();
    }

    /**
     * Install a mount on a ship.  In order to install a mount, the ship must be docked and located in a waypoint that has a `Shipyard` trait. The ship also must have the mount to install in its cargo hold.  An installation fee will be deduced by the Shipyard for installing the mount on the ship. 
     * Install Mount
     * @param param the request object
     */
    public installMountWithHttpInfo(param: FleetApiInstallMountRequest, options?: Configuration): Promise<HttpInfo<InstallMount201Response>> {
        return this.api.installMountWithHttpInfo(param.shipSymbol, param.installMountRequest,  options).toPromise();
    }

    /**
     * Install a mount on a ship.  In order to install a mount, the ship must be docked and located in a waypoint that has a `Shipyard` trait. The ship also must have the mount to install in its cargo hold.  An installation fee will be deduced by the Shipyard for installing the mount on the ship. 
     * Install Mount
     * @param param the request object
     */
    public installMount(param: FleetApiInstallMountRequest, options?: Configuration): Promise<InstallMount201Response> {
        return this.api.installMount(param.shipSymbol, param.installMountRequest,  options).toPromise();
    }

    /**
     * Jettison cargo from your ship\'s cargo hold.
     * Jettison Cargo
     * @param param the request object
     */
    public jettisonWithHttpInfo(param: FleetApiJettisonRequest, options?: Configuration): Promise<HttpInfo<Jettison200Response>> {
        return this.api.jettisonWithHttpInfo(param.shipSymbol, param.jettisonRequest,  options).toPromise();
    }

    /**
     * Jettison cargo from your ship\'s cargo hold.
     * Jettison Cargo
     * @param param the request object
     */
    public jettison(param: FleetApiJettisonRequest, options?: Configuration): Promise<Jettison200Response> {
        return this.api.jettison(param.shipSymbol, param.jettisonRequest,  options).toPromise();
    }

    /**
     * Jump your ship instantly to a target connected waypoint. The ship must be in orbit to execute a jump.  A unit of antimatter is purchased and consumed from the market when jumping. The price of antimatter is determined by the market and is subject to change. A ship can only jump to connected waypoints
     * Jump Ship
     * @param param the request object
     */
    public jumpShipWithHttpInfo(param: FleetApiJumpShipRequest, options?: Configuration): Promise<HttpInfo<JumpShip200Response>> {
        return this.api.jumpShipWithHttpInfo(param.shipSymbol, param.jumpShipRequest,  options).toPromise();
    }

    /**
     * Jump your ship instantly to a target connected waypoint. The ship must be in orbit to execute a jump.  A unit of antimatter is purchased and consumed from the market when jumping. The price of antimatter is determined by the market and is subject to change. A ship can only jump to connected waypoints
     * Jump Ship
     * @param param the request object
     */
    public jumpShip(param: FleetApiJumpShipRequest, options?: Configuration): Promise<JumpShip200Response> {
        return this.api.jumpShip(param.shipSymbol, param.jumpShipRequest,  options).toPromise();
    }

    /**
     * Navigate to a target destination. The ship must be in orbit to use this function. The destination waypoint must be within the same system as the ship\'s current location. Navigating will consume the necessary fuel from the ship\'s manifest based on the distance to the target waypoint.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.  To travel between systems, see the ship\'s Warp or Jump actions.
     * Navigate Ship
     * @param param the request object
     */
    public navigateShipWithHttpInfo(param: FleetApiNavigateShipRequest, options?: Configuration): Promise<HttpInfo<NavigateShip200Response>> {
        return this.api.navigateShipWithHttpInfo(param.shipSymbol, param.navigateShipRequest,  options).toPromise();
    }

    /**
     * Navigate to a target destination. The ship must be in orbit to use this function. The destination waypoint must be within the same system as the ship\'s current location. Navigating will consume the necessary fuel from the ship\'s manifest based on the distance to the target waypoint.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.  To travel between systems, see the ship\'s Warp or Jump actions.
     * Navigate Ship
     * @param param the request object
     */
    public navigateShip(param: FleetApiNavigateShipRequest, options?: Configuration): Promise<NavigateShip200Response> {
        return this.api.navigateShip(param.shipSymbol, param.navigateShipRequest,  options).toPromise();
    }

    /**
     * Negotiate a new contract with the HQ.  In order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.  Once a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept.   The ship must be present at any waypoint with a faction present to negotiate a contract with that faction.
     * Negotiate Contract
     * @param param the request object
     */
    public negotiateContractWithHttpInfo(param: FleetApiNegotiateContractRequest, options?: Configuration): Promise<HttpInfo<NegotiateContract200Response>> {
        return this.api.negotiateContractWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Negotiate a new contract with the HQ.  In order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.  Once a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept.   The ship must be present at any waypoint with a faction present to negotiate a contract with that faction.
     * Negotiate Contract
     * @param param the request object
     */
    public negotiateContract(param: FleetApiNegotiateContractRequest, options?: Configuration): Promise<NegotiateContract200Response> {
        return this.api.negotiateContract(param.shipSymbol,  options).toPromise();
    }

    /**
     * Attempt to move your ship into orbit at its current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  Orbiting ships are able to do actions that require the ship to be above surface such as navigating or extracting, but cannot access elements in their current waypoint, such as the market or a shipyard.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
     * Orbit Ship
     * @param param the request object
     */
    public orbitShipWithHttpInfo(param: FleetApiOrbitShipRequest, options?: Configuration): Promise<HttpInfo<OrbitShip200Response>> {
        return this.api.orbitShipWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Attempt to move your ship into orbit at its current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  Orbiting ships are able to do actions that require the ship to be above surface such as navigating or extracting, but cannot access elements in their current waypoint, such as the market or a shipyard.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
     * Orbit Ship
     * @param param the request object
     */
    public orbitShip(param: FleetApiOrbitShipRequest, options?: Configuration): Promise<OrbitShip200Response> {
        return this.api.orbitShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Update the nav configuration of a ship.  Currently only supports configuring the Flight Mode of the ship, which affects its speed and fuel consumption.
     * Patch Ship Nav
     * @param param the request object
     */
    public patchShipNavWithHttpInfo(param: FleetApiPatchShipNavRequest, options?: Configuration): Promise<HttpInfo<GetShipNav200Response>> {
        return this.api.patchShipNavWithHttpInfo(param.shipSymbol, param.patchShipNavRequest,  options).toPromise();
    }

    /**
     * Update the nav configuration of a ship.  Currently only supports configuring the Flight Mode of the ship, which affects its speed and fuel consumption.
     * Patch Ship Nav
     * @param param the request object
     */
    public patchShipNav(param: FleetApiPatchShipNavRequest, options?: Configuration): Promise<GetShipNav200Response> {
        return this.api.patchShipNav(param.shipSymbol, param.patchShipNavRequest,  options).toPromise();
    }

    /**
     * Purchase cargo from a market.  The ship must be docked in a waypoint that has `Marketplace` trait, and the market must be selling a good to be able to purchase it.  The maximum amount of units of a good that can be purchased in each transaction are denoted by the `tradeVolume` value of the good, which can be viewed by using the Get Market action.  Purchased goods are added to the ship\'s cargo hold.
     * Purchase Cargo
     * @param param the request object
     */
    public purchaseCargoWithHttpInfo(param: FleetApiPurchaseCargoRequest, options?: Configuration): Promise<HttpInfo<PurchaseCargo201Response>> {
        return this.api.purchaseCargoWithHttpInfo(param.shipSymbol, param.purchaseCargoRequest,  options).toPromise();
    }

    /**
     * Purchase cargo from a market.  The ship must be docked in a waypoint that has `Marketplace` trait, and the market must be selling a good to be able to purchase it.  The maximum amount of units of a good that can be purchased in each transaction are denoted by the `tradeVolume` value of the good, which can be viewed by using the Get Market action.  Purchased goods are added to the ship\'s cargo hold.
     * Purchase Cargo
     * @param param the request object
     */
    public purchaseCargo(param: FleetApiPurchaseCargoRequest, options?: Configuration): Promise<PurchaseCargo201Response> {
        return this.api.purchaseCargo(param.shipSymbol, param.purchaseCargoRequest,  options).toPromise();
    }

    /**
     * Purchase a ship from a Shipyard. In order to use this function, a ship under your agent\'s ownership must be in a waypoint that has the `Shipyard` trait, and the Shipyard must sell the type of the desired ship.  Shipyards typically offer ship types, which are predefined templates of ships that have dedicated roles. A template comes with a preset of an engine, a reactor, and a frame. It may also include a few modules and mounts.
     * Purchase Ship
     * @param param the request object
     */
    public purchaseShipWithHttpInfo(param: FleetApiPurchaseShipRequest = {}, options?: Configuration): Promise<HttpInfo<PurchaseShip201Response>> {
        return this.api.purchaseShipWithHttpInfo(param.purchaseShipRequest,  options).toPromise();
    }

    /**
     * Purchase a ship from a Shipyard. In order to use this function, a ship under your agent\'s ownership must be in a waypoint that has the `Shipyard` trait, and the Shipyard must sell the type of the desired ship.  Shipyards typically offer ship types, which are predefined templates of ships that have dedicated roles. A template comes with a preset of an engine, a reactor, and a frame. It may also include a few modules and mounts.
     * Purchase Ship
     * @param param the request object
     */
    public purchaseShip(param: FleetApiPurchaseShipRequest = {}, options?: Configuration): Promise<PurchaseShip201Response> {
        return this.api.purchaseShip(param.purchaseShipRequest,  options).toPromise();
    }

    /**
     * Refuel your ship by buying fuel from the local market.  Requires the ship to be docked in a waypoint that has the `Marketplace` trait, and the market must be selling fuel in order to refuel.  Each fuel bought from the market replenishes 100 units in your ship\'s fuel.  Ships will always be refuel to their frame\'s maximum fuel capacity when using this action.
     * Refuel Ship
     * @param param the request object
     */
    public refuelShipWithHttpInfo(param: FleetApiRefuelShipRequest, options?: Configuration): Promise<HttpInfo<RefuelShip200Response>> {
        return this.api.refuelShipWithHttpInfo(param.shipSymbol, param.refuelShipRequest,  options).toPromise();
    }

    /**
     * Refuel your ship by buying fuel from the local market.  Requires the ship to be docked in a waypoint that has the `Marketplace` trait, and the market must be selling fuel in order to refuel.  Each fuel bought from the market replenishes 100 units in your ship\'s fuel.  Ships will always be refuel to their frame\'s maximum fuel capacity when using this action.
     * Refuel Ship
     * @param param the request object
     */
    public refuelShip(param: FleetApiRefuelShipRequest, options?: Configuration): Promise<RefuelShip200Response> {
        return this.api.refuelShip(param.shipSymbol, param.refuelShipRequest,  options).toPromise();
    }

    /**
     * Remove a mount from a ship.  The ship must be docked in a waypoint that has the `Shipyard` trait, and must have the desired mount that it wish to remove installed.  A removal fee will be deduced from the agent by the Shipyard.
     * Remove Mount
     * @param param the request object
     */
    public removeMountWithHttpInfo(param: FleetApiRemoveMountRequest, options?: Configuration): Promise<HttpInfo<RemoveMount201Response>> {
        return this.api.removeMountWithHttpInfo(param.shipSymbol, param.removeMountRequest,  options).toPromise();
    }

    /**
     * Remove a mount from a ship.  The ship must be docked in a waypoint that has the `Shipyard` trait, and must have the desired mount that it wish to remove installed.  A removal fee will be deduced from the agent by the Shipyard.
     * Remove Mount
     * @param param the request object
     */
    public removeMount(param: FleetApiRemoveMountRequest, options?: Configuration): Promise<RemoveMount201Response> {
        return this.api.removeMount(param.shipSymbol, param.removeMountRequest,  options).toPromise();
    }

    /**
     * Repair a ship, restoring the ship to maximum condition. The ship must be docked at a waypoint that has the `Shipyard` trait in order to use this function. To preview the cost of repairing the ship, use the Get action.
     * Repair Ship
     * @param param the request object
     */
    public repairShipWithHttpInfo(param: FleetApiRepairShipRequest, options?: Configuration): Promise<HttpInfo<RepairShip200Response>> {
        return this.api.repairShipWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Repair a ship, restoring the ship to maximum condition. The ship must be docked at a waypoint that has the `Shipyard` trait in order to use this function. To preview the cost of repairing the ship, use the Get action.
     * Repair Ship
     * @param param the request object
     */
    public repairShip(param: FleetApiRepairShipRequest, options?: Configuration): Promise<RepairShip200Response> {
        return this.api.repairShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scrap a ship, removing it from the game and returning a portion of the ship\'s value to the agent. The ship must be docked in a waypoint that has the `Shipyard` trait in order to use this function. To preview the amount of value that will be returned, use the Get Ship action.
     * Scrap Ship
     * @param param the request object
     */
    public scrapShipWithHttpInfo(param: FleetApiScrapShipRequest, options?: Configuration): Promise<HttpInfo<ScrapShip200Response>> {
        return this.api.scrapShipWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scrap a ship, removing it from the game and returning a portion of the ship\'s value to the agent. The ship must be docked in a waypoint that has the `Shipyard` trait in order to use this function. To preview the amount of value that will be returned, use the Get Ship action.
     * Scrap Ship
     * @param param the request object
     */
    public scrapShip(param: FleetApiScrapShipRequest, options?: Configuration): Promise<ScrapShip200Response> {
        return this.api.scrapShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Sell cargo in your ship to a market that trades this cargo. The ship must be docked in a waypoint that has the `Marketplace` trait in order to use this function.
     * Sell Cargo
     * @param param the request object
     */
    public sellCargoWithHttpInfo(param: FleetApiSellCargoRequest, options?: Configuration): Promise<HttpInfo<SellCargo201Response>> {
        return this.api.sellCargoWithHttpInfo(param.shipSymbol, param.sellCargoRequest,  options).toPromise();
    }

    /**
     * Sell cargo in your ship to a market that trades this cargo. The ship must be docked in a waypoint that has the `Marketplace` trait in order to use this function.
     * Sell Cargo
     * @param param the request object
     */
    public sellCargo(param: FleetApiSellCargoRequest, options?: Configuration): Promise<SellCargo201Response> {
        return this.api.sellCargo(param.shipSymbol, param.sellCargoRequest,  options).toPromise();
    }

    /**
     * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request. In order to be able to refine, a ship must have goods that can be refined and have installed a `Refinery` module that can refine it.  When refining, 30 basic goods will be converted into 10 processed goods.
     * Ship Refine
     * @param param the request object
     */
    public shipRefineWithHttpInfo(param: FleetApiShipRefineRequest, options?: Configuration): Promise<HttpInfo<ShipRefine201Response>> {
        return this.api.shipRefineWithHttpInfo(param.shipSymbol, param.shipRefineRequest,  options).toPromise();
    }

    /**
     * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request. In order to be able to refine, a ship must have goods that can be refined and have installed a `Refinery` module that can refine it.  When refining, 30 basic goods will be converted into 10 processed goods.
     * Ship Refine
     * @param param the request object
     */
    public shipRefine(param: FleetApiShipRefineRequest, options?: Configuration): Promise<ShipRefine201Response> {
        return this.api.shipRefine(param.shipSymbol, param.shipRefineRequest,  options).toPromise();
    }

    /**
     * Siphon gases, such as hydrocarbon, from gas giants.  The ship must be in orbit to be able to siphon and must have siphon mounts and a gas processor installed.
     * Siphon Resources
     * @param param the request object
     */
    public siphonResourcesWithHttpInfo(param: FleetApiSiphonResourcesRequest, options?: Configuration): Promise<HttpInfo<SiphonResources201Response>> {
        return this.api.siphonResourcesWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Siphon gases, such as hydrocarbon, from gas giants.  The ship must be in orbit to be able to siphon and must have siphon mounts and a gas processor installed.
     * Siphon Resources
     * @param param the request object
     */
    public siphonResources(param: FleetApiSiphonResourcesRequest, options?: Configuration): Promise<SiphonResources201Response> {
        return this.api.siphonResources(param.shipSymbol,  options).toPromise();
    }

    /**
     * Transfer cargo between ships.  The receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.  The response body\'s cargo shows the cargo of the transferring ship after the transfer is complete.
     * Transfer Cargo
     * @param param the request object
     */
    public transferCargoWithHttpInfo(param: FleetApiTransferCargoRequest, options?: Configuration): Promise<HttpInfo<TransferCargo200Response>> {
        return this.api.transferCargoWithHttpInfo(param.shipSymbol, param.transferCargoRequest,  options).toPromise();
    }

    /**
     * Transfer cargo between ships.  The receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.  The response body\'s cargo shows the cargo of the transferring ship after the transfer is complete.
     * Transfer Cargo
     * @param param the request object
     */
    public transferCargo(param: FleetApiTransferCargoRequest, options?: Configuration): Promise<TransferCargo200Response> {
        return this.api.transferCargo(param.shipSymbol, param.transferCargoRequest,  options).toPromise();
    }

    /**
     * Warp your ship to a target destination in another system. The ship must be in orbit to use this function and must have the `Warp Drive` module installed. Warping will consume the necessary fuel from the ship\'s manifest.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at its destination.
     * Warp Ship
     * @param param the request object
     */
    public warpShipWithHttpInfo(param: FleetApiWarpShipRequest, options?: Configuration): Promise<HttpInfo<WarpShip200Response>> {
        return this.api.warpShipWithHttpInfo(param.shipSymbol, param.navigateShipRequest,  options).toPromise();
    }

    /**
     * Warp your ship to a target destination in another system. The ship must be in orbit to use this function and must have the `Warp Drive` module installed. Warping will consume the necessary fuel from the ship\'s manifest.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at its destination.
     * Warp Ship
     * @param param the request object
     */
    public warpShip(param: FleetApiWarpShipRequest, options?: Configuration): Promise<WarpShip200Response> {
        return this.api.warpShip(param.shipSymbol, param.navigateShipRequest,  options).toPromise();
    }

}

import { ObservableSystemsApi } from "./ObservableAPI.ts";
import { SystemsApiRequestFactory, SystemsApiResponseProcessor} from "../apis/SystemsApi.ts";

export interface SystemsApiGetConstructionRequest {
    /**
     * The system symbol
     * @type string
     * @memberof SystemsApigetConstruction
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * @type string
     * @memberof SystemsApigetConstruction
     */
    waypointSymbol: string
}

export interface SystemsApiGetJumpGateRequest {
    /**
     * The system symbol
     * @type string
     * @memberof SystemsApigetJumpGate
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * @type string
     * @memberof SystemsApigetJumpGate
     */
    waypointSymbol: string
}

export interface SystemsApiGetMarketRequest {
    /**
     * The system symbol
     * @type string
     * @memberof SystemsApigetMarket
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * @type string
     * @memberof SystemsApigetMarket
     */
    waypointSymbol: string
}

export interface SystemsApiGetShipyardRequest {
    /**
     * The system symbol
     * @type string
     * @memberof SystemsApigetShipyard
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * @type string
     * @memberof SystemsApigetShipyard
     */
    waypointSymbol: string
}

export interface SystemsApiGetSystemRequest {
    /**
     * The system symbol
     * @type string
     * @memberof SystemsApigetSystem
     */
    systemSymbol: string
}

export interface SystemsApiGetSystemWaypointsRequest {
    /**
     * The system symbol
     * @type string
     * @memberof SystemsApigetSystemWaypoints
     */
    systemSymbol: string
    /**
     * What entry offset to request
     * @type number
     * @memberof SystemsApigetSystemWaypoints
     */
    page?: number
    /**
     * How many entries to return per page
     * @type number
     * @memberof SystemsApigetSystemWaypoints
     */
    limit?: number
    /**
     * Filter waypoints by type.
     * @type WaypointType
     * @memberof SystemsApigetSystemWaypoints
     */
    type?: WaypointType
    /**
     * Filter waypoints by one or more traits.
     * @type GetSystemWaypointsTraitsParameter
     * @memberof SystemsApigetSystemWaypoints
     */
    traits?: GetSystemWaypointsTraitsParameter
}

export interface SystemsApiGetSystemsRequest {
    /**
     * What entry offset to request
     * @type number
     * @memberof SystemsApigetSystems
     */
    page?: number
    /**
     * How many entries to return per page
     * @type number
     * @memberof SystemsApigetSystems
     */
    limit?: number
}

export interface SystemsApiGetWaypointRequest {
    /**
     * The system symbol
     * @type string
     * @memberof SystemsApigetWaypoint
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * @type string
     * @memberof SystemsApigetWaypoint
     */
    waypointSymbol: string
}

export interface SystemsApiSupplyConstructionRequest {
    /**
     * The system symbol
     * @type string
     * @memberof SystemsApisupplyConstruction
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * @type string
     * @memberof SystemsApisupplyConstruction
     */
    waypointSymbol: string
    /**
     * 
     * @type SupplyConstructionRequest
     * @memberof SystemsApisupplyConstruction
     */
    supplyConstructionRequest?: SupplyConstructionRequest
}

export class ObjectSystemsApi {
    private api: ObservableSystemsApi

    public constructor(configuration: Configuration, requestFactory?: SystemsApiRequestFactory, responseProcessor?: SystemsApiResponseProcessor) {
        this.api = new ObservableSystemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
     * Get Construction Site
     * @param param the request object
     */
    public getConstructionWithHttpInfo(param: SystemsApiGetConstructionRequest, options?: Configuration): Promise<HttpInfo<GetConstruction200Response>> {
        return this.api.getConstructionWithHttpInfo(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
     * Get Construction Site
     * @param param the request object
     */
    public getConstruction(param: SystemsApiGetConstructionRequest, options?: Configuration): Promise<GetConstruction200Response> {
        return this.api.getConstruction(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  Waypoints connected to this jump gate can be 
     * Get Jump Gate
     * @param param the request object
     */
    public getJumpGateWithHttpInfo(param: SystemsApiGetJumpGateRequest, options?: Configuration): Promise<HttpInfo<GetJumpGate200Response>> {
        return this.api.getJumpGateWithHttpInfo(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  Waypoints connected to this jump gate can be 
     * Get Jump Gate
     * @param param the request object
     */
    public getJumpGate(param: SystemsApiGetJumpGateRequest, options?: Configuration): Promise<GetJumpGate200Response> {
        return this.api.getJumpGate(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
     * Get Market
     * @param param the request object
     */
    public getMarketWithHttpInfo(param: SystemsApiGetMarketRequest, options?: Configuration): Promise<HttpInfo<GetMarket200Response>> {
        return this.api.getMarketWithHttpInfo(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
     * Get Market
     * @param param the request object
     */
    public getMarket(param: SystemsApiGetMarketRequest, options?: Configuration): Promise<GetMarket200Response> {
        return this.api.getMarket(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     * @param param the request object
     */
    public getShipyardWithHttpInfo(param: SystemsApiGetShipyardRequest, options?: Configuration): Promise<HttpInfo<GetShipyard200Response>> {
        return this.api.getShipyardWithHttpInfo(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     * @param param the request object
     */
    public getShipyard(param: SystemsApiGetShipyardRequest, options?: Configuration): Promise<GetShipyard200Response> {
        return this.api.getShipyard(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Get the details of a system.
     * Get System
     * @param param the request object
     */
    public getSystemWithHttpInfo(param: SystemsApiGetSystemRequest, options?: Configuration): Promise<HttpInfo<GetSystem200Response>> {
        return this.api.getSystemWithHttpInfo(param.systemSymbol,  options).toPromise();
    }

    /**
     * Get the details of a system.
     * Get System
     * @param param the request object
     */
    public getSystem(param: SystemsApiGetSystemRequest, options?: Configuration): Promise<GetSystem200Response> {
        return this.api.getSystem(param.systemSymbol,  options).toPromise();
    }

    /**
     * Return a paginated list of all of the waypoints for a given system.  If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
     * List Waypoints in System
     * @param param the request object
     */
    public getSystemWaypointsWithHttpInfo(param: SystemsApiGetSystemWaypointsRequest, options?: Configuration): Promise<HttpInfo<GetSystemWaypoints200Response>> {
        return this.api.getSystemWaypointsWithHttpInfo(param.systemSymbol, param.page, param.limit, param.type, param.traits,  options).toPromise();
    }

    /**
     * Return a paginated list of all of the waypoints for a given system.  If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
     * List Waypoints in System
     * @param param the request object
     */
    public getSystemWaypoints(param: SystemsApiGetSystemWaypointsRequest, options?: Configuration): Promise<GetSystemWaypoints200Response> {
        return this.api.getSystemWaypoints(param.systemSymbol, param.page, param.limit, param.type, param.traits,  options).toPromise();
    }

    /**
     * Return a paginated list of all systems.
     * List Systems
     * @param param the request object
     */
    public getSystemsWithHttpInfo(param: SystemsApiGetSystemsRequest = {}, options?: Configuration): Promise<HttpInfo<GetSystems200Response>> {
        return this.api.getSystemsWithHttpInfo(param.page, param.limit,  options).toPromise();
    }

    /**
     * Return a paginated list of all systems.
     * List Systems
     * @param param the request object
     */
    public getSystems(param: SystemsApiGetSystemsRequest = {}, options?: Configuration): Promise<GetSystems200Response> {
        return this.api.getSystems(param.page, param.limit,  options).toPromise();
    }

    /**
     * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
     * Get Waypoint
     * @param param the request object
     */
    public getWaypointWithHttpInfo(param: SystemsApiGetWaypointRequest, options?: Configuration): Promise<HttpInfo<GetWaypoint200Response>> {
        return this.api.getWaypointWithHttpInfo(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
     * Get Waypoint
     * @param param the request object
     */
    public getWaypoint(param: SystemsApiGetWaypointRequest, options?: Configuration): Promise<GetWaypoint200Response> {
        return this.api.getWaypoint(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.  The good must be in your ship\'s cargo. The good will be removed from your ship\'s cargo and added to the construction site\'s materials.
     * Supply Construction Site
     * @param param the request object
     */
    public supplyConstructionWithHttpInfo(param: SystemsApiSupplyConstructionRequest, options?: Configuration): Promise<HttpInfo<SupplyConstruction201Response>> {
        return this.api.supplyConstructionWithHttpInfo(param.systemSymbol, param.waypointSymbol, param.supplyConstructionRequest,  options).toPromise();
    }

    /**
     * Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.  The good must be in your ship\'s cargo. The good will be removed from your ship\'s cargo and added to the construction site\'s materials.
     * Supply Construction Site
     * @param param the request object
     */
    public supplyConstruction(param: SystemsApiSupplyConstructionRequest, options?: Configuration): Promise<SupplyConstruction201Response> {
        return this.api.supplyConstruction(param.systemSymbol, param.waypointSymbol, param.supplyConstructionRequest,  options).toPromise();
    }

}

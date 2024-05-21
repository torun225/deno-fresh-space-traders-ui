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
import { ObservableAgentsApi } from './ObservableAPI.ts';

import { AgentsApiRequestFactory, AgentsApiResponseProcessor} from "../apis/AgentsApi.ts";
export class PromiseAgentsApi {
    private api: ObservableAgentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentsApiRequestFactory,
        responseProcessor?: AgentsApiResponseProcessor
    ) {
        this.api = new ObservableAgentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch agent details.
     * Get Public Agent
     * @param agentSymbol The agent symbol
     */
    public getAgentWithHttpInfo(agentSymbol: string, _options?: Configuration): Promise<HttpInfo<GetMyAgent200Response>> {
        const result = this.api.getAgentWithHttpInfo(agentSymbol, _options);
        return result.toPromise();
    }

    /**
     * Fetch agent details.
     * Get Public Agent
     * @param agentSymbol The agent symbol
     */
    public getAgent(agentSymbol: string, _options?: Configuration): Promise<GetMyAgent200Response> {
        const result = this.api.getAgent(agentSymbol, _options);
        return result.toPromise();
    }

    /**
     * Fetch agents details.
     * List Agents
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getAgentsWithHttpInfo(page?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<GetAgents200Response>> {
        const result = this.api.getAgentsWithHttpInfo(page, limit, _options);
        return result.toPromise();
    }

    /**
     * Fetch agents details.
     * List Agents
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getAgents(page?: number, limit?: number, _options?: Configuration): Promise<GetAgents200Response> {
        const result = this.api.getAgents(page, limit, _options);
        return result.toPromise();
    }

    /**
     * Fetch your agent\'s details.
     * Get Agent
     */
    public getMyAgentWithHttpInfo(_options?: Configuration): Promise<HttpInfo<GetMyAgent200Response>> {
        const result = this.api.getMyAgentWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Fetch your agent\'s details.
     * Get Agent
     */
    public getMyAgent(_options?: Configuration): Promise<GetMyAgent200Response> {
        const result = this.api.getMyAgent(_options);
        return result.toPromise();
    }


}



import { ObservableContractsApi } from './ObservableAPI.ts';

import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi.ts";
export class PromiseContractsApi {
    private api: ObservableContractsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractsApiRequestFactory,
        responseProcessor?: ContractsApiResponseProcessor
    ) {
        this.api = new ObservableContractsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Accept a contract by ID.   You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.
     * Accept Contract
     * @param contractId The contract ID to accept.
     */
    public acceptContractWithHttpInfo(contractId: string, _options?: Configuration): Promise<HttpInfo<AcceptContract200Response>> {
        const result = this.api.acceptContractWithHttpInfo(contractId, _options);
        return result.toPromise();
    }

    /**
     * Accept a contract by ID.   You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.
     * Accept Contract
     * @param contractId The contract ID to accept.
     */
    public acceptContract(contractId: string, _options?: Configuration): Promise<AcceptContract200Response> {
        const result = this.api.acceptContract(contractId, _options);
        return result.toPromise();
    }

    /**
     * Deliver cargo to a contract.  In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.  Cargo that was delivered will be removed from the ship\'s cargo.
     * Deliver Cargo to Contract
     * @param contractId The ID of the contract.
     * @param deliverContractRequest 
     */
    public deliverContractWithHttpInfo(contractId: string, deliverContractRequest?: DeliverContractRequest, _options?: Configuration): Promise<HttpInfo<DeliverContract200Response>> {
        const result = this.api.deliverContractWithHttpInfo(contractId, deliverContractRequest, _options);
        return result.toPromise();
    }

    /**
     * Deliver cargo to a contract.  In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.  Cargo that was delivered will be removed from the ship\'s cargo.
     * Deliver Cargo to Contract
     * @param contractId The ID of the contract.
     * @param deliverContractRequest 
     */
    public deliverContract(contractId: string, deliverContractRequest?: DeliverContractRequest, _options?: Configuration): Promise<DeliverContract200Response> {
        const result = this.api.deliverContract(contractId, deliverContractRequest, _options);
        return result.toPromise();
    }

    /**
     * Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.
     * Fulfill Contract
     * @param contractId The ID of the contract to fulfill.
     */
    public fulfillContractWithHttpInfo(contractId: string, _options?: Configuration): Promise<HttpInfo<FulfillContract200Response>> {
        const result = this.api.fulfillContractWithHttpInfo(contractId, _options);
        return result.toPromise();
    }

    /**
     * Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.
     * Fulfill Contract
     * @param contractId The ID of the contract to fulfill.
     */
    public fulfillContract(contractId: string, _options?: Configuration): Promise<FulfillContract200Response> {
        const result = this.api.fulfillContract(contractId, _options);
        return result.toPromise();
    }

    /**
     * Get the details of a contract by ID.
     * Get Contract
     * @param contractId The contract ID
     */
    public getContractWithHttpInfo(contractId: string, _options?: Configuration): Promise<HttpInfo<GetContract200Response>> {
        const result = this.api.getContractWithHttpInfo(contractId, _options);
        return result.toPromise();
    }

    /**
     * Get the details of a contract by ID.
     * Get Contract
     * @param contractId The contract ID
     */
    public getContract(contractId: string, _options?: Configuration): Promise<GetContract200Response> {
        const result = this.api.getContract(contractId, _options);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all your contracts.
     * List Contracts
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getContractsWithHttpInfo(page?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<GetContracts200Response>> {
        const result = this.api.getContractsWithHttpInfo(page, limit, _options);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all your contracts.
     * List Contracts
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getContracts(page?: number, limit?: number, _options?: Configuration): Promise<GetContracts200Response> {
        const result = this.api.getContracts(page, limit, _options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI.ts';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi.ts";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return the status of the game server. This also includes a few global elements, such as announcements, server reset dates and leaderboards.
     * Get Status
     */
    public getStatusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<GetStatus200Response>> {
        const result = this.api.getStatusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Return the status of the game server. This also includes a few global elements, such as announcements, server reset dates and leaderboards.
     * Get Status
     */
    public getStatus(_options?: Configuration): Promise<GetStatus200Response> {
        const result = this.api.getStatus(_options);
        return result.toPromise();
    }

    /**
     * Creates a new agent and ties it to an account.  The agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.  This new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 150,000 credits.  > #### Keep your token safe and secure > > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.  If you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through basic API requests in just a few minutes.
     * Register New Agent
     * @param registerRequest 
     */
    public registerWithHttpInfo(registerRequest?: RegisterRequest, _options?: Configuration): Promise<HttpInfo<Register201Response>> {
        const result = this.api.registerWithHttpInfo(registerRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a new agent and ties it to an account.  The agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.  This new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 150,000 credits.  > #### Keep your token safe and secure > > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.  If you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through basic API requests in just a few minutes.
     * Register New Agent
     * @param registerRequest 
     */
    public register(registerRequest?: RegisterRequest, _options?: Configuration): Promise<Register201Response> {
        const result = this.api.register(registerRequest, _options);
        return result.toPromise();
    }


}



import { ObservableFactionsApi } from './ObservableAPI.ts';

import { FactionsApiRequestFactory, FactionsApiResponseProcessor} from "../apis/FactionsApi.ts";
export class PromiseFactionsApi {
    private api: ObservableFactionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FactionsApiRequestFactory,
        responseProcessor?: FactionsApiResponseProcessor
    ) {
        this.api = new ObservableFactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * View the details of a faction.
     * Get Faction
     * @param factionSymbol The faction symbol
     */
    public getFactionWithHttpInfo(factionSymbol: string, _options?: Configuration): Promise<HttpInfo<GetFaction200Response>> {
        const result = this.api.getFactionWithHttpInfo(factionSymbol, _options);
        return result.toPromise();
    }

    /**
     * View the details of a faction.
     * Get Faction
     * @param factionSymbol The faction symbol
     */
    public getFaction(factionSymbol: string, _options?: Configuration): Promise<GetFaction200Response> {
        const result = this.api.getFaction(factionSymbol, _options);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all the factions in the game.
     * List Factions
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getFactionsWithHttpInfo(page?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<GetFactions200Response>> {
        const result = this.api.getFactionsWithHttpInfo(page, limit, _options);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all the factions in the game.
     * List Factions
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getFactions(page?: number, limit?: number, _options?: Configuration): Promise<GetFactions200Response> {
        const result = this.api.getFactions(page, limit, _options);
        return result.toPromise();
    }


}



import { ObservableFleetApi } from './ObservableAPI.ts';

import { FleetApiRequestFactory, FleetApiResponseProcessor} from "../apis/FleetApi.ts";
export class PromiseFleetApi {
    private api: ObservableFleetApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FleetApiRequestFactory,
        responseProcessor?: FleetApiResponseProcessor
    ) {
        this.api = new ObservableFleetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Command a ship to chart the waypoint at its current location.  Most waypoints in the universe are uncharted by default. These waypoints have their traits hidden until they have been charted by a ship.  Charting a waypoint will record your agent as the one who created the chart, and all other agents would also be able to see the waypoint\'s traits.
     * Create Chart
     * @param shipSymbol The symbol of the ship.
     */
    public createChartWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<CreateChart201Response>> {
        const result = this.api.createChartWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Command a ship to chart the waypoint at its current location.  Most waypoints in the universe are uncharted by default. These waypoints have their traits hidden until they have been charted by a ship.  Charting a waypoint will record your agent as the one who created the chart, and all other agents would also be able to see the waypoint\'s traits.
     * Create Chart
     * @param shipSymbol The symbol of the ship.
     */
    public createChart(shipSymbol: string, _options?: Configuration): Promise<CreateChart201Response> {
        const result = this.api.createChart(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Scan for nearby ships, retrieving information for all ships in range.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Ships
     * @param shipSymbol The ship symbol.
     */
    public createShipShipScanWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<CreateShipShipScan201Response>> {
        const result = this.api.createShipShipScanWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Scan for nearby ships, retrieving information for all ships in range.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Ships
     * @param shipSymbol The ship symbol.
     */
    public createShipShipScan(shipSymbol: string, _options?: Configuration): Promise<CreateShipShipScan201Response> {
        const result = this.api.createShipShipScan(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Scan for nearby systems, retrieving information on the systems\' distance from the ship and their waypoints. Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Systems
     * @param shipSymbol The ship symbol.
     */
    public createShipSystemScanWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<CreateShipSystemScan201Response>> {
        const result = this.api.createShipSystemScanWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Scan for nearby systems, retrieving information on the systems\' distance from the ship and their waypoints. Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Systems
     * @param shipSymbol The ship symbol.
     */
    public createShipSystemScan(shipSymbol: string, _options?: Configuration): Promise<CreateShipSystemScan201Response> {
        const result = this.api.createShipSystemScan(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Scan for nearby waypoints, retrieving detailed information on each waypoint in range. Scanning uncharted waypoints will allow you to ignore their uncharted state and will list the waypoints\' traits.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Waypoints
     * @param shipSymbol The ship symbol.
     */
    public createShipWaypointScanWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<CreateShipWaypointScan201Response>> {
        const result = this.api.createShipWaypointScanWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Scan for nearby waypoints, retrieving detailed information on each waypoint in range. Scanning uncharted waypoints will allow you to ignore their uncharted state and will list the waypoints\' traits.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Waypoints
     * @param shipSymbol The ship symbol.
     */
    public createShipWaypointScan(shipSymbol: string, _options?: Configuration): Promise<CreateShipWaypointScan201Response> {
        const result = this.api.createShipWaypointScan(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Create surveys on a waypoint that can be extracted such as asteroid fields. A survey focuses on specific types of deposits from the extracted location. When ships extract using this survey, they are guaranteed to procure a high amount of one of the goods in the survey.  In order to use a survey, send the entire survey details in the body of the extract request.  Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown after surveying in which it is unable to perform certain actions. Surveys will eventually expire after a period of time or will be exhausted after being extracted several times based on the survey\'s size. Multiple ships can use the same survey for extraction.  A ship must have the `Surveyor` mount installed in order to use this function.
     * Create Survey
     * @param shipSymbol The symbol of the ship.
     */
    public createSurveyWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<CreateSurvey201Response>> {
        const result = this.api.createSurveyWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Create surveys on a waypoint that can be extracted such as asteroid fields. A survey focuses on specific types of deposits from the extracted location. When ships extract using this survey, they are guaranteed to procure a high amount of one of the goods in the survey.  In order to use a survey, send the entire survey details in the body of the extract request.  Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown after surveying in which it is unable to perform certain actions. Surveys will eventually expire after a period of time or will be exhausted after being extracted several times based on the survey\'s size. Multiple ships can use the same survey for extraction.  A ship must have the `Surveyor` mount installed in order to use this function.
     * Create Survey
     * @param shipSymbol The symbol of the ship.
     */
    public createSurvey(shipSymbol: string, _options?: Configuration): Promise<CreateSurvey201Response> {
        const result = this.api.createSurvey(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Attempt to dock your ship at its current location. Docking will only succeed if your ship is capable of docking at the time of the request.  Docked ships can access elements in their current location, such as the market or a shipyard, but cannot do actions that require the ship to be above surface such as navigating or extracting.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
     * Dock Ship
     * @param shipSymbol The symbol of the ship.
     */
    public dockShipWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<DockShip200Response>> {
        const result = this.api.dockShipWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Attempt to dock your ship at its current location. Docking will only succeed if your ship is capable of docking at the time of the request.  Docked ships can access elements in their current location, such as the market or a shipyard, but cannot do actions that require the ship to be above surface such as navigating or extracting.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
     * Dock Ship
     * @param shipSymbol The symbol of the ship.
     */
    public dockShip(shipSymbol: string, _options?: Configuration): Promise<DockShip200Response> {
        const result = this.api.dockShip(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Extract resources from a waypoint that can be extracted, such as asteroid fields, into your ship. Send an optional survey as the payload to target specific yields.  The ship must be in orbit to be able to extract and must have mining equipments installed that can extract goods, such as the `Gas Siphon` mount for gas-based goods or `Mining Laser` mount for ore-based goods.  The survey property is now deprecated. See the `extract/survey` endpoint for more details.
     * Extract Resources
     * @param shipSymbol The ship symbol.
     * @param extractResourcesRequest 
     */
    public extractResourcesWithHttpInfo(shipSymbol: string, extractResourcesRequest?: ExtractResourcesRequest, _options?: Configuration): Promise<HttpInfo<ExtractResources201Response>> {
        const result = this.api.extractResourcesWithHttpInfo(shipSymbol, extractResourcesRequest, _options);
        return result.toPromise();
    }

    /**
     * Extract resources from a waypoint that can be extracted, such as asteroid fields, into your ship. Send an optional survey as the payload to target specific yields.  The ship must be in orbit to be able to extract and must have mining equipments installed that can extract goods, such as the `Gas Siphon` mount for gas-based goods or `Mining Laser` mount for ore-based goods.  The survey property is now deprecated. See the `extract/survey` endpoint for more details.
     * Extract Resources
     * @param shipSymbol The ship symbol.
     * @param extractResourcesRequest 
     */
    public extractResources(shipSymbol: string, extractResourcesRequest?: ExtractResourcesRequest, _options?: Configuration): Promise<ExtractResources201Response> {
        const result = this.api.extractResources(shipSymbol, extractResourcesRequest, _options);
        return result.toPromise();
    }

    /**
     * Use a survey when extracting resources from a waypoint. This endpoint requires a survey as the payload, which allows your ship to extract specific yields.  Send the full survey object as the payload which will be validated according to the signature. If the signature is invalid, or any properties of the survey are changed, the request will fail.
     * Extract Resources with Survey
     * @param shipSymbol The ship symbol.
     * @param survey 
     */
    public extractResourcesWithSurveyWithHttpInfo(shipSymbol: string, survey?: Survey, _options?: Configuration): Promise<HttpInfo<ExtractResources201Response>> {
        const result = this.api.extractResourcesWithSurveyWithHttpInfo(shipSymbol, survey, _options);
        return result.toPromise();
    }

    /**
     * Use a survey when extracting resources from a waypoint. This endpoint requires a survey as the payload, which allows your ship to extract specific yields.  Send the full survey object as the payload which will be validated according to the signature. If the signature is invalid, or any properties of the survey are changed, the request will fail.
     * Extract Resources with Survey
     * @param shipSymbol The ship symbol.
     * @param survey 
     */
    public extractResourcesWithSurvey(shipSymbol: string, survey?: Survey, _options?: Configuration): Promise<ExtractResources201Response> {
        const result = this.api.extractResourcesWithSurvey(shipSymbol, survey, _options);
        return result.toPromise();
    }

    /**
     * Get the mounts installed on a ship.
     * Get Mounts
     * @param shipSymbol The ship\&#39;s symbol.
     */
    public getMountsWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<GetMounts200Response>> {
        const result = this.api.getMountsWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get the mounts installed on a ship.
     * Get Mounts
     * @param shipSymbol The ship\&#39;s symbol.
     */
    public getMounts(shipSymbol: string, _options?: Configuration): Promise<GetMounts200Response> {
        const result = this.api.getMounts(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a ship under your agent\'s ownership.
     * Get Ship
     * @param shipSymbol The symbol of the ship.
     */
    public getMyShipWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<GetMyShip200Response>> {
        const result = this.api.getMyShipWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a ship under your agent\'s ownership.
     * Get Ship
     * @param shipSymbol The symbol of the ship.
     */
    public getMyShip(shipSymbol: string, _options?: Configuration): Promise<GetMyShip200Response> {
        const result = this.api.getMyShip(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the cargo of a ship under your agent\'s ownership.
     * Get Ship Cargo
     * @param shipSymbol The symbol of the ship.
     */
    public getMyShipCargoWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<GetMyShipCargo200Response>> {
        const result = this.api.getMyShipCargoWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the cargo of a ship under your agent\'s ownership.
     * Get Ship Cargo
     * @param shipSymbol The symbol of the ship.
     */
    public getMyShipCargo(shipSymbol: string, _options?: Configuration): Promise<GetMyShipCargo200Response> {
        const result = this.api.getMyShipCargo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all of ships under your agent\'s ownership.
     * List Ships
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getMyShipsWithHttpInfo(page?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<GetMyShips200Response>> {
        const result = this.api.getMyShipsWithHttpInfo(page, limit, _options);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all of ships under your agent\'s ownership.
     * List Ships
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getMyShips(page?: number, limit?: number, _options?: Configuration): Promise<GetMyShips200Response> {
        const result = this.api.getMyShips(page, limit, _options);
        return result.toPromise();
    }

    /**
     * Get the cost of repairing a ship.
     * Get Repair Ship
     * @param shipSymbol The ship symbol.
     */
    public getRepairShipWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<GetRepairShip200Response>> {
        const result = this.api.getRepairShipWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get the cost of repairing a ship.
     * Get Repair Ship
     * @param shipSymbol The ship symbol.
     */
    public getRepairShip(shipSymbol: string, _options?: Configuration): Promise<GetRepairShip200Response> {
        const result = this.api.getRepairShip(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get the amount of value that will be returned when scrapping a ship.
     * Get Scrap Ship
     * @param shipSymbol The ship symbol.
     */
    public getScrapShipWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<GetScrapShip200Response>> {
        const result = this.api.getScrapShipWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get the amount of value that will be returned when scrapping a ship.
     * Get Scrap Ship
     * @param shipSymbol The ship symbol.
     */
    public getScrapShip(shipSymbol: string, _options?: Configuration): Promise<GetScrapShip200Response> {
        const result = this.api.getScrapShip(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of your ship\'s reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.
     * Get Ship Cooldown
     * @param shipSymbol The symbol of the ship.
     */
    public getShipCooldownWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<void | GetShipCooldown200Response>> {
        const result = this.api.getShipCooldownWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of your ship\'s reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.
     * Get Ship Cooldown
     * @param shipSymbol The symbol of the ship.
     */
    public getShipCooldown(shipSymbol: string, _options?: Configuration): Promise<void | GetShipCooldown200Response> {
        const result = this.api.getShipCooldown(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get the current nav status of a ship.
     * Get Ship Nav
     * @param shipSymbol The ship symbol.
     */
    public getShipNavWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<GetShipNav200Response>> {
        const result = this.api.getShipNavWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get the current nav status of a ship.
     * Get Ship Nav
     * @param shipSymbol The ship symbol.
     */
    public getShipNav(shipSymbol: string, _options?: Configuration): Promise<GetShipNav200Response> {
        const result = this.api.getShipNav(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Install a mount on a ship.  In order to install a mount, the ship must be docked and located in a waypoint that has a `Shipyard` trait. The ship also must have the mount to install in its cargo hold.  An installation fee will be deduced by the Shipyard for installing the mount on the ship. 
     * Install Mount
     * @param shipSymbol The ship\&#39;s symbol.
     * @param installMountRequest 
     */
    public installMountWithHttpInfo(shipSymbol: string, installMountRequest?: InstallMountRequest, _options?: Configuration): Promise<HttpInfo<InstallMount201Response>> {
        const result = this.api.installMountWithHttpInfo(shipSymbol, installMountRequest, _options);
        return result.toPromise();
    }

    /**
     * Install a mount on a ship.  In order to install a mount, the ship must be docked and located in a waypoint that has a `Shipyard` trait. The ship also must have the mount to install in its cargo hold.  An installation fee will be deduced by the Shipyard for installing the mount on the ship. 
     * Install Mount
     * @param shipSymbol The ship\&#39;s symbol.
     * @param installMountRequest 
     */
    public installMount(shipSymbol: string, installMountRequest?: InstallMountRequest, _options?: Configuration): Promise<InstallMount201Response> {
        const result = this.api.installMount(shipSymbol, installMountRequest, _options);
        return result.toPromise();
    }

    /**
     * Jettison cargo from your ship\'s cargo hold.
     * Jettison Cargo
     * @param shipSymbol The ship symbol.
     * @param jettisonRequest 
     */
    public jettisonWithHttpInfo(shipSymbol: string, jettisonRequest?: JettisonRequest, _options?: Configuration): Promise<HttpInfo<Jettison200Response>> {
        const result = this.api.jettisonWithHttpInfo(shipSymbol, jettisonRequest, _options);
        return result.toPromise();
    }

    /**
     * Jettison cargo from your ship\'s cargo hold.
     * Jettison Cargo
     * @param shipSymbol The ship symbol.
     * @param jettisonRequest 
     */
    public jettison(shipSymbol: string, jettisonRequest?: JettisonRequest, _options?: Configuration): Promise<Jettison200Response> {
        const result = this.api.jettison(shipSymbol, jettisonRequest, _options);
        return result.toPromise();
    }

    /**
     * Jump your ship instantly to a target connected waypoint. The ship must be in orbit to execute a jump.  A unit of antimatter is purchased and consumed from the market when jumping. The price of antimatter is determined by the market and is subject to change. A ship can only jump to connected waypoints
     * Jump Ship
     * @param shipSymbol The ship symbol.
     * @param jumpShipRequest 
     */
    public jumpShipWithHttpInfo(shipSymbol: string, jumpShipRequest?: JumpShipRequest, _options?: Configuration): Promise<HttpInfo<JumpShip200Response>> {
        const result = this.api.jumpShipWithHttpInfo(shipSymbol, jumpShipRequest, _options);
        return result.toPromise();
    }

    /**
     * Jump your ship instantly to a target connected waypoint. The ship must be in orbit to execute a jump.  A unit of antimatter is purchased and consumed from the market when jumping. The price of antimatter is determined by the market and is subject to change. A ship can only jump to connected waypoints
     * Jump Ship
     * @param shipSymbol The ship symbol.
     * @param jumpShipRequest 
     */
    public jumpShip(shipSymbol: string, jumpShipRequest?: JumpShipRequest, _options?: Configuration): Promise<JumpShip200Response> {
        const result = this.api.jumpShip(shipSymbol, jumpShipRequest, _options);
        return result.toPromise();
    }

    /**
     * Navigate to a target destination. The ship must be in orbit to use this function. The destination waypoint must be within the same system as the ship\'s current location. Navigating will consume the necessary fuel from the ship\'s manifest based on the distance to the target waypoint.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.  To travel between systems, see the ship\'s Warp or Jump actions.
     * Navigate Ship
     * @param shipSymbol The ship symbol.
     * @param navigateShipRequest 
     */
    public navigateShipWithHttpInfo(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: Configuration): Promise<HttpInfo<NavigateShip200Response>> {
        const result = this.api.navigateShipWithHttpInfo(shipSymbol, navigateShipRequest, _options);
        return result.toPromise();
    }

    /**
     * Navigate to a target destination. The ship must be in orbit to use this function. The destination waypoint must be within the same system as the ship\'s current location. Navigating will consume the necessary fuel from the ship\'s manifest based on the distance to the target waypoint.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.  To travel between systems, see the ship\'s Warp or Jump actions.
     * Navigate Ship
     * @param shipSymbol The ship symbol.
     * @param navigateShipRequest 
     */
    public navigateShip(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: Configuration): Promise<NavigateShip200Response> {
        const result = this.api.navigateShip(shipSymbol, navigateShipRequest, _options);
        return result.toPromise();
    }

    /**
     * Negotiate a new contract with the HQ.  In order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.  Once a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept.   The ship must be present at any waypoint with a faction present to negotiate a contract with that faction.
     * Negotiate Contract
     * @param shipSymbol The ship\&#39;s symbol.
     */
    public negotiateContractWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<NegotiateContract200Response>> {
        const result = this.api.negotiateContractWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Negotiate a new contract with the HQ.  In order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.  Once a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept.   The ship must be present at any waypoint with a faction present to negotiate a contract with that faction.
     * Negotiate Contract
     * @param shipSymbol The ship\&#39;s symbol.
     */
    public negotiateContract(shipSymbol: string, _options?: Configuration): Promise<NegotiateContract200Response> {
        const result = this.api.negotiateContract(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Attempt to move your ship into orbit at its current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  Orbiting ships are able to do actions that require the ship to be above surface such as navigating or extracting, but cannot access elements in their current waypoint, such as the market or a shipyard.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
     * Orbit Ship
     * @param shipSymbol The symbol of the ship.
     */
    public orbitShipWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<OrbitShip200Response>> {
        const result = this.api.orbitShipWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Attempt to move your ship into orbit at its current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  Orbiting ships are able to do actions that require the ship to be above surface such as navigating or extracting, but cannot access elements in their current waypoint, such as the market or a shipyard.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
     * Orbit Ship
     * @param shipSymbol The symbol of the ship.
     */
    public orbitShip(shipSymbol: string, _options?: Configuration): Promise<OrbitShip200Response> {
        const result = this.api.orbitShip(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Update the nav configuration of a ship.  Currently only supports configuring the Flight Mode of the ship, which affects its speed and fuel consumption.
     * Patch Ship Nav
     * @param shipSymbol The ship symbol.
     * @param patchShipNavRequest 
     */
    public patchShipNavWithHttpInfo(shipSymbol: string, patchShipNavRequest?: PatchShipNavRequest, _options?: Configuration): Promise<HttpInfo<GetShipNav200Response>> {
        const result = this.api.patchShipNavWithHttpInfo(shipSymbol, patchShipNavRequest, _options);
        return result.toPromise();
    }

    /**
     * Update the nav configuration of a ship.  Currently only supports configuring the Flight Mode of the ship, which affects its speed and fuel consumption.
     * Patch Ship Nav
     * @param shipSymbol The ship symbol.
     * @param patchShipNavRequest 
     */
    public patchShipNav(shipSymbol: string, patchShipNavRequest?: PatchShipNavRequest, _options?: Configuration): Promise<GetShipNav200Response> {
        const result = this.api.patchShipNav(shipSymbol, patchShipNavRequest, _options);
        return result.toPromise();
    }

    /**
     * Purchase cargo from a market.  The ship must be docked in a waypoint that has `Marketplace` trait, and the market must be selling a good to be able to purchase it.  The maximum amount of units of a good that can be purchased in each transaction are denoted by the `tradeVolume` value of the good, which can be viewed by using the Get Market action.  Purchased goods are added to the ship\'s cargo hold.
     * Purchase Cargo
     * @param shipSymbol The ship\&#39;s symbol.
     * @param purchaseCargoRequest 
     */
    public purchaseCargoWithHttpInfo(shipSymbol: string, purchaseCargoRequest?: PurchaseCargoRequest, _options?: Configuration): Promise<HttpInfo<PurchaseCargo201Response>> {
        const result = this.api.purchaseCargoWithHttpInfo(shipSymbol, purchaseCargoRequest, _options);
        return result.toPromise();
    }

    /**
     * Purchase cargo from a market.  The ship must be docked in a waypoint that has `Marketplace` trait, and the market must be selling a good to be able to purchase it.  The maximum amount of units of a good that can be purchased in each transaction are denoted by the `tradeVolume` value of the good, which can be viewed by using the Get Market action.  Purchased goods are added to the ship\'s cargo hold.
     * Purchase Cargo
     * @param shipSymbol The ship\&#39;s symbol.
     * @param purchaseCargoRequest 
     */
    public purchaseCargo(shipSymbol: string, purchaseCargoRequest?: PurchaseCargoRequest, _options?: Configuration): Promise<PurchaseCargo201Response> {
        const result = this.api.purchaseCargo(shipSymbol, purchaseCargoRequest, _options);
        return result.toPromise();
    }

    /**
     * Purchase a ship from a Shipyard. In order to use this function, a ship under your agent\'s ownership must be in a waypoint that has the `Shipyard` trait, and the Shipyard must sell the type of the desired ship.  Shipyards typically offer ship types, which are predefined templates of ships that have dedicated roles. A template comes with a preset of an engine, a reactor, and a frame. It may also include a few modules and mounts.
     * Purchase Ship
     * @param purchaseShipRequest 
     */
    public purchaseShipWithHttpInfo(purchaseShipRequest?: PurchaseShipRequest, _options?: Configuration): Promise<HttpInfo<PurchaseShip201Response>> {
        const result = this.api.purchaseShipWithHttpInfo(purchaseShipRequest, _options);
        return result.toPromise();
    }

    /**
     * Purchase a ship from a Shipyard. In order to use this function, a ship under your agent\'s ownership must be in a waypoint that has the `Shipyard` trait, and the Shipyard must sell the type of the desired ship.  Shipyards typically offer ship types, which are predefined templates of ships that have dedicated roles. A template comes with a preset of an engine, a reactor, and a frame. It may also include a few modules and mounts.
     * Purchase Ship
     * @param purchaseShipRequest 
     */
    public purchaseShip(purchaseShipRequest?: PurchaseShipRequest, _options?: Configuration): Promise<PurchaseShip201Response> {
        const result = this.api.purchaseShip(purchaseShipRequest, _options);
        return result.toPromise();
    }

    /**
     * Refuel your ship by buying fuel from the local market.  Requires the ship to be docked in a waypoint that has the `Marketplace` trait, and the market must be selling fuel in order to refuel.  Each fuel bought from the market replenishes 100 units in your ship\'s fuel.  Ships will always be refuel to their frame\'s maximum fuel capacity when using this action.
     * Refuel Ship
     * @param shipSymbol The ship symbol.
     * @param refuelShipRequest 
     */
    public refuelShipWithHttpInfo(shipSymbol: string, refuelShipRequest?: RefuelShipRequest, _options?: Configuration): Promise<HttpInfo<RefuelShip200Response>> {
        const result = this.api.refuelShipWithHttpInfo(shipSymbol, refuelShipRequest, _options);
        return result.toPromise();
    }

    /**
     * Refuel your ship by buying fuel from the local market.  Requires the ship to be docked in a waypoint that has the `Marketplace` trait, and the market must be selling fuel in order to refuel.  Each fuel bought from the market replenishes 100 units in your ship\'s fuel.  Ships will always be refuel to their frame\'s maximum fuel capacity when using this action.
     * Refuel Ship
     * @param shipSymbol The ship symbol.
     * @param refuelShipRequest 
     */
    public refuelShip(shipSymbol: string, refuelShipRequest?: RefuelShipRequest, _options?: Configuration): Promise<RefuelShip200Response> {
        const result = this.api.refuelShip(shipSymbol, refuelShipRequest, _options);
        return result.toPromise();
    }

    /**
     * Remove a mount from a ship.  The ship must be docked in a waypoint that has the `Shipyard` trait, and must have the desired mount that it wish to remove installed.  A removal fee will be deduced from the agent by the Shipyard.
     * Remove Mount
     * @param shipSymbol The ship\&#39;s symbol.
     * @param removeMountRequest 
     */
    public removeMountWithHttpInfo(shipSymbol: string, removeMountRequest?: RemoveMountRequest, _options?: Configuration): Promise<HttpInfo<RemoveMount201Response>> {
        const result = this.api.removeMountWithHttpInfo(shipSymbol, removeMountRequest, _options);
        return result.toPromise();
    }

    /**
     * Remove a mount from a ship.  The ship must be docked in a waypoint that has the `Shipyard` trait, and must have the desired mount that it wish to remove installed.  A removal fee will be deduced from the agent by the Shipyard.
     * Remove Mount
     * @param shipSymbol The ship\&#39;s symbol.
     * @param removeMountRequest 
     */
    public removeMount(shipSymbol: string, removeMountRequest?: RemoveMountRequest, _options?: Configuration): Promise<RemoveMount201Response> {
        const result = this.api.removeMount(shipSymbol, removeMountRequest, _options);
        return result.toPromise();
    }

    /**
     * Repair a ship, restoring the ship to maximum condition. The ship must be docked at a waypoint that has the `Shipyard` trait in order to use this function. To preview the cost of repairing the ship, use the Get action.
     * Repair Ship
     * @param shipSymbol The ship symbol.
     */
    public repairShipWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<RepairShip200Response>> {
        const result = this.api.repairShipWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Repair a ship, restoring the ship to maximum condition. The ship must be docked at a waypoint that has the `Shipyard` trait in order to use this function. To preview the cost of repairing the ship, use the Get action.
     * Repair Ship
     * @param shipSymbol The ship symbol.
     */
    public repairShip(shipSymbol: string, _options?: Configuration): Promise<RepairShip200Response> {
        const result = this.api.repairShip(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Scrap a ship, removing it from the game and returning a portion of the ship\'s value to the agent. The ship must be docked in a waypoint that has the `Shipyard` trait in order to use this function. To preview the amount of value that will be returned, use the Get Ship action.
     * Scrap Ship
     * @param shipSymbol The ship symbol.
     */
    public scrapShipWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<ScrapShip200Response>> {
        const result = this.api.scrapShipWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Scrap a ship, removing it from the game and returning a portion of the ship\'s value to the agent. The ship must be docked in a waypoint that has the `Shipyard` trait in order to use this function. To preview the amount of value that will be returned, use the Get Ship action.
     * Scrap Ship
     * @param shipSymbol The ship symbol.
     */
    public scrapShip(shipSymbol: string, _options?: Configuration): Promise<ScrapShip200Response> {
        const result = this.api.scrapShip(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Sell cargo in your ship to a market that trades this cargo. The ship must be docked in a waypoint that has the `Marketplace` trait in order to use this function.
     * Sell Cargo
     * @param shipSymbol Symbol of a ship.
     * @param sellCargoRequest 
     */
    public sellCargoWithHttpInfo(shipSymbol: string, sellCargoRequest?: SellCargoRequest, _options?: Configuration): Promise<HttpInfo<SellCargo201Response>> {
        const result = this.api.sellCargoWithHttpInfo(shipSymbol, sellCargoRequest, _options);
        return result.toPromise();
    }

    /**
     * Sell cargo in your ship to a market that trades this cargo. The ship must be docked in a waypoint that has the `Marketplace` trait in order to use this function.
     * Sell Cargo
     * @param shipSymbol Symbol of a ship.
     * @param sellCargoRequest 
     */
    public sellCargo(shipSymbol: string, sellCargoRequest?: SellCargoRequest, _options?: Configuration): Promise<SellCargo201Response> {
        const result = this.api.sellCargo(shipSymbol, sellCargoRequest, _options);
        return result.toPromise();
    }

    /**
     * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request. In order to be able to refine, a ship must have goods that can be refined and have installed a `Refinery` module that can refine it.  When refining, 30 basic goods will be converted into 10 processed goods.
     * Ship Refine
     * @param shipSymbol The symbol of the ship.
     * @param shipRefineRequest 
     */
    public shipRefineWithHttpInfo(shipSymbol: string, shipRefineRequest?: ShipRefineRequest, _options?: Configuration): Promise<HttpInfo<ShipRefine201Response>> {
        const result = this.api.shipRefineWithHttpInfo(shipSymbol, shipRefineRequest, _options);
        return result.toPromise();
    }

    /**
     * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request. In order to be able to refine, a ship must have goods that can be refined and have installed a `Refinery` module that can refine it.  When refining, 30 basic goods will be converted into 10 processed goods.
     * Ship Refine
     * @param shipSymbol The symbol of the ship.
     * @param shipRefineRequest 
     */
    public shipRefine(shipSymbol: string, shipRefineRequest?: ShipRefineRequest, _options?: Configuration): Promise<ShipRefine201Response> {
        const result = this.api.shipRefine(shipSymbol, shipRefineRequest, _options);
        return result.toPromise();
    }

    /**
     * Siphon gases, such as hydrocarbon, from gas giants.  The ship must be in orbit to be able to siphon and must have siphon mounts and a gas processor installed.
     * Siphon Resources
     * @param shipSymbol The ship symbol.
     */
    public siphonResourcesWithHttpInfo(shipSymbol: string, _options?: Configuration): Promise<HttpInfo<SiphonResources201Response>> {
        const result = this.api.siphonResourcesWithHttpInfo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Siphon gases, such as hydrocarbon, from gas giants.  The ship must be in orbit to be able to siphon and must have siphon mounts and a gas processor installed.
     * Siphon Resources
     * @param shipSymbol The ship symbol.
     */
    public siphonResources(shipSymbol: string, _options?: Configuration): Promise<SiphonResources201Response> {
        const result = this.api.siphonResources(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Transfer cargo between ships.  The receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.  The response body\'s cargo shows the cargo of the transferring ship after the transfer is complete.
     * Transfer Cargo
     * @param shipSymbol The transferring ship\&#39;s symbol.
     * @param transferCargoRequest 
     */
    public transferCargoWithHttpInfo(shipSymbol: string, transferCargoRequest?: TransferCargoRequest, _options?: Configuration): Promise<HttpInfo<TransferCargo200Response>> {
        const result = this.api.transferCargoWithHttpInfo(shipSymbol, transferCargoRequest, _options);
        return result.toPromise();
    }

    /**
     * Transfer cargo between ships.  The receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.  The response body\'s cargo shows the cargo of the transferring ship after the transfer is complete.
     * Transfer Cargo
     * @param shipSymbol The transferring ship\&#39;s symbol.
     * @param transferCargoRequest 
     */
    public transferCargo(shipSymbol: string, transferCargoRequest?: TransferCargoRequest, _options?: Configuration): Promise<TransferCargo200Response> {
        const result = this.api.transferCargo(shipSymbol, transferCargoRequest, _options);
        return result.toPromise();
    }

    /**
     * Warp your ship to a target destination in another system. The ship must be in orbit to use this function and must have the `Warp Drive` module installed. Warping will consume the necessary fuel from the ship\'s manifest.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at its destination.
     * Warp Ship
     * @param shipSymbol The ship symbol.
     * @param navigateShipRequest 
     */
    public warpShipWithHttpInfo(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: Configuration): Promise<HttpInfo<WarpShip200Response>> {
        const result = this.api.warpShipWithHttpInfo(shipSymbol, navigateShipRequest, _options);
        return result.toPromise();
    }

    /**
     * Warp your ship to a target destination in another system. The ship must be in orbit to use this function and must have the `Warp Drive` module installed. Warping will consume the necessary fuel from the ship\'s manifest.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at its destination.
     * Warp Ship
     * @param shipSymbol The ship symbol.
     * @param navigateShipRequest 
     */
    public warpShip(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: Configuration): Promise<WarpShip200Response> {
        const result = this.api.warpShip(shipSymbol, navigateShipRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSystemsApi } from './ObservableAPI.ts';

import { SystemsApiRequestFactory, SystemsApiResponseProcessor} from "../apis/SystemsApi.ts";
export class PromiseSystemsApi {
    private api: ObservableSystemsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemsApiRequestFactory,
        responseProcessor?: SystemsApiResponseProcessor
    ) {
        this.api = new ObservableSystemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
     * Get Construction Site
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getConstructionWithHttpInfo(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<HttpInfo<GetConstruction200Response>> {
        const result = this.api.getConstructionWithHttpInfo(systemSymbol, waypointSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
     * Get Construction Site
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getConstruction(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<GetConstruction200Response> {
        const result = this.api.getConstruction(systemSymbol, waypointSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  Waypoints connected to this jump gate can be 
     * Get Jump Gate
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getJumpGateWithHttpInfo(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<HttpInfo<GetJumpGate200Response>> {
        const result = this.api.getJumpGateWithHttpInfo(systemSymbol, waypointSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  Waypoints connected to this jump gate can be 
     * Get Jump Gate
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getJumpGate(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<GetJumpGate200Response> {
        const result = this.api.getJumpGate(systemSymbol, waypointSymbol, _options);
        return result.toPromise();
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
     * Get Market
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getMarketWithHttpInfo(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<HttpInfo<GetMarket200Response>> {
        const result = this.api.getMarketWithHttpInfo(systemSymbol, waypointSymbol, _options);
        return result.toPromise();
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
     * Get Market
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getMarket(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<GetMarket200Response> {
        const result = this.api.getMarket(systemSymbol, waypointSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getShipyardWithHttpInfo(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<HttpInfo<GetShipyard200Response>> {
        const result = this.api.getShipyardWithHttpInfo(systemSymbol, waypointSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getShipyard(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<GetShipyard200Response> {
        const result = this.api.getShipyard(systemSymbol, waypointSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get the details of a system.
     * Get System
     * @param systemSymbol The system symbol
     */
    public getSystemWithHttpInfo(systemSymbol: string, _options?: Configuration): Promise<HttpInfo<GetSystem200Response>> {
        const result = this.api.getSystemWithHttpInfo(systemSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get the details of a system.
     * Get System
     * @param systemSymbol The system symbol
     */
    public getSystem(systemSymbol: string, _options?: Configuration): Promise<GetSystem200Response> {
        const result = this.api.getSystem(systemSymbol, _options);
        return result.toPromise();
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
    public getSystemWaypointsWithHttpInfo(systemSymbol: string, page?: number, limit?: number, type?: WaypointType, traits?: GetSystemWaypointsTraitsParameter, _options?: Configuration): Promise<HttpInfo<GetSystemWaypoints200Response>> {
        const result = this.api.getSystemWaypointsWithHttpInfo(systemSymbol, page, limit, type, traits, _options);
        return result.toPromise();
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
    public getSystemWaypoints(systemSymbol: string, page?: number, limit?: number, type?: WaypointType, traits?: GetSystemWaypointsTraitsParameter, _options?: Configuration): Promise<GetSystemWaypoints200Response> {
        const result = this.api.getSystemWaypoints(systemSymbol, page, limit, type, traits, _options);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all systems.
     * List Systems
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getSystemsWithHttpInfo(page?: number, limit?: number, _options?: Configuration): Promise<HttpInfo<GetSystems200Response>> {
        const result = this.api.getSystemsWithHttpInfo(page, limit, _options);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all systems.
     * List Systems
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getSystems(page?: number, limit?: number, _options?: Configuration): Promise<GetSystems200Response> {
        const result = this.api.getSystems(page, limit, _options);
        return result.toPromise();
    }

    /**
     * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
     * Get Waypoint
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getWaypointWithHttpInfo(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<HttpInfo<GetWaypoint200Response>> {
        const result = this.api.getWaypointWithHttpInfo(systemSymbol, waypointSymbol, _options);
        return result.toPromise();
    }

    /**
     * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
     * Get Waypoint
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getWaypoint(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<GetWaypoint200Response> {
        const result = this.api.getWaypoint(systemSymbol, waypointSymbol, _options);
        return result.toPromise();
    }

    /**
     * Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.  The good must be in your ship\'s cargo. The good will be removed from your ship\'s cargo and added to the construction site\'s materials.
     * Supply Construction Site
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     * @param supplyConstructionRequest 
     */
    public supplyConstructionWithHttpInfo(systemSymbol: string, waypointSymbol: string, supplyConstructionRequest?: SupplyConstructionRequest, _options?: Configuration): Promise<HttpInfo<SupplyConstruction201Response>> {
        const result = this.api.supplyConstructionWithHttpInfo(systemSymbol, waypointSymbol, supplyConstructionRequest, _options);
        return result.toPromise();
    }

    /**
     * Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.  The good must be in your ship\'s cargo. The good will be removed from your ship\'s cargo and added to the construction site\'s materials.
     * Supply Construction Site
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     * @param supplyConstructionRequest 
     */
    public supplyConstruction(systemSymbol: string, waypointSymbol: string, supplyConstructionRequest?: SupplyConstructionRequest, _options?: Configuration): Promise<SupplyConstruction201Response> {
        const result = this.api.supplyConstruction(systemSymbol, waypointSymbol, supplyConstructionRequest, _options);
        return result.toPromise();
    }


}




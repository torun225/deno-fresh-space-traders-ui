import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
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

import { AgentsApiRequestFactory, AgentsApiResponseProcessor} from "../apis/AgentsApi.ts";
export class ObservableAgentsApi {
    private requestFactory: AgentsApiRequestFactory;
    private responseProcessor: AgentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentsApiRequestFactory,
        responseProcessor?: AgentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AgentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AgentsApiResponseProcessor();
    }

    /**
     * Fetch agent details.
     * Get Public Agent
     * @param agentSymbol The agent symbol
     */
    public getAgentWithHttpInfo(agentSymbol: string, _options?: Configuration): Observable<HttpInfo<GetMyAgent200Response>> {
        const requestContextPromise = this.requestFactory.getAgent(agentSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAgentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch agent details.
     * Get Public Agent
     * @param agentSymbol The agent symbol
     */
    public getAgent(agentSymbol: string, _options?: Configuration): Observable<GetMyAgent200Response> {
        return this.getAgentWithHttpInfo(agentSymbol, _options).pipe(map((apiResponse: HttpInfo<GetMyAgent200Response>) => apiResponse.data));
    }

    /**
     * Fetch agents details.
     * List Agents
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getAgentsWithHttpInfo(page?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<GetAgents200Response>> {
        const requestContextPromise = this.requestFactory.getAgents(page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAgentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch agents details.
     * List Agents
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getAgents(page?: number, limit?: number, _options?: Configuration): Observable<GetAgents200Response> {
        return this.getAgentsWithHttpInfo(page, limit, _options).pipe(map((apiResponse: HttpInfo<GetAgents200Response>) => apiResponse.data));
    }

    /**
     * Fetch your agent\'s details.
     * Get Agent
     */
    public getMyAgentWithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetMyAgent200Response>> {
        const requestContextPromise = this.requestFactory.getMyAgent(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMyAgentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch your agent\'s details.
     * Get Agent
     */
    public getMyAgent(_options?: Configuration): Observable<GetMyAgent200Response> {
        return this.getMyAgentWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetMyAgent200Response>) => apiResponse.data));
    }

}

import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi.ts";
export class ObservableContractsApi {
    private requestFactory: ContractsApiRequestFactory;
    private responseProcessor: ContractsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractsApiRequestFactory,
        responseProcessor?: ContractsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContractsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContractsApiResponseProcessor();
    }

    /**
     * Accept a contract by ID.   You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.
     * Accept Contract
     * @param contractId The contract ID to accept.
     */
    public acceptContractWithHttpInfo(contractId: string, _options?: Configuration): Observable<HttpInfo<AcceptContract200Response>> {
        const requestContextPromise = this.requestFactory.acceptContract(contractId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.acceptContractWithHttpInfo(rsp)));
            }));
    }

    /**
     * Accept a contract by ID.   You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.
     * Accept Contract
     * @param contractId The contract ID to accept.
     */
    public acceptContract(contractId: string, _options?: Configuration): Observable<AcceptContract200Response> {
        return this.acceptContractWithHttpInfo(contractId, _options).pipe(map((apiResponse: HttpInfo<AcceptContract200Response>) => apiResponse.data));
    }

    /**
     * Deliver cargo to a contract.  In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.  Cargo that was delivered will be removed from the ship\'s cargo.
     * Deliver Cargo to Contract
     * @param contractId The ID of the contract.
     * @param deliverContractRequest 
     */
    public deliverContractWithHttpInfo(contractId: string, deliverContractRequest?: DeliverContractRequest, _options?: Configuration): Observable<HttpInfo<DeliverContract200Response>> {
        const requestContextPromise = this.requestFactory.deliverContract(contractId, deliverContractRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deliverContractWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deliver cargo to a contract.  In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.  Cargo that was delivered will be removed from the ship\'s cargo.
     * Deliver Cargo to Contract
     * @param contractId The ID of the contract.
     * @param deliverContractRequest 
     */
    public deliverContract(contractId: string, deliverContractRequest?: DeliverContractRequest, _options?: Configuration): Observable<DeliverContract200Response> {
        return this.deliverContractWithHttpInfo(contractId, deliverContractRequest, _options).pipe(map((apiResponse: HttpInfo<DeliverContract200Response>) => apiResponse.data));
    }

    /**
     * Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.
     * Fulfill Contract
     * @param contractId The ID of the contract to fulfill.
     */
    public fulfillContractWithHttpInfo(contractId: string, _options?: Configuration): Observable<HttpInfo<FulfillContract200Response>> {
        const requestContextPromise = this.requestFactory.fulfillContract(contractId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fulfillContractWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.
     * Fulfill Contract
     * @param contractId The ID of the contract to fulfill.
     */
    public fulfillContract(contractId: string, _options?: Configuration): Observable<FulfillContract200Response> {
        return this.fulfillContractWithHttpInfo(contractId, _options).pipe(map((apiResponse: HttpInfo<FulfillContract200Response>) => apiResponse.data));
    }

    /**
     * Get the details of a contract by ID.
     * Get Contract
     * @param contractId The contract ID
     */
    public getContractWithHttpInfo(contractId: string, _options?: Configuration): Observable<HttpInfo<GetContract200Response>> {
        const requestContextPromise = this.requestFactory.getContract(contractId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContractWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the details of a contract by ID.
     * Get Contract
     * @param contractId The contract ID
     */
    public getContract(contractId: string, _options?: Configuration): Observable<GetContract200Response> {
        return this.getContractWithHttpInfo(contractId, _options).pipe(map((apiResponse: HttpInfo<GetContract200Response>) => apiResponse.data));
    }

    /**
     * Return a paginated list of all your contracts.
     * List Contracts
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getContractsWithHttpInfo(page?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<GetContracts200Response>> {
        const requestContextPromise = this.requestFactory.getContracts(page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContractsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return a paginated list of all your contracts.
     * List Contracts
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getContracts(page?: number, limit?: number, _options?: Configuration): Observable<GetContracts200Response> {
        return this.getContractsWithHttpInfo(page, limit, _options).pipe(map((apiResponse: HttpInfo<GetContracts200Response>) => apiResponse.data));
    }

}

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi.ts";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Return the status of the game server. This also includes a few global elements, such as announcements, server reset dates and leaderboards.
     * Get Status
     */
    public getStatusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetStatus200Response>> {
        const requestContextPromise = this.requestFactory.getStatus(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return the status of the game server. This also includes a few global elements, such as announcements, server reset dates and leaderboards.
     * Get Status
     */
    public getStatus(_options?: Configuration): Observable<GetStatus200Response> {
        return this.getStatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetStatus200Response>) => apiResponse.data));
    }

    /**
     * Creates a new agent and ties it to an account.  The agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.  This new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 150,000 credits.  > #### Keep your token safe and secure > > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.  If you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through basic API requests in just a few minutes.
     * Register New Agent
     * @param registerRequest 
     */
    public registerWithHttpInfo(registerRequest?: RegisterRequest, _options?: Configuration): Observable<HttpInfo<Register201Response>> {
        const requestContextPromise = this.requestFactory.register(registerRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.registerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new agent and ties it to an account.  The agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.  This new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 150,000 credits.  > #### Keep your token safe and secure > > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.  If you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through basic API requests in just a few minutes.
     * Register New Agent
     * @param registerRequest 
     */
    public register(registerRequest?: RegisterRequest, _options?: Configuration): Observable<Register201Response> {
        return this.registerWithHttpInfo(registerRequest, _options).pipe(map((apiResponse: HttpInfo<Register201Response>) => apiResponse.data));
    }

}

import { FactionsApiRequestFactory, FactionsApiResponseProcessor} from "../apis/FactionsApi.ts";
export class ObservableFactionsApi {
    private requestFactory: FactionsApiRequestFactory;
    private responseProcessor: FactionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FactionsApiRequestFactory,
        responseProcessor?: FactionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FactionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FactionsApiResponseProcessor();
    }

    /**
     * View the details of a faction.
     * Get Faction
     * @param factionSymbol The faction symbol
     */
    public getFactionWithHttpInfo(factionSymbol: string, _options?: Configuration): Observable<HttpInfo<GetFaction200Response>> {
        const requestContextPromise = this.requestFactory.getFaction(factionSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * View the details of a faction.
     * Get Faction
     * @param factionSymbol The faction symbol
     */
    public getFaction(factionSymbol: string, _options?: Configuration): Observable<GetFaction200Response> {
        return this.getFactionWithHttpInfo(factionSymbol, _options).pipe(map((apiResponse: HttpInfo<GetFaction200Response>) => apiResponse.data));
    }

    /**
     * Return a paginated list of all the factions in the game.
     * List Factions
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getFactionsWithHttpInfo(page?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<GetFactions200Response>> {
        const requestContextPromise = this.requestFactory.getFactions(page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return a paginated list of all the factions in the game.
     * List Factions
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getFactions(page?: number, limit?: number, _options?: Configuration): Observable<GetFactions200Response> {
        return this.getFactionsWithHttpInfo(page, limit, _options).pipe(map((apiResponse: HttpInfo<GetFactions200Response>) => apiResponse.data));
    }

}

import { FleetApiRequestFactory, FleetApiResponseProcessor} from "../apis/FleetApi.ts";
export class ObservableFleetApi {
    private requestFactory: FleetApiRequestFactory;
    private responseProcessor: FleetApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FleetApiRequestFactory,
        responseProcessor?: FleetApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FleetApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FleetApiResponseProcessor();
    }

    /**
     * Command a ship to chart the waypoint at its current location.  Most waypoints in the universe are uncharted by default. These waypoints have their traits hidden until they have been charted by a ship.  Charting a waypoint will record your agent as the one who created the chart, and all other agents would also be able to see the waypoint\'s traits.
     * Create Chart
     * @param shipSymbol The symbol of the ship.
     */
    public createChartWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<CreateChart201Response>> {
        const requestContextPromise = this.requestFactory.createChart(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createChartWithHttpInfo(rsp)));
            }));
    }

    /**
     * Command a ship to chart the waypoint at its current location.  Most waypoints in the universe are uncharted by default. These waypoints have their traits hidden until they have been charted by a ship.  Charting a waypoint will record your agent as the one who created the chart, and all other agents would also be able to see the waypoint\'s traits.
     * Create Chart
     * @param shipSymbol The symbol of the ship.
     */
    public createChart(shipSymbol: string, _options?: Configuration): Observable<CreateChart201Response> {
        return this.createChartWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<CreateChart201Response>) => apiResponse.data));
    }

    /**
     * Scan for nearby ships, retrieving information for all ships in range.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Ships
     * @param shipSymbol The ship symbol.
     */
    public createShipShipScanWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<CreateShipShipScan201Response>> {
        const requestContextPromise = this.requestFactory.createShipShipScan(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createShipShipScanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Scan for nearby ships, retrieving information for all ships in range.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Ships
     * @param shipSymbol The ship symbol.
     */
    public createShipShipScan(shipSymbol: string, _options?: Configuration): Observable<CreateShipShipScan201Response> {
        return this.createShipShipScanWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<CreateShipShipScan201Response>) => apiResponse.data));
    }

    /**
     * Scan for nearby systems, retrieving information on the systems\' distance from the ship and their waypoints. Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Systems
     * @param shipSymbol The ship symbol.
     */
    public createShipSystemScanWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<CreateShipSystemScan201Response>> {
        const requestContextPromise = this.requestFactory.createShipSystemScan(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createShipSystemScanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Scan for nearby systems, retrieving information on the systems\' distance from the ship and their waypoints. Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Systems
     * @param shipSymbol The ship symbol.
     */
    public createShipSystemScan(shipSymbol: string, _options?: Configuration): Observable<CreateShipSystemScan201Response> {
        return this.createShipSystemScanWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<CreateShipSystemScan201Response>) => apiResponse.data));
    }

    /**
     * Scan for nearby waypoints, retrieving detailed information on each waypoint in range. Scanning uncharted waypoints will allow you to ignore their uncharted state and will list the waypoints\' traits.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Waypoints
     * @param shipSymbol The ship symbol.
     */
    public createShipWaypointScanWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<CreateShipWaypointScan201Response>> {
        const requestContextPromise = this.requestFactory.createShipWaypointScan(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createShipWaypointScanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Scan for nearby waypoints, retrieving detailed information on each waypoint in range. Scanning uncharted waypoints will allow you to ignore their uncharted state and will list the waypoints\' traits.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Waypoints
     * @param shipSymbol The ship symbol.
     */
    public createShipWaypointScan(shipSymbol: string, _options?: Configuration): Observable<CreateShipWaypointScan201Response> {
        return this.createShipWaypointScanWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<CreateShipWaypointScan201Response>) => apiResponse.data));
    }

    /**
     * Create surveys on a waypoint that can be extracted such as asteroid fields. A survey focuses on specific types of deposits from the extracted location. When ships extract using this survey, they are guaranteed to procure a high amount of one of the goods in the survey.  In order to use a survey, send the entire survey details in the body of the extract request.  Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown after surveying in which it is unable to perform certain actions. Surveys will eventually expire after a period of time or will be exhausted after being extracted several times based on the survey\'s size. Multiple ships can use the same survey for extraction.  A ship must have the `Surveyor` mount installed in order to use this function.
     * Create Survey
     * @param shipSymbol The symbol of the ship.
     */
    public createSurveyWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<CreateSurvey201Response>> {
        const requestContextPromise = this.requestFactory.createSurvey(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSurveyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create surveys on a waypoint that can be extracted such as asteroid fields. A survey focuses on specific types of deposits from the extracted location. When ships extract using this survey, they are guaranteed to procure a high amount of one of the goods in the survey.  In order to use a survey, send the entire survey details in the body of the extract request.  Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown after surveying in which it is unable to perform certain actions. Surveys will eventually expire after a period of time or will be exhausted after being extracted several times based on the survey\'s size. Multiple ships can use the same survey for extraction.  A ship must have the `Surveyor` mount installed in order to use this function.
     * Create Survey
     * @param shipSymbol The symbol of the ship.
     */
    public createSurvey(shipSymbol: string, _options?: Configuration): Observable<CreateSurvey201Response> {
        return this.createSurveyWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<CreateSurvey201Response>) => apiResponse.data));
    }

    /**
     * Attempt to dock your ship at its current location. Docking will only succeed if your ship is capable of docking at the time of the request.  Docked ships can access elements in their current location, such as the market or a shipyard, but cannot do actions that require the ship to be above surface such as navigating or extracting.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
     * Dock Ship
     * @param shipSymbol The symbol of the ship.
     */
    public dockShipWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<DockShip200Response>> {
        const requestContextPromise = this.requestFactory.dockShip(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockShipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Attempt to dock your ship at its current location. Docking will only succeed if your ship is capable of docking at the time of the request.  Docked ships can access elements in their current location, such as the market or a shipyard, but cannot do actions that require the ship to be above surface such as navigating or extracting.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
     * Dock Ship
     * @param shipSymbol The symbol of the ship.
     */
    public dockShip(shipSymbol: string, _options?: Configuration): Observable<DockShip200Response> {
        return this.dockShipWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<DockShip200Response>) => apiResponse.data));
    }

    /**
     * Extract resources from a waypoint that can be extracted, such as asteroid fields, into your ship. Send an optional survey as the payload to target specific yields.  The ship must be in orbit to be able to extract and must have mining equipments installed that can extract goods, such as the `Gas Siphon` mount for gas-based goods or `Mining Laser` mount for ore-based goods.  The survey property is now deprecated. See the `extract/survey` endpoint for more details.
     * Extract Resources
     * @param shipSymbol The ship symbol.
     * @param extractResourcesRequest 
     */
    public extractResourcesWithHttpInfo(shipSymbol: string, extractResourcesRequest?: ExtractResourcesRequest, _options?: Configuration): Observable<HttpInfo<ExtractResources201Response>> {
        const requestContextPromise = this.requestFactory.extractResources(shipSymbol, extractResourcesRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.extractResourcesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Extract resources from a waypoint that can be extracted, such as asteroid fields, into your ship. Send an optional survey as the payload to target specific yields.  The ship must be in orbit to be able to extract and must have mining equipments installed that can extract goods, such as the `Gas Siphon` mount for gas-based goods or `Mining Laser` mount for ore-based goods.  The survey property is now deprecated. See the `extract/survey` endpoint for more details.
     * Extract Resources
     * @param shipSymbol The ship symbol.
     * @param extractResourcesRequest 
     */
    public extractResources(shipSymbol: string, extractResourcesRequest?: ExtractResourcesRequest, _options?: Configuration): Observable<ExtractResources201Response> {
        return this.extractResourcesWithHttpInfo(shipSymbol, extractResourcesRequest, _options).pipe(map((apiResponse: HttpInfo<ExtractResources201Response>) => apiResponse.data));
    }

    /**
     * Use a survey when extracting resources from a waypoint. This endpoint requires a survey as the payload, which allows your ship to extract specific yields.  Send the full survey object as the payload which will be validated according to the signature. If the signature is invalid, or any properties of the survey are changed, the request will fail.
     * Extract Resources with Survey
     * @param shipSymbol The ship symbol.
     * @param survey 
     */
    public extractResourcesWithSurveyWithHttpInfo(shipSymbol: string, survey?: Survey, _options?: Configuration): Observable<HttpInfo<ExtractResources201Response>> {
        const requestContextPromise = this.requestFactory.extractResourcesWithSurvey(shipSymbol, survey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.extractResourcesWithSurveyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use a survey when extracting resources from a waypoint. This endpoint requires a survey as the payload, which allows your ship to extract specific yields.  Send the full survey object as the payload which will be validated according to the signature. If the signature is invalid, or any properties of the survey are changed, the request will fail.
     * Extract Resources with Survey
     * @param shipSymbol The ship symbol.
     * @param survey 
     */
    public extractResourcesWithSurvey(shipSymbol: string, survey?: Survey, _options?: Configuration): Observable<ExtractResources201Response> {
        return this.extractResourcesWithSurveyWithHttpInfo(shipSymbol, survey, _options).pipe(map((apiResponse: HttpInfo<ExtractResources201Response>) => apiResponse.data));
    }

    /**
     * Get the mounts installed on a ship.
     * Get Mounts
     * @param shipSymbol The ship\&#39;s symbol.
     */
    public getMountsWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<GetMounts200Response>> {
        const requestContextPromise = this.requestFactory.getMounts(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the mounts installed on a ship.
     * Get Mounts
     * @param shipSymbol The ship\&#39;s symbol.
     */
    public getMounts(shipSymbol: string, _options?: Configuration): Observable<GetMounts200Response> {
        return this.getMountsWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<GetMounts200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the details of a ship under your agent\'s ownership.
     * Get Ship
     * @param shipSymbol The symbol of the ship.
     */
    public getMyShipWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<GetMyShip200Response>> {
        const requestContextPromise = this.requestFactory.getMyShip(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMyShipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a ship under your agent\'s ownership.
     * Get Ship
     * @param shipSymbol The symbol of the ship.
     */
    public getMyShip(shipSymbol: string, _options?: Configuration): Observable<GetMyShip200Response> {
        return this.getMyShipWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<GetMyShip200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the cargo of a ship under your agent\'s ownership.
     * Get Ship Cargo
     * @param shipSymbol The symbol of the ship.
     */
    public getMyShipCargoWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<GetMyShipCargo200Response>> {
        const requestContextPromise = this.requestFactory.getMyShipCargo(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMyShipCargoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the cargo of a ship under your agent\'s ownership.
     * Get Ship Cargo
     * @param shipSymbol The symbol of the ship.
     */
    public getMyShipCargo(shipSymbol: string, _options?: Configuration): Observable<GetMyShipCargo200Response> {
        return this.getMyShipCargoWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<GetMyShipCargo200Response>) => apiResponse.data));
    }

    /**
     * Return a paginated list of all of ships under your agent\'s ownership.
     * List Ships
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getMyShipsWithHttpInfo(page?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<GetMyShips200Response>> {
        const requestContextPromise = this.requestFactory.getMyShips(page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMyShipsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return a paginated list of all of ships under your agent\'s ownership.
     * List Ships
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getMyShips(page?: number, limit?: number, _options?: Configuration): Observable<GetMyShips200Response> {
        return this.getMyShipsWithHttpInfo(page, limit, _options).pipe(map((apiResponse: HttpInfo<GetMyShips200Response>) => apiResponse.data));
    }

    /**
     * Get the cost of repairing a ship.
     * Get Repair Ship
     * @param shipSymbol The ship symbol.
     */
    public getRepairShipWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<GetRepairShip200Response>> {
        const requestContextPromise = this.requestFactory.getRepairShip(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRepairShipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the cost of repairing a ship.
     * Get Repair Ship
     * @param shipSymbol The ship symbol.
     */
    public getRepairShip(shipSymbol: string, _options?: Configuration): Observable<GetRepairShip200Response> {
        return this.getRepairShipWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<GetRepairShip200Response>) => apiResponse.data));
    }

    /**
     * Get the amount of value that will be returned when scrapping a ship.
     * Get Scrap Ship
     * @param shipSymbol The ship symbol.
     */
    public getScrapShipWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<GetScrapShip200Response>> {
        const requestContextPromise = this.requestFactory.getScrapShip(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getScrapShipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the amount of value that will be returned when scrapping a ship.
     * Get Scrap Ship
     * @param shipSymbol The ship symbol.
     */
    public getScrapShip(shipSymbol: string, _options?: Configuration): Observable<GetScrapShip200Response> {
        return this.getScrapShipWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<GetScrapShip200Response>) => apiResponse.data));
    }

    /**
     * Retrieve the details of your ship\'s reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.
     * Get Ship Cooldown
     * @param shipSymbol The symbol of the ship.
     */
    public getShipCooldownWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<void | GetShipCooldown200Response>> {
        const requestContextPromise = this.requestFactory.getShipCooldown(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getShipCooldownWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of your ship\'s reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.
     * Get Ship Cooldown
     * @param shipSymbol The symbol of the ship.
     */
    public getShipCooldown(shipSymbol: string, _options?: Configuration): Observable<void | GetShipCooldown200Response> {
        return this.getShipCooldownWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<void | GetShipCooldown200Response>) => apiResponse.data));
    }

    /**
     * Get the current nav status of a ship.
     * Get Ship Nav
     * @param shipSymbol The ship symbol.
     */
    public getShipNavWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<GetShipNav200Response>> {
        const requestContextPromise = this.requestFactory.getShipNav(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getShipNavWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the current nav status of a ship.
     * Get Ship Nav
     * @param shipSymbol The ship symbol.
     */
    public getShipNav(shipSymbol: string, _options?: Configuration): Observable<GetShipNav200Response> {
        return this.getShipNavWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<GetShipNav200Response>) => apiResponse.data));
    }

    /**
     * Install a mount on a ship.  In order to install a mount, the ship must be docked and located in a waypoint that has a `Shipyard` trait. The ship also must have the mount to install in its cargo hold.  An installation fee will be deduced by the Shipyard for installing the mount on the ship. 
     * Install Mount
     * @param shipSymbol The ship\&#39;s symbol.
     * @param installMountRequest 
     */
    public installMountWithHttpInfo(shipSymbol: string, installMountRequest?: InstallMountRequest, _options?: Configuration): Observable<HttpInfo<InstallMount201Response>> {
        const requestContextPromise = this.requestFactory.installMount(shipSymbol, installMountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.installMountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Install a mount on a ship.  In order to install a mount, the ship must be docked and located in a waypoint that has a `Shipyard` trait. The ship also must have the mount to install in its cargo hold.  An installation fee will be deduced by the Shipyard for installing the mount on the ship. 
     * Install Mount
     * @param shipSymbol The ship\&#39;s symbol.
     * @param installMountRequest 
     */
    public installMount(shipSymbol: string, installMountRequest?: InstallMountRequest, _options?: Configuration): Observable<InstallMount201Response> {
        return this.installMountWithHttpInfo(shipSymbol, installMountRequest, _options).pipe(map((apiResponse: HttpInfo<InstallMount201Response>) => apiResponse.data));
    }

    /**
     * Jettison cargo from your ship\'s cargo hold.
     * Jettison Cargo
     * @param shipSymbol The ship symbol.
     * @param jettisonRequest 
     */
    public jettisonWithHttpInfo(shipSymbol: string, jettisonRequest?: JettisonRequest, _options?: Configuration): Observable<HttpInfo<Jettison200Response>> {
        const requestContextPromise = this.requestFactory.jettison(shipSymbol, jettisonRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jettisonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Jettison cargo from your ship\'s cargo hold.
     * Jettison Cargo
     * @param shipSymbol The ship symbol.
     * @param jettisonRequest 
     */
    public jettison(shipSymbol: string, jettisonRequest?: JettisonRequest, _options?: Configuration): Observable<Jettison200Response> {
        return this.jettisonWithHttpInfo(shipSymbol, jettisonRequest, _options).pipe(map((apiResponse: HttpInfo<Jettison200Response>) => apiResponse.data));
    }

    /**
     * Jump your ship instantly to a target connected waypoint. The ship must be in orbit to execute a jump.  A unit of antimatter is purchased and consumed from the market when jumping. The price of antimatter is determined by the market and is subject to change. A ship can only jump to connected waypoints
     * Jump Ship
     * @param shipSymbol The ship symbol.
     * @param jumpShipRequest 
     */
    public jumpShipWithHttpInfo(shipSymbol: string, jumpShipRequest?: JumpShipRequest, _options?: Configuration): Observable<HttpInfo<JumpShip200Response>> {
        const requestContextPromise = this.requestFactory.jumpShip(shipSymbol, jumpShipRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jumpShipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Jump your ship instantly to a target connected waypoint. The ship must be in orbit to execute a jump.  A unit of antimatter is purchased and consumed from the market when jumping. The price of antimatter is determined by the market and is subject to change. A ship can only jump to connected waypoints
     * Jump Ship
     * @param shipSymbol The ship symbol.
     * @param jumpShipRequest 
     */
    public jumpShip(shipSymbol: string, jumpShipRequest?: JumpShipRequest, _options?: Configuration): Observable<JumpShip200Response> {
        return this.jumpShipWithHttpInfo(shipSymbol, jumpShipRequest, _options).pipe(map((apiResponse: HttpInfo<JumpShip200Response>) => apiResponse.data));
    }

    /**
     * Navigate to a target destination. The ship must be in orbit to use this function. The destination waypoint must be within the same system as the ship\'s current location. Navigating will consume the necessary fuel from the ship\'s manifest based on the distance to the target waypoint.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.  To travel between systems, see the ship\'s Warp or Jump actions.
     * Navigate Ship
     * @param shipSymbol The ship symbol.
     * @param navigateShipRequest 
     */
    public navigateShipWithHttpInfo(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: Configuration): Observable<HttpInfo<NavigateShip200Response>> {
        const requestContextPromise = this.requestFactory.navigateShip(shipSymbol, navigateShipRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.navigateShipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Navigate to a target destination. The ship must be in orbit to use this function. The destination waypoint must be within the same system as the ship\'s current location. Navigating will consume the necessary fuel from the ship\'s manifest based on the distance to the target waypoint.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.  To travel between systems, see the ship\'s Warp or Jump actions.
     * Navigate Ship
     * @param shipSymbol The ship symbol.
     * @param navigateShipRequest 
     */
    public navigateShip(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: Configuration): Observable<NavigateShip200Response> {
        return this.navigateShipWithHttpInfo(shipSymbol, navigateShipRequest, _options).pipe(map((apiResponse: HttpInfo<NavigateShip200Response>) => apiResponse.data));
    }

    /**
     * Negotiate a new contract with the HQ.  In order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.  Once a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept.   The ship must be present at any waypoint with a faction present to negotiate a contract with that faction.
     * Negotiate Contract
     * @param shipSymbol The ship\&#39;s symbol.
     */
    public negotiateContractWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<NegotiateContract200Response>> {
        const requestContextPromise = this.requestFactory.negotiateContract(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.negotiateContractWithHttpInfo(rsp)));
            }));
    }

    /**
     * Negotiate a new contract with the HQ.  In order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.  Once a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept.   The ship must be present at any waypoint with a faction present to negotiate a contract with that faction.
     * Negotiate Contract
     * @param shipSymbol The ship\&#39;s symbol.
     */
    public negotiateContract(shipSymbol: string, _options?: Configuration): Observable<NegotiateContract200Response> {
        return this.negotiateContractWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<NegotiateContract200Response>) => apiResponse.data));
    }

    /**
     * Attempt to move your ship into orbit at its current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  Orbiting ships are able to do actions that require the ship to be above surface such as navigating or extracting, but cannot access elements in their current waypoint, such as the market or a shipyard.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
     * Orbit Ship
     * @param shipSymbol The symbol of the ship.
     */
    public orbitShipWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<OrbitShip200Response>> {
        const requestContextPromise = this.requestFactory.orbitShip(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orbitShipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Attempt to move your ship into orbit at its current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  Orbiting ships are able to do actions that require the ship to be above surface such as navigating or extracting, but cannot access elements in their current waypoint, such as the market or a shipyard.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
     * Orbit Ship
     * @param shipSymbol The symbol of the ship.
     */
    public orbitShip(shipSymbol: string, _options?: Configuration): Observable<OrbitShip200Response> {
        return this.orbitShipWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<OrbitShip200Response>) => apiResponse.data));
    }

    /**
     * Update the nav configuration of a ship.  Currently only supports configuring the Flight Mode of the ship, which affects its speed and fuel consumption.
     * Patch Ship Nav
     * @param shipSymbol The ship symbol.
     * @param patchShipNavRequest 
     */
    public patchShipNavWithHttpInfo(shipSymbol: string, patchShipNavRequest?: PatchShipNavRequest, _options?: Configuration): Observable<HttpInfo<GetShipNav200Response>> {
        const requestContextPromise = this.requestFactory.patchShipNav(shipSymbol, patchShipNavRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchShipNavWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the nav configuration of a ship.  Currently only supports configuring the Flight Mode of the ship, which affects its speed and fuel consumption.
     * Patch Ship Nav
     * @param shipSymbol The ship symbol.
     * @param patchShipNavRequest 
     */
    public patchShipNav(shipSymbol: string, patchShipNavRequest?: PatchShipNavRequest, _options?: Configuration): Observable<GetShipNav200Response> {
        return this.patchShipNavWithHttpInfo(shipSymbol, patchShipNavRequest, _options).pipe(map((apiResponse: HttpInfo<GetShipNav200Response>) => apiResponse.data));
    }

    /**
     * Purchase cargo from a market.  The ship must be docked in a waypoint that has `Marketplace` trait, and the market must be selling a good to be able to purchase it.  The maximum amount of units of a good that can be purchased in each transaction are denoted by the `tradeVolume` value of the good, which can be viewed by using the Get Market action.  Purchased goods are added to the ship\'s cargo hold.
     * Purchase Cargo
     * @param shipSymbol The ship\&#39;s symbol.
     * @param purchaseCargoRequest 
     */
    public purchaseCargoWithHttpInfo(shipSymbol: string, purchaseCargoRequest?: PurchaseCargoRequest, _options?: Configuration): Observable<HttpInfo<PurchaseCargo201Response>> {
        const requestContextPromise = this.requestFactory.purchaseCargo(shipSymbol, purchaseCargoRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.purchaseCargoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Purchase cargo from a market.  The ship must be docked in a waypoint that has `Marketplace` trait, and the market must be selling a good to be able to purchase it.  The maximum amount of units of a good that can be purchased in each transaction are denoted by the `tradeVolume` value of the good, which can be viewed by using the Get Market action.  Purchased goods are added to the ship\'s cargo hold.
     * Purchase Cargo
     * @param shipSymbol The ship\&#39;s symbol.
     * @param purchaseCargoRequest 
     */
    public purchaseCargo(shipSymbol: string, purchaseCargoRequest?: PurchaseCargoRequest, _options?: Configuration): Observable<PurchaseCargo201Response> {
        return this.purchaseCargoWithHttpInfo(shipSymbol, purchaseCargoRequest, _options).pipe(map((apiResponse: HttpInfo<PurchaseCargo201Response>) => apiResponse.data));
    }

    /**
     * Purchase a ship from a Shipyard. In order to use this function, a ship under your agent\'s ownership must be in a waypoint that has the `Shipyard` trait, and the Shipyard must sell the type of the desired ship.  Shipyards typically offer ship types, which are predefined templates of ships that have dedicated roles. A template comes with a preset of an engine, a reactor, and a frame. It may also include a few modules and mounts.
     * Purchase Ship
     * @param purchaseShipRequest 
     */
    public purchaseShipWithHttpInfo(purchaseShipRequest?: PurchaseShipRequest, _options?: Configuration): Observable<HttpInfo<PurchaseShip201Response>> {
        const requestContextPromise = this.requestFactory.purchaseShip(purchaseShipRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.purchaseShipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Purchase a ship from a Shipyard. In order to use this function, a ship under your agent\'s ownership must be in a waypoint that has the `Shipyard` trait, and the Shipyard must sell the type of the desired ship.  Shipyards typically offer ship types, which are predefined templates of ships that have dedicated roles. A template comes with a preset of an engine, a reactor, and a frame. It may also include a few modules and mounts.
     * Purchase Ship
     * @param purchaseShipRequest 
     */
    public purchaseShip(purchaseShipRequest?: PurchaseShipRequest, _options?: Configuration): Observable<PurchaseShip201Response> {
        return this.purchaseShipWithHttpInfo(purchaseShipRequest, _options).pipe(map((apiResponse: HttpInfo<PurchaseShip201Response>) => apiResponse.data));
    }

    /**
     * Refuel your ship by buying fuel from the local market.  Requires the ship to be docked in a waypoint that has the `Marketplace` trait, and the market must be selling fuel in order to refuel.  Each fuel bought from the market replenishes 100 units in your ship\'s fuel.  Ships will always be refuel to their frame\'s maximum fuel capacity when using this action.
     * Refuel Ship
     * @param shipSymbol The ship symbol.
     * @param refuelShipRequest 
     */
    public refuelShipWithHttpInfo(shipSymbol: string, refuelShipRequest?: RefuelShipRequest, _options?: Configuration): Observable<HttpInfo<RefuelShip200Response>> {
        const requestContextPromise = this.requestFactory.refuelShip(shipSymbol, refuelShipRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.refuelShipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Refuel your ship by buying fuel from the local market.  Requires the ship to be docked in a waypoint that has the `Marketplace` trait, and the market must be selling fuel in order to refuel.  Each fuel bought from the market replenishes 100 units in your ship\'s fuel.  Ships will always be refuel to their frame\'s maximum fuel capacity when using this action.
     * Refuel Ship
     * @param shipSymbol The ship symbol.
     * @param refuelShipRequest 
     */
    public refuelShip(shipSymbol: string, refuelShipRequest?: RefuelShipRequest, _options?: Configuration): Observable<RefuelShip200Response> {
        return this.refuelShipWithHttpInfo(shipSymbol, refuelShipRequest, _options).pipe(map((apiResponse: HttpInfo<RefuelShip200Response>) => apiResponse.data));
    }

    /**
     * Remove a mount from a ship.  The ship must be docked in a waypoint that has the `Shipyard` trait, and must have the desired mount that it wish to remove installed.  A removal fee will be deduced from the agent by the Shipyard.
     * Remove Mount
     * @param shipSymbol The ship\&#39;s symbol.
     * @param removeMountRequest 
     */
    public removeMountWithHttpInfo(shipSymbol: string, removeMountRequest?: RemoveMountRequest, _options?: Configuration): Observable<HttpInfo<RemoveMount201Response>> {
        const requestContextPromise = this.requestFactory.removeMount(shipSymbol, removeMountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeMountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a mount from a ship.  The ship must be docked in a waypoint that has the `Shipyard` trait, and must have the desired mount that it wish to remove installed.  A removal fee will be deduced from the agent by the Shipyard.
     * Remove Mount
     * @param shipSymbol The ship\&#39;s symbol.
     * @param removeMountRequest 
     */
    public removeMount(shipSymbol: string, removeMountRequest?: RemoveMountRequest, _options?: Configuration): Observable<RemoveMount201Response> {
        return this.removeMountWithHttpInfo(shipSymbol, removeMountRequest, _options).pipe(map((apiResponse: HttpInfo<RemoveMount201Response>) => apiResponse.data));
    }

    /**
     * Repair a ship, restoring the ship to maximum condition. The ship must be docked at a waypoint that has the `Shipyard` trait in order to use this function. To preview the cost of repairing the ship, use the Get action.
     * Repair Ship
     * @param shipSymbol The ship symbol.
     */
    public repairShipWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<RepairShip200Response>> {
        const requestContextPromise = this.requestFactory.repairShip(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.repairShipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Repair a ship, restoring the ship to maximum condition. The ship must be docked at a waypoint that has the `Shipyard` trait in order to use this function. To preview the cost of repairing the ship, use the Get action.
     * Repair Ship
     * @param shipSymbol The ship symbol.
     */
    public repairShip(shipSymbol: string, _options?: Configuration): Observable<RepairShip200Response> {
        return this.repairShipWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<RepairShip200Response>) => apiResponse.data));
    }

    /**
     * Scrap a ship, removing it from the game and returning a portion of the ship\'s value to the agent. The ship must be docked in a waypoint that has the `Shipyard` trait in order to use this function. To preview the amount of value that will be returned, use the Get Ship action.
     * Scrap Ship
     * @param shipSymbol The ship symbol.
     */
    public scrapShipWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<ScrapShip200Response>> {
        const requestContextPromise = this.requestFactory.scrapShip(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.scrapShipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Scrap a ship, removing it from the game and returning a portion of the ship\'s value to the agent. The ship must be docked in a waypoint that has the `Shipyard` trait in order to use this function. To preview the amount of value that will be returned, use the Get Ship action.
     * Scrap Ship
     * @param shipSymbol The ship symbol.
     */
    public scrapShip(shipSymbol: string, _options?: Configuration): Observable<ScrapShip200Response> {
        return this.scrapShipWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<ScrapShip200Response>) => apiResponse.data));
    }

    /**
     * Sell cargo in your ship to a market that trades this cargo. The ship must be docked in a waypoint that has the `Marketplace` trait in order to use this function.
     * Sell Cargo
     * @param shipSymbol Symbol of a ship.
     * @param sellCargoRequest 
     */
    public sellCargoWithHttpInfo(shipSymbol: string, sellCargoRequest?: SellCargoRequest, _options?: Configuration): Observable<HttpInfo<SellCargo201Response>> {
        const requestContextPromise = this.requestFactory.sellCargo(shipSymbol, sellCargoRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sellCargoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sell cargo in your ship to a market that trades this cargo. The ship must be docked in a waypoint that has the `Marketplace` trait in order to use this function.
     * Sell Cargo
     * @param shipSymbol Symbol of a ship.
     * @param sellCargoRequest 
     */
    public sellCargo(shipSymbol: string, sellCargoRequest?: SellCargoRequest, _options?: Configuration): Observable<SellCargo201Response> {
        return this.sellCargoWithHttpInfo(shipSymbol, sellCargoRequest, _options).pipe(map((apiResponse: HttpInfo<SellCargo201Response>) => apiResponse.data));
    }

    /**
     * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request. In order to be able to refine, a ship must have goods that can be refined and have installed a `Refinery` module that can refine it.  When refining, 30 basic goods will be converted into 10 processed goods.
     * Ship Refine
     * @param shipSymbol The symbol of the ship.
     * @param shipRefineRequest 
     */
    public shipRefineWithHttpInfo(shipSymbol: string, shipRefineRequest?: ShipRefineRequest, _options?: Configuration): Observable<HttpInfo<ShipRefine201Response>> {
        const requestContextPromise = this.requestFactory.shipRefine(shipSymbol, shipRefineRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.shipRefineWithHttpInfo(rsp)));
            }));
    }

    /**
     * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request. In order to be able to refine, a ship must have goods that can be refined and have installed a `Refinery` module that can refine it.  When refining, 30 basic goods will be converted into 10 processed goods.
     * Ship Refine
     * @param shipSymbol The symbol of the ship.
     * @param shipRefineRequest 
     */
    public shipRefine(shipSymbol: string, shipRefineRequest?: ShipRefineRequest, _options?: Configuration): Observable<ShipRefine201Response> {
        return this.shipRefineWithHttpInfo(shipSymbol, shipRefineRequest, _options).pipe(map((apiResponse: HttpInfo<ShipRefine201Response>) => apiResponse.data));
    }

    /**
     * Siphon gases, such as hydrocarbon, from gas giants.  The ship must be in orbit to be able to siphon and must have siphon mounts and a gas processor installed.
     * Siphon Resources
     * @param shipSymbol The ship symbol.
     */
    public siphonResourcesWithHttpInfo(shipSymbol: string, _options?: Configuration): Observable<HttpInfo<SiphonResources201Response>> {
        const requestContextPromise = this.requestFactory.siphonResources(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.siphonResourcesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Siphon gases, such as hydrocarbon, from gas giants.  The ship must be in orbit to be able to siphon and must have siphon mounts and a gas processor installed.
     * Siphon Resources
     * @param shipSymbol The ship symbol.
     */
    public siphonResources(shipSymbol: string, _options?: Configuration): Observable<SiphonResources201Response> {
        return this.siphonResourcesWithHttpInfo(shipSymbol, _options).pipe(map((apiResponse: HttpInfo<SiphonResources201Response>) => apiResponse.data));
    }

    /**
     * Transfer cargo between ships.  The receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.  The response body\'s cargo shows the cargo of the transferring ship after the transfer is complete.
     * Transfer Cargo
     * @param shipSymbol The transferring ship\&#39;s symbol.
     * @param transferCargoRequest 
     */
    public transferCargoWithHttpInfo(shipSymbol: string, transferCargoRequest?: TransferCargoRequest, _options?: Configuration): Observable<HttpInfo<TransferCargo200Response>> {
        const requestContextPromise = this.requestFactory.transferCargo(shipSymbol, transferCargoRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transferCargoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Transfer cargo between ships.  The receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.  The response body\'s cargo shows the cargo of the transferring ship after the transfer is complete.
     * Transfer Cargo
     * @param shipSymbol The transferring ship\&#39;s symbol.
     * @param transferCargoRequest 
     */
    public transferCargo(shipSymbol: string, transferCargoRequest?: TransferCargoRequest, _options?: Configuration): Observable<TransferCargo200Response> {
        return this.transferCargoWithHttpInfo(shipSymbol, transferCargoRequest, _options).pipe(map((apiResponse: HttpInfo<TransferCargo200Response>) => apiResponse.data));
    }

    /**
     * Warp your ship to a target destination in another system. The ship must be in orbit to use this function and must have the `Warp Drive` module installed. Warping will consume the necessary fuel from the ship\'s manifest.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at its destination.
     * Warp Ship
     * @param shipSymbol The ship symbol.
     * @param navigateShipRequest 
     */
    public warpShipWithHttpInfo(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: Configuration): Observable<HttpInfo<WarpShip200Response>> {
        const requestContextPromise = this.requestFactory.warpShip(shipSymbol, navigateShipRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.warpShipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Warp your ship to a target destination in another system. The ship must be in orbit to use this function and must have the `Warp Drive` module installed. Warping will consume the necessary fuel from the ship\'s manifest.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at its destination.
     * Warp Ship
     * @param shipSymbol The ship symbol.
     * @param navigateShipRequest 
     */
    public warpShip(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: Configuration): Observable<WarpShip200Response> {
        return this.warpShipWithHttpInfo(shipSymbol, navigateShipRequest, _options).pipe(map((apiResponse: HttpInfo<WarpShip200Response>) => apiResponse.data));
    }

}

import { SystemsApiRequestFactory, SystemsApiResponseProcessor} from "../apis/SystemsApi.ts";
export class ObservableSystemsApi {
    private requestFactory: SystemsApiRequestFactory;
    private responseProcessor: SystemsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemsApiRequestFactory,
        responseProcessor?: SystemsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SystemsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SystemsApiResponseProcessor();
    }

    /**
     * Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
     * Get Construction Site
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getConstructionWithHttpInfo(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Observable<HttpInfo<GetConstruction200Response>> {
        const requestContextPromise = this.requestFactory.getConstruction(systemSymbol, waypointSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConstructionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
     * Get Construction Site
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getConstruction(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Observable<GetConstruction200Response> {
        return this.getConstructionWithHttpInfo(systemSymbol, waypointSymbol, _options).pipe(map((apiResponse: HttpInfo<GetConstruction200Response>) => apiResponse.data));
    }

    /**
     * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  Waypoints connected to this jump gate can be 
     * Get Jump Gate
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getJumpGateWithHttpInfo(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Observable<HttpInfo<GetJumpGate200Response>> {
        const requestContextPromise = this.requestFactory.getJumpGate(systemSymbol, waypointSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJumpGateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  Waypoints connected to this jump gate can be 
     * Get Jump Gate
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getJumpGate(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Observable<GetJumpGate200Response> {
        return this.getJumpGateWithHttpInfo(systemSymbol, waypointSymbol, _options).pipe(map((apiResponse: HttpInfo<GetJumpGate200Response>) => apiResponse.data));
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
     * Get Market
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getMarketWithHttpInfo(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Observable<HttpInfo<GetMarket200Response>> {
        const requestContextPromise = this.requestFactory.getMarket(systemSymbol, waypointSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMarketWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
     * Get Market
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getMarket(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Observable<GetMarket200Response> {
        return this.getMarketWithHttpInfo(systemSymbol, waypointSymbol, _options).pipe(map((apiResponse: HttpInfo<GetMarket200Response>) => apiResponse.data));
    }

    /**
     * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getShipyardWithHttpInfo(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Observable<HttpInfo<GetShipyard200Response>> {
        const requestContextPromise = this.requestFactory.getShipyard(systemSymbol, waypointSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getShipyardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getShipyard(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Observable<GetShipyard200Response> {
        return this.getShipyardWithHttpInfo(systemSymbol, waypointSymbol, _options).pipe(map((apiResponse: HttpInfo<GetShipyard200Response>) => apiResponse.data));
    }

    /**
     * Get the details of a system.
     * Get System
     * @param systemSymbol The system symbol
     */
    public getSystemWithHttpInfo(systemSymbol: string, _options?: Configuration): Observable<HttpInfo<GetSystem200Response>> {
        const requestContextPromise = this.requestFactory.getSystem(systemSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the details of a system.
     * Get System
     * @param systemSymbol The system symbol
     */
    public getSystem(systemSymbol: string, _options?: Configuration): Observable<GetSystem200Response> {
        return this.getSystemWithHttpInfo(systemSymbol, _options).pipe(map((apiResponse: HttpInfo<GetSystem200Response>) => apiResponse.data));
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
    public getSystemWaypointsWithHttpInfo(systemSymbol: string, page?: number, limit?: number, type?: WaypointType, traits?: GetSystemWaypointsTraitsParameter, _options?: Configuration): Observable<HttpInfo<GetSystemWaypoints200Response>> {
        const requestContextPromise = this.requestFactory.getSystemWaypoints(systemSymbol, page, limit, type, traits, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystemWaypointsWithHttpInfo(rsp)));
            }));
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
    public getSystemWaypoints(systemSymbol: string, page?: number, limit?: number, type?: WaypointType, traits?: GetSystemWaypointsTraitsParameter, _options?: Configuration): Observable<GetSystemWaypoints200Response> {
        return this.getSystemWaypointsWithHttpInfo(systemSymbol, page, limit, type, traits, _options).pipe(map((apiResponse: HttpInfo<GetSystemWaypoints200Response>) => apiResponse.data));
    }

    /**
     * Return a paginated list of all systems.
     * List Systems
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getSystemsWithHttpInfo(page?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<GetSystems200Response>> {
        const requestContextPromise = this.requestFactory.getSystems(page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return a paginated list of all systems.
     * List Systems
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getSystems(page?: number, limit?: number, _options?: Configuration): Observable<GetSystems200Response> {
        return this.getSystemsWithHttpInfo(page, limit, _options).pipe(map((apiResponse: HttpInfo<GetSystems200Response>) => apiResponse.data));
    }

    /**
     * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
     * Get Waypoint
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getWaypointWithHttpInfo(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Observable<HttpInfo<GetWaypoint200Response>> {
        const requestContextPromise = this.requestFactory.getWaypoint(systemSymbol, waypointSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWaypointWithHttpInfo(rsp)));
            }));
    }

    /**
     * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
     * Get Waypoint
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getWaypoint(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Observable<GetWaypoint200Response> {
        return this.getWaypointWithHttpInfo(systemSymbol, waypointSymbol, _options).pipe(map((apiResponse: HttpInfo<GetWaypoint200Response>) => apiResponse.data));
    }

    /**
     * Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.  The good must be in your ship\'s cargo. The good will be removed from your ship\'s cargo and added to the construction site\'s materials.
     * Supply Construction Site
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     * @param supplyConstructionRequest 
     */
    public supplyConstructionWithHttpInfo(systemSymbol: string, waypointSymbol: string, supplyConstructionRequest?: SupplyConstructionRequest, _options?: Configuration): Observable<HttpInfo<SupplyConstruction201Response>> {
        const requestContextPromise = this.requestFactory.supplyConstruction(systemSymbol, waypointSymbol, supplyConstructionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.supplyConstructionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.  The good must be in your ship\'s cargo. The good will be removed from your ship\'s cargo and added to the construction site\'s materials.
     * Supply Construction Site
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     * @param supplyConstructionRequest 
     */
    public supplyConstruction(systemSymbol: string, waypointSymbol: string, supplyConstructionRequest?: SupplyConstructionRequest, _options?: Configuration): Observable<SupplyConstruction201Response> {
        return this.supplyConstructionWithHttpInfo(systemSymbol, waypointSymbol, supplyConstructionRequest, _options).pipe(map((apiResponse: HttpInfo<SupplyConstruction201Response>) => apiResponse.data));
    }

}

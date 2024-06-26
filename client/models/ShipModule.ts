/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * OpenAPI spec version: 2.0.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ShipRequirements } from '../models/ShipRequirements.ts';
import { HttpFile } from '../http/http.ts';

/**
* A module can be installed in a ship and provides a set of capabilities such as storage space or quarters for crew. Module installations are permanent.
*/
export class ShipModule {
    /**
    * The symbol of the module.
    */
    'symbol': ShipModuleSymbolEnum;
    /**
    * Modules that provide capacity, such as cargo hold or crew quarters will show this value to denote how much of a bonus the module grants.
    */
    'capacity'?: number;
    /**
    * Modules that have a range will such as a sensor array show this value to denote how far can the module reach with its capabilities.
    */
    'range'?: number;
    /**
    * Name of this module.
    */
    'name': string;
    /**
    * Description of this module.
    */
    'description': string;
    'requirements': ShipRequirements;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "ShipModuleSymbolEnum",
            "format": ""
        },
        {
            "name": "capacity",
            "baseName": "capacity",
            "type": "number",
            "format": ""
        },
        {
            "name": "range",
            "baseName": "range",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "requirements",
            "baseName": "requirements",
            "type": "ShipRequirements",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ShipModule.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ShipModuleSymbolEnum {
    MineralProcessorI = 'MODULE_MINERAL_PROCESSOR_I',
    GasProcessorI = 'MODULE_GAS_PROCESSOR_I',
    CargoHoldI = 'MODULE_CARGO_HOLD_I',
    CargoHoldIi = 'MODULE_CARGO_HOLD_II',
    CargoHoldIii = 'MODULE_CARGO_HOLD_III',
    CrewQuartersI = 'MODULE_CREW_QUARTERS_I',
    EnvoyQuartersI = 'MODULE_ENVOY_QUARTERS_I',
    PassengerCabinI = 'MODULE_PASSENGER_CABIN_I',
    MicroRefineryI = 'MODULE_MICRO_REFINERY_I',
    OreRefineryI = 'MODULE_ORE_REFINERY_I',
    FuelRefineryI = 'MODULE_FUEL_REFINERY_I',
    ScienceLabI = 'MODULE_SCIENCE_LAB_I',
    JumpDriveI = 'MODULE_JUMP_DRIVE_I',
    JumpDriveIi = 'MODULE_JUMP_DRIVE_II',
    JumpDriveIii = 'MODULE_JUMP_DRIVE_III',
    WarpDriveI = 'MODULE_WARP_DRIVE_I',
    WarpDriveIi = 'MODULE_WARP_DRIVE_II',
    WarpDriveIii = 'MODULE_WARP_DRIVE_III',
    ShieldGeneratorI = 'MODULE_SHIELD_GENERATOR_I',
    ShieldGeneratorIi = 'MODULE_SHIELD_GENERATOR_II'
}


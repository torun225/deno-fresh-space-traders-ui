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
* A mount is installed on the exterier of a ship.
*/
export class ShipMount {
    /**
    * Symbo of this mount.
    */
    'symbol': ShipMountSymbolEnum;
    /**
    * Name of this mount.
    */
    'name': string;
    /**
    * Description of this mount.
    */
    'description'?: string;
    /**
    * Mounts that have this value, such as mining lasers, denote how powerful this mount\'s capabilities are.
    */
    'strength'?: number;
    /**
    * Mounts that have this value denote what goods can be produced from using the mount.
    */
    'deposits'?: Array<ShipMountDepositsEnum>;
    'requirements': ShipRequirements;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "ShipMountSymbolEnum",
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
            "name": "strength",
            "baseName": "strength",
            "type": "number",
            "format": ""
        },
        {
            "name": "deposits",
            "baseName": "deposits",
            "type": "Array<ShipMountDepositsEnum>",
            "format": ""
        },
        {
            "name": "requirements",
            "baseName": "requirements",
            "type": "ShipRequirements",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ShipMount.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ShipMountSymbolEnum {
    GasSiphonI = 'MOUNT_GAS_SIPHON_I',
    GasSiphonIi = 'MOUNT_GAS_SIPHON_II',
    GasSiphonIii = 'MOUNT_GAS_SIPHON_III',
    SurveyorI = 'MOUNT_SURVEYOR_I',
    SurveyorIi = 'MOUNT_SURVEYOR_II',
    SurveyorIii = 'MOUNT_SURVEYOR_III',
    SensorArrayI = 'MOUNT_SENSOR_ARRAY_I',
    SensorArrayIi = 'MOUNT_SENSOR_ARRAY_II',
    SensorArrayIii = 'MOUNT_SENSOR_ARRAY_III',
    MiningLaserI = 'MOUNT_MINING_LASER_I',
    MiningLaserIi = 'MOUNT_MINING_LASER_II',
    MiningLaserIii = 'MOUNT_MINING_LASER_III',
    LaserCannonI = 'MOUNT_LASER_CANNON_I',
    MissileLauncherI = 'MOUNT_MISSILE_LAUNCHER_I',
    TurretI = 'MOUNT_TURRET_I'
}
export enum ShipMountDepositsEnum {
    QuartzSand = 'QUARTZ_SAND',
    SiliconCrystals = 'SILICON_CRYSTALS',
    PreciousStones = 'PRECIOUS_STONES',
    IceWater = 'ICE_WATER',
    AmmoniaIce = 'AMMONIA_ICE',
    IronOre = 'IRON_ORE',
    CopperOre = 'COPPER_ORE',
    SilverOre = 'SILVER_ORE',
    AluminumOre = 'ALUMINUM_ORE',
    GoldOre = 'GOLD_ORE',
    PlatinumOre = 'PLATINUM_ORE',
    Diamonds = 'DIAMONDS',
    UraniteOre = 'URANITE_ORE',
    MeritiumOre = 'MERITIUM_ORE'
}


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

import { SystemType } from '../models/SystemType.ts';
import { HttpFile } from '../http/http.ts';

/**
* Details of a system was that scanned.
*/
export class ScannedSystem {
    /**
    * Symbol of the system.
    */
    'symbol': string;
    /**
    * Symbol of the system\'s sector.
    */
    'sectorSymbol': string;
    'type': SystemType;
    /**
    * Position in the universe in the x axis.
    */
    'x': number;
    /**
    * Position in the universe in the y axis.
    */
    'y': number;
    /**
    * The system\'s distance from the scanning ship.
    */
    'distance': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "sectorSymbol",
            "baseName": "sectorSymbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SystemType",
            "format": ""
        },
        {
            "name": "x",
            "baseName": "x",
            "type": "number",
            "format": ""
        },
        {
            "name": "y",
            "baseName": "y",
            "type": "number",
            "format": ""
        },
        {
            "name": "distance",
            "baseName": "distance",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ScannedSystem.attributeTypeMap;
    }

    public constructor() {
    }
}




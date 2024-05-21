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

import { HttpFile } from '../http/http.ts';

/**
* Agent details.
*/
export class Agent {
    /**
    * Account ID that is tied to this agent. Only included on your own agent.
    */
    'accountId'?: string;
    /**
    * Symbol of the agent.
    */
    'symbol': string;
    /**
    * The headquarters of the agent.
    */
    'headquarters': string;
    /**
    * The number of credits the agent has available. Credits can be negative if funds have been overdrawn.
    */
    'credits': number;
    /**
    * The faction the agent started with.
    */
    'startingFaction': string;
    /**
    * How many ships are owned by the agent.
    */
    'shipCount': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "headquarters",
            "baseName": "headquarters",
            "type": "string",
            "format": ""
        },
        {
            "name": "credits",
            "baseName": "credits",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "startingFaction",
            "baseName": "startingFaction",
            "type": "string",
            "format": ""
        },
        {
            "name": "shipCount",
            "baseName": "shipCount",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Agent.attributeTypeMap;
    }

    public constructor() {
    }
}


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

import { ContractTerms } from '../models/ContractTerms.ts';
import { HttpFile } from '../http/http.ts';

/**
* Contract details.
*/
export class Contract {
    /**
    * ID of the contract.
    */
    'id': string;
    /**
    * The symbol of the faction that this contract is for.
    */
    'factionSymbol': string;
    /**
    * Type of contract.
    */
    'type': ContractTypeEnum;
    'terms': ContractTerms;
    /**
    * Whether the contract has been accepted by the agent
    */
    'accepted': boolean;
    /**
    * Whether the contract has been fulfilled
    */
    'fulfilled': boolean;
    /**
    * Deprecated in favor of deadlineToAccept
    */
    'expiration': Date;
    /**
    * The time at which the contract is no longer available to be accepted
    */
    'deadlineToAccept'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "factionSymbol",
            "baseName": "factionSymbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ContractTypeEnum",
            "format": ""
        },
        {
            "name": "terms",
            "baseName": "terms",
            "type": "ContractTerms",
            "format": ""
        },
        {
            "name": "accepted",
            "baseName": "accepted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fulfilled",
            "baseName": "fulfilled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "expiration",
            "baseName": "expiration",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "deadlineToAccept",
            "baseName": "deadlineToAccept",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return Contract.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ContractTypeEnum {
    Procurement = 'PROCUREMENT',
    Transport = 'TRANSPORT',
    Shuttle = 'SHUTTLE'
}


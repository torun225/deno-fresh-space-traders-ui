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

import { GetStatus200ResponseAnnouncementsInner } from '../models/GetStatus200ResponseAnnouncementsInner.ts';
import { GetStatus200ResponseLeaderboards } from '../models/GetStatus200ResponseLeaderboards.ts';
import { GetStatus200ResponseLinksInner } from '../models/GetStatus200ResponseLinksInner.ts';
import { GetStatus200ResponseServerResets } from '../models/GetStatus200ResponseServerResets.ts';
import { GetStatus200ResponseStats } from '../models/GetStatus200ResponseStats.ts';
import { HttpFile } from '../http/http.ts';

export class GetStatus200Response {
    /**
    * The current status of the game server.
    */
    'status': string;
    /**
    * The current version of the API.
    */
    'version': string;
    /**
    * The date when the game server was last reset.
    */
    'resetDate': string;
    'description': string;
    'stats': GetStatus200ResponseStats;
    'leaderboards': GetStatus200ResponseLeaderboards;
    'serverResets': GetStatus200ResponseServerResets;
    'announcements': Array<GetStatus200ResponseAnnouncementsInner>;
    'links': Array<GetStatus200ResponseLinksInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "resetDate",
            "baseName": "resetDate",
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
            "name": "stats",
            "baseName": "stats",
            "type": "GetStatus200ResponseStats",
            "format": ""
        },
        {
            "name": "leaderboards",
            "baseName": "leaderboards",
            "type": "GetStatus200ResponseLeaderboards",
            "format": ""
        },
        {
            "name": "serverResets",
            "baseName": "serverResets",
            "type": "GetStatus200ResponseServerResets",
            "format": ""
        },
        {
            "name": "announcements",
            "baseName": "announcements",
            "type": "Array<GetStatus200ResponseAnnouncementsInner>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<GetStatus200ResponseLinksInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetStatus200Response.attributeTypeMap;
    }

    public constructor() {
    }
}


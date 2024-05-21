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

import { MarketTradeGood } from '../models/MarketTradeGood.ts';
import { MarketTransaction } from '../models/MarketTransaction.ts';
import { TradeGood } from '../models/TradeGood.ts';
import { HttpFile } from '../http/http.ts';

/**
* 
*/
export class Market {
    /**
    * The symbol of the market. The symbol is the same as the waypoint where the market is located.
    */
    'symbol': string;
    /**
    * The list of goods that are exported from this market.
    */
    'exports': Array<TradeGood>;
    /**
    * The list of goods that are sought as imports in this market.
    */
    'imports': Array<TradeGood>;
    /**
    * The list of goods that are bought and sold between agents at this market.
    */
    'exchange': Array<TradeGood>;
    /**
    * The list of recent transactions at this market. Visible only when a ship is present at the market.
    */
    'transactions'?: Array<MarketTransaction>;
    /**
    * The list of goods that are traded at this market. Visible only when a ship is present at the market.
    */
    'tradeGoods'?: Array<MarketTradeGood>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "exports",
            "baseName": "exports",
            "type": "Array<TradeGood>",
            "format": ""
        },
        {
            "name": "imports",
            "baseName": "imports",
            "type": "Array<TradeGood>",
            "format": ""
        },
        {
            "name": "exchange",
            "baseName": "exchange",
            "type": "Array<TradeGood>",
            "format": ""
        },
        {
            "name": "transactions",
            "baseName": "transactions",
            "type": "Array<MarketTransaction>",
            "format": ""
        },
        {
            "name": "tradeGoods",
            "baseName": "tradeGoods",
            "type": "Array<MarketTradeGood>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Market.attributeTypeMap;
    }

    public constructor() {
    }
}


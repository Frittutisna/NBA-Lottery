// Config file for the 2022 NBA Draft Lottery

// Number of lottery teams
export const lotteryTeams = 4;

/**
 * @typedef     {Object}        LotteryTeam
 * @property    {number}        pre-draft-order     - 0-indexed pre-draft order based on regular season standings
 * @property    {string}        pre-order-name      - Pre-draft pick holder
 * @property    {number}        chance              - Number of lottery combinations out of 1000 assigned to this slot
 * @property    {number}        actual-order        - Real-life post-draft order
 * @property    {number | null} upper-limit         - Top-inclusive rank for the pick to remain with pre-draft-name
 * @property    {number | null} lower-limit         - Bottom-inclusive rank for the pick to remain with pre-draft-name
 * @property    {string | null} alternative-name    - New pick holder if it's drawn outside upper/lower-limit range
 */

export const lotteryData    = [
    {
        "pre-draft-order"   : 0,
        "pre-order-name"    : "Houston Rockets",
        "chance"            : 140,
        "actual-order"      : 2
    }, {
        "pre-draft-order"   : 1,
        "pre-order-name"    : "Orlando Magic",
        "chance"            : 140,
        "actual-order"      : 0
    }, {
        "pre-draft-order"   : 2,
        "pre-order-name"    : "Detroit Pistons",
        "chance"            : 140,
        "actual-order"      : 4
    }, {
        "pre-draft-order"   : 3,
        "pre-order-name"    : "Oklahoma City Thunder",
        "chance"            : 125,
        "actual-order"      : 1
    }, {
        "pre-draft-order"   : 4,
        "pre-order-name"    : "Indiana Pacers",
        "chance"            : 105,
        "actual-order"      : 5
    }, {
        "pre-draft-order"   : 5,
        "pre-order-name"    : "Portland Trail Blazers",
        "chance"            : 90,
        "actual-order"      : 6
    }, {
        "pre-draft-order"   : 6,
        "pre-order-name"    : "Sacramento Kings",
        "chance"            : 75,
        "actual-order"      : 3
    }, {
        "pre-draft-order"   : 7,
        "pre-order-name"    : "New Orleans Pelicans",
        "chance"            : 60,
        "actual-order"      : 7,
        "upper-limit"       : 0,
        "lower-limit"       : 9,
        "alternative-name"  : "Memphis Grizzlies"
    }, {
        "pre-draft-order"   : 8,
        "pre-order-name"    : "San Antonio Spurs",
        "chance"            : 45,
        "actual-order"      : 8
    }, {
        "pre-draft-order"   : 9,
        "pre-order-name"    : "Washington Wizards",
        "chance"            : 30,
        "actual-order"      : 9
    }, {
        "pre-draft-order"   : 10,
        "pre-order-name"    : "New York Knicks",
        "chance"            : 20,
        "actual-order"      : 10
    }, {
        "pre-draft-order"   : 11,
        "pre-order-name"    : "Oklahoma City Thunder (via LAC)",
        "chance"            : 15,
        "actual-order"      : 11
    }, {
        "pre-draft-order"   : 12,
        "pre-order-name"    : "Charlotte Hornets",
        "chance"            : 10,
        "actual-order"      : 12
    }, {
        "pre-draft-order"   : 13,
        "pre-order-name"    : "Cleveland Cavaliers",
        "chance"            : 5,
        "actual-order"      : 13
    }
];
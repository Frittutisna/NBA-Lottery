// Config file for the 2024 NBA Draft Lottery

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
        "pre-order-name"    : "Detroit Pistons",
        "chance"            : 140,
        "actual-order"      : 4
    }, {
        "pre-draft-order"   : 1,
        "pre-order-name"    : "Washington Wizards",
        "chance"            : 140,
        "actual-order"      : 1
    }, {
        "pre-draft-order"   : 2,
        "pre-order-name"    : "Charlotte Hornets",
        "chance"            : 133,
        "actual-order"      : 5
    }, {
        "pre-draft-order"   : 3,
        "pre-order-name"    : "Portland Trail Blazers",
        "chance"            : 132,
        "actual-order"      : 6
    }, {
        "pre-draft-order"   : 4,
        "pre-order-name"    : "San Antonio Spurs",
        "chance"            : 105,
        "actual-order"      : 3
    }, {
        "pre-draft-order"   : 5,
        "pre-order-name"    : "Toronto Raptors",
        "chance"            : 90,
        "actual-order"      : 7,
        "upper-limit"       : 0,
        "lower-limit"       : 5,
        "alternative-name"  : "San Antonio Spurs"
    }, {
        "pre-draft-order"   : 6,
        "pre-order-name"    : "Memphis Grizzlies",
        "chance"            : 75,
        "actual-order"      : 8
    }, {
        "pre-draft-order"   : 7,
        "pre-order-name"    : "Utah Jazz",
        "chance"            : 60,
        "actual-order"      : 9,
        "upper-limit"       : 0,
        "lower-limit"       : 9,
        "alternative-name"  : "Oklahoma City Thunder"
    }, {
        "pre-draft-order"   : 8,
        "pre-order-name"    : "Brooklyn Nets",
        "chance"            : 45,
        "actual-order"      : 2
    }, {
        "pre-draft-order"   : 9,
        "pre-order-name"    : "Atlanta Hawks",
        "chance"            : 30,
        "actual-order"      : 0
    }, {
        "pre-draft-order"   : 10,
        "pre-order-name"    : "Chicago Bulls",
        "chance"            : 20,
        "actual-order"      : 10
    }, {
        "pre-draft-order"   : 11,
        "pre-order-name"    : "Houston Rockets",
        "chance"            : 15,
        "actual-order"      : 11,
        "upper-limit"       : 0,
        "lower-limit"       : 3,
        "alternative-name"  : "Oklahoma City Thunder"
    }, {
        "pre-draft-order"   : 12,
        "pre-order-name"    : "Sacramento Kings",
        "chance"            : 8,
        "actual-order"      : 12
    }, {
        "pre-draft-order"   : 13,
        "pre-order-name"    : "Golden State Warriors",
        "chance"            : 7,
        "actual-order"      : 13,
        "upper-limit"       : 0,
        "lower-limit"       : 3,
        "alternative-name"  : "Portland Trail Blazers"
    }
];
// Config file for the 2013 NBA Draft Lottery

// Number of lottery teams
export const lotteryTeams = 3;

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
        "pre-order-name"    : "Orlando Magic",
        "chance"            : 250,
        "actual-order"      : 1
    }, {
        "pre-draft-order"   : 1,
        "pre-order-name"    : "Charlotte Bobcats",
        "chance"            : 199,
        "actual-order"      : 3
    }, {
        "pre-draft-order"   : 2,
        "pre-order-name"    : "Cleveland Cavaliers",
        "chance"            : 156,
        "actual-order"      : 0
    }, {
        "pre-draft-order"   : 3,
        "pre-order-name"    : "Phoenix Suns",
        "chance"            : 119,
        "actual-order"      : 4
    }, {
        "pre-draft-order"   : 4,
        "pre-order-name"    : "New Orleans Pelicans",
        "chance"            : 88,
        "actual-order"      : 5
    }, {
        "pre-draft-order"   : 5,
        "pre-order-name"    : "Sacramento Kings",
        "chance"            : 63,
        "actual-order"      : 6
    }, {
        "pre-draft-order"   : 6,
        "pre-order-name"    : "Detroit Pistons",
        "chance"            : 36,
        "actual-order"      : 7
    }, {
        "pre-draft-order"   : 7,
        "pre-order-name"    : "Washington Wizards",
        "chance"            : 35,
        "actual-order"      : 2
    }, {
        "pre-draft-order"   : 8,
        "pre-order-name"    : "Minnesota Timberwolves",
        "chance"            : 17,
        "actual-order"      : 8
    }, {
        "pre-draft-order"   : 9,
        "pre-order-name"    : "Portland Trail Blazers",
        "chance"            : 11,
        "actual-order"      : 9
    }, {
        "pre-draft-order"   : 10,
        "pre-order-name"    : "Philadelphia 76ers",
        "chance"            : 8,
        "actual-order"      : 10
    }, {
        "pre-draft-order"   : 11,
        "pre-order-name"    : "Toronto Raptors",
        "chance"            : 7,
        "actual-order"      : 11,
        "upper-limit"       : 0,
        "lower-limit"       : 2,
        "alternative-name"  : "Oklahoma City Thunder"
    }, {
        "pre-draft-order"   : 12,
        "pre-order-name"    : "Dallas Mavericks",
        "chance"            : 6,
        "actual-order"      : 12
    }, {
        "pre-draft-order"   : 13,
        "pre-order-name"    : "Utah Jazz",
        "chance"            : 5,
        "actual-order"      : 13
    }
];
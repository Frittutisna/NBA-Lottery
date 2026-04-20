// Tentative config file for the 2026 NBA Draft Lottery

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
        "pre-order-name"    : "Washington Wizards",
        "chance"            : 140,
        "actual-order"      : -1
    }, {
        "pre-draft-order"   : 1,
        "pre-order-name"    : "Indiana Pacers",
        "chance"            : 140,
        "actual-order"      : -1,
        "upper-limit"       : 0,
        "lower-limit"       : 3,
        "alternative-name"  : "Los Angeles Clippers"
    }, {
        "pre-draft-order"   : 2,
        "pre-order-name"    : "Brooklyn Nets",
        "chance"            : 140,
        "actual-order"      : -1
    }, {
        "pre-draft-order"   : 3,
        "pre-order-name"    : "Utah Jazz",
        "chance"            : 115,
        "actual-order"      : -1
    }, {
        "pre-draft-order"   : 4,
        "pre-order-name"    : "Sacramento Kings",
        "chance"            : 115,
        "actual-order"      : -1
    }, {
        "pre-draft-order"   : 5,
        "pre-order-name"    : "Memphis Grizzlies",
        "chance"            : 90,
        "actual-order"      : -1
    }, {
        "pre-draft-order"   : 6,
        "pre-order-name"    : "Atlanta Hawks",
        "chance"            : 68,
        "actual-order"      : -1,
        "swap-with"         : "Milwaukee Bucks"
    }, {
        "pre-draft-order"   : 7,
        "pre-order-name"    : "Dallas Mavericks",
        "chance"            : 67,
        "actual-order"      : -1
    }, {
        "pre-draft-order"   : 8,
        "pre-order-name"    : "Chicago Bulls",
        "chance"            : 45,
        "actual-order"      : -1
    }, {
        "pre-draft-order"   : 9,
        "pre-order-name"    : "Milwaukee Bucks",
        "chance"            : 30,
        "actual-order"      : -1
    }, {
        "pre-draft-order"   : 10,
        "pre-order-name"    : "Golden State Warriors",
        "chance"            : 20,
        "actual-order"      : -1
    }, {
        "pre-draft-order"   : 11,
        "pre-order-name"    : "Oklahoma City Thunder",
        "chance"            : 15,
        "actual-order"      : -1
    }, {
        "pre-draft-order"   : 12,
        "pre-order-name"    : "Miami Heat",
        "chance"            : 10,
        "actual-order"      : -1
    }, {
        "pre-draft-order"   : 13,
        "pre-order-name"    : "Charlotte Hornets",
        "chance"            : 5,
        "actual-order"      : -1
    }
];
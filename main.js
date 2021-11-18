var response = require("./response.json");
var dates = response.data.dates;
var pricingOptions = response.data.pricing_options;

// mapping sessions
var sessions = [];
Object.keys(dates).forEach(function (date) {
  Object.keys(dates[date]).forEach(function (el) {
    sessions = sessions.concat(dates[date][el]);
  });
});

/**
 * No. 1
 *
 * @return All the pricing options available for session ID 47567
 */

var sessionId = 47567;

var session = sessions.find(({ session_id }) => session_id === sessionId);
var pricing_option_ids = session.pricing_option_ids;
var pricing_options = [];

pricing_option_ids.forEach(function (el) {
  pricing_options.push(pricingOptions.find(({ id }) => id === el));
});

// return result 1
var result_1 = {
  pricing_options,
};
console.log(result_1);

/**
 * No. 2
 *
 * @return All the sessions that are eligible for pricing option ID 369
 */
var optionId_2 = 369;

var sessions_eligible = sessions.filter(function (el) {
  return el.pricing_option_ids.includes(optionId_2);
});

// return result 2
var result_2 = {
  sessions_eligible,
};
console.log("\n\n");
console.log(result_2);

/**
 * No. 2
 *
 * @return All the sessions that are eligible for pricing option ID 327
 */
var optionId_3 = 327;

sessions_eligible = sessions.filter(function (el) {
  return el.pricing_option_ids.includes(optionId_3);
});

// return result 2
var result_3 = {
  sessions_eligible,
};
console.log("\n\n");
console.log(result_3);

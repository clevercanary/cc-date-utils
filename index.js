"use strict";
//
// Index.js
//
var moment = require("moment-timezone");

/**
 * @param {String} timezone - http://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
module.exports = function(timezone) {

    return new CcDateUtils(timezone);
};


function CcDateUtils(timezone) {

    this._timezone = timezone || "Etc/UTC";

    /**
     * @param {String} timezone
     */
    this.setTimezone = function(timezone) {
        if (timezone) {
            this._timezone = timezone;
        }
    };

    /**
     * @returns {Date}
     */
    this.maxDate = function() {
        return moment("9999-01-01").tz(this._timezone).toDate();
    };

    /**
     * @returns {Number}
     */
    this.getTimezoneOffset = function() {
        return moment().tz(this._timezone).utcOffset();
    }
}

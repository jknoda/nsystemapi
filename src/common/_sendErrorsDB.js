const _ = require('lodash');

function dbError(res, dbErrors) {
    const errors = [];
    _.forIn(dbErrors.errors, error => errors.push(error.message));
    return res.status(400).json({ error:"true", errors, msg:dbErrors.message });
}

module.exports = dbError;


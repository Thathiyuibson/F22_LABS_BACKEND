'use strict';

/**
 * singleblog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::singleblog.singleblog');

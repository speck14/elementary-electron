'use strict'

const pic = require('cat-picture');
const image = require('lightning-image-poly');

const src= pic.src;
pic.remove();

const viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});
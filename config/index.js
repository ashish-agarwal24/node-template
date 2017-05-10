'use strict';

// import _ from 'lodash';
import common from './env/common.js';

// const uri = './env/' + process.env.NODE_ENV + '.js'
// console.log(uri);
//
// import a from uri;

// const index = _.extend(
//   require(__dirname + '/env/common.js'),
//   require(__dirname + '/env/' + process.env.NODE_ENV + '.js') || {}
// );

const index = common;

export default index;

'use strict';

import path from 'path';
const rootPath = path.normalize(__dirname + '/../..');

const common = {
    root: rootPath,
    port: process.env.PORT || 3000,
    db: process.env.COUCHBASE_URL,
    jwtSecret: '',
    jwtRefreshSecret: '',
    refreshExpiry: '',
    cryptoKey: '',
    authExpiry: '',
    s3: {
        accessKeyId: '',
        secretAccessKey: '',
        bucket: ''
    },
};

export default common;

module.exports = {
    // nsystemapi
    // dialect: 'mysql',
    // host: 'us-cdbr-east-04.cleardb.com',
    // timezone: "-03:00",
    // username: 'bc466a0a0f6f3c',
    // password: '24cb7c0b',
    // database: 'heroku_af970ad18f26c07',
    // define: {
    //     timestamps: false
    // }

    //yamazakijudoapi
    //dialect: 'mysql',
    //host: 'us-cdbr-east-04.cleardb.com',
    //timezone: "-03:00",
    //username: 'b7a0a0d9997a24',
    //password: '57c8ca9b',
    //database: 'heroku_75966b25f38e6d4',
    //define: {
        //timestamps: false
    //}

    dialect: 'postgres',
    host: 'ec2-3-209-124-113.compute-1.amazonaws.com',
    timezone: "-03:00",
    username: 'tsbhfkrmyvtnwc',
    password: '7ee7121eedf3614dd978fa8939c1564240565e46e2aacac8d9cbac5a1bd0e372',
    database: 'd2bla5tdfq38ib',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    define: {
        schema: 'yamazaki',        
        timestamps: false
    }

}
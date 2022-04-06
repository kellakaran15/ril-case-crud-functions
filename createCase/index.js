const MongoClient = require('../api/dbConnect');
const { config } = require('../config');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const client = await MongoClient;
    const db = await client.db(config.MONGO_DB);
    const caseHeader = await db.collection("caseHeader").insertOne(req.body);

    const responseMessage = caseHeader;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
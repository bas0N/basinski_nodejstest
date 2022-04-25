const AWS = require("aws-sdk");
//connecting to db
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  //parsing body request
  let requestJSON = JSON.parse(JSON.stringify(event.body));
  //generating random uuid
  let id = await AWS.util.uuid.v4();
  //request parameters error handling
  if (!requestJSON.firstName || !requestJSON.age) {
    return { statusCode: 400, body: "Incorrect body!" };
  }
  //creating params object to be added
  var params = {
    TableName: "users",
    Item: {
      user_id: id,
      firstName: requestJSON.firstName,
      age: requestJSON.age,
    },
  };
  //adding element to dynamodb
  try {
    await dynamo.put(params).promise();
    return { body: "Successfully created item!", id: id };
  } catch (err) {
    return { error: err };
  }
};

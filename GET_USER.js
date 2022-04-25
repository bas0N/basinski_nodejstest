
const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {

//creating params
  const params = {
    TableName: "users",
    //assigning value to be searched for
    KeyConditionExpression: `user_id = :id`,
    ExpressionAttributeValues: {
    //obtaining id value form the body
      ":id": JSON.parse(JSON.stringify(event.id)),
    },
  };

  try {
    //conducting search
    let data = await dynamo.query(params).promise();

    //error handling
    if (!data.Items[0]) {
      return { statusCode: 404 };
    }
    return data.Items[0];
  } catch (error) {
    return { statusCode: 404, error: error.stack };
  }
};

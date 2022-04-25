const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  let requestJSON =  JSON.parse(JSON.stringify(event.body))
  let id=await AWS.util.uuid.v4();
  if(!requestJSON.firstName||!requestJSON.age){
    return{statusCode:400,body: 'Incorrect body!'}
  }
  var params = {
  TableName: 'users',
  Item: {
    'user_id':id,
    'firstName' :requestJSON.firstName,
    'age' : requestJSON.age,
  }
};
  try {
   await dynamo.put(params).promise();
    return { body: 'Successfully created item!',
    id:id};
  } catch (err) {
    return { error: err };
  }
};


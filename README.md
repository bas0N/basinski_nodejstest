# basinski_nodejstest basic aws api

The following API takes advantage of AWS services, and with a use of Amazon's API Gateway,
lambda functions and DynamoDB allows to add items to the DB and retrieve them.

It set up on the following URL: https://s113h98jyg.execute-api.us-east-1.amazonaws.com/prod/

It works with the following endpoints:

- /user
- - / `POST` | `GET`

## User

### Add a user

Adds a user item to the DynamoDB and returns an id of created user.

- **URL**

 https://s113h98jyg.execute-api.us-east-1.amazonaws.com/prod/users

- **Method:**

  `POST`

- **URL Params**
  
  None
  
- **Data Params**
```
{
"body":
  {
    "firstName":[string]
    "age":[number]
  }
}
```

- **Success Response:**

  - **Code:** 201 CREATED <br />
    **Content:** ` 
    { statusCode:201, 
    body: 'Successfully created item!',
    id:[id of the user created]};`

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ statusCode:400,error: err }`
    
 - **Sample call:**

- - **URL**

     https://s113h98jyg.execute-api.us-east-1.amazonaws.com/prod/users?id=f566c8b6-6edd-4055-80c6-cc0ca20ad012

- - **Body**
      ```
      {
      "body":
        {
          "firstName":"John"
          "age":"22"
        }
      }
      ```


### Get a user

Allows to retrive user from the dynamoDB using its id.

- **URL**

 https://s113h98jyg.execute-api.us-east-1.amazonaws.com/prod/users/id?=_id
 
 
- **Method:**

  `GET  `

- **URL Params**
- 
  **Required:**

  `_id:[string]`  
  
- **Data Params**

None

- **Success Response:**

  - **Code:** 200 Successful request and response. <br />
    **Content:** `
       {statusCode:200,
        object:[user object from the db]
        }` 

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{statusCode:404,  error:error.stack}`
    
        
 - **Sample call:**

- - **URL**

     https://s113h98jyg.execute-api.us-east-1.amazonaws.com/prod/users?id=f566c8b6-6edd-4055-80c6-cc0ca20ad012

- - **Body**

     None
    

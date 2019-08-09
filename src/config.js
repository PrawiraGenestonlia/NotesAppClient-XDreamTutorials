export default {
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-tutorials"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://wabtm9y7pi.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_zoelIIwPx",
    APP_CLIENT_ID: "1pm7vunr6ifqp0970430jep0h1",
    IDENTITY_POOL_ID: "us-west-2:5859dd7c-2e15-438b-8fb4-fe308575ffc5"
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};
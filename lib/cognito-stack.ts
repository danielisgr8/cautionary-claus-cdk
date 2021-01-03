import * as cdk from "@aws-cdk/core";
import * as cognito from "@aws-cdk/aws-cognito";

export class CautionaryClausCognitoStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new cognito.UserPool(this, "CautionaryClausUserPool", {
      userPoolName: "Cautionary Claus User Pool",
      accountRecovery: cognito.AccountRecovery.NONE,
      enableSmsRole: false,
      passwordPolicy: {
        minLength: 4,
        requireDigits: false,
        requireLowercase: false,
        requireSymbols: false,
        requireUppercase: false
      }
    });
  }
}

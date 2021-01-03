import * as cdk from "@aws-cdk/core";
import * as amplify from "@aws-cdk/aws-amplify";
import { GitHubSourceCodeProvider } from "@aws-cdk/aws-amplify";

export class CautionaryClausAmplifyStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new amplify.App(this, "CautionaryClausWebsite", {
      appName: "Cautionary Claus Website",
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: "danielisgr&",
        repository: "cautionary-claus-website",
        oauthToken: cdk.SecretValue.plainText(process.env.PAT as string)
      })
    });
  }
}

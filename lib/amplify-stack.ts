import * as cdk from "@aws-cdk/core";
import * as amplify from "@aws-cdk/aws-amplify";
import { GitHubSourceCodeProvider } from "@aws-cdk/aws-amplify";
import { buildId } from "./util";

export class ConfidentialClausAmplifyStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApp = new amplify.App(this, buildId("Website"), {
      appName: "Confidential Claus Website",
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: "danielisgr8",
        repository: "confidential-claus-website",
        oauthToken: cdk.SecretValue.plainText(process.env.PAT as string)
      })
    });
    amplifyApp.addCustomRule(amplify.CustomRule.SINGLE_PAGE_APPLICATION_REDIRECT);
    const main = amplifyApp.addBranch("main");
    const domain = amplifyApp.addDomain("cc.danielschubert.dev");
    domain.mapRoot(main);
  }
}

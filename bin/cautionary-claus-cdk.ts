#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { CautionaryClausAmplifyStack } from "../lib/amplify-stack";
import { CautionaryClausCognitoStack } from "../lib/cognito-stack";
import { CautionaryClausRestApiStack } from "../lib/rest-api-stack";
import { buildId } from "../lib/util";

const app = new cdk.App();
new CautionaryClausAmplifyStack(app, buildId("AmplifyStack"));
new CautionaryClausCognitoStack(app, buildId("CognitoStack"));
new CautionaryClausRestApiStack(app, buildId("RestAPIStack"));

#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { CautionaryClausAmplifyStack } from "../lib/amplify-stack";
import { CautionaryClausCognitoStack } from "../lib/cognito-stack";

const app = new cdk.App();
new CautionaryClausAmplifyStack(app, "CautionaryClausAmplifyStack");
new CautionaryClausCognitoStack(app, "CautionaryClausCognitoStack");

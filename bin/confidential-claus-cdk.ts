#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { ConfidentialClausAmplifyStack } from "../lib/amplify-stack";
import { ConfidentialClausRestApiStack } from "../lib/rest-api-stack";
import { buildId } from "../lib/util";

const app = new cdk.App();
new ConfidentialClausAmplifyStack(app, buildId("AmplifyStack"));
new ConfidentialClausRestApiStack(app, buildId("RestAPIStack"));

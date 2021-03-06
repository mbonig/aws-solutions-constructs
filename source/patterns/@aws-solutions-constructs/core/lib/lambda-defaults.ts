/**
 *  Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance
 *  with the License. A copy of the License is located at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions
 *  and limitations under the License.
 */

import * as lambda from '@aws-cdk/aws-lambda';
import * as iam from '@aws-cdk/aws-iam';

export function DefaultLambdaFunctionProps(lambdaServiceRole: iam.Role): lambda.FunctionProps | any {

  const lambdaFunctionProps: lambda.FunctionProps | any = {
    role: lambdaServiceRole
  };

  return lambdaFunctionProps;
}

export function DefaultLambdaFunctionPropsForNodeJS(lambdaServiceRole: iam.Role): lambda.FunctionProps | any {

  const lambdaFunctionProps: lambda.FunctionProps | any = {
    role: lambdaServiceRole,
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1'
    }
  };

  return lambdaFunctionProps;
}
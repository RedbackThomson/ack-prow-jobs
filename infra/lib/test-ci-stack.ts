import * as cdk from '@aws-cdk/core';
import { CICluster } from './ci-cluster';

export class TestCIStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CICluster(this, 'ArgoCDCICluster');
  }
}

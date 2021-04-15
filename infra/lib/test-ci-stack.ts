import * as cdk from '@aws-cdk/core';
import { ProwSecretsChartProps } from './charts/prow-secrets';
import { CICluster, CIClusterProps } from './ci-cluster';

export const ARGOCD_NAMESPACE = "argocd";
export const PROW_NAMESPACE = "prow";

export type TestCIStackProps = cdk.StackProps & {
  clusterConfig: CIClusterProps
};

export class TestCIStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: TestCIStackProps) {
    super(scope, id, props);

    new CICluster(this, 'ArgoCDCICluster', props.clusterConfig);
  }
}

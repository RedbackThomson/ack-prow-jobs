import * as cdk from '@aws-cdk/core';
import * as eks from '@aws-cdk/aws-eks';
import * as cdk8s from 'cdk8s';
import {ArgoCDConfigurationChart} from './charts/argocd-configuration';

export class CICluster {
  constructor(scope: cdk.Construct, id: string) {
    const cluster = new eks.Cluster(scope, id, {
      version: eks.KubernetesVersion.V1_19,
    })

    const argoCDChart = 
      cluster.addHelmChart('argocd', {
        chart: 'argo-cd',
        repository: 'https://argoproj.github.io/argo-helm',
        version: '2.11.0',
        namespace: 'argocd',
        values: {
          "server.service.type": "LoadBalancer"
        }
      });

    // const argoCDConfigChart = 
    //   cluster.addCdk8sChart('argocd-configuration', new ArgoCDConfigurationChart(
    //     new cdk8s.App(), 'ArgoCDConfiguration', { }
    //   ));

    // // Install in order
    // argoCDConfigChart.node.addDependency(argoCDChart);
  }
}

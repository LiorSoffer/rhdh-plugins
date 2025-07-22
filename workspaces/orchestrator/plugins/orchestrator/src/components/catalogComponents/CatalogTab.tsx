/*
 * Copyright Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import { useAsync } from 'react-use';

import { useApi } from '@backstage/core-plugin-api';
import { useEntity } from '@backstage/plugin-catalog-react';

import { NestedFilter } from '@red-hat-developer-hub/backstage-plugin-orchestrator-common';

import { orchestratorApiRef } from '../../api';
import { WorkflowsTabContent } from '../OrchestratorPage/WorkflowsTabContent';

export const IsOrchestratorCatalogTabAvailable = () => {
  const { entity } = useEntity();
  return Boolean(entity.metadata.annotations?.['orchestrator.io/workflows']);
};

export type EntityRef = `${string}:${string}/${string}`;

export const OrchestratorCatalogTab = () => {
  const { entity } = useEntity();
  const orchestratorApi = useApi(orchestratorApiRef);

  const rawAnnotation =
    entity.metadata.annotations?.['orchestrator.io/workflows'];
  let annotatedWorkflowIds: string[] = [];

  try {
    const parsed = rawAnnotation && JSON.parse(rawAnnotation);
    if (Array.isArray(parsed)) {
      annotatedWorkflowIds = parsed;
    }
  } catch {
    annotatedWorkflowIds = [];
  }

  const kind = entity.kind;
  const namespace = entity.metadata.namespace ?? 'default';
  const name = entity.metadata.name;
  const entityTarget = `${kind}:${namespace}/${name}`.toLocaleLowerCase();

  const {
    // loading,
    value = [],
    // error,
  } = useAsync(async () => {
    const nestedVariablesFilter: NestedFilter = {
      field: 'variables',
      nested: {
        operator: 'EQ',
        field: 'targetEntity',
        value: entityTarget,
      },
    };

    const instances = await orchestratorApi.listInstances(
      undefined,
      nestedVariablesFilter,
    );

    return (
      instances?.data?.items
        ?.filter(instance => instance.targetEntity === entityTarget)
        .map(instance => instance.processId) ?? []
    );
  }, [orchestratorApi, kind, namespace, name]);

  let combinedWorkflowIds: string[] = [];

  if (
    Array.isArray(value) &&
    value.length > 0 &&
    Array.isArray(annotatedWorkflowIds) &&
    annotatedWorkflowIds.length > 0
  ) {
    combinedWorkflowIds = [...new Set([...value, ...annotatedWorkflowIds])];
  } else if (Array.isArray(value) && value.length > 0) {
    combinedWorkflowIds = value;
  } else if (
    Array.isArray(annotatedWorkflowIds) &&
    annotatedWorkflowIds.length > 0
  ) {
    combinedWorkflowIds = annotatedWorkflowIds;
  }
  return <WorkflowsTabContent workflowsArray={combinedWorkflowIds} />;
};

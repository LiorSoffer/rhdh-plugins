/*
 * Copyright 2024 The Backstage Authors
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
import {
  IntrospectionField,
  TypeKind,
  TypeName,
} from '@red-hat-developer-hub/backstage-plugin-orchestrator-common';

export const mockProcessInstanceArguments = {
  __type: {
    kind: 'INPUT_OBJECT',
    name: 'ProcessInstanceArgument',
    inputFields: [
      {
        name: 'and',
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'INPUT_OBJECT',
              name: 'ProcessInstanceArgument',
              ofType: null,
            },
          },
        },
      },
      {
        name: 'or',
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            kind: 'NON_NULL',
            name: null,
            ofType: {
              kind: 'INPUT_OBJECT',
              name: 'ProcessInstanceArgument',
              ofType: null,
            },
          },
        },
      },
      {
        name: 'not',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'ProcessInstanceArgument',
          ofType: null,
        },
      },
      {
        name: 'id',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'IdArgument',
          ofType: null,
        },
      },
      {
        name: 'processId',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'StringArgument',
          ofType: null,
        },
      },
      {
        name: 'processName',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'StringArgument',
          ofType: null,
        },
      },
      {
        name: 'parentProcessInstanceId',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'IdArgument',
          ofType: null,
        },
      },
      {
        name: 'rootProcessInstanceId',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'IdArgument',
          ofType: null,
        },
      },
      {
        name: 'rootProcessId',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'StringArgument',
          ofType: null,
        },
      },
      // {
      //   name: 'state',
      //   type: {
      //     kind: 'INPUT_OBJECT',
      //     name: 'ProcessInstanceStateArgument',
      //     ofType: null,
      //   },
      // },
      // {
      //   name: 'error',
      //   type: {
      //     kind: 'INPUT_OBJECT',
      //     name: 'ProcessInstanceErrorArgument',
      //     ofType: null,
      //   },
      // },
      // {
      //   name: 'nodes',
      //   type: {
      //     kind: 'INPUT_OBJECT',
      //     name: 'NodeInstanceArgument',
      //     ofType: null,
      //   },
      // },
      // {
      //   name: 'milestones',
      //   type: {
      //     kind: 'INPUT_OBJECT',
      //     name: 'MilestoneArgument',
      //     ofType: null,
      //   },
      // },
      {
        name: 'endpoint',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'StringArgument',
          ofType: null,
        },
      },
      // {
      //   name: 'roles',
      //   type: {
      //     kind: 'INPUT_OBJECT',
      //     name: 'StringArrayArgument',
      //     ofType: null,
      //   },
      // },
      {
        name: 'start',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'DateArgument',
          ofType: null,
        },
      },
      {
        name: 'end',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'DateArgument',
          ofType: null,
        },
      },
      // {
      //   name: 'addons',
      //   type: {
      //     kind: 'INPUT_OBJECT',
      //     name: 'StringArrayArgument',
      //     ofType: null,
      //   },
      // },
      {
        name: 'lastUpdate',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'DateArgument',
          ofType: null,
        },
      },
      {
        name: 'businessKey',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'StringArgument',
          ofType: null,
        },
      },
      {
        name: 'createdBy',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'StringArgument',
          ofType: null,
        },
      },
      {
        name: 'updatedBy',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'StringArgument',
          ofType: null,
        },
      },
    ],
  },
};

export const mockProcessInstanceIntrospection: IntrospectionField[] = [
  {
    name: 'id',
    type: {
      kind: TypeKind.InputObject,
      name: TypeName.Id,
      ofType: null,
    },
  },
  {
    name: 'processId',
    type: {
      kind: TypeKind.InputObject,
      name: TypeName.String,
      ofType: null,
    },
  },
  {
    name: 'processName',
    type: {
      kind: TypeKind.InputObject,
      name: TypeName.String,
      ofType: null,
    },
  },
  {
    name: 'parentProcessInstanceId',
    type: {
      kind: TypeKind.InputObject,
      name: TypeName.Id,
      ofType: null,
    },
  },
  {
    name: 'rootProcessInstanceId',
    type: {
      kind: TypeKind.InputObject,
      name: TypeName.Id,
      ofType: null,
    },
  },
  {
    name: 'rootProcessId',
    type: {
      kind: TypeKind.InputObject,
      name: TypeName.String,
      ofType: null,
    },
  },

  // {
  //   name: 'error',
  //   type: {
  //     kind: TypeKind.InputObject,
  //     name: 'ProcessInstanceErrorArgument',
  //     ofType: null,
  //   },
  // },
  // {
  //   name: 'nodes',
  //   type: {
  //     kind: TypeKind.InputObject,
  //     name: 'NodeInstanceArgument',
  //     ofType: null,
  //   },
  // },
  // {
  //   name: 'milestones',
  //   type: {
  //     kind: TypeKind.InputObject,
  //     name: 'MilestoneArgument',
  //     ofType: null,
  //   },
  // },
  {
    name: 'endpoint',
    type: {
      kind: TypeKind.InputObject,
      name: TypeName.String,
      ofType: null,
    },
  },
  // {
  //   name: 'roles',
  //   type: {
  //     kind: TypeKind.InputObject,
  //     name: TypeName.StringArray,
  //     ofType: null,
  //   },
  // },
  {
    name: 'start',
    type: {
      kind: TypeKind.InputObject,
      name: TypeName.Date,
      ofType: null,
    },
  },
  {
    name: 'end',
    type: {
      kind: TypeKind.InputObject,
      name: TypeName.Date,
      ofType: null,
    },
  },
  // {
  //   name: 'addons',
  //   type: {
  //     kind: TypeKind.InputObject,
  //     name: TypeName.StringArray,
  //     ofType: null,
  //   },
  // },
  {
    name: 'lastUpdate',
    type: {
      kind: TypeKind.InputObject,
      name: TypeName.Date,
      ofType: null,
    },
  },
  {
    name: 'businessKey',
    type: {
      kind: TypeKind.InputObject,
      name: TypeName.String,
      ofType: null,
    },
  },
  {
    name: 'createdBy',
    type: {
      kind: TypeKind.InputObject,
      name: TypeName.String,
      ofType: null,
    },
  },
  {
    name: 'updatedBy',
    type: {
      kind: TypeKind.InputObject,
      name: TypeName.String,
      ofType: null,
    },
  },
];

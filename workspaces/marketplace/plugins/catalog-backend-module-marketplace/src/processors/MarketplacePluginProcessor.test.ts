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

import { MarketplacePlugin } from '@red-hat-developer-hub/backstage-plugin-marketplace-common';

import { MarketplacePluginProcessor } from './MarketplacePluginProcessor';

const pluginEntity: MarketplacePlugin = {
  apiVersion: 'marketplace.backstage.io/v1alpha1',
  metadata: {
    name: 'testplugin',
    title: 'APIs with Test plugin',
    description: 'Test plugin.',
  },
  kind: 'Plugin',
  spec: {
    owner: 'test-group',
  },
};

const getPackagePartOfPluginRelation = (packageName: string) => ({
  source: {
    kind: 'Package',
    namespace: 'default',
    name: packageName,
  },
  type: 'partOf',
  target: {
    kind: 'Plugin',
    namespace: 'default',
    name: 'testplugin',
  },
});

const getPackageHasPartOfPluginRelation = (packageName: string) => ({
  source: {
    kind: 'Plugin',
    namespace: 'default',
    name: 'testplugin',
  },
  type: 'hasPart',
  target: {
    kind: 'Package',
    namespace: 'default',
    name: packageName,
  },
});

describe('MarketplacePluginProcessor', () => {
  it('should return processor name', () => {
    const processor = new MarketplacePluginProcessor();
    expect(processor.getProcessorName()).toBe('MarketplacePluginProcessor');
  });

  it('should return plugin entity with relation', async () => {
    const processor = new MarketplacePluginProcessor();
    const emit = jest.fn();

    await processor.postProcessEntity(pluginEntity, undefined as any, emit);

    expect(emit).toHaveBeenCalledTimes(1);
    expect(emit).toHaveBeenCalledWith({
      type: 'relation',
      relation: {
        source: { kind: 'Plugin', namespace: 'default', name: 'testplugin' },
        type: 'ownedBy',
        target: { kind: 'Group', namespace: 'default', name: 'test-group' },
      },
    });
  });

  it('should return validate the entity', async () => {
    const processor = new MarketplacePluginProcessor();

    expect(
      await processor.validateEntityKind({ ...pluginEntity, kind: 'test' }),
    ).toBe(false);
    expect(await processor.validateEntityKind(pluginEntity)).toBe(true);
  });

  it('should return plugin entity with hasPartOf relation with Package entity', async () => {
    const processor = new MarketplacePluginProcessor();

    const emit = jest.fn();
    await processor.postProcessEntity(
      {
        ...pluginEntity,
        spec: {
          ...pluginEntity.spec,
          owner: undefined,
          packages: ['package-a', 'package-b'],
        },
      },
      null as any,
      emit,
    );
    expect(emit).toHaveBeenCalledTimes(4);

    // partOf relation test
    expect(emit).toHaveBeenCalledWith({
      type: 'relation',
      relation: getPackagePartOfPluginRelation('package-a'),
    });
    expect(emit).toHaveBeenCalledWith({
      type: 'relation',
      relation: getPackagePartOfPluginRelation('package-b'),
    });

    // hasPart relation test
    expect(emit).toHaveBeenCalledWith({
      type: 'relation',
      relation: getPackageHasPartOfPluginRelation('package-a'),
    });
    expect(emit).toHaveBeenCalledWith({
      type: 'relation',
      relation: getPackageHasPartOfPluginRelation('package-b'),
    });
  });

  it('should handle plugin entity with hasPartOf relation with Package entity as MarketplacePluginPackage', async () => {
    const processor = new MarketplacePluginProcessor();

    const emit = jest.fn();
    await processor.postProcessEntity(
      {
        ...pluginEntity,
        spec: {
          ...pluginEntity.spec,
          owner: undefined,
          packages: [
            {
              name: 'package-a',
            },
          ],
        },
      },
      null as any,
      emit,
    );
    expect(emit).toHaveBeenCalledTimes(2);

    // partOf relation test
    expect(emit).toHaveBeenCalledWith({
      type: 'relation',
      relation: getPackagePartOfPluginRelation('package-a'),
    });

    // hasPart relation test
    expect(emit).toHaveBeenCalledWith({
      type: 'relation',
      relation: getPackageHasPartOfPluginRelation('package-a'),
    });
  });
});

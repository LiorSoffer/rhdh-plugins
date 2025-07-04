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
import { createDevApp } from '@backstage/dev-utils';

import { applicationListenerTestPlugin, LocationListener } from '../src/plugin';

createDevApp()
  .registerPlugin(applicationListenerTestPlugin)
  .addPage({
    element: <LocationListener />,
    title: 'Page 1',
    path: '/page-1',
  })
  .addPage({
    element: <LocationListener />,
    title: 'Page 2',
    path: '/page-2',
  })
  .render();

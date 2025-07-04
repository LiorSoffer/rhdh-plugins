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
import { OAuthApi } from '@backstage/core-plugin-api';

export type SecureFetchClientOptions = {
  oauthApi: OAuthApi;
};

export interface SecureFetchApi {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}

export class SecureFetchClient implements SecureFetchApi {
  private readonly oauthApi: OAuthApi;

  constructor(options: SecureFetchClientOptions) {
    this.oauthApi = options.oauthApi;
  }

  fetch = async (
    input: RequestInfo | URL,
    init?: RequestInit,
  ): Promise<Response> => {
    const token = await this.oauthApi.getAccessToken();
    const headers = new Headers(init?.headers);

    if (token) {
      headers.set('Accept', 'application/json');
      headers.set('Authorization', `Bearer ${token}`);
    }

    return fetch(input, {
      ...init,
      headers,
    });
  };
}

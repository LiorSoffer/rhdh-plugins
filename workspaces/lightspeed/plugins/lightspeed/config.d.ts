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

export interface Config {
  /**
   * Configuration required for using lightspeed
   * @visibility frontend
   */
  lightspeed: {
    /**
     * @visibility frontend
     */
    servers: Array</**
     * @visibility frontend
     */
    {
      /**
       * The id of the server.
       * @visibility frontend
       */
      id: string;
      /**
       * The url of the server.
       * @visibility frontend
       */
      url: string;
    }>;
    /**
     * query restriction validation (Enabled by default).
     * @visibility frontend
     */
    questionValidation?: boolean;
    prompts?: Array</**
     * @visibility frontend
     */
    {
      /**
       * The title of the prompt.
       * Displayed as the heading of the prompt.
       * @visibility frontend
       */
      title: string;
      /**
       * The main question or message shown in the prompt.
       * @visibility frontend
       */
      message: string;
    }>;
  };
}

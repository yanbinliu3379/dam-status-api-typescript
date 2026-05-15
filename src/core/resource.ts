// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { DamStatusAPI } from '../client';

export abstract class APIResource {
  protected _client: DamStatusAPI;

  constructor(client: DamStatusAPI) {
    this._client = client;
  }
}

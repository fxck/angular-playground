import { environment } from '../environments/environment';

import { SocialApi } from './services/social-api.service';
import { PeopleApi } from './services/people-api.service';

const DEV_PROVIDERS = [];
const PROD_PROVIDERS = [];
const COMMON_PROVIDERS = [
  SocialApi,
  PeopleApi
];

export const APP_PROVIDERS = !environment.production
? [ ...COMMON_PROVIDERS, ...DEV_PROVIDERS ]
: [ ...COMMON_PROVIDERS, ...PROD_PROVIDERS ];

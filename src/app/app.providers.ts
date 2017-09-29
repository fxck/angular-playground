import { environment } from '../environments/environment';

import { SocialApi } from './services/social-api.service';
import { PeopleApi } from './services/people-api.service';
import { ServicesApi } from './services/services-api.service';
import { SectionsStore } from './services/sections-sttore.service';

const DEV_PROVIDERS = [];
const PROD_PROVIDERS = [];
const COMMON_PROVIDERS = [
  SocialApi,
  PeopleApi,
  ServicesApi,
  SectionsStore
];

export const APP_PROVIDERS = !environment.production
? [ ...COMMON_PROVIDERS, ...DEV_PROVIDERS ]
: [ ...COMMON_PROVIDERS, ...PROD_PROVIDERS ];

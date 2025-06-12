import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getRemoteConfig } from 'firebase/remote-config';
import { environment } from '../src/environments/environment';

const app = initializeApp(environment.firebase);

const analytics = getAnalytics(app);
const remoteConfig = getRemoteConfig(app);

remoteConfig.settings = {
  minimumFetchIntervalMillis: 3600000,
  fetchTimeoutMillis: 60000,
};

export { app, analytics, remoteConfig };

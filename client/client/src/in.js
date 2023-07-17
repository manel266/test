import React from 'react';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from "history";
const browserHistory = createBrowserHistory({ basename: '' });
var reactPlugin = new ReactPlugin();

var appInsights = new ApplicationInsights({
    config: {
        connectionString: 'InstrumentationKey=245cd222-05d7-4d13-89da-3f57cc9cc19b;IngestionEndpoint=https://northeurope-2.in.applicationinsights.azure.com/;LiveEndpoint=https://northeurope.livediagnostics.monitor.azure.com/',
        enableAutoRouteTracking: true,
        extensions: [reactPlugin],
        extensionConfig: {
          [reactPlugin.identifier]: { history: browserHistory }

        }
    }
});
appInsights.loadAppInsights();

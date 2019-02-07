import * as application from 'tns-core-modules/application';
import { TNSFancyGeo } from 'nativescript-fancy-geo';

TNSFancyGeo.init();
TNSFancyGeo.setOnMessageListener((message) => {
    console.log('setOnMessageListener', message);
});
application.start({moduleName: 'main-page'});

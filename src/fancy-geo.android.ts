import {
    TNSFancyGeoBase,
    TNSFence,
    TNSFenceOptions,
    TNSLocationOptions,
    TNSPermissionOptions
} from './fancy-geo.common';
import * as utils from 'tns-core-modules/utils/utils';
import * as app from 'tns-core-modules/application';

export { TNSFenceTransition } from './fancy-geo.common';
declare var com;
export class TNSFancyGeo extends TNSFancyGeoBase {
    private _permissionResolve;
    private _permissionReject;
    private _permissionHandler: (args: app.AndroidActivityRequestPermissionsEventData) => void;

    constructor() {
        super();
        this.android = new com.github.triniwiz.fancygeo.FancyGeo(utils.ad.getApplicationContext());
        this._permissionHandler = this._permissionHandlerFn.bind(this);
    }

    public static init() {
    }

    private _permissionHandlerFn(args: app.AndroidActivityRequestPermissionsEventData) {
        const has = com.github.triniwiz.fancygeo.FancyGeo.hasPermission(utils.ad.getApplicationContext());
        if (has) {
            this._permissionResolve();
        } else {
            this._permissionReject();
        }
    }

    createCircleFence(options: TNSFenceOptions): Promise<any> {
        let notification: com.github.triniwiz.fancygeo.FancyGeo.FenceNotification = null;
        if (options.notification) {
            notification = new com.github.triniwiz.fancygeo.FancyGeo.FenceNotification();
            notification.setId(options.notification.id);
            notification.setTitle(options.notification.title);
            notification.setBody(options.notification.body);
        }
        return new Promise((resolve, reject) => {
            this.android.createFenceCircle(options.id, options.transition, 0, options.coordinates, options.radius, notification, new com.github.triniwiz.fancygeo.FancyGeo.FenceCallback({
                onSuccess(param0: string): void {
                    resolve(param0);
                },
                onFail(param0: java.lang.Exception): void {
                    reject(param0.getMessage());
                }
            }));
        });
    }

    getAllFences(): Promise<TNSFence[]> {
        return new Promise((resolve, reject) => {
            const list = this.android.getAllFences();
            const count = list.size();
            const array = [];
            for (let i = 0; i < count; i++) {
                array.push(JSON.parse(list.get(i)));
            }
            return array;
        });
    }

    getCurrentLocation(options: TNSLocationOptions): Promise<Location> {
        return new Promise((resolve, reject) => {
            // TODO
            /* (this.android as com.github.triniwiz.fancygeo.FancyGeo).getCurrentLocation(new com.github.triniwiz.fancygeo.FancyGeo.FancyGeoCurrentLocationListener({
                 onLocation(param0: com.github.triniwiz.fancygeo.FancyGeo.FancyLocation): void {
                 },
                 onLocationError(param0: java.lang.Exception): void {
                 }
             }));
             */
        });
    }

    getFence(id: string): Promise<TNSFence> {
        return new Promise((resolve, reject) => {
            const fence = this.android.getFence(id);
            if (!fence) {
                reject();
            }
            resolve(JSON.parse(fence.toJson()));
        });
    }

    hasPermission(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(com.github.triniwiz.fancygeo.FancyGeo.hasPermission(utils.ad.getApplicationContext()));
        });
    }

    requestPermission(options: TNSPermissionOptions): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this._permissionResolve = resolve;
            this._permissionReject = reject;
            app.android.off(app.AndroidApplication.activityRequestPermissionsEvent, this._permissionHandler);
            app.android.on(app.AndroidApplication.activityRequestPermissionsEvent, this._permissionHandler);
            com.github.triniwiz.fancygeo.FancyGeo.requestPermission(utils.ad.getApplicationContext());
        });
    }


    removeAllFences(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.android.removeAllFences(new com.github.triniwiz.fancygeo.FancyGeo.Callback({
                onSuccess(): void {
                    resolve();
                },
                onFail(param0: java.lang.Exception): void {
                    reject(param0.getMessage());
                }
            }));
        });
    }

    removeFence(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.android.removeFence(id, new com.github.triniwiz.fancygeo.FancyGeo.Callback({
                onFail(param0: java.lang.Exception): void {
                    reject(param0.getMessage());
                },
                onSuccess(): void {
                    resolve();
                }
            }));
        });
    }


    public static setOnMessageListener(listener: Function): void {
        com.github.triniwiz.fancygeo.FancyGeo.setOnMessageReceivedListener(new com.github.triniwiz.fancygeo.FancyGeo.NotificationsListener({
            onSuccess(param0: string): void {
                if (listener) {
                    listener(null, JSON.parse(param0));
                }
            },
            onError(param0: java.lang.Exception): void {
                if (listener) {
                    listener(param0.getMessage());
                }
            }
        }));
    }

}

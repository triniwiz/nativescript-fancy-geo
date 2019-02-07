import {
    TNSFancyGeoBase,
    TNSFence,
    TNSFenceOptions,
    TNSFenceTransition,
    TNSLocationOptions,
    TNSPermissionOptions,
} from './fancy-geo.common';

export { TNSFenceTransition } from './fancy-geo.common';
declare var FenceNotification, FenceTransition, FancyGeo;

export class TNSFancyGeo extends TNSFancyGeoBase {
    private static _instance;

    constructor() {
        super();
    }

    public static init() {
        this._instance = FancyGeo.sharedInstance();
        FancyGeo.initFancyGeo();
    }

    get ios() {
        return TNSFancyGeo._instance;
    }

    createCircleFence(options: TNSFenceOptions): Promise<any> {
        let notification = null;
        if (options.notification) {
            notification = FenceNotification.initWithIdTitleBodyWithIdTitleBody(options.notification.id, options.notification.title, options.notification.body);

        }
        return new Promise((resolve, reject) => {
            let transition;
            switch (options.transition) {
                case TNSFenceTransition.ALL:
                    transition = FenceTransition.ALL;
                    break;
                case TNSFenceTransition.DWELL:
                    transition = FenceTransition.DWELL;
                    break;
                case TNSFenceTransition.DWELL_EXIT:
                    transition = FenceTransition.DWELL_EXIT;
                    break;
                case TNSFenceTransition.ENTER:
                    transition = FenceTransition.ENTER;
                    break;
                case TNSFenceTransition.ENTER_DWELL:
                    transition = FenceTransition.ENTER_DWELL;
                    break;
                case TNSFenceTransition.EXIT:
                    transition = FenceTransition.EXIT;
                    break;
                case TNSFenceTransition.ENTER_EXIT:
                    transition = FenceTransition.ENTER_EXIT;
                    break;
            }
            this.ios.createFenceCircleWithIdTransitionNotificationLoiteringDelayPointsRadiusOnListener(options.id, transition, notification, 0, options.coordinates, options.radius, (success, error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(success);
                }
            });
        });
    }

    getAllFences(): Promise<TNSFence[]> {
        return new Promise((resolve, reject) => {
            const list = this.ios.getAllFences();
            const count = list.count;
            const array = [];
            for (let i = 0; i < count; i++) {
                array.push(JSON.parse(list.objectAtIndex(i)));
            }
            return array;
        });
    }

    getCurrentLocation(options: TNSLocationOptions): Promise<Location> {
        return new Promise((resolve, reject) => {
            // TODO
        });
    }

    getFence(id: string): Promise<TNSFence> {
        return new Promise((resolve, reject) => {
            const fence = this.ios.getFenceWithId(id);
            if (!fence) {
                reject();
            }
            resolve(JSON.parse(fence));
        });
    }

    hasPermission(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(FancyGeo.hasPermission());
        });
    }

    requestPermission(options: TNSPermissionOptions): Promise<boolean> {
        return new Promise((resolve, reject) => {
            FancyGeo.requestPermissionWithAlwaysCallback(options.always, (permission, error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(permission);
                }
            });
        });
    }


    removeAllFences(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.ios.removeAllFences();
            resolve();
        });
    }

    removeFence(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.ios.removeFenceWithIdCallback(id, (success, error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }


    public static setOnMessageListener(listener: Function): void {
        FancyGeo.onMessageReceivedListener = (message: string) => {
            if (listener && message) {
                listener(null, JSON.parse(message));
            }
        };
    }

}

import {
    TNSFancyGeoBase,
    TNSFence,
    TNSFenceOptions,
    TNSLocationOptions,
    TNSPermissionOptions
} from './fancy-geo.common';

export { TNSFenceTransition } from './fancy-geo.common';

export declare class TNSFancyGeo extends TNSFancyGeoBase {
    constructor();

    static init(): void;

    createCircleFence(options: TNSFenceOptions): Promise<any>;

    getAllFences(): Promise<TNSFence[]>;

    getCurrentLocation(options: TNSLocationOptions): Promise<Location>;

    getFence(id: string): Promise<TNSFence>;

    hasPermission(): Promise<boolean>;

    requestPermission(options: TNSPermissionOptions): Promise<boolean>;

    removeAllFences(): Promise<any>;

    removeFence(id: string): Promise<any>;

    static setOnMessageListener(listener: Function): void;
}

export interface TNSFenceNotification {
    id: number;
    title: string;
    body: string;
}

export enum TNSFenceTransition {
    ENTER,
    DWELL,
    EXIT,
    ENTER_EXIT,
    ENTER_DWELL,
    DWELL_EXIT,
    ALL,
}

export interface TNSFenceOptions {
    id?: string;
    coordinates: number[];
    radius: number;
    transition: TNSFenceTransition;
    notification?: TNSFenceNotification;
}

export interface TNSFence {
    id: string;
    coordinates: number[];
    radius: number;
    transition: TNSFenceTransition;
    notification?: TNSFenceNotification;
}

export interface TNSCoordinate {
    latitude: number;
    longitude: number;
}

export interface TNSLocation {
    coordinate: TNSCoordinate;
    altitude: number;
    horizontalAccuracy: number;
    verticalAccuracy: number;
    speed: number;
    direction: number;
    timestamp: number;
}

export interface TNSLocationOptions {

}

export interface TNSPermissionOptions {
    always?: boolean;
}


export abstract class TNSFancyGeoBase {
    android: any;
    ios: any;

    public abstract createCircleFence(options: TNSFenceOptions): Promise<string>;

    public abstract hasPermission(): Promise<boolean>;

    public abstract requestPermission(options: TNSPermissionOptions): Promise<boolean>;

    public abstract getCurrentLocation(options: TNSLocationOptions): Promise<Location>;

    public abstract getAllFences(): Promise<TNSFence[]>;

    public abstract getFence(id: string): Promise<TNSFence>;

    public abstract removeAllFences(): Promise<any>;

    public abstract removeFence(id: string): Promise<any>;
}

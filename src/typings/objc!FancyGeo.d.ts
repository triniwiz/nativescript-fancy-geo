
declare class CircleFence extends FenceShape {

	static alloc(): CircleFence; // inherited from NSObject

	static fromStringWithJson(json: string): CircleFence;

	static initWithIdTransitionCoordinatesRadiusLoiteringDelayWithIdTransitionCoordinatesRadiusLoiteringDelay(id: string, transition: FenceTransition, coordinates: NSArray<number> | number[], radius: number, loiteringDelay: number): CircleFence;

	static initWithIdTransitionCoordinatesRadiusNotificationWithIdTransitionCoordinatesRadiusNotification(id: string, transition: FenceTransition, coordinates: NSArray<number> | number[], radius: number, notification: FenceNotification): CircleFence;

	static new(): CircleFence; // inherited from NSObject

	toJson(): string;
}

declare class FancyCoordinate extends NSObject {

	static alloc(): FancyCoordinate; // inherited from NSObject

	static new(): FancyCoordinate; // inherited from NSObject
}

declare class FancyGeo extends NSObject {

	static alloc(): FancyGeo; // inherited from NSObject

	static getTypeWithJson(json: string): string;

	static handleNotificationLegacyWithNotification(notification: UILocalNotification): void;

	static handleNotificationWithCenterResponse(center: UNUserNotificationCenter, response: UNNotificationResponse): void;

	static hasPermission(): boolean;

	static initFancyGeo(): void;

	static new(): FancyGeo; // inherited from NSObject

	static requestPermissionWithAlwaysCallback(always: boolean, callback: (p1: boolean, p2: string) => void): void;

	static setOnMessageReceivedListener(value: (p1: string) => void): void;

	static sharedInstance(): FancyGeo;

	static readonly GEO_LOCATION_DATA: string;

	static onMessageReceivedListener: (p1: string) => void;

	createFenceCircleWithIdTransitionNotificationLoiteringDelayPointsRadius(id: string, transition: FenceTransition, notification: FenceNotification, loiteringDelay: number, points: NSArray<number> | number[], radius: number): void;

	createFenceCircleWithIdTransitionNotificationLoiteringDelayPointsRadiusOnListener(id: string, transition: FenceTransition, notification: FenceNotification, loiteringDelay: number, points: NSArray<number> | number[], radius: number, onListener: (p1: string, p2: string) => void): void;

	getAllFences(): NSArray<any>;

	getCurrentLocationWithListener(listener: () => void): void;

	getFenceWithId(id: string): string;

	hasNotificationsPermissionWithCallback(callback: (p1: boolean, p2: string) => void): void;

	locationManagerDidChangeAuthorizationStatus(manager: any, status: any): void;

	locationManagerDidEnterRegion(manager: any, region: CLRegion): void;

	locationManagerDidExitRegion(manager: any, region: CLRegion): void;

	locationManagerDidStartMonitoringForRegion(manager: any, region: CLRegion): void;

	locationManagerDidUpdateLocations(manager: any, locations: NSArray<CLLocation> | CLLocation[]): void;

	locationManagerDidVisit(manager: any, visit: CLVisit): void;

	locationManagerMonitoringDidFailForRegionWithError(manager: any, region: CLRegion, error: NSError): void;

	removeAllFences(): void;

	removeFenceWithIdCallback(id: string, callback: (p1: string, p2: string) => void): void;

	requestNotificationsPermissionWithCallback(callback: (p1: boolean, p2: string) => void): void;

	userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;

	userNotificationCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: any): void;
}

declare var FancyGeoVersionNumber: number;

declare var FancyGeoVersionString: interop.Reference<number>;

declare class FancyLocation extends NSObject {

	static alloc(): FancyLocation; // inherited from NSObject

	static new(): FancyLocation; // inherited from NSObject
}

declare class FenceNotification extends NSObject {

	static alloc(): FenceNotification; // inherited from NSObject

	static initWithIdTitleBodyWithIdTitleBody(id: number, title: string, body: string): FenceNotification;

	static new(): FenceNotification; // inherited from NSObject
}

declare class FenceShape extends NSObject {

	static alloc(): FenceShape; // inherited from NSObject

	static new(): FenceShape; // inherited from NSObject
}

declare const enum FenceTransition {

	ENTER = 0,

	DWELL = 1,

	EXIT = 2,

	ENTER_EXIT = 3,

	ENTER_DWELL = 4,

	DWELL_EXIT = 5,

	ALL = 6
}

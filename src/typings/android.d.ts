declare module com {
	export module github {
		export module triniwiz {
			export module fancygeo {
				export class BuildConfig {
					public static class: java.lang.Class<com.github.triniwiz.fancygeo.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module fancygeo {
				export class FancyGeo {
					public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeo>;
					public static GEO_LOCATION_PERMISSIONS_REQUEST: number;
					public static GEO_TRANSITION_TYPE: string;
					public static getGsonInstance(): com.google.gson.Gson;
					public static hasPermission(param0: globalAndroid.content.Context): boolean;
					public getAllFences(): java.util.ArrayList<string>;
					public getCurrentLocation(param0: com.github.triniwiz.fancygeo.FancyGeo.FancyGeoCurrentLocationListener): void;
					public static getType(param0: string): string;
					public constructor(param0: globalAndroid.content.Context);
					public getFence(param0: string): com.github.triniwiz.fancygeo.FancyGeo.FenceShape;
					public static requestPermission(param0: globalAndroid.content.Context): void;
					public removeFence(param0: string, param1: com.github.triniwiz.fancygeo.FancyGeo.Callback): void;
					public static init(param0: globalAndroid.app.Application): void;
					public createFenceCircle(param0: string, param1: com.github.triniwiz.fancygeo.FancyGeo.FenceTransition, param2: number, param3: native.Array<number>, param4: number, param5: com.github.triniwiz.fancygeo.FancyGeo.FenceNotification, param6: com.github.triniwiz.fancygeo.FancyGeo.FenceCallback): void;
					public static setOnMessageReceivedListener(param0: com.github.triniwiz.fancygeo.FancyGeo.NotificationsListener): void;
					public static executeOnMessageReceivedListener(param0: string): void;
					public removeAllFences(param0: com.github.triniwiz.fancygeo.FancyGeo.Callback): void;
				}
				export module FancyGeo {
					export class Callback {
						public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeo.Callback>;
						/**
						 * Constructs a new instance of the com.github.triniwiz.fancygeo.FancyGeo$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(): void;
							onFail(param0: java.lang.Exception): void;
						});
						public constructor();
						public onSuccess(): void;
						public onFail(param0: java.lang.Exception): void;
					}
					export class CircleFence extends com.github.triniwiz.fancygeo.FancyGeo.FenceShape {
						public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeo.CircleFence>;
						public getLoiteringDelay(): number;
						public getNotification(): com.github.triniwiz.fancygeo.FancyGeo.FenceNotification;
						public getCoordinates(): native.Array<number>;
						public getType(): string;
						public static fromString(param0: string): com.github.triniwiz.fancygeo.FancyGeo.CircleFence;
						public getRadius(): number;
						public getId(): string;
						public setNotification(param0: com.github.triniwiz.fancygeo.FancyGeo.FenceNotification): void;
						public toJson(): string;
						public getTransition(): com.github.triniwiz.fancygeo.FancyGeo.FenceTransition;
					}
					export class FancyGeoCurrentLocationListener {
						public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeo.FancyGeoCurrentLocationListener>;
						/**
						 * Constructs a new instance of the com.github.triniwiz.fancygeo.FancyGeo$FancyGeoCurrentLocationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onLocation(param0: com.github.triniwiz.fancygeo.FancyGeo.FancyLocation): void;
							onLocationError(param0: java.lang.Exception): void;
						});
						public constructor();
						public onLocation(param0: com.github.triniwiz.fancygeo.FancyGeo.FancyLocation): void;
						public onLocationError(param0: java.lang.Exception): void;
					}
					export class FancyLocation {
						public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeo.FancyLocation>;
						public static fromLocation(param0: globalAndroid.location.Location): com.github.triniwiz.fancygeo.FancyGeo.FancyLocation;
						public getLocation(): globalAndroid.location.Location;
						public toJson(): string;
					}
					export class FenceCallback {
						public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeo.FenceCallback>;
						/**
						 * Constructs a new instance of the com.github.triniwiz.fancygeo.FancyGeo$FenceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: string): void;
							onFail(param0: java.lang.Exception): void;
						});
						public constructor();
						public onSuccess(param0: string): void;
						public onFail(param0: java.lang.Exception): void;
					}
					export class FenceHttp {
						public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeo.FenceHttp>;
						public constructor();
					}
					export class FenceNotification {
						public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeo.FenceNotification>;
						public getBody(): string;
						public constructor();
						public setTitle(param0: string): void;
						public getRequestId(): string;
						public setBody(param0: string): void;
						public setId(param0: number): void;
						public getId(): number;
						public getTitle(): string;
					}
					export abstract class FenceShape {
						public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeo.FenceShape>;
						public constructor();
						public getLoiteringDelay(): number;
						public getNotification(): com.github.triniwiz.fancygeo.FancyGeo.FenceNotification;
						public getCoordinates(): native.Array<number>;
						public getType(): string;
						public getId(): string;
						public setNotification(param0: com.github.triniwiz.fancygeo.FancyGeo.FenceNotification): void;
						public toJson(): string;
						public getTransition(): com.github.triniwiz.fancygeo.FancyGeo.FenceTransition;
					}
					export class FenceTransition {
						public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeo.FenceTransition>;
						public static ENTER: com.github.triniwiz.fancygeo.FancyGeo.FenceTransition;
						public static DWELL: com.github.triniwiz.fancygeo.FancyGeo.FenceTransition;
						public static EXIT: com.github.triniwiz.fancygeo.FancyGeo.FenceTransition;
						public static ENTER_EXIT: com.github.triniwiz.fancygeo.FancyGeo.FenceTransition;
						public static ENTER_DWELL: com.github.triniwiz.fancygeo.FancyGeo.FenceTransition;
						public static DWELL_EXIT: com.github.triniwiz.fancygeo.FancyGeo.FenceTransition;
						public static ALL: com.github.triniwiz.fancygeo.FancyGeo.FenceTransition;
						public static values(): native.Array<com.github.triniwiz.fancygeo.FancyGeo.FenceTransition>;
						public static valueOf(param0: string): com.github.triniwiz.fancygeo.FancyGeo.FenceTransition;
					}
					export class NotificationsListener {
						public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeo.NotificationsListener>;
						/**
						 * Constructs a new instance of the com.github.triniwiz.fancygeo.FancyGeo$NotificationsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: string): void;
							onError(param0: java.lang.Exception): void;
						});
						public constructor();
						public onSuccess(param0: string): void;
						public onError(param0: java.lang.Exception): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module fancygeo {
				export class FancyGeoActionReceiver {
					public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeoActionReceiver>;
					public constructor();
					public onHandleIntent(param0: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module fancygeo {
				export class FancyGeoBootReceiver {
					public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeoBootReceiver>;
					public constructor();
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module fancygeo {
				export class FancyGeoLifeCycle {
					public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeoLifeCycle>;
					public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public static registerCallbacks(param0: globalAndroid.app.Application): void;
					public onActivityStarted(param0: globalAndroid.app.Activity): void;
					public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityStopped(param0: globalAndroid.app.Activity): void;
					public constructor();
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module fancygeo {
				export class FancyGeoNotifications {
					public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeoNotifications>;
					public static CHANNEL_NAME_DEFAULT: string;
					public static CHANNEL_NAME: string;
					public static CHANNEL_ID: string;
					public static GEO_NOTIFICATION_ID: string;
					public static init(param0: globalAndroid.content.Context): void;
					public static sendNotification(param0: com.github.triniwiz.fancygeo.FancyGeo.FenceNotification, param1: string): void;
					public static getInstance(): com.github.triniwiz.fancygeo.FancyGeoNotifications;
					public setupChannel(): void;
					public static sendNotification(param0: com.github.triniwiz.fancygeo.FancyGeo.FenceNotification): void;
					public setChannelName(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module fancygeo {
				export class FancyGeofenceTransitionsIntentService {
					public static class: java.lang.Class<com.github.triniwiz.fancygeo.FancyGeofenceTransitionsIntentService>;
					public constructor();
					public onHandleIntent(param0: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

//Generics information:


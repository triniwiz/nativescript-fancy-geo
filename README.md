# NativeScript Fancy Geo

`npm i nativescript-fancy-geo`

## Usage

### TypeScript


```typescript
import { TNSFancyGeo, TNSFenceTransition } from 'nativescript-fancy-geo'

let lat = 10.6918;
let lon = 61.2225;
TNSFancyGeo.hasPermission()
.then(()=>{
     let notification =  {id: 0, title: "Test", body: "Test Body"};
                let circle = {
                    id: null,
                    transition: TNSFenceTransition.ENTER_EXIT,
                    notification,
                    loiteringDelay: 0,
                    points: [lat, lon], radius: 1000
                    };
    
       TNSFancyGeo.createCircleFence(circle);
}).catch(()=>{
    TNSFancyGeo.requestPermission({always: true})
})


```


## Api

| Method                                   | Default | Type                         | Description                                           |
| ---------------------------------------- | ------- | ---------------------------- | ----------------------------------------------------- |
| setOnMessageListener(listener: Function)       |         |                      |  |
| createCircleFence(options: FenceOptions)            |         | `Promise<string>`                 |                    |
| hasPermission()   |         | `Promise<boolean>` |                               |  |
| requestPermission(options: PermissionOptions)                     |         | `Promise<boolean>`                       |                               |
| getCurrentLocation(options: LocationOptions)                       |         | `Promise<Location>`                       |                              |
| getAllFences()                     |         | `Promise<Fence[]>`                       |                                |
| getFence(id: string)                   |         | `Promise<Fence>`                       |                  |
| removeAllFences()                  |         | `Promise<any>`                 |                    |
| removeFence(id: string)  |         | `Promise<any>` |                               |  |               |         | `Promise<any>`                       |                              |

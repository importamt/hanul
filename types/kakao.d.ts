declare namespace kakao {
    module maps {
        module event {
            export function addListener(marker: Marker, event: string, fn)
        }

        export function load(callback: Function)


        class LatLng {
            constructor(lat: number, lng: number): LatLng
        }

        interface MapOptions {
            center: LatLng,
            level: number,
            mapTypeId?: MapTypeId,
            draggable?: boolean,
            scrollwheel?: boolean,
            disableDoubleClick?: boolean,
            disableDoubleClickZoom?: boolean,
            projectionId?: string,
            tileAnimation?: boolean,
            keyboardShortcuts?: boolean | {
                speed: number
            }
        }
        class Map {
            constructor(container: HTMLElement, options: MapOptions)
            getCenter():LatLng
        }

        class Marker {
            constructor(options)
            setMap(map:Map)
            getPosition():LatLng
        }

        class CustomOverlay extends Marker {

        }

        enum MapTypeId {
            ROADMAP, SKYVIEW, HYBRID, OVERLAY, TRAFFIC,
            TERRAIN, BICYCLE, BICYCLE_HYBRID, USE_DISTRICT
        }
    }
}
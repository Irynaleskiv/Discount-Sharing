import { Component, ViewChild, ElementRef } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

import { Platform } from 'ionic-angular';


declare var google: any;


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(public confData: ConferenceData, public platform: Platform) {
  }

  ionViewDidLoad() {

      this.confData.getMap().subscribe((mapData: any) => {
        let mapEle = this.mapElement.nativeElement;

        let map = new google.maps.Map(mapEle, {
          center: mapData.find((d: any) => d.center),
          zoom: 18,
          styles: [
            {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "visibility": "on"
                },
                {
                  "color": "#3e606f"
                },
                {
                  "weight": 2
                },
                {
                  "gamma": 0.84
                }
              ]
            },
            {
              "featureType": "all",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "weight": 0.6
                },
                {
                  "color": "#1a3541"
                }
              ]
            },
            {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#2c5a71"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#406d80"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#2c5a71"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#29768a"
                },
                {
                  "lightness": -37
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#406d80"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#193341"
                }
              ]
            }
          ]
        });

          let icons = {
              levis: {
                  url: 'http://1000logos.net/wp-content/uploads/2017/03/Levis-Logo.png',
                  scaledSize: new google.maps.Size(75, 50),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              },
              stradivarius: {
                  url: 'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f8.png',
                  scaledSize: new google.maps.Size(85, 70),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              },
              zara: {
                  url: 'https://avatanplus.com/files/resources/mid/57f28bf4562961578b72b281.png',
                  scaledSize: new google.maps.Size(85, 70),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              },
              nike: {
                  url: 'http://www.pngall.com/wp-content/uploads/2016/06/Nike-Logo-Free-PNG-Image.png',
                  scaledSize: new google.maps.Size(75, 50),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              },
              foxtrot: {
                  url: 'http://www.kyiv.ukrtelecom.ua/media/library/160.png',
                  scaledSize: new google.maps.Size(85, 75),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              },
              new_balance: {
                  url: 'http://pluspng.com/img-png/new-balance-png-new-balance-began-as-a-boston-based-arch-support-company-in-the-early-1900-s-developed-into-a-specialized-shoe-manufacturer-in-the-1970-s-and-has-grown-to-1000.png',
                  scaledSize: new google.maps.Size(75, 50),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              },
              timberland: {
                  url: 'http://footwearplusmagazine.com/new/wp-content/uploads/UGG_Large_Black._CB514431889_.png',
                  scaledSize: new google.maps.Size(65, 50),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              },
              adidas: {
                  url: 'http://pngimg.com/uploads/adidas/adidas_PNG21.png',
                  scaledSize: new google.maps.Size(65, 50),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              },
              brocard: {
                  url: 'https://pokupon.ua/uploaded/merchant_pages/1813/logos/original/Brocard.png?1485247730',
                  scaledSize: new google.maps.Size(65, 50),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              },
              a: {
                  url: 'https://ru.x3mboardshop.com/wa-data/public/shop/brands/3470/3470.png?v1234',
                  scaledSize: new google.maps.Size(85, 70),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              },
              b: {
                  url: 'http://toplogos.ru/images/logo-salewa.png',
                  scaledSize: new google.maps.Size(65, 50),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              },
              c: {
                  url: 'http://zoobrands.ru/media/djcatalog2/images/item/6/woolrich-pet_f.png',
                  scaledSize: new google.maps.Size(85, 50),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              },
              d: {
                  url: 'https://www.seeklogo.net/wp-content/uploads/2012/12/moncler-vector-logo.png',
                  scaledSize: new google.maps.Size(105, 90),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              },
              e: {
                  url: 'https://www.pmg.com/content/uploads/2014/07/logo-hermes-nb-21.png',
                  scaledSize: new google.maps.Size(75, 50),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              },
              f: {
                  url: 'https://s3.amazonaws.com/freebiesupply/large/2x/lacoste-logo-png-transparent.png',
                  scaledSize: new google.maps.Size(65, 50),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              }
          };

        mapData.forEach((markerData: any) => {
          let infoWindow = new google.maps.InfoWindow({
            content: `<button  class="search_card">Search card</button>`
          });

          let marker = new google.maps.Marker({
            position: markerData,
            map: map,
            title: markerData.name,
            icon: icons[markerData.name],
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });

        google.maps.event.addListenerOnce(map, 'idle', () => {
          mapEle.classList.add('show-map');
        });

      });

  }
}

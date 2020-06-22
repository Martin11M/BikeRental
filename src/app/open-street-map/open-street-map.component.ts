import { Component, OnInit } from '@angular/core';
import { ManageStationsService } from '../manage-stations-page/manage-stations.service';
import { Station } from '../manage-stations-page/station';

declare var ol: any;

@Component({
  selector: 'app-open-street-map',
  templateUrl: './open-street-map.component.html',
  styleUrls: ['./open-street-map.component.scss']
})

export class OpenStreetMapComponent implements OnInit {
  latitude: number = 52.2354;
  longitude: number = 21.0053;
  map: any;

  private stations: Station[];

  constructor(private manageStationsService: ManageStationsService) { }

  ngOnInit() {
    this.manageStationsService.getStations().subscribe( stations => {
      this.stations = stations;
      this.setMarkers();
    });

    this.map = new ol.Map({
      target: 'map',
      controls: ol.control.defaults({
        attributionOptions: {
          collapsible: false
        }
      }),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 12
      }),
    });
  }

  setMarkers() {
    var markers = this.stations.map(station => ({lat: station.lat, lng: station.lng, name: station.address}));

    var features = [];

    for (var i = 0; i < markers.length; i++) {
        var item = markers[i];
        var longitude = item.lng;
        var latitude = item.lat;
        var name = item.name;

        var iconFeature = new ol.Feature({

            geometry: new ol.geom.Point(ol.proj.transform([longitude, latitude], 'EPSG:4326', 'EPSG:3857'))
        });

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon(({
                anchor: [0.5, 1],
                src: "http://cdn.mapmarker.io/api/v1/pin?text=P&size=50&hoffset=1"
            })),
            text: new ol.style.Text({
              text: name,
              font: 'bold 14px serif',
              fill: new ol.style.Fill({
                  color: '#000'
              })
            })
        });
        iconFeature.setStyle(iconStyle);
        features.push(iconFeature);

    }

    var vectorSource = new ol.source.Vector({
        features: features
    });

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });
    this.map.addLayer(vectorLayer);
  }

  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(8);
  }
}

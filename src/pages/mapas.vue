<template>
  <q-page class="q-pa-md">
    <div id="map"></div>
  </q-page>
</template>

<script>
import 'ol/ol.css'
import { defineComponent } from 'vue'
import Map from 'ol/Map.js'
import OSM from 'ol/source/OSM.js'
import TileLayer from 'ol/layer/Tile.js'
import View from 'ol/View.js'
//import ImageWMS from 'ol/source/ImageWMS.js'
//import {Image as ImageLayer} from 'ol/layer.js'


export default defineComponent({

  mounted () { 
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
       
      ],
      view: new View({
        projection: 'EPSG:4326',
        center: [-82.36, 23.11],
        zoom: 12.5,
      })
    })
  }

})
</script>
<style lang="scss">


#map {
  padding: auto;
  width: 100%; /* Ancho del contenedor del mapa */
  max-width: 100%; /* Ancho máximo del contenedor del mapa */
  height: 571px;
  overflow: hidden; /* Oculta cualquier contenido que se salga del contenedor */
  position: relative; /* Posición relativa para los elementos internos */
}
</style>
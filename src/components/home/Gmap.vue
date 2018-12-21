<template>
    <div rel="map"  class="map container" id="map">
        <h2>Map</h2>
    </div>
</template>

<script>
  export default {
    name: "Gmap",
    data() {
      return {
        lat: 53,
        lng: -2,
      }
    },
    methods: {
      renderMap() {
        const map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: this.lat, lng: this.lng},
          zoom: 6,
          maxZoom: 15,
          minZoom: 3,
          streetVievControl: false,
        })
      },
    },
    mounted() {
      this.renderMap();
    },
  }
</script>

<style>
#map {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
}
</style>
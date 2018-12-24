<template>
    <div rel="map"  class="map container" id="map">
        <h2>Map</h2>
        <h3>e2wdwedwe</h3>
    </div>
</template>

<script>
  export default {
    name: "Gmap",
    data() {
      return {
        lat: 50.431782,
        lng: 30.516382,
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

<style lang="scss">
#map {
    margin: 64px auto 0 auto;
    position: absolute;
    background-color: #fff;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    max-width: 100%;
}
</style>
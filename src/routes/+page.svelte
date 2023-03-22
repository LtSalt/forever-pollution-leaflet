<script>
    import {LeafletMap, TileLayer, Circle, Popup, Tooltip} from 'svelte-leafletjs';

    const mapOptions = {
        center: [51.509865, -0.118092],
        zoom: 4
    }

    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

    const tileLayerOptions = {
        minZoom: 0,
        maxZoom: 12,
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }

    let leafletMap;

    export let data;
    const measurements = data.fp.filter(d => d.pfas_sum)

</script>

<header></header>
    <LeafletMap bind:this={leafletMap} options={mapOptions}>
        <TileLayer url={tileUrl} options={tileLayerOptions}/>
        {#each measurements as {lat, lon}}
            <Circle latLng={[lat, lon]} radius={10} color="black" fillColor="black"></Circle>
        {/each}
    </LeafletMap>
<footer></footer>

<style>
    @import 'leaflet/dist/leaflet.css';

    :global(body) {
        min-height: 100svh;
        display: grid;
        grid-template-rows: max-content 1fr max-content;
    }
</style>

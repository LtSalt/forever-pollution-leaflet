<script>
    import { LeafletMap, TileLayer, Circle, Popup, Tooltip } from 'svelte-leafletjs';
	import Footer from '../lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
	import ZoomToggle from '../lib/components/ZoomToggle.svelte';

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

<Header></Header>
<main>
    <ZoomToggle></ZoomToggle>
    <LeafletMap bind:this={leafletMap} options={mapOptions}>
        <TileLayer url={tileUrl} options={tileLayerOptions}/>
        {#each measurements as {lat, lon}}
            <Circle latLng={[lat, lon]} radius={10} color="black" fillColor="black"></Circle>
        {/each}
    </LeafletMap>
</main>
<Footer></Footer>

<style>
    @import 'leaflet/dist/leaflet.css';
    @import "@fontsource/montserrat/400.css";
    @import "@fontsource/montserrat/500.css";
    @import "@fontsource/montserrat/700.css";
    @import "../styles.css";

    :global(body) {
        min-height: 100svh;
        display: grid;
        grid-template-rows: max-content 1fr max-content;
    }

    main {
        position: relative
    }
</style>

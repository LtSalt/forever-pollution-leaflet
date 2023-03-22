<script>
    import { LeafletMap, TileLayer, Circle, Popup, Tooltip } from 'svelte-leafletjs';
	import Footer from '../lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
	import Subheader from '../lib/components/Subheader.svelte';
	import ThemeToggle from '../lib/components/ThemeToggle.svelte';
	import ZoomToggle from '../lib/components/ZoomToggle.svelte';

    const mapOptions = {
        center: [51.509865, -0.118092],
        zoom: 4
    }

    // const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tileUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'";

    const tileLayerOptions = {
        minZoom: 0,
        maxZoom: 12,
        attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
    }

    let leafletMap;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    function setDecimals(number) {
        return number.toFixed(2)
    }

    export let data;
    let measurements = data.fp.filter(d => d.pfas_sum && d.city)
    measurements = measurements.map(m => ({...m, city: capitalizeFirstLetter(m.city)}))
    measurements = measurements.map(m => ({...m, pfas_sum: m.pfas_sum.toFixed(1)}))

    $: console.log(data)

</script>

<Header padding="8px 12px">
    <ThemeToggle slot="left" className="hover"></ThemeToggle>
    <h2 slot="center"><a href="https://foreverpollution.eu/">The Forever Pollution Project</a></h2>
</Header>
<Subheader></Subheader>
<main>
    <!-- <h1>The Map of Forever Pollution in Europe</h1> -->
    <LeafletMap bind:this={leafletMap} options={mapOptions}>
        <ZoomToggle></ZoomToggle>
        <TileLayer url={tileUrl} options={tileLayerOptions}/>
        {#each measurements as m}
            <Circle latLng={[m.lat, m.lon]} radius=3000 opacity=0 fillOpacity=0.7 fillColor="black">
                <!-- <Tooltip>
                    <div class="tooltip">
                        <h3>{m.city}</h3>
                            <hr>
                        <p><b>PFAS Level: </b>{m.pfas_sum} ng/kg</p>
                    </div>
                </Tooltip> -->
            </Circle>
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
        grid-template-rows: max-content max-content 1fr max-content;
    }

    /* .tooltip {
        height: 100%;
        width: 100%;
        color: var(--color-primary);
    } */
</style>

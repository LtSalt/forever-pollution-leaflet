<script>
    import L from "leaflet";
    import { getContext } from "svelte";

    const { getMap } = getContext(L)
    let zoom = false;

    $: if (!zoom) {
        getMap().zoomControl.disable();
        getMap().scrollWheelZoom.disable();
        getMap().touchZoom.disable();
        getMap().doubleClickZoom.disable();
        getMap().boxZoom.disable();
        getMap().keyboard.disable();
    } else if (zoom) {
        getMap().zoomControl.enable();
        getMap().scrollWheelZoom.enable();
        getMap().touchZoom.enable();
        getMap().doubleClickZoom.enable();
        getMap().boxZoom.enable();
        getMap().keyboard.enable();
    }
</script>

<div id="controls">
    <div id="zoom-toggle-wrapper">
        <h3>Zoom in</h3>
        <label for="toggle-zoom">
            <input type="checkbox" id="toggle-zoom" bind:checked={zoom}>
        </label>
    </div>
</div>

<style lang="scss">
    #controls {
            position: absolute;
            left: 50%;
            top: 12px;
            z-index: 1000;

            #zoom-toggle-wrapper {
                width: 116px;
                padding: 4px 8px;
                display: flex;
                justify-content: space-between;
                gap: 4px;
                border-radius: 100vw;
                align-items: center;
                background-color: var(--bg-primary);

            }


            label:has(#toggle-zoom) {
                display: block;
                width: 40px;
                height: 20px;
                position: relative;
                cursor: pointer;

                &::before {
                    content: "";
                    position: absolute;
                    width: 100%; 
                    height: 100%;
                    background-color: var(--bg-surface);
                    border-radius: 100vw;
                }

                &::after {
                    content: "";
                    width: 16px;
                    height: 16px;
                    background-color: var(--bg-primary);
                    position: absolute;
                    top: 50%;
                    left: 2px;
                    transform: translateY(-8px);
                    border-radius: 50%;
                    transition: transform 0.3s;
                }
            }

            label:has(#toggle-zoom:checked) {

                &::before {
                    background-color: var(--bg-active);
                }
                &::after {
                    transform: translate(20px, -8px);
                }
            }

            input {
                display: none;
            }
        }
</style>
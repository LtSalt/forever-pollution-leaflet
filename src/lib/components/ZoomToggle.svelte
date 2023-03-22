<script>
    import { zoom } from "$lib/stores/zoom.js";
</script>

<div id="controls">
    <div id="zoom-toggle-wrapper">
        <h2>Zoom in</h2>
        <label for="toggle-zoom">
            <input type="checkbox" id="toggle-zoom" bind:checked={$zoom}>
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
                width: 108px;
                display: flex;
                justify-content: space-between;
                padding: 4px 6px;
                border-radius: 100vw;
                align-items: center;
                background-color: white;

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
                    background-color: rgb(220, 220, 220);
                    border-radius: 100vw;
                }

                &::after {
                    content: "";
                    width: 16px;
                    height: 16px;
                    background-color: white;
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
                    background-color: var(--color-primary);
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
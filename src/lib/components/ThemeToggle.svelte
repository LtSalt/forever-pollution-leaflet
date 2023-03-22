<script>
    import { SunIcon, MoonIcon } from "svelte-feather-icons";

    export let size;
    export let className;

    let theme = "light";

</script>

<div id="theme-toggle">
    <label for="theme-light" class={className}>
        <SunIcon {size}></SunIcon>
        <input type="radio" name="theme-toggle" id="theme-light" value="light" bind:group={theme}>
    </label>
    <label for="theme-dark" class={className}>
        <MoonIcon {size}></MoonIcon>
        <input type="radio" name="theme-toggle" id="theme-dark" value="dark" bind:group={theme}>
    </label>
</div>

<style lang="scss">
    #theme-toggle {
        label {
            // background-color: ;;
            border-radius: 100vw;
            display: flex;
            cursor: pointer;

            &:has(input:checked) {
                display: none
            }
        }

        :global(svg:hover) {
            // stroke: var(--bg-active);
            // stroke: orange;
            // fill: var(--bg-active)
        }

        input {
            display: none;
        }

    }
</style>
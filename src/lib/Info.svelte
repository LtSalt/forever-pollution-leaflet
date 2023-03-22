<script>
    import { HelpCircleIcon } from "svelte-feather-icons";

    export let size;


</script>

<button>
    <HelpCircleIcon {size}></HelpCircleIcon>
</button>

<style lang="scss">
    :global(svg) {
        stroke: var(--clr-weak);

        &:hover {
            stroke: var(--clr-accent)
        }
    }
</style>
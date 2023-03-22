<script>
    export let padding = "0";
    export let className;
</script>


<header id="main-header" class={className} style="padding: {padding}">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="center">
        <slot name="center"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
</header>


<style lang="scss">
    header {
        display: flex;
        align-items: center;

        > * {
            display: flex;
            flex: 1;
        }

        .left {
            // flex: 1;
            justify-content: left;
        }

        .center {
            justify-content: center;
            // flex: 999;
        }

        .right {
            // flex: 1;
            justify-content: flex-end;
        }

    }
</style>
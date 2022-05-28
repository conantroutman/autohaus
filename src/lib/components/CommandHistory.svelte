<script lang='ts'>
    import { userCommands } from '$lib/stores'
    import { page } from '$app/stores';

    let commands: string[] = []

    userCommands.subscribe(value => commands = value) 

</script>

{#if $page.routeId != 'auto/[autonamen]'}

    <ul>
        {#each commands.slice(-10) as command}
        <li>
            {'> ' + command}
        </li>
        {/each}
    </ul>
{/if}

<style>
    ul {
        list-style: none;
        padding: 0;
        font-size: 30px;
    }
</style>
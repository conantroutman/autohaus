<script lang='ts'>
    import { userCommands } from '$lib/stores'

    let commands: string[] = []

    userCommands.subscribe(value => commands = value)

</script>

<ul>
    {#each commands as command}
    <li>
        {command}
    </li>
    {/each}
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
    }
</style>
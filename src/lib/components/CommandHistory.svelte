<script lang='ts'>
    import { userCommands } from '$lib/stores'

    let commands: string[] = []

    userCommands.subscribe(value => commands = value)


</script>

<ul>
    {#each commands.slice(-10) as command}
    <li>
        {'> ' + command}
    </li>
    {/each}
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
        font-size: 30px;
    }
</style>
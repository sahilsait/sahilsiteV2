<script>

import { onMount } from 'svelte';

onMount(() => {
  document.title = 'sahilsait';
});


import Topbar from '../components/Topbar.svelte';
import Navbar from '../components/Navbar.svelte';

</script>

<style>
    :global(html, body) {
        color: limegreen;
        background-color: black;
        margin-left: 10%;
        margin-right: 10%;
    }
</style>

<div>
    <Topbar />
    <Navbar />
</div>


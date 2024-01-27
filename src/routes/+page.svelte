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
        background-color: #6F9BD1;
        scroll-behavior: smooth;
    }
</style>

<div class="max-w-screen-md mx-auto px-4 font-Roboto">
    <Topbar />
    <Navbar />
</div>


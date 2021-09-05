<script>
  import { tick } from "svelte";

  import { tweened } from "svelte/motion";
  import ShootingStar from "./ShootingStar.svelte";

  let star1 = true;
  let star2 = true;
  let star3 = true;

  setInterval(() => {
    star1 = false;
    tick().then(() => (star1 = true));
  }, 3000);

  setInterval(() => {
    star2 = false;
    tick().then(() => (star2 = true));
  }, 4500);

  setInterval(() => {
    star3 = false;
    tick().then(() => (star3 = true));
  }, 5600);
</script>

<div class="w-screen h-screen absolute overflow-hidden">
  {#if star1}
    <ShootingStar delay="0s" startY={-30} startX={-30} />
  {/if}
  {#if star2}
    <ShootingStar delay=".25s" startY={20} startX={-30} />
  {/if}
  {#if star3}
    <ShootingStar delay=".5s" startX={10} startY={-30} />
  {/if}
</div>

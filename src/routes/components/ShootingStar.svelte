<script>
  import { onMount, tick } from "svelte";

  import { tweened } from "svelte/motion";

  export let startX;
  export let startY;
  export let delay = "0s";
</script>

<div class="star absolute" style="top: {startY}vh; left: {startX}vw; animation-delay: {delay};" />

<style>
  @keyframes star-animation {
    0% {
      transform: var(--trans) translate(0, 0);
    }
    100% {
      transform: var(--trans) translate(100vw, 100vh);
    }
  }

  .star {
    width: 8rem;
    height: 0.15rem;
    --trans: rotate(20deg) skewX(88deg);
    background-color: #fff;
    animation: star-animation 6s linear;
  }
</style>

<script>
    export let size = "large";
    export let color = "black";
</script>
<style>
  .signature {
    --size: 15rem;
    font-family: var(--cursiveFont);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: var(--size);
    line-height: var(--size);
    padding: calc(var(--size) /1.6) 0;
  }
  .black {
      color: var(--black);
  }
  .white {
      color: var(--white);
  }
  .signature.small {
    --size: 3rem;
  }
  @media (max-width: 1024px) {

    .signature {
        --size: 14vw;
    }
    .signature.small {
      --size: 2rem;
    }
  }
 </style>

<div class={["signature", size, color].join(" ")} >
  <span>Natalie</span><span class='ampersand'>&</span>
  <span>Drew</span>
</div>

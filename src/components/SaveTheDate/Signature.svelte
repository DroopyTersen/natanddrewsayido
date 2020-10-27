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

  @media (max-width: 1024px) {

    .signature {
        --size: 14vw;
    }
  }
 </style>

<div class={["signature", size, color].join(" ")} >
  <span>Natalie</span><span style="margin:0 20px">&</span>
  <span>Drew</span>
</div>

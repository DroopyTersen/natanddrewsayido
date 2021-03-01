<script>
  export let title = "";
  export let image = "";
  export let location = "";
</script>

<div class="card">
  <div class="card-image">
    <img src={image} alt={title} />
  </div>
  <div class="card-header">
    <div class="location">{location}</div>
    <h4>{title}</h4>
  </div>
  <div class="card-body">
    <slot />
  </div>
</div>

<style>
  .card-header h4 {
    margin: 0;
  }
</style>

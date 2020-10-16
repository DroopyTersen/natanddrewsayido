<script lang="ts">
  import * as Papa from "papaparse";
  import type { Guest } from "../services/guest.service";
  let csvText = "";
  $: csvResult = Papa.parse(csvText, { header: true }) as { data: Guest[] };
  $: {
    console.log("$:csvResult -> csvResult", csvResult);
  }
</script>

<style>
  th,
  td {
    text-align: left;
    border-bottom: 1px solid #eee;
    padding: 0px 10px;
  }
</style>

<h2>Guests CSV</h2>
<div>
  <label for="csv-text">CSV Text</label>
  <textarea id="csv-text" bind:value={csvText} />
</div>

<h2>Parsed Guests</h2>
<table>
  <thead>
    <th>Name</th>
    <th>Address</th>
    <th>Email</th>
    <th>Phone</th>
  </thead>
  <tbody>
    {#each csvResult.data as guest}
      <tr>
        <td>{guest.name}</td>
        <td>
          {guest.address}
          <br />
          {guest.city},
          {guest.state}
          {guest.zipcode}
        </td>
        <td>{guest.email}</td>
        <td>{guest.phone}</td>
      </tr>
    {/each}
  </tbody>
</table>

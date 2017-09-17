<template>
  <div>
    <h1>Contact</h1>

    <div class="form-group">
      <label class="form-control-label" for="inputSuccess2">Input with success</label>
      <input type="text" class="form-control is-valid" id="inputSuccess2" aria-describedby="inputSuccess2Status">
    </div>
    <div class="form-group">
      <label class="form-control-label" for="inputError2">Input with error</label>
      <input type="text" class="form-control is-invalid" id="inputError2" aria-describedby="inputError2Status">
    </div>
    <div class="form-group">
      <label class="form-control-label" for="inputGroupSuccess1">Input group</label>
      <div class="input-group">
        <span class="input-group-addon">@</span>
        <input type="text" class="form-control" id="inputGroupSuccess1" aria-describedby="inputGroupSuccess1Status">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contact'
  }
</script>

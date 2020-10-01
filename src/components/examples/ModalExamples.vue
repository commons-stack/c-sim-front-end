<template>
  <div>
    <p class="mb-0p5">Modals</p>
    <modal ref="my_modal">
      <p>This is modal</p>
      <p>Closable with clickaway</p>
      <p>Closable with ESC</p>
      <p>Code example:</p>
      <pre>
        &lt;modal ref="my_modal"&gt;
          &lt;p&gt;This is modal&lt;/p&gt;
          &lt;p&gt;Closable with clickaway&lt;/p&gt;
          &lt;p&gt;Closable with ESC&lt;/p&gt;
        &lt;/modal&gt;
        &lt;button @click="$refs.my_modal.show()"&gt;Open modal&lt;/button&gt;
      </pre>
    </modal>
    <button primary @click="$refs.my_modal.show()">
      Open modal
    </button>
  </div>
</template>

<script>
export default {
  name: 'modal-examples',
}
</script>

<style scoped lang="scss"></style>

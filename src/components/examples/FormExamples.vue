<template>
  <div>
    <p>Forms</p>
    <!-- layout -->
    <grid gap="1" gtc="200px 1fr" align-items-start class="mt-1">
      <!-- sidebar -->
      <grid gap="1">
        <button
          secondary
          expand
          @click="$store.dispatch('ExampleModule/getAll')"
        >
          Get All Resources
        </button>
        <!-- create form -->
        <grid tag="form" gap="0.5">
          <p>Create resource:</p>
          <form-input
            type="number"
            placeholder="id"
            min="0"
            store-model="ExampleModule/createResourceId"
          />
          <form-input
            placeholder="name"
            minlength="4"
            store-model="ExampleModule/createResourceName"
          />
          <button
            primary
            @click.prevent="$store.dispatch('ExampleModule/create')"
          >
            Create
          </button>
        </grid>
        <!-- update form -->
        <grid tag="form" gap="0.5">
          <p>Update resource:</p>
          <form-input
            type="number"
            placeholder="id"
            min="0"
            store-model="ExampleModule/updateResourceId"
          />
          <form-input
            placeholder="name"
            minlength="4"
            store-model="ExampleModule/updateResourceName"
          />
          <button
            primary
            @click.prevent="$store.dispatch('ExampleModule/update')"
          >
            Update
          </button>
        </grid>
      </grid>
      <!-- sidebar end -->
      <!-- list -->
      <div>
        <p>Resource list</p>
        <grid gap="1" gtc-fill="200px" class="mt-1">
          <div
            class="bg-light p-1"
            v-for="resource in resources"
            :key="resource.id"
          >
            <grid gtc="1fr auto">
              <p>ID: {{ resource.id }}</p>
              <button
                @click="$store.dispatch('ExampleModule/delete', resource)"
              >
                &times;
              </button>
            </grid>
            <p>Name: {{ resource.name }}</p>
          </div>
        </grid>
      </div>
      <!-- list end -->
    </grid>
    <!-- layout end -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'form-examples',
  props: {},
  methods: {},
  computed: {
    ...mapState('ExampleModule', ['resources']),
  },
}
</script>

<style scoped lang="scss"></style>

<template>
  <grid gap="1">
    <p text-center>Examples</p>
    <break />
    <store-examples />
    <break />
    <form-examples />
    <break />
    <notification-examples />
    <break />
    <icon-examples />
    <break />
    <modal-examples />
    <break />
    <i18n-examples />
  </grid>
</template>

<script>
import StoreExamples from '@/components/examples/StoreExamples.vue'
import FormExamples from '@/components/examples/FormExamples.vue'
import NotificationExamples from '@/components/examples/NotificationExamples.vue'
import IconExamples from '@/components/examples/IconExamples.vue'
import ModalExamples from '@/components/examples/ModalExamples.vue'
import I18nExamples from '@/components/examples/I18nExamples.vue'

export default {
  name: 'Examples',
  components: {
    StoreExamples,
    FormExamples,
    NotificationExamples,
    IconExamples,
    ModalExamples,
    I18nExamples,
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <grid :gtc="titleOnly ? '1fr' : '120px 1fr 120px'" class="x-wrap">
    <div justify-self-start v-if="!titleOnly">
      <p class="x-text-button inline levels-button mb-1" @click="$refs.levels.show()">
        Levels
      </p>
      <modal :bg="false" overlay="dark" ref="levels">
            <div class="layout-modal">
              <h2 class="teko-title">Levels</h2>
              <commons-navigation :mobile="true"/>
            </div>
      <button commons class="mt-2" @click="$refs.levels.hide()">OK</button>
      </modal>
    </div>
    <p class="x-title" justify-self align-self>DESIGNING THE RxC COMMONS</p>
    <flex gap="1" justify-self-end v-if="!titleOnly">
      <p class="x-text-button inline" v-if="help" @click="$emit('help')">Help</p>
      <p class="x-text-button inline" v-if="exit" @click="openModal('exit')">Exit</p>
    </flex>
    <modal ref="quit" bg="#222" overlay x-class="border-radius-s p-2 container-xs box">
      <p class="text-center">{{ modal.text }}</p>
      <p class="text-center">All input data will be reset.</p>
      <grid gtc="1fr 1fr" class="justify-items mt-2">
        <button class="x-button" error @click="modal.confirmAction()">
          {{ modal.confirmText }}
        </button>
        <button class="x-button" success @click="modal.declineAction()">
          {{ modal.declineText }}
        </button>
      </grid>
    </modal>
  </grid>
</template>

<script>
export default {
  name: 'commons-header',
  props: {
    exit: {
      type: Boolean,
      default: true,
    },
    help: {
      type: Boolean,
      default: true,
    },
    restart: {
      type: Boolean,
      default: true,
    },
    titleOnly: Boolean,
  },
  data() {
    return {
      activeModal: 'exit',
    }
  },
  methods: {
    openModal(modalName) {
      this.activeModal = modalName
      this.$refs.quit.show()
    },
  },
  computed: {
    modal() {
      return {
        exit: {
          text: 'Are you sure you want to exit?',
          confirmText: 'Yes, exit',
          confirmAction: () => {
            this.$store.commit('CommonsModule/clearForm')
            this.$router.push('/')
          },
          declineText: 'No',
          declineAction: () => this.$refs.quit.hide(),
        },
        reset: {
          text: 'Are you sure you want to restart?',
          confirmText: 'Yes, restart',
          confirmAction: () => {
            this.$store.commit('CommonsModule/clearForm')
            this.$router.push('/level/1/2')
          },
          declineText: 'No',
          declineAction: () => this.$refs.quit.hide(),
        },
      }[this.activeModal]
    },
  },
}
</script>

<style scoped lang="scss">
.x-wrap {
  position: relative;
  top: -30px;
  width: 100%;
  @include m {
    top: -40px;
  }
}
.x-button {
  width: 100px;
  height: 30px;
  border-radius: 3px;
}
.x-title {
  @include letter-spacing(8px);
  font-size: 12px;
  font-weight: bold;
  @extend .font-lato;
  opacity: 0.4;
  text-align: center;
}
.x-text-button {
  @extend .text-button, .font-ibm;
  font-size: 16px;
}
.levels-button {
  @include l {
    display: none;
  }
}
</style>

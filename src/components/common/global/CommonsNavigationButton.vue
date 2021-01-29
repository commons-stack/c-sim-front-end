<template>
  <grid
    gap="1"
    gtc="auto auto"
    class="x-wrap"
    :active="currentLevel === level"
    :visited="currentLevel >= level"
    @click="clickHandler"
  >
    <div class="x-button">{{ level }}</div>
    <p class="x-text">{{ levelName }}</p>
    <modal ref="modal" :bg="false">
      <div class="modal-content">
        <h2 class="teko-subtitle">Going back will reset your parameters</h2>
        <p class="text-center">If you go back the parameters you previously selected will be reset.</p>
        <button commons class="mt-2" @click="$router.push(`/level/${level}/1`)">Continue</button>
        <div style="margin-top: 16px;">
          <p class="x-text-button mh-0p5 inline" @click="clickTest">Cancel</p>
        </div>
      </div>
    </modal>
  </grid>
</template>

<script>
import Modal from '../../utils/Modal'

const levelNames = {
  0: 'intro',
  1: 'hatchers',
  2: 'initial proposals',
  3: 'hatch tribute',
  4: 'max spending',
  5: 'voting speed',
  6: 'exit tribute',
  7: 'run cadcad',
}

export default {
  name: 'commons-navigation-button',
  components: { Modal },
  props: {
    level: Number,
  },
  data() {
    return {
      levelName: levelNames[this.level],
    }
  },
  computed: {
    currentLevel() {
      const routeLevelIndex = '/level/level-number/'.split('/').findIndex(x => x === 'level-number')
      return Number(this.$route.path.split('/')[routeLevelIndex])
    },
  },
  methods: {
    clickHandler() {
      if (this.level >= this.currentLevel) return
      this.$refs.modal.show()
    },
    clickTest () {
      console.log('test')
      this.$refs.modal.hide()
    }
  },
}
</script>

<style scoped lang="scss">
.modal-content {
  background: #212121;
  text-align: center;
  padding: 24px;
  max-width: 450px
}
.x-wrap {
  align-items: center;
  justify-content: flex-start;
}
.x-button {
  @extend .flex, .flex-center;
  position: relative;
  height: 40px;
  width: 40px;
  font-size: 16px;
  border: 2px solid transparent;
  opacity: 0.4;
  border-image-slice: 2;
  border-image-source: linear-gradient(94.92deg, #67de69 -57.72%, #0047b0 114.27%);
  &::before {
    content: '';
    transition: all 0.2s ease-in-out;
    opacity: 0.2;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      98.03deg,
      rgba(103, 222, 105, 0.5) -7.95%,
      rgba(0, 71, 176, 0.5) 116.37%
    );
  }
}

.x-text {
  @extend .uppercase, .font-lato;
  @include letter-spacing(1px);
  font-size: 12px;
  color: white;
  opacity: 0.4;
}

.x-wrap[visited]:hover > .x-button::before {
  opacity: 1;
}

.x-wrap[visited] {
  cursor: pointer;
  & > .x-text {
    color: #41a684;
    opacity: 1;
  }
  & > .x-button {
    opacity: 1;
  }
}

.x-wrap[active] {
  & > .x-text {
    color: white;
  }
  cursor: default;
  & > .x-button::before {
    opacity: 1;
  }
}

.x-text-button {
  @extend .text-button, .font-ibm;
  font-size: 16px;
}
</style>

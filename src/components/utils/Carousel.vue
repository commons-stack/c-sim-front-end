<template>
  <div>
    <transition-group
      name="slide"
      appear
      tag="div"
      class="x-carousel"
      :class="carouselClass"
      :style="carouselStyles"
      @scroll.native="scrollHandler"
      @mousedown.native="mousedownHandler"
      @mouseup.native="mousedown = false"
      @mouseleave.native="mousedown = false"
      @mousemove.native="mousemoveHandler"
      ref="carousel"
    >
      <component
        v-for="(item, index) in data"
        v-bind="item"
        :is="item.is"
        :key="item.id"
        :data="item.data"
        ref="cards"
        :class="[...carouselCardClass, ...item.class]"
        :style="{ ...carouselCardStyles, ...item.style }"
        @click="clickHandler(index)"
      />
    </transition-group>
    <flex
      justify-content
      align-items
      gap="0.7"
      style="height: 10px"
      v-if="indicator"
    >
      <icon
        icon="Dot"
        v-for="(item, index) in data"
        class="transition"
        :key="item.id"
        :color="activeIndex === index ? 'black' : 'grey'"
        :class="
          (index === 0 || data.length - 1 === index) &&
            activeIndex !== index &&
            'x-dot-small'
        "
      />
    </flex>
  </div>
</template>

<script>
import { utils } from '../../utils/utils.js'

export default {
  name: 'carousel',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    indicator: Boolean,
    gap: {
      type: [Number, String],
      default: 1,
    },
    selectable: Boolean,
    preservePadding: Boolean,
    center: [Boolean, String],
    snapY: Boolean,
  },
  data() {
    return {
      carousel: undefined,
      activeIndex: 0,
      cardWidth: undefined,
      parentStyles: undefined,
      cardClickAt: 0,
      mousedown: false,
      mousedownAt: 0,
      mousedownScroll: 0,
      gapInPx: utils.units.remToPx(this.gap),
    }
  },
  mounted() {
    window.addEventListener('resize', this.calcCardWidth)
    this.carousel = this.$refs.carousel.$el
    this.$nextTick(() => {
      this.parentStyles = window.getComputedStyle(this.$el.parentElement)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calcCardWidth)
  },
  watch: {
    data: {
      immediate: true,
      handler(x) {
        x.length &&
          this.$nextTick(() => (this.cardWidth = this.getCard()?.clientWidth))
      },
    },
    activeIndex: {
      immediate: true,
      handler(x) {
        this.$emit('active', x)
      },
    },
  },
  methods: {
    getCard() {
      return this.$refs.cards[0]?.$el ?? this.$refs.cards[0]
    },
    calcCardWidth: utils.throttle(function() {
      this.cardWidth = this.getCard()?.clientWidth
    }, 500),
    clickHandler(index) {
      this.$emit('click', index)
      if (Date.now() - this.mousedownAt > 180) return
      if (index === this.activeIndex) this.$emit('confirm', index)
      this.activeIndex = index
      this.cardClickAt = Date.now()

      const child = [...this.carousel.children][index].getBoundingClientRect()
      const crsl = this.carousel.getBoundingClientRect()
      const pos = child.left - crsl.left + child.width / 2
      const target = crsl.width / 2
      this.snapY &&
        window.scrollBy({
          top: child.top - this.gapInPx,
          behavior: 'smooth',
        })
      this.carousel.scrollBy({
        left: pos - target,
        behavior: 'smooth',
      })
    },
    scrollHandler: utils.throttle(function() {
      if (Date.now() - this.cardClickAt < 500) return
      const scrollMax = this.carousel.scrollWidth - this.carousel.clientWidth
      const index =
        Math.ceil(this.carousel.scrollLeft / (scrollMax / this.data.length)) - 1
      this.activeIndex = index < 0 ? 0 : index
    }, 75),
    mousedownHandler() {
      this.mousedown = true
      this.mousedownAt = Date.now()
      this.mousedownScroll = this.carousel.scrollLeft + event.clientX
    },
    mousemoveHandler() {
      if (!this.mousedown) return
      this.$refs.carousel.$el.scrollLeft = this.mousedownScroll - event.clientX
    },
  },
  computed: {
    carouselStyles() {
      const styles = {}
      styles.gap = styles['--gap'] = this.gap + 'rem'
      styles['--card-width'] = this.cardWidth / 2 + 'px'
      if (!this.mousedown)
        styles.scrollSnapType = this.center ? 'x mandatory' : 'x proximity'
      if (!this.preservePadding) {
        styles.marginLeft = `-${this.parentStyles?.getPropertyValue(
          'padding-left',
        )}`
        styles.marginRight = `-${this.parentStyles?.getPropertyValue(
          'padding-right',
        )}`
      }
      return styles
    },
    carouselClass() {
      const classes = []
      if (!this.selectable) classes.push('x-not-selectable')
      if (this.center) classes.push('x-center')
      return classes
    },
    carouselCardStyles() {
      const styles = {}
      if (!this.mousedown)
        styles.scrollSnapAlign = this.center ? 'center' : 'nearest'
      return styles
    },
    carouselCardClass() {
      const classes = []
      if (this.indicator) classes.push('mb-2')
      return classes
    },
  },
}
</script>

<style scoped lang="scss">
.x-carousel {
  @extend .overflow-x, .flex, .flex-nowrap;
  -webkit-overflow-scrolling: touch;
  & > div {
    flex: 0 0 auto;
  }
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &::before,
  &::after {
    content: '';
    flex: 0 0 2px;
  }
}
.x-center {
  &::before,
  &::after {
    content: '';
    flex: 0 0 calc(50% - var(--card-width) - var(--gap));
  }
}
.x-not-selectable * {
  user-select: none;
}
.x-dot-small {
  width: 4px;
}
</style>

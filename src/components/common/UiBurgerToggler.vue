<template>
  <div class="ui-burger-toggler white" @click="toggle">
    <span></span><span></span><span></span>
    <span></span><span></span><span></span>
  </div>
</template>

<script>
export default {
  name: 'ui-burger-toggler',
  data () {
    return {
      _opened: false
    }
  },
  methods: {
    toggle() {
      if(! this._opened) {
        this.open()
      } else {
        this.close()
      }
      this.$emit('burger-toggled')
    },
    open() {
      this.$el.classList.add('open')
      this._opened = true
      this.$emit('burger-opened')
    },
    close() {
      this.$el.classList.remove('open')
      this._opened = false
      this.$emit('burger-closed')
    }
  },
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this._opened = this.opened
  }
}
</script>

<style lang="scss">
.ui-burger-toggler {
  width: 20px;
  height: 18px;
  position: relative;
  z-index: 11;
  margin: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 50%;
    background: #3e3f43;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
    &:nth-child(even) {
      left: 50%;
      border-radius: 0 9px 9px 0;
    }
    &:nth-child(odd) {
      left: 0px;
      border-radius: 9px 0 0 9px;
    }
    &:nth-child(1), &:nth-child(2) {
      top: 0px;
    }
    &:nth-child(3), &:nth-child(4) {
      top: 6px;
    }
    &:nth-child(5), &:nth-child(6) {
      top: 12px;
    }
  }
  &.white {
    span {
      background: #fff;
    }
  }
  &.open {
    span {
      &:nth-child(1), &:nth-child(6) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      &:nth-child(2), &:nth-child(5) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      &:nth-child(1) {
        left: 2px;
        top: 5px;
      }

      &:nth-child(2) {
        left: calc(50% - 2px);
        top: 5px;
      }
      &:nth-child(3) {
        left: -50%;
        opacity: 0;
      }

      &:nth-child(4) {
        left: 100%;
        opacity: 0;
      }

      &:nth-child(5) {
        left: 2px;
        top: 11px;
      }

      &:nth-child(6) {
        left: calc(50% - 2px);
        top: 11px;
      }
    }
  }
}
</style>

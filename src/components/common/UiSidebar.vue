<template>
	<div 
		class="ui-sidebar"
		:class="{ 'ui-sidebar-right': positionRight, 'ui-sidebar-left': !positionRight }"
        @keyup.esc="close" tabindex="0"
    >
    	<div class="ui-sidebar-content">
            <slot name="top-con"></slot>
            <slot name="bottom-con"></slot>
        </div>

        <ui-backdrop class="ui-sidebar-backdrop" @close="close"></ui-backdrop>
    </div>
</template>

<script>
import UiBackdrop from './UiBackdrop.vue';

export default {
	name: 'ui-sidebar',

    data() {
        return {
            fullWidth: document.documentElement.clientWidth,
            _visible: true
        }
    },

	props: {
        visible: {
            type: Boolean,
            default: true
        },
        positionRight: {
            type: Boolean,
            default: false
        },
		mMode: {
			type: Boolean,
			default: false
		}
	},

    created() {
        this.$on('sidebar-opened', this.handleOpened)
        this.$on('sidebar-closed', this.handleClosed)
    },

    beforeDestroy() {
        this.$off('sidebar-opened', this.handleOpened)
        this.$off('sidebar-closed', this.handleClosed)
    },

	methods: {
        show() {
            this.open();
        },
        open() {
            console.log(this.mMode)
            this._visible = true
            if(this.$el) {
                this.$el.classList.add('opened')
                if(this.mMode) {
                    this.$el.classList.add('m-mode')
                }
            }
            this.$emit('sidebar-opened')
        },
        close() {
            this._visible = false;
            if(this.$el) {
                this.$el.classList.remove('opened')
                if(this.mMode) {
                    this.$el.classList.remove('m-mode')
                }
            }
            this.$emit('sidebar-closed');
        },
		toggle() {
            if(this._visible) {
                this.close()
            } else {
                this.open()
            }
		},
        handleResize() {
            this.fullWidth = document.documentElement.clientWidth
            if(this.fullWidth <= 1024 && this._visible) {
                this.close()
            }
            if(this.fullWidth > 1024 && !this._visible && this.visible) {
                this.open()
            }
        },
        hasAdjustableCon() {
            return this.$parent.$refs.adj_container
        },
        handleOpened() {
            if(this.hasAdjustableCon()) {
                this.$parent.$refs.adj_container.classList.add('openedSidebar')
                this.$parent.$refs.adj_container.classList.add(!this.positionRight ? 'left' : 'right')
            }
        },
        handleClosed() {
            if(this.hasAdjustableCon()) {
                this.$parent.$refs.adj_container.classList.remove('openedSidebar')
            }
        }
	},

	mounted() {
        this._visible = this.visible

        window.addEventListener('resize', this.handleResize)
        if(this.visible) {
            this.show()
        }
        this.handleResize()
	},

    components: {
        UiBackdrop
    }
}
</script>

<style lang="scss">
.ui-sidebar {
    .ui-sidebar-content {
        background-color: #fff;
        width: 260px;
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 100;
        overflow: auto;
        pointer-events: none;
        -webkit-overflow-scrolling: touch;
        transition: all .4s cubic-bezier(.25,.8,.25,1);
        transition-property: transform;
        will-change: transform;
        
        .router-link-active {
          &.router-link-exact-active {
            font-family: 'CircularStdBold';
            color: #00abff;
          }
        }
    }
    &.ui-sidebar-left .ui-sidebar-content{
        left: 0;
        transform: translate3D(-100%, 0, 0);
    }
    &.ui-sidebar-right .ui-sidebar-content{
        right: 0;
        transform: translate3D(100%, 0, 0);
    }
    &.opened .ui-sidebar-content{ 
        transform: translate3D(0,0,0);
        pointer-events: auto;
        box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
    }
    &:not(.opened).ui-sidebar-left .ui-sidebar-content{
        @media (max-width:1024px) {
            transform: translate3D(-100%,0,0);
        }
    }
    &:not(.opened).ui-sidebar-right .ui-sidebar-content{
        @media (max-width:1024px) {
            transform: translate3D(100%,0,0);
        }
    }
    .ui-sidebar-backdrop {
        position: fixed;
    }
    &.opened {
        .ui-sidebar-backdrop {
            @media (max-width:1024px) {
                opacity: 1;
                pointer-events: auto;
            }
        }
        &.m-mode {
            .ui-sidebar-backdrop {
                opacity: 1;
                pointer-events: auto;
            }
        }
    }
}
.openedSidebar {
    &.left {
        padding-left: 260px !important;
    }
    &.right {
        padding-right: 260px !important;
    }
    @media (max-width:1024px) {
        &.left {
            padding-left: 0px !important;
        }
        &.right {
            padding-right: 0px !important;
        }
    }
}
</style>
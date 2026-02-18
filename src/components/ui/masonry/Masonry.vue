<template>
  <div ref="containerRef" class="relative w-full h-full">
    <div
      v-for="item in grid"
      :key="item.id"
      :data-key="item.id"
      class="absolute box-content"
      :style="{ willChange: 'transform, width, height, opacity' }"
      @click="openUrl(item.url)"
      @mouseenter="e => handleMouseEnter(item.id, e.currentTarget as HTMLElement)"
      @mouseleave="e => handleMouseLeave(item.id, e.currentTarget as HTMLElement)"
    >
      <div
        class="relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]"
        :style="{ backgroundImage: `url(${item.img})` }"
      >
        <div
          v-if="colorShiftOnHover"
          class="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watchEffect, nextTick, useTemplateRef } from 'vue'
import { gsap } from 'gsap'

interface Item {
  id: string
  img: string
  url: string
  height: number
}

interface MasonryProps {
  items: Item[]
  ease?: string
  duration?: number
  stagger?: number
  animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random'
  scaleOnHover?: boolean
  hoverScale?: number
  blurToFocus?: boolean
  colorShiftOnHover?: boolean
}

const props = withDefaults(defineProps<MasonryProps>(), {
  ease: 'power3.out',
  duration: 0.6,
  stagger: 0.05,
  animateFrom: 'bottom',
  scaleOnHover: true,
  hoverScale: 0.95,
  blurToFocus: true,
  colorShiftOnHover: false,
})

const isClient = typeof window !== 'undefined'

const useMedia = (queries: string[], values: number[], defaultValue: number) => {
  const get = () => {
    if (!isClient) return defaultValue
    const index = queries.findIndex(q => window.matchMedia(q).matches)
    return values[index] ?? defaultValue
  }
  const value = ref<number>(get())

  onMounted(() => {
    if (!isClient) return
    const handler = () => (value.value = get())
    queries.forEach(q => window.matchMedia(q).addEventListener('change', handler))

    onUnmounted(() => {
      queries.forEach(q => window.matchMedia(q).removeEventListener('change', handler))
    })
  })

  return value
}

const useMeasure = () => {
  const containerRef = useTemplateRef<HTMLDivElement>('containerRef')
  const size = ref({ width: 0, height: 0 })
  let resizeObserver: ResizeObserver | null = null

  onMounted(() => {
    if (!containerRef.value) return

    resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      size.value = { width, height }
    })

    resizeObserver.observe(containerRef.value)
  })

  onUnmounted(() => {
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
  })

  return [containerRef, size] as const
}

const preloadImages = async (urls: string[]): Promise<void> => {
  if (!isClient) return
  await Promise.all(
    urls.map(
      src =>
        new Promise<void>(resolve => {
          const img = new Image()
          img.src = src
          img.onload = img.onerror = () => resolve()
        })
    )
  )
}

const columns = useMedia(
  ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
  [5, 4, 3, 2],
  1
)

const [containerRef, size] = useMeasure()
const imagesReady = ref(false)
const hasMounted = ref(false)

const grid = computed(() => {
  if (!size.value.width) return []
  const colHeights = new Array(columns.value).fill(0)
  const gap = 16
  const totalGaps = (columns.value - 1) * gap
  const columnWidth = (size.value.width - totalGaps) / columns.value

  return props.items.map(child => {
    const col = colHeights.indexOf(Math.min(...colHeights))
    const x = col * (columnWidth + gap)
    const height = child.height / 2
    const y = colHeights[col]

    colHeights[col] += height + gap
    return { ...child, x, y, w: columnWidth, h: height }
  })
})

const openUrl = (url: string) => {
  if (!isClient) return
  window.open(url, '_blank', 'noopener')
}

interface GridItem extends Item {
  x: number
  y: number
  w: number
  h: number
}

const getInitialPosition = (item: GridItem) => {
  const containerRect = containerRef.value?.getBoundingClientRect()
  if (!containerRect) return { x: item.x, y: item.y }

  let direction = props.animateFrom
  if (props.animateFrom === 'random') {
    const dirs = ['top', 'bottom', 'left', 'right']
    direction = dirs[Math.floor(Math.random() * dirs.length)] as typeof props.animateFrom
  }

  switch (direction) {
    case 'top':
      return { x: item.x, y: -200 }
    case 'bottom':
      return { x: item.x, y: (isClient ? window.innerHeight : 0) + 200 }
    case 'left':
      return { x: -200, y: item.y }
    case 'right':
      return { x: (isClient ? window.innerWidth : 0) + 200, y: item.y }
    case 'center':
      return {
        x: containerRect.width / 2 - item.w / 2,
        y: containerRect.height / 2 - item.h / 2,
      }
    default:
      return { x: item.x, y: item.y + 100 }
  }
}

const handleMouseEnter = (id: string, element: HTMLElement) => {
  if (props.scaleOnHover) {
    gsap.to(`[data-key="${id}"]`, {
      scale: props.hoverScale,
      duration: 0.3,
      ease: 'power2.out',
    })
  }
  if (props.colorShiftOnHover) {
    const overlay = element.querySelector('.color-overlay') as HTMLElement
    if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 })
  }
}

const handleMouseLeave = (id: string, element: HTMLElement) => {
  if (props.scaleOnHover) {
    gsap.to(`[data-key="${id}"]`, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }
  if (props.colorShiftOnHover) {
    const overlay = element.querySelector('.color-overlay') as HTMLElement
    if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 })
  }
}

watchEffect(() => {
  if (!isClient) {
    imagesReady.value = true
    return
  }
  preloadImages(props.items.map(i => i.img)).then(() => {
    imagesReady.value = true
  })
})

watchEffect(() => {
  if (!imagesReady.value) return

  const currentGrid = grid.value
  void props.items.length
  void columns.value
  void size.value.width

  if (!currentGrid.length) return

  nextTick(() => {
    currentGrid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h }

      if (!hasMounted.value) {
        const start = getInitialPosition(item)
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(props.blurToFocus && { filter: 'blur(10px)' }),
          },
          {
            opacity: 1,
            ...animProps,
            ...(props.blurToFocus && { filter: 'blur(0px)' }),
            duration: 0.8,
            ease: 'power3.out',
            delay: index * props.stagger,
          }
        )
      } else {
        gsap.to(selector, {
          ...animProps,
          duration: props.duration,
          ease: props.ease,
          overwrite: 'auto',
        })
      }
    })

    hasMounted.value = true
  })
})
</script>

export function activeTarget(
  targets: string[],
  headerRef: HTMLElement | undefined,
  scrollY: () => number,
  scrollPadding = 20,
): string {
  const sorted = targets
    .map(target => ({
      id: target,
      top:
        document.getElementById(target)?.getBoundingClientRect().top ??
        Infinity,
    }))
    .sort((a, b) => a.top - b.top)
  if (scrollY() === 0) {
    return sorted[0]?.id
  }
  if (scrollY() + window.innerHeight >= document.documentElement.scrollHeight) {
    return sorted[sorted.length - 1]?.id
  }

  const headerHeight = headerRef?.getBoundingClientRect().height ?? 0

  return (
    (
      sorted.findLast(target => target.top < headerHeight + scrollPadding) ??
      sorted[0]
    )?.id ?? ''
  )
}

export function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
  )
}

export function isOverlappingElements(
  el1: HTMLElement | undefined,
  el2: HTMLElement | undefined,
) {
  if (!el1 || !el2) return false
  const rect1 = el1.getBoundingClientRect()
  const rect2 = el2.getBoundingClientRect()
  return isOverlappingRects(rect1, rect2)
}

export function isOverlappingRects(
  rect1: DOMRect | undefined,
  rect2: DOMRect | undefined,
) {
  if (!rect1 || !rect2) return false
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  )
}

export function playSound(url: string, volume = 1) {
  const audio = new Audio(url)
  audio.volume = volume
  audio.play()
  audio.addEventListener('ended', () => {
    audio.remove()
  })
}

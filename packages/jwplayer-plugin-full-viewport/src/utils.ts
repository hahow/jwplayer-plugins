export function addClass(target: HTMLElement, className: string) {
  return target.classList.add(className);
}

export function removeClass(target: HTMLElement, className: string) {
  return target.classList.remove(className);
}

export function hasClass(target: HTMLElement, className: string) {
  return target.classList.contains(className);
}

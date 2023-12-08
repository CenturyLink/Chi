export function Event(event: string, data = {}) {
  return new CustomEvent(event, { detail: data });
}

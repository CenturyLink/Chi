/**
 * Shared portal utility for vanilla JS floating components.
 *
 * Mirrors the CE portal system (chi-custom-elements/src/utils/portal.ts):
 *   - Portaled elements are appended to a shared #chi-portal-root container
 *     (styled via portal.scss with z-index: $zindex-portal-root / 9999)
 *   - PortalHandle captures the element's original DOM position and provides
 *     a restore() method for clean teardown
 *
 * This ensures portaled floating elements render above modals, backdrops,
 * and other overlay stacking contexts — consistent with the CE layer.
 */

const PORTAL_ROOT_ID = 'chi-portal-root';

let portalRoot = null;

/**
 * Lazily creates or finds the shared #chi-portal-root container.
 * The root element is styled by portal.scss (position: fixed, z-index: 9999,
 * pointer-events: none, overflow: visible).
 *
 * @returns {HTMLElement} The portal root element.
 */
export function getPortalRoot() {
  if (!portalRoot || !portalRoot.isConnected) {
    portalRoot = document.getElementById(PORTAL_ROOT_ID);
    if (!portalRoot) {
      portalRoot = document.createElement('div');
      portalRoot.id = PORTAL_ROOT_ID;
      document.body.appendChild(portalRoot);
    }
  }
  return portalRoot;
}

/**
 * Moves an element into the shared #chi-portal-root container and returns
 * a handle for restoring it to its original DOM position.
 *
 * @param {HTMLElement} el - The element to portal.
 * @param {string} [ownerId] - Optional owner ID for portal-aware containment checks.
 *   Sets data-chi-portal-owner on the element.
 * @returns {{ originalParent: HTMLElement|null, originalNextSibling: Node|null, restore: function }}
 */
export function portalElement(el, ownerId) {
  const originalParent = el.parentElement;
  const originalNextSibling = el.nextSibling;

  if (ownerId) {
    el.setAttribute('data-chi-portal-owner', ownerId);
  }

  getPortalRoot().appendChild(el);

  // Portal root has pointer-events: none (so it doesn't block clicks to
  // content behind it). Portaled children inherit this, so we must
  // explicitly re-enable pointer-events on each portaled element.
  // This mirrors the CE's floating.ts behavior.
  el.style.pointerEvents = 'auto';

  return {
    originalParent,
    originalNextSibling,
    restore() {
      el.removeAttribute('data-chi-portal-owner');
      el.style.pointerEvents = '';
      if (originalParent && originalParent.isConnected) {
        originalParent.insertBefore(el, originalNextSibling);
      } else if (el.parentElement) {
        el.parentElement.removeChild(el);
      }
    },
  };
}

/**
 * Portal-aware DOM containment check. Returns true if target is a DOM
 * descendant of host, OR if target is inside a portaled element that
 * belongs to host (via data-chi-portal-id / data-chi-portal-owner attributes).
 *
 * @param {HTMLElement} host - The host element (should have data-chi-portal-id).
 * @param {HTMLElement} target - The target element to check.
 * @returns {boolean}
 */
export function containsOrPortal(host, target) {
  if (host.contains(target)) return true;

  const portalIdEl = host.querySelector('[data-chi-portal-id]');
  const hostId =
    host.getAttribute('data-chi-portal-id') ||
    (portalIdEl && portalIdEl.getAttribute('data-chi-portal-id'));

  if (!hostId) return false;

  let node = target;
  while (node && node !== document.documentElement) {
    if (node.getAttribute('data-chi-portal-owner') === hostId) return true;
    node = node.parentElement;
  }

  return false;
}

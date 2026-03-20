/**
 * Shared floating positioning utility for vanilla JS components.
 *
 * Mirrors the CE utility (chi-custom-elements/src/utils/floating.ts):
 *   - Wraps @floating-ui/dom with Chi-specific defaults
 *   - Declarative middleware pipeline built from options
 *   - Integrates with portal.js for DOM portaling
 *   - Manages autoUpdate lifecycle (enable on show, disable on hide)
 *   - Handles pointer-events, visibility, hideReady, and FOUC prevention
 *
 * Each component passes a declarative options object instead of building
 * its own inline computePosition + middleware pipeline.
 */

import {
  computePosition,
  autoUpdate as floatingAutoUpdate,
  flip as flipMiddleware,
  shift as shiftMiddleware,
  offset as offsetMiddleware,
  arrow as arrowMiddleware,
  hide as hideMiddleware,
} from '@floating-ui/dom';
import { portalElement } from './portal.js';
import { Util } from './util.js';

const OPPOSITE_SIDE = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
};

const ARROW_CLIP_PATHS = {
  top: 'polygon(100% 0, 0 100%, 100% 100%)',
  bottom: 'polygon(0 0, 100% 0, 0 100%)',
  left: 'polygon(0 0, 100% 0, 100% 100%)',
  right: 'polygon(0 0, 0 100%, 100% 100%)',
};

/**
 * Applies arrow positioning styles after a computePosition() call.
 *
 * @param {HTMLElement} arrowEl - The arrow element.
 * @param {object} middlewareData - Middleware data from computePosition.
 * @param {string} placement - Resolved placement string.
 */
function applyArrowStyles(arrowEl, middlewareData, placement) {
  const arrowData = middlewareData.arrow;
  if (!arrowData || !arrowEl) return;

  const basePlacement = placement.split('-')[0];
  const staticSide = OPPOSITE_SIDE[basePlacement];

  const arrowLen =
    basePlacement === 'top' || basePlacement === 'bottom'
      ? arrowEl.offsetHeight
      : arrowEl.offsetWidth;

  Object.assign(arrowEl.style, {
    left: arrowData.x != null ? `${arrowData.x}px` : '',
    top: arrowData.y != null ? `${arrowData.y}px` : '',
    right: '',
    bottom: '',
    [staticSide]: `${-(arrowLen / 2)}px`,
  });

  arrowEl.style.setProperty(
    '--chi-arrow-clip',
    ARROW_CLIP_PATHS[basePlacement] || 'none'
  );
}

/**
 * Creates a floating positioning instance wrapping @floating-ui/dom.
 *
 * @param {Element|null} reference - The reference (trigger) element.
 * @param {HTMLElement|null} floating - The floating element to position.
 * @param {object} [options] - Configuration options.
 * @param {string} [options.placement='bottom'] - Desired placement.
 * @param {string} [options.strategy] - 'fixed' or 'absolute'. Auto-derived from portal when omitted.
 * @param {number} [options.offset=0] - Offset from reference in px.
 * @param {boolean} [options.flip=true] - Enable flip middleware.
 * @param {boolean} [options.shift=true] - Enable shift middleware.
 * @param {HTMLElement} [options.arrowElement] - Arrow element for arrow middleware.
 * @param {number} [options.arrowPadding=0] - Arrow padding.
 * @param {boolean} [options.applyStyles=true] - Auto-apply position/left/top styles.
 * @param {boolean} [options.hideWhenDetached=false] - Enable hide middleware.
 * @param {boolean} [options.autoUpdate=false] - Auto-enable autoUpdate on creation.
 * @param {boolean} [options.initialUpdate=true] - Run an initial update on creation.
 * @param {boolean} [options.portal=false] - Portal to #chi-portal-root.
 * @param {string} [options.ownerId] - Portal owner ID for containsOrPortal checks.
 * @param {function} [options.onCompute] - Callback after each position computation.
 *   Receives { x, y, placement, strategy, middlewareData }.
 * @returns {{ update: function, destroy: function, enableAutoUpdate: function }}
 */
export function createFloating(reference, floating, options) {
  if (!reference || !floating) {
    return {
      update: function () { return Promise.resolve(); },
      destroy: function () {},
      enableAutoUpdate: function () { return function () {}; },
    };
  }

  options = options || {};

  // Resolve options with defaults (mirrors CE's resolvedOptions)
  var placement = options.placement || 'bottom';
  var portal = options.portal || false;
  var strategy = options.strategy || (portal ? 'fixed' : 'absolute');
  var offsetValue = typeof options.offset === 'number' ? options.offset : 0;
  var useFlip = options.flip !== false;
  var useShift = options.shift !== false;
  var applyStyles = options.applyStyles !== false;
  var doAutoUpdate = options.autoUpdate || false;
  var initialUpdate = options.initialUpdate !== false;
  var hideWhenDetached = options.hideWhenDetached || false;
  var arrowElement = options.arrowElement || null;
  var arrowPadding = options.arrowPadding || 0;
  var ownerId = options.ownerId || undefined;
  var onCompute = options.onCompute || null;

  var destroyed = false;
  var cleanupAutoUpdate = null;
  var hasComputedOnce = false;
  var hideReady = false;
  var portalHandle = null;

  // Portal the floating element if requested
  if (portal) {
    portalHandle = portalElement(floating, ownerId);
  }

  /**
   * Builds the middleware pipeline from resolved options.
   */
  function buildMiddleware(overrides) {
    var middleware = [];
    var effectiveOffset = (overrides && typeof overrides.offset === 'number')
      ? overrides.offset
      : offsetValue;

    if (effectiveOffset) {
      middleware.push(offsetMiddleware(effectiveOffset));
    }

    if (useFlip) {
      middleware.push(flipMiddleware());
    }

    if (useShift) {
      middleware.push(shiftMiddleware());
    }

    if (arrowElement) {
      middleware.push(arrowMiddleware({ element: arrowElement, padding: arrowPadding }));
    }

    if (hideWhenDetached) {
      middleware.push(hideMiddleware({ strategy: 'referenceHidden' }));
    }

    return middleware;
  }

  /**
   * Core update: runs computePosition and applies styles.
   */
  function doUpdate(overrides) {
    if (destroyed || !reference || !floating) return Promise.resolve();

    var effectivePlacement = (overrides && overrides.placement) || placement;

    return computePosition(reference, floating, {
      placement: effectivePlacement,
      strategy: strategy,
      middleware: buildMiddleware(overrides),
    }).then(function (result) {
      if (destroyed) return;

      var x = result.x;
      var y = result.y;
      var resultPlacement = result.placement;
      var resultStrategy = result.strategy;
      var middlewareData = result.middlewareData;

      if (applyStyles) {
        Object.assign(floating.style, {
          position: resultStrategy,
          left: Util.roundByDPR(x) + 'px',
          top: Util.roundByDPR(y) + 'px',
        });

        if (hideWhenDetached && middlewareData.hide && hideReady) {
          floating.style.visibility = middlewareData.hide.referenceHidden ? 'hidden' : '';
        }
      }

      if (arrowElement) {
        applyArrowStyles(arrowElement, middlewareData, resultPlacement);
      }

      if (!hasComputedOnce) {
        hasComputedOnce = true;
        floating.style.visibility = '';

        if (portal) {
          floating.style.pointerEvents = 'auto';
        }
        requestAnimationFrame(function () {
          hideReady = true;
        });
      }

      if (onCompute) {
        onCompute({
          x: x,
          y: y,
          placement: resultPlacement,
          strategy: resultStrategy,
          middlewareData: middlewareData,
        });
      }
    });
  }

  // Set initial position strategy before first update
  if (applyStyles && floating) {
    floating.style.position = strategy;
  }

  if (initialUpdate) {
    doUpdate();
  }

  if (doAutoUpdate) {
    cleanupAutoUpdate = floatingAutoUpdate(reference, floating, function () {
      doUpdate();
    });
  }

  return {
    /**
     * Recalculates position. Optionally override placement or offset.
     *
     * @param {object} [overrides] - { placement, offset }
     * @returns {Promise<void>}
     */
    update: function (overrides) {
      if (destroyed) return Promise.resolve();
      if (overrides && overrides.placement) placement = overrides.placement;
      if (overrides && typeof overrides.offset === 'number') offsetValue = overrides.offset;
      return doUpdate(overrides);
    },

    /**
     * Destroys the floating instance. Cleans up autoUpdate, inline styles,
     * and restores portal.
     */
    destroy: function () {
      if (destroyed) return;
      destroyed = true;

      if (cleanupAutoUpdate) {
        cleanupAutoUpdate();
        cleanupAutoUpdate = null;
      }

      if (applyStyles && floating) {
        floating.style.position = '';
        floating.style.left = '';
        floating.style.top = '';
        floating.style.visibility = '';
      }

      if (portalHandle) {
        portalHandle.restore();
        portalHandle = null;
      }
    },

    /**
     * Enables autoUpdate (scroll/resize/mutation tracking). Returns a
     * cleanup function that disables it.
     *
     * @returns {function} Cleanup function.
     */
    enableAutoUpdate: function () {
      if (destroyed || !reference || !floating) return function () {};

      if (cleanupAutoUpdate) {
        cleanupAutoUpdate();
      }

      cleanupAutoUpdate = floatingAutoUpdate(reference, floating, function () {
        doUpdate();
      });

      return function () {
        if (cleanupAutoUpdate) {
          cleanupAutoUpdate();
          cleanupAutoUpdate = null;
        }
      };
    },
  };
}

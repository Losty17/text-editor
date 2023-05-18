// @ts-check

/**
 *
 * @param {string} eventType
 * @param {CustomEventData} data
 */
export default function dispatchEvent(eventType, data) {
  document.dispatchEvent(
    new CustomEvent(eventType, {
      detail: data,
    })
  );
}

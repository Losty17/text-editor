/**
 *
 * @param {string | string[]} eventType
 * @param {(event: CustomEvent<CustomEventData>) => void} callback
 */
export default function addEventListener(eventType, callback) {
  if (Array.isArray(eventType)) {
    eventType.forEach((type) => document.addEventListener(type, callback));
  } else {
    document.addEventListener(eventType, callback);
  }
}

export default function destroyElements(query) {
  const elements = document.querySelectorAll(query);

  elements.forEach((element) => element.destroy());
}

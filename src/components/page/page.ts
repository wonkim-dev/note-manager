export class PageComponent {
  private element: HTMLUListElement;

  constructor() {
    this.element = document.createElement("ul");
    this.element.setAttribute("class", "page");
    this.element.textContent = "This is PageComponent";
  }

  // Attach element to parent element at a given position
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}

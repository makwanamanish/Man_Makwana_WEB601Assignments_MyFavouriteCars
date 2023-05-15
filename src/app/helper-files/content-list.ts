import { Content } from './content-interface';

 export class ContentList {
  private array: Content[];

  constructor() {
    this.array = [];
  }

  get contentArray(): Content[] {
    return this.array;
  }

  add(content: Content): void {
    this.array.push(content);
  }

  count(): number {
    return this.array.length;
  }

  getItemHTML(index: number): string {
    const item = this.array[index];
    const { title, description, creator, imgURL, type } = item;

    const imageTag = `<img src="${imgURL}" alt="${title}" />`;

    const html = `
      <div>
        <h3>${title}</h3>
        <p>${description}</p>
        <p>Creator: ${creator}</p>
        <p>Type: ${type}</p>
        ${imageTag}
      </div>
    `;
    return html;
  }
}
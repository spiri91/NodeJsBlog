export default class Article {
  constructor(title, description, content, visible) {
    this.title = title.trim();
    this.description = description.trim();
    this.content = content.trim();
    this.smug = this.title ? this.title.replace(' ', '-') : "";
    this.createdAt = Date.now(); 
    this.visible = visible;
  }
}
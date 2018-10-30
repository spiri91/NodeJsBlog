export default class Article {
  constructor(title, description, content, visible) {
    this.title = title;
    this.description = description;
    this.content = content;
    this.smug = title ? title.replace(' ', '-') : "";
    this.createdAt = Date.now(); 
    this.visible = visible;
  }
}
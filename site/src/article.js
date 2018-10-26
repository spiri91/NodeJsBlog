export default class Article {
  constructor(title, description, content) {
    this.title = title;
    this.description = description;
    this.content = content;
    this.smug = title ? title.replace(' ', '-') : "";
    this.createdAt = Date.now(); 
  }
}
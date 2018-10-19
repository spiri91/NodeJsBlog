export default class Article {
  constructor(name, description, content) {
    this.name = name;
    this.description = description;
    this.content = content;
    this.smug = name ? name.replace(' ', '-') : "";
  }
}
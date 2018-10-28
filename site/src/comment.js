export default class Comment {
  constructor(by, content) {
    this.by = by;
    this.content = content;
    this.date = Date.now();
  }
}
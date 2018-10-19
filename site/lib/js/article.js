export default class Article{
    constructor(name, description, content){
        this.name = name;
        this.description = description;
        this.content = content;
        name && (this.smug = name.replace(' ', '-'));
    }
}
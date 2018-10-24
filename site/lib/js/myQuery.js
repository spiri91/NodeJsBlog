export default {
    get: {
        byId: id => {

        },
    },
    set: {
        byId: {
            innerHtml: (id, content) => {
                document.getElementById(id).innerHTML = content;
            }
        }
    }
}
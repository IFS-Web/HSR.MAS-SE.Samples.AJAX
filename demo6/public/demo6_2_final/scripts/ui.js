// TODO: demo 2, MVC
class IndexController {
    constructor() {
        this.indexTemplateCompiled = Handlebars.compile(document.getElementById('index-view').innerHTML);
    }

    indexAction(viewRef) {
        const model = new CounterModel();
        this.renderIndexView(viewRef, model);

        viewRef.onclick = (e) => {
            if (e.target.dataset.click === 'up') {
                e.preventDefault();

                model.count++;
                this.renderIndexView(viewRef, model);
            }
        }
    }

    renderIndexView(viewRef, model) {
        viewRef.innerHTML = this.indexTemplateCompiled({ counter: model });
    }
}

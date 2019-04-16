class IndexController {
    constructor(counterService) {
        this.counterService = counterService; // TODO: demo 3
        this.indexTemplateCompiled = Handlebars.compile(document.getElementById('index-view').innerHTML);
    }

    async indexAction(viewRef) {
        const model = await this.counterService.load();
        this.renderIndexView(viewRef, model);

        viewRef.onclick = async (e) => {
            if (e.target.dataset.click === 'up') {
                e.preventDefault();

                model.count++;
                const newCount = await this.counterService.up();
                this.renderIndexView(viewRef, newCount);
            }
        }
    }

    renderIndexView(viewRef, model) {
        viewRef.innerHTML = this.indexTemplateCompiled({ counter: model });
    }
}

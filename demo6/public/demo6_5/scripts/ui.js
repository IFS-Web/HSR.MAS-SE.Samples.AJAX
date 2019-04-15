(function($, ui) {

    /**
     * DEMO 2 - routing
     */
    class Router {
        /**
         * @param routeConfig Supported format:
         * {
         *  rootPath: String,
         *  initialRoute: String,
         *  routes: { [String]: Function }
         * }
         */
        constructor(routeConfig) {
            this.routeConfig = routeConfig;
        }
        navigate(route) {
            window.history.pushState(null, void 0, route);
            this.activate(route);
        }
        activate(route) {
            if (this.routeConfig.routes[route]) {
                this.routeConfig.routes[route]();
            }
        }
        initialize() {
            let activatedRoute = self.location.pathname;
            if (self.location.pathname.indexOf(this.routeConfig.rootPath) == 0) {
                activatedRoute = self.location.pathname.substring(this.routeConfig.rootPath.length);
            }
            this.activate(activatedRoute || this.routeConfig.initialRoute);
        }
    }

    /**
     * DEMO 3 - MVC
     */
    class CounterController {
        constructor(counterService /* DEMO4 */) {
            this.counterService = counterService; /* DEMO4 */
            this.indexTemplateCompiled = Handlebars.compile($('#index-view').html());
        }
        indexAction(viewRef) {
            this.counterService.load((model) => { /* DEMO4 */
                this.renderIndexView(viewRef, model);
            });

            $(viewRef).on('click', '[data-click=up]', (e) => {
                this.counterService.up((model) => { /* DEMO4 */
                    this.renderIndexView(viewRef, model);
                });
                e.preventDefault();
            });
        }
        renderIndexView(viewRef, model) {
            viewRef.html(this.indexTemplateCompiled({ counter: model }));
        }
    }

    // exports
    ui.CounterController = CounterController;
    ui.Router = Router;

})(jQuery, window.ui = window.ui || {});
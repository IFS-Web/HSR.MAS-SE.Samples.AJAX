(function(ui) {

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

    // exports
    ui.Router = Router;
})(window.ui = window.ui || {});
(function($, di) {

    /**
     * DEMO 6 - Dependency Injection
     */
    class Container {
        constructor() {
            this.registrations = { };
        }
        register(name, dependencies, type) {
            this.registrations[name] = { name, dependencies, type, instance: null };
        }
        resolve(name) {
            if (!this.registrations[name].instance) {
                this.registrations[name].instance = new this.registrations[name].type(...this.resolveDependencies(name));
            }
            return this.registrations[name].instance;
        }
        resolveDependencies(name) {
            let dependencies = [ ];
            if (this.registrations[name].dependencies) {
                this.registrations[name].dependencies.forEach(r => {
                    dependencies.push(this.resolve(r));
                });
            }
            return dependencies;
        }
    }

    // exports
    di.container = new Container(); /* DEMO6 */

})(jQuery, window.di = window.di || {});

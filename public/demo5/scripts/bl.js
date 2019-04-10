(function($, bl) {

    /**
     * DEMO 3 - MVC
     */
    class CounterModel {
        constructor(team, count) {
            this.team = team || "unspecified";
            this.count = count || 0;
        }
        static fromDto(dto) { /* DEMO4 */
            return new CounterModel(dto.team, dto.count);
        }
    }

    /**
     * DEMO 4 / 5 - Services
     */
    class CounterService {
        constructor(counterDataResource /* DEMO5 */) {
            this.counterDataResource = counterDataResource; /* DEMO5 */
        }
        load(callback) {
            this.counterDataResource.get((dto) => { /* DEMO5 */
                callback(CounterModel.fromDto(dto));
            });
        }
        up(callback) {
            this.counterDataResource.sendUp((dto) => { /* DEMO5 */
                callback(CounterModel.fromDto(dto));
            });
        }
    }

    // exports
    bl.CounterModel = CounterModel;
    bl.CounterService = CounterService; /* DEMO4 */

})(jQuery, window.bl = window.bl || {});
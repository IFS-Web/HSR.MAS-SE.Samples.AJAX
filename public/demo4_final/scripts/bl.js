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
     * DEMO 4 - Services
     *
     * CounterService is currently a fake service.
     */
    class CounterService {
        constructor() {
            this.dto = { team: "", count: 0 }; // example; usually received from server
        }
        load(callback) {
            callback(CounterModel.fromDto(this.dto));
        }
        up(callback) {
            this.dto.count++;
            callback(CounterModel.fromDto(this.dto));
        }
    }

    // exports
    bl.CounterModel = CounterModel;
    bl.CounterService = CounterService; /* DEMO4 */

})(jQuery, window.bl = window.bl || {});
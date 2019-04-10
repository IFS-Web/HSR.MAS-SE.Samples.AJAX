(function($, bl) {

    /**
     * DEMO 3 - MVC
     */
    class CounterModel {
        constructor(team, count) {
            this.team = team || "unspecified";
            this.count = count || 0;
        }
    }

    // exports
    bl.CounterModel = CounterModel;

})(jQuery, window.bl = window.bl || {});
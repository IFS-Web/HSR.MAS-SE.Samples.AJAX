(function($, dl) {

    class CounterDataResource {
        get(callback) {
            $.get('/api', (data) => {
                callback(data);
            });
        }
        sendUp(callback) {
            $.post('/api/up', (data) => {
                callback(data);
            });
        }
    }

    // exports
    di.container.register("CounterDataResource", [ ], CounterDataResource); /* DEMO6 */
})(jQuery, window.dl = window.dl || {});
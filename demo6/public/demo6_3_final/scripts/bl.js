class CounterModel {
    constructor(team, count) {
        this.team = team || 'unspecified';
        this.count = count || 0;
    }

    // TODO: demo 3
    static fromDto(dto) {
        return new CounterModel(dto.team, dto.count);
    }
}


/**
 * demo 3 - Business Logic Services
 *
 * CounterService is currently a fake service.
 */
class CounterService {
    constructor() {
        this.dto = { team: "", count: 0 }; // example; usually received from server
    }
    load() {
        return new Promise(
            (resolve) => resolve(CounterModel.fromDto(this.dto)));
    }
    up() {
        this.dto.count++;
        return new Promise(
            (resolve) => resolve(CounterModel.fromDto(this.dto)));
    }
}


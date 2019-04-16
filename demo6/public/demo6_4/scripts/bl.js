class CounterModel {
    constructor(team, count) {
        this.team = team || 'unspecified';
        this.count = count || 0;
    }

    static fromDto(dto) {
        return new CounterModel(dto.team, dto.count);
    }
}


/**
 * Business Logic Services
 *
 * CounterService is currently a fake service.
 */
class CounterService {
    constructor() {  // TODO: demo 4
        this.dto = { team: "", count: 0 }; // example; usually received from server
    }
    load() {  // TODO: demo 4
        return new Promise(
            (resolve) => resolve(CounterModel.fromDto(this.dto)));
    }
    up() {  // TODO: demo 4
        this.dto.count++;
        return new Promise(
            (resolve) => resolve(CounterModel.fromDto(this.dto)));
    }
}


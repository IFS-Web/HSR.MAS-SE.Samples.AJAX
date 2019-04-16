// TODO: demo 2, MVC
class CounterModel {
    constructor(team, count) {
        this.team = team || 'unspecified';
        this.count = count || 0;
    }

    static fromDto(dto) {
        return new CounterModel(dto.team, dto.count);
    }
}

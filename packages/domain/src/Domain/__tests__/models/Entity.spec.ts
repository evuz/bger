import { Entity, IEntity } from '../../models/Entity';

class Event extends Entity<IEntity<Event>> {
  time: number;
  teams: string[];
}

describe('Entity', () => {
  let event: Event;
  beforeEach(() => {
    event = new Event({ teams: ['MAD', 'FCB'], time: 3600000 });
  });

  it('should create', () => {
    expect(event).toBeTruthy();
  });

  it('should throw error if initialize as null', () => {
    function error() {
      event = new Event(null);
    }
    expect(error).toThrowError();
  });

  describe('toJSON', () => {
    it('should return a JSON with same properties', () => {
      const json = event.toJSON();
      expect(json.teams).toEqual(event.teams);
      expect(json.time).toEqual(event.time);
      expect(json instanceof Entity).toBeFalsy();
    });

    it('should return properties initialized as null', () => {
      event = new Event({ teams: null, time: null });
      event.time = 1000;
      const json = event.toJSON();
      expect(json.time).toBe(1000);
      expect(json.teams).toBeNull();
    });
  });
});

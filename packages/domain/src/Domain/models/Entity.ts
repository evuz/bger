export type IEntity<T> = Omit<T, 'toJSON'>;

export abstract class Entity<T> {
  private _properties: string[];

  constructor(obj: T) {
    if (!obj) {
      throw Error('Cannot initialize an Entity as null');
    }
    const keys = Object.keys(obj || {});
    keys.forEach(key => {
      this[key] = obj[key];
    });
    Object.defineProperty(this, '_properties', {
      value: keys,
      writable: false,
      enumerable: false,
      configurable: false,
    });
  }

  toJSON(): T {
    return this._properties.reduce(
      (obj, key) => {
        obj[key] = this[key];
        if (obj[key] instanceof Entity) obj[key] = obj[key].toJSON();
        return obj;
      },
      <T>{},
    );
  }
}

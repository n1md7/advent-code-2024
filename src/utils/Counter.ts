export class Counter {
  private count: number;
  private readonly threshold: number;

  constructor(value: number, threshold: number = Number.MAX_SAFE_INTEGER) {
    this.count = value;
    this.threshold = threshold;
  }

  get val() {
    return this.count;
  }

  inc() {
    return ++this.count;
  }

  dec() {
    return --this.count;
  }

  add(value: number) {
    return (this.count += value);
  }

  sub(value: number) {
    return (this.count -= value);
  }

  mul(value: number) {
    return (this.count *= value);
  }

  pow(value: number) {
    return (this.count **= value);
  }

  set(value: number) {
    this.count = value;
  }

  equals(value: number | Counter) {
    return this.count === value;
  }

  thresholdReached() {
    return this.count >= this.threshold;
  }

  [Symbol.toPrimitive]() {
    return this.count;
  }
}

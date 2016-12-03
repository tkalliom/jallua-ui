export class Store {
  storeNumber: string;
  streetAddress: string;
  postOffice: string;

  get displayName(): string {
    return `${this.streetAddress}, ${this.postOffice}`;
  }
}
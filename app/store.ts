export class Store {
  storeNumber: string;
  streetAddress: string;
  postOffice: string;
  condition: {
    code: number;
    text: string;
    temp: number;
    date: string;
  };

  get displayName(): string {
    return `${this.streetAddress}, ${this.postOffice}`;
  }
}
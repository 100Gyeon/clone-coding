import { observable, action } from 'mobx';

export default class ExampleStore {
  @observable exampleStore = 'hello';

  @action changeStoreValue = (value: string) => {
    this.exampleStore = value;
  };
  @action changeToWorld = () => {
    this.exampleStore = 'World';
  };
}

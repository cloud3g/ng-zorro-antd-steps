import { DefaultModule } from './default.module';

describe('MainModule', () => {
  let defaultModule: DefaultModule;

  beforeEach(() => {
    defaultModule = new DefaultModule();
  });

  it('should create an instance', () => {
    expect(defaultModule).toBeTruthy();
  });
});

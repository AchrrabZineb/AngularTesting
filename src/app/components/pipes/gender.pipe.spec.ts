import { GenderPipe } from './gender.pipe';

describe('GenderPipe', () => {
  let pipe: GenderPipe;
  beforeEach(() => {
    pipe = new GenderPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transforms gender to icon', () => {
    expect(pipe.transform('Male')).toBe('♂');
    expect(pipe.transform('Female')).toBe('♀');
    expect(pipe.transform('')).toBe('');
  });
});

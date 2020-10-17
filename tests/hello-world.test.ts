function greeting(name: string): string {
  return `hello ${name}`;
}

test('hello world', () => {
  expect(greeting('world')).toEqual('hello world');
});


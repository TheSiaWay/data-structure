const LinkedList = require('../dataStructures/singlyLinkedList');

test('creating a new List', () => {
  expect(new LinkedList()).toEqual({ "head": null });
});
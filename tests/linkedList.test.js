const LinkedList = require('../dataStructures/singlyLinkedList');

test('creating a new Linked List', () => {
  expect(new LinkedList()).toEqual({ "head": null });
});

test('inserting a new node at tail', () => {
  const list = new LinkedList();
  expect(list.insert(1)).toEqual({data: 1, next: null});
  expect(list.insert(2)).toEqual({ data: 1, next: { data: 2, next: null } });
  expect(list.insert(3)).toEqual({ data: 1, next: { data: 2, next: { data: 3, next: null } } });
});


test('inserting after at head position', () => {
  const list = new LinkedList();
  expect(list.insertAt(1, 0)).toEqual({data: 1, next: null});
  expect(list.insertAt(2, 0)).toEqual({ data: 2, next: { data: 1, next: null }});
  expect(list.insertAt(3, 0)).toEqual({ data: 3, next: { data: 2, next: { data: 1, next: null } }});
});

test('printing out items in the linked list', () => {
  const list = new LinkedList();
  expect(list.print()).toEqual([]);
  list.insert(1);
  expect(list.print()).toEqual([1]);
  list.insert(2);
  list.insert(3);
  expect(list.print()).toEqual([1, 2, 3]);
});

test('printing out items in insert after at head in linked list', () => {
  const list = new LinkedList();
  expect(list.print()).toEqual([]);
  list.insertAt(1, 0);
  expect(list.print()).toEqual([1]);
  list.insertAt(2, 0);
  list.insertAt(3, 0);
  expect(list.print()).toEqual([3, 2, 1]);
});

test('size of linked list', () => {
  const list = new LinkedList();
  expect(list.listSize).toBe(0);
  list.insert(1);
  expect(list.listSize).toBe(1);
  list.insert(2);
  list.insert(3);
  expect(list.listSize).toBe(3);
});

test('size of linked list while inserting at random place', () => {
  const list = new LinkedList();
  expect(list.listSize).toBe(0);
  list.insert(1);
  list.insert(1);
  list.insert(1);
  list.insertAt(4, 3);
  expect(list.listSize).toBe(4);
  list.insertAt(2, 0);
  list.insertAt(3, 2);
  list.insertAt(7, 10);
  list.insertAt(8, -1);
  expect(list.listSize).toBe(8);
  expect(list.print()).toEqual([8,2,1,3,1,1,4,7]);
});
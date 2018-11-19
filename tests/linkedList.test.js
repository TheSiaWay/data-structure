const LinkedList = require('../dataStructures/singlyLinkedList');

test('creating a new Linked List', () => {
  expect(new LinkedList()).toEqual({ "head": null });
});

test('inserting a new node at tail', () => {
  const list = new LinkedList();
  expect(list.insert(1)).toEqual({head: {data: 1, next: null}, size: 1});
  expect(list.insert(2)).toEqual({head: { data: 1, next: { data: 2, next: null } }, size: 2});
  expect(list.insert(3)).toEqual({head: { data: 1, next: { data: 2, next: { data: 3, next: null } } }, size: 3});
});


test('inserting after at head position', () => {
  const list = new LinkedList();
  expect(list.insertAt(1, 0)).toEqual({head: {data: 1, next: null}, size: 1});
  expect(list.insertAt(2, 0)).toEqual({head: { data: 2, next: { data: 1, next: null }}, size: 2});
  expect(list.insertAt(3, 0)).toEqual({head: { data: 3, next: { data: 2, next: { data: 1, next: null } }}, size: 3});
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

test('check if list is empty', () => {
  const list = new LinkedList();
  expect(list.isEmpty).toBeTruthy;
  list.insert(1);
  expect(list.isEmpty).toBeFalsy;
  list.insert(2);
  expect(list.isEmpty).toBeFalsy;
});

test('check if data is in the list', () => {
  const list = new LinkedList();
  expect(list.isContain(1)).toBeFalsy;
  list.insert(2);
  expect(list.isContain(1)).toBeFalsy;
  list.insert(1);
  expect(list.isContain(1)).toBeTruthy;
});

test('deleting data from list', () => {
  const list = new LinkedList();
  expect(list.delete()).toBeNull;
  expect(list.delete(1)).toBeNull;
  list.insert(1);
  list.insert(2);
  list.insert(3);
  list.insert(1);
  expect(list.listSize).toBe(4);
  expect(list.delete(1).listSize).toBe(3);
  expect(list.delete(3)).toEqual({head: { data: 2, next: { data: 1, next: null } }, size: 2});
  expect(list.listSize).toBe(2);
  expect(list.delete(1).listSize).toBe(1);
  expect(list.delete(1).listSize).toBe(1);
});

test('deleting data from list at specific position', () => {
  const list = new LinkedList();
  list.insert(1);
  list.insert(2);
  list.insert(3);
  list.insert(1);
  expect(list.listSize).toBe(4);
  expect(list.deleteAt(0).listSize).toBe(3);
  expect(list.deleteAt(1)).toEqual({head: { data: 2, next: { data: 1, next: null } }, size: 2});
  expect(list.listSize).toBe(2);
  expect(list.deleteAt(10)).toEqual({ head: { data: 2, next: null }, size: 1 });
  expect(list.listSize).toBe(1);
  expect(list.deleteAt(0).listSize).toBe(0);
  expect(list.deleteAt(0).listSize).toBe(0);
});
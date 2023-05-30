export class Stack<T> {
  private stack: T[];
  private totalSize: number;
  private top = -1;

  constructor(size = 5) {
    this.stack = [];
    this.totalSize = size;
  }

  isEmpty() {
    return this.top === -1;
  }

  isFull() {
    return this.top === this.totalSize;
  }

  get size() {
    return this.totalSize;
  }

  get getStack() {
    return this.stack;
  }

  push(item: T) {
    if (this.totalSize === ++this.top) {
      throw new Error(
        `Stack overflow: Can't add ${this.top + 1}th item to ${
          this.totalSize
        } size stack`
      );
    }

    return (this.stack[this.top] = item);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error(
        `Stack underflow: Can't perform pop operation in empty stack`
      );
    }

    this.top--;
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error(`Error: Can't peek in empty stack`);
    }

    return this.stack[this.top];
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  isPalindrome() {
    //pushing all values into array, then comparing first and last, then second and second last and so on...
    let temp = this.head;
    let arr = [];

    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }

    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] !== arr[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  isPalindrome2() {
    //using strings
    let temp = this.head;
    let str1 = "";
    let str2 = "";

    while (temp) {
      str1 += temp.value;
      str2 = temp.value + str2;
      temp = temp.next;
    }

    return str1 === str2;
  }
}

const myLL = new LL();
myLL.push(1);
myLL.push(2);
myLL.push(2);
myLL.push(1);
console.log(myLL.isPalindrome()); //true
console.log(myLL.isPalindrome2()); //true

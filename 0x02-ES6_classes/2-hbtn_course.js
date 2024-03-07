/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Get name
  get name() {
    return this._name;
  }

  // Set name
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Get length
  get length() {
    return this._length;
  }

  // Set length
  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Get students
  get students() {
    return this._students;
  }

  // Set students
  set students(students) {
    if (Array.isArray(students) && students.every((s) => typeof s === 'string')) {
      this._students = students;  // Corrected assignment here
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}


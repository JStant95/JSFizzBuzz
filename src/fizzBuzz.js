class FizzBuzz {

  says(number) {
    if (this.isDivisibleByFiveAndThree(number)) {
      return "FizzBuzz";
    }
    if (this.isDivisibleByThree(number)) {
      return "Fizz";
    }
    if (this.isDivisibleByFive(number)) {
      return "Buzz";
    }
    return number;
  }

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  isDivisibleByFiveAndThree(number) {
    return this._isDivisibleBy(number, 15);
  }

  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }


};

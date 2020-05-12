describe('FizzBuzz', function() {
  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  })

  describe('knows when a number is', function(){
    it('divisible by 3', function(){
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
      expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
    });

    it('divisible by 5', function(){
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
      expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
    });
    
    it('divisible by 15', function(){
      expect(fizzbuzz.isDivisibleByFiveAndThree(15)).toBe(true);
      expect(fizzbuzz.isDivisibleByFiveAndThree(4)).toBe(false);
    });

  });

  describe('When playing, says', function() {
    it('"Fizz" when a number is divisible by 3', function(){
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    })

    it('"Buzz" when a number is divisible by 5', function(){
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    })

    it('"FizzBuzz" when a number is divisible by 15', function(){
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    })
  })
});

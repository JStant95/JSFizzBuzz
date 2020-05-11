describe('FizzBuzz', function() {
  var fizzbuzz;

  describe('knows when a number is', function(){
    it('divisible by 3', function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
      expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
    });

    it('divisible by 5', function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
      expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
    });
    
    it('divisible by 15', function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFiveAndThree(15)).toBe(true);
      expect(fizzbuzz.isDivisibleByFiveAndThree(4)).toBe(false);
    });

  });
});

describe('JavaBuzz', function(){

  var javabuzz;

  beforeEach(function(){
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function(){
    it('divisible by 3', function (){
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });
    it('divisible by 15', function(){
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when a number is not', function(){
    it('divisible by 3', function (){
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });
    it('divisible by 15', function(){
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });

  describe('when playing Javabuzz', function(){
    it('returns java when passed 3', function(){
      expect(javabuzz.says(3)).toEqual('java');
    });
    it('returns buzz when passed 5', function(){
      expect(javabuzz.says(5)).toEqual('buzz');
    });
    it('returns fizzbuzz when passed 15', function(){
      expect(javabuzz.says(15)).toEqual('javabuzz');
    });
    it('returns 2 when passed 2', function(){
      expect(javabuzz.says(2)).toEqual(2);
    });
  });
});

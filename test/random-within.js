import { expect } from "chai";
import randomWithin from "../src/random-within"

describe("Random Within", () => {

  it("should return random numbers within a range", () => {
    
    for (let i = 0; i < 100; i++) {
      expect(randomWithin(0, 5))
        .to.be.within(0, 5);
    }
    
    for (let i = 0; i < 100; i++) {
      expect(randomWithin(-5, 5))
        .to.be.within(-5, 5);
    }

  });

});

const Spells = require("./spellsModel.js");
const db = require("../data/dbConfig.js");

describe("spellsModel.js", () => {
  describe("spells", () => {
    beforeEach(async () => {
      await db("spells").truncate();
    });

    it("adds a spell", async () => {
      const spellToAdd = {
        spellName: "Alohamahora",
        instructions: "swish and flick",
        subject: "Charms"
      };

      const spell = await Spells.add(spellToAdd);

      // let spell = await db("spells")
      //   .where({ id })
      //   .first();

      expect(spell).toEqual({ ...spellToAdd, id: spell.id });
    });

    // it("should return an OK status code from the get route", async () => {
    //   const expectedStatusCode = 200;
    //
    //   const response = request(spellsModel).get("/");
    //
    //   expect(response.status).toEqual(expectedStatusCode);
    // });
    //
    // it("should return a JSON object fron the get route", async () => {
    //   const expectedBody = { spellName, instructions, subject };
    //
    //   const response = await request(server).get("/");
    //
    //   expect(response.body).toEqual(expectedBody);
    // });
  });
});

describe("spellsModel.js", () => {
  describe("spells", () => {
    beforeEach(async () => {
      await db("spells").truncate();
    });

    it("deletes a spell", async () => {
      const spellToAdd = {
        spellName: "Alohamahora",
        instructions: "swish and flick",
        subject: "Charms"
      };

      const { id } = await Spells.add(spellToAdd);
      console.log(id);

      await Spells.remove(id);
      let allSpells = await Spells.find();
      expect(allSpells).toHaveLength(0);
    });
  });
});

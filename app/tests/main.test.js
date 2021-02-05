const getAboutUsLink = require("../main");
test("Returns about-us for english language", () => {
  expect(getAboutUsLink("en-US")).toBe("/about-us");
});

test("Returns acerca-de for spanish language", () => {
  expect(getAboutUsLink("es-ES")).toBe("/acerca-de");
});

test("Returns default about-us for english language", () => {
  expect(getAboutUsLink("xx-XX")).toBe("/about-us");
});

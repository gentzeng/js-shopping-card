const getAboutUsLink = require("./main");
test("Returns about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});

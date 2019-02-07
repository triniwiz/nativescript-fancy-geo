var FancyGeo = require("nativescript-fancy-geo").FancyGeo;
var fancyGeo = new FancyGeo();

describe("greet function", function() {
    it("exists", function() {
        expect(fancyGeo.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(fancyGeo.greet()).toEqual("Hello, NS");
    });
});
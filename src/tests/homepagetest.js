"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const selenium_webdriver_1 = require("selenium-webdriver");
const homepage_1 = require("../pages/homepage");
describe("home button on homepage", () => {
    it("should return results", () => __awaiter(this, void 0, void 0, function* () {
        const driver = new selenium_webdriver_1.Builder()
            .withCapabilities(selenium_webdriver_1.Capabilities.chrome())
            .build();
        const homepage = new homepage_1.Homepage(driver);
        const homes = homepage.open()
            .then((value) => value.getHomes())
            .then((value) => value.getResults());
        yield chai_1.expect(yield homes).to.not.be.empty;
    }));
});
//# sourceMappingURL=homepagetest.js.map
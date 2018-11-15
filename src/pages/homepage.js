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
const selenium_webdriver_1 = require("selenium-webdriver");
const searchresults_1 = require("./searchresults");
class Homepage {
    constructor(driver) {
        this.homeButtonLocator = (selenium_webdriver_1.By.css("[data-veloute='explore-nav-card:/homes']"));
        this.driver = driver;
    }
    getHomes() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.wait(selenium_webdriver_1.until.elementLocated(this.homeButtonLocator));
            const homeButton = yield this.driver.findElement(this.homeButtonLocator);
            yield homeButton.click();
            return new searchresults_1.SearchResults(this.driver);
        });
    }
    open() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.get("https://www.airbnb.ie/");
            return this;
        });
    }
}
exports.Homepage = Homepage;
//# sourceMappingURL=homepage.js.map
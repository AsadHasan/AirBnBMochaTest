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
class SearchResults {
    constructor(driver) {
        this.resultsLocator = (selenium_webdriver_1.By.css("[data-container-name='explore']"));
        this.driver = driver;
    }
    getResults() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.wait(selenium_webdriver_1.until.elementsLocated(this.resultsLocator));
            const results = yield this.driver.findElements(this.resultsLocator);
            return results;
        });
    }
}
exports.SearchResults = SearchResults;
//# sourceMappingURL=searchresults.js.map
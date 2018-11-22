import { expect } from "chai";
import "chromedriver";
import { Builder, ThenableWebDriver, WebElement } from "selenium-webdriver";

import * as fs from "fs";
import { Homepage } from "../pages/homepage";
import { SearchResults } from "../pages/searchresults";

describe("'homes' button on homepage", (): void => {
  let driver: ThenableWebDriver;

  before(() => (driver = new Builder().forBrowser("chrome").build()));
  it("should return results", async (): Promise<void> => {
    const homepage: Homepage = await new Homepage(driver).open();
    const searchResults: SearchResults = await homepage.getHomes();
    const homes: WebElement[] = await searchResults.getResults();
    await expect(homes).to.not.be.empty;
  });
  afterEach(async function() {
    if (this.currentTest !== undefined) {
      const testName: string = this.currentTest.title;
      const testState = this.currentTest.state;

      if (testState === "failed") {
        const screenshot: string = await driver.takeScreenshot();
        const screenshotPath: string = `TestResults/Screenshots/${testName}.png`;
        fs.writeFileSync(screenshotPath, screenshot, "base64");
      }
    }
  });
  after(async (): Promise<void> => driver.quit());
});

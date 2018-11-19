import { expect } from "chai";
import "chromedriver";
import { Builder, ThenableWebDriver, WebElement } from "selenium-webdriver";

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
  after(async (): Promise<void> => driver.quit());
});

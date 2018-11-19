import { expect } from "chai";
import "chromedriver";
import { Builder, ThenableWebDriver, WebElement } from "selenium-webdriver";

import { Homepage } from "../pages/homepage";

describe("'homes' button on homepage", (): void => {
  let driver: ThenableWebDriver;

  before(() => (driver = new Builder().forBrowser("chrome").build()));
  it("should return results", async (): Promise<void> => {
    const homepage: Homepage = new Homepage(driver);
    const homes: Promise<WebElement[]> = homepage
      .open()
      .then(value => value.getHomes())
      .then(value => value.getResults());
    await expect(await homes).to.not.be.empty;
  });
  after(async (): Promise<void> => driver.quit());
});

import {expect} from "chai";
import {Builder, Capabilities, ThenableWebDriver, WebElement} from "selenium-webdriver";
import {Homepage} from "../pages/homepage";

describe("home button on homepage", (): void => {
    let driver: ThenableWebDriver;

    before(() => driver = new Builder()
        .withCapabilities(Capabilities.chrome())
        .build());
    it("should return results", async (): Promise<void> => {
        const homepage: Homepage = new Homepage(driver);
        const homes: Promise<WebElement[]> = homepage.open()
            .then((value) => value.getHomes())
            .then((value) => value.getResults());
        await expect(await homes).to.not.be.empty;
    });
    after(async (): Promise<void> => await driver.quit());
});

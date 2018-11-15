import {expect} from "chai";
import {Builder, Capabilities, ThenableWebDriver, WebElement} from "selenium-webdriver";
import {Homepage} from "../pages/homepage";

describe("home button on homepage", (): void => {
    it("should return results", async (): Promise<void> => {
        const driver: ThenableWebDriver = new Builder()
            .withCapabilities(Capabilities.chrome())
            .build();
        const homepage: Homepage = new Homepage(driver);
        const homes: Promise<WebElement[]> = homepage.open()
            .then((value) => value.getHomes())
            .then((value) => value.getResults());
        await expect(await homes).to.not.be.empty;
    });
});

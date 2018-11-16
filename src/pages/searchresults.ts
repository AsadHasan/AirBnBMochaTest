import {By, Locator, ThenableWebDriver, until, WebElement} from "selenium-webdriver";

export class SearchResults {
    private driver: ThenableWebDriver;
    private resultsLocator: Locator = (By.css("[data-container-name='explore']"));

    constructor(driver: ThenableWebDriver) {
        this.driver = driver;
    }

    public async getResults(): Promise<WebElement[]> {
        await this.driver.wait(until.elementsLocated(this.resultsLocator));
        const results = await this.driver.findElements(this.resultsLocator);
        return results;
    }
}

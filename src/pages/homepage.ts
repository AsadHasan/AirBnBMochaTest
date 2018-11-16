import {By, Locator, ThenableWebDriver, until, WebElement} from "selenium-webdriver";
import {SearchResults} from "./searchresults";

export class Homepage {
    private readonly driver: ThenableWebDriver;
    private homeButtonLocator: Locator = (By.css("[data-veloute='explore-nav-card:/homes']"));

    constructor(driver: ThenableWebDriver) {
        this.driver = driver;
    }

    public async getHomes(): Promise<SearchResults> {
        await this.driver.wait(until.elementLocated(this.homeButtonLocator));
        const homeButton: WebElement = await this.driver.findElement(this.homeButtonLocator);
        await homeButton.click();
        return new SearchResults(this.driver);
    }

    public async open(): Promise<Homepage> {
        await this.driver.get("https://www.airbnb.ie/");
        return this;
    }
}

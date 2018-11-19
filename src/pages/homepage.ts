import {
  By,
  Locator,
  ThenableWebDriver,
  until,
  WebElement
} from "selenium-webdriver";
import { SearchResults } from "./searchresults";

export class Homepage {
  private readonly driver: ThenableWebDriver;
  private homeButtonLocator: Locator = By.css(
    "[data-veloute='explore-nav-card:/homes']>div"
  );

  constructor(driver: ThenableWebDriver) {
    this.driver = driver;
  }

  public async getHomes(): Promise<SearchResults> {
    await this.driver.wait(until.elementLocated(this.homeButtonLocator));
    const homebutton: WebElement = this.driver.findElement(
      this.homeButtonLocator
    );
    this.driver.wait(until.elementIsEnabled(homebutton));
    await homebutton.click();
    return new SearchResults(this.driver);
  }

  public async open(): Promise<Homepage> {
    await this.driver.get("https://www.airbnb.ie/");
    return this;
  }
}

class GeneralUtilities {

async hoveronApps(mainMenuLocator) {
    await mainMenuLocator.waitFor({ state: 'visible' });
    await mainMenuLocator.hover();
  }
async hoveronAppsSubmenu(mainMenuLocator, subMenuLocator) {
    await mainMenuLocator.waitFor({ state: 'visible' });
    await mainMenuLocator.hover();
    await subMenuLocator.waitFor({ state: 'visible' });
    await subMenuLocator.hover();
  }

async clickOnElement(element) {
    await element.waitFor({ state: 'visible' });
    await element.click();
  }

async getText(locator) {
    await locator.waitFor({ state: 'visible' });
    return await locator.textContent();
  }


}



export default GeneralUtilities;
const {test, expect} = require('@playwright/test');

test.describe('All job tests', () => {
  test('Blindmatrix', async ({page}) => {

    await page.goto('https://blindmatrix.software/login');
    await page.locator('#companyname').fill('TESTING2TEST');
    await page.locator('#username').fill('Tommy');
    await page.locator('#password').fill('Tommy@123');
    await page.locator('//button[text()="LOGIN"]').click();

    await page.waitForTimeout(5000);

    await page.locator('//a[text()="All jobs"]').click();
    await page.waitForTimeout(5000);

    await page.locator('#dropdownMenuButton').click();

    await page.locator('//span[text()="Default View"]').click();
       await page.waitForTimeout(5000);
       
    await page.locator('#dropdownMenuButton').click();
       await page.locator('//p[@class="dropdown-item Newaddbtn text-center text-truncate ng-star-inserted"]').click();
       await page.locator('#viewname').fill('Test view'+Math.floor(Math.random() * 1000));

       const availableItems = page.locator('//div[@class="search_columns"]//ejs-listbox[@id="droplist_drag_job"]');
const selectedContainer = page.locator('//div[@class="search_columns addedcolumn"]//ejs-listbox[@id="droplist_drag_job"]');

const count = await availableItems.count();
for (let i = 10; i < count; i++) {
  await availableItems.nth(10).dragTo(selectedContainer);
  await page.waitForTimeout(5000);
}



    })})
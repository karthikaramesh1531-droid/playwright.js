const { test, expect } = require('@playwright/test');

// ---------------------------------------------------------------------------
// Helper: open an EasyUI combo and select the FIRST option in its panel.
// Avoids the unstable #datagrid-row-rNN / #comborArrowNN ids that change
// every run.
// ---------------------------------------------------------------------------
async function selectFirstOption(page, arrow) {
    await arrow.scrollIntoViewIfNeeded();
    await arrow.click();

    const panel = page.locator('div.combo-panel:visible, div.panel-body:visible').last();
    await panel.waitFor({ state: 'visible' });

    const firstRow = panel.locator('div.datagrid-row, tr.datagrid-row, .combobox-item').first();
    await firstRow.waitFor({ state: 'visible' });

    await firstRow.click();
}

// ---------------------------------------------------------------------------
// Helper: open an EasyUI combo and select an option by its visible text.
// Use this whenever you know the exact value you want — most stable option.
// ---------------------------------------------------------------------------
async function selectOptionByText(page, arrow, optionText) {
    await arrow.scrollIntoViewIfNeeded();
    await arrow.click();

    const panel = page.locator('div.combo-panel:visible, div.panel-body:visible').last();
    await panel.waitFor({ state: 'visible' });

    await panel.getByText(optionText, { exact: true }).first().click();
}

test('has title', async ({ page }) => {
    test.setTimeout(120_000);

    await page.goto('https://curtainmatrix.co.uk/ashiksource/LA-I5822/login?returnUrl=%2Fjob');
    await expect(page).toHaveTitle('BlindMatrix');

    await page.fill('#companyname', 'COVERUPCANVAS');
    await page.fill('#username', 'Joshua.Hem');
    await page.fill('#password', 'Joshua.Hem@123');

    await page.click('//button[text()="LOGIN"]');
    await page.waitForTimeout(50000);

    // //await page.getByRole('button', { name: 'Skip' }).click();

    // // 4. Open the top-right nav menu
    // await page.locator('div.nav-rightwidth > a:nth-of-type(1) i').click();

    // // 5. Choose "+ Job"
    // await page.getByText('+ Job').click();

    // // 6-7. Company Name
    // await page.locator('[id="Company Name"]').click();
    // await page.locator('[id="Company Name"]').fill('Auro 1');

    // // 8-9. Organisation
    // await page.locator('#organisation_name').click();
    // await page.locator('#organisation_name').selectOption({ index: 1 });

    // // 10-11. First Name
    // await page.locator('[id="First Name"]').click();
    // await page.locator('[id="First Name"]').fill('Karthika1 ');

    // // 12-13. Account Manager
    // await page.locator('#account_manager').click();
    // await page.locator('#account_manager').selectOption({ index: 10 });

    // // 14. Save the job (whole save)
    // await page.locator('#wholesave').click();

    // // 15. Open the "Add Product" dropdown
    // await page.locator('#dropdownMenuLink > span').click();

    // // 16. Choose "Ungroup products"
    // await page.getByText('Ungroup products').click();

    // // 17. Open the first product row
    // const firstItem = page.locator('xpath=//li[@class="dropdown-item px-0 submenulistitem p-0 example-box ng-star-inserted"]//a[@class="position-relative text-truncate"]');
    // await firstItem.first().click();

    // // 18-19. Quantity / value field 1 -> 1000
    // await page.locator("#mat-border div:nth-of-type(6) input[type='text']").click();
    // await page.locator("#mat-border div:nth-of-type(6) input[type='text']").fill('1000');

    // // 20-21. Quantity / value field 2 -> 1000
    // await page.locator("#sampleModal div:nth-of-type(7) input[type='text']").click();
    // await page.locator("#sampleModal div:nth-of-type(7) input[type='text']").fill('1000');




     await page.locator('a.customsettting > i').click();
 
  // 3. Go to "Users & Roles"
  await page.getByText('Users & Roles').click();
 
  // 4. Open the 2nd settings list item
  await page.locator('li:nth-of-type(2) p').click();
 
  // ---- Tax rate #1 ----------------------------------------------------
  // 5. Add New Tax Rate
  await page.getByRole('button', { name: 'Add New Tax Rate' }).click();
 
  // 6. Condition / tax name -> "test 1"
  await page.locator('#condition_tax').fill('test 1');
 
  // 7-8. Rate input -> 12
  await page.locator('modal-container div.modal-body > div > div:nth-of-type(2) input').click();
  await page.locator('modal-container div.modal-body > div > div:nth-of-type(2) input').fill('12');
 
  // 9. Toggle the off-switch
  await page.locator('modal-container span.off').click();
 
  // 10. Click the toggle label
  await page.locator('modal-container label').click();
 
  // 11. Save
  await page.getByRole('button', { name: 'Save' }).click();
 
  // 12. Dismiss (double-click on body)
  await page.locator('body').dblclick();
 
  // ---- Tax rate #2 ----------------------------------------------------
  // 13. Add New Tax Rate
  await page.getByRole('button', { name: 'Add New Tax Rate' }).click();
 
  // 14-15. Condition select (combobox) -> "2"
  //   Recorder captured #condition_tax as a form/combobox and set value "2".
  await page.locator('#condition_tax').click();
  await page.locator('#condition_tax').fill('2');
 
  // 16-17. Rate input -> 83
  await page.locator('modal-container div.modal-body > div > div:nth-of-type(2) input').click();
  await page.locator('modal-container div.modal-body > div > div:nth-of-type(2) input').fill('83');
 
  // 18-19. Standard tax rate -> 5
  await page.locator('#standtaxrate').click();
  await page.locator('#standtaxrate').fill('5');
 
  // 20. Save
  await page.getByRole('button', { name: 'Save' }).click();
 
  // 21. Dismiss (double-click the overlay backdrop)
  await page.locator('div.cdk-overlay-backdrop').dblclick();
 
  // ---- Tax rate #3 (Material dropdown) --------------------------------
  // 22. Add New Tax Rate
  await page.getByRole('button', { name: 'Add New Tax Rate' }).click();
 
  // 23. Open the condition dropdown
  await page.locator('#condition_tax span').click();
 
  // 24. Pick the option.
  //   ⚠ Recorded as #mat-option-60 with NO captured text — replace with the
  //   visible option label, e.g. page.getByRole('option', { name: 'Your Value' }).
  await page.locator('#mat-option-60 > span').click();
 
  // 25-26. Rate input (3rd field) -> 5
  await page.locator('modal-container div:nth-of-type(3) input').click();
  await page.locator('modal-container div:nth-of-type(3) input').fill('5');
 
  // 27. Save
  await page.getByRole('button', { name: 'Save' }).click();
 
  // 28. Dismiss
  await page.locator('div.cdk-overlay-backdrop').dblclick();
 
  // 29. Open the aside action menu
  await page.locator('div.global_aside span:nth-of-type(2) > i').click();
 
  // 30. Confirm "Ok"
  await page.getByRole('button', { name: 'Ok' }).click();
 
  // 31. Dismiss
  await page.locator('div.cdk-overlay-backdrop').click();
 
  // ---- Tax rate #4 (Material dropdown, by text) -----------------------
  // 32. Add New Tax Rate
  await page.getByRole('button', { name: 'Add New Tax Rate' }).click();
 
  // 33. Open the condition dropdown
  await page.locator('#condition_tax span').click();
 
  // 34. Pick "Smooth Track" (recorder captured this text for #mat-option-98)
  await page.getByRole('option', { name: 'Smooth Track' }).click();
 
  // 35-36. Rate input (3rd field) -> 5
  await page.locator('modal-container div:nth-of-type(3) input').click();
  await page.locator('modal-container div:nth-of-type(3) input').fill('5');
 
  // 38. Save
  await page.getByRole('button', { name: 'Save' }).click();
 
  // 39. Dismiss
  await page.locator('div.cdk-overlay-backdrop').dblclick();
 
  // ---- Delete a rate --------------------------------------------------
  // 40. Open the 6th settings list item
  await page.locator('li:nth-of-type(6) p').click();
 
  // 41. Open the row action menu (kebab)
  await page.locator('app-fielddelete > div > div > button').click();
 
  // 42. Delete
  await page.getByRole('button', { name: 'Delete' }).click();
 
  // 43. Confirm "Ok"
  await page.getByRole('button', { name: 'Ok' }).click();
 
  // 44. Dismiss
  await page.locator('div.cdk-overlay-backdrop').click();
 
  // ---- Add New cost rule ---------------------------------------------
  // 45. Add New
  await page.getByRole('button', { name: 'Add New' }).click();
 
  // 46-47. Qty (from) -> 1
  await page.locator('td:nth-of-type(1) > input').click();
  await page.locator('td:nth-of-type(1) > input').fill('1');
 
  // 48-49. Qty (to) -> 100
  await page.locator('td:nth-of-type(3) > input').click();
  await page.locator('td:nth-of-type(3) > input').fill('100');
 
  // 50-51. Enter cost -> 10
  await page.locator('td:nth-of-type(4) input').click();
  await page.locator('td:nth-of-type(4) input').fill('10');
 
  // 52. Open the product dropdown
  await page.locator('#product_select span').click();
 
  // 53. Pick "Smooth Track" (recorder captured this text for #mat-option-135)
  await page.getByRole('option', { name: 'Smooth Track' }).click();
 
  // 54. Dismiss
  await page.locator('div.cdk-overlay-backdrop').click();
 
  // 55. Open the account dropdown
  await page.locator('#acco span').click();
 
  // 56. Pick the option.
  //   ⚠ Recorded as #mat-option-171 with NO captured text — replace with the
  //   visible option label, e.g. page.getByRole('option', { name: 'Your Value' }).
  await page.locator('#mat-option-171 > span').click();
 
  // 57. Save
  await page.getByRole('button', { name: 'Save' }).click();
 
  // 58. Click body
  await page.locator('body').click();
 
  // 59. Open the 7th settings list item
  await page.locator('li:nth-of-type(7) p').click();

});
const { test, expect } = require('@playwright/test');

test('should login and perform a successful transfer', async ({ page }) => {
  // 1. Visit your local site (assuming it's hosted at port 8080)
  await page.goto('http://localhost:8080');

  // 2. Login
  await page.fill('#username', 'jdoe');
  await page.fill('#password', 'password123');
  await page.click('#login-btn');

  // 3. Navigate to Transfer
  await page.click('#nav-transfer-btn');

  // 4. Perform Transfer
  await page.selectOption('#transfer-direction', 'c-to-s');
  await page.fill('#transfer-amount', '100');
  await page.click('#execute-transfer-btn');

  // 5. Assert Success
  const status = page.locator('#transfer-status');
  await expect(status).toContainText('✅');
});

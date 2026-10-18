import { expect, test } from "@playwright/test";

test("2. 사이드바를 축소하고 다시 펼친다", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "메뉴 전환" }).click();
  await expect(page.locator(".mg-app")).toHaveClass(/mg-compact/);
  await page.getByRole("button", { name: "메뉴 전환" }).click();
  await expect(page.locator(".mg-app")).not.toHaveClass(/mg-compact/);
});

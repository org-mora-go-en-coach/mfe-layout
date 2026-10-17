import { expect, test } from "@playwright/test";

test("1. 애플리케이션 프레임을 표시한다", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Mora Go home" })).toBeVisible();
  await expect(page.getByRole("button", { name: "New practice" })).toBeVisible();
  await expect(page.getByRole("button", { name: /Mora English/ })).toBeVisible();
  await expect(page.getByRole("complementary", { name: "Primary navigation" })).toBeVisible();
  await expect(page.locator(".mg-content")).toBeAttached();
});

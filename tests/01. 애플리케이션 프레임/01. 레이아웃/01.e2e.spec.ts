import { expect, test } from "@playwright/test";

test("1. 애플리케이션 프레임을 표시한다", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Mora Go 홈" })).toBeVisible();
  await expect(page.getByRole("button", { name: "새 학습" })).toBeVisible();
  await expect(page.getByRole("button", { name: /모라 영어/ })).toBeVisible();
  await expect(
    page.getByRole("complementary", { name: "주요 메뉴" }),
  ).toBeVisible();
  await expect(page.locator(".mg-content")).toBeAttached();
});

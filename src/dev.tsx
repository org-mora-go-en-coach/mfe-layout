import { mount } from "./remote";
const controller = mount(document.getElementById("root")!, {
  version: "dev",
  onNavigate: () => undefined,
});
controller.setStatus("");

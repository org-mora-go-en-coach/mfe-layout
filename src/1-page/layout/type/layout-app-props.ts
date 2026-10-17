import type { AppName } from "./app-name";

export type LayoutAppProps = {
  active: AppName;
  version: string;
  status: string;
  onNavigate: (app: AppName) => void;
  contentRef: (element: HTMLDivElement | null) => void;
};

export interface NavigationItem {
  key: string;
  path: string;
  icon?: unknown;
  isContentType?: boolean;
}

export const NAVIGATION_CONFIG: readonly NavigationItem[] = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "steam", path: "/steam", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
  { key: "vehicles", path: "/vehicles", isContentType: true },
  { key: "modes", path: "/modes", isContentType: true },
];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));

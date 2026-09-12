export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: any;
  isContentType?: boolean;
}

export const NAVIGATION_CONFIG = [
  {
    key: "guide",
    isContentType: true,
    path: "/guide",
  },
  {
    key: "mechanics",
    isContentType: true,
    path: "/mechanics",
  },
  {
    key: "progression",
    isContentType: true,
    path: "/progression",
  },
  {
    key: "steam",
    isContentType: true,
    path: "/steam",
  },
  {
    key: "community",
    isContentType: true,
    path: "/community",
  },
  {
    key: "vehicles",
    isContentType: true,
    path: "/vehicles",
  },
  {
    key: "modes",
    isContentType: true,
    path: "/modes",
  },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));

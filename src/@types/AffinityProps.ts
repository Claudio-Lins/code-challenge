
export interface PageProps {
  navigation:    Navigation[];
  localizations: Localization[];
}

export interface Localization {
  locale: string;
  slug:   string;
}

export interface Navigation {
  id:          number;
  title:       string;
  type:        Type;
  path:        null;
  related:     null;
  uiRouterKey: string;
  items?:       Item[];
}

export interface Item {
  id:          number;
  title:       string;
  type:        Type;
  path:        null;
  related:     Related | null;
  uiRouterKey: string;
  items:       Item[] | null;
}

export interface Related {
  slug:          string;
  __contentType: ContentType;
  publishedAt:   Date;
}

export enum ContentType {
  APIPagePage = "api::page.page",
}

export enum Type {
  Internal = "INTERNAL",
  Wrapper = "WRAPPER",
}

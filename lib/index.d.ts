declare module "finnish-holidays-js" {
  export interface Holiday {
    year: number,
    month: number,
    day: number,
    description: string,
  }

  export const next: (count?: number, includeWeekends?: boolean) => Holiday[];

  export const year: (year: number, includeWeekends?: boolean) => Holiday[];

  export const month: (month: number, year: number, includeWeekends?: boolean) => Holiday[];

  export const translate: (english: string, language: string) => string;

  export const after: (month: number, year: number, index: number) => Holiday[];

  export const before: (month: number, year: number, index: number) => Holiday[];
}

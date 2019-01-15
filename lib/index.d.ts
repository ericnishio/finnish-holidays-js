declare module 'finnish-holidays-js' {
  export interface Holiday {
    year: number,
    month: number,
    day: number,
    description: string,
  }

  export function next(count?: number, includeWeekends?: boolean): Holiday[];

  export function year(year: number, includeWeekends?: boolean): Holiday[];

  export function month(month: number, year: number, includeWeekends?: boolean): Holiday[];

  export function translate(english: string, language: string): string;

  export function after(month: number, year: number, index: number): Holiday[];

  export function before(month: number, year: number, index: number): Holiday[];
}

import { PrefixFactory } from 'loglevelnext';

export function deleteLogger(id: string);
export const factories: any;
export function logger(opts?: Options): Logger;

export interface Colors {
  [key: string]: string;
}

export interface Logger {
  debug(...args: any[]): void;
  error(...args: any[]): void;
  fail?: (...args: any[]) => void;
  info(...args: any[]): void;
  pass?: (...args: any[]) => void;
  trace(...args: any[]): void;
  warn(...args: any[]): void;
}

export interface Prefix {
  level: function;
  template: string;
}

export interface Options {
  id?: string;
  level?: LogLevel;
  name?: string;
  preface?: string;
  prefix?: Prefix;
  timestamp?: boolean;
  stderr?: string[];
}

export interface StdErrorFactory extends PrefixFactory {
  logger: any;
  stderr: any[];

  bindMethod(obj: any, methodName: string): Function;

  replaceMethods(...args: any[]): void;
}

import { Provider, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

interface IStorage {
  setItem<T>(key: any, item: T): T,
  getItem<T>(key: string): T
}

export class StorageService implements IStorage {
  setItem(key: string, item: any) { return item }
  getItem<T>(key: string): any { return null }
}

export function storageFactory(platformId: string): any {
  if (isPlatformBrowser(platformId)) {
    return new BrowserStorage();
  }
  if (isPlatformServer(platformId)) {
    return new ServerStorage();
  }
  throw new Error('No implementation for this platform' + platformId)
}

export const storageServiceProvider: Provider = {
  provide: StorageService,
  useFactory: storageFactory,
  deps: [PLATFORM_ID]
}

export class BrowserStorage {
  localStorage = localStorage;

  setItem<T>(key: any, item: T): T {
    const str = typeof item === 'string' ? item : JSON.stringify(item);
    this.localStorage.setItem(key, str);
    return item;
  }

  getItem<T>(key: string): T {
    let item;
    const tmp = this.localStorage.getItem(key);
    try {
      item = JSON.parse(tmp!);
    } catch {
      item = tmp;
    }
    return item;
  }
}

export class ServerStorage {
  localStorage = {
    data: {} as {[key:string]: any},
    setItem<T>(key: string, item: T): void {
      this.data[key] = item;
    },
    getItem<T>(key: string): void {
      return this.data[key];
    }
  };

  setItem<T>(key: any, item: T): T {
    this.localStorage.setItem(key, JSON.stringify(item))
    return item;
  }

  getItem<T>(key: string): T {
    let item;
    const tmp = this.localStorage.getItem(key);
    try {
      item = JSON.parse(tmp!);
    } catch {
      item = tmp;
    }
    return item;
  }
}
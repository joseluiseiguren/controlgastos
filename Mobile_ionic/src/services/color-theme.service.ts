import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { StorageConstants } from 'src/constants/storage.constants';

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {
  private render: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.render = rendererFactory.createRenderer(null, null);
  }

  setColorTheme(theme: string): void {
    this.render.setAttribute(document.body, 'color-theme', theme);
    localStorage.setItem(StorageConstants.colorTheme, theme);
  }

  getCurrentTheme(): string {
    return document.getElementById('moneyGuardBody').getAttribute('color-theme');
  }

  initTheme(): void {
    const savedColotTheme = localStorage.getItem(StorageConstants.colorTheme);
    if (savedColotTheme === null){
      if (this.getCurrentTheme() === 'dark'){
        localStorage.setItem(StorageConstants.colorTheme, 'dark');
      } else {
        localStorage.setItem(StorageConstants.colorTheme, 'light');
      }
    } else {
      this.render.setAttribute(document.body, 'color-theme', savedColotTheme);
    }
  }
}

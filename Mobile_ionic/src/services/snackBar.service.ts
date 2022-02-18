import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(public toastController: ToastController) { }

  async showSnackBarError(errorMessage: string): Promise<void> {
    const toast = await this.toastController.create({
      message: errorMessage,
      duration: 5000,
      color: 'danger'
    });
    toast.present();
  }

  async showSnackBarInformation(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'light'
    });
    toast.present();
  }

  async showSnackBarSuccess(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      color: 'success'
    });
    toast.present();
  }
}

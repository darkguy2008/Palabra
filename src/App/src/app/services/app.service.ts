import { Injectable } from '@angular/core';
import { IGlobals } from '../core/types';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  globals: IGlobals = {
    enableSSO: false,
    enableGuestLogin: false,
    enableLocalAccounts: true
  };

  constructor() { }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbdToastGlobal } from './toast-global.component';
import { ToastsContainer } from './toasts-container.component';

@NgModule({
	imports: [BrowserModule],
	declarations: [NgbdToastGlobal, ToastsContainer],
	bootstrap: [NgbdToastGlobal],
})
export class NgbdToastGlobalModule {}

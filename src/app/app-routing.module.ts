/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertPage } from './pages/alert.page';
import { GettingStartedPage } from './pages/getting-started.page';
import { BadgePage } from './pages/badge.page';
import { LabelPage } from './pages/label.page';
import { IconsPage } from './pages/icons.page';
import { AccordionPage } from './pages/accordion.page';
import { CheckboxPage } from './pages/checkbox.page';
import { AdoptionToolingPage } from './pages/adoption-tooling.page';
import { ButtonPage } from './pages/button.page';
import { DatalistPage } from './pages/datalist.page';
import { FormPage } from './pages/form.page';
import { InputPage } from './pages/input.page';
import { IntroPage } from './pages/intro.page';
import { ListPage } from './pages/list.page';
import { ModalPage } from './pages/modal.page';
import { PasswordPage } from './pages/password.page';
import { RadioPage } from './pages/radio.page';
import { RangePage } from './pages/range.page';
import { SelectPage } from './pages/select.page';
import { TextareaPage } from './pages/textarea.page';
import { TogglePage } from './pages/toggle.page';
import { CardPage } from './pages/card.page';
import { WizardPage } from './pages/wizard.page';
import { TimelinePage } from './pages/timeline.page';
import { DropdownPage } from './pages/dropdown.page';
import { ComboboxPage } from './pages/combobox.page';
import { ProgressbarPage } from './pages/progressbar.page';
import { TreeviewPage } from './pages/treeview.page';
import { SignpostPage } from './pages/signpost.page';
import { StepperPage } from './pages/stepper.page';
import { TablePage } from './pages/table.page';
import { SpinnerPage } from './pages/spinner.page';
import { TooltipPage } from './pages/tooltip.page';
import { HeaderPage } from './pages/header.page';
import { TabPage } from './pages/tab.page';
import { LandingPage } from './pages/landing.page';
import { OverviewPage } from './pages/overview.page';
import { ApproachesPage } from './pages/approaches.page';
// import { TemplateBuilderPage } from './pages/template-builder.page';
import { AdditionalLearningPage } from './pages/additional-learning.page';

export const componentRoutes = [
  { path: 'overview', component: OverviewPage },
  { path: 'accordion', component: AccordionPage },
  { path: 'alert', component: AlertPage },
  { path: 'badge', component: BadgePage },
  { path: 'button', component: ButtonPage },
  { path: 'card', component: CardPage },
  { path: 'checkbox', component: CheckboxPage },
  { path: 'combobox', component: ComboboxPage },
  { path: 'datalist', component: DatalistPage },
  { path: 'dropdown', component: DropdownPage },
  { path: 'form', component: FormPage },
  { path: 'header', component: HeaderPage },
  { path: 'icons', component: IconsPage },
  { path: 'input', component: InputPage },
  { path: 'label', component: LabelPage },
  { path: 'list', component: ListPage },
  { path: 'modal', component: ModalPage },
  { path: 'password', component: PasswordPage },
  { path: 'progress-bar', component: ProgressbarPage },
  { path: 'radio', component: RadioPage },
  { path: 'range', component: RangePage },
  { path: 'select', component: SelectPage },
  { path: 'signpost', component: SignpostPage },
  { path: 'spinner', component: SpinnerPage },
  { path: 'stepper', component: StepperPage },
  { path: 'tab', component: TabPage },
  { path: 'table', component: TablePage },
  { path: 'textarea', component: TextareaPage },
  { path: 'timeline', component: TimelinePage },
  { path: 'toggle', component: TogglePage },
  { path: 'tooltip', component: TooltipPage },
  { path: 'tree-view', component: TreeviewPage },
  { path: 'wizard', component: WizardPage },
];

export const getStartedRoutes = [
  { path: 'introduction', component: IntroPage },
  { path: 'get-started', component: GettingStartedPage },
  { path: 'additional-learning', component: AdditionalLearningPage },
  { path: 'additional-strategies', component: ApproachesPage },
  // { path: 'builder', component: TemplateBuilderPage },
];

const routes: Routes = [
  { path: 'adoption-tooling', component: AdoptionToolingPage },
  { path: '', component: LandingPage },
  { path: '*', redirectTo: '/getting-started', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot([...routes, ...componentRoutes, ...getStartedRoutes])],
  exports: [RouterModule],
})
export class AppRoutingModule {}
/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-button',
  template: `
    <h1 cds-text="heading" cds-layout="m-b:lg m-t:lg">Button</h1>

    <app-eslint-intro-block rule="no-clr-button"></app-eslint-intro-block>

    <demo [tabs]="demo1">
      <h3 cds-text="section" cds-layout="m-b:lg">Primary button</h3>
      <p>Basic primary button</p>
    </demo>

    <demo [tabs]="demo2">
      <h3 cds-text="section" cds-layout="m-b:lg">Solid buttons</h3>
      <p>All solid buttons</p>
    </demo>

    <demo [tabs]="demo3">
      <h3 cds-text="section" cds-layout="m-b:lg">Outline buttons</h3>
      <p>All outline buttons</p>
    </demo>

    <demo [tabs]="demo4">
      <h3 cds-text="section" cds-layout="m-b:lg">Inverse buttons</h3>
    </demo>

    <demo [tabs]="demo5">
      <h3 cds-text="section" cds-layout="m-b:lg">Icon buttons</h3>
    </demo>

    <demo [tabs]="demo6">
      <h3 cds-text="section" cds-layout="m-b:lg">Loading buttons</h3>
    </demo>
  `,
})
export class ButtonPage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'button/button.1.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'button/button.1.core.txt',
      },

      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'button/button.2.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'button/button.2.core.txt',
      },

      template: 'core',
    },
  ];

  demo3: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'button/button.3.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'button/button.3.core.txt',
      },

      template: 'core',
    },
  ];

  demo4: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'button/button.4.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'button/button.4.core.txt',
      },

      template: 'core',
    },
  ];

  demo5: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'button/button.5.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'button/button.5.core.txt',
      },

      template: 'core',
    },
  ];

  demo6: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'button/button.6.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'button/button.6.core.txt',
      },

      template: 'core',
    },
  ];
}
# ADDAPPTABLES Perfect-scrollbar
Utility for scroll browser

## Getting Started
To get started, lets install the package thru npm:

```
npm i @addapptables/perfect-scrollbar perfect-scrollbar --S
```

## How to use

Import AddapptablePerfectScrollbarModule in your module

```javascript
   import { AddapptablePerfectScrollbarModule } from '@addapptables/perfect-scrollbar';
    @NgModule({
        imports: [AddapptablePerfectScrollbarModule]
    })
    export class AddapptableModule { }
```

```css
    .menu-scroll-container{
        position: relative; //this property is important
    }
```
```html
<div addapptablesPerfectScrollbar class="menu-scroll-container">
    ...large content
</div>
```

Options
```javascript
export interface Options {
    handlers?: string[];
    maxScrollbarLength?: number;
    minScrollbarLength?: number;
    scrollingThreshold?: number;
    scrollXMarginOffset?: number;
    scrollYMarginOffset?: number;
    suppressScrollX?: boolean;
    suppressScrollY?: boolean;
    swipeEasing?: boolean;
    useBothWheelAxes?: boolean;
    wheelPropagation?: boolean;
    wheelSpeed?: number;
  }
```

```html
<div addapptablesPerfectScrollbar [perfectScrollOptions]="{ wheelPropagation: true }" class="menu-scroll-container">
    ...large content
</div>
```
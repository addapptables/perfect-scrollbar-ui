# ADDAPPTABLES Perfect-scrollbar
Utility for scroll browser

## Getting Started
To get started, lets install the package thru npm:

```
npm i @addapptables/perfect-scrollbar --S
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

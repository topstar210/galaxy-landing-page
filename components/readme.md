# Component Structure

## CI

All components that represent the clients corporate identity f.e. "Logo.vue"

## SE

SE components are specific sections, mostly build out of EL Components. They are the building blocks of Pages.

## ST

ST components are Strapi specific components, like component parser, markdown parser etc.

## FO

FO components are Forms. Forms will be built with UIInput components and wrap all the form specific submit-functionalities.

## EL

Every component that stand for itself and serves as a wrapper for specific functionalities in the context of f.e. a screen. If you change an EL-Component, it changes behavior in one specific place. There is one NavBar, there is one Footer.

## UI

Every element that is repeatedly used to build out the EL-Components. A NavItem is used multiple times in the Footer or in the NavBar. An UI-Element often serves as a styling wrapper. If you change an UI-Component, it changes stuff everywhere. It never holds functionality. A button is a good example. Sometimes you want a button to lead to a page, sometimes you want to submit a form. If you have the component "UIButtonPrimary", you can place it anywhere and add to it, where its needed.

You have your styled button UI component that holds nothing but the markup and style:

```html
<template>
  <button class="w-96 h-10 bg-red-500">
    <p>Dont klick me</p>
  </button>
</template>
```

And you have the context where you place the button. There you can specify its individual functionality.

```html
<template>
  <UIButtonPrimary @click="doSmth" />
</template>

<script setup lang="ts">
    const doSmth = () => {
        console.log("BOOOOM")
    }
</script>
```

HINT: If you want to reuse functionality, like f.e. the doSmth-function, you have to write a composable. 
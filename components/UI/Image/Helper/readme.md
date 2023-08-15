In der Responsive Komponente werden die Tailwind Breakpoints beobachtet und die angemessenen Bildgrößen aus der Strapi Response geladen. Du kannst selbst einstellen, welche Bilder ab welchen Breakpoints geladen werden.

Wenn du den Approach blöd findest gibt es noch die folgenden Möglichkeiten:

Du kannst direkt mit der nuxt-img Komponente arbeiten. Es gibt in der Dokumentation eine Doku, wie man das direkt mit der Nuxt-Image Komponente macht, hat aber nicht funktioniert:https://image.nuxtjs.org/providers/strapi

Vorteil: Kontrolle.
Nachteil: Keine Abhängigkeit von Breakpoints.

```html
<nuxt-img provider="strapi" :src="data.leftBottom.data.attributes.url" />
```

Die andere Möglichkeit wäre innerhalb der Responsive Komponente verschiedene Modi einzubauen, sodass man sie so die Komponente so aufrufen kann.

Vorteil: Verschiedene Loading Mechanismen an einer Stelle verwaltbar - gut wenn z.B. ein Header Image, sollte nicht so schnell das kleinste Bild laden, da es die gesamte Bildschirmbreite ausfüllt und es demnach schnell verpixelt aussieht.
Nachteil: Viel JavaScript

```html
<UIImageHelperResponsive :data="data.headerImage" mode="header" />
```

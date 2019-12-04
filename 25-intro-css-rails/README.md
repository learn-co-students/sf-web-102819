# Rails HTML and CSS 🧩

## Goals 🖼

- [ ] Review basic HTML 🤹🏻‍♂️
- [ ] Introduce accessible, semantic HTML 🦾
- [ ] Define CSS 🎩
- [ ] Use CSS with cascade, inheritance, and specificity in mind 🔬
- [ ] Style a site 🕺🏿

## Basic HTML 🤹🏻‍♂️

- **HTML** = **H**yper**T**ext **M**arkup **L**anguage
  - "The most basic building block of the web." - [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - HyperText = Links connect webpages
  - Markup = Special character combinations to format and designate elements
- HTML page composition
  - **Head** = The part _not_ displayed in the browser, containing metadata and links to resources
  - **Body** = The part displayed in the browser, containing the page content
- The Anatomy of an HTML Element:
![HTML Syntax](./html-syntax.svg)
- `.erb` files and the layout file (yield)

## Accessibility 🦾

- A way of communicating to different users in different ways
- [Semantic HTML](https://marksheet.io/html-semantics.html): Make things as easy to understand as possible for both humans and bots
  - Introduce _meaning_ to the web page instead of just presentation
  - [Use appropriate, specific HTML elements tags](https://www.semrush.com/blog/semantic-html5-guide/)
  - [Why use semantic HTML?](https://www.lifewire.com/why-use-semantic-html-3468271)
- **A**ccessible **R**ich **I**nternet **A**pplications (**ARIA**)
  - [Defined by W3C](https://www.w3.org/WAI/PF/aria/states_and_properties)
  - [ARIA Examples](http://heydonworks.com/practical_aria_examples/)
- [Accessiblity checklist by A11Y](https://a11yproject.com/checklist/)

## CSS 🎩

- **CSS** = **C**ascading **S**tyle **S**heets
  - Cascading: Order (and other things) matter
  - Style: For defining appearance
  - Sheets: In different files
- Fundamental vocab
![CSS Syntax](./css-syntax.png)

## [Cascade, Inheritance, Specificity](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) 🔬

- Cascade
  - The order of CSS rules matter!
  - When two rules apply and have equal specificity, the one that cames last is the one that's used.
- Specificity
  - The more specific the selector, the more its rule will apply.
  - Element < Class < ID
- Inheritance
  - Child elements inherit (some) styles of their parents

## Styling a Site 🕺🏿

- [Writing CSS with Accessibility in Mind](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939)
- Responsiveness

## Resources 📦

- See all links above
- For learning CSS layouts!
  - http://cssgridgarden.com/
  - https://flexboxfroggy.com/

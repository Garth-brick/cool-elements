# Cool Web Components

This repository is a collection of cool elements that I created using HTML/CSS and vanilla JS. These are mostly just a recreations of interesting stuff that I found online. This README file is used to document the implementation details of each of the projects along with how I resolved the problems I faced in each of the projects.

## 1. Dualtone Header

This was inspired by the header on https://www.superlist.com/ which is genuinely a very pretty website.

### Implementation details:
- We have a left-side and right-side
- The right-side is always in the background and the left-side is always on top of it
- We change the width of the left side to a percentage value depending on the x coordinate of the mouse
- We ensure that the left-side and the right-side overlap perfectly by using `position: absolute` on them
- Keep the text centred horizontally by giving it a fixed width and setting the margin-left and margin-right to the remaining width of the window. The fixed width will also ensure that the words drop down neatly
- The text won't be selectable with `user-select: none`
- We must select a background color which maintains high readablitiy of both black and white text
- To ensure that the left text is not visible when the width of the left panel is reduced use `overflow: hidden`
- The text is centred vertically by ensuring that the two sides take up the full height of the screen and then usinng `display: grid` along with `place-items: center` to turn each panel into a CSS Grid and then place their singular element in the centre of that grid

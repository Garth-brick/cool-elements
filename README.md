# Cool Web Components

This repository is a collection of cool elements that I created using HTML/CSS and vanilla JS. These are mostly just a recreations of interesting stuff that I found online. This README file is used to document the implementation details of each of the projects along with how I resolved the problems I faced in each of the projects.

## 1. Dualtone Header

This was inspired by the header on [Superlist](https://www.superlist.com/) website which is genuinely a very pretty website.

### Implementation details:
- We have two divs, one for left-side and one for the right-side
- The right-side is always in the background and the left-side is always on top of it
- We change the width of the left side to a percentage value depending on the x coordinate of the mouse
- We ensure that the left-side and the right-side overlap perfectly by using absolute positioning on them while their wrapper is given a relative position
- Keep the text centred horizontally by giving it a fixed width and setting the margin-left and margin-right to the remaining width of the window. The fixed width will also ensure that the words drop down neatly due to the wrapping
- The text won't be selectable with `user-select: none`
- We must select a background color which maintains high readablitiy of both black and white text
- To ensure that the left text is not visible when the width of the left panel is reduced use `overflow: hidden`
- Used the fonts Rubik, Borel, and Satisfy after linking with Google fonts.
- Used margins for positioning elements

## 2. Metallic Hover Effect

This was inpired by hover effect on the grid cards which you can see on the [Features Page of Linear.app](https://linear.app/features) which is another breathtakingly beautiful website, although it isn't very responsive to mobile layouts.

**Important Trick**: traditional borders is CSS are extremely limited in their usage. We get more interactive borders in this hover effect by creating a larger card and then centering a smaller card inside it. We then place the larger card behind the smaller card. Now this larger card shows up like a border to the smaller card.

### Implementation details:
- We have 6 divs, one for each card
- We create a radial gradient on each card with the current mouse position using a before pseudo element with `content: ""` so that it is still displayed
- The pseudo element's opacity is set to 0 by default but we set it to 1 for a particular card
- We set the opacity of the border element to 1 whenever the mouse is hovered anywhere over the entire card wrapper and not just limited to a single card, this is important for getting the highlight on the borders of adjacent cards
- Used grid to position the individual cards within the cards wrapper div and a column oriented flexbox on the body to position the wrapper
- Used the Poppins font with a weight of 100 for the header
- Styled the scrollbar and text selection to match the theme

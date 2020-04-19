# Responsive Landing Page

[github-page](https://toypiano.github.io/landing-page-powell-feb-2007/)
Code-along repo for [How to Create a Website - Complete workflow](https://youtu.be/aEUkm1as3KE) by Kevin Powell.

## Changes

- Uses `.scss` instead of `.sass` file
- Uses VSCode's `Live Sass` extension

## Memo

- Issue: [Always receiving "Extension host terminated unexpectedly](https://github.com/ritwickdey/vscode-live-sass-compiler/issues/112)
  - solution: `"color-highlight.languages": [ "*", "!scss" ]`
- |           | jpg                                                                                               | png                                                                             |
  | --------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
  | File size | small                                                                                             | large                                                                           |
  | Good for  | photos(many colors)                                                                               | graphics(less colors)                                                           |
  | lossy     | quality loss on re-save                                                                           | loseless                                                                        |
  | used when | img size becomes too big in png. quality don't matter much. slow internet speed(more time for dl) | digital art(logos, icons,..) supports transparent bg( can layer over other img) |

- `background-blend-mode: multiply;` blends bg image with bg color. cool!
- Link not clickable because ::before | ::after
  - links inside `.nav-footer` became un-clickable being placed under ::before (img background layer).
  - Setting `z-index` was tricky because the img background was layered on top of the parent container(footer)'s background.
  - setting `pointer-events: none;` inside `::before` was the easiest solution.

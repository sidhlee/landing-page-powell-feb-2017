# Responsive Landing Page

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

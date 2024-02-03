# Reddit Sans

![Reddit Sans](./documentation/preview.png)
![Reddit Sans Condensed](./documentation/preview-condensed.png)
![Reddit Mono](./documentation/preview-mono.png)

## Fonts

Reddit Sans, Reddit Mono and Reddit Condensed font files can be found in the
`fonts` directory. Both TrueType and WOFF/WOFF2 files are available.

### Building

This repository follows the [Google Fonts project
template](https://github.com/googlefonts/googlefonts-project-template).

Fonts are built automatically by GitHub Actions - take a look in the "Actions" tab for the latest build.

If you want to build fonts manually on your own computer:

- `make build` will produce font files.
- `make test` will run FontBakery's quality assurance tests.
- `make proof` will generate HTML proof files.

The proof files and QA tests are also available automatically via GitHub Actions - look at https://reddit.github.io/redditsans/.

## Source Files

The `src` directory contains the [Glyphs](https://glyphsapp.com/) files for each
set of fonts, and the project files used to output the various subsets.

## Specimen

The `specimen` directory contains source files for the
[microsite](https://redditsans.s-ings.com/).

## Licence

Copyright © 2020-23, Reddit, Inc. (https://github.com/reddit/redditsans) This Font Software is
licensed under the SIL Open Font License, Version 1.1. See
[OFL.txt](./OFL.txt) and the [OFL-FAQ](./documentation/OFL-FAQ.txt) for more
information.

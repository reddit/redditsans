#!/bin/sh
set -e

echo "Build Families"

gftools builder sans.yaml
gftools builder sanscondensed.yaml
gftools builder mono.yaml

echo "Slice Families"

fonttools varLib.instancer ../fonts/sans/variable/RedditSans[wght].ttf wght=300:800  --output ../fonts/sans/variable/RedditSans[wght].ttf
fonttools varLib.instancer ../fonts/sans/variable/RedditSans-Italic[wght].ttf wght=300:800 --output ../fonts/sans/variable/RedditSans-Italic[wght].ttf

fonttools varLib.instancer ../fonts/sans-condensed/variable/RedditSansCondensed[wght].ttf wght=300:800  --output ../fonts/sans-condensed/variable/RedditSansCondensed[wght].ttf

fonttools varLib.instancer ../fonts/mono/variable/RedditMono[wght].ttf wght=300:800  --output ../fonts/mono/variable/RedditMono[wght].ttf


echo "Job completed!"

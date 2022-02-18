#!/bin/bash

version="v1.009"
version_condensed="05"
version_mono="05"

# Reddit Sans
src="./fonts/Reddit Sans"
dst="./specimen/src/static/fonts/reddit-sans/archive"

mkdir "$dst/$version"

cp "$src/RedditSans-Light.woff2" "$dst/$version"
cp "$src/RedditSans-Regular.woff2" "$dst/$version"
cp "$src/RedditSans-SemiBold.woff2" "$dst/$version"
cp "$src/RedditSans-Bold.woff2" "$dst/$version"
cp "$src/RedditSans-ExtraBold.woff2" "$dst/$version"

cp "$src/RedditSans-LightItalic.woff2" "$dst/$version"
cp "$src/RedditSans-Italic.woff2" "$dst/$version"
cp "$src/RedditSans-SemiBoldItalic.woff2" "$dst/$version"
cp "$src/RedditSans-BoldItalic.woff2" "$dst/$version"
cp "$src/RedditSans-ExtraBoldItalic.woff2" "$dst/$version"

# Reddit Sans Condensed
src="./fonts/Reddit Sans Condensed"
dst="./specimen/src/static/fonts/reddit-sans-condensed/archive"

mkdir "$dst/$version_condensed"

cp "$src/RedditSansCondensed-Light.woff2" "$dst/$version_condensed"
cp "$src/RedditSansCondensed-Regular.woff2" "$dst/$version_condensed"
cp "$src/RedditSansCondensed-SemiBold.woff2" "$dst/$version_condensed"
cp "$src/RedditSansCondensed-Bold.woff2" "$dst/$version_condensed"
cp "$src/RedditSansCondensed-ExtraBold.woff2" "$dst/$version_condensed"

# Reddit Mono
src="./fonts/Reddit Mono"
dst="./specimen/src/static/fonts/reddit-mono/archive"

mkdir "$dst/$version_mono"

cp "$src/RedditMono-Light.woff2" "$dst/$version_mono"
cp "$src/RedditMono-Regular.woff2" "$dst/$version_mono"
cp "$src/RedditMono-SemiBold.woff2" "$dst/$version_mono"
cp "$src/RedditMono-Bold.woff2" "$dst/$version_mono"
cp "$src/RedditMono-ExtraBold.woff2" "$dst/$version_mono"

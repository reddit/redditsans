#!/bin/bash

version=$1
dirname="specimen/assets/fonts/${version}"

mkdir $dirname
mkdir "${dirname}/Unnamed-Sans-${version}"
touch "${dirname}/Unnamed-Sans-${version}/UnnamedSans.txt"

read -r -d '' contents << EOM
Unnamed Sans Bold
Version ${version}

-------

These demo font files are for the sole purpose of testing and are not to be used for any other purposes or distributed without the author's permission.

You can find information on how to test these fonts at
https://unnamed-sans.netlify.app/font-testing/

-------

Copyright © 2020 by Stephen Hutchings. All rights reserved.

https://www.s-ings.com/
mailto: stephen@s-ings.com
EOM

echo "${contents}" > "${dirname}/Unnamed-Sans-${version}/UnnamedSans.txt"

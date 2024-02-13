## FontBakery report

fontbakery version: 0.10.2

<details><summary><b>[1] Family checks</b></summary><div><details><summary>⚠ <b>WARN:</b> Make sure all font files have the same version value. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/head.html#com.google.fonts/check/family/equal_font_versions">com.google.fonts/check/family/equal_font_versions</a>)</summary><div>


* ⚠ **WARN** Version info differs among font files of the same font project.
These were the version values found:
* ./fonts/sans/ttf/RedditSans-LightItalic.ttf: 1.01300048828125
* ./fonts/sans/ttf/RedditSans-ExtraBold.ttf: 1.014007568359375
* ./fonts/sans/ttf/RedditSans-Light.ttf: 1.014007568359375
* ./fonts/sans/ttf/RedditSans-Medium.ttf: 1.014007568359375
* ./fonts/sans/ttf/RedditSans-Bold.ttf: 1.014007568359375
* ./fonts/sans/ttf/RedditSans-BoldItalic.ttf: 1.01300048828125
* ./fonts/sans/ttf/RedditSans-ExtraBoldItalic.ttf: 1.01300048828125
* ./fonts/sans/ttf/RedditSans-Regular.ttf: 1.014007568359375
* ./fonts/sans/ttf/RedditSans-SemiBold.ttf: 1.014007568359375
* ./fonts/sans/ttf/RedditSans-MediumItalic.ttf: 1.01300048828125
* ./fonts/sans/ttf/RedditSans-Italic.ttf: 1.01300048828125
* ./fonts/sans/ttf/RedditSans-SemiBoldItalic.ttf: 1.01300048828125
 [code: mismatch]
</div></details><br></div></details><details><summary><b>[15] RedditSans-LightItalic.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check license file has good copyright string. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_copyright">com.google.fonts/check/license/OFL_copyright</a>)</summary><div>


* 🔥 **FAIL** First line in license file is:

"reddit sans"

which does not match the expected format, similar to:

"Copyright 2022 The Familyname Project Authors (git url)" [code: bad-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Check OFL body text is correct. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_body_text">com.google.fonts/check/license/OFL_body_text</a>)</summary><div>


* 🔥 **FAIL** The OFL.txt body text is incorrect. Please use https://github.com/googlefonts/Unified-Font-Repository/blob/main/OFL.txt as a template. You should only modify the first line. [code: incorrect-ofl-body-text]
</div></details><details><summary>🔥 <b>FAIL:</b> Check copyright namerecords match license file. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/name/license">com.google.fonts/check/name/license</a>)</summary><div>


* 🔥 **FAIL** License file OFL.txt exists but NameID 13 (LICENSE DESCRIPTION) value on platform 3 (WINDOWS) is not specified for that. Value was: "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://openfontlicense.org/" Must be changed to "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://scripts.sil.org/OFL" [code: wrong]
</div></details><details><summary>🔥 <b>FAIL:</b> Copyright notices match canonical pattern in fonts (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_copyright">com.google.fonts/check/font_copyright</a>)</summary><div>


* 🔥 **FAIL** Name Table entry: Copyright notices should match a pattern similar to: "Copyright 2019 The Familyname Project Authors (git url)"
But instead we have got:
"Copyright (c) 2020-2023, Reddit, Inc. (https://github.com/reddit/redditsans)" [code: bad-notice-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Do we have the latest version of FontBakery installed? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/fontbakery_version">com.google.fonts/check/fontbakery_version</a>)</summary><div>


* 🔥 **FAIL** Current FontBakery version is 0.10.2, while a newer 0.11.1 is already available. Please upgrade it with 'pip install -U fontbakery' [code: outdated-fontbakery]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check Google Fonts glyph coverage. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyph_coverage">com.google.fonts/check/glyph_coverage</a>)</summary><div>


* ⚠ **WARN** GF_Latin_Plus is almost fulfilled. Missing codepoints:

	- 0x20B4 (HRYVNIA SIGN)


	- 0x20B8 (TENGE SIGN)


	- 0x20AE (TUGRIK SIGN)


	- 0x2016 (DOUBLE VERTICAL LINE)


	- 0x0E3F (THAI CURRENCY SYMBOL BAHT)


	- 0x20BF (BITCOIN SIGN)


	- 0x20BE (LARI SIGN)


	- 0x20A8 (RUPEE SIGN)


	- 0x20AA (NEW SHEQEL SIGN)


	- 0x25CF (BLACK CIRCLE)


	- 0x25CB (WHITE CIRCLE)


	- 0x25E6 (WHITE BULLET)


	- 0x25AA (BLACK SMALL SQUARE)


	- 0x25AB (WHITE SMALL SQUARE)


	- 0x25B4 (BLACK UP-POINTING SMALL TRIANGLE)


	- 0x25B8 (BLACK RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BE (BLACK DOWN-POINTING SMALL TRIANGLE)


	- 0x25C2 (BLACK LEFT-POINTING SMALL TRIANGLE)


	- 0x25B5 (WHITE UP-POINTING SMALL TRIANGLE)


	- 0x25B9 (WHITE RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BF (WHITE DOWN-POINTING SMALL TRIANGLE)


	- 0x25C3 (WHITE LEFT-POINTING SMALL TRIANGLE)
 [code: missing-codepoints]
* ⚠ **WARN** GF_TransLatin_Arabic is almost fulfilled. Missing codepoints:

	- 0x1E34 (LATIN CAPITAL LETTER K WITH LINE BELOW)


	- 0x1E35 (LATIN SMALL LETTER K WITH LINE BELOW)


	- 0x1E96 (LATIN SMALL LETTER H WITH LINE BELOW)


	- 0x02BD (MODIFIER LETTER REVERSED COMMA)
 [code: missing-codepoints]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02B9 MODIFIER LETTER PRIME: not included in any glyphset definition
 * U+02BA MODIFIER LETTER DOUBLE PRIME: not included in any glyphset definition
 * U+02BE MODIFIER LETTER RIGHT HALF RING: not included in any glyphset definition
 * U+02BF MODIFIER LETTER LEFT HALF RING: not included in any glyphset definition
 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02C8 MODIFIER LETTER VERTICAL LINE: not included in any glyphset definition
 * U+02C9 MODIFIER LETTER MACRON: not included in any glyphset definition
 * U+02CA MODIFIER LETTER ACUTE ACCENT: not included in any glyphset definition
 * U+02CB MODIFIER LETTER GRAVE ACCENT: not included in any glyphset definition
 * U+02CC MODIFIER LETTER LOW VERTICAL LINE: not included in any glyphset definition
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, coptic, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, malayalam, tai-le, syriac, tifinagh, canadian-aboriginal, old-permic, math
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
 * U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition
 * U+0311 COMBINING INVERTED BREVE: try adding coptic
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+031B COMBINING HORN: not included in any glyphset definition
 * U+0324 COMBINING DIAERESIS BELOW: try adding one of: cherokee, syriac
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+032E COMBINING BREVE BELOW: try adding syriac
 * U+0331 COMBINING MACRON BELOW: try adding one of: gothic, caucasian-albanian, syriac, tifinagh, cherokee
 * U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition
 * U+035C COMBINING DOUBLE BREVE BELOW: not included in any glyphset definition
 * U+0361 COMBINING DOUBLE INVERTED BREVE: try adding coptic
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, yi, math
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+2010 HYPHEN: try adding one of: coptic, yi, cham, kaithi, kharoshthi, kayah-li, sundanese, syloti-nagri, sora-sompeng, lisu
 * U+2011 NON-BREAKING HYPHEN: try adding one of: syloti-nagri, yi
 * U+2012 FIGURE DASH: not included in any glyphset definition
 * U+2015 HORIZONTAL BAR: try adding adlam
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+203D INTERROBANG: not included in any glyphset definition
 * U+2042 ASTERISM: not included in any glyphset definition
 * U+204E LOW ASTERISK: not included in any glyphset definition
 * U+2051 TWO ASTERISKS ALIGNED VERTICALLY: not included in any glyphset definition
 * U+2052 COMMERCIAL MINUS SIGN: not included in any glyphset definition
 * U+2070 SUPERSCRIPT ZERO: not included in any glyphset definition
 * U+2075 SUPERSCRIPT FIVE: not included in any glyphset definition
 * U+2076 SUPERSCRIPT SIX: not included in any glyphset definition
 * U+2077 SUPERSCRIPT SEVEN: not included in any glyphset definition
 * U+2078 SUPERSCRIPT EIGHT: not included in any glyphset definition
 * U+2079 SUPERSCRIPT NINE: not included in any glyphset definition
 * U+2080 SUBSCRIPT ZERO: not included in any glyphset definition
 * U+2081 SUBSCRIPT ONE: not included in any glyphset definition
 * U+2082 SUBSCRIPT TWO: not included in any glyphset definition
 * U+2083 SUBSCRIPT THREE: not included in any glyphset definition
 * U+2084 SUBSCRIPT FOUR: not included in any glyphset definition
 * U+2085 SUBSCRIPT FIVE: not included in any glyphset definition
 * U+2086 SUBSCRIPT SIX: not included in any glyphset definition
 * U+2087 SUBSCRIPT SEVEN: not included in any glyphset definition
 * U+2088 SUBSCRIPT EIGHT: not included in any glyphset definition
 * U+2089 SUBSCRIPT NINE: not included in any glyphset definition
 * U+2116 NUMERO SIGN: try adding cyrillic
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+215B VULGAR FRACTION ONE EIGHTH: not included in any glyphset definition
 * U+215C VULGAR FRACTION THREE EIGHTHS: not included in any glyphset definition
 * U+215D VULGAR FRACTION FIVE EIGHTHS: not included in any glyphset definition
 * U+215E VULGAR FRACTION SEVEN EIGHTHS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: symbols, math
 * U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math
 * U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math
 * U+2195 UP DOWN ARROW: try adding one of: symbols, math
 * U+2196 NORTH WEST ARROW: try adding one of: symbols, math
 * U+2197 NORTH EAST ARROW: try adding one of: symbols, math
 * U+2198 SOUTH EAST ARROW: try adding one of: symbols, math
 * U+2199 SOUTH WEST ARROW: try adding one of: symbols, math
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+2219 BULLET OPERATOR: try adding one of: tai-tham, symbols, yi, math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+2310 REVERSED NOT SIGN: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: symbols, math
 * U+25CC DOTTED CIRCLE: try adding one of: mandaic, tibetan, balinese, ahom, limbu, hanunoo, kannada, bassa-vah, wancho, tirhuta, pahawh-hmong, hanifi-rohingya, kaithi, chakma, caucasian-albanian, mongolian, siddham, tamil, cham, tagalog, coptic, manichaean, lao, syloti-nagri, marchen, tai-viet, modi, psalter-pahlavi, osage, sharada, lepcha, sinhala, bengali, rejang, gunjala-gondi, miao, symbols, tai-le, oriya, brahmi, sundanese, gurmukhi, zanabazar-square, syriac, tagbanwa, myanmar, new-tai-lue, mahajani, math, grantha, dogra, batak, adlam, hebrew, buhid, masaram-gondi, thaana, javanese, kharoshthi, soyombo, gujarati, music, kayah-li, khojki, thai, bhaiksuki, khudawadi, khmer, newa, sogdian, meetei-mayek, mende-kikakui, malayalam, tifinagh, yi, elbasan, duployan, nko, takri, telugu, buginese, devanagari, phags-pa, old-permic
 * U+2605 BLACK STAR: try adding symbols
 * U+2606 WHITE STAR: try adding symbols
 * U+2661 WHITE HEART SUIT: try adding symbols
 * U+2665 BLACK HEART SUIT: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math
 * U+EA00 : not included in any glyphset definition
 * U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition
 * U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition
 * U+1F845 UPWARDS HEAVY ARROW: try adding symbols
 * U+1F847 DOWNWARDS HEAVY ARROW: try adding symbols

Or you can add the above codepoints to one of the subsets supported by the font: `latin`, `latin-ext`, `vietnamese` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + f

	- f + i

	- i + f

	- f + l

	- l + f

	- i + l

	- r + slash [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- NULL

	- arrowboth.case

	- arrowdown.case

	- arrowleft.case

	- arrowright.case

	- arrowup.case

	- arrowupdn.case

	- eight.sinf

	- eight.subs

	- eight.sups

	- five.sinf

	- five.subs

	- five.sups

	- four.sinf

	- four.subs

	- four.sups

	- nine.sinf

	- nine.subs

	- nine.sups

	- one.sinf

	- one.subs

	- one.sups

	- seven.sinf

	- seven.subs

	- seven.sups

	- six.sinf

	- six.subs

	- six.sups

	- three.sinf

	- three.subs

	- three.sups

	- two.sinf

	- two.subs

	- two.sups

	- uni0305.case

	- uni1E39.ss01

	- uni2196.case

	- uni2197.case

	- uni2198.case

	- uni2199.case

	- zero.sinf

	- zero.subs

	- zero.sups
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni01EA	Contours detected: 3	Expected: 2

	- Glyph name: uni01EB	Contours detected: 3	Expected: 2

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Check math signs have the same width. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/math_signs_width">com.google.fonts/check/math_signs_width</a>)</summary><div>


* ⚠ **WARN** The most common width is 1017 among a set of 3 math glyphs.
The following math glyphs have a different width, though:

Width = 1011:
plus

Width = 1041:
greater, less

Width = 1061:
logicalnot

Width = 986:
multiply

Width = 1009:
divide, minus

Width = 1111:
approxequal

Width = 997:
lessequal

Width = 998:
greaterequal
 [code: width-outliers]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* asterisk (U+002A): X=689.5,Y=1476.0 (should be at cap-height 1474?)

	* nine (U+0039): X=434.0,Y=1.0 (should be at baseline 0?)

	* nine (U+0039): X=274.0,Y=1.0 (should be at baseline 0?)

	* K (U+004B): X=507.0,Y=1473.0 (should be at cap-height 1474?)

	* braceleft (U+007B): X=204.0,Y=2.0 (should be at baseline 0?)

	* cent (U+00A2): X=394.0,Y=-2.0 (should be at baseline 0?)

	* uni00B2 (U+00B2): X=820.5,Y=1476.0 (should be at cap-height 1474?)

	* threequarters (U+00BE): X=721.0,Y=1473.0 (should be at cap-height 1474?)

	* germandbls (U+00DF): X=957.0,Y=1475.0 (should be at cap-height 1474?)

	* aring (U+00E5): X=844.5,Y=1472.5 (should be at cap-height 1474?)

	* uni0136 (U+0136): X=507.0,Y=1473.0 (should be at cap-height 1474?)

	* uring (U+016F): X=805.5,Y=1472.5 (should be at cap-height 1474?)

	* florin (U+0192): X=1094.0,Y=1473.0 (should be at cap-height 1474?)

	* aringacute (U+01FB): X=845.0,Y=1472.5 (should be at cap-height 1474?)

	* uni02BC (U+02BC): X=336.5,Y=1472.5 (should be at cap-height 1474?)

	* ring (U+02DA): X=542.5,Y=1472.5 (should be at cap-height 1474?)

	* uni030A (U+030A): X=542.5,Y=1472.5 (should be at cap-height 1474?)

	* uni1E2E (U+1E2E): X=832.0,Y=2070.0 (should be at ascender 2068?)

	* uni1E7A (U+1E7A): X=1169.0,Y=2069.0 (should be at ascender 2068?)

	* uni1E7A (U+1E7A): X=748.0,Y=2069.0 (should be at ascender 2068?)

	* uni1EB2 (U+1EB2): X=798.0,Y=2066.0 (should be at ascender 2068?)

	* uni1EB3 (U+1EB3): X=840.5,Y=1475.5 (should be at cap-height 1474?)

	* quoteright (U+2019): X=336.5,Y=1472.5 (should be at cap-height 1474?)

	* quotedblright (U+201D): X=336.5,Y=1472.5 (should be at cap-height 1474?)

	* quotedblright (U+201D): X=682.5,Y=1472.5 (should be at cap-height 1474?)

	* uni2042 (U+2042): X=1160.5,Y=1476.0 (should be at cap-height 1474?)

	* uni2051 (U+2051): X=691.5,Y=1476.0 (should be at cap-height 1474?)

	* uni2078 (U+2078): X=506.0,Y=1474.5 (should be at cap-height 1474?)

	* uni2085 (U+2085): X=-12.0,Y=-1.0 (should be at baseline 0?)

	* uni20B2 (U+20B2): X=534.0,Y=1.0 (should be at baseline 0?)

	* uni2113 (U+2113): X=466.5,Y=1.0 (should be at baseline 0?)

	* threeeighths (U+215C): X=721.0,Y=1473.0 (should be at cap-height 1474?)

	* uni25CC (U+25CC): X=984.0,Y=1472.5 (should be at cap-height 1474?)

	* uni25CC (U+25CC): X=1073.0,Y=1472.5 (should be at cap-height 1474?) [code: found-misalignments]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ị̀ ị́ ị̂ ị̃ ị̄

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̏ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Igbo (Latn, 27,823,640 speakers), Navajo (Latn, 166,319 speakers), Ebira (Latn, 2,200,000 speakers), Dutch (Latn, 31,709,104 speakers), Ma’di (Latn, 584,000 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Dan (Latn, 1,099,244 speakers), Ejagham (Latn, 120,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Lugbara (Latn, 2,200,000 speakers), Kom (Latn, 360,685 speakers), Aghem (Latn, 38,843 speakers), Avokaya (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Koonzime (Latn, 40,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Nateni (Latn, 100,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[17] RedditSans-ExtraBold.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check license file has good copyright string. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_copyright">com.google.fonts/check/license/OFL_copyright</a>)</summary><div>


* 🔥 **FAIL** First line in license file is:

"reddit sans"

which does not match the expected format, similar to:

"Copyright 2022 The Familyname Project Authors (git url)" [code: bad-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Check OFL body text is correct. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_body_text">com.google.fonts/check/license/OFL_body_text</a>)</summary><div>


* 🔥 **FAIL** The OFL.txt body text is incorrect. Please use https://github.com/googlefonts/Unified-Font-Repository/blob/main/OFL.txt as a template. You should only modify the first line. [code: incorrect-ofl-body-text]
</div></details><details><summary>🔥 <b>FAIL:</b> Check copyright namerecords match license file. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/name/license">com.google.fonts/check/name/license</a>)</summary><div>


* 🔥 **FAIL** License file OFL.txt exists but NameID 13 (LICENSE DESCRIPTION) value on platform 3 (WINDOWS) is not specified for that. Value was: "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://openfontlicense.org/" Must be changed to "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://scripts.sil.org/OFL" [code: wrong]
</div></details><details><summary>🔥 <b>FAIL:</b> Copyright notices match canonical pattern in fonts (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_copyright">com.google.fonts/check/font_copyright</a>)</summary><div>


* 🔥 **FAIL** Name Table entry: Copyright notices should match a pattern similar to: "Copyright 2019 The Familyname Project Authors (git url)"
But instead we have got:
"Copyright (c) 2020-2023, Reddit, Inc. (https://github.com/reddit/redditsans)" [code: bad-notice-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Do we have the latest version of FontBakery installed? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/fontbakery_version">com.google.fonts/check/fontbakery_version</a>)</summary><div>


* 🔥 **FAIL** Current FontBakery version is 0.10.2, while a newer 0.11.1 is already available. Please upgrade it with 'pip install -U fontbakery' [code: outdated-fontbakery]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check Google Fonts glyph coverage. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyph_coverage">com.google.fonts/check/glyph_coverage</a>)</summary><div>


* ⚠ **WARN** GF_Latin_Plus is almost fulfilled. Missing codepoints:

	- 0x20B4 (HRYVNIA SIGN)


	- 0x20B8 (TENGE SIGN)


	- 0x20AE (TUGRIK SIGN)


	- 0x2016 (DOUBLE VERTICAL LINE)


	- 0x0E3F (THAI CURRENCY SYMBOL BAHT)


	- 0x20BF (BITCOIN SIGN)


	- 0x20BE (LARI SIGN)


	- 0x20A8 (RUPEE SIGN)


	- 0x20AA (NEW SHEQEL SIGN)


	- 0x25CF (BLACK CIRCLE)


	- 0x25CB (WHITE CIRCLE)


	- 0x25E6 (WHITE BULLET)


	- 0x25AA (BLACK SMALL SQUARE)


	- 0x25AB (WHITE SMALL SQUARE)


	- 0x25B4 (BLACK UP-POINTING SMALL TRIANGLE)


	- 0x25B8 (BLACK RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BE (BLACK DOWN-POINTING SMALL TRIANGLE)


	- 0x25C2 (BLACK LEFT-POINTING SMALL TRIANGLE)


	- 0x25B5 (WHITE UP-POINTING SMALL TRIANGLE)


	- 0x25B9 (WHITE RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BF (WHITE DOWN-POINTING SMALL TRIANGLE)


	- 0x25C3 (WHITE LEFT-POINTING SMALL TRIANGLE)
 [code: missing-codepoints]
* ⚠ **WARN** GF_TransLatin_Arabic is almost fulfilled. Missing codepoints:

	- 0x1E34 (LATIN CAPITAL LETTER K WITH LINE BELOW)


	- 0x1E35 (LATIN SMALL LETTER K WITH LINE BELOW)


	- 0x1E96 (LATIN SMALL LETTER H WITH LINE BELOW)


	- 0x02BD (MODIFIER LETTER REVERSED COMMA)
 [code: missing-codepoints]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02B9 MODIFIER LETTER PRIME: not included in any glyphset definition
 * U+02BA MODIFIER LETTER DOUBLE PRIME: not included in any glyphset definition
 * U+02BE MODIFIER LETTER RIGHT HALF RING: not included in any glyphset definition
 * U+02BF MODIFIER LETTER LEFT HALF RING: not included in any glyphset definition
 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02C8 MODIFIER LETTER VERTICAL LINE: not included in any glyphset definition
 * U+02C9 MODIFIER LETTER MACRON: not included in any glyphset definition
 * U+02CA MODIFIER LETTER ACUTE ACCENT: not included in any glyphset definition
 * U+02CB MODIFIER LETTER GRAVE ACCENT: not included in any glyphset definition
 * U+02CC MODIFIER LETTER LOW VERTICAL LINE: not included in any glyphset definition
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, coptic, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, malayalam, tai-le, syriac, tifinagh, canadian-aboriginal, old-permic, math
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
 * U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition
 * U+0311 COMBINING INVERTED BREVE: try adding coptic
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+031B COMBINING HORN: not included in any glyphset definition
 * U+0324 COMBINING DIAERESIS BELOW: try adding one of: cherokee, syriac
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+032E COMBINING BREVE BELOW: try adding syriac
 * U+0331 COMBINING MACRON BELOW: try adding one of: gothic, caucasian-albanian, syriac, tifinagh, cherokee
 * U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition
 * U+035C COMBINING DOUBLE BREVE BELOW: not included in any glyphset definition
 * U+0361 COMBINING DOUBLE INVERTED BREVE: try adding coptic
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, yi, math
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+2010 HYPHEN: try adding one of: coptic, yi, cham, kaithi, kharoshthi, kayah-li, sundanese, syloti-nagri, sora-sompeng, lisu
 * U+2011 NON-BREAKING HYPHEN: try adding one of: syloti-nagri, yi
 * U+2012 FIGURE DASH: not included in any glyphset definition
 * U+2015 HORIZONTAL BAR: try adding adlam
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+203D INTERROBANG: not included in any glyphset definition
 * U+2042 ASTERISM: not included in any glyphset definition
 * U+204E LOW ASTERISK: not included in any glyphset definition
 * U+2051 TWO ASTERISKS ALIGNED VERTICALLY: not included in any glyphset definition
 * U+2052 COMMERCIAL MINUS SIGN: not included in any glyphset definition
 * U+2070 SUPERSCRIPT ZERO: not included in any glyphset definition
 * U+2075 SUPERSCRIPT FIVE: not included in any glyphset definition
 * U+2076 SUPERSCRIPT SIX: not included in any glyphset definition
 * U+2077 SUPERSCRIPT SEVEN: not included in any glyphset definition
 * U+2078 SUPERSCRIPT EIGHT: not included in any glyphset definition
 * U+2079 SUPERSCRIPT NINE: not included in any glyphset definition
 * U+2080 SUBSCRIPT ZERO: not included in any glyphset definition
 * U+2081 SUBSCRIPT ONE: not included in any glyphset definition
 * U+2082 SUBSCRIPT TWO: not included in any glyphset definition
 * U+2083 SUBSCRIPT THREE: not included in any glyphset definition
 * U+2084 SUBSCRIPT FOUR: not included in any glyphset definition
 * U+2085 SUBSCRIPT FIVE: not included in any glyphset definition
 * U+2086 SUBSCRIPT SIX: not included in any glyphset definition
 * U+2087 SUBSCRIPT SEVEN: not included in any glyphset definition
 * U+2088 SUBSCRIPT EIGHT: not included in any glyphset definition
 * U+2089 SUBSCRIPT NINE: not included in any glyphset definition
 * U+2116 NUMERO SIGN: try adding cyrillic
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+215B VULGAR FRACTION ONE EIGHTH: not included in any glyphset definition
 * U+215C VULGAR FRACTION THREE EIGHTHS: not included in any glyphset definition
 * U+215D VULGAR FRACTION FIVE EIGHTHS: not included in any glyphset definition
 * U+215E VULGAR FRACTION SEVEN EIGHTHS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: symbols, math
 * U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math
 * U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math
 * U+2195 UP DOWN ARROW: try adding one of: symbols, math
 * U+2196 NORTH WEST ARROW: try adding one of: symbols, math
 * U+2197 NORTH EAST ARROW: try adding one of: symbols, math
 * U+2198 SOUTH EAST ARROW: try adding one of: symbols, math
 * U+2199 SOUTH WEST ARROW: try adding one of: symbols, math
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+2219 BULLET OPERATOR: try adding one of: tai-tham, symbols, yi, math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+2310 REVERSED NOT SIGN: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: symbols, math
 * U+25CC DOTTED CIRCLE: try adding one of: mandaic, tibetan, balinese, ahom, limbu, hanunoo, kannada, bassa-vah, wancho, tirhuta, pahawh-hmong, hanifi-rohingya, kaithi, chakma, caucasian-albanian, mongolian, siddham, tamil, cham, tagalog, coptic, manichaean, lao, syloti-nagri, marchen, tai-viet, modi, psalter-pahlavi, osage, sharada, lepcha, sinhala, bengali, rejang, gunjala-gondi, miao, symbols, tai-le, oriya, brahmi, sundanese, gurmukhi, zanabazar-square, syriac, tagbanwa, myanmar, new-tai-lue, mahajani, math, grantha, dogra, batak, adlam, hebrew, buhid, masaram-gondi, thaana, javanese, kharoshthi, soyombo, gujarati, music, kayah-li, khojki, thai, bhaiksuki, khudawadi, khmer, newa, sogdian, meetei-mayek, mende-kikakui, malayalam, tifinagh, yi, elbasan, duployan, nko, takri, telugu, buginese, devanagari, phags-pa, old-permic
 * U+2605 BLACK STAR: try adding symbols
 * U+2606 WHITE STAR: try adding symbols
 * U+2661 WHITE HEART SUIT: try adding symbols
 * U+2665 BLACK HEART SUIT: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math
 * U+EA00 : not included in any glyphset definition
 * U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition
 * U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition
 * U+1F845 UPWARDS HEAVY ARROW: try adding symbols
 * U+1F847 DOWNWARDS HEAVY ARROW: try adding symbols

Or you can add the above codepoints to one of the subsets supported by the font: `latin`, `latin-ext`, `vietnamese` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + f

	- f + i

	- i + f

	- f + l

	- l + f

	- i + l

	- r + slash [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Combined length of family and style must not exceed 27 characters. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/name/family_and_style_max_length">com.google.fonts/check/name/family_and_style_max_length</a>)</summary><div>


* ⚠ **WARN** The combined length of family and style exceeds 27 chars in the following 'WINDOWS' entries:
 FONT_FAMILY_NAME = 'Reddit Sans ExtraBold' / SUBFAMILY_NAME = 'Regular'

Please take a look at the conversation at https://github.com/fonttools/fontbakery/issues/2179 in order to understand the reasoning behind these name table records max-length criteria. [code: too-long]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- NULL

	- eight.sinf

	- eight.subs

	- eight.sups

	- five.sinf

	- five.subs

	- five.sups

	- four.sinf

	- four.subs

	- four.sups

	- nine.sinf

	- nine.subs

	- nine.sups

	- one.sinf

	- one.subs

	- one.sups

	- seven.sinf

	- seven.subs

	- seven.sups

	- six.sinf

	- six.subs

	- six.sups

	- three.sinf

	- three.subs

	- three.sups

	- two.sinf

	- two.subs

	- two.sups

	- uni0250.ss02

	- uni0305.case

	- uni1E39.ss01

	- zero.sinf

	- zero.subs

	- zero.sups
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni01EA	Contours detected: 3	Expected: 2

	- Glyph name: uni01EB	Contours detected: 3	Expected: 2

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

	- Glyph name: arrowboth	Contours detected: 2	Expected: 1

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: arrowboth	Contours detected: 2	Expected: 1

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Check math signs have the same width. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/math_signs_width">com.google.fonts/check/math_signs_width</a>)</summary><div>


* ⚠ **WARN** The most common width is 1126 among a set of 6 math glyphs.
The following math glyphs have a different width, though:

Width = 1097:
greater, less

Width = 1120:
logicalnot

Width = 1069:
multiply

Width = 1187:
approxequal

Width = 1072:
greaterequal, lessequal
 [code: width-outliers]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* asterisk (U+002A): X=229.0,Y=1475.0 (should be at cap-height 1474?)

	* asterisk (U+002A): X=646.0,Y=1475.0 (should be at cap-height 1474?)

	* g (U+0067): X=844.0,Y=1077.0 (should be at x-height 1076?)

	* g (U+0067): X=1131.0,Y=1077.0 (should be at x-height 1076?)

	* k (U+006B): X=784.0,Y=1077.0 (should be at x-height 1076?)

	* k (U+006B): X=1157.0,Y=1077.0 (should be at x-height 1076?)

	* cent (U+00A2): X=483.0,Y=1.0 (should be at baseline 0?)

	* acute (U+00B4): X=546.0,Y=1476.0 (should be at cap-height 1474?)

	* aacute (U+00E1): X=901.0,Y=1476.0 (should be at cap-height 1474?)

	* eacute (U+00E9): X=918.0,Y=1476.0 (should be at cap-height 1474?)

	* iacute (U+00ED): X=601.0,Y=1476.0 (should be at cap-height 1474?)

	* oacute (U+00F3): X=948.0,Y=1476.0 (should be at cap-height 1474?)

	* uacute (U+00FA): X=941.0,Y=1476.0 (should be at cap-height 1474?)

	* yacute (U+00FD): X=939.0,Y=1476.0 (should be at cap-height 1474?)

	* cacute (U+0107): X=960.0,Y=1476.0 (should be at cap-height 1474?)

	* nacute (U+0144): X=963.0,Y=1476.0 (should be at cap-height 1474?)

	* racute (U+0155): X=764.0,Y=1476.0 (should be at cap-height 1474?)

	* sacute (U+015B): X=793.0,Y=1476.0 (should be at cap-height 1474?)

	* zacute (U+017A): X=860.0,Y=1476.0 (should be at cap-height 1474?)

	* uni01F5 (U+01F5): X=927.0,Y=1476.0 (should be at cap-height 1474?)

	* aeacute (U+01FD): X=1200.0,Y=1476.0 (should be at cap-height 1474?)

	* oslashacute (U+01FF): X=948.0,Y=1476.0 (should be at cap-height 1474?)

	* uni02CA (U+02CA): X=546.0,Y=1476.0 (should be at cap-height 1474?)

	* acutecomb (U+0301): X=546.0,Y=1476.0 (should be at cap-height 1474?)

	* uni1E09 (U+1E09): X=960.0,Y=1476.0 (should be at cap-height 1474?)

	* uni1E4C (U+1E4C): X=674.0,Y=2069.0 (should be at ascender 2068?)

	* uni1E65 (U+1E65): X=964.0,Y=1476.0 (should be at cap-height 1474?)

	* uni1E78 (U+1E78): X=587.0,Y=2069.0 (should be at ascender 2068?)

	* wacute (U+1E83): X=1158.0,Y=1476.0 (should be at cap-height 1474?)

	* uni1E9E (U+1E9E): X=913.0,Y=1476.0 (should be at cap-height 1474?)

	* uni1EDB (U+1EDB): X=948.0,Y=1476.0 (should be at cap-height 1474?)

	* uni1EE9 (U+1EE9): X=941.0,Y=1476.0 (should be at cap-height 1474?)

	* uni2042 (U+2042): X=715.0,Y=1475.0 (should be at cap-height 1474?)

	* uni2042 (U+2042): X=1132.0,Y=1475.0 (should be at cap-height 1474?)

	* uni2051 (U+2051): X=229.0,Y=1475.0 (should be at cap-height 1474?)

	* uni2051 (U+2051): X=646.0,Y=1475.0 (should be at cap-height 1474?)

	* colonmonetary (U+20A1): X=625.0,Y=1473.0 (should be at cap-height 1474?)

	* uni2113 (U+2113): X=736.0,Y=-2.0 (should be at baseline 0?)

	* uni2154 (U+2154): X=245.5,Y=1475.5 (should be at cap-height 1474?)

	* uni2198 (U+2198): X=1184.0,Y=-2.0 (should be at baseline 0?)

	* uni2198 (U+2198): X=334.0,Y=-2.0 (should be at baseline 0?)

	* uni2199 (U+2199): X=962.0,Y=-2.0 (should be at baseline 0?)

	* uni2199 (U+2199): X=112.0,Y=-2.0 (should be at baseline 0?)

	* summation (U+2211): X=55.0,Y=1475.0 (should be at cap-height 1474?)

	* u1F845 (U+1F845): X=829.0,Y=1472.0 (should be at cap-height 1474?)

	* u1F845 (U+1F845): X=929.0,Y=1472.0 (should be at cap-height 1474?)

	* u1F847 (U+1F847): X=829.0,Y=2.0 (should be at baseline 0?)

	* u1F847 (U+1F847): X=929.0,Y=2.0 (should be at baseline 0?)

	* u1F847 (U+1F847): X=829.0,Y=2.0 (should be at baseline 0?) [code: found-misalignments]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any semi-vertical or semi-horizontal lines? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_semi_vertical">com.google.fonts/check/outline_semi_vertical</a>)</summary><div>


* ⚠ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

	* three (U+0033): L<<59.0,420.0>--<380.0,421.0>> [code: found-semi-vertical]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ị̀ ị́ ị̂ ị̃ ị̄

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̏ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Igbo (Latn, 27,823,640 speakers), Navajo (Latn, 166,319 speakers), Ebira (Latn, 2,200,000 speakers), Dutch (Latn, 31,709,104 speakers), Ma’di (Latn, 584,000 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Dan (Latn, 1,099,244 speakers), Ejagham (Latn, 120,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Lugbara (Latn, 2,200,000 speakers), Kom (Latn, 360,685 speakers), Aghem (Latn, 38,843 speakers), Avokaya (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Koonzime (Latn, 40,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Nateni (Latn, 100,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[16] RedditSans-Light.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check license file has good copyright string. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_copyright">com.google.fonts/check/license/OFL_copyright</a>)</summary><div>


* 🔥 **FAIL** First line in license file is:

"reddit sans"

which does not match the expected format, similar to:

"Copyright 2022 The Familyname Project Authors (git url)" [code: bad-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Check OFL body text is correct. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_body_text">com.google.fonts/check/license/OFL_body_text</a>)</summary><div>


* 🔥 **FAIL** The OFL.txt body text is incorrect. Please use https://github.com/googlefonts/Unified-Font-Repository/blob/main/OFL.txt as a template. You should only modify the first line. [code: incorrect-ofl-body-text]
</div></details><details><summary>🔥 <b>FAIL:</b> Check copyright namerecords match license file. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/name/license">com.google.fonts/check/name/license</a>)</summary><div>


* 🔥 **FAIL** License file OFL.txt exists but NameID 13 (LICENSE DESCRIPTION) value on platform 3 (WINDOWS) is not specified for that. Value was: "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://openfontlicense.org/" Must be changed to "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://scripts.sil.org/OFL" [code: wrong]
</div></details><details><summary>🔥 <b>FAIL:</b> Copyright notices match canonical pattern in fonts (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_copyright">com.google.fonts/check/font_copyright</a>)</summary><div>


* 🔥 **FAIL** Name Table entry: Copyright notices should match a pattern similar to: "Copyright 2019 The Familyname Project Authors (git url)"
But instead we have got:
"Copyright (c) 2020-2023, Reddit, Inc. (https://github.com/reddit/redditsans)" [code: bad-notice-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Do we have the latest version of FontBakery installed? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/fontbakery_version">com.google.fonts/check/fontbakery_version</a>)</summary><div>


* 🔥 **FAIL** Current FontBakery version is 0.10.2, while a newer 0.11.1 is already available. Please upgrade it with 'pip install -U fontbakery' [code: outdated-fontbakery]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check Google Fonts glyph coverage. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyph_coverage">com.google.fonts/check/glyph_coverage</a>)</summary><div>


* ⚠ **WARN** GF_Latin_Plus is almost fulfilled. Missing codepoints:

	- 0x20B4 (HRYVNIA SIGN)


	- 0x20B8 (TENGE SIGN)


	- 0x20AE (TUGRIK SIGN)


	- 0x2016 (DOUBLE VERTICAL LINE)


	- 0x0E3F (THAI CURRENCY SYMBOL BAHT)


	- 0x20BF (BITCOIN SIGN)


	- 0x20BE (LARI SIGN)


	- 0x20A8 (RUPEE SIGN)


	- 0x20AA (NEW SHEQEL SIGN)


	- 0x25CF (BLACK CIRCLE)


	- 0x25CB (WHITE CIRCLE)


	- 0x25E6 (WHITE BULLET)


	- 0x25AA (BLACK SMALL SQUARE)


	- 0x25AB (WHITE SMALL SQUARE)


	- 0x25B4 (BLACK UP-POINTING SMALL TRIANGLE)


	- 0x25B8 (BLACK RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BE (BLACK DOWN-POINTING SMALL TRIANGLE)


	- 0x25C2 (BLACK LEFT-POINTING SMALL TRIANGLE)


	- 0x25B5 (WHITE UP-POINTING SMALL TRIANGLE)


	- 0x25B9 (WHITE RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BF (WHITE DOWN-POINTING SMALL TRIANGLE)


	- 0x25C3 (WHITE LEFT-POINTING SMALL TRIANGLE)
 [code: missing-codepoints]
* ⚠ **WARN** GF_TransLatin_Arabic is almost fulfilled. Missing codepoints:

	- 0x1E34 (LATIN CAPITAL LETTER K WITH LINE BELOW)


	- 0x1E35 (LATIN SMALL LETTER K WITH LINE BELOW)


	- 0x1E96 (LATIN SMALL LETTER H WITH LINE BELOW)


	- 0x02BD (MODIFIER LETTER REVERSED COMMA)
 [code: missing-codepoints]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02B9 MODIFIER LETTER PRIME: not included in any glyphset definition
 * U+02BA MODIFIER LETTER DOUBLE PRIME: not included in any glyphset definition
 * U+02BE MODIFIER LETTER RIGHT HALF RING: not included in any glyphset definition
 * U+02BF MODIFIER LETTER LEFT HALF RING: not included in any glyphset definition
 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02C8 MODIFIER LETTER VERTICAL LINE: not included in any glyphset definition
 * U+02C9 MODIFIER LETTER MACRON: not included in any glyphset definition
 * U+02CA MODIFIER LETTER ACUTE ACCENT: not included in any glyphset definition
 * U+02CB MODIFIER LETTER GRAVE ACCENT: not included in any glyphset definition
 * U+02CC MODIFIER LETTER LOW VERTICAL LINE: not included in any glyphset definition
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, coptic, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, malayalam, tai-le, syriac, tifinagh, canadian-aboriginal, old-permic, math
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
 * U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition
 * U+0311 COMBINING INVERTED BREVE: try adding coptic
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+031B COMBINING HORN: not included in any glyphset definition
 * U+0324 COMBINING DIAERESIS BELOW: try adding one of: cherokee, syriac
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+032E COMBINING BREVE BELOW: try adding syriac
 * U+0331 COMBINING MACRON BELOW: try adding one of: gothic, caucasian-albanian, syriac, tifinagh, cherokee
 * U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition
 * U+035C COMBINING DOUBLE BREVE BELOW: not included in any glyphset definition
 * U+0361 COMBINING DOUBLE INVERTED BREVE: try adding coptic
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, yi, math
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+2010 HYPHEN: try adding one of: coptic, yi, cham, kaithi, kharoshthi, kayah-li, sundanese, syloti-nagri, sora-sompeng, lisu
 * U+2011 NON-BREAKING HYPHEN: try adding one of: syloti-nagri, yi
 * U+2012 FIGURE DASH: not included in any glyphset definition
 * U+2015 HORIZONTAL BAR: try adding adlam
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+203D INTERROBANG: not included in any glyphset definition
 * U+2042 ASTERISM: not included in any glyphset definition
 * U+204E LOW ASTERISK: not included in any glyphset definition
 * U+2051 TWO ASTERISKS ALIGNED VERTICALLY: not included in any glyphset definition
 * U+2052 COMMERCIAL MINUS SIGN: not included in any glyphset definition
 * U+2070 SUPERSCRIPT ZERO: not included in any glyphset definition
 * U+2075 SUPERSCRIPT FIVE: not included in any glyphset definition
 * U+2076 SUPERSCRIPT SIX: not included in any glyphset definition
 * U+2077 SUPERSCRIPT SEVEN: not included in any glyphset definition
 * U+2078 SUPERSCRIPT EIGHT: not included in any glyphset definition
 * U+2079 SUPERSCRIPT NINE: not included in any glyphset definition
 * U+2080 SUBSCRIPT ZERO: not included in any glyphset definition
 * U+2081 SUBSCRIPT ONE: not included in any glyphset definition
 * U+2082 SUBSCRIPT TWO: not included in any glyphset definition
 * U+2083 SUBSCRIPT THREE: not included in any glyphset definition
 * U+2084 SUBSCRIPT FOUR: not included in any glyphset definition
 * U+2085 SUBSCRIPT FIVE: not included in any glyphset definition
 * U+2086 SUBSCRIPT SIX: not included in any glyphset definition
 * U+2087 SUBSCRIPT SEVEN: not included in any glyphset definition
 * U+2088 SUBSCRIPT EIGHT: not included in any glyphset definition
 * U+2089 SUBSCRIPT NINE: not included in any glyphset definition
 * U+2116 NUMERO SIGN: try adding cyrillic
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+215B VULGAR FRACTION ONE EIGHTH: not included in any glyphset definition
 * U+215C VULGAR FRACTION THREE EIGHTHS: not included in any glyphset definition
 * U+215D VULGAR FRACTION FIVE EIGHTHS: not included in any glyphset definition
 * U+215E VULGAR FRACTION SEVEN EIGHTHS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: symbols, math
 * U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math
 * U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math
 * U+2195 UP DOWN ARROW: try adding one of: symbols, math
 * U+2196 NORTH WEST ARROW: try adding one of: symbols, math
 * U+2197 NORTH EAST ARROW: try adding one of: symbols, math
 * U+2198 SOUTH EAST ARROW: try adding one of: symbols, math
 * U+2199 SOUTH WEST ARROW: try adding one of: symbols, math
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+2219 BULLET OPERATOR: try adding one of: tai-tham, symbols, yi, math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+2310 REVERSED NOT SIGN: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: symbols, math
 * U+25CC DOTTED CIRCLE: try adding one of: mandaic, tibetan, balinese, ahom, limbu, hanunoo, kannada, bassa-vah, wancho, tirhuta, pahawh-hmong, hanifi-rohingya, kaithi, chakma, caucasian-albanian, mongolian, siddham, tamil, cham, tagalog, coptic, manichaean, lao, syloti-nagri, marchen, tai-viet, modi, psalter-pahlavi, osage, sharada, lepcha, sinhala, bengali, rejang, gunjala-gondi, miao, symbols, tai-le, oriya, brahmi, sundanese, gurmukhi, zanabazar-square, syriac, tagbanwa, myanmar, new-tai-lue, mahajani, math, grantha, dogra, batak, adlam, hebrew, buhid, masaram-gondi, thaana, javanese, kharoshthi, soyombo, gujarati, music, kayah-li, khojki, thai, bhaiksuki, khudawadi, khmer, newa, sogdian, meetei-mayek, mende-kikakui, malayalam, tifinagh, yi, elbasan, duployan, nko, takri, telugu, buginese, devanagari, phags-pa, old-permic
 * U+2605 BLACK STAR: try adding symbols
 * U+2606 WHITE STAR: try adding symbols
 * U+2661 WHITE HEART SUIT: try adding symbols
 * U+2665 BLACK HEART SUIT: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math
 * U+EA00 : not included in any glyphset definition
 * U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition
 * U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition
 * U+1F845 UPWARDS HEAVY ARROW: try adding symbols
 * U+1F847 DOWNWARDS HEAVY ARROW: try adding symbols

Or you can add the above codepoints to one of the subsets supported by the font: `latin`, `latin-ext`, `vietnamese` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + f

	- f + i

	- i + f

	- f + l

	- l + f

	- i + l

	- r + slash [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- NULL

	- eight.sinf

	- eight.subs

	- eight.sups

	- five.sinf

	- five.subs

	- five.sups

	- four.sinf

	- four.subs

	- four.sups

	- nine.sinf

	- nine.subs

	- nine.sups

	- one.sinf

	- one.subs

	- one.sups

	- seven.sinf

	- seven.subs

	- seven.sups

	- six.sinf

	- six.subs

	- six.sups

	- three.sinf

	- three.subs

	- three.sups

	- two.sinf

	- two.subs

	- two.sups

	- uni0250.ss02

	- uni0305.case

	- uni1E39.ss01

	- zero.sinf

	- zero.subs

	- zero.sups
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni01EA	Contours detected: 3	Expected: 2

	- Glyph name: uni01EB	Contours detected: 3	Expected: 2

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: arrowboth	Contours detected: 2	Expected: 1

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: arrowboth	Contours detected: 2	Expected: 1

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Check math signs have the same width. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/math_signs_width">com.google.fonts/check/math_signs_width</a>)</summary><div>


* ⚠ **WARN** The most common width is 996 among a set of 6 math glyphs.
The following math glyphs have a different width, though:

Width = 1049:
greater, less

Width = 993:
logicalnot

Width = 975:
multiply

Width = 1089:
approxequal

Width = 988:
greaterequal, lessequal
 [code: width-outliers]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* asterisk (U+002A): X=185.0,Y=1476.0 (should be at cap-height 1474?)

	* asterisk (U+002A): X=700.0,Y=1476.0 (should be at cap-height 1474?)

	* l (U+006C): X=416.0,Y=-1.0 (should be at baseline 0?)

	* ordfeminine (U+00AA): X=565.0,Y=1476.0 (should be at cap-height 1474?)

	* ordfeminine (U+00AA): X=667.0,Y=1476.0 (should be at cap-height 1474?)

	* paragraph (U+00B6): X=491.0,Y=1475.0 (should be at cap-height 1474?)

	* paragraph (U+00B6): X=1069.0,Y=1475.0 (should be at cap-height 1474?)

	* germandbls (U+00DF): X=438.0,Y=1.0 (should be at baseline 0?)

	* aring (U+00E5): X=618.0,Y=1475.5 (should be at cap-height 1474?)

	* aring (U+00E5): X=453.0,Y=1475.5 (should be at cap-height 1474?)

	* ccaron (U+010D): X=897.0,Y=1472.0 (should be at cap-height 1474?)

	* ccaron (U+010D): X=291.0,Y=1472.0 (should be at cap-height 1474?)

	* ecaron (U+011B): X=879.0,Y=1472.0 (should be at cap-height 1474?)

	* ecaron (U+011B): X=274.0,Y=1472.0 (should be at cap-height 1474?)

	* lacute (U+013A): X=416.0,Y=-1.0 (should be at baseline 0?)

	* uni013C (U+013C): X=416.0,Y=-1.0 (should be at baseline 0?)

	* lcaron (U+013E): X=416.0,Y=-1.0 (should be at baseline 0?)

	* ldot (U+0140): X=416.0,Y=-1.0 (should be at baseline 0?)

	* lslash (U+0142): X=535.0,Y=-1.0 (should be at baseline 0?)

	* ncaron (U+0148): X=903.0,Y=1472.0 (should be at cap-height 1474?)

	* ncaron (U+0148): X=297.0,Y=1472.0 (should be at cap-height 1474?)

	* rcaron (U+0159): X=697.0,Y=1472.0 (should be at cap-height 1474?)

	* rcaron (U+0159): X=91.0,Y=1472.0 (should be at cap-height 1474?)

	* scaron (U+0161): X=738.0,Y=1472.0 (should be at cap-height 1474?)

	* scaron (U+0161): X=133.0,Y=1472.0 (should be at cap-height 1474?)

	* uring (U+016F): X=655.0,Y=1475.5 (should be at cap-height 1474?)

	* uring (U+016F): X=490.0,Y=1475.5 (should be at cap-height 1474?)

	* zcaron (U+017E): X=815.0,Y=1472.0 (should be at cap-height 1474?)

	* zcaron (U+017E): X=209.0,Y=1472.0 (should be at cap-height 1474?)

	* uni01C5 (U+01C5): X=2183.0,Y=1472.0 (should be at cap-height 1474?)

	* uni01C5 (U+01C5): X=1577.0,Y=1472.0 (should be at cap-height 1474?)

	* uni01C6 (U+01C6): X=2045.0,Y=1472.0 (should be at cap-height 1474?)

	* uni01C6 (U+01C6): X=1439.0,Y=1472.0 (should be at cap-height 1474?)

	* uni01C9 (U+01C9): X=416.0,Y=-1.0 (should be at baseline 0?)

	* uni01CE (U+01CE): X=837.0,Y=1472.0 (should be at cap-height 1474?)

	* uni01CE (U+01CE): X=231.0,Y=1472.0 (should be at cap-height 1474?)

	* uni01D0 (U+01D0): X=591.0,Y=1472.0 (should be at cap-height 1474?)

	* uni01D0 (U+01D0): X=-14.0,Y=1472.0 (should be at cap-height 1474?)

	* gcaron (U+01E7): X=893.0,Y=1472.0 (should be at cap-height 1474?)

	* gcaron (U+01E7): X=288.0,Y=1472.0 (should be at cap-height 1474?)

	* aringacute (U+01FB): X=617.0,Y=1475.5 (should be at cap-height 1474?)

	* aringacute (U+01FB): X=452.5,Y=1475.5 (should be at cap-height 1474?)

	* uni02BC (U+02BC): X=158.5,Y=1473.0 (should be at cap-height 1474?)

	* caron (U+02C7): X=680.0,Y=1472.0 (should be at cap-height 1474?)

	* caron (U+02C7): X=74.0,Y=1472.0 (should be at cap-height 1474?)

	* ring (U+02DA): X=382.0,Y=1475.5 (should be at cap-height 1474?)

	* ring (U+02DA): X=217.0,Y=1475.5 (should be at cap-height 1474?)

	* uni030A (U+030A): X=382.0,Y=1475.5 (should be at cap-height 1474?)

	* uni030A (U+030A): X=217.0,Y=1475.5 (should be at cap-height 1474?)

	* uni030C (U+030C): X=680.0,Y=1472.0 (should be at cap-height 1474?)

	* uni030C (U+030C): X=74.0,Y=1472.0 (should be at cap-height 1474?)

	* uni1E37 (U+1E37): X=416.0,Y=-1.0 (should be at baseline 0?)

	* uni1E3B (U+1E3B): X=416.0,Y=-1.0 (should be at baseline 0?)

	* uni1E67 (U+1E67): X=738.0,Y=1472.0 (should be at cap-height 1474?)

	* uni1E67 (U+1E67): X=133.0,Y=1472.0 (should be at cap-height 1474?)

	* uni1E9E (U+1E9E): X=828.0,Y=1473.0 (should be at cap-height 1474?)

	* quoteright (U+2019): X=158.5,Y=1473.0 (should be at cap-height 1474?)

	* quotedblright (U+201D): X=158.5,Y=1473.0 (should be at cap-height 1474?)

	* quotedblright (U+201D): X=506.5,Y=1473.0 (should be at cap-height 1474?)

	* uni2042 (U+2042): X=700.0,Y=1476.0 (should be at cap-height 1474?)

	* uni2042 (U+2042): X=1215.0,Y=1476.0 (should be at cap-height 1474?)

	* uni2051 (U+2051): X=185.0,Y=1476.0 (should be at cap-height 1474?)

	* uni2051 (U+2051): X=700.0,Y=1476.0 (should be at cap-height 1474?)

	* uni2080 (U+2080): X=696.0,Y=1.5 (should be at baseline 0?)

	* peseta (U+20A7): X=283.0,Y=1475.0 (should be at cap-height 1474?)

	* peseta (U+20A7): X=575.0,Y=1475.0 (should be at cap-height 1474?)

	* uni2113 (U+2113): X=598.0,Y=0.5 (should be at baseline 0?)

	* integral (U+222B): X=907.0,Y=1476.0 (should be at cap-height 1474?)

	* uni25CC (U+25CC): X=808.5,Y=1472.0 (should be at cap-height 1474?)

	* uni25CC (U+25CC): X=897.0,Y=1472.0 (should be at cap-height 1474?)

	* uni25CC (U+25CC): X=808.5,Y=2.0 (should be at baseline 0?)

	* uni25CC (U+25CC): X=897.0,Y=2.0 (should be at baseline 0?)

	* u1F845 (U+1F845): X=829.0,Y=1472.0 (should be at cap-height 1474?)

	* u1F845 (U+1F845): X=929.0,Y=1472.0 (should be at cap-height 1474?)

	* u1F847 (U+1F847): X=829.0,Y=2.0 (should be at baseline 0?)

	* u1F847 (U+1F847): X=929.0,Y=2.0 (should be at baseline 0?)

	* u1F847 (U+1F847): X=829.0,Y=2.0 (should be at baseline 0?) [code: found-misalignments]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any semi-vertical or semi-horizontal lines? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_semi_vertical">com.google.fonts/check/outline_semi_vertical</a>)</summary><div>


* ⚠ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

	* Eng (U+014A): L<<1148.0,241.0>--<1145.0,622.0>>

	* Eng (U+014A): L<<314.0,1231.0>--<316.0,863.0>>

	* M (U+004D): L<<314.0,1203.0>--<316.0,917.0>>

	* N (U+004E): L<<1148.0,241.0>--<1145.0,622.0>>

	* N (U+004E): L<<314.0,1231.0>--<316.0,863.0>>

	* Nacute (U+0143): L<<1148.0,241.0>--<1145.0,622.0>>

	* Nacute (U+0143): L<<314.0,1231.0>--<316.0,863.0>>

	* Ncaron (U+0147): L<<1148.0,241.0>--<1145.0,622.0>>

	* Ncaron (U+0147): L<<314.0,1231.0>--<316.0,863.0>>

	* Ntilde (U+00D1): L<<1148.0,241.0>--<1145.0,622.0>>

	* Ntilde (U+00D1): L<<314.0,1231.0>--<316.0,863.0>>

	* two (U+0032): L<<344.0,117.0>--<574.0,119.0>>

	* uni0145 (U+0145): L<<1148.0,241.0>--<1145.0,622.0>>

	* uni0145 (U+0145): L<<314.0,1231.0>--<316.0,863.0>>

	* uni01CA (U+01CA): L<<1148.0,241.0>--<1145.0,622.0>>

	* uni01CA (U+01CA): L<<314.0,1231.0>--<316.0,863.0>>

	* uni01CB (U+01CB): L<<1148.0,241.0>--<1145.0,622.0>>

	* uni01CB (U+01CB): L<<314.0,1231.0>--<316.0,863.0>>

	* uni1E42 (U+1E42): L<<314.0,1203.0>--<316.0,917.0>>

	* uni1E44 (U+1E44): L<<1148.0,241.0>--<1145.0,622.0>>

	* uni1E44 (U+1E44): L<<314.0,1231.0>--<316.0,863.0>>

	* uni1E46 (U+1E46): L<<1148.0,241.0>--<1145.0,622.0>>

	* uni1E46 (U+1E46): L<<314.0,1231.0>--<316.0,863.0>>

	* uni1E48 (U+1E48): L<<1148.0,241.0>--<1145.0,622.0>>

	* uni1E48 (U+1E48): L<<314.0,1231.0>--<316.0,863.0>>

	* uni2116 (U+2116): L<<314.0,1200.0>--<316.0,844.0>>

	* uni2116 (U+2116): L<<990.0,263.0>--<988.0,637.0>>

	* uni2196 (U+2196): L<<243.0,873.0>--<245.0,251.0>>

	* uni2196 (U+2196): L<<941.0,948.0>--<321.0,951.0>>

	* uni2197 (U+2197): L<<1050.0,251.0>--<1052.0,873.0>>

	* uni2197 (U+2197): L<<974.0,951.0>--<355.0,948.0>>

	* uni2198 (U+2198): L<<1073.0,182.0>--<1071.0,804.0>>

	* uni2198 (U+2198): L<<375.0,107.0>--<995.0,104.0>>

	* uni2199 (U+2199): L<<225.0,804.0>--<222.0,182.0>>

	* uni2199 (U+2199): L<<300.0,104.0>--<920.0,107.0>> [code: found-semi-vertical]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ị̀ ị́ ị̂ ị̃ ị̄

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̏ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Igbo (Latn, 27,823,640 speakers), Navajo (Latn, 166,319 speakers), Ebira (Latn, 2,200,000 speakers), Dutch (Latn, 31,709,104 speakers), Ma’di (Latn, 584,000 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Dan (Latn, 1,099,244 speakers), Ejagham (Latn, 120,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Lugbara (Latn, 2,200,000 speakers), Kom (Latn, 360,685 speakers), Aghem (Latn, 38,843 speakers), Avokaya (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Koonzime (Latn, 40,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Nateni (Latn, 100,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[16] RedditSans-Medium.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check license file has good copyright string. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_copyright">com.google.fonts/check/license/OFL_copyright</a>)</summary><div>


* 🔥 **FAIL** First line in license file is:

"reddit sans"

which does not match the expected format, similar to:

"Copyright 2022 The Familyname Project Authors (git url)" [code: bad-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Check OFL body text is correct. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_body_text">com.google.fonts/check/license/OFL_body_text</a>)</summary><div>


* 🔥 **FAIL** The OFL.txt body text is incorrect. Please use https://github.com/googlefonts/Unified-Font-Repository/blob/main/OFL.txt as a template. You should only modify the first line. [code: incorrect-ofl-body-text]
</div></details><details><summary>🔥 <b>FAIL:</b> Check copyright namerecords match license file. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/name/license">com.google.fonts/check/name/license</a>)</summary><div>


* 🔥 **FAIL** License file OFL.txt exists but NameID 13 (LICENSE DESCRIPTION) value on platform 3 (WINDOWS) is not specified for that. Value was: "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://openfontlicense.org/" Must be changed to "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://scripts.sil.org/OFL" [code: wrong]
</div></details><details><summary>🔥 <b>FAIL:</b> Copyright notices match canonical pattern in fonts (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_copyright">com.google.fonts/check/font_copyright</a>)</summary><div>


* 🔥 **FAIL** Name Table entry: Copyright notices should match a pattern similar to: "Copyright 2019 The Familyname Project Authors (git url)"
But instead we have got:
"Copyright (c) 2020-2023, Reddit, Inc. (https://github.com/reddit/redditsans)" [code: bad-notice-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Do we have the latest version of FontBakery installed? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/fontbakery_version">com.google.fonts/check/fontbakery_version</a>)</summary><div>


* 🔥 **FAIL** Current FontBakery version is 0.10.2, while a newer 0.11.1 is already available. Please upgrade it with 'pip install -U fontbakery' [code: outdated-fontbakery]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check Google Fonts glyph coverage. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyph_coverage">com.google.fonts/check/glyph_coverage</a>)</summary><div>


* ⚠ **WARN** GF_Latin_Plus is almost fulfilled. Missing codepoints:

	- 0x20B4 (HRYVNIA SIGN)


	- 0x20B8 (TENGE SIGN)


	- 0x20AE (TUGRIK SIGN)


	- 0x2016 (DOUBLE VERTICAL LINE)


	- 0x0E3F (THAI CURRENCY SYMBOL BAHT)


	- 0x20BF (BITCOIN SIGN)


	- 0x20BE (LARI SIGN)


	- 0x20A8 (RUPEE SIGN)


	- 0x20AA (NEW SHEQEL SIGN)


	- 0x25CF (BLACK CIRCLE)


	- 0x25CB (WHITE CIRCLE)


	- 0x25E6 (WHITE BULLET)


	- 0x25AA (BLACK SMALL SQUARE)


	- 0x25AB (WHITE SMALL SQUARE)


	- 0x25B4 (BLACK UP-POINTING SMALL TRIANGLE)


	- 0x25B8 (BLACK RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BE (BLACK DOWN-POINTING SMALL TRIANGLE)


	- 0x25C2 (BLACK LEFT-POINTING SMALL TRIANGLE)


	- 0x25B5 (WHITE UP-POINTING SMALL TRIANGLE)


	- 0x25B9 (WHITE RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BF (WHITE DOWN-POINTING SMALL TRIANGLE)


	- 0x25C3 (WHITE LEFT-POINTING SMALL TRIANGLE)
 [code: missing-codepoints]
* ⚠ **WARN** GF_TransLatin_Arabic is almost fulfilled. Missing codepoints:

	- 0x1E34 (LATIN CAPITAL LETTER K WITH LINE BELOW)


	- 0x1E35 (LATIN SMALL LETTER K WITH LINE BELOW)


	- 0x1E96 (LATIN SMALL LETTER H WITH LINE BELOW)


	- 0x02BD (MODIFIER LETTER REVERSED COMMA)
 [code: missing-codepoints]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02B9 MODIFIER LETTER PRIME: not included in any glyphset definition
 * U+02BA MODIFIER LETTER DOUBLE PRIME: not included in any glyphset definition
 * U+02BE MODIFIER LETTER RIGHT HALF RING: not included in any glyphset definition
 * U+02BF MODIFIER LETTER LEFT HALF RING: not included in any glyphset definition
 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02C8 MODIFIER LETTER VERTICAL LINE: not included in any glyphset definition
 * U+02C9 MODIFIER LETTER MACRON: not included in any glyphset definition
 * U+02CA MODIFIER LETTER ACUTE ACCENT: not included in any glyphset definition
 * U+02CB MODIFIER LETTER GRAVE ACCENT: not included in any glyphset definition
 * U+02CC MODIFIER LETTER LOW VERTICAL LINE: not included in any glyphset definition
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, coptic, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, malayalam, tai-le, syriac, tifinagh, canadian-aboriginal, old-permic, math
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
 * U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition
 * U+0311 COMBINING INVERTED BREVE: try adding coptic
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+031B COMBINING HORN: not included in any glyphset definition
 * U+0324 COMBINING DIAERESIS BELOW: try adding one of: cherokee, syriac
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+032E COMBINING BREVE BELOW: try adding syriac
 * U+0331 COMBINING MACRON BELOW: try adding one of: gothic, caucasian-albanian, syriac, tifinagh, cherokee
 * U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition
 * U+035C COMBINING DOUBLE BREVE BELOW: not included in any glyphset definition
 * U+0361 COMBINING DOUBLE INVERTED BREVE: try adding coptic
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, yi, math
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+2010 HYPHEN: try adding one of: coptic, yi, cham, kaithi, kharoshthi, kayah-li, sundanese, syloti-nagri, sora-sompeng, lisu
 * U+2011 NON-BREAKING HYPHEN: try adding one of: syloti-nagri, yi
 * U+2012 FIGURE DASH: not included in any glyphset definition
 * U+2015 HORIZONTAL BAR: try adding adlam
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+203D INTERROBANG: not included in any glyphset definition
 * U+2042 ASTERISM: not included in any glyphset definition
 * U+204E LOW ASTERISK: not included in any glyphset definition
 * U+2051 TWO ASTERISKS ALIGNED VERTICALLY: not included in any glyphset definition
 * U+2052 COMMERCIAL MINUS SIGN: not included in any glyphset definition
 * U+2070 SUPERSCRIPT ZERO: not included in any glyphset definition
 * U+2075 SUPERSCRIPT FIVE: not included in any glyphset definition
 * U+2076 SUPERSCRIPT SIX: not included in any glyphset definition
 * U+2077 SUPERSCRIPT SEVEN: not included in any glyphset definition
 * U+2078 SUPERSCRIPT EIGHT: not included in any glyphset definition
 * U+2079 SUPERSCRIPT NINE: not included in any glyphset definition
 * U+2080 SUBSCRIPT ZERO: not included in any glyphset definition
 * U+2081 SUBSCRIPT ONE: not included in any glyphset definition
 * U+2082 SUBSCRIPT TWO: not included in any glyphset definition
 * U+2083 SUBSCRIPT THREE: not included in any glyphset definition
 * U+2084 SUBSCRIPT FOUR: not included in any glyphset definition
 * U+2085 SUBSCRIPT FIVE: not included in any glyphset definition
 * U+2086 SUBSCRIPT SIX: not included in any glyphset definition
 * U+2087 SUBSCRIPT SEVEN: not included in any glyphset definition
 * U+2088 SUBSCRIPT EIGHT: not included in any glyphset definition
 * U+2089 SUBSCRIPT NINE: not included in any glyphset definition
 * U+2116 NUMERO SIGN: try adding cyrillic
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+215B VULGAR FRACTION ONE EIGHTH: not included in any glyphset definition
 * U+215C VULGAR FRACTION THREE EIGHTHS: not included in any glyphset definition
 * U+215D VULGAR FRACTION FIVE EIGHTHS: not included in any glyphset definition
 * U+215E VULGAR FRACTION SEVEN EIGHTHS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: symbols, math
 * U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math
 * U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math
 * U+2195 UP DOWN ARROW: try adding one of: symbols, math
 * U+2196 NORTH WEST ARROW: try adding one of: symbols, math
 * U+2197 NORTH EAST ARROW: try adding one of: symbols, math
 * U+2198 SOUTH EAST ARROW: try adding one of: symbols, math
 * U+2199 SOUTH WEST ARROW: try adding one of: symbols, math
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+2219 BULLET OPERATOR: try adding one of: tai-tham, symbols, yi, math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+2310 REVERSED NOT SIGN: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: symbols, math
 * U+25CC DOTTED CIRCLE: try adding one of: mandaic, tibetan, balinese, ahom, limbu, hanunoo, kannada, bassa-vah, wancho, tirhuta, pahawh-hmong, hanifi-rohingya, kaithi, chakma, caucasian-albanian, mongolian, siddham, tamil, cham, tagalog, coptic, manichaean, lao, syloti-nagri, marchen, tai-viet, modi, psalter-pahlavi, osage, sharada, lepcha, sinhala, bengali, rejang, gunjala-gondi, miao, symbols, tai-le, oriya, brahmi, sundanese, gurmukhi, zanabazar-square, syriac, tagbanwa, myanmar, new-tai-lue, mahajani, math, grantha, dogra, batak, adlam, hebrew, buhid, masaram-gondi, thaana, javanese, kharoshthi, soyombo, gujarati, music, kayah-li, khojki, thai, bhaiksuki, khudawadi, khmer, newa, sogdian, meetei-mayek, mende-kikakui, malayalam, tifinagh, yi, elbasan, duployan, nko, takri, telugu, buginese, devanagari, phags-pa, old-permic
 * U+2605 BLACK STAR: try adding symbols
 * U+2606 WHITE STAR: try adding symbols
 * U+2661 WHITE HEART SUIT: try adding symbols
 * U+2665 BLACK HEART SUIT: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math
 * U+EA00 : not included in any glyphset definition
 * U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition
 * U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition
 * U+1F845 UPWARDS HEAVY ARROW: try adding symbols
 * U+1F847 DOWNWARDS HEAVY ARROW: try adding symbols

Or you can add the above codepoints to one of the subsets supported by the font: `latin`, `latin-ext`, `vietnamese` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + f

	- f + i

	- i + f

	- f + l

	- l + f

	- i + l

	- r + slash [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- NULL

	- eight.sinf

	- eight.subs

	- eight.sups

	- five.sinf

	- five.subs

	- five.sups

	- four.sinf

	- four.subs

	- four.sups

	- nine.sinf

	- nine.subs

	- nine.sups

	- one.sinf

	- one.subs

	- one.sups

	- seven.sinf

	- seven.subs

	- seven.sups

	- six.sinf

	- six.subs

	- six.sups

	- three.sinf

	- three.subs

	- three.sups

	- two.sinf

	- two.subs

	- two.sups

	- uni0250.ss02

	- uni0305.case

	- uni1E39.ss01

	- zero.sinf

	- zero.subs

	- zero.sups
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni01EA	Contours detected: 3	Expected: 2

	- Glyph name: uni01EB	Contours detected: 3	Expected: 2

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

	- Glyph name: arrowboth	Contours detected: 2	Expected: 1

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: arrowboth	Contours detected: 2	Expected: 1

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Check math signs have the same width. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/math_signs_width">com.google.fonts/check/math_signs_width</a>)</summary><div>


* ⚠ **WARN** The most common width is 1040 among a set of 6 math glyphs.
The following math glyphs have a different width, though:

Width = 1062:
greater, less

Width = 1034:
logicalnot

Width = 1003:
multiply

Width = 1118:
approxequal

Width = 1010:
greaterequal, lessequal
 [code: width-outliers]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* parenleft (U+0028): X=436.0,Y=-1.0 (should be at baseline 0?)

	* parenright (U+0029): X=233.0,Y=-1.0 (should be at baseline 0?)

	* g (U+0067): X=550.0,Y=1.0 (should be at baseline 0?)

	* g (U+0067): X=887.0,Y=1064.0 (should be at x-height 1063?)

	* g (U+0067): X=1086.0,Y=1064.0 (should be at x-height 1063?)

	* g (U+0067): X=550.0,Y=1.0 (should be at baseline 0?)

	* k (U+006B): X=778.0,Y=1064.0 (should be at x-height 1063?)

	* k (U+006B): X=1036.0,Y=1064.0 (should be at x-height 1063?)

	* l (U+006C): X=461.0,Y=-1.0 (should be at baseline 0?)

	* n (U+006E): X=130.0,Y=1064.0 (should be at x-height 1063?)

	* n (U+006E): X=332.0,Y=1064.0 (should be at x-height 1063?)

	* r (U+0072): X=770.0,Y=1064.0 (should be at x-height 1063?)

	* t (U+0074): X=54.0,Y=1064.0 (should be at x-height 1063?)

	* t (U+0074): X=230.0,Y=1064.0 (should be at x-height 1063?)

	* t (U+0074): X=434.0,Y=1064.0 (should be at x-height 1063?)

	* t (U+0074): X=693.0,Y=1064.0 (should be at x-height 1063?)

	* y (U+0079): X=489.0,Y=-1.0 (should be at baseline 0?)

	* cent (U+00A2): X=479.0,Y=1.0 (should be at baseline 0?)

	* yacute (U+00FD): X=489.0,Y=-1.0 (should be at baseline 0?)

	* ydieresis (U+00FF): X=489.0,Y=-1.0 (should be at baseline 0?)

	* eogonek (U+0119): X=691.0,Y=1.0 (should be at baseline 0?)

	* gcircumflex (U+011D): X=550.0,Y=1.0 (should be at baseline 0?)

	* gcircumflex (U+011D): X=550.0,Y=1.0 (should be at baseline 0?)

	* gbreve (U+011F): X=550.0,Y=1.0 (should be at baseline 0?)

	* gbreve (U+011F): X=550.0,Y=1.0 (should be at baseline 0?)

	* gdotaccent (U+0121): X=550.0,Y=1.0 (should be at baseline 0?)

	* gdotaccent (U+0121): X=550.0,Y=1.0 (should be at baseline 0?)

	* uni0123 (U+0123): X=550.0,Y=1.0 (should be at baseline 0?)

	* uni0123 (U+0123): X=550.0,Y=1.0 (should be at baseline 0?)

	* lacute (U+013A): X=461.0,Y=-1.0 (should be at baseline 0?)

	* uni013C (U+013C): X=461.0,Y=-1.0 (should be at baseline 0?)

	* lcaron (U+013E): X=461.0,Y=-1.0 (should be at baseline 0?)

	* ldot (U+0140): X=461.0,Y=-1.0 (should be at baseline 0?)

	* lslash (U+0142): X=597.0,Y=-1.0 (should be at baseline 0?)

	* ycircumflex (U+0177): X=489.0,Y=-1.0 (should be at baseline 0?)

	* uni01C9 (U+01C9): X=461.0,Y=-1.0 (should be at baseline 0?)

	* gcaron (U+01E7): X=550.0,Y=1.0 (should be at baseline 0?)

	* gcaron (U+01E7): X=550.0,Y=1.0 (should be at baseline 0?)

	* uni01F5 (U+01F5): X=550.0,Y=1.0 (should be at baseline 0?)

	* uni01F5 (U+01F5): X=550.0,Y=1.0 (should be at baseline 0?)

	* uni0233 (U+0233): X=489.0,Y=-1.0 (should be at baseline 0?)

	* uni02BC (U+02BC): X=360.5,Y=1473.0 (should be at cap-height 1474?)

	* uni02BE (U+02BE): X=164.0,Y=1472.0 (should be at cap-height 1474?)

	* uni02BF (U+02BF): X=216.5,Y=1472.0 (should be at cap-height 1474?)

	* uni1E21 (U+1E21): X=550.0,Y=1.0 (should be at baseline 0?)

	* uni1E21 (U+1E21): X=550.0,Y=1.0 (should be at baseline 0?)

	* uni1E37 (U+1E37): X=461.0,Y=-1.0 (should be at baseline 0?)

	* uni1E3B (U+1E3B): X=461.0,Y=-1.0 (should be at baseline 0?)

	* uni1E8F (U+1E8F): X=489.0,Y=-1.0 (should be at baseline 0?)

	* uni1EAA (U+1EAA): X=773.0,Y=2067.0 (should be at ascender 2068?)

	* uni1EB4 (U+1EB4): X=774.5,Y=2067.0 (should be at ascender 2068?)

	* uni1EC4 (U+1EC4): X=642.0,Y=2067.0 (should be at ascender 2068?)

	* uni1ED6 (U+1ED6): X=875.0,Y=2067.0 (should be at ascender 2068?)

	* ygrave (U+1EF3): X=489.0,Y=-1.0 (should be at baseline 0?)

	* uni1EF5 (U+1EF5): X=489.0,Y=-1.0 (should be at baseline 0?)

	* uni1EF7 (U+1EF7): X=489.0,Y=-1.0 (should be at baseline 0?)

	* uni1EF9 (U+1EF9): X=489.0,Y=-1.0 (should be at baseline 0?)

	* quoteright (U+2019): X=360.5,Y=1473.0 (should be at cap-height 1474?)

	* quotedblright (U+201D): X=360.5,Y=1473.0 (should be at cap-height 1474?)

	* quotedblright (U+201D): X=762.5,Y=1473.0 (should be at cap-height 1474?)

	* uni2078 (U+2078): X=164.0,Y=1475.5 (should be at cap-height 1474?)

	* uni2078 (U+2078): X=662.0,Y=1475.5 (should be at cap-height 1474?)

	* uni2113 (U+2113): X=663.0,Y=1.0 (should be at baseline 0?)

	* u1F845 (U+1F845): X=822.0,Y=1472.0 (should be at cap-height 1474?)

	* u1F845 (U+1F845): X=922.0,Y=1472.0 (should be at cap-height 1474?)

	* u1F847 (U+1F847): X=822.0,Y=2.0 (should be at baseline 0?)

	* u1F847 (U+1F847): X=922.0,Y=2.0 (should be at baseline 0?)

	* u1F847 (U+1F847): X=822.0,Y=2.0 (should be at baseline 0?) [code: found-misalignments]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any semi-vertical or semi-horizontal lines? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_semi_vertical">com.google.fonts/check/outline_semi_vertical</a>)</summary><div>


* ⚠ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

	* trademark (U+2122): L<<1244.0,1047.0>--<1245.0,1250.0>>

	* uni203D (U+203D): L<<242.0,1121.0>--<60.0,1120.0>>

	* uni203D (U+203D): L<<555.0,1162.0>--<554.0,919.0>>

	* uni20B2 (U+20B2): L<<752.0,805.0>--<1288.0,806.0>> [code: found-semi-vertical]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ị̀ ị́ ị̂ ị̃ ị̄

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̏ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Igbo (Latn, 27,823,640 speakers), Navajo (Latn, 166,319 speakers), Ebira (Latn, 2,200,000 speakers), Dutch (Latn, 31,709,104 speakers), Ma’di (Latn, 584,000 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Dan (Latn, 1,099,244 speakers), Ejagham (Latn, 120,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Lugbara (Latn, 2,200,000 speakers), Kom (Latn, 360,685 speakers), Aghem (Latn, 38,843 speakers), Avokaya (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Koonzime (Latn, 40,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Nateni (Latn, 100,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[16] RedditSans-Bold.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check license file has good copyright string. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_copyright">com.google.fonts/check/license/OFL_copyright</a>)</summary><div>


* 🔥 **FAIL** First line in license file is:

"reddit sans"

which does not match the expected format, similar to:

"Copyright 2022 The Familyname Project Authors (git url)" [code: bad-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Check OFL body text is correct. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_body_text">com.google.fonts/check/license/OFL_body_text</a>)</summary><div>


* 🔥 **FAIL** The OFL.txt body text is incorrect. Please use https://github.com/googlefonts/Unified-Font-Repository/blob/main/OFL.txt as a template. You should only modify the first line. [code: incorrect-ofl-body-text]
</div></details><details><summary>🔥 <b>FAIL:</b> Check copyright namerecords match license file. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/name/license">com.google.fonts/check/name/license</a>)</summary><div>


* 🔥 **FAIL** License file OFL.txt exists but NameID 13 (LICENSE DESCRIPTION) value on platform 3 (WINDOWS) is not specified for that. Value was: "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://openfontlicense.org/" Must be changed to "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://scripts.sil.org/OFL" [code: wrong]
</div></details><details><summary>🔥 <b>FAIL:</b> Copyright notices match canonical pattern in fonts (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_copyright">com.google.fonts/check/font_copyright</a>)</summary><div>


* 🔥 **FAIL** Name Table entry: Copyright notices should match a pattern similar to: "Copyright 2019 The Familyname Project Authors (git url)"
But instead we have got:
"Copyright (c) 2020-2023, Reddit, Inc. (https://github.com/reddit/redditsans)" [code: bad-notice-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Do we have the latest version of FontBakery installed? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/fontbakery_version">com.google.fonts/check/fontbakery_version</a>)</summary><div>


* 🔥 **FAIL** Current FontBakery version is 0.10.2, while a newer 0.11.1 is already available. Please upgrade it with 'pip install -U fontbakery' [code: outdated-fontbakery]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check Google Fonts glyph coverage. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyph_coverage">com.google.fonts/check/glyph_coverage</a>)</summary><div>


* ⚠ **WARN** GF_Latin_Plus is almost fulfilled. Missing codepoints:

	- 0x20B4 (HRYVNIA SIGN)


	- 0x20B8 (TENGE SIGN)


	- 0x20AE (TUGRIK SIGN)


	- 0x2016 (DOUBLE VERTICAL LINE)


	- 0x0E3F (THAI CURRENCY SYMBOL BAHT)


	- 0x20BF (BITCOIN SIGN)


	- 0x20BE (LARI SIGN)


	- 0x20A8 (RUPEE SIGN)


	- 0x20AA (NEW SHEQEL SIGN)


	- 0x25CF (BLACK CIRCLE)


	- 0x25CB (WHITE CIRCLE)


	- 0x25E6 (WHITE BULLET)


	- 0x25AA (BLACK SMALL SQUARE)


	- 0x25AB (WHITE SMALL SQUARE)


	- 0x25B4 (BLACK UP-POINTING SMALL TRIANGLE)


	- 0x25B8 (BLACK RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BE (BLACK DOWN-POINTING SMALL TRIANGLE)


	- 0x25C2 (BLACK LEFT-POINTING SMALL TRIANGLE)


	- 0x25B5 (WHITE UP-POINTING SMALL TRIANGLE)


	- 0x25B9 (WHITE RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BF (WHITE DOWN-POINTING SMALL TRIANGLE)


	- 0x25C3 (WHITE LEFT-POINTING SMALL TRIANGLE)
 [code: missing-codepoints]
* ⚠ **WARN** GF_TransLatin_Arabic is almost fulfilled. Missing codepoints:

	- 0x1E34 (LATIN CAPITAL LETTER K WITH LINE BELOW)


	- 0x1E35 (LATIN SMALL LETTER K WITH LINE BELOW)


	- 0x1E96 (LATIN SMALL LETTER H WITH LINE BELOW)


	- 0x02BD (MODIFIER LETTER REVERSED COMMA)
 [code: missing-codepoints]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02B9 MODIFIER LETTER PRIME: not included in any glyphset definition
 * U+02BA MODIFIER LETTER DOUBLE PRIME: not included in any glyphset definition
 * U+02BE MODIFIER LETTER RIGHT HALF RING: not included in any glyphset definition
 * U+02BF MODIFIER LETTER LEFT HALF RING: not included in any glyphset definition
 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02C8 MODIFIER LETTER VERTICAL LINE: not included in any glyphset definition
 * U+02C9 MODIFIER LETTER MACRON: not included in any glyphset definition
 * U+02CA MODIFIER LETTER ACUTE ACCENT: not included in any glyphset definition
 * U+02CB MODIFIER LETTER GRAVE ACCENT: not included in any glyphset definition
 * U+02CC MODIFIER LETTER LOW VERTICAL LINE: not included in any glyphset definition
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, coptic, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, malayalam, tai-le, syriac, tifinagh, canadian-aboriginal, old-permic, math
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
 * U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition
 * U+0311 COMBINING INVERTED BREVE: try adding coptic
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+031B COMBINING HORN: not included in any glyphset definition
 * U+0324 COMBINING DIAERESIS BELOW: try adding one of: cherokee, syriac
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+032E COMBINING BREVE BELOW: try adding syriac
 * U+0331 COMBINING MACRON BELOW: try adding one of: gothic, caucasian-albanian, syriac, tifinagh, cherokee
 * U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition
 * U+035C COMBINING DOUBLE BREVE BELOW: not included in any glyphset definition
 * U+0361 COMBINING DOUBLE INVERTED BREVE: try adding coptic
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, yi, math
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+2010 HYPHEN: try adding one of: coptic, yi, cham, kaithi, kharoshthi, kayah-li, sundanese, syloti-nagri, sora-sompeng, lisu
 * U+2011 NON-BREAKING HYPHEN: try adding one of: syloti-nagri, yi
 * U+2012 FIGURE DASH: not included in any glyphset definition
 * U+2015 HORIZONTAL BAR: try adding adlam
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+203D INTERROBANG: not included in any glyphset definition
 * U+2042 ASTERISM: not included in any glyphset definition
 * U+204E LOW ASTERISK: not included in any glyphset definition
 * U+2051 TWO ASTERISKS ALIGNED VERTICALLY: not included in any glyphset definition
 * U+2052 COMMERCIAL MINUS SIGN: not included in any glyphset definition
 * U+2070 SUPERSCRIPT ZERO: not included in any glyphset definition
 * U+2075 SUPERSCRIPT FIVE: not included in any glyphset definition
 * U+2076 SUPERSCRIPT SIX: not included in any glyphset definition
 * U+2077 SUPERSCRIPT SEVEN: not included in any glyphset definition
 * U+2078 SUPERSCRIPT EIGHT: not included in any glyphset definition
 * U+2079 SUPERSCRIPT NINE: not included in any glyphset definition
 * U+2080 SUBSCRIPT ZERO: not included in any glyphset definition
 * U+2081 SUBSCRIPT ONE: not included in any glyphset definition
 * U+2082 SUBSCRIPT TWO: not included in any glyphset definition
 * U+2083 SUBSCRIPT THREE: not included in any glyphset definition
 * U+2084 SUBSCRIPT FOUR: not included in any glyphset definition
 * U+2085 SUBSCRIPT FIVE: not included in any glyphset definition
 * U+2086 SUBSCRIPT SIX: not included in any glyphset definition
 * U+2087 SUBSCRIPT SEVEN: not included in any glyphset definition
 * U+2088 SUBSCRIPT EIGHT: not included in any glyphset definition
 * U+2089 SUBSCRIPT NINE: not included in any glyphset definition
 * U+2116 NUMERO SIGN: try adding cyrillic
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+215B VULGAR FRACTION ONE EIGHTH: not included in any glyphset definition
 * U+215C VULGAR FRACTION THREE EIGHTHS: not included in any glyphset definition
 * U+215D VULGAR FRACTION FIVE EIGHTHS: not included in any glyphset definition
 * U+215E VULGAR FRACTION SEVEN EIGHTHS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: symbols, math
 * U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math
 * U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math
 * U+2195 UP DOWN ARROW: try adding one of: symbols, math
 * U+2196 NORTH WEST ARROW: try adding one of: symbols, math
 * U+2197 NORTH EAST ARROW: try adding one of: symbols, math
 * U+2198 SOUTH EAST ARROW: try adding one of: symbols, math
 * U+2199 SOUTH WEST ARROW: try adding one of: symbols, math
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+2219 BULLET OPERATOR: try adding one of: tai-tham, symbols, yi, math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+2310 REVERSED NOT SIGN: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: symbols, math
 * U+25CC DOTTED CIRCLE: try adding one of: mandaic, tibetan, balinese, ahom, limbu, hanunoo, kannada, bassa-vah, wancho, tirhuta, pahawh-hmong, hanifi-rohingya, kaithi, chakma, caucasian-albanian, mongolian, siddham, tamil, cham, tagalog, coptic, manichaean, lao, syloti-nagri, marchen, tai-viet, modi, psalter-pahlavi, osage, sharada, lepcha, sinhala, bengali, rejang, gunjala-gondi, miao, symbols, tai-le, oriya, brahmi, sundanese, gurmukhi, zanabazar-square, syriac, tagbanwa, myanmar, new-tai-lue, mahajani, math, grantha, dogra, batak, adlam, hebrew, buhid, masaram-gondi, thaana, javanese, kharoshthi, soyombo, gujarati, music, kayah-li, khojki, thai, bhaiksuki, khudawadi, khmer, newa, sogdian, meetei-mayek, mende-kikakui, malayalam, tifinagh, yi, elbasan, duployan, nko, takri, telugu, buginese, devanagari, phags-pa, old-permic
 * U+2605 BLACK STAR: try adding symbols
 * U+2606 WHITE STAR: try adding symbols
 * U+2661 WHITE HEART SUIT: try adding symbols
 * U+2665 BLACK HEART SUIT: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math
 * U+EA00 : not included in any glyphset definition
 * U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition
 * U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition
 * U+1F845 UPWARDS HEAVY ARROW: try adding symbols
 * U+1F847 DOWNWARDS HEAVY ARROW: try adding symbols

Or you can add the above codepoints to one of the subsets supported by the font: `latin`, `latin-ext`, `vietnamese` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + f

	- f + i

	- i + f

	- f + l

	- l + f

	- i + l

	- r + slash [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- NULL

	- eight.sinf

	- eight.subs

	- eight.sups

	- five.sinf

	- five.subs

	- five.sups

	- four.sinf

	- four.subs

	- four.sups

	- nine.sinf

	- nine.subs

	- nine.sups

	- one.sinf

	- one.subs

	- one.sups

	- seven.sinf

	- seven.subs

	- seven.sups

	- six.sinf

	- six.subs

	- six.sups

	- three.sinf

	- three.subs

	- three.sups

	- two.sinf

	- two.subs

	- two.sups

	- uni0250.ss02

	- uni0305.case

	- uni1E39.ss01

	- zero.sinf

	- zero.subs

	- zero.sups
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni01EA	Contours detected: 3	Expected: 2

	- Glyph name: uni01EB	Contours detected: 3	Expected: 2

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A6	Contours detected: 4	Expected: 1, 3 or 5

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

	- Glyph name: arrowboth	Contours detected: 2	Expected: 1

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: arrowboth	Contours detected: 2	Expected: 1

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A6	Contours detected: 4	Expected: 1, 3 or 5

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Check math signs have the same width. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/math_signs_width">com.google.fonts/check/math_signs_width</a>)</summary><div>


* ⚠ **WARN** The most common width is 1095 among a set of 6 math glyphs.
The following math glyphs have a different width, though:

Width = 1085:
greater, less

Width = 1089:
logicalnot

Width = 1045:
multiply

Width = 1162:
approxequal

Width = 1050:
greaterequal, lessequal
 [code: width-outliers]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* asterisk (U+002A): X=217.0,Y=1476.0 (should be at cap-height 1474?)

	* asterisk (U+002A): X=655.0,Y=1476.0 (should be at cap-height 1474?)

	* at (U+0040): X=580.5,Y=-0.5 (should be at baseline 0?)

	* at (U+0040): X=1290.0,Y=-1.0 (should be at baseline 0?)

	* bracketleft (U+005B): X=599.0,Y=1475.0 (should be at cap-height 1474?)

	* bracketleft (U+005B): X=371.0,Y=1475.0 (should be at cap-height 1474?)

	* bracketright (U+005D): X=311.0,Y=1475.0 (should be at cap-height 1474?)

	* bracketright (U+005D): X=83.0,Y=1475.0 (should be at cap-height 1474?)

	* g (U+0067): X=859.0,Y=1072.0 (should be at x-height 1071?)

	* g (U+0067): X=1116.0,Y=1072.0 (should be at x-height 1071?)

	* k (U+006B): X=782.0,Y=1072.0 (should be at x-height 1071?)

	* k (U+006B): X=1114.0,Y=1072.0 (should be at x-height 1071?)

	* n (U+006E): X=112.0,Y=1072.0 (should be at x-height 1071?)

	* n (U+006E): X=380.0,Y=1072.0 (should be at x-height 1071?)

	* t (U+0074): X=32.0,Y=1072.0 (should be at x-height 1071?)

	* t (U+0074): X=208.0,Y=1072.0 (should be at x-height 1071?)

	* t (U+0074): X=484.0,Y=1072.0 (should be at x-height 1071?)

	* t (U+0074): X=736.0,Y=1072.0 (should be at x-height 1071?)

	* braceleft (U+007B): X=614.0,Y=1475.0 (should be at cap-height 1474?)

	* braceleft (U+007B): X=557.0,Y=1475.0 (should be at cap-height 1474?)

	* braceright (U+007D): X=165.0,Y=1475.0 (should be at cap-height 1474?)

	* braceright (U+007D): X=107.0,Y=1475.0 (should be at cap-height 1474?)

	* cent (U+00A2): X=481.0,Y=1.0 (should be at baseline 0?)

	* uni00B9 (U+00B9): X=76.0,Y=1472.0 (should be at cap-height 1474?)

	* eogonek (U+0119): X=659.0,Y=-2.0 (should be at baseline 0?)

	* Ohorn (U+01A0): X=1272.0,Y=1472.5 (should be at cap-height 1474?)

	* uni1EDA (U+1EDA): X=1272.0,Y=1472.5 (should be at cap-height 1474?)

	* uni1EDC (U+1EDC): X=1272.0,Y=1472.5 (should be at cap-height 1474?)

	* uni1EDE (U+1EDE): X=1272.0,Y=1472.5 (should be at cap-height 1474?)

	* uni1EE0 (U+1EE0): X=1272.0,Y=1472.5 (should be at cap-height 1474?)

	* uni1EE2 (U+1EE2): X=1272.0,Y=1472.5 (should be at cap-height 1474?)

	* quotesinglbase (U+201A): X=135.0,Y=-1.5 (should be at baseline 0?)

	* quotedblbase (U+201E): X=135.0,Y=-1.5 (should be at baseline 0?)

	* quotedblbase (U+201E): X=585.0,Y=-1.5 (should be at baseline 0?)

	* uni2042 (U+2042): X=709.0,Y=1476.0 (should be at cap-height 1474?)

	* uni2042 (U+2042): X=1147.0,Y=1476.0 (should be at cap-height 1474?)

	* uni2051 (U+2051): X=217.0,Y=1476.0 (should be at cap-height 1474?)

	* uni2051 (U+2051): X=655.0,Y=1476.0 (should be at cap-height 1474?)

	* colonmonetary (U+20A1): X=634.0,Y=1475.0 (should be at cap-height 1474?)

	* seveneighths (U+215E): X=701.0,Y=1472.0 (should be at cap-height 1474?)

	* uni2198 (U+2198): X=1185.0,Y=-1.0 (should be at baseline 0?)

	* uni2198 (U+2198): X=345.0,Y=-1.0 (should be at baseline 0?)

	* uni2199 (U+2199): X=951.0,Y=-1.0 (should be at baseline 0?)

	* uni2199 (U+2199): X=111.0,Y=-1.0 (should be at baseline 0?)

	* summation (U+2211): X=53.0,Y=1476.0 (should be at cap-height 1474?)

	* u1F845 (U+1F845): X=827.0,Y=1472.0 (should be at cap-height 1474?)

	* u1F845 (U+1F845): X=927.0,Y=1472.0 (should be at cap-height 1474?)

	* u1F847 (U+1F847): X=827.0,Y=2.0 (should be at baseline 0?)

	* u1F847 (U+1F847): X=927.0,Y=2.0 (should be at baseline 0?)

	* u1F847 (U+1F847): X=827.0,Y=2.0 (should be at baseline 0?) [code: found-misalignments]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any semi-vertical or semi-horizontal lines? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_semi_vertical">com.google.fonts/check/outline_semi_vertical</a>)</summary><div>


* ⚠ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

	* three (U+0033): L<<67.0,419.0>--<349.0,420.0>>

	* uni20B2 (U+20B2): L<<747.0,820.0>--<1302.0,824.0>> [code: found-semi-vertical]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ị̀ ị́ ị̂ ị̃ ị̄

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̏ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Igbo (Latn, 27,823,640 speakers), Navajo (Latn, 166,319 speakers), Ebira (Latn, 2,200,000 speakers), Dutch (Latn, 31,709,104 speakers), Ma’di (Latn, 584,000 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Dan (Latn, 1,099,244 speakers), Ejagham (Latn, 120,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Lugbara (Latn, 2,200,000 speakers), Kom (Latn, 360,685 speakers), Aghem (Latn, 38,843 speakers), Avokaya (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Koonzime (Latn, 40,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Nateni (Latn, 100,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[15] RedditSans-BoldItalic.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check license file has good copyright string. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_copyright">com.google.fonts/check/license/OFL_copyright</a>)</summary><div>


* 🔥 **FAIL** First line in license file is:

"reddit sans"

which does not match the expected format, similar to:

"Copyright 2022 The Familyname Project Authors (git url)" [code: bad-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Check OFL body text is correct. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_body_text">com.google.fonts/check/license/OFL_body_text</a>)</summary><div>


* 🔥 **FAIL** The OFL.txt body text is incorrect. Please use https://github.com/googlefonts/Unified-Font-Repository/blob/main/OFL.txt as a template. You should only modify the first line. [code: incorrect-ofl-body-text]
</div></details><details><summary>🔥 <b>FAIL:</b> Check copyright namerecords match license file. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/name/license">com.google.fonts/check/name/license</a>)</summary><div>


* 🔥 **FAIL** License file OFL.txt exists but NameID 13 (LICENSE DESCRIPTION) value on platform 3 (WINDOWS) is not specified for that. Value was: "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://openfontlicense.org/" Must be changed to "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://scripts.sil.org/OFL" [code: wrong]
</div></details><details><summary>🔥 <b>FAIL:</b> Copyright notices match canonical pattern in fonts (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_copyright">com.google.fonts/check/font_copyright</a>)</summary><div>


* 🔥 **FAIL** Name Table entry: Copyright notices should match a pattern similar to: "Copyright 2019 The Familyname Project Authors (git url)"
But instead we have got:
"Copyright (c) 2020-2023, Reddit, Inc. (https://github.com/reddit/redditsans)" [code: bad-notice-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Do we have the latest version of FontBakery installed? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/fontbakery_version">com.google.fonts/check/fontbakery_version</a>)</summary><div>


* 🔥 **FAIL** Current FontBakery version is 0.10.2, while a newer 0.11.1 is already available. Please upgrade it with 'pip install -U fontbakery' [code: outdated-fontbakery]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check Google Fonts glyph coverage. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyph_coverage">com.google.fonts/check/glyph_coverage</a>)</summary><div>


* ⚠ **WARN** GF_Latin_Plus is almost fulfilled. Missing codepoints:

	- 0x20B4 (HRYVNIA SIGN)


	- 0x20B8 (TENGE SIGN)


	- 0x20AE (TUGRIK SIGN)


	- 0x2016 (DOUBLE VERTICAL LINE)


	- 0x0E3F (THAI CURRENCY SYMBOL BAHT)


	- 0x20BF (BITCOIN SIGN)


	- 0x20BE (LARI SIGN)


	- 0x20A8 (RUPEE SIGN)


	- 0x20AA (NEW SHEQEL SIGN)


	- 0x25CF (BLACK CIRCLE)


	- 0x25CB (WHITE CIRCLE)


	- 0x25E6 (WHITE BULLET)


	- 0x25AA (BLACK SMALL SQUARE)


	- 0x25AB (WHITE SMALL SQUARE)


	- 0x25B4 (BLACK UP-POINTING SMALL TRIANGLE)


	- 0x25B8 (BLACK RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BE (BLACK DOWN-POINTING SMALL TRIANGLE)


	- 0x25C2 (BLACK LEFT-POINTING SMALL TRIANGLE)


	- 0x25B5 (WHITE UP-POINTING SMALL TRIANGLE)


	- 0x25B9 (WHITE RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BF (WHITE DOWN-POINTING SMALL TRIANGLE)


	- 0x25C3 (WHITE LEFT-POINTING SMALL TRIANGLE)
 [code: missing-codepoints]
* ⚠ **WARN** GF_TransLatin_Arabic is almost fulfilled. Missing codepoints:

	- 0x1E34 (LATIN CAPITAL LETTER K WITH LINE BELOW)


	- 0x1E35 (LATIN SMALL LETTER K WITH LINE BELOW)


	- 0x1E96 (LATIN SMALL LETTER H WITH LINE BELOW)


	- 0x02BD (MODIFIER LETTER REVERSED COMMA)
 [code: missing-codepoints]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02B9 MODIFIER LETTER PRIME: not included in any glyphset definition
 * U+02BA MODIFIER LETTER DOUBLE PRIME: not included in any glyphset definition
 * U+02BE MODIFIER LETTER RIGHT HALF RING: not included in any glyphset definition
 * U+02BF MODIFIER LETTER LEFT HALF RING: not included in any glyphset definition
 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02C8 MODIFIER LETTER VERTICAL LINE: not included in any glyphset definition
 * U+02C9 MODIFIER LETTER MACRON: not included in any glyphset definition
 * U+02CA MODIFIER LETTER ACUTE ACCENT: not included in any glyphset definition
 * U+02CB MODIFIER LETTER GRAVE ACCENT: not included in any glyphset definition
 * U+02CC MODIFIER LETTER LOW VERTICAL LINE: not included in any glyphset definition
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, coptic, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, malayalam, tai-le, syriac, tifinagh, canadian-aboriginal, old-permic, math
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
 * U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition
 * U+0311 COMBINING INVERTED BREVE: try adding coptic
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+031B COMBINING HORN: not included in any glyphset definition
 * U+0324 COMBINING DIAERESIS BELOW: try adding one of: cherokee, syriac
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+032E COMBINING BREVE BELOW: try adding syriac
 * U+0331 COMBINING MACRON BELOW: try adding one of: gothic, caucasian-albanian, syriac, tifinagh, cherokee
 * U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition
 * U+035C COMBINING DOUBLE BREVE BELOW: not included in any glyphset definition
 * U+0361 COMBINING DOUBLE INVERTED BREVE: try adding coptic
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, yi, math
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+2010 HYPHEN: try adding one of: coptic, yi, cham, kaithi, kharoshthi, kayah-li, sundanese, syloti-nagri, sora-sompeng, lisu
 * U+2011 NON-BREAKING HYPHEN: try adding one of: syloti-nagri, yi
 * U+2012 FIGURE DASH: not included in any glyphset definition
 * U+2015 HORIZONTAL BAR: try adding adlam
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+203D INTERROBANG: not included in any glyphset definition
 * U+2042 ASTERISM: not included in any glyphset definition
 * U+204E LOW ASTERISK: not included in any glyphset definition
 * U+2051 TWO ASTERISKS ALIGNED VERTICALLY: not included in any glyphset definition
 * U+2052 COMMERCIAL MINUS SIGN: not included in any glyphset definition
 * U+2070 SUPERSCRIPT ZERO: not included in any glyphset definition
 * U+2075 SUPERSCRIPT FIVE: not included in any glyphset definition
 * U+2076 SUPERSCRIPT SIX: not included in any glyphset definition
 * U+2077 SUPERSCRIPT SEVEN: not included in any glyphset definition
 * U+2078 SUPERSCRIPT EIGHT: not included in any glyphset definition
 * U+2079 SUPERSCRIPT NINE: not included in any glyphset definition
 * U+2080 SUBSCRIPT ZERO: not included in any glyphset definition
 * U+2081 SUBSCRIPT ONE: not included in any glyphset definition
 * U+2082 SUBSCRIPT TWO: not included in any glyphset definition
 * U+2083 SUBSCRIPT THREE: not included in any glyphset definition
 * U+2084 SUBSCRIPT FOUR: not included in any glyphset definition
 * U+2085 SUBSCRIPT FIVE: not included in any glyphset definition
 * U+2086 SUBSCRIPT SIX: not included in any glyphset definition
 * U+2087 SUBSCRIPT SEVEN: not included in any glyphset definition
 * U+2088 SUBSCRIPT EIGHT: not included in any glyphset definition
 * U+2089 SUBSCRIPT NINE: not included in any glyphset definition
 * U+2116 NUMERO SIGN: try adding cyrillic
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+215B VULGAR FRACTION ONE EIGHTH: not included in any glyphset definition
 * U+215C VULGAR FRACTION THREE EIGHTHS: not included in any glyphset definition
 * U+215D VULGAR FRACTION FIVE EIGHTHS: not included in any glyphset definition
 * U+215E VULGAR FRACTION SEVEN EIGHTHS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: symbols, math
 * U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math
 * U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math
 * U+2195 UP DOWN ARROW: try adding one of: symbols, math
 * U+2196 NORTH WEST ARROW: try adding one of: symbols, math
 * U+2197 NORTH EAST ARROW: try adding one of: symbols, math
 * U+2198 SOUTH EAST ARROW: try adding one of: symbols, math
 * U+2199 SOUTH WEST ARROW: try adding one of: symbols, math
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+2219 BULLET OPERATOR: try adding one of: tai-tham, symbols, yi, math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+2310 REVERSED NOT SIGN: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: symbols, math
 * U+25CC DOTTED CIRCLE: try adding one of: mandaic, tibetan, balinese, ahom, limbu, hanunoo, kannada, bassa-vah, wancho, tirhuta, pahawh-hmong, hanifi-rohingya, kaithi, chakma, caucasian-albanian, mongolian, siddham, tamil, cham, tagalog, coptic, manichaean, lao, syloti-nagri, marchen, tai-viet, modi, psalter-pahlavi, osage, sharada, lepcha, sinhala, bengali, rejang, gunjala-gondi, miao, symbols, tai-le, oriya, brahmi, sundanese, gurmukhi, zanabazar-square, syriac, tagbanwa, myanmar, new-tai-lue, mahajani, math, grantha, dogra, batak, adlam, hebrew, buhid, masaram-gondi, thaana, javanese, kharoshthi, soyombo, gujarati, music, kayah-li, khojki, thai, bhaiksuki, khudawadi, khmer, newa, sogdian, meetei-mayek, mende-kikakui, malayalam, tifinagh, yi, elbasan, duployan, nko, takri, telugu, buginese, devanagari, phags-pa, old-permic
 * U+2605 BLACK STAR: try adding symbols
 * U+2606 WHITE STAR: try adding symbols
 * U+2661 WHITE HEART SUIT: try adding symbols
 * U+2665 BLACK HEART SUIT: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math
 * U+EA00 : not included in any glyphset definition
 * U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition
 * U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition
 * U+1F845 UPWARDS HEAVY ARROW: try adding symbols
 * U+1F847 DOWNWARDS HEAVY ARROW: try adding symbols

Or you can add the above codepoints to one of the subsets supported by the font: `latin`, `latin-ext`, `vietnamese` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + f

	- f + i

	- i + f

	- f + l

	- l + f

	- i + l

	- r + slash [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- NULL

	- arrowboth.case

	- arrowdown.case

	- arrowleft.case

	- arrowright.case

	- arrowup.case

	- arrowupdn.case

	- eight.sinf

	- eight.subs

	- eight.sups

	- five.sinf

	- five.subs

	- five.sups

	- four.sinf

	- four.subs

	- four.sups

	- nine.sinf

	- nine.subs

	- nine.sups

	- one.sinf

	- one.subs

	- one.sups

	- seven.sinf

	- seven.subs

	- seven.sups

	- six.sinf

	- six.subs

	- six.sups

	- three.sinf

	- three.subs

	- three.sups

	- two.sinf

	- two.subs

	- two.sups

	- uni0305.case

	- uni1E39.ss01

	- uni2196.case

	- uni2197.case

	- uni2198.case

	- uni2199.case

	- zero.sinf

	- zero.subs

	- zero.sups
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni01EA	Contours detected: 3	Expected: 2

	- Glyph name: uni01EB	Contours detected: 3	Expected: 2

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A6	Contours detected: 4	Expected: 1, 3 or 5

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A6	Contours detected: 4	Expected: 1, 3 or 5

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Check math signs have the same width. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/math_signs_width">com.google.fonts/check/math_signs_width</a>)</summary><div>


* ⚠ **WARN** The most common width is 1131 among a set of 2 math glyphs.
The following math glyphs have a different width, though:

Width = 1121:
plus

Width = 1111:
less

Width = 1110:
greater

Width = 1156:
logicalnot

Width = 1127:
plusminus

Width = 1080:
multiply

Width = 1120:
divide, minus

Width = 1202:
approxequal

Width = 1062:
greaterequal, lessequal
 [code: width-outliers]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* dollar (U+0024): X=375.0,Y=1.0 (should be at baseline 0?)

	* asterisk (U+002A): X=567.0,Y=1472.5 (should be at cap-height 1474?)

	* nine (U+0039): X=517.0,Y=1.0 (should be at baseline 0?)

	* nine (U+0039): X=186.0,Y=1.0 (should be at baseline 0?)

	* K (U+004B): X=634.0,Y=1473.0 (should be at cap-height 1474?)

	* y (U+0079): X=385.0,Y=1.0 (should be at baseline 0?)

	* braceright (U+007D): X=334.0,Y=1472.0 (should be at cap-height 1474?)

	* braceright (U+007D): X=284.0,Y=1472.0 (should be at cap-height 1474?)

	* ordfeminine (U+00AA): X=705.0,Y=1476.0 (should be at cap-height 1474?)

	* ordfeminine (U+00AA): X=868.0,Y=1476.0 (should be at cap-height 1474?)

	* yacute (U+00FD): X=385.0,Y=1.0 (should be at baseline 0?)

	* ydieresis (U+00FF): X=385.0,Y=1.0 (should be at baseline 0?)

	* uni0136 (U+0136): X=634.0,Y=1473.0 (should be at cap-height 1474?)

	* eng (U+014B): X=956.0,Y=1.0 (should be at baseline 0?)

	* ycircumflex (U+0177): X=385.0,Y=1.0 (should be at baseline 0?)

	* uni0233 (U+0233): X=385.0,Y=1.0 (should be at baseline 0?)

	* uni1E66 (U+1E66): X=687.0,Y=2067.0 (should be at ascender 2068?)

	* uni1E66 (U+1E66): X=1038.0,Y=2067.0 (should be at ascender 2068?)

	* uni1E8F (U+1E8F): X=385.0,Y=1.0 (should be at baseline 0?)

	* ygrave (U+1EF3): X=385.0,Y=1.0 (should be at baseline 0?)

	* uni1EF5 (U+1EF5): X=385.0,Y=1.0 (should be at baseline 0?)

	* uni1EF7 (U+1EF7): X=385.0,Y=1.0 (should be at baseline 0?)

	* uni1EF9 (U+1EF9): X=385.0,Y=1.0 (should be at baseline 0?)

	* uni2042 (U+2042): X=1004.0,Y=1472.5 (should be at cap-height 1474?)

	* uni2051 (U+2051): X=570.0,Y=1472.5 (should be at cap-height 1474?)

	* uni2078 (U+2078): X=887.5,Y=1472.5 (should be at cap-height 1474?)

	* uni2082 (U+2082): X=326.0,Y=2.0 (should be at baseline 0?)

	* colonmonetary (U+20A1): X=1110.0,Y=1476.0 (should be at cap-height 1474?)

	* uni2113 (U+2113): X=576.5,Y=-0.5 (should be at baseline 0?)

	* seveneighths (U+215E): X=878.0,Y=1476.0 (should be at cap-height 1474?)

	* uni2198 (U+2198): X=1079.0,Y=-1.0 (should be at baseline 0?)

	* uni2198 (U+2198): X=239.0,Y=-1.0 (should be at baseline 0?)

	* uni2199 (U+2199): X=844.0,Y=-1.0 (should be at baseline 0?)

	* uni2199 (U+2199): X=4.0,Y=-1.0 (should be at baseline 0?)

	* summation (U+2211): X=229.0,Y=1476.0 (should be at cap-height 1474?) [code: found-misalignments]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ị̀ ị́ ị̂ ị̃ ị̄

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̏ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Igbo (Latn, 27,823,640 speakers), Navajo (Latn, 166,319 speakers), Ebira (Latn, 2,200,000 speakers), Dutch (Latn, 31,709,104 speakers), Ma’di (Latn, 584,000 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Dan (Latn, 1,099,244 speakers), Ejagham (Latn, 120,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Lugbara (Latn, 2,200,000 speakers), Kom (Latn, 360,685 speakers), Aghem (Latn, 38,843 speakers), Avokaya (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Koonzime (Latn, 40,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Nateni (Latn, 100,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[15] RedditSans-ExtraBoldItalic.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check license file has good copyright string. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_copyright">com.google.fonts/check/license/OFL_copyright</a>)</summary><div>


* 🔥 **FAIL** First line in license file is:

"reddit sans"

which does not match the expected format, similar to:

"Copyright 2022 The Familyname Project Authors (git url)" [code: bad-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Check OFL body text is correct. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_body_text">com.google.fonts/check/license/OFL_body_text</a>)</summary><div>


* 🔥 **FAIL** The OFL.txt body text is incorrect. Please use https://github.com/googlefonts/Unified-Font-Repository/blob/main/OFL.txt as a template. You should only modify the first line. [code: incorrect-ofl-body-text]
</div></details><details><summary>🔥 <b>FAIL:</b> Check copyright namerecords match license file. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/name/license">com.google.fonts/check/name/license</a>)</summary><div>


* 🔥 **FAIL** License file OFL.txt exists but NameID 13 (LICENSE DESCRIPTION) value on platform 3 (WINDOWS) is not specified for that. Value was: "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://openfontlicense.org/" Must be changed to "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://scripts.sil.org/OFL" [code: wrong]
</div></details><details><summary>🔥 <b>FAIL:</b> Copyright notices match canonical pattern in fonts (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_copyright">com.google.fonts/check/font_copyright</a>)</summary><div>


* 🔥 **FAIL** Name Table entry: Copyright notices should match a pattern similar to: "Copyright 2019 The Familyname Project Authors (git url)"
But instead we have got:
"Copyright (c) 2020-2023, Reddit, Inc. (https://github.com/reddit/redditsans)" [code: bad-notice-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Do we have the latest version of FontBakery installed? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/fontbakery_version">com.google.fonts/check/fontbakery_version</a>)</summary><div>


* 🔥 **FAIL** Current FontBakery version is 0.10.2, while a newer 0.11.1 is already available. Please upgrade it with 'pip install -U fontbakery' [code: outdated-fontbakery]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check Google Fonts glyph coverage. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyph_coverage">com.google.fonts/check/glyph_coverage</a>)</summary><div>


* ⚠ **WARN** GF_Latin_Plus is almost fulfilled. Missing codepoints:

	- 0x20B4 (HRYVNIA SIGN)


	- 0x20B8 (TENGE SIGN)


	- 0x20AE (TUGRIK SIGN)


	- 0x2016 (DOUBLE VERTICAL LINE)


	- 0x0E3F (THAI CURRENCY SYMBOL BAHT)


	- 0x20BF (BITCOIN SIGN)


	- 0x20BE (LARI SIGN)


	- 0x20A8 (RUPEE SIGN)


	- 0x20AA (NEW SHEQEL SIGN)


	- 0x25CF (BLACK CIRCLE)


	- 0x25CB (WHITE CIRCLE)


	- 0x25E6 (WHITE BULLET)


	- 0x25AA (BLACK SMALL SQUARE)


	- 0x25AB (WHITE SMALL SQUARE)


	- 0x25B4 (BLACK UP-POINTING SMALL TRIANGLE)


	- 0x25B8 (BLACK RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BE (BLACK DOWN-POINTING SMALL TRIANGLE)


	- 0x25C2 (BLACK LEFT-POINTING SMALL TRIANGLE)


	- 0x25B5 (WHITE UP-POINTING SMALL TRIANGLE)


	- 0x25B9 (WHITE RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BF (WHITE DOWN-POINTING SMALL TRIANGLE)


	- 0x25C3 (WHITE LEFT-POINTING SMALL TRIANGLE)
 [code: missing-codepoints]
* ⚠ **WARN** GF_TransLatin_Arabic is almost fulfilled. Missing codepoints:

	- 0x1E34 (LATIN CAPITAL LETTER K WITH LINE BELOW)


	- 0x1E35 (LATIN SMALL LETTER K WITH LINE BELOW)


	- 0x1E96 (LATIN SMALL LETTER H WITH LINE BELOW)


	- 0x02BD (MODIFIER LETTER REVERSED COMMA)
 [code: missing-codepoints]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02B9 MODIFIER LETTER PRIME: not included in any glyphset definition
 * U+02BA MODIFIER LETTER DOUBLE PRIME: not included in any glyphset definition
 * U+02BE MODIFIER LETTER RIGHT HALF RING: not included in any glyphset definition
 * U+02BF MODIFIER LETTER LEFT HALF RING: not included in any glyphset definition
 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02C8 MODIFIER LETTER VERTICAL LINE: not included in any glyphset definition
 * U+02C9 MODIFIER LETTER MACRON: not included in any glyphset definition
 * U+02CA MODIFIER LETTER ACUTE ACCENT: not included in any glyphset definition
 * U+02CB MODIFIER LETTER GRAVE ACCENT: not included in any glyphset definition
 * U+02CC MODIFIER LETTER LOW VERTICAL LINE: not included in any glyphset definition
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, coptic, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, malayalam, tai-le, syriac, tifinagh, canadian-aboriginal, old-permic, math
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
 * U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition
 * U+0311 COMBINING INVERTED BREVE: try adding coptic
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+031B COMBINING HORN: not included in any glyphset definition
 * U+0324 COMBINING DIAERESIS BELOW: try adding one of: cherokee, syriac
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+032E COMBINING BREVE BELOW: try adding syriac
 * U+0331 COMBINING MACRON BELOW: try adding one of: gothic, caucasian-albanian, syriac, tifinagh, cherokee
 * U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition
 * U+035C COMBINING DOUBLE BREVE BELOW: not included in any glyphset definition
 * U+0361 COMBINING DOUBLE INVERTED BREVE: try adding coptic
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, yi, math
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+2010 HYPHEN: try adding one of: coptic, yi, cham, kaithi, kharoshthi, kayah-li, sundanese, syloti-nagri, sora-sompeng, lisu
 * U+2011 NON-BREAKING HYPHEN: try adding one of: syloti-nagri, yi
 * U+2012 FIGURE DASH: not included in any glyphset definition
 * U+2015 HORIZONTAL BAR: try adding adlam
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+203D INTERROBANG: not included in any glyphset definition
 * U+2042 ASTERISM: not included in any glyphset definition
 * U+204E LOW ASTERISK: not included in any glyphset definition
 * U+2051 TWO ASTERISKS ALIGNED VERTICALLY: not included in any glyphset definition
 * U+2052 COMMERCIAL MINUS SIGN: not included in any glyphset definition
 * U+2070 SUPERSCRIPT ZERO: not included in any glyphset definition
 * U+2075 SUPERSCRIPT FIVE: not included in any glyphset definition
 * U+2076 SUPERSCRIPT SIX: not included in any glyphset definition
 * U+2077 SUPERSCRIPT SEVEN: not included in any glyphset definition
 * U+2078 SUPERSCRIPT EIGHT: not included in any glyphset definition
 * U+2079 SUPERSCRIPT NINE: not included in any glyphset definition
 * U+2080 SUBSCRIPT ZERO: not included in any glyphset definition
 * U+2081 SUBSCRIPT ONE: not included in any glyphset definition
 * U+2082 SUBSCRIPT TWO: not included in any glyphset definition
 * U+2083 SUBSCRIPT THREE: not included in any glyphset definition
 * U+2084 SUBSCRIPT FOUR: not included in any glyphset definition
 * U+2085 SUBSCRIPT FIVE: not included in any glyphset definition
 * U+2086 SUBSCRIPT SIX: not included in any glyphset definition
 * U+2087 SUBSCRIPT SEVEN: not included in any glyphset definition
 * U+2088 SUBSCRIPT EIGHT: not included in any glyphset definition
 * U+2089 SUBSCRIPT NINE: not included in any glyphset definition
 * U+2116 NUMERO SIGN: try adding cyrillic
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+215B VULGAR FRACTION ONE EIGHTH: not included in any glyphset definition
 * U+215C VULGAR FRACTION THREE EIGHTHS: not included in any glyphset definition
 * U+215D VULGAR FRACTION FIVE EIGHTHS: not included in any glyphset definition
 * U+215E VULGAR FRACTION SEVEN EIGHTHS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: symbols, math
 * U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math
 * U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math
 * U+2195 UP DOWN ARROW: try adding one of: symbols, math
 * U+2196 NORTH WEST ARROW: try adding one of: symbols, math
 * U+2197 NORTH EAST ARROW: try adding one of: symbols, math
 * U+2198 SOUTH EAST ARROW: try adding one of: symbols, math
 * U+2199 SOUTH WEST ARROW: try adding one of: symbols, math
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+2219 BULLET OPERATOR: try adding one of: tai-tham, symbols, yi, math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+2310 REVERSED NOT SIGN: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: symbols, math
 * U+25CC DOTTED CIRCLE: try adding one of: mandaic, tibetan, balinese, ahom, limbu, hanunoo, kannada, bassa-vah, wancho, tirhuta, pahawh-hmong, hanifi-rohingya, kaithi, chakma, caucasian-albanian, mongolian, siddham, tamil, cham, tagalog, coptic, manichaean, lao, syloti-nagri, marchen, tai-viet, modi, psalter-pahlavi, osage, sharada, lepcha, sinhala, bengali, rejang, gunjala-gondi, miao, symbols, tai-le, oriya, brahmi, sundanese, gurmukhi, zanabazar-square, syriac, tagbanwa, myanmar, new-tai-lue, mahajani, math, grantha, dogra, batak, adlam, hebrew, buhid, masaram-gondi, thaana, javanese, kharoshthi, soyombo, gujarati, music, kayah-li, khojki, thai, bhaiksuki, khudawadi, khmer, newa, sogdian, meetei-mayek, mende-kikakui, malayalam, tifinagh, yi, elbasan, duployan, nko, takri, telugu, buginese, devanagari, phags-pa, old-permic
 * U+2605 BLACK STAR: try adding symbols
 * U+2606 WHITE STAR: try adding symbols
 * U+2661 WHITE HEART SUIT: try adding symbols
 * U+2665 BLACK HEART SUIT: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math
 * U+EA00 : not included in any glyphset definition
 * U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition
 * U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition
 * U+1F845 UPWARDS HEAVY ARROW: try adding symbols
 * U+1F847 DOWNWARDS HEAVY ARROW: try adding symbols

Or you can add the above codepoints to one of the subsets supported by the font: `latin`, `latin-ext`, `vietnamese` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + f

	- f + i

	- i + f

	- f + l

	- l + f

	- i + l

	- r + slash [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- NULL

	- arrowboth.case

	- arrowdown.case

	- arrowleft.case

	- arrowright.case

	- arrowup.case

	- arrowupdn.case

	- eight.sinf

	- eight.subs

	- eight.sups

	- five.sinf

	- five.subs

	- five.sups

	- four.sinf

	- four.subs

	- four.sups

	- nine.sinf

	- nine.subs

	- nine.sups

	- one.sinf

	- one.subs

	- one.sups

	- seven.sinf

	- seven.subs

	- seven.sups

	- six.sinf

	- six.subs

	- six.sups

	- three.sinf

	- three.subs

	- three.sups

	- two.sinf

	- two.subs

	- two.sups

	- uni0305.case

	- uni1E39.ss01

	- uni2196.case

	- uni2197.case

	- uni2198.case

	- uni2199.case

	- zero.sinf

	- zero.subs

	- zero.sups
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni01EA	Contours detected: 3	Expected: 2

	- Glyph name: uni01EB	Contours detected: 3	Expected: 2

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Check math signs have the same width. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/math_signs_width">com.google.fonts/check/math_signs_width</a>)</summary><div>


* ⚠ **WARN** The most common width is 1150 among a set of 3 math glyphs.
The following math glyphs have a different width, though:

Width = 1130:
less

Width = 1162:
notequal, equal

Width = 1128:
greater

Width = 1182:
logicalnot

Width = 1154:
plusminus

Width = 1105:
multiply

Width = 1227:
approxequal

Width = 1080:
greaterequal, lessequal
 [code: width-outliers]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* dollar (U+0024): X=379.0,Y=1.0 (should be at baseline 0?)

	* nine (U+0039): X=541.0,Y=1.0 (should be at baseline 0?)

	* nine (U+0039): X=167.0,Y=1.0 (should be at baseline 0?)

	* r (U+0072): X=906.0,Y=1077.0 (should be at x-height 1076?)

	* t (U+0074): X=639.5,Y=1.0 (should be at baseline 0?)

	* ordfeminine (U+00AA): X=694.0,Y=1476.0 (should be at cap-height 1474?)

	* ordfeminine (U+00AA): X=875.0,Y=1476.0 (should be at cap-height 1474?)

	* macron (U+00AF): X=259.0,Y=1472.0 (should be at cap-height 1474?)

	* macron (U+00AF): X=1106.0,Y=1472.0 (should be at cap-height 1474?)

	* uni00B5 (U+00B5): X=326.0,Y=-1.0 (should be at baseline 0?)

	* germandbls (U+00DF): X=452.0,Y=2.0 (should be at baseline 0?)

	* eogonek (U+0119): X=562.5,Y=1.0 (should be at baseline 0?)

	* eng (U+014B): X=980.0,Y=1.0 (should be at baseline 0?)

	* uni0163 (U+0163): X=639.5,Y=1.0 (should be at baseline 0?)

	* tcaron (U+0165): X=646.5,Y=1.0 (should be at baseline 0?)

	* tbar (U+0167): X=639.5,Y=1.0 (should be at baseline 0?)

	* Ohorn (U+01A0): X=1372.0,Y=1476.0 (should be at cap-height 1474?)

	* uni021B (U+021B): X=639.5,Y=1.0 (should be at baseline 0?)

	* uni02C9 (U+02C9): X=259.0,Y=1472.0 (should be at cap-height 1474?)

	* uni02C9 (U+02C9): X=1106.0,Y=1472.0 (should be at cap-height 1474?)

	* uni1E4C (U+1E4C): X=902.0,Y=2067.0 (should be at ascender 2068?)

	* uni1E6D (U+1E6D): X=639.5,Y=1.0 (should be at baseline 0?)

	* uni1E6F (U+1E6F): X=639.5,Y=1.0 (should be at baseline 0?)

	* uni1E78 (U+1E78): X=849.0,Y=2067.0 (should be at ascender 2068?)

	* uni1E7A (U+1E7A): X=949.0,Y=2067.0 (should be at ascender 2068?)

	* uni1E97 (U+1E97): X=639.5,Y=1.0 (should be at baseline 0?)

	* uni1EDA (U+1EDA): X=1372.0,Y=1476.0 (should be at cap-height 1474?)

	* uni1EDC (U+1EDC): X=1372.0,Y=1476.0 (should be at cap-height 1474?)

	* uni1EDE (U+1EDE): X=1372.0,Y=1476.0 (should be at cap-height 1474?)

	* uni1EE0 (U+1EE0): X=1372.0,Y=1476.0 (should be at cap-height 1474?)

	* uni1EE2 (U+1EE2): X=1372.0,Y=1476.0 (should be at cap-height 1474?)

	* uni2075 (U+2075): X=494.0,Y=1472.0 (should be at cap-height 1474?)

	* uni20B5 (U+20B5): X=561.0,Y=-1.0 (should be at baseline 0?)

	* uni2198 (U+2198): X=1078.0,Y=-2.0 (should be at baseline 0?)

	* uni2198 (U+2198): X=228.0,Y=-2.0 (should be at baseline 0?)

	* uni2199 (U+2199): X=855.0,Y=-2.0 (should be at baseline 0?)

	* uni2199 (U+2199): X=5.0,Y=-2.0 (should be at baseline 0?)

	* summation (U+2211): X=229.0,Y=1475.0 (should be at cap-height 1474?) [code: found-misalignments]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ị̀ ị́ ị̂ ị̃ ị̄

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̏ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Igbo (Latn, 27,823,640 speakers), Navajo (Latn, 166,319 speakers), Ebira (Latn, 2,200,000 speakers), Dutch (Latn, 31,709,104 speakers), Ma’di (Latn, 584,000 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Dan (Latn, 1,099,244 speakers), Ejagham (Latn, 120,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Lugbara (Latn, 2,200,000 speakers), Kom (Latn, 360,685 speakers), Aghem (Latn, 38,843 speakers), Avokaya (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Koonzime (Latn, 40,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Nateni (Latn, 100,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[16] RedditSans-Regular.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check license file has good copyright string. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_copyright">com.google.fonts/check/license/OFL_copyright</a>)</summary><div>


* 🔥 **FAIL** First line in license file is:

"reddit sans"

which does not match the expected format, similar to:

"Copyright 2022 The Familyname Project Authors (git url)" [code: bad-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Check OFL body text is correct. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_body_text">com.google.fonts/check/license/OFL_body_text</a>)</summary><div>


* 🔥 **FAIL** The OFL.txt body text is incorrect. Please use https://github.com/googlefonts/Unified-Font-Repository/blob/main/OFL.txt as a template. You should only modify the first line. [code: incorrect-ofl-body-text]
</div></details><details><summary>🔥 <b>FAIL:</b> Check copyright namerecords match license file. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/name/license">com.google.fonts/check/name/license</a>)</summary><div>


* 🔥 **FAIL** License file OFL.txt exists but NameID 13 (LICENSE DESCRIPTION) value on platform 3 (WINDOWS) is not specified for that. Value was: "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://openfontlicense.org/" Must be changed to "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://scripts.sil.org/OFL" [code: wrong]
</div></details><details><summary>🔥 <b>FAIL:</b> Copyright notices match canonical pattern in fonts (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_copyright">com.google.fonts/check/font_copyright</a>)</summary><div>


* 🔥 **FAIL** Name Table entry: Copyright notices should match a pattern similar to: "Copyright 2019 The Familyname Project Authors (git url)"
But instead we have got:
"Copyright (c) 2020-2023, Reddit, Inc. (https://github.com/reddit/redditsans)" [code: bad-notice-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Do we have the latest version of FontBakery installed? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/fontbakery_version">com.google.fonts/check/fontbakery_version</a>)</summary><div>


* 🔥 **FAIL** Current FontBakery version is 0.10.2, while a newer 0.11.1 is already available. Please upgrade it with 'pip install -U fontbakery' [code: outdated-fontbakery]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check Google Fonts glyph coverage. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyph_coverage">com.google.fonts/check/glyph_coverage</a>)</summary><div>


* ⚠ **WARN** GF_Latin_Plus is almost fulfilled. Missing codepoints:

	- 0x20B4 (HRYVNIA SIGN)


	- 0x20B8 (TENGE SIGN)


	- 0x20AE (TUGRIK SIGN)


	- 0x2016 (DOUBLE VERTICAL LINE)


	- 0x0E3F (THAI CURRENCY SYMBOL BAHT)


	- 0x20BF (BITCOIN SIGN)


	- 0x20BE (LARI SIGN)


	- 0x20A8 (RUPEE SIGN)


	- 0x20AA (NEW SHEQEL SIGN)


	- 0x25CF (BLACK CIRCLE)


	- 0x25CB (WHITE CIRCLE)


	- 0x25E6 (WHITE BULLET)


	- 0x25AA (BLACK SMALL SQUARE)


	- 0x25AB (WHITE SMALL SQUARE)


	- 0x25B4 (BLACK UP-POINTING SMALL TRIANGLE)


	- 0x25B8 (BLACK RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BE (BLACK DOWN-POINTING SMALL TRIANGLE)


	- 0x25C2 (BLACK LEFT-POINTING SMALL TRIANGLE)


	- 0x25B5 (WHITE UP-POINTING SMALL TRIANGLE)


	- 0x25B9 (WHITE RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BF (WHITE DOWN-POINTING SMALL TRIANGLE)


	- 0x25C3 (WHITE LEFT-POINTING SMALL TRIANGLE)
 [code: missing-codepoints]
* ⚠ **WARN** GF_TransLatin_Arabic is almost fulfilled. Missing codepoints:

	- 0x1E34 (LATIN CAPITAL LETTER K WITH LINE BELOW)


	- 0x1E35 (LATIN SMALL LETTER K WITH LINE BELOW)


	- 0x1E96 (LATIN SMALL LETTER H WITH LINE BELOW)


	- 0x02BD (MODIFIER LETTER REVERSED COMMA)
 [code: missing-codepoints]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02B9 MODIFIER LETTER PRIME: not included in any glyphset definition
 * U+02BA MODIFIER LETTER DOUBLE PRIME: not included in any glyphset definition
 * U+02BE MODIFIER LETTER RIGHT HALF RING: not included in any glyphset definition
 * U+02BF MODIFIER LETTER LEFT HALF RING: not included in any glyphset definition
 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02C8 MODIFIER LETTER VERTICAL LINE: not included in any glyphset definition
 * U+02C9 MODIFIER LETTER MACRON: not included in any glyphset definition
 * U+02CA MODIFIER LETTER ACUTE ACCENT: not included in any glyphset definition
 * U+02CB MODIFIER LETTER GRAVE ACCENT: not included in any glyphset definition
 * U+02CC MODIFIER LETTER LOW VERTICAL LINE: not included in any glyphset definition
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, coptic, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, malayalam, tai-le, syriac, tifinagh, canadian-aboriginal, old-permic, math
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
 * U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition
 * U+0311 COMBINING INVERTED BREVE: try adding coptic
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+031B COMBINING HORN: not included in any glyphset definition
 * U+0324 COMBINING DIAERESIS BELOW: try adding one of: cherokee, syriac
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+032E COMBINING BREVE BELOW: try adding syriac
 * U+0331 COMBINING MACRON BELOW: try adding one of: gothic, caucasian-albanian, syriac, tifinagh, cherokee
 * U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition
 * U+035C COMBINING DOUBLE BREVE BELOW: not included in any glyphset definition
 * U+0361 COMBINING DOUBLE INVERTED BREVE: try adding coptic
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, yi, math
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+2010 HYPHEN: try adding one of: coptic, yi, cham, kaithi, kharoshthi, kayah-li, sundanese, syloti-nagri, sora-sompeng, lisu
 * U+2011 NON-BREAKING HYPHEN: try adding one of: syloti-nagri, yi
 * U+2012 FIGURE DASH: not included in any glyphset definition
 * U+2015 HORIZONTAL BAR: try adding adlam
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+203D INTERROBANG: not included in any glyphset definition
 * U+2042 ASTERISM: not included in any glyphset definition
 * U+204E LOW ASTERISK: not included in any glyphset definition
 * U+2051 TWO ASTERISKS ALIGNED VERTICALLY: not included in any glyphset definition
 * U+2052 COMMERCIAL MINUS SIGN: not included in any glyphset definition
 * U+2070 SUPERSCRIPT ZERO: not included in any glyphset definition
 * U+2075 SUPERSCRIPT FIVE: not included in any glyphset definition
 * U+2076 SUPERSCRIPT SIX: not included in any glyphset definition
 * U+2077 SUPERSCRIPT SEVEN: not included in any glyphset definition
 * U+2078 SUPERSCRIPT EIGHT: not included in any glyphset definition
 * U+2079 SUPERSCRIPT NINE: not included in any glyphset definition
 * U+2080 SUBSCRIPT ZERO: not included in any glyphset definition
 * U+2081 SUBSCRIPT ONE: not included in any glyphset definition
 * U+2082 SUBSCRIPT TWO: not included in any glyphset definition
 * U+2083 SUBSCRIPT THREE: not included in any glyphset definition
 * U+2084 SUBSCRIPT FOUR: not included in any glyphset definition
 * U+2085 SUBSCRIPT FIVE: not included in any glyphset definition
 * U+2086 SUBSCRIPT SIX: not included in any glyphset definition
 * U+2087 SUBSCRIPT SEVEN: not included in any glyphset definition
 * U+2088 SUBSCRIPT EIGHT: not included in any glyphset definition
 * U+2089 SUBSCRIPT NINE: not included in any glyphset definition
 * U+2116 NUMERO SIGN: try adding cyrillic
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+215B VULGAR FRACTION ONE EIGHTH: not included in any glyphset definition
 * U+215C VULGAR FRACTION THREE EIGHTHS: not included in any glyphset definition
 * U+215D VULGAR FRACTION FIVE EIGHTHS: not included in any glyphset definition
 * U+215E VULGAR FRACTION SEVEN EIGHTHS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: symbols, math
 * U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math
 * U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math
 * U+2195 UP DOWN ARROW: try adding one of: symbols, math
 * U+2196 NORTH WEST ARROW: try adding one of: symbols, math
 * U+2197 NORTH EAST ARROW: try adding one of: symbols, math
 * U+2198 SOUTH EAST ARROW: try adding one of: symbols, math
 * U+2199 SOUTH WEST ARROW: try adding one of: symbols, math
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+2219 BULLET OPERATOR: try adding one of: tai-tham, symbols, yi, math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+2310 REVERSED NOT SIGN: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: symbols, math
 * U+25CC DOTTED CIRCLE: try adding one of: mandaic, tibetan, balinese, ahom, limbu, hanunoo, kannada, bassa-vah, wancho, tirhuta, pahawh-hmong, hanifi-rohingya, kaithi, chakma, caucasian-albanian, mongolian, siddham, tamil, cham, tagalog, coptic, manichaean, lao, syloti-nagri, marchen, tai-viet, modi, psalter-pahlavi, osage, sharada, lepcha, sinhala, bengali, rejang, gunjala-gondi, miao, symbols, tai-le, oriya, brahmi, sundanese, gurmukhi, zanabazar-square, syriac, tagbanwa, myanmar, new-tai-lue, mahajani, math, grantha, dogra, batak, adlam, hebrew, buhid, masaram-gondi, thaana, javanese, kharoshthi, soyombo, gujarati, music, kayah-li, khojki, thai, bhaiksuki, khudawadi, khmer, newa, sogdian, meetei-mayek, mende-kikakui, malayalam, tifinagh, yi, elbasan, duployan, nko, takri, telugu, buginese, devanagari, phags-pa, old-permic
 * U+2605 BLACK STAR: try adding symbols
 * U+2606 WHITE STAR: try adding symbols
 * U+2661 WHITE HEART SUIT: try adding symbols
 * U+2665 BLACK HEART SUIT: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math
 * U+EA00 : not included in any glyphset definition
 * U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition
 * U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition
 * U+1F845 UPWARDS HEAVY ARROW: try adding symbols
 * U+1F847 DOWNWARDS HEAVY ARROW: try adding symbols

Or you can add the above codepoints to one of the subsets supported by the font: `latin`, `latin-ext`, `vietnamese` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + f

	- f + i

	- i + f

	- f + l

	- l + f

	- i + l

	- r + slash [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- NULL

	- eight.sinf

	- eight.subs

	- eight.sups

	- five.sinf

	- five.subs

	- five.sups

	- four.sinf

	- four.subs

	- four.sups

	- nine.sinf

	- nine.subs

	- nine.sups

	- one.sinf

	- one.subs

	- one.sups

	- seven.sinf

	- seven.subs

	- seven.sups

	- six.sinf

	- six.subs

	- six.sups

	- three.sinf

	- three.subs

	- three.sups

	- two.sinf

	- two.subs

	- two.sups

	- uni0250.ss02

	- uni0305.case

	- uni1E39.ss01

	- zero.sinf

	- zero.subs

	- zero.sups
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni01EA	Contours detected: 3	Expected: 2

	- Glyph name: uni01EB	Contours detected: 3	Expected: 2

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

	- Glyph name: arrowboth	Contours detected: 2	Expected: 1

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: arrowboth	Contours detected: 2	Expected: 1

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Check math signs have the same width. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/math_signs_width">com.google.fonts/check/math_signs_width</a>)</summary><div>


* ⚠ **WARN** The most common width is 1016 among a set of 6 math glyphs.
The following math glyphs have a different width, though:

Width = 1052:
greater, less

Width = 1010:
logicalnot

Width = 984:
multiply

Width = 1098:
approxequal

Width = 992:
greaterequal, lessequal
 [code: width-outliers]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* r (U+0072): X=744.0,Y=1062.0 (should be at x-height 1060?)

	* y (U+0079): X=496.0,Y=2.0 (should be at baseline 0?)

	* cent (U+00A2): X=478.0,Y=2.0 (should be at baseline 0?)

	* uni00B3 (U+00B3): X=613.5,Y=1473.0 (should be at cap-height 1474?)

	* yacute (U+00FD): X=496.0,Y=2.0 (should be at baseline 0?)

	* ydieresis (U+00FF): X=496.0,Y=2.0 (should be at baseline 0?)

	* ycircumflex (U+0177): X=496.0,Y=2.0 (should be at baseline 0?)

	* uni0233 (U+0233): X=496.0,Y=2.0 (should be at baseline 0?)

	* uni02BC (U+02BC): X=157.0,Y=1476.0 (should be at cap-height 1474?)

	* uni1E66 (U+1E66): X=491.5,Y=2070.0 (should be at ascender 2068?)

	* uni1E66 (U+1E66): X=676.0,Y=2070.0 (should be at ascender 2068?)

	* uni1E8F (U+1E8F): X=496.0,Y=2.0 (should be at baseline 0?)

	* ygrave (U+1EF3): X=496.0,Y=2.0 (should be at baseline 0?)

	* uni1EF5 (U+1EF5): X=496.0,Y=2.0 (should be at baseline 0?)

	* uni1EF7 (U+1EF7): X=496.0,Y=2.0 (should be at baseline 0?)

	* uni1EF9 (U+1EF9): X=496.0,Y=2.0 (should be at baseline 0?)

	* quoteright (U+2019): X=157.0,Y=1476.0 (should be at cap-height 1474?)

	* quotedblright (U+201D): X=157.0,Y=1476.0 (should be at cap-height 1474?)

	* quotedblright (U+201D): X=537.0,Y=1476.0 (should be at cap-height 1474?)

	* uni2042 (U+2042): X=188.0,Y=-2.0 (should be at baseline 0?)

	* uni2042 (U+2042): X=680.0,Y=-2.0 (should be at baseline 0?)

	* uni2042 (U+2042): X=1200.0,Y=-2.0 (should be at baseline 0?)

	* uni2042 (U+2042): X=1692.0,Y=-2.0 (should be at baseline 0?)

	* uni204E (U+204E): X=188.0,Y=-2.0 (should be at baseline 0?)

	* uni204E (U+204E): X=680.0,Y=-2.0 (should be at baseline 0?)

	* uni2051 (U+2051): X=188.0,Y=-2.0 (should be at baseline 0?)

	* uni2051 (U+2051): X=680.0,Y=-2.0 (should be at baseline 0?)

	* uni2080 (U+2080): X=690.0,Y=2.0 (should be at baseline 0?)

	* colonmonetary (U+20A1): X=934.0,Y=1473.0 (should be at cap-height 1474?)

	* uni2113 (U+2113): X=641.5,Y=1.5 (should be at baseline 0?)

	* u1F845 (U+1F845): X=820.0,Y=1472.0 (should be at cap-height 1474?)

	* u1F845 (U+1F845): X=920.0,Y=1472.0 (should be at cap-height 1474?)

	* u1F847 (U+1F847): X=820.0,Y=2.0 (should be at baseline 0?)

	* u1F847 (U+1F847): X=920.0,Y=2.0 (should be at baseline 0?)

	* u1F847 (U+1F847): X=820.0,Y=2.0 (should be at baseline 0?) [code: found-misalignments]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any semi-vertical or semi-horizontal lines? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_semi_vertical">com.google.fonts/check/outline_semi_vertical</a>)</summary><div>


* ⚠ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

	* uni20A6 (U+20A6): L<<410.0,1168.0>--<411.0,1016.0>>

	* uni20A6 (U+20A6): L<<413.0,876.0>--<414.0,750.0>>

	* uni2196 (U+2196): L<<274.0,823.0>--<278.0,246.0>>

	* uni2196 (U+2196): L<<946.0,914.0>--<371.0,918.0>>

	* uni2197 (U+2197): L<<1014.0,246.0>--<1018.0,823.0>>

	* uni2197 (U+2197): L<<921.0,918.0>--<346.0,914.0>>

	* uni2198 (U+2198): L<<1044.0,237.0>--<1040.0,814.0>>

	* uni2198 (U+2198): L<<372.0,146.0>--<947.0,142.0>>

	* uni2199 (U+2199): L<<252.0,814.0>--<248.0,237.0>>

	* uni2199 (U+2199): L<<345.0,142.0>--<920.0,146.0>> [code: found-semi-vertical]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ị̀ ị́ ị̂ ị̃ ị̄

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̏ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Igbo (Latn, 27,823,640 speakers), Navajo (Latn, 166,319 speakers), Ebira (Latn, 2,200,000 speakers), Dutch (Latn, 31,709,104 speakers), Ma’di (Latn, 584,000 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Dan (Latn, 1,099,244 speakers), Ejagham (Latn, 120,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Lugbara (Latn, 2,200,000 speakers), Kom (Latn, 360,685 speakers), Aghem (Latn, 38,843 speakers), Avokaya (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Koonzime (Latn, 40,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Nateni (Latn, 100,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[16] RedditSans-SemiBold.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check license file has good copyright string. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_copyright">com.google.fonts/check/license/OFL_copyright</a>)</summary><div>


* 🔥 **FAIL** First line in license file is:

"reddit sans"

which does not match the expected format, similar to:

"Copyright 2022 The Familyname Project Authors (git url)" [code: bad-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Check OFL body text is correct. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_body_text">com.google.fonts/check/license/OFL_body_text</a>)</summary><div>


* 🔥 **FAIL** The OFL.txt body text is incorrect. Please use https://github.com/googlefonts/Unified-Font-Repository/blob/main/OFL.txt as a template. You should only modify the first line. [code: incorrect-ofl-body-text]
</div></details><details><summary>🔥 <b>FAIL:</b> Check copyright namerecords match license file. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/name/license">com.google.fonts/check/name/license</a>)</summary><div>


* 🔥 **FAIL** License file OFL.txt exists but NameID 13 (LICENSE DESCRIPTION) value on platform 3 (WINDOWS) is not specified for that. Value was: "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://openfontlicense.org/" Must be changed to "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://scripts.sil.org/OFL" [code: wrong]
</div></details><details><summary>🔥 <b>FAIL:</b> Copyright notices match canonical pattern in fonts (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_copyright">com.google.fonts/check/font_copyright</a>)</summary><div>


* 🔥 **FAIL** Name Table entry: Copyright notices should match a pattern similar to: "Copyright 2019 The Familyname Project Authors (git url)"
But instead we have got:
"Copyright (c) 2020-2023, Reddit, Inc. (https://github.com/reddit/redditsans)" [code: bad-notice-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Do we have the latest version of FontBakery installed? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/fontbakery_version">com.google.fonts/check/fontbakery_version</a>)</summary><div>


* 🔥 **FAIL** Current FontBakery version is 0.10.2, while a newer 0.11.1 is already available. Please upgrade it with 'pip install -U fontbakery' [code: outdated-fontbakery]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check Google Fonts glyph coverage. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyph_coverage">com.google.fonts/check/glyph_coverage</a>)</summary><div>


* ⚠ **WARN** GF_Latin_Plus is almost fulfilled. Missing codepoints:

	- 0x20B4 (HRYVNIA SIGN)


	- 0x20B8 (TENGE SIGN)


	- 0x20AE (TUGRIK SIGN)


	- 0x2016 (DOUBLE VERTICAL LINE)


	- 0x0E3F (THAI CURRENCY SYMBOL BAHT)


	- 0x20BF (BITCOIN SIGN)


	- 0x20BE (LARI SIGN)


	- 0x20A8 (RUPEE SIGN)


	- 0x20AA (NEW SHEQEL SIGN)


	- 0x25CF (BLACK CIRCLE)


	- 0x25CB (WHITE CIRCLE)


	- 0x25E6 (WHITE BULLET)


	- 0x25AA (BLACK SMALL SQUARE)


	- 0x25AB (WHITE SMALL SQUARE)


	- 0x25B4 (BLACK UP-POINTING SMALL TRIANGLE)


	- 0x25B8 (BLACK RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BE (BLACK DOWN-POINTING SMALL TRIANGLE)


	- 0x25C2 (BLACK LEFT-POINTING SMALL TRIANGLE)


	- 0x25B5 (WHITE UP-POINTING SMALL TRIANGLE)


	- 0x25B9 (WHITE RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BF (WHITE DOWN-POINTING SMALL TRIANGLE)


	- 0x25C3 (WHITE LEFT-POINTING SMALL TRIANGLE)
 [code: missing-codepoints]
* ⚠ **WARN** GF_TransLatin_Arabic is almost fulfilled. Missing codepoints:

	- 0x1E34 (LATIN CAPITAL LETTER K WITH LINE BELOW)


	- 0x1E35 (LATIN SMALL LETTER K WITH LINE BELOW)


	- 0x1E96 (LATIN SMALL LETTER H WITH LINE BELOW)


	- 0x02BD (MODIFIER LETTER REVERSED COMMA)
 [code: missing-codepoints]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02B9 MODIFIER LETTER PRIME: not included in any glyphset definition
 * U+02BA MODIFIER LETTER DOUBLE PRIME: not included in any glyphset definition
 * U+02BE MODIFIER LETTER RIGHT HALF RING: not included in any glyphset definition
 * U+02BF MODIFIER LETTER LEFT HALF RING: not included in any glyphset definition
 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02C8 MODIFIER LETTER VERTICAL LINE: not included in any glyphset definition
 * U+02C9 MODIFIER LETTER MACRON: not included in any glyphset definition
 * U+02CA MODIFIER LETTER ACUTE ACCENT: not included in any glyphset definition
 * U+02CB MODIFIER LETTER GRAVE ACCENT: not included in any glyphset definition
 * U+02CC MODIFIER LETTER LOW VERTICAL LINE: not included in any glyphset definition
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, coptic, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, malayalam, tai-le, syriac, tifinagh, canadian-aboriginal, old-permic, math
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
 * U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition
 * U+0311 COMBINING INVERTED BREVE: try adding coptic
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+031B COMBINING HORN: not included in any glyphset definition
 * U+0324 COMBINING DIAERESIS BELOW: try adding one of: cherokee, syriac
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+032E COMBINING BREVE BELOW: try adding syriac
 * U+0331 COMBINING MACRON BELOW: try adding one of: gothic, caucasian-albanian, syriac, tifinagh, cherokee
 * U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition
 * U+035C COMBINING DOUBLE BREVE BELOW: not included in any glyphset definition
 * U+0361 COMBINING DOUBLE INVERTED BREVE: try adding coptic
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, yi, math
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+2010 HYPHEN: try adding one of: coptic, yi, cham, kaithi, kharoshthi, kayah-li, sundanese, syloti-nagri, sora-sompeng, lisu
 * U+2011 NON-BREAKING HYPHEN: try adding one of: syloti-nagri, yi
 * U+2012 FIGURE DASH: not included in any glyphset definition
 * U+2015 HORIZONTAL BAR: try adding adlam
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+203D INTERROBANG: not included in any glyphset definition
 * U+2042 ASTERISM: not included in any glyphset definition
 * U+204E LOW ASTERISK: not included in any glyphset definition
 * U+2051 TWO ASTERISKS ALIGNED VERTICALLY: not included in any glyphset definition
 * U+2052 COMMERCIAL MINUS SIGN: not included in any glyphset definition
 * U+2070 SUPERSCRIPT ZERO: not included in any glyphset definition
 * U+2075 SUPERSCRIPT FIVE: not included in any glyphset definition
 * U+2076 SUPERSCRIPT SIX: not included in any glyphset definition
 * U+2077 SUPERSCRIPT SEVEN: not included in any glyphset definition
 * U+2078 SUPERSCRIPT EIGHT: not included in any glyphset definition
 * U+2079 SUPERSCRIPT NINE: not included in any glyphset definition
 * U+2080 SUBSCRIPT ZERO: not included in any glyphset definition
 * U+2081 SUBSCRIPT ONE: not included in any glyphset definition
 * U+2082 SUBSCRIPT TWO: not included in any glyphset definition
 * U+2083 SUBSCRIPT THREE: not included in any glyphset definition
 * U+2084 SUBSCRIPT FOUR: not included in any glyphset definition
 * U+2085 SUBSCRIPT FIVE: not included in any glyphset definition
 * U+2086 SUBSCRIPT SIX: not included in any glyphset definition
 * U+2087 SUBSCRIPT SEVEN: not included in any glyphset definition
 * U+2088 SUBSCRIPT EIGHT: not included in any glyphset definition
 * U+2089 SUBSCRIPT NINE: not included in any glyphset definition
 * U+2116 NUMERO SIGN: try adding cyrillic
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+215B VULGAR FRACTION ONE EIGHTH: not included in any glyphset definition
 * U+215C VULGAR FRACTION THREE EIGHTHS: not included in any glyphset definition
 * U+215D VULGAR FRACTION FIVE EIGHTHS: not included in any glyphset definition
 * U+215E VULGAR FRACTION SEVEN EIGHTHS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: symbols, math
 * U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math
 * U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math
 * U+2195 UP DOWN ARROW: try adding one of: symbols, math
 * U+2196 NORTH WEST ARROW: try adding one of: symbols, math
 * U+2197 NORTH EAST ARROW: try adding one of: symbols, math
 * U+2198 SOUTH EAST ARROW: try adding one of: symbols, math
 * U+2199 SOUTH WEST ARROW: try adding one of: symbols, math
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+2219 BULLET OPERATOR: try adding one of: tai-tham, symbols, yi, math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+2310 REVERSED NOT SIGN: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: symbols, math
 * U+25CC DOTTED CIRCLE: try adding one of: mandaic, tibetan, balinese, ahom, limbu, hanunoo, kannada, bassa-vah, wancho, tirhuta, pahawh-hmong, hanifi-rohingya, kaithi, chakma, caucasian-albanian, mongolian, siddham, tamil, cham, tagalog, coptic, manichaean, lao, syloti-nagri, marchen, tai-viet, modi, psalter-pahlavi, osage, sharada, lepcha, sinhala, bengali, rejang, gunjala-gondi, miao, symbols, tai-le, oriya, brahmi, sundanese, gurmukhi, zanabazar-square, syriac, tagbanwa, myanmar, new-tai-lue, mahajani, math, grantha, dogra, batak, adlam, hebrew, buhid, masaram-gondi, thaana, javanese, kharoshthi, soyombo, gujarati, music, kayah-li, khojki, thai, bhaiksuki, khudawadi, khmer, newa, sogdian, meetei-mayek, mende-kikakui, malayalam, tifinagh, yi, elbasan, duployan, nko, takri, telugu, buginese, devanagari, phags-pa, old-permic
 * U+2605 BLACK STAR: try adding symbols
 * U+2606 WHITE STAR: try adding symbols
 * U+2661 WHITE HEART SUIT: try adding symbols
 * U+2665 BLACK HEART SUIT: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math
 * U+EA00 : not included in any glyphset definition
 * U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition
 * U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition
 * U+1F845 UPWARDS HEAVY ARROW: try adding symbols
 * U+1F847 DOWNWARDS HEAVY ARROW: try adding symbols

Or you can add the above codepoints to one of the subsets supported by the font: `latin`, `latin-ext`, `vietnamese` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + f

	- f + i

	- i + f

	- f + l

	- l + f

	- i + l

	- r + slash [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- NULL

	- eight.sinf

	- eight.subs

	- eight.sups

	- five.sinf

	- five.subs

	- five.sups

	- four.sinf

	- four.subs

	- four.sups

	- nine.sinf

	- nine.subs

	- nine.sups

	- one.sinf

	- one.subs

	- one.sups

	- seven.sinf

	- seven.subs

	- seven.sups

	- six.sinf

	- six.subs

	- six.sups

	- three.sinf

	- three.subs

	- three.sups

	- two.sinf

	- two.subs

	- two.sups

	- uni0250.ss02

	- uni0305.case

	- uni1E39.ss01

	- zero.sinf

	- zero.subs

	- zero.sups
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni01EA	Contours detected: 3	Expected: 2

	- Glyph name: uni01EB	Contours detected: 3	Expected: 2

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

	- Glyph name: arrowboth	Contours detected: 2	Expected: 1

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: arrowboth	Contours detected: 2	Expected: 1

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Check math signs have the same width. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/math_signs_width">com.google.fonts/check/math_signs_width</a>)</summary><div>


* ⚠ **WARN** The most common width is 1065 among a set of 6 math glyphs.
The following math glyphs have a different width, though:

Width = 1072:
greater, less

Width = 1059:
logicalnot

Width = 1022:
multiply

Width = 1138:
approxequal

Width = 1027:
greaterequal, lessequal
 [code: width-outliers]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* k (U+006B): X=779.0,Y=1068.0 (should be at x-height 1067?)

	* k (U+006B): X=1071.0,Y=1068.0 (should be at x-height 1067?)

	* l (U+006C): X=482.0,Y=2.0 (should be at baseline 0?)

	* r (U+0072): X=795.0,Y=1065.0 (should be at x-height 1067?)

	* braceleft (U+007B): X=187.0,Y=-2.0 (should be at baseline 0?)

	* braceright (U+007D): X=513.0,Y=-2.0 (should be at baseline 0?)

	* cent (U+00A2): X=480.0,Y=1.0 (should be at baseline 0?)

	* lacute (U+013A): X=482.0,Y=2.0 (should be at baseline 0?)

	* uni013C (U+013C): X=482.0,Y=2.0 (should be at baseline 0?)

	* lcaron (U+013E): X=482.0,Y=2.0 (should be at baseline 0?)

	* ldot (U+0140): X=482.0,Y=2.0 (should be at baseline 0?)

	* lslash (U+0142): X=624.0,Y=2.0 (should be at baseline 0?)

	* Uhorn (U+01AF): X=1517.0,Y=1474.5 (should be at cap-height 1474?)

	* uni01C9 (U+01C9): X=482.0,Y=2.0 (should be at baseline 0?)

	* uni02BC (U+02BC): X=375.5,Y=1474.5 (should be at cap-height 1474?)

	* uni1E37 (U+1E37): X=482.0,Y=2.0 (should be at baseline 0?)

	* uni1E3B (U+1E3B): X=482.0,Y=2.0 (should be at baseline 0?)

	* uni1E4E (U+1E4E): X=894.0,Y=2069.0 (should be at ascender 2068?)

	* uni1E4E (U+1E4E): X=1186.0,Y=2069.0 (should be at ascender 2068?)

	* uni1E4E (U+1E4E): X=434.0,Y=2069.0 (should be at ascender 2068?)

	* uni1E4E (U+1E4E): X=727.0,Y=2069.0 (should be at ascender 2068?)

	* uni1E9E (U+1E9E): X=623.0,Y=1.0 (should be at baseline 0?)

	* uni1EE8 (U+1EE8): X=1517.0,Y=1474.5 (should be at cap-height 1474?)

	* uni1EEA (U+1EEA): X=1517.0,Y=1474.5 (should be at cap-height 1474?)

	* uni1EEC (U+1EEC): X=1517.0,Y=1474.5 (should be at cap-height 1474?)

	* uni1EEE (U+1EEE): X=1517.0,Y=1474.5 (should be at cap-height 1474?)

	* uni1EF0 (U+1EF0): X=1517.0,Y=1474.5 (should be at cap-height 1474?)

	* quoteright (U+2019): X=375.5,Y=1474.5 (should be at cap-height 1474?)

	* quotedblright (U+201D): X=375.5,Y=1474.5 (should be at cap-height 1474?)

	* quotedblright (U+201D): X=798.5,Y=1474.5 (should be at cap-height 1474?)

	* uni2042 (U+2042): X=370.5,Y=2.0 (should be at baseline 0?)

	* uni2042 (U+2042): X=206.0,Y=2.0 (should be at baseline 0?)

	* uni2042 (U+2042): X=665.0,Y=2.0 (should be at baseline 0?)

	* uni2042 (U+2042): X=1370.5,Y=2.0 (should be at baseline 0?)

	* uni2042 (U+2042): X=1206.0,Y=2.0 (should be at baseline 0?)

	* uni2042 (U+2042): X=1665.0,Y=2.0 (should be at baseline 0?)

	* uni204E (U+204E): X=370.5,Y=2.0 (should be at baseline 0?)

	* uni204E (U+204E): X=206.0,Y=2.0 (should be at baseline 0?)

	* uni204E (U+204E): X=665.0,Y=2.0 (should be at baseline 0?)

	* uni2051 (U+2051): X=370.5,Y=2.0 (should be at baseline 0?)

	* uni2051 (U+2051): X=206.0,Y=2.0 (should be at baseline 0?)

	* uni2051 (U+2051): X=665.0,Y=2.0 (should be at baseline 0?)

	* uni2078 (U+2078): X=157.5,Y=1473.0 (should be at cap-height 1474?)

	* uni2078 (U+2078): X=670.5,Y=1473.0 (should be at cap-height 1474?)

	* uni2083 (U+2083): X=489.5,Y=1.5 (should be at baseline 0?)

	* colonmonetary (U+20A1): X=917.0,Y=1476.0 (should be at cap-height 1474?)

	* uni2113 (U+2113): X=685.0,Y=0.5 (should be at baseline 0?)

	* uni2198 (U+2198): X=1185.0,Y=-1.0 (should be at baseline 0?)

	* uni2198 (U+2198): X=355.0,Y=-1.0 (should be at baseline 0?)

	* uni2199 (U+2199): X=939.0,Y=-1.0 (should be at baseline 0?)

	* uni2199 (U+2199): X=109.0,Y=-1.0 (should be at baseline 0?)

	* u1F845 (U+1F845): X=824.0,Y=1472.0 (should be at cap-height 1474?)

	* u1F845 (U+1F845): X=924.0,Y=1472.0 (should be at cap-height 1474?)

	* u1F847 (U+1F847): X=824.0,Y=2.0 (should be at baseline 0?)

	* u1F847 (U+1F847): X=924.0,Y=2.0 (should be at baseline 0?)

	* u1F847 (U+1F847): X=824.0,Y=2.0 (should be at baseline 0?) [code: found-misalignments]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any semi-vertical or semi-horizontal lines? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_semi_vertical">com.google.fonts/check/outline_semi_vertical</a>)</summary><div>


* ⚠ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

	* three (U+0033): L<<76.0,417.0>--<319.0,419.0>>

	* uni203D (U+203D): L<<254.0,1108.0>--<54.0,1107.0>>

	* uni203D (U+203D): L<<570.0,1141.0>--<569.0,931.0>>

	* uni20B2 (U+20B2): L<<750.0,812.0>--<1295.0,814.0>> [code: found-semi-vertical]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ị̀ ị́ ị̂ ị̃ ị̄

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̏ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Igbo (Latn, 27,823,640 speakers), Navajo (Latn, 166,319 speakers), Ebira (Latn, 2,200,000 speakers), Dutch (Latn, 31,709,104 speakers), Ma’di (Latn, 584,000 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Dan (Latn, 1,099,244 speakers), Ejagham (Latn, 120,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Lugbara (Latn, 2,200,000 speakers), Kom (Latn, 360,685 speakers), Aghem (Latn, 38,843 speakers), Avokaya (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Koonzime (Latn, 40,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Nateni (Latn, 100,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[15] RedditSans-MediumItalic.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check license file has good copyright string. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_copyright">com.google.fonts/check/license/OFL_copyright</a>)</summary><div>


* 🔥 **FAIL** First line in license file is:

"reddit sans"

which does not match the expected format, similar to:

"Copyright 2022 The Familyname Project Authors (git url)" [code: bad-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Check OFL body text is correct. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_body_text">com.google.fonts/check/license/OFL_body_text</a>)</summary><div>


* 🔥 **FAIL** The OFL.txt body text is incorrect. Please use https://github.com/googlefonts/Unified-Font-Repository/blob/main/OFL.txt as a template. You should only modify the first line. [code: incorrect-ofl-body-text]
</div></details><details><summary>🔥 <b>FAIL:</b> Check copyright namerecords match license file. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/name/license">com.google.fonts/check/name/license</a>)</summary><div>


* 🔥 **FAIL** License file OFL.txt exists but NameID 13 (LICENSE DESCRIPTION) value on platform 3 (WINDOWS) is not specified for that. Value was: "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://openfontlicense.org/" Must be changed to "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://scripts.sil.org/OFL" [code: wrong]
</div></details><details><summary>🔥 <b>FAIL:</b> Copyright notices match canonical pattern in fonts (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_copyright">com.google.fonts/check/font_copyright</a>)</summary><div>


* 🔥 **FAIL** Name Table entry: Copyright notices should match a pattern similar to: "Copyright 2019 The Familyname Project Authors (git url)"
But instead we have got:
"Copyright (c) 2020-2023, Reddit, Inc. (https://github.com/reddit/redditsans)" [code: bad-notice-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Do we have the latest version of FontBakery installed? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/fontbakery_version">com.google.fonts/check/fontbakery_version</a>)</summary><div>


* 🔥 **FAIL** Current FontBakery version is 0.10.2, while a newer 0.11.1 is already available. Please upgrade it with 'pip install -U fontbakery' [code: outdated-fontbakery]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check Google Fonts glyph coverage. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyph_coverage">com.google.fonts/check/glyph_coverage</a>)</summary><div>


* ⚠ **WARN** GF_Latin_Plus is almost fulfilled. Missing codepoints:

	- 0x20B4 (HRYVNIA SIGN)


	- 0x20B8 (TENGE SIGN)


	- 0x20AE (TUGRIK SIGN)


	- 0x2016 (DOUBLE VERTICAL LINE)


	- 0x0E3F (THAI CURRENCY SYMBOL BAHT)


	- 0x20BF (BITCOIN SIGN)


	- 0x20BE (LARI SIGN)


	- 0x20A8 (RUPEE SIGN)


	- 0x20AA (NEW SHEQEL SIGN)


	- 0x25CF (BLACK CIRCLE)


	- 0x25CB (WHITE CIRCLE)


	- 0x25E6 (WHITE BULLET)


	- 0x25AA (BLACK SMALL SQUARE)


	- 0x25AB (WHITE SMALL SQUARE)


	- 0x25B4 (BLACK UP-POINTING SMALL TRIANGLE)


	- 0x25B8 (BLACK RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BE (BLACK DOWN-POINTING SMALL TRIANGLE)


	- 0x25C2 (BLACK LEFT-POINTING SMALL TRIANGLE)


	- 0x25B5 (WHITE UP-POINTING SMALL TRIANGLE)


	- 0x25B9 (WHITE RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BF (WHITE DOWN-POINTING SMALL TRIANGLE)


	- 0x25C3 (WHITE LEFT-POINTING SMALL TRIANGLE)
 [code: missing-codepoints]
* ⚠ **WARN** GF_TransLatin_Arabic is almost fulfilled. Missing codepoints:

	- 0x1E34 (LATIN CAPITAL LETTER K WITH LINE BELOW)


	- 0x1E35 (LATIN SMALL LETTER K WITH LINE BELOW)


	- 0x1E96 (LATIN SMALL LETTER H WITH LINE BELOW)


	- 0x02BD (MODIFIER LETTER REVERSED COMMA)
 [code: missing-codepoints]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02B9 MODIFIER LETTER PRIME: not included in any glyphset definition
 * U+02BA MODIFIER LETTER DOUBLE PRIME: not included in any glyphset definition
 * U+02BE MODIFIER LETTER RIGHT HALF RING: not included in any glyphset definition
 * U+02BF MODIFIER LETTER LEFT HALF RING: not included in any glyphset definition
 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02C8 MODIFIER LETTER VERTICAL LINE: not included in any glyphset definition
 * U+02C9 MODIFIER LETTER MACRON: not included in any glyphset definition
 * U+02CA MODIFIER LETTER ACUTE ACCENT: not included in any glyphset definition
 * U+02CB MODIFIER LETTER GRAVE ACCENT: not included in any glyphset definition
 * U+02CC MODIFIER LETTER LOW VERTICAL LINE: not included in any glyphset definition
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, coptic, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, malayalam, tai-le, syriac, tifinagh, canadian-aboriginal, old-permic, math
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
 * U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition
 * U+0311 COMBINING INVERTED BREVE: try adding coptic
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+031B COMBINING HORN: not included in any glyphset definition
 * U+0324 COMBINING DIAERESIS BELOW: try adding one of: cherokee, syriac
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+032E COMBINING BREVE BELOW: try adding syriac
 * U+0331 COMBINING MACRON BELOW: try adding one of: gothic, caucasian-albanian, syriac, tifinagh, cherokee
 * U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition
 * U+035C COMBINING DOUBLE BREVE BELOW: not included in any glyphset definition
 * U+0361 COMBINING DOUBLE INVERTED BREVE: try adding coptic
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, yi, math
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+2010 HYPHEN: try adding one of: coptic, yi, cham, kaithi, kharoshthi, kayah-li, sundanese, syloti-nagri, sora-sompeng, lisu
 * U+2011 NON-BREAKING HYPHEN: try adding one of: syloti-nagri, yi
 * U+2012 FIGURE DASH: not included in any glyphset definition
 * U+2015 HORIZONTAL BAR: try adding adlam
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+203D INTERROBANG: not included in any glyphset definition
 * U+2042 ASTERISM: not included in any glyphset definition
 * U+204E LOW ASTERISK: not included in any glyphset definition
 * U+2051 TWO ASTERISKS ALIGNED VERTICALLY: not included in any glyphset definition
 * U+2052 COMMERCIAL MINUS SIGN: not included in any glyphset definition
 * U+2070 SUPERSCRIPT ZERO: not included in any glyphset definition
 * U+2075 SUPERSCRIPT FIVE: not included in any glyphset definition
 * U+2076 SUPERSCRIPT SIX: not included in any glyphset definition
 * U+2077 SUPERSCRIPT SEVEN: not included in any glyphset definition
 * U+2078 SUPERSCRIPT EIGHT: not included in any glyphset definition
 * U+2079 SUPERSCRIPT NINE: not included in any glyphset definition
 * U+2080 SUBSCRIPT ZERO: not included in any glyphset definition
 * U+2081 SUBSCRIPT ONE: not included in any glyphset definition
 * U+2082 SUBSCRIPT TWO: not included in any glyphset definition
 * U+2083 SUBSCRIPT THREE: not included in any glyphset definition
 * U+2084 SUBSCRIPT FOUR: not included in any glyphset definition
 * U+2085 SUBSCRIPT FIVE: not included in any glyphset definition
 * U+2086 SUBSCRIPT SIX: not included in any glyphset definition
 * U+2087 SUBSCRIPT SEVEN: not included in any glyphset definition
 * U+2088 SUBSCRIPT EIGHT: not included in any glyphset definition
 * U+2089 SUBSCRIPT NINE: not included in any glyphset definition
 * U+2116 NUMERO SIGN: try adding cyrillic
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+215B VULGAR FRACTION ONE EIGHTH: not included in any glyphset definition
 * U+215C VULGAR FRACTION THREE EIGHTHS: not included in any glyphset definition
 * U+215D VULGAR FRACTION FIVE EIGHTHS: not included in any glyphset definition
 * U+215E VULGAR FRACTION SEVEN EIGHTHS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: symbols, math
 * U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math
 * U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math
 * U+2195 UP DOWN ARROW: try adding one of: symbols, math
 * U+2196 NORTH WEST ARROW: try adding one of: symbols, math
 * U+2197 NORTH EAST ARROW: try adding one of: symbols, math
 * U+2198 SOUTH EAST ARROW: try adding one of: symbols, math
 * U+2199 SOUTH WEST ARROW: try adding one of: symbols, math
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+2219 BULLET OPERATOR: try adding one of: tai-tham, symbols, yi, math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+2310 REVERSED NOT SIGN: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: symbols, math
 * U+25CC DOTTED CIRCLE: try adding one of: mandaic, tibetan, balinese, ahom, limbu, hanunoo, kannada, bassa-vah, wancho, tirhuta, pahawh-hmong, hanifi-rohingya, kaithi, chakma, caucasian-albanian, mongolian, siddham, tamil, cham, tagalog, coptic, manichaean, lao, syloti-nagri, marchen, tai-viet, modi, psalter-pahlavi, osage, sharada, lepcha, sinhala, bengali, rejang, gunjala-gondi, miao, symbols, tai-le, oriya, brahmi, sundanese, gurmukhi, zanabazar-square, syriac, tagbanwa, myanmar, new-tai-lue, mahajani, math, grantha, dogra, batak, adlam, hebrew, buhid, masaram-gondi, thaana, javanese, kharoshthi, soyombo, gujarati, music, kayah-li, khojki, thai, bhaiksuki, khudawadi, khmer, newa, sogdian, meetei-mayek, mende-kikakui, malayalam, tifinagh, yi, elbasan, duployan, nko, takri, telugu, buginese, devanagari, phags-pa, old-permic
 * U+2605 BLACK STAR: try adding symbols
 * U+2606 WHITE STAR: try adding symbols
 * U+2661 WHITE HEART SUIT: try adding symbols
 * U+2665 BLACK HEART SUIT: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math
 * U+EA00 : not included in any glyphset definition
 * U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition
 * U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition
 * U+1F845 UPWARDS HEAVY ARROW: try adding symbols
 * U+1F847 DOWNWARDS HEAVY ARROW: try adding symbols

Or you can add the above codepoints to one of the subsets supported by the font: `latin`, `latin-ext`, `vietnamese` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + f

	- f + i

	- i + f

	- f + l

	- l + f

	- i + l

	- r + slash [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- NULL

	- arrowboth.case

	- arrowdown.case

	- arrowleft.case

	- arrowright.case

	- arrowup.case

	- arrowupdn.case

	- eight.sinf

	- eight.subs

	- eight.sups

	- five.sinf

	- five.subs

	- five.sups

	- four.sinf

	- four.subs

	- four.sups

	- nine.sinf

	- nine.subs

	- nine.sups

	- one.sinf

	- one.subs

	- one.sups

	- seven.sinf

	- seven.subs

	- seven.sups

	- six.sinf

	- six.subs

	- six.sups

	- three.sinf

	- three.subs

	- three.sups

	- two.sinf

	- two.subs

	- two.sups

	- uni0305.case

	- uni1E39.ss01

	- uni2196.case

	- uni2197.case

	- uni2198.case

	- uni2199.case

	- zero.sinf

	- zero.subs

	- zero.sups
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni01EA	Contours detected: 3	Expected: 2

	- Glyph name: uni01EB	Contours detected: 3	Expected: 2

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Check math signs have the same width. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/math_signs_width">com.google.fonts/check/math_signs_width</a>)</summary><div>


* ⚠ **WARN** The most common width is 1076 among a set of 4 math glyphs.
The following math glyphs have a different width, though:

Width = 1068:
plus

Width = 1110:
logicalnot

Width = 1078:
plusminus

Width = 1034:
multiply

Width = 1066:
divide, minus

Width = 1157:
approxequal

Width = 1030:
greaterequal, lessequal
 [code: width-outliers]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* nine (U+0039): X=474.0,Y=1.0 (should be at baseline 0?)

	* nine (U+0039): X=219.0,Y=1.0 (should be at baseline 0?)

	* K (U+004B): X=572.0,Y=1472.0 (should be at cap-height 1474?)

	* braceleft (U+007B): X=89.0,Y=-2.0 (should be at baseline 0?)

	* braceright (U+007D): X=455.5,Y=1476.0 (should be at cap-height 1474?)

	* ordfeminine (U+00AA): X=726.0,Y=1475.0 (should be at cap-height 1474?)

	* ordfeminine (U+00AA): X=854.0,Y=1475.0 (should be at cap-height 1474?)

	* uni00B3 (U+00B3): X=826.0,Y=1472.5 (should be at cap-height 1474?)

	* atilde (U+00E3): X=1129.0,Y=1475.0 (should be at cap-height 1474?)

	* ntilde (U+00F1): X=1125.0,Y=1475.0 (should be at cap-height 1474?)

	* otilde (U+00F5): X=1100.0,Y=1475.0 (should be at cap-height 1474?)

	* itilde (U+0129): X=797.0,Y=1475.0 (should be at cap-height 1474?)

	* uni0136 (U+0136): X=572.0,Y=1472.0 (should be at cap-height 1474?)

	* utilde (U+0169): X=1097.0,Y=1475.0 (should be at cap-height 1474?)

	* Ohorn (U+01A0): X=1366.5,Y=1472.5 (should be at cap-height 1474?)

	* uni022D (U+022D): X=1100.0,Y=1475.0 (should be at cap-height 1474?)

	* tilde (U+02DC): X=981.0,Y=1475.0 (should be at cap-height 1474?)

	* tildecomb (U+0303): X=981.0,Y=1475.0 (should be at cap-height 1474?)

	* uni1E4D (U+1E4D): X=1100.0,Y=1475.0 (should be at cap-height 1474?)

	* uni1E4F (U+1E4F): X=1100.0,Y=1475.0 (should be at cap-height 1474?)

	* uni1E79 (U+1E79): X=1097.0,Y=1475.0 (should be at cap-height 1474?)

	* uni1EA6 (U+1EA6): X=413.0,Y=2067.0 (should be at ascender 2068?)

	* uni1EBD (U+1EBD): X=1102.0,Y=1475.0 (should be at cap-height 1474?)

	* uni1EC0 (U+1EC0): X=279.0,Y=2067.0 (should be at ascender 2068?)

	* uni1ED2 (U+1ED2): X=468.0,Y=2067.0 (should be at ascender 2068?)

	* uni1EDA (U+1EDA): X=1366.5,Y=1472.5 (should be at cap-height 1474?)

	* uni1EDC (U+1EDC): X=1366.5,Y=1472.5 (should be at cap-height 1474?)

	* uni1EDE (U+1EDE): X=1366.5,Y=1472.5 (should be at cap-height 1474?)

	* uni1EE0 (U+1EE0): X=1366.5,Y=1472.5 (should be at cap-height 1474?)

	* uni1EE1 (U+1EE1): X=1100.0,Y=1475.0 (should be at cap-height 1474?)

	* uni1EE2 (U+1EE2): X=1366.5,Y=1472.5 (should be at cap-height 1474?)

	* uni1EEF (U+1EEF): X=1097.0,Y=1475.0 (should be at cap-height 1474?)

	* uni1EF9 (U+1EF9): X=1120.0,Y=1475.0 (should be at cap-height 1474?)

	* uni2078 (U+2078): X=520.0,Y=1475.5 (should be at cap-height 1474?)

	* uni2113 (U+2113): X=523.0,Y=0.5 (should be at baseline 0?) [code: found-misalignments]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ị̀ ị́ ị̂ ị̃ ị̄

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̏ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Igbo (Latn, 27,823,640 speakers), Navajo (Latn, 166,319 speakers), Ebira (Latn, 2,200,000 speakers), Dutch (Latn, 31,709,104 speakers), Ma’di (Latn, 584,000 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Dan (Latn, 1,099,244 speakers), Ejagham (Latn, 120,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Lugbara (Latn, 2,200,000 speakers), Kom (Latn, 360,685 speakers), Aghem (Latn, 38,843 speakers), Avokaya (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Koonzime (Latn, 40,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Nateni (Latn, 100,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[15] RedditSans-Italic.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check license file has good copyright string. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_copyright">com.google.fonts/check/license/OFL_copyright</a>)</summary><div>


* 🔥 **FAIL** First line in license file is:

"reddit sans"

which does not match the expected format, similar to:

"Copyright 2022 The Familyname Project Authors (git url)" [code: bad-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Check OFL body text is correct. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_body_text">com.google.fonts/check/license/OFL_body_text</a>)</summary><div>


* 🔥 **FAIL** The OFL.txt body text is incorrect. Please use https://github.com/googlefonts/Unified-Font-Repository/blob/main/OFL.txt as a template. You should only modify the first line. [code: incorrect-ofl-body-text]
</div></details><details><summary>🔥 <b>FAIL:</b> Check copyright namerecords match license file. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/name/license">com.google.fonts/check/name/license</a>)</summary><div>


* 🔥 **FAIL** License file OFL.txt exists but NameID 13 (LICENSE DESCRIPTION) value on platform 3 (WINDOWS) is not specified for that. Value was: "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://openfontlicense.org/" Must be changed to "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://scripts.sil.org/OFL" [code: wrong]
</div></details><details><summary>🔥 <b>FAIL:</b> Copyright notices match canonical pattern in fonts (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_copyright">com.google.fonts/check/font_copyright</a>)</summary><div>


* 🔥 **FAIL** Name Table entry: Copyright notices should match a pattern similar to: "Copyright 2019 The Familyname Project Authors (git url)"
But instead we have got:
"Copyright (c) 2020-2023, Reddit, Inc. (https://github.com/reddit/redditsans)" [code: bad-notice-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Do we have the latest version of FontBakery installed? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/fontbakery_version">com.google.fonts/check/fontbakery_version</a>)</summary><div>


* 🔥 **FAIL** Current FontBakery version is 0.10.2, while a newer 0.11.1 is already available. Please upgrade it with 'pip install -U fontbakery' [code: outdated-fontbakery]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check Google Fonts glyph coverage. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyph_coverage">com.google.fonts/check/glyph_coverage</a>)</summary><div>


* ⚠ **WARN** GF_Latin_Plus is almost fulfilled. Missing codepoints:

	- 0x20B4 (HRYVNIA SIGN)


	- 0x20B8 (TENGE SIGN)


	- 0x20AE (TUGRIK SIGN)


	- 0x2016 (DOUBLE VERTICAL LINE)


	- 0x0E3F (THAI CURRENCY SYMBOL BAHT)


	- 0x20BF (BITCOIN SIGN)


	- 0x20BE (LARI SIGN)


	- 0x20A8 (RUPEE SIGN)


	- 0x20AA (NEW SHEQEL SIGN)


	- 0x25CF (BLACK CIRCLE)


	- 0x25CB (WHITE CIRCLE)


	- 0x25E6 (WHITE BULLET)


	- 0x25AA (BLACK SMALL SQUARE)


	- 0x25AB (WHITE SMALL SQUARE)


	- 0x25B4 (BLACK UP-POINTING SMALL TRIANGLE)


	- 0x25B8 (BLACK RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BE (BLACK DOWN-POINTING SMALL TRIANGLE)


	- 0x25C2 (BLACK LEFT-POINTING SMALL TRIANGLE)


	- 0x25B5 (WHITE UP-POINTING SMALL TRIANGLE)


	- 0x25B9 (WHITE RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BF (WHITE DOWN-POINTING SMALL TRIANGLE)


	- 0x25C3 (WHITE LEFT-POINTING SMALL TRIANGLE)
 [code: missing-codepoints]
* ⚠ **WARN** GF_TransLatin_Arabic is almost fulfilled. Missing codepoints:

	- 0x1E34 (LATIN CAPITAL LETTER K WITH LINE BELOW)


	- 0x1E35 (LATIN SMALL LETTER K WITH LINE BELOW)


	- 0x1E96 (LATIN SMALL LETTER H WITH LINE BELOW)


	- 0x02BD (MODIFIER LETTER REVERSED COMMA)
 [code: missing-codepoints]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02B9 MODIFIER LETTER PRIME: not included in any glyphset definition
 * U+02BA MODIFIER LETTER DOUBLE PRIME: not included in any glyphset definition
 * U+02BE MODIFIER LETTER RIGHT HALF RING: not included in any glyphset definition
 * U+02BF MODIFIER LETTER LEFT HALF RING: not included in any glyphset definition
 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02C8 MODIFIER LETTER VERTICAL LINE: not included in any glyphset definition
 * U+02C9 MODIFIER LETTER MACRON: not included in any glyphset definition
 * U+02CA MODIFIER LETTER ACUTE ACCENT: not included in any glyphset definition
 * U+02CB MODIFIER LETTER GRAVE ACCENT: not included in any glyphset definition
 * U+02CC MODIFIER LETTER LOW VERTICAL LINE: not included in any glyphset definition
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, coptic, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, malayalam, tai-le, syriac, tifinagh, canadian-aboriginal, old-permic, math
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
 * U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition
 * U+0311 COMBINING INVERTED BREVE: try adding coptic
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+031B COMBINING HORN: not included in any glyphset definition
 * U+0324 COMBINING DIAERESIS BELOW: try adding one of: cherokee, syriac
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+032E COMBINING BREVE BELOW: try adding syriac
 * U+0331 COMBINING MACRON BELOW: try adding one of: gothic, caucasian-albanian, syriac, tifinagh, cherokee
 * U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition
 * U+035C COMBINING DOUBLE BREVE BELOW: not included in any glyphset definition
 * U+0361 COMBINING DOUBLE INVERTED BREVE: try adding coptic
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, yi, math
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+2010 HYPHEN: try adding one of: coptic, yi, cham, kaithi, kharoshthi, kayah-li, sundanese, syloti-nagri, sora-sompeng, lisu
 * U+2011 NON-BREAKING HYPHEN: try adding one of: syloti-nagri, yi
 * U+2012 FIGURE DASH: not included in any glyphset definition
 * U+2015 HORIZONTAL BAR: try adding adlam
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+203D INTERROBANG: not included in any glyphset definition
 * U+2042 ASTERISM: not included in any glyphset definition
 * U+204E LOW ASTERISK: not included in any glyphset definition
 * U+2051 TWO ASTERISKS ALIGNED VERTICALLY: not included in any glyphset definition
 * U+2052 COMMERCIAL MINUS SIGN: not included in any glyphset definition
 * U+2070 SUPERSCRIPT ZERO: not included in any glyphset definition
 * U+2075 SUPERSCRIPT FIVE: not included in any glyphset definition
 * U+2076 SUPERSCRIPT SIX: not included in any glyphset definition
 * U+2077 SUPERSCRIPT SEVEN: not included in any glyphset definition
 * U+2078 SUPERSCRIPT EIGHT: not included in any glyphset definition
 * U+2079 SUPERSCRIPT NINE: not included in any glyphset definition
 * U+2080 SUBSCRIPT ZERO: not included in any glyphset definition
 * U+2081 SUBSCRIPT ONE: not included in any glyphset definition
 * U+2082 SUBSCRIPT TWO: not included in any glyphset definition
 * U+2083 SUBSCRIPT THREE: not included in any glyphset definition
 * U+2084 SUBSCRIPT FOUR: not included in any glyphset definition
 * U+2085 SUBSCRIPT FIVE: not included in any glyphset definition
 * U+2086 SUBSCRIPT SIX: not included in any glyphset definition
 * U+2087 SUBSCRIPT SEVEN: not included in any glyphset definition
 * U+2088 SUBSCRIPT EIGHT: not included in any glyphset definition
 * U+2089 SUBSCRIPT NINE: not included in any glyphset definition
 * U+2116 NUMERO SIGN: try adding cyrillic
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+215B VULGAR FRACTION ONE EIGHTH: not included in any glyphset definition
 * U+215C VULGAR FRACTION THREE EIGHTHS: not included in any glyphset definition
 * U+215D VULGAR FRACTION FIVE EIGHTHS: not included in any glyphset definition
 * U+215E VULGAR FRACTION SEVEN EIGHTHS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: symbols, math
 * U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math
 * U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math
 * U+2195 UP DOWN ARROW: try adding one of: symbols, math
 * U+2196 NORTH WEST ARROW: try adding one of: symbols, math
 * U+2197 NORTH EAST ARROW: try adding one of: symbols, math
 * U+2198 SOUTH EAST ARROW: try adding one of: symbols, math
 * U+2199 SOUTH WEST ARROW: try adding one of: symbols, math
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+2219 BULLET OPERATOR: try adding one of: tai-tham, symbols, yi, math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+2310 REVERSED NOT SIGN: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: symbols, math
 * U+25CC DOTTED CIRCLE: try adding one of: mandaic, tibetan, balinese, ahom, limbu, hanunoo, kannada, bassa-vah, wancho, tirhuta, pahawh-hmong, hanifi-rohingya, kaithi, chakma, caucasian-albanian, mongolian, siddham, tamil, cham, tagalog, coptic, manichaean, lao, syloti-nagri, marchen, tai-viet, modi, psalter-pahlavi, osage, sharada, lepcha, sinhala, bengali, rejang, gunjala-gondi, miao, symbols, tai-le, oriya, brahmi, sundanese, gurmukhi, zanabazar-square, syriac, tagbanwa, myanmar, new-tai-lue, mahajani, math, grantha, dogra, batak, adlam, hebrew, buhid, masaram-gondi, thaana, javanese, kharoshthi, soyombo, gujarati, music, kayah-li, khojki, thai, bhaiksuki, khudawadi, khmer, newa, sogdian, meetei-mayek, mende-kikakui, malayalam, tifinagh, yi, elbasan, duployan, nko, takri, telugu, buginese, devanagari, phags-pa, old-permic
 * U+2605 BLACK STAR: try adding symbols
 * U+2606 WHITE STAR: try adding symbols
 * U+2661 WHITE HEART SUIT: try adding symbols
 * U+2665 BLACK HEART SUIT: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math
 * U+EA00 : not included in any glyphset definition
 * U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition
 * U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition
 * U+1F845 UPWARDS HEAVY ARROW: try adding symbols
 * U+1F847 DOWNWARDS HEAVY ARROW: try adding symbols

Or you can add the above codepoints to one of the subsets supported by the font: `latin`, `latin-ext`, `vietnamese` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + f

	- f + i

	- i + f

	- f + l

	- l + f

	- i + l

	- r + slash [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- NULL

	- arrowboth.case

	- arrowdown.case

	- arrowleft.case

	- arrowright.case

	- arrowup.case

	- arrowupdn.case

	- eight.sinf

	- eight.subs

	- eight.sups

	- five.sinf

	- five.subs

	- five.sups

	- four.sinf

	- four.subs

	- four.sups

	- nine.sinf

	- nine.subs

	- nine.sups

	- one.sinf

	- one.subs

	- one.sups

	- seven.sinf

	- seven.subs

	- seven.sups

	- six.sinf

	- six.subs

	- six.sups

	- three.sinf

	- three.subs

	- three.sups

	- two.sinf

	- two.subs

	- two.sups

	- uni0305.case

	- uni1E39.ss01

	- uni2196.case

	- uni2197.case

	- uni2198.case

	- uni2199.case

	- zero.sinf

	- zero.subs

	- zero.sups
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni01EA	Contours detected: 3	Expected: 2

	- Glyph name: uni01EB	Contours detected: 3	Expected: 2

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Check math signs have the same width. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/math_signs_width">com.google.fonts/check/math_signs_width</a>)</summary><div>


* ⚠ **WARN** The most common width is 1061 among a set of 2 math glyphs.
The following math glyphs have a different width, though:

Width = 1044:
plus

Width = 1051:
notequal, equal

Width = 1090:
logicalnot

Width = 1056:
plusminus

Width = 1014:
multiply

Width = 1042:
divide, minus

Width = 1137:
approxequal

Width = 1016:
greaterequal, lessequal
 [code: width-outliers]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* dollar (U+0024): X=363.0,Y=-1.0 (should be at baseline 0?)

	* asterisk (U+002A): X=290.5,Y=1476.0 (should be at cap-height 1474?)

	* nine (U+0039): X=455.0,Y=1.0 (should be at baseline 0?)

	* nine (U+0039): X=234.0,Y=1.0 (should be at baseline 0?)

	* at (U+0040): X=1370.0,Y=-2.0 (should be at baseline 0?)

	* K (U+004B): X=545.0,Y=1472.0 (should be at cap-height 1474?)

	* uni00B3 (U+00B3): X=816.0,Y=1475.5 (should be at cap-height 1474?)

	* uni0136 (U+0136): X=545.0,Y=1472.0 (should be at cap-height 1474?)

	* florin (U+0192): X=1113.0,Y=1475.5 (should be at cap-height 1474?)

	* Ohorn (U+01A0): X=1366.0,Y=1472.0 (should be at cap-height 1474?)

	* uni1EAF (U+1EAF): X=622.0,Y=1473.0 (should be at cap-height 1474?)

	* uni1EDA (U+1EDA): X=1366.0,Y=1472.0 (should be at cap-height 1474?)

	* uni1EDC (U+1EDC): X=1366.0,Y=1472.0 (should be at cap-height 1474?)

	* uni1EDE (U+1EDE): X=1366.0,Y=1472.0 (should be at cap-height 1474?)

	* uni1EE0 (U+1EE0): X=1366.0,Y=1472.0 (should be at cap-height 1474?)

	* uni1EE2 (U+1EE2): X=1366.0,Y=1472.0 (should be at cap-height 1474?)

	* uni2042 (U+2042): X=751.5,Y=1476.0 (should be at cap-height 1474?)

	* uni2051 (U+2051): X=292.5,Y=1476.0 (should be at cap-height 1474?)

	* uni2078 (U+2078): X=515.0,Y=1475.5 (should be at cap-height 1474?)

	* uni2085 (U+2085): X=-16.0,Y=2.0 (should be at baseline 0?)

	* colonmonetary (U+20A1): X=1120.0,Y=1473.0 (should be at cap-height 1474?)

	* uni2113 (U+2113): X=499.5,Y=1.0 (should be at baseline 0?) [code: found-misalignments]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ị̀ ị́ ị̂ ị̃ ị̄

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̏ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Igbo (Latn, 27,823,640 speakers), Navajo (Latn, 166,319 speakers), Ebira (Latn, 2,200,000 speakers), Dutch (Latn, 31,709,104 speakers), Ma’di (Latn, 584,000 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Dan (Latn, 1,099,244 speakers), Ejagham (Latn, 120,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Lugbara (Latn, 2,200,000 speakers), Kom (Latn, 360,685 speakers), Aghem (Latn, 38,843 speakers), Avokaya (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Koonzime (Latn, 40,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Nateni (Latn, 100,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[15] RedditSans-SemiBoldItalic.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check license file has good copyright string. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_copyright">com.google.fonts/check/license/OFL_copyright</a>)</summary><div>


* 🔥 **FAIL** First line in license file is:

"reddit sans"

which does not match the expected format, similar to:

"Copyright 2022 The Familyname Project Authors (git url)" [code: bad-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Check OFL body text is correct. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/license/OFL_body_text">com.google.fonts/check/license/OFL_body_text</a>)</summary><div>


* 🔥 **FAIL** The OFL.txt body text is incorrect. Please use https://github.com/googlefonts/Unified-Font-Repository/blob/main/OFL.txt as a template. You should only modify the first line. [code: incorrect-ofl-body-text]
</div></details><details><summary>🔥 <b>FAIL:</b> Check copyright namerecords match license file. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/name/license">com.google.fonts/check/name/license</a>)</summary><div>


* 🔥 **FAIL** License file OFL.txt exists but NameID 13 (LICENSE DESCRIPTION) value on platform 3 (WINDOWS) is not specified for that. Value was: "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://openfontlicense.org/" Must be changed to "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://scripts.sil.org/OFL" [code: wrong]
</div></details><details><summary>🔥 <b>FAIL:</b> Copyright notices match canonical pattern in fonts (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_copyright">com.google.fonts/check/font_copyright</a>)</summary><div>


* 🔥 **FAIL** Name Table entry: Copyright notices should match a pattern similar to: "Copyright 2019 The Familyname Project Authors (git url)"
But instead we have got:
"Copyright (c) 2020-2023, Reddit, Inc. (https://github.com/reddit/redditsans)" [code: bad-notice-format]
</div></details><details><summary>🔥 <b>FAIL:</b> Do we have the latest version of FontBakery installed? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/fontbakery_version">com.google.fonts/check/fontbakery_version</a>)</summary><div>


* 🔥 **FAIL** Current FontBakery version is 0.10.2, while a newer 0.11.1 is already available. Please upgrade it with 'pip install -U fontbakery' [code: outdated-fontbakery]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check Google Fonts glyph coverage. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyph_coverage">com.google.fonts/check/glyph_coverage</a>)</summary><div>


* ⚠ **WARN** GF_Latin_Plus is almost fulfilled. Missing codepoints:

	- 0x20B4 (HRYVNIA SIGN)


	- 0x20B8 (TENGE SIGN)


	- 0x20AE (TUGRIK SIGN)


	- 0x2016 (DOUBLE VERTICAL LINE)


	- 0x0E3F (THAI CURRENCY SYMBOL BAHT)


	- 0x20BF (BITCOIN SIGN)


	- 0x20BE (LARI SIGN)


	- 0x20A8 (RUPEE SIGN)


	- 0x20AA (NEW SHEQEL SIGN)


	- 0x25CF (BLACK CIRCLE)


	- 0x25CB (WHITE CIRCLE)


	- 0x25E6 (WHITE BULLET)


	- 0x25AA (BLACK SMALL SQUARE)


	- 0x25AB (WHITE SMALL SQUARE)


	- 0x25B4 (BLACK UP-POINTING SMALL TRIANGLE)


	- 0x25B8 (BLACK RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BE (BLACK DOWN-POINTING SMALL TRIANGLE)


	- 0x25C2 (BLACK LEFT-POINTING SMALL TRIANGLE)


	- 0x25B5 (WHITE UP-POINTING SMALL TRIANGLE)


	- 0x25B9 (WHITE RIGHT-POINTING SMALL TRIANGLE)


	- 0x25BF (WHITE DOWN-POINTING SMALL TRIANGLE)


	- 0x25C3 (WHITE LEFT-POINTING SMALL TRIANGLE)
 [code: missing-codepoints]
* ⚠ **WARN** GF_TransLatin_Arabic is almost fulfilled. Missing codepoints:

	- 0x1E34 (LATIN CAPITAL LETTER K WITH LINE BELOW)


	- 0x1E35 (LATIN SMALL LETTER K WITH LINE BELOW)


	- 0x1E96 (LATIN SMALL LETTER H WITH LINE BELOW)


	- 0x02BD (MODIFIER LETTER REVERSED COMMA)
 [code: missing-codepoints]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02B9 MODIFIER LETTER PRIME: not included in any glyphset definition
 * U+02BA MODIFIER LETTER DOUBLE PRIME: not included in any glyphset definition
 * U+02BE MODIFIER LETTER RIGHT HALF RING: not included in any glyphset definition
 * U+02BF MODIFIER LETTER LEFT HALF RING: not included in any glyphset definition
 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02C8 MODIFIER LETTER VERTICAL LINE: not included in any glyphset definition
 * U+02C9 MODIFIER LETTER MACRON: not included in any glyphset definition
 * U+02CA MODIFIER LETTER ACUTE ACCENT: not included in any glyphset definition
 * U+02CB MODIFIER LETTER GRAVE ACCENT: not included in any glyphset definition
 * U+02CC MODIFIER LETTER LOW VERTICAL LINE: not included in any glyphset definition
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, coptic, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, malayalam, tai-le, syriac, tifinagh, canadian-aboriginal, old-permic, math
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
 * U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition
 * U+0311 COMBINING INVERTED BREVE: try adding coptic
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+031B COMBINING HORN: not included in any glyphset definition
 * U+0324 COMBINING DIAERESIS BELOW: try adding one of: cherokee, syriac
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+032E COMBINING BREVE BELOW: try adding syriac
 * U+0331 COMBINING MACRON BELOW: try adding one of: gothic, caucasian-albanian, syriac, tifinagh, cherokee
 * U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition
 * U+035C COMBINING DOUBLE BREVE BELOW: not included in any glyphset definition
 * U+0361 COMBINING DOUBLE INVERTED BREVE: try adding coptic
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, yi, math
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+2010 HYPHEN: try adding one of: coptic, yi, cham, kaithi, kharoshthi, kayah-li, sundanese, syloti-nagri, sora-sompeng, lisu
 * U+2011 NON-BREAKING HYPHEN: try adding one of: syloti-nagri, yi
 * U+2012 FIGURE DASH: not included in any glyphset definition
 * U+2015 HORIZONTAL BAR: try adding adlam
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+203D INTERROBANG: not included in any glyphset definition
 * U+2042 ASTERISM: not included in any glyphset definition
 * U+204E LOW ASTERISK: not included in any glyphset definition
 * U+2051 TWO ASTERISKS ALIGNED VERTICALLY: not included in any glyphset definition
 * U+2052 COMMERCIAL MINUS SIGN: not included in any glyphset definition
 * U+2070 SUPERSCRIPT ZERO: not included in any glyphset definition
 * U+2075 SUPERSCRIPT FIVE: not included in any glyphset definition
 * U+2076 SUPERSCRIPT SIX: not included in any glyphset definition
 * U+2077 SUPERSCRIPT SEVEN: not included in any glyphset definition
 * U+2078 SUPERSCRIPT EIGHT: not included in any glyphset definition
 * U+2079 SUPERSCRIPT NINE: not included in any glyphset definition
 * U+2080 SUBSCRIPT ZERO: not included in any glyphset definition
 * U+2081 SUBSCRIPT ONE: not included in any glyphset definition
 * U+2082 SUBSCRIPT TWO: not included in any glyphset definition
 * U+2083 SUBSCRIPT THREE: not included in any glyphset definition
 * U+2084 SUBSCRIPT FOUR: not included in any glyphset definition
 * U+2085 SUBSCRIPT FIVE: not included in any glyphset definition
 * U+2086 SUBSCRIPT SIX: not included in any glyphset definition
 * U+2087 SUBSCRIPT SEVEN: not included in any glyphset definition
 * U+2088 SUBSCRIPT EIGHT: not included in any glyphset definition
 * U+2089 SUBSCRIPT NINE: not included in any glyphset definition
 * U+2116 NUMERO SIGN: try adding cyrillic
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+215B VULGAR FRACTION ONE EIGHTH: not included in any glyphset definition
 * U+215C VULGAR FRACTION THREE EIGHTHS: not included in any glyphset definition
 * U+215D VULGAR FRACTION FIVE EIGHTHS: not included in any glyphset definition
 * U+215E VULGAR FRACTION SEVEN EIGHTHS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: symbols, math
 * U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math
 * U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math
 * U+2195 UP DOWN ARROW: try adding one of: symbols, math
 * U+2196 NORTH WEST ARROW: try adding one of: symbols, math
 * U+2197 NORTH EAST ARROW: try adding one of: symbols, math
 * U+2198 SOUTH EAST ARROW: try adding one of: symbols, math
 * U+2199 SOUTH WEST ARROW: try adding one of: symbols, math
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+2219 BULLET OPERATOR: try adding one of: tai-tham, symbols, yi, math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+2310 REVERSED NOT SIGN: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: symbols, math
 * U+25CC DOTTED CIRCLE: try adding one of: mandaic, tibetan, balinese, ahom, limbu, hanunoo, kannada, bassa-vah, wancho, tirhuta, pahawh-hmong, hanifi-rohingya, kaithi, chakma, caucasian-albanian, mongolian, siddham, tamil, cham, tagalog, coptic, manichaean, lao, syloti-nagri, marchen, tai-viet, modi, psalter-pahlavi, osage, sharada, lepcha, sinhala, bengali, rejang, gunjala-gondi, miao, symbols, tai-le, oriya, brahmi, sundanese, gurmukhi, zanabazar-square, syriac, tagbanwa, myanmar, new-tai-lue, mahajani, math, grantha, dogra, batak, adlam, hebrew, buhid, masaram-gondi, thaana, javanese, kharoshthi, soyombo, gujarati, music, kayah-li, khojki, thai, bhaiksuki, khudawadi, khmer, newa, sogdian, meetei-mayek, mende-kikakui, malayalam, tifinagh, yi, elbasan, duployan, nko, takri, telugu, buginese, devanagari, phags-pa, old-permic
 * U+2605 BLACK STAR: try adding symbols
 * U+2606 WHITE STAR: try adding symbols
 * U+2661 WHITE HEART SUIT: try adding symbols
 * U+2665 BLACK HEART SUIT: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math
 * U+EA00 : not included in any glyphset definition
 * U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition
 * U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition
 * U+1F845 UPWARDS HEAVY ARROW: try adding symbols
 * U+1F847 DOWNWARDS HEAVY ARROW: try adding symbols

Or you can add the above codepoints to one of the subsets supported by the font: `latin`, `latin-ext`, `vietnamese` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + f

	- f + i

	- i + f

	- f + l

	- l + f

	- i + l

	- r + slash [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- NULL

	- arrowboth.case

	- arrowdown.case

	- arrowleft.case

	- arrowright.case

	- arrowup.case

	- arrowupdn.case

	- eight.sinf

	- eight.subs

	- eight.sups

	- five.sinf

	- five.subs

	- five.sups

	- four.sinf

	- four.subs

	- four.sups

	- nine.sinf

	- nine.subs

	- nine.sups

	- one.sinf

	- one.subs

	- one.sups

	- seven.sinf

	- seven.subs

	- seven.sups

	- six.sinf

	- six.subs

	- six.sups

	- three.sinf

	- three.subs

	- three.sups

	- two.sinf

	- two.subs

	- two.sups

	- uni0305.case

	- uni1E39.ss01

	- uni2196.case

	- uni2197.case

	- uni2198.case

	- uni2199.case

	- zero.sinf

	- zero.subs

	- zero.sups
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni01EA	Contours detected: 3	Expected: 2

	- Glyph name: uni01EB	Contours detected: 3	Expected: 2

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

	- Glyph name: Dcroat	Contours detected: 3	Expected: 2

	- Glyph name: Eth	Contours detected: 3	Expected: 2

	- Glyph name: Tbar	Contours detected: 2	Expected: 1

	- Glyph name: Uhorn	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: dcroat	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: hbar	Contours detected: 2	Expected: 1

	- Glyph name: ohorn	Contours detected: 3	Expected: 2

	- Glyph name: tbar	Contours detected: 2	Expected: 1

	- Glyph name: uhorn	Contours detected: 2	Expected: 1

	- Glyph name: uni1E08	Contours detected: 3	Expected: 2

	- Glyph name: uni1E09	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

	- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

	- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

	- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

	- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

	- Glyph name: uni1EED	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

	- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

	- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

	- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Check math signs have the same width. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/math_signs_width">com.google.fonts/check/math_signs_width</a>)</summary><div>


* ⚠ **WARN** The most common width is 1091 among a set of 2 math glyphs.
The following math glyphs have a different width, though:

Width = 1092:
less

Width = 1100:
notequal, equal

Width = 1131:
logicalnot

Width = 1099:
plusminus

Width = 1054:
multiply

Width = 1090:
divide, minus

Width = 1177:
approxequal

Width = 1045:
greaterequal, lessequal
 [code: width-outliers]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* nine (U+0039): X=493.0,Y=1.0 (should be at baseline 0?)

	* nine (U+0039): X=204.0,Y=1.0 (should be at baseline 0?)

	* K (U+004B): X=600.0,Y=1473.0 (should be at cap-height 1474?)

	* braceleft (U+007B): X=89.0,Y=2.0 (should be at baseline 0?)

	* ordfeminine (U+00AA): X=717.0,Y=1475.0 (should be at cap-height 1474?)

	* ordfeminine (U+00AA): X=860.0,Y=1475.0 (should be at cap-height 1474?)

	* eth (U+00F0): X=822.0,Y=1473.0 (should be at cap-height 1474?)

	* aogonek (U+0105): X=791.5,Y=-1.0 (should be at baseline 0?)

	* iogonek (U+012F): X=187.5,Y=-1.0 (should be at baseline 0?)

	* uni0136 (U+0136): X=600.0,Y=1473.0 (should be at cap-height 1474?)

	* eng (U+014B): X=933.0,Y=1.0 (should be at baseline 0?)

	* uogonek (U+0173): X=747.5,Y=-1.0 (should be at baseline 0?)

	* uni1E4E (U+1E4E): X=1158.0,Y=2070.0 (should be at ascender 2068?)

	* uni1E4E (U+1E4E): X=699.0,Y=2070.0 (should be at ascender 2068?)

	* uni1EAE (U+1EAE): X=1183.0,Y=2070.0 (should be at ascender 2068?)

	* colonmonetary (U+20A1): X=1114.0,Y=1475.0 (should be at cap-height 1474?)

	* uni2198 (U+2198): X=1080.0,Y=-1.0 (should be at baseline 0?)

	* uni2198 (U+2198): X=250.0,Y=-1.0 (should be at baseline 0?)

	* uni2199 (U+2199): X=833.0,Y=-1.0 (should be at baseline 0?)

	* uni2199 (U+2199): X=3.0,Y=-1.0 (should be at baseline 0?)

	* integral (U+222B): X=1166.5,Y=1476.0 (should be at cap-height 1474?) [code: found-misalignments]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ị̀ ị́ ị̂ ị̃ ị̄

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̏ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Igbo (Latn, 27,823,640 speakers), Navajo (Latn, 166,319 speakers), Ebira (Latn, 2,200,000 speakers), Dutch (Latn, 31,709,104 speakers), Ma’di (Latn, 584,000 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Dan (Latn, 1,099,244 speakers), Ejagham (Latn, 120,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Lugbara (Latn, 2,200,000 speakers), Kom (Latn, 360,685 speakers), Aghem (Latn, 38,843 speakers), Avokaya (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Koonzime (Latn, 40,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Nateni (Latn, 100,000 speakers). [code: soft-dotted]
</div></details><br></div></details>

### Summary

| 💔 ERROR | 🔥 FAIL | ⚠ WARN | 💤 SKIP | ℹ INFO | 🍞 PASS | 🔎 DEBUG |
|:-----:|:----:|:----:|:----:|:----:|:----:|:----:|
| 0 | 60 | 128 | 1442 | 73 | 1147 | 0 |
| 0% | 2% | 4% | 51% | 3% | 40% | 0% |

**Note:** The following loglevels were omitted in this report:
* **SKIP**
* **INFO**
* **PASS**
* **DEBUG**

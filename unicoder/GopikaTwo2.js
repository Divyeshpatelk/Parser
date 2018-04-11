var GopikaTwo2Parser = (() => {
  var GopikaTwo2 = [];

  // GopikaTwo2[32] = space
  // GopikaTwo2[33] = !
  // GopikaTwo2[34] = "
  GopikaTwo2[35] = Gujarati.letter_II + Gujarati.sign_ANUSVARA;
  GopikaTwo2[36] = Gujarati.letter_I + Gujarati.sign_ANUSVARA;
  // GopikaTwo2[37] = %
  GopikaTwo2[38] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA;
  // GopikaTwo2[39] = '
  // GopikaTwo2[40] = )
  // GopikaTwo2[41] = (
  // GopikaTwo2[42] = *
  // GopikaTwo2[43] = +
  // GopikaTwo2[44] = ,
  // GopikaTwo2[45] = -
  // GopikaTwo2[46] = .
  // GopikaTwo2[47] = /
  GopikaTwo2[48] = Gujarati.digit_ZERO;
  GopikaTwo2[49] = Gujarati.digit_ONE;
  GopikaTwo2[50] = Gujarati.digit_TWO;
  GopikaTwo2[51] = Gujarati.digit_THREE;
  GopikaTwo2[52] = Gujarati.digit_FOUR;
  GopikaTwo2[53] = Gujarati.digit_FIVE;
  GopikaTwo2[54] = Gujarati.digit_SIX;
  GopikaTwo2[55] = Gujarati.digit_SEVEN;
  GopikaTwo2[56] = Gujarati.digit_EIGHT;
  GopikaTwo2[57] = Gujarati.digit_NINE;
  // GopikaTwo2[58] = :
  // GopikaTwo2[59] = ;
  GopikaTwo2[60] = Gujarati.letter_NA + Gujarati.sign_VIRAMA + Gujarati.letter_KA;
  // GopikaTwo2[61] = "="
  // GopikaTwo2[62] = \u0964 --> differ | \u007C
  // GopikaTwo2[63] = ?
  GopikaTwo2[64] = Gujarati.letter_JA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  GopikaTwo2[65] = Gujarati.letter_CHA;
  GopikaTwo2[66] = Gujarati.letter_MA + Gujarati.sign_VIRAMA;
  GopikaTwo2[67] = Gujarati.letter_JHA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  GopikaTwo2[68] = Gujarati.letter_DDA + Gujarati.sign_VIRAMA + Gujarati.letter_DDHA;
  GopikaTwo2[69] = Gujarati.letter_II;
  GopikaTwo2[70] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_LA;
  GopikaTwo2[71] = Gujarati.letter_YA + Gujarati.sign_VIRAMA;
  GopikaTwo2[72] = Gujarati.sign_OM;
  GopikaTwo2[73] = Gujarati.vowel_SIGN_AI + Gujarati.sign_ANUSVARA;
  GopikaTwo2[74] = Gujarati.letter_TA + Gujarati.sign_VIRAMA + Gujarati.letter_NA;
  GopikaTwo2[75] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_BHA;
  GopikaTwo2[76] = Gujarati.letter_NA + Gujarati.sign_VIRAMA;
  GopikaTwo2[77] = Gujarati.letter_SA + Gujarati.sign_VIRAMA;
  GopikaTwo2[78] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_GA;
  GopikaTwo2[79] = Gujarati.letter_RA + Gujarati.sign_VIRAMA + Gujarati.sign_ANUSVARA;
  GopikaTwo2[80] = Gujarati.sign_CANDRABINDU;
  GopikaTwo2[81] = Gujarati.letter_UU;
  GopikaTwo2[82] = Gujarati.letter_I;
  GopikaTwo2[83] = Gujarati.letter_JA + Gujarati.vowel_SIGN_II;
  GopikaTwo2[84] = Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_NON_JOINER;
  GopikaTwo2[85] = Gujarati.vowel_SIGN_E + Gujarati.sign_ANUSVARA;
  GopikaTwo2[86] = Gujarati.letter_PHA;
  GopikaTwo2[87] = Gujarati.letter_U;
  GopikaTwo2[88] = Gujarati.letter_TTHA;
  GopikaTwo2[89] = Gujarati.letter_RA + Gujarati.vowel_SIGN_UU;
  GopikaTwo2[90] = Gujarati.letter_DDHA;
  GopikaTwo2[91] = Gujarati.letter_CA;
  GopikaTwo2[92] = Gujarati.letter_RA + Gujarati.vowel_SIGN_UU;
  GopikaTwo2[93] = Gujarati.vowel_SIGN_VOCALIC_R;
  GopikaTwo2[94] = Gujarati.letter_PHA + Gujarati.sign_VIRAMA;
  GopikaTwo2[95] = Gujarati.sign_ABBREVIATION;
  // GopikaTwo2[96] = '
  GopikaTwo2[97] = Gujarati.letter_TTA + Gujarati.sign_VIRAMA + Gujarati.letter_TTHA;
  GopikaTwo2[98] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_LLA;
  GopikaTwo2[99] = Gujarati.letter_SSA + Gujarati.sign_VIRAMA + Gujarati.letter_TTHA;
  GopikaTwo2[100] = Gujarati.letter_NGA + Gujarati.sign_VIRAMA + Gujarati.letter_GHA;
  GopikaTwo2[101] = Gujarati.vowel_SIGN_II;
  GopikaTwo2[102] = Gujarati.letter_KA;
  GopikaTwo2[103] = Gujarati.letter_KHA + Gujarati.sign_VIRAMA + Gujarati.letter_TA;
  GopikaTwo2[104] = Gujarati.letter_RA;
  GopikaTwo2[105] = Gujarati.vowel_SIGN_AI;
  GopikaTwo2[106] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_DHA;
  GopikaTwo2[107] = Gujarati.sign_ANUSVARA;
  GopikaTwo2[108] = Gujarati.letter_NGA + Gujarati.sign_VIRAMA + Gujarati.letter_MA;
  GopikaTwo2[109] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_VA;
  GopikaTwo2[110] = Gujarati.letter_HA;
  GopikaTwo2[111] = Gujarati.letter_RA + Gujarati.sign_VIRAMA;
  //temp skip GopikaTwo2[112] =
  GopikaTwo2[113] = Gujarati.vowel_SIGN_UU;
  GopikaTwo2[114] = Gujarati.vowel_SIGN_I;
  GopikaTwo2[115] = Gujarati.letter_JA;
  GopikaTwo2[116] = Gujarati.vowel_SIGN_AA;
  GopikaTwo2[117] = Gujarati.vowel_SIGN_E;
  GopikaTwo2[118] = Gujarati.letter_DA + Gujarati.vowel_SIGN_VOCALIC_R;
  GopikaTwo2[119] = Gujarati.vowel_SIGN_U;
  GopikaTwo2[120] = Gujarati.letter_TTA;
  GopikaTwo2[121] = Gujarati.letter_A;
  GopikaTwo2[122] = Gujarati.letter_DDA;
  GopikaTwo2[123] = Gujarati.letter_MA;
  GopikaTwo2[124] = Gujarati.sign_NUKTA;
  GopikaTwo2[125] = Gujarati.letter_VOCALIC_RR;
  GopikaTwo2[126] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA;
  GopikaTwo2[141] = Gujarati.letter_LA + Gujarati.sign_VIRAMA + Gujarati.letter_LA;
  // GopikaTwo2[160] = Space
  GopikaTwo2[161] = Gujarati.letter_PA + Gujarati.sign_VIRAMA + Gujarati.letter_NA;
  GopikaTwo2[162] = Gujarati.letter_KA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  GopikaTwo2[163] = Gujarati.letter_PHA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  GopikaTwo2[164] = Gujarati.letter_LLA;
  GopikaTwo2[165] = Gujarati.letter_TA + Gujarati.sign_VIRAMA + Gujarati.letter_TA + Gujarati.sign_VIRAMA;
  // GopikaTwo2[166] = Not Visible
  GopikaTwo2[167] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA + Gujarati.letter_NA;
  // GopikaTwo2[168] = Not Visible
  GopikaTwo2[169] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  GopikaTwo2[170] = Gujarati.vowel_SIGN_II + Gujarati.sign_ANUSVARA;
  GopikaTwo2[171] = Gujarati.letter_PA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  GopikaTwo2[172] = Gujarati.letter_KA + Gujarati.sign_VIRAMA + Gujarati.letter_KA;
  GopikaTwo2[173] = Gujarati.sign_CANDRABINDU;
  GopikaTwo2[174] = Gujarati.vowel_SIGN_I + Gujarati.sign_ANUSVARA;
  // GopikaTwo2[175] = Not Visible
  // GopikaTwo2[176] = Not Visible
  // GopikaTwo2[177] = Not Visible
  GopikaTwo2[178] = Gujarati.letter_SA + Gujarati.sign_VIRAMA + Gujarati.letter_RA + Gujarati.sign_VIRAMA;
  GopikaTwo2[179] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_LA;
  GopikaTwo2[180] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  // GopikaTwo2[181] = Not Visible
  // GopikaTwo2[182] = Not Visible
  // Temp Skip GopikaTwo2[183]
  GopikaTwo2[184] = Gujarati.vowel_SIGN_UU;
  // temp Skip GopikaTwo2[185]
  GopikaTwo2[186] = Gujarati.letter_TA + Gujarati.sign_VIRAMA + Gujarati.letter_RA + Gujarati.sign_VIRAMA;
  GopikaTwo2[187] = Gujarati.letter_SSA + Gujarati.sign_VIRAMA;
  GopikaTwo2[188] = Gujarati.letter_BHA;
  GopikaTwo2[189] = Gujarati.letter_GHA;
  GopikaTwo2[190] = Gujarati.letter_KHA;
  GopikaTwo2[191] = Gujarati.letter_JA + Gujarati.sign_VIRAMA + Gujarati.letter_NYA + Gujarati.sign_VIRAMA;
  // GopikaTwo2[192] = Not Visible
  GopikaTwo2[193] = Gujarati.letter_RA + Gujarati.vowel_SIGN_U;
  GopikaTwo2[194] = Gujarati.vowel_SIGN_I;
  GopikaTwo2[195] = Gujarati.letter_PA + Gujarati.sign_VIRAMA;
  GopikaTwo2[196] = Gujarati.letter_DHA;
  GopikaTwo2[197] = Gujarati.letter_NYA + Gujarati.sign_VIRAMA;
  GopikaTwo2[198] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_DA;
  GopikaTwo2[199] = Gujarati.letter_BHA + Gujarati.sign_VIRAMA;
  GopikaTwo2[200] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_MA;
  GopikaTwo2[201] = Gujarati.letter_VOCALIC_R;
  GopikaTwo2[202] = Gujarati.letter_NGA;
  GopikaTwo2[203] = Gujarati.letter_SA;
  GopikaTwo2[204] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_YA + Gujarati.sign_VIRAMA;
  GopikaTwo2[205] = Gujarati.letter_JHA;
  GopikaTwo2[206] = Gujarati.letter_GHA + Gujarati.sign_VIRAMA;
  GopikaTwo2[207] = Gujarati.letter_KHA + Gujarati.sign_VIRAMA;
  GopikaTwo2[209] = Gujarati.letter_NGA + Gujarati.sign_VIRAMA + Gujarati.letter_KA;
  GopikaTwo2[210] = Gujarati.letter_NA + Gujarati.sign_VIRAMA + Gujarati.letter_NA + Gujarati.sign_VIRAMA;
  GopikaTwo2[211] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_YA + Gujarati.sign_VIRAMA;
  GopikaTwo2[212] = Gujarati.letter_VA + Gujarati.sign_VIRAMA;
  GopikaTwo2[213] = Gujarati.letter_LA + Gujarati.sign_VIRAMA;
  GopikaTwo2[214] = Gujarati.letter_NGA + Gujarati.sign_VIRAMA + Gujarati.letter_KHA;
  GopikaTwo2[216] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_DHA;
  GopikaTwo2[217] = Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  GopikaTwo2[218] = Gujarati.letter_THA + Gujarati.sign_VIRAMA;
  GopikaTwo2[219] = Gujarati.letter_NNA + Gujarati.sign_VIRAMA;
  GopikaTwo2[220] = Gujarati.letter_NGA + Gujarati.sign_VIRAMA + Gujarati.letter_GA;
  GopikaTwo2[221] = Gujarati.letter_VOCALIC_L;
  GopikaTwo2[222] = Gujarati.letter_YA;
  GopikaTwo2[223] = Gujarati.letter_JA + Gujarati.sign_VIRAMA;
  GopikaTwo2[224] = Gujarati.sign_AVAGRAHA;
  GopikaTwo2[225] = Gujarati.letter_DA + Gujarati.vowel_SIGN_VOCALIC_R;
  GopikaTwo2[226] = Gujarati.sign_VIRAMA + Gujarati.letter_YA;
  GopikaTwo2[227] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_YA;
  GopikaTwo2[228] = Gujarati.letter_JA + Gujarati.sign_VIRAMA + Gujarati.letter_JA;
  GopikaTwo2[229] = Gujarati.letter_CA + Gujarati.sign_VIRAMA;
  GopikaTwo2[230] = Gujarati.letter_DHA + Gujarati.sign_VIRAMA;
  GopikaTwo2[231] = Gujarati.letter_BA + Gujarati.sign_VIRAMA;
  GopikaTwo2[232] = Gujarati.letter_TTA + Gujarati.sign_VIRAMA + Gujarati.letter_TTA;
  GopikaTwo2[233] = Gujarati.letter_LLA + Gujarati.sign_VIRAMA;
  GopikaTwo2[234] = Gujarati.letter_TTHA + Gujarati.sign_VIRAMA + Gujarati.letter_TTHA;
  GopikaTwo2[235] = Gujarati.letter_DDHA + Gujarati.sign_VIRAMA + Gujarati.letter_DDHA;
  GopikaTwo2[236] = Gujarati.vowel_SIGN_CANDRA_E;
  GopikaTwo2[237] = Gujarati.letter_TA + Gujarati.sign_VIRAMA;
  GopikaTwo2[238] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_VA;
  GopikaTwo2[239] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA + Gujarati.letter_VA;
  GopikaTwo2[240] = Gujarati.letter_VA;
  GopikaTwo2[241] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_MA;
  GopikaTwo2[242] = Gujarati.letter_JA + Gujarati.vowel_SIGN_AA;
  GopikaTwo2[243] = Gujarati.letter_PA + Gujarati.sign_VIRAMA + Gujarati.letter_TA;
  GopikaTwo2[244] = Gujarati.letter_U + Gujarati.sign_ANUSVARA;
  GopikaTwo2[245] = Gujarati.letter_KA + Gujarati.sign_VIRAMA;
  GopikaTwo2[246] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_NA;
  GopikaTwo2[247] = Gujarati.letter_LA;
  GopikaTwo2[248] = Gujarati.letter_GA + Gujarati.sign_VIRAMA;
  GopikaTwo2[249] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA + Gujarati.letter_CA;
  GopikaTwo2[250] = Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  GopikaTwo2[251] = Gujarati.letter_KA + Gujarati.sign_VIRAMA + Gujarati.letter_SSA + Gujarati.sign_VIRAMA;
  GopikaTwo2[252] = Gujarati.letter_SSA + Gujarati.sign_VIRAMA + Gujarati.letter_NNA;
  GopikaTwo2[253] = Gujarati.letter_NNA;
  GopikaTwo2[254] = Gujarati.letter_SHA;
  GopikaTwo2[255] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  GopikaTwo2[338] = Gujarati.letter_DA;
  GopikaTwo2[339] = Gujarati.letter_DDA + Gujarati.sign_VIRAMA + Gujarati.letter_DDA;
  GopikaTwo2[352] = Gujarati.letter_RA + Gujarati.sign_VIRAMA + Gujarati.vowel_SIGN_I;
  GopikaTwo2[353] = Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_U;
  GopikaTwo2[376] = Gujarati.letter_UU + Gujarati.sign_ANUSVARA;
  GopikaTwo2[381] = Gujarati.letter_THA;
  GopikaTwo2[382] = Gujarati.letter_KA + Gujarati.sign_VIRAMA;
  GopikaTwo2[402] = Gujarati.letter_BA;
  //GopikaTwo2[710] = //
  //GopikaTwo2[8211] = //
  //GopikaTwo2[8212] = //
  //GopikaTwo2[8216] = //
  //GopikaTwo2[8217] = //
  GopikaTwo2[8218] = Gujarati.letter_TA;
  //GopikaTwo2[8220] = //
  //GopikaTwo2[8221] = //
  GopikaTwo2[8222] = Gujarati.letter_GA;
  GopikaTwo2[8224] =
    Gujarati.letter_SA + Gujarati.sign_VIRAMA + Gujarati.letter_TA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  GopikaTwo2[8225] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_YA + Gujarati.sign_VIRAMA;
  //GopikaTwo2[8226] = //
  GopikaTwo2[8230] = Gujarati.letter_PA;
  GopikaTwo2[8240] = Gujarati.sign_VIRAMA + Gujarati.letter_RA + Gujarati.vowel_SIGN_UU;
  GopikaTwo2[8249] = Gujarati.letter_RA + Gujarati.sign_VIRAMA + Gujarati.vowel_SIGN_I + Gujarati.sign_ANUSVARA;
  GopikaTwo2[8250] = Gujarati.sign_VIRAMA + Gujarati.letter_RA + Gujarati.vowel_SIGN_U;
  GopikaTwo2[8482] = Gujarati.letter_NA;

  let starter = [
    38,
    60,
    64,
    65,
    66,
    67,
    71,
    74,
    76,
    77,
    78,
    83,
    86,
    88,
    89,
    90,
    91,
    94,
    99,
    102,
    103,
    104,
    106,
    110,
    115,
    120,
    121,
    122,
    123,
    126,
    161,
    162,
    163,
    164,
    165,
    167,
    169,
    171,
    172,
    178,
    179,
    180,
    186,
    187,
    188,
    189,
    190,
    191,
    193,
    195,
    196,
    197,
    199,
    203,
    204,
    205,
    206,
    207,
    210,
    211,
    212,
    213,
    216,
    218,
    219,
    222,
    223,
    227,
    228,
    229,
    230,
    231,
    232,
    233,
    234,
    235,
    237,
    238,
    239,
    240,
    241,
    242,
    243,
    245,
    246,
    247,
    248,
    249,
    251,
    252,
    253,
    254,
    255,
    338,
    381,
    382,
    402,
    8218,
    8222,
    8224,
    8225,
    8230,
    8482,
    8725
  ];
  let finisher = [
    60,
    64,
    65,
    67,
    70,
    74,
    75,
    78,
    86,
    88,
    90,
    91,
    97,
    98,
    99,
    102,
    103,
    104,
    106,
    107,
    109,
    110,
    115,
    116,
    120,
    122,
    123,
    125,
    161,
    162,
    163,
    164,
    167,
    169,
    171,
    172,
    179,
    180,
    188,
    189,
    190,
    196,
    200,
    201,
    203,
    205,
    217,
    222,
    226,
    227,
    228,
    232,
    234,
    235,
    238,
    239,
    240,
    241,
    243,
    247,
    249,
    250,
    252,
    253,
    254,
    255,
    338,
    381,
    402,
    8218,
    8222,
    8224,
    8225,
    8230,
    8482,
    8725
  ];

  let viramaChars = [84, 217, 226, 250];
  var codePointPrinter = (string) => {
    for (var i = 0; i < string.length; i++) {
      let char = string.charAt(i);
      console.log(char, char.codePointAt(0).toString(16));
    }
  };

  var shiftRight = (charArr, matra) => {
    for (
      let matraIndex = charArr.indexOf(matra), charIndex = matraIndex + 1;
      matraIndex > -1;
      matraIndex = charArr.indexOf(matra, charIndex + 1), charIndex = matraIndex + 1
    ) {
      while (charIndex !== charArr.length) {
        let charCode = charArr[charIndex].codePointAt(0);
        if (
          finisher.indexOf(charCode) > -1 &&
          (charIndex + 1 === charArr.length || viramaChars.indexOf(charArr[charIndex + 1].codePointAt(0)) === -1)
        ) {
          break;
        } else {
          charIndex++;
        }
      }
      charArr.splice(charIndex + 1, 0, matra);
      charArr.splice(matraIndex, 1);
    }

    return charArr;
  };
  var shiftLeft = (charArr, matra) => {
    for (
      let matraIndex = charArr.indexOf(matra), charIndex = matraIndex - 1;
      matraIndex > -1;
      matraIndex = charArr.indexOf(matra, charIndex + 1), charIndex = matraIndex - 1
    ) {
      while (charIndex !== -1) {
        let charCode = charArr[charIndex].codePointAt(0);
        if (starter.indexOf(charCode) > -1) {
          break;
        } else {
          charIndex--;
        }
      }

      charArr.splice(matraIndex, 1);
      charArr.splice(charIndex, 0, matra);
    }

    return charArr;
  };

  var replaceAll = (str, find, replace) => {
    return str.replace(new RegExp(find, 'g'), replace);
  };

  var convertWord = function(word) {
    let output = '';
    let wordArr = [...word];
    console.log('initial', wordArr);

    var rephaAnusvaraIndex = wordArr.indexOf('\u004F');
    if (rephaAnusvaraIndex !== -1) {
      wordArr.splice(rephaAnusvaraIndex, 1, '\u006F', '\u006B');
    }

    wordArr = shiftLeft(wordArr, '\u006F');

    var iRephaIndex = wordArr.indexOf('\u0160');
    if (iRephaIndex !== -1) {
      wordArr.splice(iRephaIndex, 1, '\u006F', '\u0072');
    }

    wordArr = shiftRight(wordArr, '\u0072');
    wordArr = shiftRight(wordArr, '\u00C2');
    wordArr = shiftRight(wordArr, '\u00AE');
    console.log('after shift', wordArr);

    wordArr.forEach((char, index) => {
      console.log(char, char.codePointAt(0));
      output += GopikaTwo2[char.codePointAt(0)] || char;
    });

    console.log('initial unicode', [...output]);

    output = replaceAll(output, Gujarati.sign_VIRAMA + Gujarati.vowel_SIGN_AA, '');
    output = replaceAll(output, Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_E, Gujarati.vowel_SIGN_O);
    output = replaceAll(output, Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_CANDRA_E, Gujarati.vowel_SIGN_CANDRA_O);
    output = replaceAll(output, Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_AI, Gujarati.vowel_SIGN_AU);
    output = replaceAll(output, Gujarati.letter_A + Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_E, Gujarati.letter_O);

    output = replaceAll(
      output,
      Gujarati.letter_A + Gujarati.vowel_SIGN_AA + Gujarati.sign_CANDRABINDU,
      Gujarati.letter_AA + Gujarati.sign_CANDRABINDU
    );
    output = replaceAll(output, Gujarati.letter_A + Gujarati.vowel_SIGN_E, Gujarati.letter_E);
    output = replaceAll(output, Gujarati.letter_A + Gujarati.vowel_SIGN_AA, Gujarati.letter_AA);
    output = replaceAll(output, Gujarati.letter_A + Gujarati.vowel_SIGN_O, Gujarati.letter_O);
    output = replaceAll(output, Gujarati.letter_A + Gujarati.vowel_SIGN_CANDRA_E, Gujarati.vowel_CANDRA_E);
    output = replaceAll(output, Gujarati.letter_A + Gujarati.vowel_SIGN_CANDRA_O, Gujarati.vowel_CANDRA_O);
    output = replaceAll(
      output,
      Gujarati.letter_A + Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_AI,
      Gujarati.letter_AU
    );
    output = replaceAll(output, Gujarati.letter_A + Gujarati.vowel_SIGN_AI, Gujarati.letter_AI);
    output = replaceAll(
      output,
      Gujarati.letter_A + Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_CANDRA_E,
      Gujarati.vowel_CANDRA_O
    );

    console.log('result', [...output]);

    return output;
  };

  var wordGenerator = function*(string) {
    let i = 0,
      len = string.length,
      word = '';
    while (i < len) {
      let char = string.charAt(i);
      if (char === ' ') {
        if (word !== '') {
          yield word;
          word = '';
        }
        yield ' ';
      } else {
        word += char;
      }
      i++;
    }
    return word;
  };

  var convert = function(string) {
    let unicodeString = '';

    let wordIterator = wordGenerator(string);
    for (let word; (word = wordIterator.next().value); ) {
      console.log(word);
      let converted = convertWord(word);
      console.log(converted);
      unicodeString += converted;
    }

    // unicodeEditor.val(unicodeString);
    return unicodeString;
  };

  return { convert };
})();

// module.exports = parser;

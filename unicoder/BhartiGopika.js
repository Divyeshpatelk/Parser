var BhartiGopikaParser = (() => {
  var BhartiGopika = [];
  // BhartiGopika[32] = // space
  // BhartiGopika[33] = // ! same
  BhartiGopika[34] = Unicode.MULTIPLICATION_SIGN;
  BhartiGopika[35] = Gujarati.letter_II + Gujarati.sign_ANUSVARA;
  BhartiGopika[36] = Gujarati.letter_I + Gujarati.sign_ANUSVARA;
  BhartiGopika[37] = Unicode.PERCENT_SIGN;
  BhartiGopika[38] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA;
  // BhartiGopika[39] = // '
  // BhartiGopika[40] = (
  // BhartiGopika[41] = )
  // BhartiGopika[42] = *
  // BhartiGopika[43] = +
  // BhartiGopika[44] = ,
  // BhartiGopika[45] = -
  // BhartiGopika[46] = .
  // BhartiGopika[47] = /
  BhartiGopika[48] = Gujarati.digit_ZERO;
  BhartiGopika[49] = Gujarati.digit_ONE;
  BhartiGopika[50] = Gujarati.digit_TWO;
  BhartiGopika[51] = Gujarati.digit_THREE;
  BhartiGopika[52] = Gujarati.digit_FOUR;
  BhartiGopika[53] = Gujarati.digit_FIVE;
  BhartiGopika[54] = Gujarati.digit_SIX;
  BhartiGopika[55] = Gujarati.digit_SEVEN;
  BhartiGopika[56] = Gujarati.digit_EIGHT;
  BhartiGopika[57] = Gujarati.digit_NINE;
  // BhartiGopika[58] = :
  // BhartiGopika[59] = ;
  BhartiGopika[60] = Gujarati.letter_NA + Gujarati.sign_VIRAMA + Gujarati.letter_KA;
  // BhartiGopika[61] = "="
  // BhartiGopika[62] = \u0964 --> differ | \u007C
  // BhartiGopika[63] = ?
  BhartiGopika[64] = Gujarati.letter_JA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  BhartiGopika[65] = Gujarati.letter_CHA;
  BhartiGopika[66] = Gujarati.letter_MA + Gujarati.sign_VIRAMA;
  BhartiGopika[67] = Gujarati.letter_JHA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  BhartiGopika[68] = Gujarati.letter_DDA + Gujarati.sign_VIRAMA + Gujarati.letter_DDHA;
  BhartiGopika[69] = Gujarati.letter_II;
  BhartiGopika[70] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_LA;
  BhartiGopika[71] = Gujarati.letter_YA + Gujarati.sign_VIRAMA;
  BhartiGopika[72] = Gujarati.sign_OM;
  BhartiGopika[73] = Gujarati.vowel_SIGN_AI + Gujarati.sign_ANUSVARA;
  BhartiGopika[74] = Gujarati.letter_TA + Gujarati.sign_VIRAMA + Gujarati.letter_NA;
  BhartiGopika[75] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_BHA;
  BhartiGopika[76] = Gujarati.letter_NA + Gujarati.sign_VIRAMA;
  BhartiGopika[77] = Gujarati.letter_SA + Gujarati.sign_VIRAMA;
  BhartiGopika[78] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_GA;
  BhartiGopika[79] = Gujarati.letter_RA + Gujarati.sign_VIRAMA + Gujarati.sign_ANUSVARA;
  BhartiGopika[80] = Gujarati.sign_CANDRABINDU;
  BhartiGopika[81] = Gujarati.letter_UU;
  BhartiGopika[82] = Gujarati.letter_I;
  BhartiGopika[83] = Gujarati.letter_JA + Gujarati.vowel_SIGN_II;
  BhartiGopika[84] = Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_NON_JOINER;
  BhartiGopika[85] = Gujarati.vowel_SIGN_E + Gujarati.sign_ANUSVARA;
  BhartiGopika[86] = Gujarati.letter_PHA;
  BhartiGopika[87] = Gujarati.letter_U;
  BhartiGopika[88] = Gujarati.letter_TTHA;
  BhartiGopika[89] = Gujarati.letter_RA + Gujarati.vowel_SIGN_UU;
  BhartiGopika[90] = Gujarati.letter_DDHA;
  BhartiGopika[91] = Gujarati.letter_CA;
  BhartiGopika[92] = Gujarati.letter_RA + Gujarati.vowel_SIGN_UU;
  BhartiGopika[93] = Gujarati.vowel_SIGN_VOCALIC_R;
  BhartiGopika[94] = Gujarati.letter_PHA + Gujarati.sign_VIRAMA;
  BhartiGopika[95] = Gujarati.sign_ABBREVIATION;
  // temp_Skip  BhartiGopika[96] = '\u0A95';
  BhartiGopika[97] = Gujarati.letter_TTA + Gujarati.sign_VIRAMA + Gujarati.letter_TTHA;
  BhartiGopika[98] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_LLA;
  BhartiGopika[99] = Gujarati.letter_SSA + Gujarati.sign_VIRAMA + Gujarati.letter_TTHA;
  BhartiGopika[100] = Gujarati.letter_NGA + Gujarati.sign_VIRAMA + Gujarati.letter_GHA;
  BhartiGopika[101] = Gujarati.vowel_SIGN_II;
  BhartiGopika[102] = Gujarati.letter_KA;
  BhartiGopika[103] = Gujarati.letter_KHA + Gujarati.sign_VIRAMA + Gujarati.letter_TA;
  BhartiGopika[104] = Gujarati.letter_RA;
  BhartiGopika[105] = Gujarati.vowel_SIGN_AI;
  BhartiGopika[106] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_GHA;
  BhartiGopika[107] = Gujarati.vowel_SIGN_AA;
  BhartiGopika[108] = Gujarati.letter_NGA + Gujarati.sign_VIRAMA + Gujarati.letter_MA;
  BhartiGopika[109] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_BA;
  BhartiGopika[110] = Gujarati.letter_HA;
  BhartiGopika[111] = Gujarati.letter_RA + Gujarati.sign_VIRAMA;
  //temp Skip BhartiGopika[112] = '\u0A95';
  BhartiGopika[113] = Gujarati.vowel_SIGN_UU;
  BhartiGopika[114] = Gujarati.vowel_SIGN_I;
  BhartiGopika[115] = Gujarati.letter_JA;
  BhartiGopika[116] = Gujarati.sign_ANUSVARA;
  BhartiGopika[117] = Gujarati.vowel_SIGN_E;
  BhartiGopika[118] = Gujarati.letter_DA + Gujarati.vowel_SIGN_VOCALIC_R;
  BhartiGopika[119] = Gujarati.vowel_SIGN_U;
  BhartiGopika[120] = Gujarati.letter_TTA;
  BhartiGopika[121] = Gujarati.letter_A;
  BhartiGopika[122] = Gujarati.letter_DDA;
  BhartiGopika[123] = Gujarati.letter_MA;
  BhartiGopika[124] = Gujarati.sign_NUKTA;
  BhartiGopika[125] = Gujarati.letter_VOCALIC_RR;
  BhartiGopika[126] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA;
  // not available (delete) BhartiGopika[141] = Gujarati.letter_VOCALIC_R;
  // BhartiGopika[160] = // space u0AA1
  BhartiGopika[161] = Gujarati.letter_PA + Gujarati.sign_VIRAMA + Gujarati.letter_NA;
  BhartiGopika[162] = Gujarati.letter_KA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  BhartiGopika[163] = Gujarati.letter_PHA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  BhartiGopika[164] = Gujarati.letter_LLA;
  BhartiGopika[165] = Gujarati.letter_TA + Gujarati.sign_VIRAMA + Gujarati.letter_TA + Gujarati.sign_VIRAMA;
  // BhartiGopika[166] = '\u0A95';
  BhartiGopika[167] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA + Gujarati.letter_NA;
  // BhartiGopika[168] = char not visible
  BhartiGopika[169] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  BhartiGopika[170] = Gujarati.vowel_SIGN_II + Gujarati.sign_ANUSVARA;
  BhartiGopika[171] = Gujarati.letter_PA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  BhartiGopika[172] = Gujarati.letter_KA + Gujarati.sign_VIRAMA + Gujarati.letter_KA;
  // BhartiGopika[173] = Not Visible
  BhartiGopika[174] = Gujarati.vowel_SIGN_I + Gujarati.sign_ANUSVARA;
  // BhartiGopika[175] = //not visible
  // BhartiGopika[176] = // Not Visible
  // temp Skip BhartiGopika[177] = '\u0A95';
  BhartiGopika[178] = Gujarati.letter_SA + Gujarati.sign_VIRAMA + Gujarati.letter_RA + Gujarati.sign_VIRAMA;
  BhartiGopika[179] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_LA;
  BhartiGopika[180] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  // BhartiGopika[181] = .
  // temp Skip BhartiGopika[182] = //
  // temp Skip BhartiGopika[183] = '\u0A95';
  BhartiGopika[184] = Gujarati.vowel_SIGN_UU;
  // temp Skip BhartiGopika[185] = '\u0A95';
  BhartiGopika[186] = Gujarati.letter_TA + Gujarati.sign_VIRAMA + Gujarati.letter_RA + Gujarati.sign_VIRAMA;
  BhartiGopika[187] = Gujarati.letter_SSA + Gujarati.sign_VIRAMA;
  BhartiGopika[188] = Gujarati.letter_BHA;
  BhartiGopika[189] = Gujarati.letter_GHA;
  BhartiGopika[190] = Gujarati.letter_KHA;
  BhartiGopika[191] = Gujarati.letter_JA + Gujarati.sign_VIRAMA + Gujarati.letter_NYA + Gujarati.sign_VIRAMA;
  // BhartiGopika[192] = // not Visible
  BhartiGopika[193] = Gujarati.letter_RA + Gujarati.vowel_SIGN_U;
  BhartiGopika[194] = Gujarati.vowel_SIGN_I;
  BhartiGopika[195] = Gujarati.letter_PA + Gujarati.sign_VIRAMA;
  BhartiGopika[196] = Gujarati.letter_DHA;
  BhartiGopika[197] = Gujarati.letter_NYA + Gujarati.sign_VIRAMA;
  BhartiGopika[198] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_DA;
  BhartiGopika[199] = Gujarati.letter_BHA + Gujarati.sign_VIRAMA;
  BhartiGopika[200] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_MA;
  BhartiGopika[201] = Gujarati.letter_VOCALIC_R;
  BhartiGopika[202] = Gujarati.letter_NGA;
  BhartiGopika[203] = Gujarati.letter_DA;
  BhartiGopika[204] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_YA + Gujarati.sign_VIRAMA;
  BhartiGopika[205] = Gujarati.letter_JHA;
  BhartiGopika[206] = Gujarati.letter_GHA + Gujarati.sign_VIRAMA;
  BhartiGopika[207] = Gujarati.letter_KHA + Gujarati.sign_VIRAMA;
  BhartiGopika[209] = Gujarati.letter_NGA + Gujarati.sign_VIRAMA + Gujarati.letter_KA;
  BhartiGopika[210] = Gujarati.letter_NA + Gujarati.sign_VIRAMA + Gujarati.letter_NA + Gujarati.sign_VIRAMA;
  BhartiGopika[211] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_YA + Gujarati.sign_VIRAMA;
  BhartiGopika[212] = Gujarati.letter_VA + Gujarati.sign_VIRAMA;
  BhartiGopika[213] = Gujarati.letter_LA + Gujarati.sign_VIRAMA;
  BhartiGopika[214] = Gujarati.letter_NGA + Gujarati.sign_VIRAMA + Gujarati.letter_KHA;
  BhartiGopika[216] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_DHA;
  BhartiGopika[217] = Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  BhartiGopika[218] = Gujarati.letter_THA + Gujarati.sign_VIRAMA;
  BhartiGopika[219] = Gujarati.letter_NNA + Gujarati.sign_VIRAMA;
  BhartiGopika[220] = Gujarati.letter_NGA + Gujarati.sign_VIRAMA + Gujarati.letter_GA;
  BhartiGopika[221] = Gujarati.letter_VOCALIC_L;
  BhartiGopika[222] = Gujarati.letter_YA;
  BhartiGopika[223] = Gujarati.letter_JA + Gujarati.sign_VIRAMA;
  BhartiGopika[224] = Gujarati.sign_AVAGRAHA;
  BhartiGopika[225] = Gujarati.letter_DA + Gujarati.vowel_SIGN_VOCALIC_R;
  BhartiGopika[226] = Gujarati.sign_VIRAMA + Gujarati.letter_YA;
  BhartiGopika[227] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_YA;
  BhartiGopika[228] = Gujarati.letter_JA + Gujarati.sign_VIRAMA + Gujarati.letter_JA;
  BhartiGopika[229] = Gujarati.letter_CA + Gujarati.sign_VIRAMA;
  BhartiGopika[230] = Gujarati.letter_DHA + Gujarati.sign_VIRAMA;
  BhartiGopika[231] = Gujarati.letter_BA + Gujarati.sign_VIRAMA;
  BhartiGopika[232] = Gujarati.letter_TTA + Gujarati.sign_VIRAMA + Gujarati.letter_TTA;
  BhartiGopika[233] = Gujarati.letter_LLA + Gujarati.sign_VIRAMA;
  BhartiGopika[234] = Gujarati.letter_TTHA + Gujarati.sign_VIRAMA + Gujarati.letter_TTHA;
  BhartiGopika[235] = Gujarati.letter_DDHA + Gujarati.sign_VIRAMA + Gujarati.letter_DDHA;
  BhartiGopika[236] = Gujarati.vowel_SIGN_CANDRA_E;
  BhartiGopika[237] = Gujarati.letter_TA + Gujarati.sign_VIRAMA;
  BhartiGopika[238] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_VA;
  BhartiGopika[239] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA + Gujarati.letter_VA;
  BhartiGopika[240] = Gujarati.letter_VA;
  BhartiGopika[241] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_MA;
  BhartiGopika[242] = Gujarati.letter_JA + Gujarati.vowel_SIGN_AA;
  BhartiGopika[243] = Gujarati.letter_PA + Gujarati.sign_VIRAMA + Gujarati.letter_TA;
  BhartiGopika[244] = Gujarati.letter_U + Gujarati.sign_ANUSVARA;
  BhartiGopika[245] = Gujarati.letter_KA + Gujarati.sign_VIRAMA;
  BhartiGopika[246] = Gujarati.letter_HA + Gujarati.sign_VIRAMA + Gujarati.letter_NA;
  BhartiGopika[247] = Gujarati.letter_LA;
  BhartiGopika[248] = Gujarati.letter_GA + Gujarati.sign_VIRAMA;
  BhartiGopika[249] = Gujarati.letter_SHA + Gujarati.sign_VIRAMA + Gujarati.letter_CA;
  BhartiGopika[250] = Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  BhartiGopika[251] = Gujarati.letter_KA + Gujarati.sign_VIRAMA + Gujarati.letter_SSA + Gujarati.sign_VIRAMA;
  BhartiGopika[252] = Gujarati.letter_SSA + Gujarati.sign_VIRAMA + Gujarati.letter_TTA;
  BhartiGopika[253] = Gujarati.letter_NNA;
  BhartiGopika[254] = Gujarati.letter_SHA;
  BhartiGopika[255] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  BhartiGopika[376] = Gujarati.letter_UU + Gujarati.sign_ANUSVARA;

  //start DVS works
  BhartiGopika[338] = Gujarati.letter_TA;
  BhartiGopika[339] = Gujarati.letter_DDA + Gujarati.sign_VIRAMA + Gujarati.letter_DDA;
  BhartiGopika[352] = Gujarati.letter_RA + Gujarati.sign_VIRAMA + Gujarati.vowel_SIGN_I;
  BhartiGopika[353] = Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_U;
  BhartiGopika[381] = Gujarati.letter_THA;
  BhartiGopika[382] = Gujarati.letter_KA + Gujarati.sign_VIRAMA; //need Zero With Joiner
  BhartiGopika[402] = Gujarati.letter_BA;
  //BhartiGopika[710] // probably single char "'"
  //BhartiGopika[8211] = //!unicode -
  //BhartiGopika[8212] = //----
  //BhartiGopika[8216] = // probably single char "'"
  //BhartiGopika[8217] = // probably single char "'"
  BhartiGopika[8218] = Gujarati.letter_SA;
  //BhartiGopika[8220] = //
  //BhartiGopika[8221] = //
  BhartiGopika[8222] = Gujarati.letter_GA;
  BhartiGopika[8224] =
    Gujarati.letter_SA + Gujarati.sign_VIRAMA + Gujarati.letter_TA + Gujarati.sign_VIRAMA + Gujarati.letter_RA;
  BhartiGopika[8225] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_YA + Gujarati.sign_VIRAMA;
  //BhartiGopika[8226] = //

  //end DVS works

  BhartiGopika[8230] = Gujarati.letter_PA;
  BhartiGopika[8240] = Gujarati.sign_VIRAMA + Gujarati.letter_RA + Gujarati.vowel_SIGN_UU;
  BhartiGopika[8249] = Gujarati.letter_RA + Gujarati.sign_VIRAMA + Gujarati.vowel_SIGN_I + Gujarati.sign_ANUSVARA;
  BhartiGopika[8250] = Gujarati.sign_VIRAMA + Gujarati.letter_RA + Gujarati.vowel_SIGN_U;
  BhartiGopika[8482] = Gujarati.letter_NA;
  BhartiGopika[8725] = Gujarati.letter_DA + Gujarati.sign_VIRAMA + Gujarati.letter_YA;

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
    8230,
    8482,
    8222,
    8224,
    8225,
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
    8230,
    8482,
    8222,
    8224,
    8225,
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
      wordArr.splice(rephaAnusvaraIndex, 1, '\u006F', '\u0074');
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
      output += BhartiGopika[char.codePointAt(0)] || char;
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

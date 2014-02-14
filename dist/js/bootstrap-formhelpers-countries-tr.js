if (!jQuery) { throw new Error("Bootstrap Form Helpers requires jQuery"); }

/* ==========================================================
 * bootstrap-formhelpers-countries.en_US.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2012 Vincent Lamanna
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
 
var BFHCountriesList = {
  'AF': ' Afganistan ',                 
  'EG': ' Mısır ',
  'AX': ' Aland ',
  'AL': ' Arnavutluk / Kosova ',
  'DZ': ' Cezayir ',
  'AS': ' Amerikan Samoa ',
  'VI': ' ABD Virgin Adaları ',
  'AD': ' Andorra ',
  'AO': ' Angola ',
  'AI': ' Anguilla ',
  'AQ': ' Antarktika ',
  'AG': ' Antigua ve Barbuda ',
  'GQ': ' Ekvator Ginesi ',
  'AR': ' Arjantin ',
  'AM': ' Ermenistan ', 
  'AW': ' Aruba ',
  'AC': ' Yükseliş ', 
  'AZ': ' Azerbaycan ',
  'ET': ' Etiyopya ',
  'AU': ' Avustralya ',
  'BS': ' Bahamalar ',
  'BH': ' Bahreyn ',
  'BD': ' Bangladeş ',
  'BB': ' Barbados ',
  'BE': ' Belçika ',
  'BZ': ' Belize ', 
  'BJ': ' Benin ',
  'BM': ' Bermuda ',
  'BT': ' Butan ',
  'BO': ' Bolivya ',
  'BA': ' Bosna Hersek ',
  'BW': ' Botsvana ',
  'BV': ' Bouvet Adası ', 
  'BR': ' Brezilya ',
  'BN': ' Brunei ',
  'BG': ' Bulgaristan ', 
  'BF': ' Burkina Faso ',
  'BI': ' Burundi ',
  'CL': ' Şili ',
  'CN': ' Çin ',
  'CK': ' Cook Adaları ',
  'CR': ' Kosta Rika ', 
  'CI': ' Cote d\'Ivoire ', 
  'DK': ' Danimarka ',
  'DE': ' Almanya ', 
  'DG': ' Diego Garcia ',
  'DM': ' Dominika ',
  'DO': ' Dominik Cumhuriyeti ',
  'DJ': ' Cibuti ',
  'EC': ' Ekvador ',
  'SV': ' El Salvador ', 
  'ER': ' Eritre ',
  'EE': ' Estonya ',
  'EU': ' Avrupa Birliği ', 
  'FK': ' Falkland Adaları ',
  'FO': ' Faroe Adaları ',
  'FJ': ' Fiji ',
  'FI': ' Finlandiya ',
  'FR': ' Fransa ',
  'GF': ' Fransız Guyanası ',
  'PF': ' Fransız Polinezyası ',
  'GA': ' Gabon ',
  'GM': ' Gambia ',
  'GE': ' Gürcistan ',
  'GH': ' Gana ',
  'GI': ' Cebelitarık ',
  'GD': ' Grenada ',
  'GR': ' Yunanistan ',
  'GL': ' Grönland ',
  'GB': ' Birleşik Krallık ',
  'CP': ' Guadeloupe ',
  'GU': ' Guam ',
  'GT': ' Guatemala ',
  'GG': ' Guernsey ',
  'GN': ' Guinea ',
  'GW': ' Gine - Bissau ',
  'GY': ' Guyana ',
  'HT': ' Haiti ',
  'HM': ' Heard Adası ve McDonald Adaları ',
  'HN': ' Honduras ',
  'HK': ' Hong Kong ',
  'IN': ' Hindistan ',
  'ID': ' Endonezya ',
  'IQ': ' Irak ',
  'IR': ' İran ',
  'IE': ' İrlanda ',
  'IS': ' İzlanda ',
  'IL': ' İsrail ',
  'IT': ' İtalya ',
  'JM': ' Jamaika ',
  'JP': ' Japonya ',
  'YE': ' Yemen ',
  'JE': ' Jersey ',
  'JO': ' Jordan ',
  'KY': ' Cayman Adaları ',
  'KH': ' Kamboçya ',
  'CM': ' Kamerun ',
  'CA': ' Kanada ',
  'IC': ' Kanarya Adaları ',
  'CV': ' Cape Verde ',
  'KZ': ' Kazakistan ',
  'QA': ' Katar ',
  'KE': ' Kenya ',
  'KG': ' Kırgızistan ',
  'KI': ' Kiribati ',
  'CC': ' Cocos Adaları ',
  'CO': ' Kolombiya ',
  'KM': ' Komorlar ',
  'CG': ' Congo ',
  'HR': ' Hırvatistan ',
  'CU': ' Küba ', 
  'KW': ' Kuveyt ',
  'LA': ' Laos ', 
  'LS': ' Lesotho ',
  'LV': ' Letonya ',
  'LB': ' Lübnan ',
  'LR': ' Liberia ',
  'LY': ' Libya ',
  'LI': ' Liechtenstein ',
  'LT': ' Litvanya ',
  'LU': ' Lüksemburg ',
  'MO': ' Macau ',
  'MG': ' Madagaskar ',
  'MW': ' Malavi ',
  'MY': ' Malezya ',
  'MV': ' Maldivler ',
  'ML': ' Mali ',
  'MT': ' Malta ',
  'MA': ' Fas ',
  'MH': ' Marshall Adaları ',
  'MQ': ' Martinique ',
  'MR': ' Moritanya ',
  'MU': ' Mauritius ',
  'YT': ' Mayotte ',
  'MK': ' Makedonya ',
  'MX': ' Meksika ', 
  'FM': ' Mikronezya ', 
  'MD': ' Moldova ',
  'MC': ' Monako ',
  'MN': ' Moğolistan ',
  'MS': ' Montserrat ',
  'MZ': ' Mozambik ',
  'MM': ' Myanmar ',
  'NA': ' Namibya ',
  'NR': ' Nauru ',
  'NP': ' Nepal ',
  'NC': ' Caledonia ',
  'NZ': ' Yeni Zelanda ',
  'NT': ' Tarafsız Bölge ', 
  'NI': ' Nikaragua ',
  'NL': ' Hollanda ',
  'AN': ' Hollanda Antilleri ',
  'NE': ' Nijer ',
  'NG': ' Nijerya ',
  'NU': ' Niue ',
  'KP': ' Kuzey Kore ',
  'MP': ' Kuzey Mariana Adaları ',
  'NF': ' Norfolk Adası ', 
  'NO': ' Norveç ',
  'OM': ' Umman ',
  'AT': ' Avusturya ',
  'PK': ' Pakistan ', 
  'PS': ' Filistin ', 
  'PW': ' Palau ',
  'PA': ' Panama ',
  'PG': ' Papua Yeni Gine ',
  'PY': ' Paraguay ',
  'PE': ' Peru ',
  'PH': ' Filipinler ',
  'PN': ' Pitcairn ',
  'PL': ' Polonya ',
  'PT': ' Portekiz ',
  'PR': ' Porto Riko ',
  'RE': ' Reunion ',
  'RW': ' Ruanda ',
  'RO': ' Romanya ',
  'RU': ' Rusya Federasyonu ',
  'SB': ' Solomon Adaları ',
  'ZM': ' Zambiya ',
  'WS': ' Samoa ',
  'SM': ' San Marino ',
  'ST': ' Sao Tome ve Principe ',
  'SA': ' Suudi Arabistan ',
  'SE': ' İsveç ',
  'CH': ' İsviçre ',
  'SN': ' Senegal ',
  'CS': ' Sırbistan ve Karadağ ',
  'SC': ' Seyşeller ',
  'SL': ' Sierra Leone ',
  'ZW': ' Zimbabwe ',
  'SG': ' Singapur ',
  'SK': ' Slovakya ',
  'SI': ' Slovenya ',
  'SO': ' Somali ',
  'ES': ' İspanya ',
  'LK': ' Sri Lanka ',
  'SH': ' Aziz Helena ',
  'KN': ' Aziz Kitts ve Nevis ',
  'LC': ' Aziz Lucia ',
  'PM': ' Aziz Pierre ve Miquelon ',
  'VC': ' Aziz Vincent / Grenadinler ( GB ) ', 
  'ZA': ' Güney Afrika , Cumhuriyeti ',
  'SD': ' Sudan ',
  'KR': ' Güney Kore ',
  'SR': ' Surinam ',
  'SJ': ' Svalbard ve Jan Mayen ',
  'SZ': ' Svaziland ',
  'SY': ' Suriye ',
  'TJ': ' Tacikistan ',
  'TW': ' Tayvan ',
  'TZ': ' Tanzanya ',
  'TH': ' Tayland ',
  'TL': ' Doğu Timor ',
  'TG': ' Togo ',
  'TK': ' Tokelau ',
  'TO': ' Tonga ',
  'TT': ' Trinidad ve Tobago ',
  'TA': ' Tristan da Cunha ',
  'TD': ' Chad ',
  'CZ': ' Çek Cumhuriyeti ',
  'TN': ' Tunus ', 
  'TR': ' Türkiye ', 
  'TM': ' Türkmenistan ', 
  'TC': ' Turks ve Caicos Adaları ',
  'TV': ' Tuvalu ',
  'UG': ' Uganda ',
  'UA': ' Ukrayna ',
  'HU': ' Macaristan ',
  'UY': ' Uruguay ',
  'UZ': ' Özbekistan ',
  'VU': ' Vanuatu ',
  'VA': ' Vatikan ',
  'VE': ' Venezuela ',
  'AE': ' Birleşik Arap Emirlikleri ',
  'US': ' Amerika Birleşik Devletleri ',
  'VN': ' Vietnam ',
  'WF': ' Wallis ve Futuna ',
  'CX': ' Christmas Adası ', 
  'BY': ' Belarus ',
  'EH': ' Batı Sahra ',
  'CF': ' Orta Afrika Cumhuriyeti ', 
  'CY': ' Kıbrıs '
};

/* ==========================================================
 * bootstrap-formhelpers-languages.en_US.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2012 Vincent Lamanna
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
 
var BFHLanguagesList = {
  'om': 'Afaan Oromoo',
  'aa': 'Afaraf',
  'af': 'Afrikaans',
  'ak': 'Akan',
  'an': 'aragonés',
  'ig': 'Asụsụ Igbo',
  'gn': 'Avañe\'ẽ',
  'ae': 'avesta',
  'ay': 'aymar aru',
  'az': 'azərbaycan dili',
  'id': 'Bahasa Indonesia',
  'ms': 'bahasa Melayu',
  'bm': 'bamanankan',
  'jv': 'basa Jawa',
  'su': 'Basa Sunda',
  'bi': 'Bislama',
  'bs': 'bosanski jezik',
  'br': 'brezhoneg',
  'ca': 'català',
  'ch': 'Chamoru',
  'ny': 'chiCheŵa',
  'sn': 'chiShona',
  'co': 'corsu',
  'cy': 'Cymraeg',
  'da': 'dansk',
  'se': 'Davvisámegiella',
  'de': 'Deutsch',
  'nv': 'Diné bizaad',
  'et': 'eesti',
  'na': 'Ekakairũ Naoero',
  'en': 'English',
  'es': 'español',
  'eo': 'Esperanto',
  'eu': 'euskara',
  'ee': 'Eʋegbe',
  'to': 'faka Tonga',
  'mg': 'fiteny malagasy',
  'fr': 'français',
  'fy': 'Frysk',
  'ff': 'Fulfulde',
  'fo': 'føroyskt',
  'ga': 'Gaeilge',
  'gv': 'Gaelg',
  'sm': 'gagana fa\'a Samoa',
  'gl': 'galego',
  'sq': 'gjuha shqipe',
  'gd': 'Gàidhlig',
  'ki': 'Gĩkũyũ',
  'ha': 'Hausa',
  'ho': 'Hiri Motu',
  'hr': 'hrvatski jezik',
  'io': 'Ido',
  'rw': 'Ikinyarwanda',
  'rn': 'Ikirundi',
  'ia': 'Interlingua',
  'nd': 'isiNdebele',
  'nr': 'isiNdebele',
  'xh': 'isiXhosa',
  'zu': 'isiZulu',
  'it': 'italiano',
  'ik': 'Iñupiaq',
  'pl': 'polski',
  'mh': 'Kajin M̧ajeļ',
  'kl': 'kalaallisut',
  'kr': 'Kanuri',
  'kw': 'Kernewek',
  'kg': 'KiKongo',
  'sw': 'Kiswahili',
  'ht': 'Kreyòl ayisyen',
  'kj': 'Kuanyama',
  'ku': 'Kurdî',
  'la': 'latine',
  'lv': 'latviešu valoda',
  'lt': 'lietuvių kalba',
  'ro': 'limba română',
  'li': 'Limburgs',
  'ln': 'Lingála',
  'lg': 'Luganda',
  'lb': 'Lëtzebuergesch',
  'hu': 'magyar',
  'mt': 'Malti',
  'nl': 'Nederlands',
  'no': 'Norsk',
  'nb': 'Norsk bokmål',
  'nn': 'Norsk nynorsk',
  'uz': 'O\'zbek',
  'oc': 'occitan',
  'ie': 'Interlingue',
  'hz': 'Otjiherero',
  'ng': 'Owambo',
  'pt': 'português',
  'ty': 'Reo Tahiti',
  'rm': 'rumantsch grischun',
  'qu': 'Runa Simi',
  'sc': 'sardu',
  'za': 'Saɯ cueŋƅ',
  'st': 'Sesotho',
  'tn': 'Setswana',
  'ss': 'SiSwati',
  'sl': 'slovenski jezik',
  'sk': 'slovenčina',
  'so': 'Soomaaliga',
  'fi': 'suomi',
  'sv': 'Svenska',
  'mi': 'te reo Māori',
  'vi': 'Tiếng Việt',
  'lu': 'Tshiluba',
  've': 'Tshivenḓa',
  'tw': 'Twi',
  'tk': 'Türkmen',
  'tr': 'Türkçe',
  'ug': 'Uyƣurqə',
  'vo': 'Volapük',
  'fj': 'vosa Vakaviti',
  'wa': 'walon',
  'tl': 'Wikang Tagalog',
  'wo': 'Wollof',
  'ts': 'Xitsonga',
  'yo': 'Yorùbá',
  'sg': 'yângâ tî sängö',
  'is': 'Íslenska',
  'cs': 'čeština',
  'el': 'ελληνικά',
  'av': 'авар мацӀ',
  'ab': 'аҧсуа бызшәа',
  'ba': 'башҡорт теле',
  'be': 'беларуская мова',
  'bg': 'български език',
  'os': 'ирон æвзаг',
  'kv': 'коми кыв',
  'ky': 'Кыргызча',
  'mk': 'македонски јазик',
  'mn': 'монгол',
  'ce': 'нохчийн мотт',
  'ru': 'русский язык',
  'sr': 'српски језик',
  'tt': 'татар теле',
  'tg': 'тоҷикӣ',
  'uk': 'українська мова',
  'cv': 'чӑваш чӗлхи',
  'cu': 'ѩзыкъ словѣньскъ',
  'kk': 'қазақ тілі',
  'hy': 'Հայերեն',
  'yi': 'ייִדיש',
  'he': 'עברית',
  'ur': 'اردو',
  'ar': 'العربية',
  'fa': 'فارسی',
  'ps': 'پښتو',
  'ks': 'कश्मीरी',
  'ne': 'नेपाली',
  'pi': 'पाऴि',
  'bh': 'भोजपुरी',
  'mr': 'मराठी',
  'sa': 'संस्कृतम्',
  'sd': 'सिन्धी',
  'hi': 'हिन्दी',
  'as': 'অসমীয়া',
  'bn': 'বাংলা',
  'pa': 'ਪੰਜਾਬੀ',
  'gu': 'ગુજરાતી',
  'or': 'ଓଡ଼ିଆ',
  'ta': 'தமிழ்',
  'te': 'తెలుగు',
  'kn': 'ಕನ್ನಡ',
  'ml': 'മലയാളം',
  'si': 'සිංහල',
  'th': 'ไทย',
  'lo': 'ພາສາລາວ',
  'bo': 'བོད་ཡིག',
  'dz': 'རྫོང་ཁ',
  'my': 'ဗမာစာ',
  'ka': 'ქართული',
  'ti': 'ትግርኛ',
  'am': 'አማርኛ',
  'iu': 'ᐃᓄᒃᑎᑐᑦ',
  'oj': 'ᐊᓂᔑᓈᐯᒧᐎᓐ',
  'cr': 'ᓀᐦᐃᔭᐍᐏᐣ',
  'km': 'ខ្មែរ',
  'zh': '中文 (Zhōngwén)',
  'ja': '日本語 (にほんご)',
  'ii': 'ꆈꌠ꒿ Nuosuhxop',
  'ko': '한국어 (韓國語)'
};

/* ==========================================================
 * bootstrap-formhelpers-countries.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2012 Vincent Lamanna
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) {

  'use strict';


  /* COUNTRIES CLASS DEFINITION
   * ====================== */

  var BFHCountries = function (element, options) {
    this.options = $.extend({}, $.fn.bfhcountries.defaults, options);
    this.$element = $(element);

    if (this.$element.is('select')) {
      this.addCountries();
    }

    if (this.$element.hasClass('bfh-selectbox')) {
      this.addBootstrapCountries();
    }

    if (this.$element.is('span')) {
      this.displayCountry();
    }
  };

  BFHCountries.prototype = {

    constructor: BFHCountries,

    getCountries: function() {
      var country,
          countries;

      if (this.options.available) {
        if (typeof this.options.available === 'string') {
          countries = [];
  
          this.options.available = this.options.available.split(',');
  
          for (country in BFHCountriesList) {
            if (BFHCountriesList.hasOwnProperty(country)) {
              if ($.inArray(country, this.options.available) >= 0) {
                countries[country] = BFHCountriesList[country];
              }
            }
          }
        } else {
          countries = this.options.available;
        }

        return countries;
      } else {
        return BFHCountriesList;
      }
    },

    addCountries: function () {
      var value,
          country,
          countries;

      value = this.options.country;
      countries = this.getCountries();

      this.$element.html('');

      if (this.options.blank === true) {
        this.$element.append('<option value=""></option>');
      }

      for (country in countries) {
        if (countries.hasOwnProperty(country)) {
          this.$element.append('<option value="' + country + '">' + countries[country] + '</option>');
        }
      }

      this.$element.val(value);
    },

    addBootstrapCountries: function() {
      var $input,
          $toggle,
          $options,
          value,
          country,
          countries;

      value = this.options.country;
      $input = this.$element.find('input[type="hidden"]');
      $toggle = this.$element.find('.bfh-selectbox-option');
      $options = this.$element.find('[role=option]');
      countries = this.getCountries();

      $options.html('');

      if (this.options.blank === true) {
        $options.append('<li><a tabindex="-1" href="#" data-option=""></a></li>');
      }

      for (country in countries) {
        if (countries.hasOwnProperty(country)) {
          if (this.options.flags === true) {
            $options.append('<li><a tabindex="-1" href="#" data-option="' + country + '"><i class="glyphicon bfh-flag-' + country + '"></i>' + countries[country] + '</a></li>');
          } else {
            $options.append('<li><a tabindex="-1" href="#" data-option="' + country + '">' + countries[country] + '</a></li>');
          }
        }
      }

      this.$element.val(value);
    },

    displayCountry: function () {
      var value;

      value = this.options.country;

      if (this.options.flags === true) {
        this.$element.html('<i class="glyphicon bfh-flag-' + value + '"></i> ' + BFHCountriesList[value]);
      } else {
        this.$element.html(BFHCountriesList[value]);
      }
    }

  };


  /* COUNTRY PLUGIN DEFINITION
   * ======================= */

  var old = $.fn.bfhcountries;

  $.fn.bfhcountries = function (option) {
    return this.each(function () {
      var $this,
          data,
          options;

      $this = $(this);
      data = $this.data('bfhcountries');
      options = typeof option === 'object' && option;

      if (!data) {
        $this.data('bfhcountries', (data = new BFHCountries(this, options)));
      }
      if (typeof option === 'string') {
        data[option].call($this);
      }
    });
  };

  $.fn.bfhcountries.Constructor = BFHCountries;

  $.fn.bfhcountries.defaults = {
    country: '',
    available: '',
    flags: false,
    blank: true
  };


  /* COUNTRY NO CONFLICT
   * ========================== */

  $.fn.bfhcountries.noConflict = function () {
    $.fn.bfhcountries = old;
    return this;
  };


  /* COUNTRY DATA-API
   * ============== */

  $(document).ready( function () {
    $('form select.bfh-countries, span.bfh-countries, div.bfh-countries').each(function () {
      var $countries;

      $countries = $(this);

      if ($countries.hasClass('bfh-selectbox')) {
        $countries.bfhselectbox($countries.data());
      }
      $countries.bfhcountries($countries.data());
    });
  });

}(window.jQuery);



/* ==========================================================
 * bootstrap-formhelpers-languages.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2012 Vincent Lamanna
 * Contribution 2013 Tomasz Kuter
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) {

  'use strict';


  /* LANGUAGES CLASS DEFINITION
   * ====================== */

  var BFHLanguages = function (element, options) {
    this.options = $.extend({}, $.fn.bfhlanguages.defaults, options);
    this.$element = $(element);

    if (this.$element.is('select')) {
      this.addLanguages();
    }

    if (this.$element.is('span')) {
      this.displayLanguage();
    }

    if (this.$element.hasClass('bfh-selectbox')) {
      this.addBootstrapLanguages();
    }
  };

  BFHLanguages.prototype = {

    constructor: BFHLanguages,

    getLanguages: function () {
      var split,
          language,
          languages;

      if (this.options.available) {
        languages = [];

        this.options.available = this.options.available.split(',');

        for (language in this.options.available) {
          if (this.options.available.hasOwnProperty(language)) {
            if (this.options.available[language].indexOf('_') !== -1) {
              split = this.options.available[language].split('_');
              languages[split[0]] = {name: BFHLanguagesList[split[0]], country: split[1]};
            } else {
              languages[this.options.available[language]] = BFHLanguagesList[this.options.available[language]];
            }
          }
        }

        return languages;
      } else {
        return BFHLanguagesList;
      }
    },

    addLanguages: function () {
      var split,
          value,
          languages,
          language;

      value = this.options.language;
      languages = this.getLanguages();

      this.$element.html('');

      if (this.options.blank === true) {
        this.$element.append('<option value=""></option>');
      }

      for (language in languages) {
        if (languages.hasOwnProperty(language)) {
          if (languages[language].hasOwnProperty('name')) {
            this.$element.append('<option value="' + language + '_' + languages[language].country + '">' + languages[language].name.toProperCase() + ' (' + BFHCountriesList[languages[language].country] + ')</option>');
          } else {
            this.$element.append('<option value="' + language + '">' + languages[language].toProperCase() + '</option>');
          }
        }
      }

      this.$element.val(value);
    },

    addBootstrapLanguages: function() {
      var $input,
          $toggle,
          $options,
          value,
          languages,
          language,
          split;

      value = this.options.language;
      $input = this.$element.find('input[type="hidden"]');
      $toggle = this.$element.find('.bfh-selectbox-option');
      $options = this.$element.find('[role=option]');
      languages = this.getLanguages();

      $options.html('');

      if (this.options.blank === true) {
        $options.append('<li><a tabindex="-1" href="#" data-option=""></a></li>');
      }

      for (language in languages) {
        if (languages.hasOwnProperty(language)) {
          if (languages[language].hasOwnProperty('name')) {
            if (this.options.flags === true) {
              $options.append('<li><a tabindex="-1" href="#" data-option="' + language + '_' + languages[language].country + '"><i class="glyphicon bfh-flag-' + languages[language].country + '"></i>' + languages[language].name.toProperCase() + '</a></li>');
            } else {
              $options.append('<li><a tabindex="-1" href="#" data-option="' + language + '_' + languages[language].country + '">' + languages[language].name.toProperCase() + ' (' + BFHCountriesList[languages[language].country] + ')</a></li>');
            }
          } else {
            $options.append('<li><a tabindex="-1" href="#" data-option="' + language + '">' + languages[language] + '</a></li>');
          }
        }
      }

      this.$element.val(value);
    },

    displayLanguage: function () {
      var value;

      value = this.options.language;

      if (value.indexOf('_') !== -1) {
        value = value.split('_');
        if (this.options.flags === true) {
          this.$element.html('<i class="glyphicon bfh-flag-' + value[1] + '"></i> ' + BFHLanguagesList[value[0]].toProperCase());
        } else {
          this.$element.html(BFHLanguagesList[value[0]].toProperCase() + ' (' + BFHCountriesList[value[1]] + ')');
        }
      } else {
        this.$element.html(BFHLanguagesList[value].toProperCase());
      }
    }

  };


  /* LANGUAGES PLUGIN DEFINITION
   * ======================= */

  var old = $.fn.bfhlanguages;

  $.fn.bfhlanguages = function (option) {
    return this.each(function () {
      var $this,
          data,
          options;

      $this = $(this);
      data = $this.data('bfhlanguages');
      options = typeof option === 'object' && option;

      if (!data) {
        $this.data('bfhlanguages', (data = new BFHLanguages(this, options)));
      }
      if (typeof option === 'string') {
        data[option].call($this);
      }
    });
  };

  $.fn.bfhlanguages.Constructor = BFHLanguages;

  $.fn.bfhlanguages.defaults = {
    language: '',
    available: '',
    flags: false,
    blank: true
  };


  /* LANGUAGES NO CONFLICT
   * ========================== */

  $.fn.bfhlanguages.noConflict = function () {
    $.fn.bfhlanguages = old;
    return this;
  };


  /* LANGUAGES DATA-API
   * ============== */

  $(document).ready( function () {
    $('form select.bfh-languages, span.bfh-languages, div.bfh-languages').each(function () {
      var $languages;

      $languages = $(this);

      if ($languages.hasClass('bfh-selectbox')) {
        $languages.bfhselectbox($languages.data());
      }
      $languages.bfhlanguages($languages.data());
    });
  });


  /* LANGUAGES HELPERS
   * ============== */

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };

}(window.jQuery);



/* ==========================================================
 * bootstrap-formhelpers-selectbox.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2012 Vincent Lamanna
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) {

  'use strict';


  /* SELECTBOX CLASS DEFINITION
   * ========================= */

  var toggle = '[data-toggle=bfh-selectbox]',
      BFHSelectBox = function (element, options) {
        this.options = $.extend({}, $.fn.bfhselectbox.defaults, options);
        this.$element = $(element);

        this.initSelectBox();
      };

  BFHSelectBox.prototype = {

    constructor: BFHSelectBox,

    initSelectBox: function () {
      var options;

      options = '';
      this.$element.find('div').each(function() {
        options = options + '<li><a tabindex="-1" href="#" data-option="' + $(this).data('value') + '">' + $(this).html() + '</a></li>';
      });

      this.$element.html(
        '<input type="hidden" name="' + this.options.name + '" value="">' +
    '<a class="bfh-selectbox-toggle ' + this.options.input + '" role="button" data-toggle="bfh-selectbox" href="#">' +
    '<span class="bfh-selectbox-option"></span>' +
    '<span class="' + this.options.icon + ' selectbox-caret"></span>' +
    '</a>' +
    '<div class="bfh-selectbox-options">' +
    '<div role="listbox">' +
    '<ul role="option">' +
    '</ul>' +
    '</div>' +
    '</div>'
      );

      this.$element.find('[role=option]').html(options);

      if (this.options.filter === true) {
        this.$element.find('.bfh-selectbox-options').prepend('<div class="bfh-selectbox-filter-container"><input type="text" class="bfh-selectbox-filter form-control"></div>');
      }

      this.$element.val(this.options.value);

      this.$element
        .on('click.bfhselectbox.data-api touchstart.bfhselectbox.data-api', toggle, BFHSelectBox.prototype.toggle)
    .on('keydown.bfhselectbox.data-api', toggle + ', [role=option]' , BFHSelectBox.prototype.keydown)
    .on('mouseenter.bfhselectbox.data-api', '[role=option] > li > a', BFHSelectBox.prototype.mouseenter)
    .on('click.bfhselectbox.data-api', '[role=option] > li > a', BFHSelectBox.prototype.select)
    .on('click.bfhselectbox.data-api', '.bfh-selectbox-filter', function () { return false; })
    .on('propertychange.bfhselectbox.data-api change.bfhselectbox.data-api input.bfhselectbox.data-api paste.bfhselectbox.data-api', '.bfh-selectbox-filter', BFHSelectBox.prototype.filter);
    },

    toggle: function (e) {
      var $this,
          $parent,
          isActive;

      $this = $(this);
      $parent = getParent($this);

      if ($parent.is('.disabled') || $parent.attr('disabled') !== undefined) {
        return true;
      }

      isActive = $parent.hasClass('open');

      clearMenus();

      if (!isActive) {
        $parent.trigger(e = $.Event('show.bfhselectbox'));

        if (e.isDefaultPrevented()) {
          return true;
        }

        $parent
          .toggleClass('open')
          .trigger('shown.bfhselectbox')
          .find('[role=option] > li > [data-option="' + $parent.val() + '"]').focus();
      }

      return false;
    },

    filter: function() {
      var $this,
          $parent,
          $items;

      $this = $(this);
      $parent = getParent($this);

      $items = $('[role=option] li a', $parent);
      $items
        .hide()
        .filter(function() {
          return ($(this).text().toUpperCase().indexOf($this.val().toUpperCase()) !== -1);
        })
        .show();
    },

    keydown: function (e) {
      var $this,
          $items,
          $parent,
          $subItems,
          isActive,
          index,
          selectedIndex;

      if (!/(38|40|27)/.test(e.keyCode)) {
        return true;
      }

      $this = $(this);

      e.preventDefault();
      e.stopPropagation();

      $parent = getParent($this);
      isActive = $parent.hasClass('open');

      if (!isActive || (isActive && e.keyCode === 27)) {
        if (e.which === 27) {
          $parent.find(toggle).focus();
        }

        return $this.click();
      }

      $items = $('[role=option] li:not(.divider) a:visible', $parent);

      if (!$items.length) {
        return true;
      }

      $('body').off('mouseenter.bfh-selectbox.data-api', '[role=option] > li > a', BFHSelectBox.prototype.mouseenter);
      index = $items.index($items.filter(':focus'));

      if (e.keyCode === 38 && index > 0) {
        index = index - 1;
      }

      if (e.keyCode === 40 && index < $items.length - 1) {
        index = index + 1;
      }

      if (!index) {
        index = 0;
      }

      $items.eq(index).focus();
      $('body').on('mouseenter.bfh-selectbox.data-api', '[role=option] > li > a', BFHSelectBox.prototype.mouseenter);
    },

    mouseenter: function () {
      var $this;

      $this = $(this);

      $this.focus();
    },

    select: function (e) {
      var $this,
          $parent,
          $span,
          $input;

      $this = $(this);

      e.preventDefault();
      e.stopPropagation();

      if ($this.is('.disabled') || $this.attr('disabled') !== undefined) {
        return true;
      }

      $parent = getParent($this);

      $parent.val($this.data('option'));
      $parent.trigger('change.bfhselectbox');

      clearMenus();
    }

  };

  function clearMenus() {
    var $parent;

    $(toggle).each(function (e) {
      $parent = getParent($(this));

      if (!$parent.hasClass('open')) {
        return true;
      }

      $parent.trigger(e = $.Event('hide.bfhselectbox'));

      if (e.isDefaultPrevented()) {
        return true;
      }

      $parent
        .removeClass('open')
        .trigger('hidden.bfhselectbox');
    });
  }

  function getParent($this) {
    return $this.closest('.bfh-selectbox');
  }


  /* SELECTBOX PLUGIN DEFINITION
   * ========================== */

  var old = $.fn.bfhselectbox;

  $.fn.bfhselectbox = function (option) {
    return this.each(function () {
      var $this,
          data,
          options;

      $this = $(this);
      data = $this.data('bfhselectbox');
      options = typeof option === 'object' && option;
      this.type = 'bfhselectbox';

      if (!data) {
        $this.data('bfhselectbox', (data = new BFHSelectBox(this, options)));
      }
      if (typeof option === 'string') {
        data[option].call($this);
      }
    });
  };

  $.fn.bfhselectbox.Constructor = BFHSelectBox;

  $.fn.bfhselectbox.defaults = {
    icon: 'caret',
    input: 'form-control',
    name: '',
    value: '',
    filter: false
  };


  /* SELECTBOX NO CONFLICT
   * ========================== */

  $.fn.bfhselectbox.noConflict = function () {
    $.fn.bfhselectbox = old;
    return this;
  };


  /* SELECTBOX VALHOOKS
   * ========================== */

  var origHook;
  if ($.valHooks.div){
    origHook = $.valHooks.div;
  }
  $.valHooks.div = {
    get: function(el) {
      if ($(el).hasClass('bfh-selectbox')) {
        return $(el).find('input[type="hidden"]').val();
      } else if (origHook) {
        return origHook.get(el);
      }
    },
    set: function(el, val) {
      var $el,
          html;

      if ($(el).hasClass('bfh-selectbox')) {

        $el = $(el);
        if ($el.find('li a[data-option=\'' + val + '\']').length > 0) {
          html = $el.find('li a[data-option=\'' + val + '\']').html();
        } else if ($el.find('li a').length > 0) {
          html = $el.find('li a').eq(0).html();
        } else {
          val = '';
          html = '';
        }

        $el.find('input[type="hidden"]').val(val);
        $el.find('.bfh-selectbox-option').html(html);
      } else if (origHook) {
        return origHook.set(el,val);
      }
    }
  };


  /* SELECTBOX DATA-API
   * ============== */

  $(document).ready( function () {
    $('div.bfh-selectbox').each(function () {
      var $selectbox;

      $selectbox = $(this);

      $selectbox.bfhselectbox($selectbox.data());
    });
  });


  /* APPLY TO STANDARD SELECTBOX ELEMENTS
   * =================================== */

  $(document)
    .on('click.bfhselectbox.data-api', clearMenus);

}(window.jQuery);

var translations = {
  "New Year's Day": {
    fi: 'Uudenvuodenpäivä',
    sv: 'Nyårsdagen'
  },
  'Epiphany': {
    fi: 'Loppiainen',
    sv: 'Trettondedagen'
  },
  'Good Friday': {
    fi: 'Pitkäperjantai',
    sv: 'Långfredagen'
  },
  'Easter Sunday': {
    fi: 'Pääsiäispäivä',
    sv: 'Påskdagen'
  },
  'Easter Monday': {
    fi: 'Toinen pääsiäispäivä',
    sv: 'Andra påskdagen'
  },
  'May Day': {
    fi: 'Vappu',
    sv: 'Valborgsmässoafton'
  },
  'Ascension Day': {
    fi: 'Helatorstai',
    sv: 'Kristi himmelfärds dag'
  },
  'Pentecost': {
    fi: 'Helluntaipäivä',
    sv: 'Pingst'
  },
  'Midsummer Eve': {
    fi: 'Juhannusaatto',
    sv: 'Midsommarafton'
  },
  'Midsummer Day': {
    fi: 'Juhannuspäivä',
    sv: 'Midsommardagen'
  },
  "All Saints' Day": {
    fi: 'Pyhäinpäivä',
    sv: 'Alla helgons dag'
  },
  'Independence Day': {
    fi: 'Itsenäisyyspäivä',
    sv: 'Självständighetsdagen'
  },
  'Christmas Eve': {
    fi: 'Jouluaatto',
    sv: 'Julafton'
  },
  'Christmas Day': {
    fi: 'Joulupäivä',
    sv: 'Juldagen'
  },
  "St. Stephen's Day": {
    fi: 'Tapaninpäivä',
    sv: 'Andra juldagen'
  }
};

module.exports = {
  /**
   * Translates the name of a holiday.
   * @param {string} english
   * @param {string} language
   * @return {string}
   */
  translate: function(english, language) {
    if (typeof translations[english] !== 'undefined' && typeof translations[english][language] !== 'undefined') {
      return translations[english][language];
    } else {
      return english;
    }
  }
};

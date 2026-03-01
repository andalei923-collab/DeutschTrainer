// ============================================================
//  lang/fa.js – Persische (Farsi) UI-Texte
//  Deutsch Trainer
//  Sprachcode: fa (ISO 639-1)
//  Schriftrichtung: RTL (rechts nach links)
// ============================================================

const LANG_FA = {

  // ----------------------------------------------------------
  //  Allgemein
  // ----------------------------------------------------------
  weiter:           'ادامه',
  zurueck:          'بازگشت',
  bestaetigen:      'تأیید',
  abbrechen:        'لغو',
  schliessen:       'بستن',
  laden:            'در حال بارگذاری...',
  fehler:           'خطا',
  ja:               'بله',
  nein:             'خیر',

  // ----------------------------------------------------------
  //  Startseite (index.html)
  // ----------------------------------------------------------
  start_titel:      'Deutsch Trainer',
  start_untertitel: 'آلمانی یاد بگیر – بازی کن!',
  start_name_label: 'اسمت چیه؟',
  start_name_ph:    'نام خود را بنویس',
  start_avatar:     'آواتار خود را انتخاب کن',
  start_sprache:    'زبان نمایش',
  start_modus:      'حالت یادگیری',
  start_btn:        'بزن بریم! 🚀',

  // Lernmodi
  modus_normal:     'حالت عادی',
  modus_einfach:    'حالت ساده',
  modus_tap:        'لمس‌کردن',
  modus_normal_info:  'تایپ + انتخاب',
  modus_einfach_info: 'فقط انتخاب',
  modus_tap_info:     'لمس برای ترجمه',

  // ----------------------------------------------------------
  //  Hauptseite / App (app.html)
  // ----------------------------------------------------------
  app_welten:       'دنیاها',
  app_daily:        'چالش امروز',
  app_daily_fertig: '✅ چالش امروز انجام شد!',
  app_daily_btn:    'شروع',
  app_profil:       'پروفایل',
  app_rangliste:    'جدول امتیازات',

  // Welten-Titel
  welt_1: 'دنیای ۱ – حروف و کلمات',
  welt_2: 'دنیای ۲ – جملات',
  welt_3: 'دنیای ۳ – دستور زبان',
  welt_4: 'دنیای ۴ – متن‌خوانی',
  welt_5: 'دنیای ۵ – آزمون نهایی',

  welt_gesperrt:    '🔒 قفل است',
  welt_abzeichen:   'ستاره‌ها:',

  // ----------------------------------------------------------
  //  Theorie-Screen (quiz.html – Phase: theorie)
  // ----------------------------------------------------------
  theorie_zurueck:      '← بازگشت به دنیاها',
  theorie_thema:        'موضوع درس',
  theorie_erklaerung:   'توضیحات',
  theorie_beispiel:     'مثال',
  theorie_merkhilfe:    '💡 نکته کمکی',
  theorie_start_btn:    'شروع آزمون! 🎯',

  // Tap-to-Translate
  tap_hinweis:      'روی کلمات آلمانی ضربه بزن تا ترجمه ببینی',
  tap_popup_de:     'آلمانی:',
  tap_popup_ue:     'ترجمه:',

  // ----------------------------------------------------------
  //  Quiz-Engine (quiz.html – Phase: quiz / js/quiz.js)
  // ----------------------------------------------------------
  quiz_frage_nr:    'سوال %n از %g',
  quiz_pruefen:     'بررسی کن',
  quiz_weiter:      'سوال بعدی →',

  // Fragetyp-Hinweise
  typ_mc:           'یک گزینه را انتخاب کن',
  typ_mehrfach:     'یک یا چند گزینه صحیح را انتخاب کن',
  typ_richtig_falsch:  'درست یا نادرست؟',
  typ_lueckentext:  'جاهای خالی را پر کن',
  typ_satz_korr:    'کلمه اشتباه را پیدا کن و روی آن کلیک کن',
  typ_reihenfolge:  'کلمات را به ترتیب صحیح مرتب کن',
  typ_synonym:      'مترادف را پیدا کن',
  typ_verbinden:    'جفت‌های مناسب را به هم وصل کن',
  typ_homonym:      'معنی درست را در این جمله انتخاب کن',
  typ_steig_bilden: 'صرف صفت را بنویس',
  typ_steig_ordnen: 'مقایسه‌ها را مرتب کن: ضعیف‌ترین → قوی‌ترین',

  // Feedback
  fb_richtig:       'آفرین! ✓',
  fb_falsch:        'اشتباه ✗',
  fb_korrekt_war:   'جواب درست:',
  fb_herz_verloren: '💔 یک قلب از دست دادی',
  fb_keine_herzen:  '💔 همه قلب‌ها تموم شدن!',

  // Richtig/Falsch-Buttons
  rf_richtig:       '✓ درست',
  rf_falsch:        '✗ نادرست',

  // ----------------------------------------------------------
  //  Ergebnis-Screen
  // ----------------------------------------------------------
  ergebnis_toll:      '🎉 عالی بود!',
  ergebnis_gut:       '👍 خوب بود!',
  ergebnis_weiter_so: '💪 ادامه بده!',
  ergebnis_versuch:   '🔄 دوباره تلاش کن!',
  ergebnis_richtig:   '✅ درست:',
  ergebnis_falsch:    '❌ اشتباه:',
  ergebnis_xp:        '⭐ XP به دست آمد:',
  ergebnis_btn_welt:  '← به دنیاها',
  ergebnis_btn_nochmal: '🔄 دوباره',

  // Level-Up
  levelup_titel:    '🎊 تبریک! به سطح %n رسیدی!',

  // ----------------------------------------------------------
  //  Herzen (Lebenspunkte)
  // ----------------------------------------------------------
  herzen_titel:     'قلب‌ها',
  herzen_leer:      'قلب‌ها تموم شدن!',
  herzen_reset:     'فردا دوباره پر میشن ❤️',
  herzen_info:      '%n قلب باقی مانده',

  // ----------------------------------------------------------
  //  Streak
  // ----------------------------------------------------------
  streak_titel:     'روزهای متوالی',
  streak_heute:     'امروز بازی کردی! 🔥',
  streak_verloren:  '😢 زنجیره‌ات از دست رفت',
  streak_rekord:    'رکورد: %n روز',

  // ----------------------------------------------------------
  //  XP / Level
  // ----------------------------------------------------------
  xp_bis_naechstes: '%n XP تا سطح بعدی',
  level_bezeichnung: 'سطح %n',

  level_namen: [
    'مبتدی',        // Level 1
    'کاربر',        // Level 2
    'یادگیرنده',    // Level 3
    'پیشرو',        // Level 4
    'ماهر',         // Level 5
    'خبره',         // Level 6
    'استاد',        // Level 7
    'قهرمان',       // Level 8
  ],

  // ----------------------------------------------------------
  //  Achievements (Abzeichen)
  // ----------------------------------------------------------
  achievement_titel:     'مدال‌ها',
  achievement_neu:       '🏅 مدال جدید: %s',
  achievement_gesperrt:  '🔒 قفل است',

  achievements: {
    erste_runde:     { name: 'اولین قدم',        beschr: 'اولین آزمون را تموم کردی!' },
    perfekt:         { name: 'کامل!',             beschr: 'آزمون را بدون اشتباه گذراندی' },
    streak_3:        { name: '۳ روز متوالی',      beschr: 'سه روز پشت سر هم بازی کردی' },
    streak_7:        { name: 'یک هفته!',          beschr: 'هفت روز پشت سر هم بازی کردی' },
    streak_30:       { name: 'یک ماه!',           beschr: 'سی روز پشت سر هم بازی کردی 🔥' },
    alle_welten:     { name: 'جهانگرد',           beschr: 'همه ۵ دنیا را باز کردی' },
    level_5:         { name: 'نیمه راه',          beschr: 'به سطح ۵ رسیدی' },
    level_max:       { name: 'قهرمان',            beschr: 'به سطح ۸ رسیدی! 🏆' },
    daily_erster:    { name: 'چالش‌پذیر',         beschr: 'اولین چالش روزانه را انجام دادی' },
    daily_7:         { name: 'چالشگر',            beschr: 'هفت چالش روزانه را انجام دادی' },
  },

  // ----------------------------------------------------------
  //  Profil-Seite (profile.html)
  // ----------------------------------------------------------
  profil_titel:          'پروفایل من',
  profil_name:           'نام:',
  profil_level:          'سطح:',
  profil_xp:             'امتیاز XP:',
  profil_streak:         'روزهای متوالی:',
  profil_herzen:         'قلب‌ها:',
  profil_avatar_aendern: 'تغییر آواتار',
  profil_avatar_tier:    'انتخاب حیوان',
  profil_avatar_hut:     'کلاه',
  profil_avatar_brille:  'عینک',
  profil_vorschau:       'پیش‌نمایش',
  profil_speichern:      'ذخیره',
  profil_statistiken:    'آمار',
  profil_stat_xp_gesamt: 'کل XP کسب شده:',
  profil_stat_streak_rek: 'بهترین رکورد:',
  profil_stat_welten:    'دنیاهای یاد گرفته:',

  // ----------------------------------------------------------
  //  Rangliste / Leaderboard
  // ----------------------------------------------------------
  rangliste_titel:    'جدول امتیازات',
  rangliste_platz:    'رتبه',
  rangliste_spieler:  'بازیکن',
  rangliste_xp:       'XP',
  rangliste_level:    'سطح',
  rangliste_du:       '← تو',
  rangliste_leer:     'هنوز کسی در جدول نیست',

  // ----------------------------------------------------------
  //  Admin / Fragen-Verwaltung
  // ----------------------------------------------------------
  admin_titel:        'مدیریت سوالات',
  admin_neue_frage:   'سوال جدید',
  admin_speichern:    'ذخیره',
  admin_loeschen:     'حذف',
  admin_vorschau:     'پیش‌نمایش',

  // ----------------------------------------------------------
  //  Fehlermeldungen
  // ----------------------------------------------------------
  err_kein_profil:    'ابتدا یک پروفایل بساز!',
  err_welt_gesperrt:  'این دنیا هنوز قفل است!',
  err_speichern:      'خطا در ذخیره‌سازی.',
  err_laden:          'خطا در بارگذاری داده‌ها.',

};

// ============================================================
//  Export
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LANG_FA;
}

import { FaqCategory, FeatureItem, RoadmapStage } from '../types';

export const SITE_LINKS = {
  home: '/',
  homeInstallation: '/#installation',
  homePreview: '/#preview',
  homeFeatures: '/#features',
  homeRoadmap: '/#roadmap',
  faq: '/faq',
  faqStart: '/faq#start',
  faqInstallation: '/faq#installation',
  faqFeatures: '/faq#features',
  faqCommunity: '/faq#community',
  download: 'https://github.com/metawka/exDesktop/releases/latest',
  github: 'https://github.com/metawka/exDesktop',
  telegram: 'https://t.me/exDesktop',
  telegramChat: 'https://t.me/exDesktopChat',
  changelog: 'https://t.me/exDesktopChangelog',
  contact: 'https://t.me/metawka',
  pluginSdk: 'https://exdesktop.xyz/docs/',
  pythonSdk: 'https://exdesktop.xyz/docs/',
  pullRequest26: 'https://github.com/metawka/exDesktop/pull/26',
  issues: 'https://github.com/metawka/exDesktop/issues'
};

export const INSTALL_COMMAND = 'curl -fsSL \\n  https://raw.githubusercontent.com/metawka/exDesktop/main/install.sh | sh';
export const INSTALL_COMMAND_SINGLE = 'curl -fsSL https://raw.githubusercontent.com/metawka/exDesktop/main/install.sh | sh';

export const FEATURES: FeatureItem[] = [
  {
    id: 'feature-appearance',
    title: 'Оформление',
    description: 'Цвета, иконки и элементы интерфейса. Настрой Telegram под свой ритм.',
    iconName: 'tune'
  },
  {
    id: 'feature-privacy',
    title: 'Приватность',
    description: 'Режим стримера и функции AyuGram. Больше контроля над привычным.',
    iconName: 'shield'
  },
  {
    id: 'feature-plugins',
    title: 'Плагины',
    description: 'Расширяй возможности клиента. Поддержка форматов .plugin, .elyx и .eaf.',
    iconName: 'code'
  }
];

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: 'stage-1',
    number: '01',
    badge: 'Доступно',
    title: 'Клиент для компьютера',
    description: 'Windows, Linux и macOS. Кастомизация и настройки приватности.',
    linkLabel: 'Релизы',
    linkUrl: SITE_LINKS.download,
    statusIcon: 'check'
  },
  {
    id: 'stage-2',
    number: '02',
    badge: 'В доработке',
    title: 'Совместимость плагинов',
    description: 'Поддержка .plugin / .elyx / .eaf. Прогресс можно посмотреть на GitHub.',
    linkLabel: 'Разработка',
    linkUrl: SITE_LINKS.pullRequest26,
    statusIcon: 'work',
    isAccent: true
  },
  {
    id: 'stage-3',
    number: '03',
    badge: 'Обсуждаем',
    title: 'Идеи сообщества',
    description: 'Предлагай улучшения в Issues. Приоритеты обсуждаются открыто.',
    linkLabel: 'Предложить идею',
    linkUrl: SITE_LINKS.issues,
    statusIcon: 'chat'
  }
];

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    "id": "category-start",
    "number": "01",
    "title": "Начало работы",
    "anchor": "start",
    "items": [
      {
        "id": "faq-what-is",
        "question": "Что такое exDesktop?",
        "answer": "Модифицированный кросс-платформенный клиент для Windows, Linux и macOS на основе исходного кода Telegram. Material Design Expressive, глубокая кастомизация, функции приватности, настройки визуала, режим стримера, функционал exteraGram, AyuGram и других клиентов сообщества, адаптированный под Desktop.",
        "category": "Начало работы"
      },
      {
        "id": "faq-is-official",
        "question": "Это официальный клиент Telegram?",
        "answer": "Нет. exDesktop — независимый проект сообщества, не связанный с Telegram FZ-LLC.",
        "category": "Начало работы"
      },
      {
        "id": "faq-safety",
        "question": "Безопасно ли использовать exDesktop?",
        "answer": "Исходный код exDesktop полностью открыт на GitHub под лицензией GPL-3.0. В клиенте отсутствуют скрытая телеметрия и сторонние серверы, а сборка производится из открытых исходников на базе Telegram Desktop.",
        "category": "Начало работы",
        "source": "README"
      },
      {
        "id": "faq-supported-os",
        "question": "Какие операционные системы поддерживаются?",
        "answer": "Поддерживаются Windows 10/11, современные дистрибутивы Linux (x86_64, ARM64) и macOS (Apple Silicon и Intel). Актуальная стабильная версия — 7.4.3.2. Для Windows доступны установщик и portable-версия, для Linux — автоустановщик через curl, для macOS — dmg-образ.",
        "category": "Начало работы"
      }
    ]
  },
  {
    "id": "category-features",
    "number": "02",
    "title": "Возможности и функционал",
    "anchor": "features",
    "items": [
      {
        "id": "faq-ayugram-features",
        "question": "Какие возможности приватности интегрированы?",
        "answer": "В клиенте доступен полный комплекс функций AyuGram: режим призрака (неотправка статуса прочтения и онлайн-статуса), сохранение удалённых сообщений и истории их правок (антиудаление), скрытие номера телефона в профиле, просмотр скрытых участников групп, а также отображение точных ID и даты создания аккаунтов.",
        "category": "Возможности и функционал",
        "source": "README"
      },
      {
        "id": "faq-streamer-mode",
        "question": "Как устроен режим стримера?",
        "answer": "Режим стримера позволяет скрывать конфиденциальные чаты, контакты, медиафайлы и уведомления во время демонстрации экрана или прямой трансляции, гарантируя защиту приватности.",
        "category": "Возможности и функционал",
        "source": "README"
      },
      {
        "id": "faq-customization",
        "question": "Что можно настроить в интерфейсе?",
        "answer": "Полная кастомизация оформления в стиле Material Design 3 Expressive: палитра цветов, динамические темы, скругления карточек, кастомные наборы иконок, плавная прокрутка (Smooth Scrolling) и гибкие переключатели элементов интерфейса.",
        "category": "Возможности и функционал"
      },
      {
        "id": "faq-chat-features",
        "question": "Какие удобства добавлены для работы с сообщениями?",
        "answer": "Встроенный QuoteReply, локальный функционал Telegram Premium, перевод сообщений с сохранением оригинального форматирования, быстрые математические вычисления прямо в поле ввода и счётчик символов.",
        "category": "Возможности и функционал",
        "source": "README"
      }
    ]
  },
  {
    "id": "category-formats",
    "number": "03",
    "title": "Форматы плагинов",
    "anchor": "formats",
    "items": [
      {
        "id": "doc-formats-table",
        "question": "Какие форматы плагинов поддерживает exDesktop?",
        "answer": "Движок плагинов exDesktop поддерживает однофайловые плагины, пакеты Elyx и архивы eaf (exteraGram Archive Format):",
        "category": "Форматы плагинов",
        "table": {
          "headers": [
            "Формат",
            "Расширения",
            "Поддержка"
          ],
          "rows": [
            [
              "Однофайловый плагин",
              ".plugin",
              "полная"
            ],
            [
              "Пакет Elyx",
              ".elyx",
              "полная, кроме .dex"
            ],
            [
              "Архив eaf (exteraGram Archive Format)",
              ".eaf",
              "полная, кроме .dex"
            ]
          ]
        }
      },
      {
        "id": "doc-formats-metadata",
        "question": "Как считываются метаданные плагина?",
        "answer": "Метаданные однофайлового плагина читаются из констант верхнего уровня (__id__, __name__, __version__, __description__, __author__, __icon__, __app_version__, __min_version__, __sdk_version__, __requirements__, __category__) без выполнения кода. Это гарантирует безопасность предварительного просмотра до установки.",
        "category": "Форматы плагинов"
      }
    ]
  },
  {
    "id": "category-android-compat",
    "number": "04",
    "title": "Что работает так же, как на Android",
    "anchor": "android-compat",
    "items": [
      {
        "id": "doc-android-compat-list",
        "question": "Какая функциональность Android и exteraGram перенесена без изменений?",
        "answer": "В exDesktop реализована широкая обратная совместимость с кодовой базой плагинов для Android:",
        "category": "Что работает так же, как на Android",
        "bullets": [
          "Жизненный цикл: on_plugin_load, on_plugin_unload, on_app_event.",
          "Хуки запросов и обновлений Telegram: add_hook, pre_request_hook, post_request_hook, on_update_hook, on_updates_hook. Имена запросов совпадают с TL-схемой (TL_messages_sendMessage и другие).",
          "Хук отправки сообщения: add_on_send_message_hook, on_send_message_hook, стратегии HookStrategy.DEFAULT, CANCEL, MODIFY, MODIFY_FINAL.",
          "Пункты меню MenuItemType: контекстное меню сообщения, меню чата (плюс значок плагинов в шапке чата: одно действие выполняется сразу, несколько открывают список), боковое меню и меню профиля.",
          "Настройки ui.settings: Header, Divider, Switch, Selector, Input, Text, EditText, вложенные страницы, get_setting, set_setting, export_settings, import_settings.",
          "client_utils: send_request, send_text, send_message, send_photo, send_document, send_video, send_audio, edit_message, run_on_queue, мультиаккаунт (get_selected_account, get_hook_account, client(account)).",
          "android_utils: run_on_ui_thread, copy_to_clipboard, R, OnClickListener, OnLongClickListener.",
          "ui.bulletin.BulletinHelper и ui.alert.AlertDialogBuilder: заголовок, текст, пункты, три кнопки, make_button_red, set_view (Android-вью внутри окна), окно загрузки с set_progress, set_cancelable, set_canceled_on_touch_outside, dismiss, get_button, get_context.",
          "log_utils: get_logger, Logger с уровнями, child, timed, dump, обработчиками; BasePlugin.logger возвращает такой логгер.",
          "markdown_utils.parse_markdown возвращает ParsedMessage с RawEntity; RawEntity.to_tlrpc_object() создаёт TL-объект сущности. Разметка как в exteraGram: **жирный**, __курсив__, --подчёркнутый--, ~~зачёркнутый~~, ||спойлер||, экранирование символов через \\.",
          "extera_utils.text_formatting.HTML.unparse и Markdown.unparse собирают разметку обратно из текста и сущностей.",
          "BasePlugin: name, description, author, version, min_version, icon, requirements из метаданных, initialized, stop_event (устанавливается при выгрузке), register_cleanup; PluginMetadata, PluginError.",
          "plugin_settings: get_setting, set_setting, get_all_settings, set_all_settings, clear_settings; hook_utils.get_private_field, set_private_field и статические варианты читают и меняют поля объектов.",
          "file_utils: папки плагина, чтение, запись, список файлов. FilesController.register(FileInfo(ext, on_click, whitelist_places=..., blacklist_places=...)) и BasePlugin.add_file_hook: нажатие на скачанный документ в чате вызывает on_click с OnClickArgs.",
          "extera_utils.text_formatting.parse_text с режимами HTML и Markdown.",
          "intents: обработка ссылок tg://. IntentsManager.HandlerInfo с scheme, host, path (шаблоны вида /user/{id}), required_path_args_names, флагами и приоритетом; BasePlugin.add_intent_hook(info, IntentHookType.BEFORE) и remove_intent_hook.",
          "Зависимости __requirements__: устанавливаются чистые Python-пакеты в фоне. Встроены requests, beautifulsoup4, lxml, pillow, PyYAML, packaging.",
          "Плагины-библиотеки (zwylib и другие): плагин импортирует библиотеку по её id. Если библиотека не установлена, в карточке плагина указывается, какую библиотеку нужно установить."
        ]
      }
    ]
  },
  {
    "id": "category-emulation",
    "number": "05",
    "title": "Эмуляция Java и Android",
    "anchor": "emulation",
    "items": [
      {
        "id": "doc-emulation-overview",
        "question": "Как устроена эмуляция классов Java и Android?",
        "answer": "Код плагина импортирует Java-классы (from java.util import ArrayList, find_class(\"android.graphics.Color\")), обращается к их методам и полям и создаёт объекты (ArrayList(), Color.parseColor(\"#ff0000\")) без реальной Java-машины.",
        "category": "Эмуляция Java и Android",
        "table": {
          "headers": [
            "Пакет",
            "Эмулированные классы"
          ],
          "rows": [
            [
              "java.lang",
              "Object, Integer, Long, Short, Byte, Float, Double, Boolean, Character, String, StringBuilder, StringBuffer, Math, System, Thread, Runnable, Throwable, Exception, RuntimeException, ClassNotFoundException, NoSuchMethodException, NoSuchFieldException, IllegalAccessException, InvocationTargetException"
            ],
            [
              "java.util",
              "List, ArrayList, Map, HashMap, LinkedHashMap, Set, HashSet, Iterator, Arrays, Collections, UUID, Locale, Date, Objects, Optional, Random"
            ],
            [
              "java.io",
              "File, InputStream, OutputStream, ByteArrayInputStream, ByteArrayOutputStream"
            ],
            [
              "android.os",
              "Bundle, Handler, Looper, Build, Build.VERSION"
            ],
            [
              "android.content",
              "Context, Intent, SharedPreferences, SharedPreferences.Editor"
            ],
            [
              "android.graphics",
              "Color, Rect, RectF, Point, PointF, Canvas, Paint, Bitmap, Matrix"
            ],
            [
              "android.widget",
              "Toast, TextView, EditText, ImageView, LinearLayout, FrameLayout, ScrollView, Button, CheckBox, Switch"
            ],
            [
              "android.view",
              "View, ViewGroup, LayoutInflater, Gravity, MotionEvent"
            ],
            [
              "org.telegram.messenger",
              "AndroidUtilities, LocaleController, FileLog, ApplicationLoader, NotificationCenter, UserConfig, MessagesController, SendMessagesHelper, MediaController, ImageLocation, MessageObject, Utilities"
            ],
            [
              "org.telegram.ui",
              "LaunchActivity, ChatActivity, DialogsActivity, ProfileActivity, ActionBar.AlertDialog, ActionBar.Theme, ActionBar.BaseFragment, Components.BulletinFactory"
            ],
            [
              "org.telegram.tgnet",
              "ConnectionsManager, TLRPC, TLObject"
            ]
          ]
        }
      },
      {
        "id": "doc-emulation-real-classes",
        "question": "Какие классы Telegram возвращают настоящие рабочие данные?",
        "answer": "LocaleController.getInstance().getCurrentLocale().getLanguage() и Locale.getDefault() возвращают язык клиента. Следующие ключевые классы Telegram подключены к ядру exDesktop:",
        "category": "Эмуляция Java и Android",
        "bullets": [
          "NotificationCenter.getInstance(account).addObserver(delegate, NotificationCenter.didReceiveNewMessages) и другие события центра уведомлений;",
          "UserConfig.getInstance(account).getCurrentUser() возвращает данные авторизованного пользователя;",
          "MessagesController.getInstance(account) отдаёт диалоги, чаты, участников и сообщения."
        ]
      },
      {
        "id": "doc-emulation-fallback",
        "question": "Что происходит с классами, которых нет в таблице эмуляции?",
        "answer": "Эмулированные классы находятся и через find_class, jclass и Class.forName(). Класс, которого нет в эмуляции, заменяется пустым объектом-заглушкой, чтобы плагин запустился без сбоя.",
        "category": "Эмуляция Java и Android"
      }
    ]
  },
  {
    "id": "category-xposed",
    "number": "06",
    "title": "Хуки методов (Xposed)",
    "anchor": "xposed",
    "items": [
      {
        "id": "doc-xposed-overview",
        "question": "Как устроен перехват методов Xposed в exDesktop?",
        "answer": "На Android плагин может перехватить любой Java-метод Telegram (hook_method, hook_all_methods, hook_all_constructors, find_and_hook_method). Методы эмулированных классов (AlertDialog.Builder, BottomSheet, AndroidUtilities, Browser и другие) и собственные методы плагина перехватываются прямо на Python.",
        "category": "Хуки методов (Xposed)"
      },
      {
        "id": "doc-xposed-api",
        "question": "API перехвата: регистрация, приоритеты и отмена вызовов",
        "answer": "Перехват устроен так же, как в exteraGram:",
        "category": "Хуки методов (Xposed)",
        "bullets": [
          "hook_method(метод, хук, priority) возвращает XC_MethodHook.Unhook; unhook.unhook() или self.unhook_method(unhook) снимает перехват.",
          "Метод можно передавать строкой: 'org.telegram.messenger.MessagesController.sendMessage'.",
          "Вызов оригинального метода без хука: invoke_original_method(метод, thisObject, *args). Если оригинал не реализован на ПК, возвращается None, как у оригинала.",
          "Хук задаётся классом MethodHook, MethodReplacement, XC_MethodHook, XC_MethodReplacement, функцией или аргументами before= и after=.",
          "Порядок как в Xposed: хуки с большим priority выполняются раньше в before_hooked_method и позже в after_hooked_method.",
          "param.setResult() или param.setThrowable() в before_hooked_method отменяет вызов оригинала, остальные after_hooked_method выполняются.",
          "MethodHookParam: method, thisObject, args (изменяемый список), getResult, setResult, getThrowable, setThrowable, hasThrowable, getResultOrThrowable, getObjectExtra, setObjectExtra.",
          "Конструкторы перехватываются через hook_all_constructors или getDeclaredConstructor(); в after_hooked_method param.thisObject содержит созданный объект.",
          "Рефлексия эмулированных классов возвращает настоящие объекты: getDeclaredMethods, getMethods, getDeclaredMethod, getDeclaredConstructors, getDeclaredFields, getDeclaredField. У метода есть getName, getParameterCount, getParameterTypes, getModifiers, invoke."
        ]
      },
      {
        "id": "doc-xposed-filters",
        "question": "Фильтры хуков: предварительное отсечение вызовов",
        "answer": "Фильтры отсекают вызовы до запуска кода хука, как HookFilter в exteraGram:",
        "category": "Хуки методов (Xposed)",
        "code": "from base_plugin import HookFilter, hook_filters, MethodHook\n\nclass OnlyTrue(MethodHook):\n    @hook_filters(HookFilter.ArgumentIsTrue(0), HookFilter.Condition(\"param.thisObject != null\"))\n    def before_hooked_method(self, param):\n        ...\n\nself.hook_method(method, after=on_after, after_filters=[HookFilter.RESULT_NOT_NULL])",
        "bullets": [
          "Поддерживаются все фильтры SDK: ArgumentIsNull, ArgumentNotNull, ArgumentIsTrue, ArgumentIsFalse, ArgumentEqual, ArgumentNotEqual, ArgumentIsInstanceOf, RESULT_IS_NULL, RESULT_NOT_NULL, RESULT_IS_TRUE, RESULT_IS_FALSE, ResultEqual, ResultNotEqual, ResultIsInstanceOf, Or, Condition.",
          "Условие Condition записывается на MVEL, как на Android: доступны param, result, object, this, поля thisObject по имени, полные имена классов (org.telegram.messenger.NotificationCenter.didReceiveNewMessages), операторы &&, ||, !, ==, instanceof, null, true, false."
        ]
      },
      {
        "id": "doc-xposed-helpers",
        "question": "Поддержка утилит XposedHelpers",
        "answer": "findClass, findClassIfExists, findMethodExact, findMethodBestMatch, findConstructorExact, findAndHookMethod, findAndHookConstructor, findField, getObjectField и setObjectField (а также варианты для int, long, boolean и других типов и статических полей), callMethod, callStaticMethod, newInstance, setAdditionalInstanceField, getAdditionalInstanceField, removeAdditionalInstanceField и статические варианты. XposedBridge.hookMethod, hookAllMethods, hookAllConstructors, unhookMethod, invokeOriginalMethod, log.\n\nPyMethodHook и PyMethodReplacement из com.exteragram.messenger.plugins.xposed работают как в exteraGram, включая setBeforeHookedFilters и setAfterHookedFilters: такие хуки используют библиотеки вроде ZwyLib.",
        "category": "Хуки методов (Xposed)"
      },
      {
        "id": "doc-xposed-client-actions",
        "question": "Перехват действий клиента",
        "answer": "Действия пользователя в exDesktop проходят через те же методы, что и на Android, поэтому их перехват срабатывает. Вызов param.setResult(None) в before_hooked_method отменяет действие:",
        "category": "Хуки методов (Xposed)",
        "table": {
          "headers": [
            "Метод",
            "Когда вызывается"
          ],
          "rows": [
            [
              "PluginsController.setPluginEnabled(id, enabled)",
              "включение или выключение плагина в списке"
            ],
            [
              "PythonPluginsEngine.loadPlugin(id, path)",
              "загрузка плагина"
            ],
            [
              "PythonPluginsEngine.unloadPlugin(id)",
              "выгрузка плагина, в том числе при удалении и обновлении"
            ],
            [
              "LocaleController.applyLanguage(info, ...)",
              "смена языка через applyLanguage"
            ]
          ]
        }
      },
      {
        "id": "doc-xposed-subclassing",
        "question": "Наследование Java-классов на Python",
        "answer": "extera_utils.classes позволяет унаследовать эмулированный класс на Python:",
        "category": "Хуки методов (Xposed)",
        "code": "from extera_utils.classes import Base, java_subclass, joverride, jfield\nfrom android.widget import FrameLayout\n\n@java_subclass(FrameLayout)\nclass Cell(Base):\n    size = jfield(\"int\", default=48)\n\n    def on_post_init(self, context):\n        self.setWillNotDraw(False)\n\n    @joverride()\n    def onMeasure(self, width_spec, height_spec):\n        ...",
        "bullets": [
          "self.java возвращает Java-объект, который передаётся в методы клиента; вызовы его переопределённых методов попадают в Python.",
          "Поддерживаются joverride, joverload, jmethod, jfield с jgetmethod и jsetmethod, jconstructor, jpreconstructor, методы на MVEL (jMVELmethod, jMVELoverride), Base.from_java, new_instance, class_proxy с ClassInterceptor, release_plugin и collect_peers. Объекты плагина освобождаются при его выгрузке.",
          "SendMessagesHelper.sendMessage: хук подключается к отправке сообщений exDesktop. Поддерживаются подмена текста, отмена отправки и изменение параметров.",
          "Хук на MessagesController.processNewMessages или NotificationsController.showSingleBackgroundNotification выполняется при входящих сообщениях.",
          "Хуки на события экранов ChatActivity (onFragmentCreate, createView, onFragmentDestroy) вызываются по сигналам создания и закрытия окон exDesktop.",
          "MessageObject в аргументах хуков содержит данные сообщения: тип, текст, messageOwner с полями TL_message (id, peer_id, from_id, date, reply_to, media, entities, edit_date, fwd_from).",
          "MessagesController отдаёт данные клиента: getAllDialogs(), getDialogs(), getChat(), getUser(), getUserConfig().",
          "Поле ввода текущего чата доступно через ChatActivity.getChatActivityEnterView().",
          "MediaController управляет плеером exDesktop: getPlayingMessageObject(), isPlayingMessage(), playMessage(), pauseMessage()."
        ]
      }
    ]
  },
  {
    "id": "category-webapp",
    "number": "07",
    "title": "Веб-окна плагинов",
    "anchor": "webapp",
    "items": [
      {
        "id": "doc-webapp-guide",
        "question": "Как работают веб-окна плагинов на HTML?",
        "answer": "Плагин может показать свой интерфейс на HTML в отдельном окне exDesktop. Это замена мобильных всплывающих экранов и сложных настроек:",
        "category": "Веб-окна плагинов",
        "code": "from ui.webapp import WebApp\n\napp = WebApp(\"Статистика\", html=\"<button onclick=\\\"exd.send({click: 1})\\\">Жми</button>\")\n\n@app.on(\"click\")\ndef on_click(data):\n    print(\"Клик из окна!\", data)\n\napp.show()",
        "bullets": [
          "Окно открывается на системном веб-компоненте: WebView2 на Windows, WebKitGTK на Linux, WKWebView на macOS.",
          "В окне работает скрипт window.exd: exd.send(data) отправляет JSON в Python, exd.on(event, handler) слушает события.",
          "В Python: app.emit(event, data) шлёт события в окно, app.run_script(code) выполняет JS в окне."
        ]
      }
    ]
  },
  {
    "id": "category-widgets",
    "number": "08",
    "title": "Виджеты Android",
    "anchor": "widgets",
    "items": [
      {
        "id": "doc-widgets-list",
        "question": "Какие виджеты Android поддерживаются в окнах?",
        "answer": "Кроме TextView, EditText, ImageView, LinearLayout, FrameLayout и ScrollView в окнах плагинов отображаются Button, CheckBox и Switch с сохранением состояния при закрытии и открытии окна.",
        "category": "Виджеты Android"
      },
      {
        "id": "doc-widgets-context",
        "question": "Какие системные сервисы доступны через Android Context?",
        "answer": "Контекст Android (ApplicationLoader.applicationContext, LaunchActivity) возвращает рабочие объекты: getSystemService(\"clipboard\") возвращает ClipboardManager с getPrimaryClip и setPrimaryClip, getSystemService(\"connectivity\") — ConnectivityManager с getActiveNetworkInfo, getSystemService(\"notification\") — NotificationManager, а также WindowManager и PowerManager.",
        "category": "Виджеты Android"
      }
    ]
  },
  {
    "id": "category-chat-picker",
    "number": "09",
    "title": "Выбор чатов и пользователей",
    "anchor": "chat-picker",
    "items": [
      {
        "id": "doc-chat-picker-dialogs",
        "question": "Как работают диалоги выбора чата на ПК?",
        "answer": "Экраны выбора из Android открываются окном выбора exDesktop, когда плагин показывает их через presentFragment или AlertDialog.Builder:",
        "category": "Выбор чатов и пользователей",
        "bullets": [
          "DialogsActivity(args) с делегатом DialogsActivityDelegate: выбор одного чата. Аргументы allowUsers, allowChats, allowGroups, allowChannels, allowBots, onlySelect, cantSendToChannels задают, какие типы чатов отображать.",
          "DialogsActivity с флагом множественного выбора: окно с поиском, галочками и счётчиком выбранных чатов; возвращает список выбранных диалогов."
        ]
      }
    ]
  },
  {
    "id": "category-ai",
    "number": "10",
    "title": "Перенос при помощи ИИ",
    "anchor": "ai-migration",
    "items": [
      {
        "id": "doc-ai-procedure",
        "question": "Как работает перенос Android-плагинов с помощью ИИ?",
        "answer": "В карточке плагина с Android-хуками, DEX-кодом или ошибкой загрузки и в окне его установки есть действие «Адаптировать для exDesktop». exDesktop отправляет код плагина в выбранную модель нейросети вместе с системной подсказкой и списком поддерживаемых возможностей. Модель заменяет несовместимые вызовы Android, оборачивает зависимости и сохраняет готовый скрипт .desktop.py.",
        "category": "Перенос при помощи ИИ"
      },
      {
        "id": "doc-ai-models",
        "question": "Какие модели нейросетей поддерживаются?",
        "answer": "Используется собственный API-ключ пользователя. Модель и адрес можно задать вручную. Бесплатных тарифов Groq и OpenRouter хватает на десятки плагинов.",
        "category": "Перенос при помощи ИИ",
        "table": {
          "headers": [
            "Модель / Семейство",
            "Особенности и применение"
          ],
          "rows": [
            [
              "Gemini 2.5 Pro / Flash",
              "Идеальное понимание контекста и системных API"
            ],
            [
              "Claude 3.5 Sonnet",
              "Максимальная точность синтаксиса и рефакторинга Python"
            ],
            [
              "DeepSeek V3 / R1",
              "Превосходная логика и бесплатный доступ через OpenRouter"
            ],
            [
              "GPT-4o",
              "Быстрая адаптация структуры кода"
            ]
          ]
        }
      }
    ]
  },
  {
    "id": "category-security",
    "number": "11",
    "title": "Защита и песочница",
    "anchor": "security",
    "items": [
      {
        "id": "doc-security-env",
        "question": "Как изолирована среда исполнения плагина?",
        "answer": "Плагин выполняется в защитной среде. Она ограничивает доступ к файлам, сети и операционной системе и действует независимо от настроек или типа плагина.",
        "category": "Защита и песочница"
      },
      {
        "id": "doc-security-files",
        "question": "Каковы правила доступа к файлам?",
        "answer": "Файловая изоляция строго разграничивает доступ к диску:",
        "category": "Защита и песочница",
        "table": {
          "headers": [
            "Путь",
            "Доступ"
          ],
          "rows": [
            [
              "Папка плагина (file_utils.get_plugin_dir())",
              "свободный, без запросов"
            ],
            [
              "Временная папка (tempfile, /tmp)",
              "свободный, без запросов"
            ],
            [
              "Другие папки на диске",
              "по запросу у пользователя"
            ],
            [
              "Системные папки Windows, Linux, macOS",
              "запрещён всегда"
            ]
          ]
        },
        "bullets": [
          "При обращении к обычной папке пользователь видит окно «Доступ к файлам» с кнопками «Разрешить на свой страх и риск» и «Запретить».",
          "Пути Android перенаправляются в папку плагина: /sdcard/..., /storage/emulated/0/..., /data/user/0/org.telegram.messenger/...",
          "file_utils.pick_file(callback, title=\"\", filters=\"\", multiple=False) открывает системный диалог выбора файла.",
          "Относительный путь в open() и sqlite3.connect() отсчитывается от папки плагина, как и на Android."
        ]
      },
      {
        "id": "doc-security-network",
        "question": "Как контролируются сетевые соединения?",
        "answer": "Плагин подключается к сайтам в интернете без запросов. Подключения к localhost тоже разрешены. Разрешение пользователя требуется только в двух случаях:\n1. Подключение к устройству в локальной сети (частные адреса, имена .local, .lan, .home, .internal);\n2. Отправка данных на адрес, не совпадающий с адресом из метаданных плагина.",
        "category": "Защита и песочница"
      },
      {
        "id": "doc-security-data",
        "question": "Как защищены конфиденциальные данные Telegram?",
        "answer": "Всё, что плагин отправляет в сеть или в Telegram (send_message, send_request, edit_message, отправка через WebApp), проверяется на защищённые данные:",
        "category": "Защита и песочница",
        "bullets": [
          "ключи сессии Telegram;",
          "код входа в Telegram;",
          "номер телефона аккаунта и номера телефонов контактов;",
          "пароль двухэтапной аутентификации (облачный пароль);",
          "токены ботов."
        ]
      },
      {
        "id": "doc-security-system",
        "question": "Какие системные вызовы заблокированы намертво?",
        "answer": "Запрещены запуск программ (subprocess, os.system, os.startfile), вызов системных функций через ctypes и cffi, доступ к реестру Windows (winreg) и модификация системных файлов. Попытки обойти защиту отмечаются проверкой PluginGuard как критическая угроза.",
        "category": "Защита и песочница"
      }
    ]
  },
  {
    "id": "category-guard",
    "number": "12",
    "title": "Проверка PluginGuard",
    "anchor": "pluginguard",
    "items": [
      {
        "id": "doc-guard-stages",
        "question": "Как устроена 3-этапная проверка PluginGuard?",
        "answer": "Перед установкой каждый плагин проверяется без запуска его кода в три этапа:\n1. Статические правила разбирают код: сеть, файлы, вызовы системы, работа с данными аккаунта, обфускация.\n2. Эвристический анализ оценивает структуру кода.\n3. Векторная модель сравнивает эмбеддинг кода плагина с векторами известных вредоносных плагинов.\n\nИтог показывается одним из уровней: «угроз нет», «низкий риск», «средний риск», «высокий риск» или «угроза». Установку блокируют явная обфускация и опасные паттерны.",
        "category": "Проверка PluginGuard"
      },
      {
        "id": "doc-guard-encrypted",
        "question": "Как PluginGuard анализирует зашифрованные плагины?",
        "answer": "Зашифрованный или упакованный код (base64, zlib, XOR, вложенные exec и подобные слои) расшифровывается статически до пяти вложенных слоёв. Если код не удалось расшифровать полностью, плагин блокируется. Полностью расшифрованный код проверяется по общим правилам. Окно просмотра кода в окне установки показывает расшифрованный код под исходным.",
        "category": "Проверка PluginGuard"
      }
    ]
  },
  {
    "id": "category-devserver",
    "number": "13",
    "title": "Сервер разработки",
    "anchor": "devserver",
    "items": [
      {
        "id": "doc-devserver-info",
        "question": "Как устроен локальный DevServer для разработки плагинов?",
        "answer": "Переключатель «Сервер разработки плагинов» в настройках движка плагинов запускает dev_server.DevServer на 127.0.0.1:42690. Протокол совпадает с exteraGram, поэтому клиент горячей перезагрузки из exteragram-utils работает без изменений (команда adb forward на ПК не нужна):",
        "category": "Сервер разработки",
        "table": {
          "headers": [
            "Команда",
            "Аргументы",
            "Действие"
          ],
          "rows": [
            [
              "ping",
              "",
              "проверка соединения"
            ],
            [
              "reload",
              "id: str",
              "перезагрузка плагина"
            ],
            [
              "load",
              "path: str",
              "загрузка плагина по пути"
            ],
            [
              "unload",
              "id: str",
              "выгрузка плагина"
            ],
            [
              "eval",
              "code: str",
              "выполнение кода в контексте плагина"
            ]
          ]
        },
        "bullets": [
          "Сервер принимает только локальные подключения.",
          "Запустить его или отладчик может только exDesktop: вызов DevServer.start_server() из плагина отклоняется, а импорт dev_server в плагине отмечается проверкой."
        ]
      }
    ]
  },
  {
    "id": "category-elyx",
    "number": "14",
    "title": "Спецификация Elyx",
    "anchor": "elyx",
    "items": [
      {
        "id": "doc-elyx-features",
        "question": "Какая часть стандарта пакетов Elyx поддерживается в exDesktop?",
        "answer": "В exDesktop реализована широкая поддержка пакетов .elyx:",
        "category": "Спецификация Elyx",
        "bullets": [
          "refmap.yaml, refmap.yml, refmap.json с ключами main, metainfo, assets, strings, wheels; ключи без значения получают значения по умолчанию;",
          "метаданные YAML и JSON, подстановка {ключ} из строк локализации в названии и описании;",
          "отдельное пространство модулей ElyxPlugins.<id>: локальные модули разных плагинов с одинаковыми именами не пересекаются;",
          "обычный и относительный импорт локальных модулей, импорт JSON, YAML и TXT как модулей, elyx.import_module;",
          "from elyx import metainfo, refmap, assets, strings, settings, import_module, get_environment, классы Strings, SettingsController, Assets, Asset;",
          "колёса .whl из папки wheels;",
          "проверка зависимостей requires с минимальной версией."
        ]
      },
      {
        "id": "doc-elyx-unsupported",
        "question": "Что не поддерживается из формата Elyx?",
        "answer": "Не поддерживаются зашифрованные архивы и файлы .dex. Методы ассетов, которые на Android создают Drawable (to_drawable, to_svg_drawable и другие), возвращают путь к файлу.",
        "category": "Спецификация Elyx"
      }
    ]
  },
  {
    "id": "category-crossplatform",
    "number": "15",
    "title": "Windows, Linux и macOS",
    "anchor": "crossplatform",
    "items": [
      {
        "id": "doc-crossplatform-engine",
        "question": "Как движок плагинов работает на разных системах?",
        "answer": "Движок плагинов одинаково работает на всех трёх системах. Встроенные пакеты (requests, beautifulsoup4, lxml, pillow, PyYAML, packaging) входят в сборки для всех систем. Зависимости __requirements__ с нативным кодом устанавливаются из колёс для текущей системы и процессора.",
        "category": "Windows, Linux и macOS"
      },
      {
        "id": "doc-crossplatform-rules",
        "question": "Правила кроссплатформенного кода плагина",
        "answer": "Чтобы плагин работал одинаково надёжно на Windows, Linux и macOS:",
        "category": "Windows, Linux и macOS",
        "bullets": [
          "пути строятся через os.path.join и file_utils.get_plugin_dir(), без обратной косой черты, букв дисков, %APPDATA%, /home/... и ~/Library;",
          "имена файлов на Linux различают регистр;",
          "текстовые файлы открываются с encoding=\"utf-8\";",
          "модули одной системы (winreg, msvcrt, winsound, fcntl, termios) импортируются внутри try/except ImportError."
        ]
      }
    ]
  },
  {
    "id": "category-differences",
    "number": "16",
    "title": "Отличия от Android",
    "anchor": "differences",
    "items": [
      {
        "id": "doc-differences-list",
        "question": "В чём главные отличия среды плагинов exDesktop от Android?",
        "answer": "exDesktop адаптирует мобильную экосистему плагинов под архитектуру компьютера со следующими особенностями:",
        "category": "Отличия от Android",
        "bullets": [
          "Нет Java и Chaquopy: модули java, android, org.telegram эмулируются на уровне интерфейсов Python.",
          "Нет Xposed: срабатывают только перехваты из раздела «Хуки методов» и методы эмулированных классов.",
          "Нет View Android: собственные экраны и Custom в настройках отображаются в упрощённом виде либо через WebApp.",
          "Плагин не может запускать программы и загружать нативные библиотеки.",
          "Плагин не может скачивать и загружать код во время работы: такие плагины не проходят проверку PluginGuard.",
          "Файлы вне своей папки доступны только по разрешению пользователя."
        ]
      }
    ]
  }
];

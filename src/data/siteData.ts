import { FaqCategory, FeatureItem, RoadmapColumn, RoadmapStage } from '../types';

export const SITE_LINKS = {
  home: '/',
  faq: '/faq',
  wiki: '/faq',
  faqInstallation: '/faq#windows-linux-и-macos',
  faqCommunity: '/faq#форматы-плагинов',
  download: 'https://github.com/metawka/exDesktop/releases/latest',
  github: 'https://github.com/metawka/exDesktop',
  telegram: 'https://t.me/exDesktop',
  telegramChat: 'https://t.me/exDesktopChat',
  telegramChangelog: 'https://t.me/exDesktopChangelog',
  changelog: 'https://t.me/exDesktopChangelog',
  contact: 'https://t.me/metawka',
  pluginSdk: 'https://exdesktop.xyz/docs/',
  pullRequest26: 'https://github.com/metawka/exDesktop/pull/26',
  issues: 'https://github.com/metawka/exDesktop/issues'
};

export const INSTALL_COMMAND = 'curl -fsSL \n  https://raw.githubusercontent.com/metawka/exDesktop/main/install.sh | sh';
export const INSTALL_COMMAND_SINGLE = 'curl -fsSL https://raw.githubusercontent.com/metawka/exDesktop/main/install.sh | sh';

export const FEATURES: FeatureItem[] = [
  {
    id: 'feature-plugins',
    title: 'Система плагинов',
    description: 'Поддержка привычных плагинов с exteraGram и разработка своих под exDesktop.',
    iconName: 'code'
  },
  {
    id: 'feature-privacy',
    title: 'AyuGram',
    description: 'Режим стримера, сохранение удаленок и весь функционал AyuGram',
    iconName: 'shield'
  },
  {
    id: 'feature-appearance',
    title: 'Визуал',
    description: 'MD Expressive, Smooth Scrolling, иконки, настройка интерфейса, скрытие номера и другое...',
    iconName: 'tune'
  }
];

export const ROADMAP_COLUMNS: RoadmapColumn[] = [
  {
    "id": "col-progress",
    "status": "progress",
    "title": "В разработке",
    "items": [
      {
        "id": "rm-1",
        "title": "Доработка совместимости с плагинами exteraGram, Xposted эмуляция Java и Android, сообщения, уведомления, файлы, изображения, библиотеки плагинов",
        "status": "progress",
        "version": "High priority"
      },
      {
        "id": "rm-2",
        "title": "Доработка ИИ-переноса плагинов",
        "status": "progress",
        "version": "High priority"
      }
    ]
  },
  {
    "id": "col-planned",
    "status": "planned",
    "title": "Запланировано",
    "items": [
      {
        "id": "rm-3",
        "title": "Плагины с DEX и нативными библиотеками .so",
        "status": "planned",
        "version": "Medium priority"
      },
      {
        "id": "rm-4",
        "title": "Добавление каталога плагинов",
        "status": "planned",
        "version": "Lowest priority"
      },
      {
        "id": "rm-5",
        "title": "Глубокая настройка профиля с кастомными полями, баннеры, ссылки",
        "status": "planned",
        "version": "Lowest priority"
      }
    ]
  },
  {
    "id": "col-done",
    "status": "done",
    "title": "Готово",
    "items": [
      {
        "id": "rm-6",
        "title": "Material Design 3",
        "status": "done",
        "version": "7.4.3.2"
      },
      {
        "id": "rm-7",
        "title": "Формат плагинов Elyx (.elyx, .eaf)",
        "status": "done",
        "version": "7.3.3.10"
      },
      {
        "id": "rm-8",
        "title": "Перенос Android-плагинов с помощью ИИ на своём ключе, в фоне, с проверкой результата",
        "status": "done",
        "version": "7.3.3.10"
      },
      {
        "id": "rm-9",
        "title": "PluginGuard: проверка плагина перед установкой (правила, своя модель и ИИ-арбитр), блокировка опасных, жалобы на плагины",
        "status": "done",
        "version": "7.3.3.9"
      },
      {
        "id": "rm-10",
        "title": "Функции AyuGram",
        "status": "done",
        "version": "7.3.3.9"
      },
      {
        "id": "rm-11",
        "title": "curl-установка на Linux / MacOS",
        "status": "done",
        "version": "7.3.3.9"
      },
      {
        "id": "rm-12",
        "title": "Движок плагинов на Linux и macOS",
        "status": "done",
        "version": "7.3.3.9"
      },
      {
        "id": "rm-13",
        "title": "TG WS Proxy",
        "status": "done",
        "version": "7.3.3.6"
      }
    ]
  }
];

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: 'stage-1',
    number: '01',
    badge: 'В разработке',
    title: 'Совместимость плагинов',
    description: 'Xposed-хуки, эмуляция Java и Android, уведомления, файлы, медиа и библиотеки.',
    linkLabel: 'Прогресс на GitHub',
    linkUrl: SITE_LINKS.pullRequest26,
    statusIcon: 'work',
    isAccent: true
  },
  {
    id: 'stage-2',
    number: '02',
    badge: 'Запланировано',
    title: 'Каталог и DEX',
    description: 'Плагины с нативными библиотеками .so, встроенный каталог и глубокая кастомизация профиля.',
    linkLabel: 'Обсудить в Issues',
    linkUrl: SITE_LINKS.issues,
    statusIcon: 'chat'
  },
  {
    id: 'stage-3',
    number: '03',
    badge: 'Готово',
    title: 'Material Design 3 & Релизы',
    description: 'MD Expressive, формат Elyx, PluginGuard, функции AyuGram, curl-установка.',
    linkLabel: 'Страница релизов',
    linkUrl: SITE_LINKS.download,
    statusIcon: 'check'
  }
];

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    "id": "wiki-cat-01",
    "number": "01",
    "title": "Форматы плагинов",
    "anchor": "форматы-плагинов",
    "items": [
      {
        "id": "wiki-01-01",
        "question": "Форматы плагинов",
        "category": "Форматы плагинов",
        "answer": "Метаданные однофайлового плагина читаются из констант верхнего уровня (__id__, __name__, __version__, __description__, __author__, __icon__, __app_version__, __min_version__, __sdk_version__, __requirements__, __category__) без выполнения кода.",
        "bullets": [],
        "code": "",
        "table": {
          "headers": [
            "Формат",
            "Расширения",
            "Поддержка"
          ],
          "rows": [
            [
              "Однофайловый плагин",
              ".plugin, .py",
              "полная"
            ],
            [
              "Elyx",
              ".elyx, .eaf, .elyx.zip, .eaf.zip",
              "полная, кроме зашифрованных архивов"
            ]
          ]
        }
      }
    ]
  },
  {
    "id": "wiki-cat-02",
    "number": "02",
    "title": "Что работает так же, как на Android",
    "anchor": "что-работает-так-же-как-на-android",
    "items": [
      {
        "id": "wiki-02-01",
        "question": "Что работает так же, как на Android",
        "category": "Что работает так же, как на Android",
        "answer": "",
        "bullets": [
          "Жизненный цикл: on_plugin_load, on_plugin_unload, on_app_event.",
          "Хуки запросов и обновлений Telegram: add_hook, pre_request_hook, post_request_hook, on_update_hook, on_updates_hook. Имена запросов совпадают с TL-схемой (TL_messages_sendMessage и другие).",
          "Хук отправки сообщения: add_on_send_message_hook, on_send_message_hook, стратегии HookStrategy.DEFAULT, CANCEL, MODIFY, MODIFY_FINAL.",
          "Пункты меню MenuItemType: контекстное меню сообщения, меню чата (плюс значок плагинов в шапке чата: одно действие выполняется сразу, несколько открывают список), боковое меню и меню профиля.",
          "Настройки ui.settings: Header, Divider, Switch, Selector, Input, Text, EditText, вложенные страницы, get_setting, set_setting, export_settings, import_settings.",
          "client_utils: send_request, send_text, send_message, send_photo, send_document, send_video, send_audio, edit_message, run_on_queue, мультиаккаунт (get_selected_account, get_hook_account, client(account)).",
          "android_utils: run_on_ui_thread, copy_to_clipboard, R, OnClickListener, OnLongClickListener.",
          "ui.bulletin.BulletinHelper и ui.alert.AlertDialogBuilder: заголовок, текст, пункты, три кнопки, make_button_red, set_view (Android-вью внутри окна), окно загрузки с set_progress, set_cancelable, set_canceled_on_touch_outside, dismiss закрывает окно, get_button, get_context.",
          "log_utils: get_logger, Logger с уровнями, child, timed, dump, обработчиками; BasePlugin.logger возвращает такой логгер.",
          "markdown_utils.parse_markdown возвращает ParsedMessage с RawEntity; RawEntity.to_tlrpc_object() создаёт TL-объект сущности. Разметка как в exteraGram: **жирный**, __курсив__, --подчёркнутый--, ~~зачёркнутый~~, ||спойлер||, экранирование символов через \\. extera_utils.text_formatting.HTML.unparse и Markdown.unparse собирают разметку обратно из текста и сущностей.",
          "BasePlugin: name, description, author, version, min_version, icon, requirements из метаданных, initialized, stop_event (устанавливается при выгрузке), register_cleanup; PluginMetadata, PluginError.",
          "plugin_settings: get_setting, set_setting, get_all_settings, set_all_settings, clear_settings; hook_utils.get_private_field, set_private_field и статические варианты читают и меняют поля объектов.",
          "file_utils: папки плагина, чтение, запись, список файлов. FilesController.register(FileInfo(ext, on_click, whitelist_places=..., blacklist_places=...)) и BasePlugin.add_file_hook: нажатие на скачанный документ с этим расширением в чате вызывает on_click с OnClickArgs (place, file, file_name, message, activity, parent_fragment) вместо открытия файла.",
          "extera_utils.text_formatting.parse_text с режимами HTML и Markdown.",
          "intents: обработка ссылок tg://. IntentsManager.HandlerInfo с scheme, host, path (шаблоны вида /user/{id}), required_path_args_names, флагами и приоритетом; BasePlugin.add_intent_hook(info, IntentHookType.BEFORE) и remove_intent_hook.",
          "Зависимости __requirements__: устанавливаются только чистые Python-пакеты, как и на Android, загрузка идёт в фоне. Встроены requests, beautifulsoup4, lxml, pillow, PyYAML, packaging.",
          "Плагины-библиотеки (zwylib и другие): плагин импортирует библиотеку по её id. Если библиотека не установлена, в карточке плагина указывается, какую библиотеку нужно установить."
        ],
        "code": "",
        "table": null
      }
    ]
  },
  {
    "id": "wiki-cat-03",
    "number": "03",
    "title": "Эмуляция Java и Android",
    "anchor": "эмуляция-java-и-android",
    "items": [
      {
        "id": "wiki-03-01",
        "question": "Эмуляция Java и Android",
        "category": "Эмуляция Java и Android",
        "answer": "Код плагина импортирует Java-классы (from java.util import ArrayList, find_class(\"android.graphics.Color\")). На ПК Java нет, поэтому самые используемые классы реализованы на Python и ведут себя как оригиналы.\n\nLocaleController.getInstance().getCurrentLocale().getLanguage() и Locale.getDefault() возвращают язык интерфейса exDesktop.\n\nКлассы Telegram, которые работают по-настоящему:\n\nЭмулированные классы находятся и через find_class, jclass и Class.forName, а не только через import. У них есть методы рефлексии (getName, getDeclaredMethods, getDeclaredMethod), поэтому плагин может передать такой метод в hook_method. org.telegram.ui.ActionBar.AlertDialog.Builder с setMessage, setItems, setPositiveButton и другими кнопками показывает настоящее окно exDesktop, LayoutHelper.createLinear и createFrame задают размеры элементов.\n\nКласс, которого нет в эмуляции, по-прежнему заменяется пустым объектом: обращение к нему не вызывает ошибку, но и ничего не делает. Плагин продолжает работать, а функция, завязанная на такой класс, недоступна.",
        "bullets": [
          "NotificationCenter.getInstance(account).addObserver(delegate, NotificationCenter.didReceiveNewMessages): делегат получает didReceivedNotification(id, account, dialog_id, messages, scheduled) для каждого нового сообщения. postNotificationName передаёт собственные уведомления между плагинами.",
          "SendMessagesHelper.getInstance(account).sendMessage(SendMessageParams.of(text, dialog_id)) отправляет текст, prepareSendingDocument и prepareSendingPhoto отправляют файл.",
          "PluginsController.getInstance(): список plugins, getPlugin, isPluginEnabled, setPluginEnabled. PythonPluginsEngine.loadPlugin, unloadPlugin, isPluginActive загружают и выгружают плагин, loadPluginFromFile устанавливает файл после проверки PluginGuard (файл с критичными или высокими угрозами не устанавливается).",
          "Context.getSystemService(Context.CLIPBOARD_SERVICE).setPrimaryClip(ClipData.newPlainText(label, text)) копирует текст в буфер обмена.",
          "BitmapFactory читает изображения через Pillow, Bitmap.compress сохраняет их в PNG, JPEG или WEBP.",
          "R.drawable.имя и R.string.имя возвращают имя ресурса.",
          "FileLoader возвращает пути в кэше плагина: файлы Telegram для плагинов не загружаются."
        ],
        "code": "",
        "table": {
          "headers": [
            "Пакет",
            "Классы"
          ],
          "rows": [
            [
              "java.lang",
              "Object, Integer, Long, Short, Byte, Float, Double, Boolean, Character, String, StringBuilder, System, Thread, Math, Class, Runnable"
            ],
            [
              "java.util",
              "ArrayList, LinkedList, List, HashMap, LinkedHashMap, TreeMap, Map, HashSet, Set, Locale, Date, Random, UUID, Collections, Arrays"
            ],
            [
              "java.io, java.nio",
              "File, FileInputStream, FileOutputStream, ByteArrayInputStream, ByteArrayOutputStream, ByteBuffer, ByteOrder"
            ],
            [
              "android.graphics",
              "Color (parseColor, argb, rgb, компоненты, HSV), BitmapFactory (decodeFile, decodeByteArray, decodeStream, Options), Bitmap (getWidth, getHeight, compress, createScaledBitmap), PorterDuff, PorterDuffColorFilter"
            ],
            [
              "android.content",
              "Context (константы сервисов, getSystemService), ClipData, ClipboardManager, DialogInterface"
            ],
            [
              "android.os",
              "Build (SDK_INT = 34), Build.VERSION_CODES, Looper, Handler, Bundle, SystemClock"
            ],
            [
              "android.util, android.view, android.text",
              "TypedValue, Log, Base64, MotionEvent, TextUtils, InputType, ViewGroup.LayoutParams"
            ],
            [
              "org.telegram.messenger",
              "R, UserObject, ChatObject, LocaleController, BuildVars, FileLog, Utilities (Callback, очереди), MessagesController, UserConfig, NotificationCenter, SendMessagesHelper, FileLoader"
            ],
            [
              "com.exteragram.messenger",
              "ExteraConfig, PluginsController, Plugin, PythonPluginsEngine"
            ],
            [
              "de.robv.android.xposed",
              "XposedBridge, XposedHelpers, XC_MethodHook с MethodHookParam и Unhook, XC_MethodReplacement (returnConstant, DO_NOTHING)"
            ],
            [
              "com.exteragram.messenger.plugins",
              "PyMethodHook, PyMethodReplacement, hooks.HookFilter"
            ],
            [
              "org.telegram.tgnet",
              "TLRPC, TLObject, ConnectionsManager, RequestDelegate"
            ]
          ]
        }
      }
    ]
  },
  {
    "id": "wiki-cat-04",
    "number": "04",
    "title": "Хуки методов (Xposed)",
    "anchor": "хуки-методов-xposed",
    "items": [
      {
        "id": "wiki-04-01",
        "question": "Хуки методов (Xposed)",
        "category": "Хуки методов (Xposed)",
        "answer": "На Android плагин может перехватить любой Java-метод Telegram (hook_method, hook_all_methods, hook_all_constructors). В exDesktop нет Java-классов Android-клиента, поэтому срабатывают только перехваты из списка ниже и перехваты методов эмулированных классов. Остальные вызовы проходят без ошибки, но перехват не выполняется. Функции, построенные на перехвате интерфейса Android (ячейки сообщений, отрисовка, камера), на ПК недоступны.\n\nМетоды эмулированных классов (AlertDialog.Builder, BottomSheet, AndroidUtilities, Browser и другие из раздела «Эмуляция Java и Android») перехватываются по-настоящему: before_hooked_method и after_hooked_method получают аргументы и результат, param.setResult() заменяет результат и отменяет вызов оригинала, replace_hooked_method заменяет метод целиком.",
        "bullets": [],
        "code": "",
        "table": null
      },
      {
        "id": "wiki-04-02",
        "question": "API перехвата",
        "category": "Хуки методов (Xposed)",
        "answer": "Перехват устроен так же, как в exteraGram:",
        "bullets": [
          "hook_method(метод, хук, priority) возвращает XC_MethodHook.Unhook; unhook.unhook() или self.unhook_method(unhook) снимает перехват. hook_all_methods и hook_all_constructors возвращают список таких объектов. Если перехват на ПК невозможен, возвращается None, как у оригинала.",
          "Хук задаётся классом MethodHook, MethodReplacement, XC_MethodHook, XC_MethodReplacement, функцией или аргументами before= и after=.",
          "Порядок как в Xposed: хуки с большим priority выполняются раньше в before_hooked_method и позже в after_hooked_method. param.setResult() или param.setThrowable() в before_hooked_method отменяет вызов оригинала, остальные after_hooked_method выполняются.",
          "MethodHookParam: method, thisObject, args (изменяемый список), getResult, setResult, getThrowable, setThrowable, hasThrowable, getResultOrThrowable, getObjectExtra, setObjectExtra.",
          "Конструкторы перехватываются через hook_all_constructors или getDeclaredConstructor(); в after_hooked_method param.thisObject содержит созданный объект.",
          "Рефлексия эмулированных классов возвращает настоящие объекты: getDeclaredMethods, getMethods, getDeclaredMethod, getDeclaredConstructors, getDeclaredFields, getDeclaredField. У метода есть getName, getParameterCount, getParameterTypes, getModifiers, invoke."
        ],
        "code": "",
        "table": null
      },
      {
        "id": "wiki-04-03",
        "question": "Фильтры",
        "category": "Хуки методов (Xposed)",
        "answer": "Фильтры отсекают вызовы до запуска кода хука, как HookFilter в exteraGram:\n\nПоддерживаются все фильтры SDK: ArgumentIsNull, ArgumentNotNull, ArgumentIsTrue, ArgumentIsFalse, ArgumentEqual, ArgumentNotEqual, ArgumentIsInstanceOf, RESULT_IS_NULL, RESULT_NOT_NULL, RESULT_IS_TRUE, RESULT_IS_FALSE, ResultEqual, ResultNotEqual, ResultIsInstanceOf, Or, Condition. Условие Condition записывается на MVEL, как на Android: доступны param, result, object, this, поля thisObject по имени, полные имена классов (org.telegram.messenger.NotificationCenter.didReceiveNewMessages), операторы &&, ||, !, ==, instanceof, null, true, false.",
        "bullets": [],
        "code": "from base_plugin import HookFilter, hook_filters, MethodHook\n\nclass OnlyTrue(MethodHook):\n    @hook_filters(HookFilter.ArgumentIsTrue(0), HookFilter.Condition(\"param.thisObject != null\"))\n    def before_hooked_method(self, param):\n        ...\n\nself.hook_method(method, after=on_after, after_filters=[HookFilter.RESULT_NOT_NULL])",
        "table": null
      },
      {
        "id": "wiki-04-04",
        "question": "XposedHelpers",
        "category": "Хуки методов (Xposed)",
        "answer": "findClass, findClassIfExists, findMethodExact, findMethodBestMatch, findConstructorExact, findAndHookMethod, findAndHookConstructor, findField, getObjectField и setObjectField (а также варианты для int, long, boolean и других типов и статических полей), callMethod, callStaticMethod, newInstance, setAdditionalInstanceField, getAdditionalInstanceField, removeAdditionalInstanceField и статические варианты. XposedBridge.hookMethod, hookAllMethods, hookAllConstructors, unhookMethod, invokeOriginalMethod, log.\n\nPyMethodHook и PyMethodReplacement из com.exteragram.messenger.plugins.xposed работают как в exteraGram, включая setBeforeHookedFilters и setAfterHookedFilters: такие хуки используют библиотеки вроде ZwyLib.",
        "bullets": [],
        "code": "",
        "table": null
      },
      {
        "id": "wiki-04-05",
        "question": "Перехват действий клиента",
        "category": "Хуки методов (Xposed)",
        "answer": "Действия пользователя в exDesktop проходят через те же методы, что и на Android, поэтому их перехват срабатывает:\n\nparam.setResult(None) в before_hooked_method отменяет действие.",
        "bullets": [],
        "code": "",
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
        "id": "wiki-04-06",
        "question": "Наследование Java-классов",
        "category": "Хуки методов (Xposed)",
        "answer": "extera_utils.classes позволяет унаследовать эмулированный класс на Python:\n\nself.java возвращает Java-объект, который передаётся в методы клиента; вызовы его переопределённых методов попадают в Python. Поддерживаются joverride, joverload (имя Java-метода отличается от имени в Python), jmethod, jfield с jgetmethod и jsetmethod, jconstructor, jpreconstructor, методы на MVEL (jMVELmethod, jMVELoverride), Base.from_java, new_instance, class_proxy с ClassInterceptor, release_plugin и collect_peers. Объекты плагина освобождаются при его выгрузке.\n\nИсключение составляет SendMessagesHelper.sendMessage: такой хук подключается к конвейеру отправки exDesktop. В before_hooked_method первый аргумент param.args[0] содержит параметры отправки, изменение message меняет текст, param.setResult(None) отменяет отправку. replace_hooked_method тоже отменяет отправку.\n\nХук на MessagesController.processNewMessages или NotificationsController.processNewMessages вызывается для каждого нового сообщения. param.args[0] содержит список из одного MessageObject с полями messageOwner.id, messageOwner.message, messageOwner.date, messageOwner.out, messageOwner.dialog_id, messageOwner.peer_id, messageOwner.from_id и методами getId(), getDialogId(), isOut(), getFromChatId(). Отменить получение сообщения нельзя.\n\nХуки на события экранов выполняются по сигналам exDesktop:\n\nМетоды эмулированных классов перехватываются напрямую: хук на BottomSheet.show, MediaController.playMessage или любой другой реализованный метод срабатывает при каждом его вызове из плагина или из exDesktop. Получение метода через рефлексию (find_class(...).getClass().getDeclaredMethod(name)) возвращает тот же метод.\n\nMessageObject в аргументах хуков содержит данные сообщения: тип (type, isPhoto(), isVideo(), isVoice(), isMusic(), isSticker(), isGif(), isRoundVideo(), isDocument()), документ (getDocument() с id, mime_type, size и атрибутами имени файла, аудио, видео и стикера), getMusicTitle(), getMusicAuthor(), getDuration(), getStickerEmoji(), сущности текста в messageOwner.entities, ответ (isReply(), getReplyMsgId()), пересылку (isForwarded(), messageOwner.fwd_from), isEdited(), getGroupId(), isPost().\n\nMessagesController отдаёт данные клиента: getAllDialogs(), getDialogs(folder_id), getDialog(id) (TL_dialog с unread_count, pinned, folder_id, top_message), getDialogFilters() (папки с name и dialogs), isDialogMuted, isForum, и выполняет действия: openByUserName, deleteMessages, pinDialog, markDialogAsRead.\n\nПоле ввода текущего чата доступно через ChatActivity.getChatActivityEnterView(): getFieldText(), setFieldText(text), hasText(), getEditField().getText() (с append, insert, replace, clear) и getEditField().setText(text) читают и меняют текст поля в exDesktop.\n\nMediaController управляет плеером exDesktop: getPlayingMessageObject(), isPlayingMessage, isMessagePaused, playMessage, pauseMessage, resumeAudio, playNextMessage, playPreviousMessage, cleanupPlayer, seekToProgress. BottomSheet показывает окно с setCustomView, setTitle, show, dismiss, isShowing и setOnDismissListener; BottomSheet.Builder поддерживает setItems: список открывается окном exDesktop с заголовком из setTitle, выбор пункта вызывает слушатель с номером пункта. client_utils.get_media_controller(), get_notifications_controller() и другие функции возвращают эти же классы.\n\nЭти хуки работают с семантикой Xposed: все before_hooked_method в порядке приоритета, затем действие клиента, если его не отменили, затем after_hooked_method. Изменить интерфейс Android в них нельзя: обращения к его элементам ничего не делают.\n\nПлагин, который ставит остальные хуки, отмечается в списке плагинов пометкой «Работает частично». По нажатию на пометку открывается список перехватов, недоступных на ПК.\n\nДля переноса таких функций используется перенос плагина под ПК: логика переписывается на хуки запросов, хук отправки, меню и настройки. Порядок описан в руководстве по переносу для ИИ.",
        "bullets": [],
        "code": "from extera_utils.classes import Base, java_subclass, joverride, jfield\nfrom android.widget import FrameLayout\n\n@java_subclass(FrameLayout)\nclass Cell(Base):\n    size = jfield(\"int\", default=48)\n\n    def on_post_init(self, context):\n        self.setWillNotDraw(False)\n\n    @joverride()\n    def onMeasure(self, width_spec, height_spec):\n        ...",
        "table": {
          "headers": [
            "Хук Android",
            "Когда вызывается на ПК",
            "param.thisObject"
          ],
          "rows": [
            [
              "ChatActivity.onResume, createView, onFragmentCreate",
              "открытие чата",
              "ChatActivity с getDialogId(), getCurrentUser(), getCurrentChat()"
            ],
            [
              "ChatActivity.onPause, onFragmentDestroy",
              "переход в другой чат",
              "то же"
            ],
            [
              "ProfileActivity.onResume, createView",
              "открытие профиля",
              "ProfileActivity с getUserId(), getChatId()"
            ],
            [
              "DialogsActivity.onResume, createView",
              "закрытие чата, показ списка",
              "DialogsActivity"
            ],
            [
              "LaunchActivity.onActivityResult, BaseFragment.onActivityResultFragment",
              "после выбора файла",
              "param.args: код запроса, RESULT_OK (-1) или RESULT_CANCELED (0), Intent с getData()"
            ],
            [
              "ProfileActivity.onPause, onFragmentDestroy",
              "переход из профиля в чат",
              "ProfileActivity"
            ],
            [
              "DialogsActivity.onPause, onFragmentDestroy",
              "открытие чата из списка",
              "DialogsActivity"
            ],
            [
              "LaunchActivity.onCreate",
              "сразу после загрузки плагина",
              "LaunchActivity"
            ],
            [
              "LaunchActivity.onResume, onStart",
              "окно exDesktop стало активным",
              "LaunchActivity"
            ],
            [
              "LaunchActivity.onPause, onStop",
              "окно exDesktop потеряло фокус",
              "LaunchActivity"
            ],
            [
              "Browser.openUrl",
              "нажатие на любую внешнюю ссылку в клиенте",
              "param.args[1]: адрес; param.setResult(None) не даёт открыть ссылку"
            ],
            [
              "LaunchActivity.handleIntent",
              "открытие ссылки tg:// в клиенте",
              "param.args[0]: Intent с getData(); param.setResult(True) отменяет обработку ссылки"
            ],
            [
              "MediaController.playMessage",
              "запуск аудио, голосового или видеосообщения в чате",
              "param.args[0]: MessageObject; param.setResult(False) отменяет воспроизведение"
            ],
            [
              "AudioPlayerAlert.updateTitle",
              "после запуска аудио",
              "AudioPlayerAlert"
            ],
            [
              "ChatActivityEnterView.setReplyingMessageObject",
              "выбор сообщения для ответа",
              "param.args[0]: MessageObject; param.setResult(None) отменяет выбор"
            ],
            [
              "VoIPHelper.startCall",
              "начало исходящего звонка",
              "param.args[0]: пользователь TL_user, param.args[1]: видеозвонок; param.setResult(None) отменяет звонок"
            ],
            [
              "ChatMessageCell.setMessageObject, setMessageContent",
              "построение текста сообщения в чате",
              "param.args[0]: MessageObject; присваивание messageText или messageOwner.message меняет показанный текст (только на экране, сообщение не меняется)"
            ],
            [
              "ChatAvatarContainer.updateSubtitle, setSubtitle",
              "обновление статуса в шапке чата",
              "ChatAvatarContainer с getDialogId(), setSubtitle(), getSubtitleTextView().setText(); новый текст показывается вместо статуса"
            ],
            [
              "ChatActivity.createMenu, fillMessageMenu",
              "правый клик по сообщению",
              "ChatActivity; param.args[0]: ячейка с getMessageObject(); param.setResult(None) не даёт открыть меню"
            ],
            [
              "TranscribeButton.onTap",
              "нажатие на кнопку расшифровки голосового или видеосообщения",
              "TranscribeButton с getMessageObject(); param.setResult(None) отменяет расшифровку"
            ],
            [
              "SendMessagesHelper.sendReaction",
              "постановка или снятие реакции",
              "param.args[0]: MessageObject, param.args[1]: список VisibleReaction (emojicon, documentId), пустой при снятии; param.setResult(None) отменяет реакцию"
            ],
            [
              "NotificationsController.showOrUpdateNotification",
              "показ уведомления о новом сообщении",
              "NotificationsController с pushMessages; param.setResult(None) скрывает уведомление"
            ],
            [
              "ChatAvatarContainer.onAvatarClick, ChatActivity.openProfile",
              "нажатие на шапку чата",
              "ChatAvatarContainer с getDialogId(); param.setResult(None) не даёт открыть профиль"
            ],
            [
              "MediaController.playNextMessage, playNextMessageWithoutOrder, playPreviousMessage",
              "переход к следующему или предыдущему треку, в том числе автоматический",
              "MediaController; param.setResult(None) отменяет переход"
            ],
            [
              "MediaController.cleanupPlayer",
              "закрытие плеера",
              "MediaController; param.setResult(None) оставляет плеер открытым"
            ],
            [
              "MediaController.setPlaylist",
              "запуск аудио, перед playMessage",
              "param.args[0]: список сообщений, param.args[1]: текущее"
            ],
            [
              "AudioPlayerAlert (конструктор), AudioPlayerAlert.onSubItemClick",
              "открытие полноэкранного плеера и выбор пункта его меню",
              "AudioPlayerAlert с полем optionsButton; пункты из optionsButton.addSubItem(id, icon, text) показываются по правому клику в плеере, setSubItemShown скрывает пункт"
            ],
            [
              "AndroidUtilities.openForView",
              "открытие файла из чата",
              "param.args[0]: MessageObject; param.setResult(None) отменяет открытие"
            ],
            [
              "LaunchActivity.onNewIntent",
              "открытие ссылки tg://",
              "то же, что handleIntent"
            ],
            [
              "MainTabsActivity.onResume, createView",
              "показ списка чатов",
              "DialogsActivity"
            ],
            [
              "ChatActivity.onTransitionAnimationEnd",
              "открытие чата",
              "ChatActivity"
            ],
            [
              "ProfileActivity.updateProfileData",
              "открытие профиля",
              "ProfileActivity"
            ],
            [
              "ChatMessageCell.setMessageObjectInternal",
              "построение текста сообщения",
              "как у setMessageObject"
            ],
            [
              "ChatActivity.getMessageContent",
              "«Копировать текст» в меню сообщения",
              "param.args[0]: MessageObject; результат, заданный через param.setResult(text) в after_hooked_method, попадает в буфер обмена"
            ],
            [
              "SettingsActivity.fillItems, SettingsActivity.onClick",
              "построение главного меню exDesktop и выбор пункта",
              "param.args[0]: список UItem с пунктом id == -1; пункты, добавленные плагином (UItem.asButton(id, icon, text)), показываются в главном меню, клик вызывает onClick с param.args[0]: выбранный UItem"
            ],
            [
              "ProfileActivity.updateRowsIds, ProfileActivity$ListAdapter.onBindViewHolder",
              "построение блока информации в профиле",
              "у ProfileActivity есть поля rowCount, phoneRow, usernameRow, bioRow (у канала channelInfoRow), infoHeaderRow, infoSectionRow, userId, chatId, их можно читать и менять через рефлексию; onBindViewHolder получает holder.itemView типа TextDetailCell, setTextAndValue в строке телефона, юзернейма или описания заменяет текст, в новой строке (после увеличения rowCount) добавляет строку в конец блока"
            ],
            [
              "ChatActivity.addToSelectedMessages",
              "выделение сообщения",
              "param.args[0]: MessageObject; param.setResult(None) не даёт выделить"
            ],
            [
              "ChatActivity.sendMedia, SendMessagesHelper.prepareSendingMedia, prepareSendingDocuments",
              "отправка файлов и фото",
              "param.args[0]: первый PhotoEntry с path и caption, param.args[5]: все файлы; param.setResult(None) отменяет отправку"
            ],
            [
              "DialogCell.update, buildLayout, setDialog",
              "построение имени чата в списке чатов",
              "DialogCell с currentDialogId, getCurrentUser(), getCurrentChat(), nameString; изменение first_name, last_name пользователя из MessagesController.getUser или title чата в before_hooked_method меняет показанное имя, как в Android-плагинах локального переименования"
            ],
            [
              "ChatAvatarContainer.setTitle, ChatActivity.updateTitle",
              "построение названия в шапке чата",
              "ChatAvatarContainer с getDialogId(); изменённый param.args[0] или вызов setTitle() меняет показанное название"
            ]
          ]
        }
      }
    ]
  },
  {
    "id": "wiki-cat-05",
    "number": "05",
    "title": "Веб-окна плагинов",
    "anchor": "веб-окна-плагинов",
    "items": [
      {
        "id": "wiki-05-01",
        "question": "Веб-окна плагинов",
        "category": "Веб-окна плагинов",
        "answer": "Плагин может показать свой интерфейс на HTML в отдельном окне exDesktop. Это замена мобильных всплывающих окон с WebView:",
        "bullets": [
          "В странице доступен объект exd: exd.send(data) передаёт данные в on_message плагина, exd.onMessage(fn) получает данные из app.send(data), exd.close() закрывает окно. app.eval(js) выполняет JavaScript, app.close() закрывает окно, on_close и on_load вызываются при закрытии и загрузке.",
          "android.webkit.WebView работает так же, как на Android: loadData, loadDataWithBaseURL, loadUrl (только https://), addJavascriptInterface (вызовы из JS выполняются асинхронно), evaluateJavascript, WebViewClient.shouldOverrideUrlLoading и onPageFinished. WebView внутри AlertDialog, BottomSheet или AlertDialogBuilder.set_view открывается в веб-окне.",
          "Защита: окно открывается от имени плагина, которому оно принадлежит. Сетевые запросы из страницы разрешены только по HTTPS и запрещены полностью, если плагину отключён интернет в разрешениях. Переход по ссылке передаётся плагину, иначе ссылка открывается в браузере с подтверждением, как обычная ссылка из плагина. Окна закрываются при выключении плагина."
        ],
        "code": "from ui.webapp import WebApp\n\napp = WebApp(\"Статистика\", html=\"<button onclick=\\\"exd.send({click: 1})\\\">OK</button>\",\n             width=480, height=640, on_message=lambda data: app.send({\"reply\": data}))\napp.show()",
        "table": null
      }
    ]
  },
  {
    "id": "wiki-cat-06",
    "number": "06",
    "title": "Виджеты Android",
    "anchor": "виджеты-android",
    "items": [
      {
        "id": "wiki-06-01",
        "question": "Виджеты Android",
        "category": "Виджеты Android",
        "answer": "Кроме TextView, EditText, ImageView, LinearLayout, FrameLayout и ScrollView в окнах плагинов отображаются Button, CheckBox, Switch (setChecked, setOnCheckedChangeListener), SeekBar (setMax, setProgress, OnSeekBarChangeListener) и ProgressBar (в том числе setIndeterminate). TextWatcher у EditText получает beforeTextChanged, onTextChanged и afterTextChanged.\n\nКонтекст Android (ApplicationLoader.applicationContext, LaunchActivity) возвращает рабочие объекты: getClassLoader().loadClass, getResources() (getIdentifier, getDisplayMetrics, getConfiguration, getString, getColor), getPackageManager().getPackageInfo, getWindow(), getSystemService для window, connectivity, audio, notification (уведомление показывается плашкой в клиенте), power, input_method, activity, clipboard.",
        "bullets": [],
        "code": "",
        "table": null
      }
    ]
  },
  {
    "id": "wiki-cat-07",
    "number": "07",
    "title": "Выбор чатов и пользователей",
    "anchor": "выбор-чатов-и-пользователей",
    "items": [
      {
        "id": "wiki-07-01",
        "question": "Выбор чатов и пользователей",
        "category": "Выбор чатов и пользователей",
        "answer": "Экраны выбора из Android открываются окном выбора exDesktop, когда плагин показывает их через presentFragment:\n\nПри закрытии окна без выбора делегат не вызывается. presentFragment(PluginSettingsActivity(plugin)) открывает окно настроек плагина.",
        "bullets": [
          "DialogsActivity(args) с делегатом DialogsActivityDelegate: выбор одного чата. Аргументы allowUsers, allowBots, allowGroups, allowChannels ограничивают список, selectAlertString задаёт заголовок. После выбора вызывается didSelectDialogs со списком из одного TopicKey (dialogId, topicId).",
          "GroupCreateActivity с делегатом GroupCreateActivityDelegate: выбор нескольких пользователей, групп и каналов, select(ids) отмечает выбранных заранее. После выбора вызывается didSelectUsers со списком id."
        ],
        "code": "",
        "table": null
      }
    ]
  },
  {
    "id": "wiki-cat-08",
    "number": "08",
    "title": "Перенос при помощи ИИ",
    "anchor": "перенос-при-помощи-ии",
    "items": [
      {
        "id": "wiki-08-01",
        "question": "Перенос при помощи ИИ",
        "category": "Перенос при помощи ИИ",
        "answer": "В карточке плагина с Android-хуками, DEX-кодом или ошибкой загрузки и в окне его установки есть действие «Перенести при помощи ИИ». Перед запуском открывается окно с объёмом запроса и подсказками, в нём выбираются сервис, модель, ключ API и режим проверки. Те же параметры задаются в настройках движка плагинов, раздел «ИИ-перенос плагинов»:\n\nИспользуется только ключ пользователя. Модель и адрес можно задать вручную. Бесплатных тарифов Groq и OpenRouter (несколько тысяч токенов на запрос) хватает только на маленькие плагины. Для Ollama по умолчанию используется qwen2.5-coder:7b с контекстом 32 тысячи токенов.\n\nПорядок работы:\n\nСлабые и локальные модели переносят хуже: часть функций может не сохраниться.",
        "bullets": [
          "Клиент отправляет модели короткую инструкцию, подсказки по найденным в плагине перехватам, подходящие разделы справочника и исходный код без комментариев и двоичных вставок. Модель может запросить дополнительные разделы строкой NEED: раздел.",
          "Ответ проверяется: синтаксис, импорты из модулей SDK, метаданные (__id__ с суффиксом _exd, __desktop__, __ported_from__, __desktop_os__), запрещённые модули и вызовы, пути Android, новые сетевые адреса, критичные находки PluginGuard. Недостающие импорты SDK дописываются, а неподдерживаемые перехваты удаляются автоматически, без лишней попытки.",
          "В режиме «С проверкой и исправлением» ошибки возвращаются модели, до четырёх попыток. В режиме «Один запрос» результат с ошибками отклоняется сразу.",
          "Прошедший проверку плагин сохраняется в папку ai_ports и устанавливается отдельно от оригинала через обычное окно установки с проверкой PluginGuard. В окне установки и в карточке он отмечен «Перенесено с Android при помощи ИИ»."
        ],
        "code": "",
        "table": {
          "headers": [
            "Сервис",
            "Ключ API",
            "Адрес по умолчанию"
          ],
          "rows": [
            [
              "ChatGPT (OpenAI)",
              "нужен",
              "api.openai.com"
            ],
            [
              "Claude (Anthropic)",
              "нужен",
              "api.anthropic.com"
            ],
            [
              "OpenRouter, Groq, DeepSeek",
              "нужен",
              "адрес сервиса"
            ],
            [
              "Ollama",
              "не нужен",
              "localhost:11434"
            ],
            [
              "LM Studio",
              "не нужен",
              "localhost:1234"
            ],
            [
              "Свой адрес",
              "по необходимости",
              "OpenAI-совместимый API"
            ],
            [
              "Gemini (Google)",
              "нужен, есть бесплатный ключ Google AI Studio",
              "generativelanguage.googleapis.com"
            ]
          ]
        }
      }
    ]
  },
  {
    "id": "wiki-cat-09",
    "number": "09",
    "title": "Защита",
    "anchor": "защита",
    "items": [
      {
        "id": "wiki-09-01",
        "question": "Защита",
        "category": "Защита",
        "answer": "Плагин выполняется в защитной среде. Она ограничивает доступ к файлам, сети и системе и не зависит от того, что написано в коде плагина.",
        "bullets": [],
        "code": "",
        "table": null
      },
      {
        "id": "wiki-09-02",
        "question": "Файлы",
        "category": "Защита",
        "answer": "При обращении к обычной папке пользователь видит окно «Доступ к файлам» с кнопками «Разрешить на свой страх и риск» и «Запретить». Разрешение запоминается для папки.\n\nПути Android перенаправляются в папку плагина: /sdcard/..., /storage/emulated/0/..., /data/user/0/com.exteragram.messenger/....",
        "bullets": [],
        "code": "",
        "table": {
          "headers": [
            "Где",
            "Доступ"
          ],
          "rows": [
            [
              "Своя папка плагина (file_utils.get_plugin_dir()), свой кэш, общие папки медиа плагинов",
              "чтение и запись"
            ],
            [
              "Папки, в имени которых есть id плагина, внутри папки файлов и домашней папки",
              "чтение и запись"
            ],
            [
              "Библиотеки Python, SDK, установленные зависимости",
              "только чтение"
            ],
            [
              "Данные Telegram и exDesktop (tdata), чужие плагины и их данные, настройки плагинов",
              "запрещено всегда"
            ],
            [
              "Профили браузеров, кошельки, ключи SSH и GPG, менеджеры паролей, Discord, Steam",
              "запрещено всегда"
            ],
            [
              "Остальные папки (Рабочий стол, Загрузки, Документы и другие)",
              "по разрешению пользователя"
            ]
          ]
        }
      },
      {
        "id": "wiki-09-03",
        "question": "Выбор файла",
        "category": "Защита",
        "answer": "file_utils.pick_file(callback, title=\"\", filters=\"\", multiple=False) открывает системный диалог, callback получает список путей. Путь Android тоже работает: startActivityForResult с Intent.ACTION_GET_CONTENT, ACTION_OPEN_DOCUMENT или ACTION_PICK открывает диалог, результат приходит в хук onActivityResult, файл читается через getContentResolver().openInputStream(uri) или по uri.getPath(). Плагин получает доступ только к выбранным файлам, до перезапуска клиента.\n\nОтносительный путь в open() и sqlite3.connect() отсчитывается от папки плагина, как и на Android. getFilesDir(), getFilesDirFixed() и getCacheDir() возвращают папку плагина и его кэш. Базы SQLite проверяются по тем же правилам, что и обычные файлы.",
        "bullets": [],
        "code": "",
        "table": null
      },
      {
        "id": "wiki-09-04",
        "question": "Сеть",
        "category": "Защита",
        "answer": "Плагин подключается к сайтам в интернете без запросов. Подключения к localhost тоже разрешены. Разрешение пользователя нужно в двух случаях:\n\nВ обоих окнах есть кнопки «Разрешить всегда», «Один раз» и «Запретить», решение запоминается для пары «плагин и адрес». Открыть порт для входящих подключений из сети нельзя.",
        "bullets": [
          "подключение к устройству в локальной сети (частные адреса, имена .local, .lan, .home, .internal): окно «Запрос доступа к локальной сети»;",
          "отправка UDP-пакетов на внешний адрес: окно «Запрос отправки UDP-пакетов»."
        ],
        "code": "",
        "table": null
      },
      {
        "id": "wiki-09-05",
        "question": "Защищённые данные",
        "category": "Защита",
        "answer": "Всё, что плагин отправляет в сеть или в Telegram (send_message, send_request, edit_message, отправка файлов), проверяется на защищённые данные:\n\nПри совпадении отправка останавливается до решения пользователя. В окне «Отправка защищённых данных» указано, что и куда отправляется, и есть кнопки «Запретить», «Один раз», «Разрешить всегда» и «Отключить плагин». Если ответить некому (неизвестный источник вызова), отправка блокируется.",
        "bullets": [
          "ключи сессии Telegram;",
          "код входа в Telegram;",
          "номер телефона аккаунта и номера телефонов контактов;",
          "приватные ключи и сид-фразы криптокошельков;",
          "данные браузера;",
          "данные компьютера (аппаратные адреса и идентификаторы);",
          "токены ботов и API-ключи, если в настройках движка плагинов включена «Защита токенов ботов и API-ключей»."
        ],
        "code": "",
        "table": null
      },
      {
        "id": "wiki-09-06",
        "question": "Разрешения и журнал",
        "category": "Защита",
        "answer": "В меню плагина есть раздел «Разрешения и журнал».\n\nЕсли у плагина нет своих настроек, кнопка настроек в карточке всё равно показывается ради этого раздела.",
        "bullets": [
          "«Разрешения»: доступ в интернет целиком, буфер обмена, уведомления, открытие ссылок без подтверждения, а также выданные решения по адресам, UDP, защищённым данным и папкам. Нажатие на строку сбрасывает решение, после чего плагин запросит его повторно. Кнопка «Сбросить все разрешения» очищает всё сразу.",
          "«Журнал»: подключения к адресам, открытые папки и заблокированные действия (запуск программ, прямой доступ к системе, чтение реестра, отправка защищённых данных). Журнал ведётся с момента запуска клиента. Из журнала можно сразу запретить подключения к адресу."
        ],
        "code": "",
        "table": null
      },
      {
        "id": "wiki-09-07",
        "question": "Система",
        "category": "Защита",
        "answer": "Запрещены запуск программ (subprocess, os.system, os.startfile), вызов системных функций через ctypes, запись в реестр Windows и доступ к внутренностям интерпретатора (gc.get_objects, sys.settrace, создание байткода вручную). Попытка блокируется, пользователь видит плашку с названием плагина.\n\nПопытки обойти защиту отмечаются проверкой PluginGuard как критическая угроза.",
        "bullets": [],
        "code": "",
        "table": null
      }
    ]
  },
  {
    "id": "wiki-cat-10",
    "number": "10",
    "title": "Проверка PluginGuard",
    "anchor": "проверка-pluginguard",
    "items": [
      {
        "id": "wiki-10-01",
        "question": "Проверка PluginGuard",
        "category": "Проверка PluginGuard",
        "answer": "Перед установкой каждый плагин проверяется без запуска его кода. Проверка идёт в три этапа:\n\nИтог показывается одним из уровней: «угроз нет», «низкий риск», «средний риск», «критическая угроза». Плагин с критической угрозой не устанавливается и помечается нежелательным, повторная установка того же файла тоже невозможна.\n\nУстановку блокируют:\n\nОдно лишь сходство с вредоносными плагинами установку не блокирует, если ИИ-арбитр признал плагин безопасным.",
        "bullets": [
          "Статические правила разбирают код: сеть, файлы, вызовы системы, работа с данными аккаунта, обфускация.",
          "Векторная модель сравнивает фрагменты кода с базой чистых и вредоносных плагинов.",
          "ИИ-арбитр получает находки и спорные фрагменты и отделяет реальную угрозу от обычной функциональности. Арбитр включается в настройках движка плагинов: сервис (Groq, OpenRouter, DeepSeek, OpenAI, Mistral) и свой ключ API.",
          "явная обфускация кода;",
          "поведение, характерное для вредоносных плагинов (сходство с базой в нескольких опасных фрагментах);",
          "отправка защищённых данных (сессии, кодов входа, ключей) на сторонние адреса;",
          "дропперы: плагин скачивает файл, сохраняет его и запускает или подключает;",
          "загрузка кода во время работы: плагин скачивает DEX, нативную библиотеку, Python-модуль или другой плагин и загружает его. Такой код нельзя проверить до установки, поэтому плагин блокируется, даже если сам загрузчик выглядит безобидно;",
          "встроенные исполняемые файлы Windows или Linux вместе с кодом их загрузки."
        ],
        "code": "",
        "table": null
      },
      {
        "id": "wiki-10-02",
        "question": "Зашифрованные плагины",
        "category": "Проверка PluginGuard",
        "answer": "Зашифрованный или упакованный код (base64, zlib, XOR, вложенные exec и подобные слои) расшифровывается статически, без выполнения. Расшифровка ограничена по глубине, объёму и времени.\n\nОкно просмотра кода в окне установки показывает расшифрованный код под исходным. Двоичные вставки (DEX, нативные библиотеки) заменяются строкой с их типом и размером.",
        "bullets": [
          "Если код не удалось расшифровать полностью, плагин блокируется.",
          "Полностью расшифрованный код проверяется теми же правилами. Плагин устанавливается, только если в расшифрованном коде нет находок среднего уровня и выше и ИИ-арбитр признал его безопасным. Без настроенного арбитра такой плагин не устанавливается."
        ],
        "code": "",
        "table": null
      }
    ]
  },
  {
    "id": "wiki-cat-11",
    "number": "11",
    "title": "Сервер разработки",
    "anchor": "сервер-разработки",
    "items": [
      {
        "id": "wiki-11-01",
        "question": "Сервер разработки",
        "category": "Сервер разработки",
        "answer": "Переключатель «Сервер разработки плагинов» в настройках движка плагинов запускает dev_server.DevServer на 127.0.0.1:42690. Протокол совпадает с exteraGram, поэтому клиент горячей перезагрузки из exteragram-utils работает без изменений (команда adb forward на ПК не нужна): сообщения {\"@\": команда, \"#\": номер, ...}, ответ содержит тот же # и success.\n\nСервер принимает только локальные подключения. Запустить его или отладчик может только exDesktop: вызов DevServer.start_server() из плагина отклоняется, а импорт dev_server в плагине отмечается проверкой.",
        "bullets": [],
        "code": "",
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
              "get_plugins",
              "",
              "список установленных плагинов с именем, версией и состоянием"
            ],
            [
              "write_plugin",
              "plugin_id, content",
              "установка или обновление плагина после проверки PluginGuard; критичные и высокие угрозы блокируют установку"
            ],
            [
              "reload_plugin",
              "plugin_id",
              "перезапуск плагина"
            ],
            [
              "enable_plugin, disable_plugin",
              "plugin_id",
              "включение и выключение"
            ],
            [
              "remove_plugin",
              "plugin_id",
              "удаление"
            ],
            [
              "start_debugger, stop_debugger",
              "host, port, platform (vscode или pycharm)",
              "подключение отладчика (debugpy для VS Code)"
            ]
          ]
        }
      }
    ]
  },
  {
    "id": "wiki-cat-12",
    "number": "12",
    "title": "Elyx",
    "anchor": "elyx",
    "items": [
      {
        "id": "wiki-12-01",
        "question": "Elyx",
        "category": "Elyx",
        "answer": "Поддерживаются:\n\nНе поддерживаются зашифрованные архивы и файлы .dex. Методы ассетов, которые на Android создают Drawable (to_drawable, to_svg_drawable и другие), возвращают путь к файлу.",
        "bullets": [
          "refmap.yaml, refmap.yml, refmap.json с ключами main, metainfo, assets, strings, wheels; ключи без значения получают значения по умолчанию;",
          "метаданные YAML и JSON, подстановка {ключ} из строк локализации в названии и описании;",
          "отдельное пространство модулей ElyxPlugins.<id>: локальные модули разных плагинов с одинаковыми именами не пересекаются;",
          "обычный и относительный импорт локальных модулей, импорт JSON, YAML и TXT как модулей, elyx.import_module;",
          "from elyx import metainfo, refmap, assets, strings, settings, import_module, get_environment, классы Strings, SettingsController, Assets, Asset;",
          "колёса .whl из папки wheels;",
          "проверка зависимостей requires с минимальной версией."
        ],
        "code": "",
        "table": null
      }
    ]
  },
  {
    "id": "wiki-cat-13",
    "number": "13",
    "title": "Windows, Linux и macOS",
    "anchor": "windows-linux-и-macos",
    "items": [
      {
        "id": "wiki-13-01",
        "question": "Windows, Linux и macOS",
        "category": "Windows, Linux и macOS",
        "answer": "Движок плагинов одинаково работает на всех трёх системах. Встроенные пакеты (requests, beautifulsoup4, lxml, pillow, PyYAML, packaging) входят в сборки для всех систем. Зависимости __requirements__ с нативным кодом устанавливаются из колёс для текущей системы и процессора.\n\nЧтобы плагин работал везде:\n\nИИ-перенос проверяет эти правила и указывает систему, для которой плагин перенесён, в __desktop_os__.\n\nПри ошибке запуска движка её текст выводится в разделе плагинов настроек, а полный трейс Python записывается в log.txt.",
        "bullets": [
          "пути строятся через os.path.join и file_utils.get_plugin_dir(), без обратной косой черты, букв дисков, %APPDATA%, /home/... и ~/Library;",
          "имена файлов на Linux различают регистр;",
          "текстовые файлы открываются с encoding=\"utf-8\";",
          "модули одной системы (winreg, msvcrt, winsound, fcntl, termios) импортируются внутри try/except ImportError."
        ],
        "code": "",
        "table": null
      }
    ]
  },
  {
    "id": "wiki-cat-14",
    "number": "14",
    "title": "Отличия от Android",
    "anchor": "отличия-от-android",
    "items": [
      {
        "id": "wiki-14-01",
        "question": "Отличия от Android",
        "category": "Отличия от Android",
        "answer": "",
        "bullets": [
          "Нет Java и Chaquopy: модули java, android, org.telegram эмулируются.",
          "Нет Xposed: срабатывают только перехваты из раздела «Хуки методов» и методы эмулированных классов.",
          "Нет View Android: собственные экраны и Custom в настройках отображаются в упрощённом виде.",
          "Плагин не может запускать программы и загружать нативные библиотеки.",
          "Плагин не может скачивать и загружать код во время работы: такие плагины не проходят проверку PluginGuard.",
          "Файлы вне своей папки доступны только по разрешению пользователя."
        ],
        "code": "",
        "table": null
      }
    ]
  }
];

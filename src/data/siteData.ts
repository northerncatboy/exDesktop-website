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
  pythonSdk: 'https://exdesktop.xyz/docs/',
  pullRequest26: 'https://github.com/metawka/exDesktop/pull/26',
  issues: 'https://github.com/metawka/exDesktop/issues'
};

export const INSTALL_COMMAND = 'curl -fsSL \\\n  https://raw.githubusercontent.com/metawka/exDesktop/main/install.sh | sh';
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
    description: 'Расширяй возможности клиента. Совместимость форматов дорабатывается.',
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
    id: 'category-start',
    number: '01',
    title: 'Начало работы',
    anchor: 'start',
    items: [
      {
        id: 'faq-what-is',
        question: 'Что такое exDesktop?',
        answer: 'Модифицированный кросс-платформенный клиент для Windows, Linux и macOS на основе исходного кода Telegram. Material Design Expressive, глубокая кастомизация, функции приватности, настройки визуала, режим стримера, функционал exteraGram, AyuGram и других клиентов сообщества, адаптированный под Desktop.',
        category: 'Начало работы'
      },
      {
        id: 'faq-is-official',
        question: 'Это официальный клиент Telegram?',
        answer: 'Нет. exDesktop — независимый проект сообщества, не связанный с Telegram FZ-LLC.',
        category: 'Начало работы'
      },
      {
        id: 'faq-differences',
        question: 'Какие ключевые отличия от стандартного Telegram Desktop?',
        answer: 'Клиент включает интерфейс Material Design Expressive, плавную прокрутку (Smooth Scrolling), кастомные иконки интерфейса, локальный функционал Telegram Premium, встроенный QuoteReply, перевод сообщений с сохранением форматирования, вычисления в поле ввода и счётчик символов.',
        category: 'Начало работы',
        source: 'README'
      },
      {
        id: 'faq-safety',
        question: 'Безопасно ли использовать exDesktop?',
        answer: 'Исходный код exDesktop полностью открыт на GitHub под лицензией GPL-3.0. В клиенте отсутствуют скрытая телеметрия и сторонние серверы, а сборка производится из открытых исходников на базе Telegram Desktop.',
        category: 'Начало работы',
        source: 'README'
      }
    ]
  },
  {
    id: 'category-installation',
    number: '02',
    title: 'Установка и обновления',
    anchor: 'installation',
    items: [
      {
        id: 'faq-supported-os',
        question: 'Какие системы поддерживаются?',
        answer: 'Windows, Linux и macOS. Для Windows доступны установщик и portable-архив, для Linux — tar.gz, для macOS на Apple Silicon — dmg или zip.',
        category: 'Установка и обновления'
      },
      {
        id: 'faq-install-update',
        question: 'Как установить и обновить клиент?',
        answer: 'На Linux и macOS используй команду с главной страницы. На Windows скачай установщик из GitHub Releases. В клиенте предусмотрены автоматические обновления.',
        category: 'Установка и обновления'
      },
      {
        id: 'faq-install-windows',
        question: 'Как установить на Windows?',
        answer: 'Перейди на страницу релизов GitHub и скачай установщик exDesktop-setup-x64.*.exe или портативную версию exDesktop-portable-x64.*.zip, которая не требует прав администратора.',
        category: 'Установка и обновления',
        source: 'README'
      },
      {
        id: 'faq-source-build',
        question: 'Как собрать клиент из исходного кода вручную?',
        answer: 'Сборка выполняется через CMake 3.16+ и компилятор C++20 (GCC 12 или Clang 15) с генератором Ninja и библиотеками Qt 6. Для поддержки плагинов требуются заголовки Python 3.11–3.14 (python3-dev).',
        category: 'Установка и обновления',
        source: 'README'
      }
    ]
  },
  {
    id: 'category-features',
    number: '03',
    title: 'Возможности и плагины',
    anchor: 'features',
    items: [
      {
        id: 'faq-customization',
        question: 'Что можно настроить?',
        answer: 'Оформление, иконки, сообщения, уведомления и элементы интерфейса. Есть режим стримера, функции AyuGram и дополнительные настройки приватности.',
        category: 'Возможности и плагины'
      },
      {
        id: 'faq-plugin-dev',
        question: 'Как начать разрабатывать плагины?',
        answer: 'Начни с документации PythonSDK на exdesktop.xyz/docs. Поддержка форматов .plugin, .elyx и .eaf ещё дорабатывается — учитывай ограничения совместимости.',
        category: 'Возможности и плагины'
      },
      {
        id: 'faq-plugin-formats',
        question: 'Какие форматы плагинов поддерживает SDK?',
        answer: 'SDK поддерживает плагины форматов .plugin (классический формат), .elyx и .eaf. Поддерживается среда Python extera, хуки методов Xposed (XposedHelpers), перехват действий клиента, эмуляция Java и Android-виджетов.',
        category: 'Возможности и плагины',
        source: 'Docs'
      },
      {
        id: 'faq-plugin-guard',
        question: 'Что такое PluginGuard и как защищены пользователи?',
        answer: 'PluginGuard — это мощная векторная модель безопасности, которая проверяет код плагинов на подозрительные вызовы, доступ к защищённым данным и несанкционированную сетевую активность. Плагины исполняются в изолированной песочнице с гибкой настройкой прав.',
        category: 'Возможности и плагины',
        source: 'Docs'
      },
      {
        id: 'faq-privacy-details',
        question: 'Какие именно функции приватности включены?',
        answer: 'Интегрирован функционал AyuGram: режим призрака (неотправка статуса прочтения сообщений и онлайн-статуса), сохранение удалённых сообщений и истории правок, скрытие номера телефона в профиле, отображение реальных ID и даты регистрации аккаунтов, а также скрытых участников в группах.',
        category: 'Возможности и плагины',
        source: 'README'
      }
    ]
  },
  {
    id: 'category-community',
    number: '04',
    title: 'Сообщество и развитие',
    anchor: 'community',
    items: [
      {
        id: 'faq-track-updates',
        question: 'Где следить за изменениями?',
        answer: 'Новости — в Telegram-канале @exDesktop, список изменений — в Changelog @exDesktopChangelog. Исходный код и опубликованные версии доступны на GitHub.',
        category: 'Сообщество и развитие'
      },
      {
        id: 'faq-feedback-bugs',
        question: 'Как сообщить об ошибке или предложить идею?',
        answer: 'Создай GitHub Issue: укажи версию клиента, систему и шаги воспроизведения. Задать вопрос и обсудить идею можно в Telegram Chat @exDesktopChat.',
        category: 'Сообщество и развитие'
      },
      {
        id: 'faq-sdk-docs',
        question: 'Где найти документацию по созданию плагинов?',
        answer: 'Полная официальная документация по SDK плагинов, эмуляции окружения и примерам создания хуков доступна по адресу https://exdesktop.xyz/docs/.',
        category: 'Сообщество и развитие',
        source: 'Docs'
      },
      {
        id: 'faq-contribute',
        question: 'Как поддержать проект exDesktop?',
        answer: 'Ты можешь поддержать проект звёздочкой на GitHub (github.com/metawka/exDesktop), тестированием сборок, созданием плагинов и активным участием в обсуждениях в Telegram Chat @exDesktopChat.',
        category: 'Сообщество и развитие',
        source: 'README'
      }
    ]
  }
];

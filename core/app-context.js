(function () {
  "use strict";
  window.createTravelAppContext = function () {
  const LEARNING_KEY = "yujianWorld.learning.v2";
  const LEGACY_LEARNING_KEY = "yujianWorld.learning.v1";
  const LANG_KEY = "yujianWorld.lang.v1";
  const DESTINATION_KEY = "yujianWorld.destination.v1";
  const MIGRATION_KEY = "yujianWorld.migrated.v2";
  const INSTALL_HINT_KEY = "yujianWorld.installHintDismissed.v1";
  const FAVORITE_GUIDE_KEY = "yujianWorld.favoriteGuideSeen.v1";
  const BEGINNER_KEY = "yujianWorld.beginner.v1";
  const LEARNING_BATCH_SIZE = 5;
  const REVIEW_BATCH_SIZE = 10;
  const FAVORITE_SEARCH_LIMIT = 50;
  const MAIN_TABS = new Set(["home", "review", "tools", "me"]);
  const DESTINATION_OPTIONS = window.TRAVEL_DESTINATIONS.all;
  const DEFAULT_HERO_IMAGE = window.TRAVEL_DESTINATIONS.defaultHero;
  const SCENE_ICON_PATHS = Object.freeze({
    airport: "icons/scenes/airport.png",
    transport: "icons/scenes/transport.png",
    hotel: "icons/scenes/hotel.png",
    food: "icons/scenes/food.png",
    shopping: "icons/scenes/shopping.png",
    directions: "icons/scenes/directions.png",
    basics: "icons/scenes/basics.png",
    emergency: "icons/scenes/emergency.png"
  });
  const UI_ICON_PATHS = Object.freeze({
    review: "icons/ui/review.png",
    complete: "icons/ui/complete.png",
    exchange: "icons/ui/exchange.png",
    checklist: "icons/ui/checklist.png",
    trip: "icons/ui/trip-map.png",
    favorite: "icons/ui/favorite.png",
    emergencyCard: "icons/ui/emergency-card.png",
    translate: "icons/ui/translate.png",
    privacy: "icons/ui/privacy.png",
    install: "icons/ui/install.png",
    deleteData: "icons/ui/delete-data.png",
    warning: "icons/ui/warning.png"
  });
  const SPEAKER_SVG = window.TRAVEL_ICONS.render("speaker");
  const FAVORITE_SVG = window.TRAVEL_ICONS.render("favorite");
  const CLOUD_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 18.5h9.2a4.3 4.3 0 0 0 .6-8.56A5.8 5.8 0 0 0 6.2 8.7a4.9 4.9 0 0 0 1.3 9.8Z" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 11.5v5m-2-2 2 2 2-2" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const view = document.getElementById("view");
  const bottomNav = document.getElementById("bottomNav");
  const toastEl = document.getElementById("toast");
  const state = {
    lang: null,
    destinationId: null,
    destinationOpen: false,
    tab: "home",
    learning: null,
    quiz: null,
    answered: false,
    selectedId: null,
    questionToken: 0,
    speechToken: 0,
    emergencyCard: null,
    translateDraft: "",
    beginnerSession: null,
    favoriteQuery: "",
    lookup: { query: "", sceneId: "", limit: 50 },
    showReturn: null
  };

  const runtime = { toastTimer: null, dismissFavoriteGuide: null, deferredInstallPrompt: null, pendingDestinationFocus: false, levelSurveyOpen: false, routeRequest: 0, destinationRequest: 0 };
  return { LEARNING_KEY, LEGACY_LEARNING_KEY, LANG_KEY, DESTINATION_KEY, MIGRATION_KEY, INSTALL_HINT_KEY, FAVORITE_GUIDE_KEY, BEGINNER_KEY, LEARNING_BATCH_SIZE, REVIEW_BATCH_SIZE, FAVORITE_SEARCH_LIMIT, MAIN_TABS, DESTINATION_OPTIONS, DEFAULT_HERO_IMAGE, SCENE_ICON_PATHS, UI_ICON_PATHS, SPEAKER_SVG, FAVORITE_SVG, CLOUD_SVG, view, bottomNav, toastEl, state, runtime };
  };
})();

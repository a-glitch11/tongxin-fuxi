/*
 * 职责：应用装配与极简显隐路由，调用 window.CP.ui 渲染当前视图。
 * 状态读写：启动时调用 state.load；具体状态读写由 ui.js 通过 state API 完成。
 */
(function (window, document) {
  var CP = window.CP = window.CP || {};
  var views = ["home", "practice", "result", "mistake", "review"];

  function byId(id) {
    return document.getElementById(id);
  }

  function getRoute() {
    var hash = window.location.hash.replace(/^#\/?/, "");
    return views.indexOf(hash) >= 0 ? hash : "home";
  }

  function routeTo(view) {
    window.location.hash = view;
  }

  function renderRoute() {
    var active = getRoute();
    views.forEach(function (view) {
      var panel = byId("view-" + view);
      if (panel) {
        panel.hidden = view !== active;
      }
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-view-link]"), function (button) {
      var isActive = button.getAttribute("data-view-link") === active;
      if (isActive) {
        button.setAttribute("aria-current", "page");
      } else {
        button.removeAttribute("aria-current");
      }
    });
    if (CP.ui && typeof CP.ui.renderView === "function") {
      CP.ui.renderView(active);
    }
  }

  function bindRoutes() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-view-link], [data-route]"), function (button) {
      button.addEventListener("click", function () {
        routeTo(button.getAttribute("data-view-link") || button.getAttribute("data-route"));
      });
    });
    window.addEventListener("hashchange", renderRoute);
  }

  function init() {
    CP.state.load();
    CP.ui.init({ routeTo: routeTo });
    bindRoutes();
    if (!window.location.hash) {
      window.location.hash = "home";
    }
    renderRoute();
  }

  document.addEventListener("DOMContentLoaded", init);
})(window, document);

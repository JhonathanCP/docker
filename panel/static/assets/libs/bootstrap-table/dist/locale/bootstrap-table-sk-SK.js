/**
 * Bootstrap Table Slovak translation
 * Author: Jozef Dúc<jozef.d13@gmail.com>
 */
(function ($) {
  "use strict";

  $.fn.bootstrapTable.locales["sk-SK"] = {
    formatLoadingMessage: function () {
      return "Prosím čakajte ...";
    },
    formatRecordsPerPage: function (pageNumber) {
      return pageNumber + " záznamov na stranu";
    },
    formatShowingRows: function (pageFrom, pageTo, totalRows) {
      return (
        "Zobrazená " +
        pageFrom +
        ". - " +
        pageTo +
        ". položka z celkových " +
        totalRows
      );
    },
    formatSearch: function () {
      return "Vyhľadávanie";
    },
    formatNoMatches: function () {
      return "Nenájdená žiadna vyhovujúca položka";
    },
    formatPaginationSwitch: function () {
      return "Skry/Zobraz stránkovanie";
    },
    formatRefresh: function () {
      return "Obnoviť";
    },
    formatToggle: function () {
      return "Prepni";
    },
    formatColumns: function () {
      return "Stĺpce";
    },
    formatAllRows: function () {
      return "Všetky";
    },
    formatExport: function () {
      return "Exportuj dáta";
    },
    formatClearFilters: function () {
      return "Odstráň filtre";
    },
  };

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales["sk-SK"]);
})(jQuery);

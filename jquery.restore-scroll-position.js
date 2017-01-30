/**
 * フォームsubmit時のスクロール位置を復元
 * 
 * Usage: <script src="[本ファイル名]"></script>
 *        上記を読み込むだけでsubmit時のスクロール位置を復元する
 * Dependency: [jquery, jqyery.cookie.js]
 */
$(function() {
  'use strict';

  var prefix = window.location.href;
  var isSubmitting;
  var win = $(window);
  $('form').on('submit', function() {
    isSubmitting = true;
    $.cookie(prefix + '_top', win.scrollTop());
    $.cookie(prefix + '_height', $('body').height());
  });
  win.on('unload', function() {
    if (!isSubmitting) {
      $.removeCookie(prefix + '_top');
      $.removeCookie(prefix + '_height');
      isSubmitting = false;
    }
  });
  setTimeout(function() {
    var top = parseInt($.cookie(prefix + '_top')); 
    // submit前の差分の高さ
    var diffHeight = $('body').height() - parseInt($.cookie(prefix + '_height'));
    if (top > 0) {
      win.scrollTop(top + diffHeight);
    }
    isSubmitting = false;
  }, 0);
});

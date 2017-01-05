// Scrape relevant book details from a listing of books on Amazon.
//
//    To be run in the console shell.
//    It depends on having access to jQuery.
//
// History: It was first put together to collect the “Best Books of 2016” list.
//
var books = $('.s-result-list-parent-container .s-result-item .a-col-right');

books.each(function() {
  var bookInfo = $(this).find('.a-spacing-small');
  var bookDetails = bookInfo.find('.s-access-detail-page');

  var title = bookDetails.text();
  var url = bookDetails.attr('href').split('/ref=')[0];
  var byLine = bookInfo.find('.a-spacing-none').last().text();

  console.log('[' + title + '](' + url + ') _' + byLine + '_');
});

function onEnter(element) {
  if ((element.value !== undefined && element.value.length >= 0) || $(this).attr('placeholder') !== null) {
    element.parentNode.querySelector("input").classList.add("active");
  }
}

function onExit(element) {
  if ((element.value !== undefined && element.value.length == 0) || $(this).attr('placeholder') === null) {
    element.parentNode.querySelector("input").classList.remove("active");
  }
}

$(function() {
  function tableToArray(tObj) {
    var result = [];
    var keys = [];
    $("thead th", tObj).each(function(i, el) {
      keys.push($(el).text().trim());
    });
    $("tbody tr").each(function(i, row) {
      var temp = {};
      $.each(keys, function(j, k) {
        temp[k] = $("td", row).eq(j).text().trim();
      });
      result.push(temp);
    });
    return result;
  }

  function replaceTableData(tObj, data) {
    var b = $("tbody", tObj);
    b.html("");
    $.each(data, function(i, row) {
      var r = $("<tr>").appendTo(b);
      $.each(row, function(j, cell) {
        $("<td>").html(cell).appendTo(r);
      });
    });
  }

  function compare(a, b) {
    var dateA = a.Date;
    var dateB = b.Date;
    var result = 0;
    if (dateA > dateB) {
      result = 1;
    } else {
      result = -1;
    }
    return result;
  }

  function sortTable() {
    var tData = tableToArray($("table"));
    tData.sort(compare);
    replaceTableData($("table"), tData);
  }

  $(".sort-column").click(sortTable);

});


$(document).ready( function() {
  
  $(window).scroll(function() {
    
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)).toFixed(2);
		
    // opacity value 0% to 100%
    $('.clear-img').css('opacity', scrollPercent);
    
  });
  
});

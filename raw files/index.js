function appendScript(src, callback) {
      var head = document.getElementsByTagName('head')[0];
    
      if (src.endsWith(".js")) {
        var elt = document.createElement("script");
        elt.type = "text/javascript";
        elt.src = src;
      } else {
        var elt = document.createElement("link");
        elt.rel = "stylesheet";
        elt.link = src;
      }

      elt.onload = function() {
        callback();
      }

      head.appendChild(elt);
    }
 
 //////////////// change color & add data ////////////////
    function runTest() {
      $('#multiple-colors').highlightTextarea({
          words: [{
          /// to remove ///
            color: '#ffb2b2',
            words: ['chinese','malay','indian','cute','pretty','asian','sexy','sweet','horny','women','men',
            'years old','y.o.','y.o','touch','touching','sex','american','female','male','girl','male']
          /// to remove ///
          }, {
          /// to recommend better hr phrases ///
            color: '#FFC300',
            words: ['young','youthful','NUS','NTU','SMU','SUTD','extrovert','introvert','voice','Office supplies management','Daily data entry','Strong attention','Pleasant personality']
          /// to recommend better hr phrases ///
          }],
          debug: true
      });
    }
 //////////////// change color & add data ////////////////
    
    function test() {
      var jqv = "jquery-1.11.1.min.js";

      try {
        jqv = window.location.search.split('?')[1].split('=')[1];
      } catch (e) {}

      appendScript("http://code.jquery.com/" + jqv,
        function() {
          $('#jqv').val(jqv);

          appendScript("http://code.jquery.com/ui/1.10.4/jquery-ui.min.js",
          function() {
            appendScript("jquery.highlighttextarea.js",
            runTest
          )})});
    }

  function setJQuery(newVersion) {
    var jqv = $('#jqv').val();

    window.location = 'index.html?jqv=' + jqv;
  }
 
window.onload = test;

/// function for tooltip ///
    function getSelectedText() {
      var text = "";
      if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
      } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
      }
      return text;
    }

    function doSomethingWithSelectedText() {
      var selectedText = getSelectedText();
      if (selectedText) {

        $('#infoDiv').css('display', 'block');
        $('#infoDiv').css('position', 'absolute');
        $('#infoDiv').css('left', event.clientX + 10);
        $('#infoDiv').css('top', event.clientY + 15);
      } else {
        $('#infoDiv').css('display', 'none');
      };
    };

    document.onmouseup = doSomethingWithSelectedText;
    document.onkeyup = doSomethingWithSelectedText;
/// function for tooltip ///

/// jquery logic ///

$('#multiple-colors').on('click', function(){
    
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    
    alert(text);       
});

//

/*

*/



$( document ).ready(function() {

//////// returns the job description when the data when the show me is clicked ////////
$( "#showSelected" ).click(function() {
  if ($('#multiple-colors').val() != ""){
  $('#display-output').replaceWith(
   "<div id='display-output'>" +
   "<h3 class='maincontent-inner'><span class='maincontent-text'>Result:</span></h3>" +
   "<p class='margin-top'>DUTIES & RESPONSIBILITIES:</p>" +
   "<p>* <span class='color-2'>Supports the team/department in daily administrative tasks</span>,</p>" +
   "<p>i.e. <span class='color-2'>data entry, documentation and etc</span></p>" +
   "<p>* Performs ad-hoc duties as assigned</p>" +
   "<p>REQUIREMENTS:</p>" +
   "<p>* At least 1 year of experience in a similar capacity</p>" +
   "<p>* Proficient with Microsoft Word and Excel</p>" +
   "<p class='margin-bottom'>* <span class='color-2'>Team player</span> with a <span class='color-2'>keen eye</span> for details</p>" +
   "</div>"
   );
  }
  else {
  return undefined;  
  }
});
//////// returns the job description when the data when the show me is clicked ////////

//////// clear text ////////
$( '#clearText' ).click(function() {
$('#display-output').empty();
$('#multiple-colors').val('');
});
//////// clear text ////////

//////// add sample text ////////
$( '#sampleText' ).click(function() {

$('#multiple-colors').val(
'DUTIES & RESPONSIBILITIES:\n\n' +
'* Office supplies management\n' +
'* Daily data entry\n' + 
'* Performs ad-hoc duties as assigned\n' +
'\nREQUIREMENTS:\n\n' +
'* At least 1 year of experience in a similar capacity\n' +
'* Proficient with Microsoft Word and Excel\n' +
'* Strong attention to details\n' +
'* Pleasant personality\n\n' +
'### press spacebar or any button at textarea to see result ###'
);

runTest()

});
//////// add sample text ////////


});




/// jquery logic ///

'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('resumePdf', [function() {
    return function() {
      PDFJS.disableWorker = true;
      PDFJS.getDocument('external/Jack_Forbes_Resume.pdf').then(function(pdf) {
        var scale = 1;

        pdf.getPage(1).then(function(page) {
          var viewport = page.getViewport(scale);
          var canvas = document.getElementById('resume-page-one');
          var context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          var renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          page.render(renderContext);
          canvas.style.boxShadow = "rgb(0,0,0) 0px 0px 10px 1px";
        });

        pdf.getPage(2).then(function(page) {
          var viewport = page.getViewport(scale);
          var canvas = document.getElementById('resume-page-two');
          var context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          var renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          page.render(renderContext);
          canvas.style.boxShadow = "rgb(0,0,0) 0px 0px 10px 1px";
        });
      });
    };
  }])
  .directive('skrollr', [ 'skrollrService',
    function(skrollrService){
      return {
        link: function(){
          skrollrService.skrollr().then(function(skrollr){
            skrollr.refresh();
          });
        }
      };
    }
  ]);


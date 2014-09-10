'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('resumePdf', [function() {
    return {
      link: function() {
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

            document.querySelector('.bounce').style.display = 'none';
          });
        });
      }
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
  ])
  .directive('d3Skill', [function() {
      return {
        link: function(scope, element, attrs) {
          var label = attrs.skillLabel;
          var value = attrs.skillValue;
          var skill=d3.select(element[0]);

          if (value > 80) {
            skill.attr('class', 'skill-high');
          } else if (value <= 80 && value >70) {
            skill.attr('class', 'skill-medium')
          } else {
            skill.attr('class', 'skill-low')
          }

          var rp1 = radialProgress(element[0])
            .label(label)
            .diameter(150)
            .value(value)
            .render();
        }
      };
  }]);

'use strict';

/**
 * PDF Template
 */
function PDF() {
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

          document.querySelector('.bounce').style.display = 'none';
        });
      });
    }
  };
}

export default PDF;

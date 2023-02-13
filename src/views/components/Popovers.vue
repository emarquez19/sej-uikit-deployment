<template>
  <div class="mb-3 container-fluid components-fluid-area">
    <div class="row">
      <div class="col-12">
        <div class="documentation-block">
          <h5 class="text-white titlesub"><i class="lab la-bootstrap"></i> Popovers</h5>
          <h6 class="mt-3 titlesub">¿Cómo funcionan?</h6>
          <p class="p-3 mb-0 pb-2 text-sm">
           Four options are available: top, right, bottom, and left. Directions are mirrored when using Bootstrap in RTL. Set data-bs-placement to change the direction.<br><br>

            <b>Things to know when using the popover plugin:</b><br><br>
            Zero-length title and content values will never show a popover.<br><br>
            Specify container: 'body' to avoid rendering problems in more complex components (like our input groups, button groups, etc).<br><br>
            Triggering popovers on hidden elements will not work.<br><br>
            Popovers for .disabled or disabled elements must be triggered on a wrapper element.<br><br>
            When triggered from anchors that wrap across multiple lines, popovers will be centered between the anchors’ overall width. Use .text-nowrap on your <code>a</code>s to avoid this behavior.<br><br>
            Popovers must be hidden before their corresponding elements have been removed from the DOM.<br><br>
            Popovers can be triggered thanks to an element inside a shadow DOM.
          </p>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-12 mb-2">
        <h6 class="mt-3"><i class="las la-bolt"></i> Ejemplo en vivo</h6>
      </div>
      <div class="col-12">

        <div class="documentation-block">
            <button type="button" class="btn btn-primary me-2 mb-2" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
            Popover Superior
            </button>
            <button type="button" class="btn btn-primary me-2 mb-2" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
            Popover Derecha
            </button>
            <button type="button" class="btn btn-primary me-2 mb-2" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
            Popover Inferior
            </button>
            <button type="button" class="btn btn-primary me-2 mb-2" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
            Popover Izquierda
            </button>
        </div>

        <div class="documentation-block">
            <button type="button" class="btn btn-secondary"
                    data-bs-toggle="popover" data-bs-placement="right"
                    data-bs-custom-class="custom-popover"
                    data-bs-title="Custom popover"
                    data-bs-content="This popover is themed via CSS variables.">
                Custom popover
            </button>
        </div>

      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="code-viewer-toolbar">
          <h6 class="text-md">Código de muestra</h6>
          <button @click="copyToClipboard(1)" class="copy-to-clip"><i class="las la-clipboard"></i></button>
        </div>
        <pre class="code-viewer">
          <code id="textToBecopied1">
            {{codeSample1}}
          </code>
        </pre>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-12">
        <div class="documentation-block">
          <h6 class="mt-3 titlesub">Cerrar con click</h6>
          <p class="p-3 text-sm">
           Use the focus trigger to dismiss popovers on the user’s next click of a different element than the toggle element.<br><br>
           For proper cross-browser and cross-platform behavior, you must use the <code>a</code> tag, not the <code>button</code> tag, and you also must include a tabindex attribute.
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mb-2">
        <h6 class="mt-3"><i class="las la-bolt"></i> Ejemplo en vivo</h6>
      </div>
      <div class="col-12">
        <div class="documentation-block">

            <a tabindex="0" class="btn btn-primary" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">Popover que cierra al click exterior</a>

        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="code-viewer-toolbar">
          <h6 class="text-md">Código de muestra</h6>
          <button @click="copyToClipboard(2)" class="copy-to-clip"><i class="las la-clipboard"></i></button>
        </div>
        <pre class="code-viewer">
          <code id="textToBecopied2">
            {{codeSample2}}
          </code>
        </pre>
      </div>
    </div>


  </div>
</template>
<script setup></script>
<script>
// import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js';
// import { bootstrap } from 'bootstrap/dist/js/bootstrap.esm.min.js';
// import "bootstrap";
import { Popover } from 'bootstrap';

export default {
  name: "PopoversHtmlComponent",
  components: {
  },
  data() {
     return {
    codeSample1: 
      `
<button type="button" class="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
    Popover Superior
</button>
<button type="button" class="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
    Popover Derecha
</button>
<button type="button" class="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
    Popover Inferior
</button>
<button type="button" class="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
    Popover Izquierda
</button>

<!--Custom Popover-->
<button type="button" class="btn btn-secondary"
        data-bs-toggle="popover" data-bs-placement="right"
        data-bs-custom-class="custom-popover"
        data-bs-title="Custom popover"
        data-bs-content="This popover is themed via CSS variables.">
    Custom popover
</button>
      `,
    codeSample2: 
      `
<a tabindex="0" class="btn btn-primary" 
role="button" 
data-bs-toggle="popover" 
data-bs-trigger="focus" 
data-bs-title="Dismissible popover" 
data-bs-content="And here's some amazing content. It's very engaging. Right?"
>
    Popover que cierra al click exterior
</a>
      `,
    };
  },
    methods : {
    copyToClipboard(number) {
      let idOfText = "textToBecopied"+number;
      const copyText = document.getElementById(idOfText).textContent;
      const textArea = document.createElement('textarea');
      textArea.className = "contextual-component";
      textArea.textContent = copyText;
      document.body.append(textArea);
      textArea.select();
      document.execCommand('copy');
      alert("Copiado!");
    }
  },
  mounted() {
    //inti Popover
    // Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]')).forEach(popoverNode => new Popover(popoverNode));
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Popover(popoverTriggerEl));

  },
};
</script>

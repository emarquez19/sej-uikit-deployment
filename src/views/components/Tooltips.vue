<template>
  <div class="mb-3 container-fluid components-fluid-area">
    <div class="row">
      <div class="col-12">
        <div class="documentation-block">
          <h5 class="text-white titlesub"><i class="lab la-bootstrap"></i> Tooltips</h5>
          <h6 class="mt-3 titlesub">¿Cómo funcionan?</h6>
          <p class="p-3 mb-0 pb-2 text-sm">
           <!-- Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.<br><br> -->

           <b>Things to know when using the tooltip plugin:</b><br><br>

            Tooltips are opt-in for performance reasons, so you must initialize them yourself.<br>
            Tooltips with zero-length titles are never displayed.<br>
            Specify container: 'body' to avoid rendering problems in more complex components (like our input groups, button groups, etc).<br>
            Triggering tooltips on hidden elements will not work.<br>
            Tooltips for .disabled or disabled elements must be triggered on a wrapper element.<br>
            When triggered from hyperlinks that span multiple lines, tooltips will be centered. Use white-space: nowrap; on your <code>a</code> to avoid this behavior.<br>
            Tooltips must be hidden before their corresponding elements have been removed from the DOM.<br>
            Tooltips can be triggered thanks to an element inside a shadow DOM.
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

            <p class="text-sm">Placeholder text to demonstrate some <a href="#" class="text-primary bold" data-bs-toggle="tooltip" data-bs-title="Default tooltip">inline links</a> with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of <a href="#" class="text-primary bold" data-bs-toggle="tooltip" data-bs-title="Another tooltip">real text</a>. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how <a href="#" class="text-primary bold" data-bs-toggle="tooltip" data-bs-title="Another one here too">these tooltips on links</a> can work in practice, once you use them on <a href="#" class="text-primary bold" data-bs-toggle="tooltip" data-bs-title="The last tip!">your own</a> site or project.
            </p>

            <button type="button" class="btn btn-primary me-2 mb-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
                Tooltip superior
            </button>
            <button type="button" class="btn btn-secondary me-2 mb-2" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">
                Tooltip derecha
            </button>
            <button type="button" class="btn btn-primary me-2 mb-2" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
                Tooltip inferior
            </button>
            <button type="button" class="btn btn-secondary me-2 mb-2" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">
                Tooltip izquierda
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

  </div>
</template>
<script setup></script>
<script>
import { Tooltip } from 'bootstrap';
export default {
  name: "TooltipsHtmlComponent",
  components: {
  },
  data() {
     return {
    codeSample1: 
      `
<p class="text-sm">Placeholder text to demonstrate some <a href="#" class="text-primary bold" data-bs-toggle="tooltip" data-bs-title="Default tooltip">inline links</a> with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of <a href="#" class="text-primary bold" data-bs-toggle="tooltip" data-bs-title="Another tooltip">real text</a>. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how <a href="#" class="text-primary bold" data-bs-toggle="tooltip" data-bs-title="Another one here too">these tooltips on links</a> can work in practice, once you use them on <a href="#" class="text-primary bold" data-bs-toggle="tooltip" data-bs-title="The last tip!">your own</a> site or project.</p>

<button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
    Tooltip superior
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">
    Tooltip derecha
</button>
<button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
    Tooltip inferior
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">
    Tooltip izquierda
</button>
      `,
    codeSample2: 
      `
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
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
  },
};
</script>

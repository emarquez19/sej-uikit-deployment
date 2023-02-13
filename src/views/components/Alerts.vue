<template>
  <div class="mb-3 container-fluid components-fluid-area">
    <div class="row">
      <div class="col-12">
        <div class="documentation-block">
          <h5 class="text-white titlesub"><i class="lab la-bootstrap"></i> Alertas</h5>
          <h6 class="mt-3 titlesub">¿Cómo funcionan?</h6>
          <p class="p-3 mb-0 pb-2 text-sm">Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the eight required contextual classes (e.g., .alert-success).</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mb-2">
        <h6 class="mt-3"><i class="las la-bolt"></i> Ejemplo en vivo</h6>
      </div>
      <div class="col-12">
        <div class="documentation-block">
            <div class="alert alert-primary text-white" role="alert">
                <i class="fa fa-thumbs-up"></i> A simple primary alert—check it out!
            </div>
            <div class="alert alert-secondary text-dark" role="alert">
                A simple secondary alert—check it out!
            </div>
            <div class="alert alert-success text-dark" role="alert">
                <i class="fa fa-home"></i> A simple success alert—check it out!
            </div>
            <div class="alert alert-danger text-white" role="alert">
                A simple danger alert—check it out!
            </div>
            <div class="alert alert-warning text-dark" role="alert">
                A simple warning alert—check it out!
            </div>
            <div class="alert alert-info text-white" role="alert">
                A simple info alert—check it out!
            </div>
            <div class="alert alert-light text-dark" role="alert">
                A simple primary alert with <a href="#" class="alert-link text-primary">an example link</a>. Give it a click if you like.
            </div>
            <div class="alert alert-dark text-white" role="alert">
                A simple dark alert—check it out!
            </div>
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
export default {
  name: "AlertHtmlComponent",
  components: {
  },
  data() {
     return {
    codeSample1: 
      `
<div class="alert alert-primary text-white" role="alert">
    <i class="fa fa-thumbs-up"></i> A simple primary alert—check it out!
</div>
<div class="alert alert-secondary text-dark" role="alert">
    A simple secondary alert—check it out!
</div>
<div class="alert alert-success text-dark" role="alert">
    <i class="fa fa-home"></i> A simple success alert—check it out!
</div>
<div class="alert alert-danger text-white" role="alert">
    A simple danger alert—check it out!
</div>
<div class="alert alert-warning text-dark" role="alert">
    A simple warning alert—check it out!
</div>
<div class="alert alert-info text-white" role="alert">
    A simple info alert—check it out!
</div>
<div class="alert alert-light text-dark" role="alert">
    A simple primary alert with <a href="#" class="alert-link text-primary">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-dark text-white" role="alert">
    A simple dark alert—check it out!
</div>
      `,
    // codeSample2: 
    //   `

    //   `,
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
    },
  }
};
</script>

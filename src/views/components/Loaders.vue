<template>
  <div class="mb-3 container-fluid components-fluid-area">
    <div class="row">
      <div class="col-12">
        <div class="documentation-block">
          <h5 class="text-white titlesub"><i class="lab la-bootstrap"></i> Loaders</h5>
          <h6 class="mt-3 titlesub">¿Cómo funcionan?</h6>
          <p class="p-3 mb-0 pb-2 text-sm">
           Bootstrap “spinners” can be used to show the loading state in your projects. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.
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

            <p class="mb-4">Diferentes Colores</p>
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>

            <p class="mb-4">Diferente Forma</p>
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>

            <p class="mb-4">Diferentes posiciones</p>
            <div class="d-flex justify-content-start">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>


            <p class="mb-4">Diferentes tamaños y botones</p>
            <div class="spinner-border spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow spinner-grow-sm" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>

            <button class="btn btn-primary me-2 ms-4 mb-2" type="button">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span class="visually-hidden">&nbsp;Loading...</span>
            </button>
            <button class="btn btn-primary me-2 mb-2" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                &nbsp;Loading...
            </button>

            <button class="btn btn-primary me-2 mb-2" type="button" disabled>
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                <span class="visually-hidden">&nbsp;Loading...</span>
            </button>
            <button class="btn btn-primary me-2 mb-2" type="button">
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                &nbsp;Loading...
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
export default {
  name: "LoadersHtmlComponent",
  components: {
  },
  data() {
     return {
    codeSample1: 
      `
<p class="mb-4">Diferentes Colores</p>
<div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<p class="mb-4">Diferente Forma</p>
<div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<p class="mb-4">Diferentes posiciones</p>
<div class="d-flex justify-content-start">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>
<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>
<div class="d-flex justify-content-end">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>


<p class="mb-4">Diferentes tamaños</p>
<div class="spinner-border spinner-border-sm" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<p class="mb-4">En botones</p>
<button class="btn btn-primary me-2 mb-2" type="button">
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <span class="visually-hidden">&nbsp;Loading...</span>
</button>
<button class="btn btn-primary me-2 mb-2" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    &nbsp;Loading...
</button>

<button class="btn btn-primary me-2 mb-2" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    <span class="visually-hidden">&nbsp;Loading...</span>
</button>
<button class="btn btn-primary me-2 mb-2" type="button">
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    &nbsp;Loading...
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
  },
};
</script>

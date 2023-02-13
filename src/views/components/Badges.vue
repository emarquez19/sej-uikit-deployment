<template>
  <div class="mb-3 container-fluid components-fluid-area">
    <div class="row">
      <div class="col-12">
        <div class="documentation-block">
          <h5 class="text-white titlesub"><i class="lab la-bootstrap"></i> Badges</h5>
          <h6 class="mt-3 titlesub">¿Cómo funcionan?</h6>
          <p class="p-3 mb-0 pb-2 text-sm">Badges can be used as part of links or buttons to provide a counter.<br><br>
          Use utilities to modify a .badge and position it in the corner of a link or button. You can also replace the .badge class with a few more utilities without a count for a more generic indicator.<br><br>
          Set a background-color with contrasting foreground color with our .text-bg-{color} helpers. Previously it was required to manually pair your choice of .text-{color} and .bg-{color} utilities for styling, which you still may use if you prefer.<br><br>
          Use the .rounded-pill utility class to make badges more rounded with a larger border-radius.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mb-2">
        <h6 class="mt-3"><i class="las la-bolt"></i> Ejemplo en vivo</h6>
      </div>
      <div class="col-12">
        <div class="documentation-block">
            <div>
                <button type="button" class="btn btn-primary">
                    Notificaciones <span class="badge text-bg-light ms-2">4</span>
                </button>
            </div>
            <div>
                <button type="button" class="btn btn-light position-relative">
                    Mensajes
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        +99
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </button>
            </div>
            <div>
                <button type="button" class="btn btn-success position-relative">
                    Correos
                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                        <span class="visually-hidden">New alerts</span>
                    </span>
                </button>
            </div>
            <div>
                <span class="badge text-bg-primary me-2 mb-2">Primary</span>
                <span class="badge text-bg-secondary me-2 mb-2">Secondary</span>
                <span class="badge text-bg-success me-2 mb-2">Success</span>
                <span class="badge text-bg-danger me-2 mb-2">Danger</span>
                <span class="badge text-bg-warning me-2 mb-2">Warning</span>
                <span class="badge text-bg-info me-2 mb-2">Info</span>
                <span class="badge text-bg-light me-2 mb-2">Light</span>
                <span class="badge text-bg-dark me-2 mb-2">Dark</span>
            </div>
            <div>
                <span class="badge rounded-pill text-bg-primary me-2 mb-2">Primary</span>
                <span class="badge rounded-pill text-bg-secondary me-2 mb-2">Secondary</span>
                <span class="badge rounded-pill text-bg-success me-2 mb-2">Success</span>
                <span class="badge rounded-pill text-bg-danger me-2 mb-2">Danger</span>
                <span class="badge rounded-pill text-bg-warning me-2 mb-2">Warning</span>
                <span class="badge rounded-pill text-bg-info me-2 mb-2">Info</span>
                <span class="badge rounded-pill text-bg-light me-2 mb-2">Light</span>
                <span class="badge rounded-pill text-bg-dark me-2 mb-2">Dark</span>
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
  name: "BadgesHtmlComponent",
  components: {
  },
  data() {
     return {
    codeSample1: 
      `
<div>
    <button type="button" class="btn btn-primary">
        Notificaciones <span class="badge text-bg-light ms-2">4</span>
    </button>
</div>
<div>
    <button type="button" class="btn btn-light position-relative">
        Mensajes
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            +99
            <span class="visually-hidden">unread messages</span>
        </span>
    </button>
</div>
<div>
    <button type="button" class="btn btn-success position-relative">
        Correos
        <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
            <span class="visually-hidden">New alerts</span>
        </span>
    </button>
</div>
<div>
    <span class="badge text-bg-primary">Primary</span>
    <span class="badge text-bg-secondary">Secondary</span>
    <span class="badge text-bg-success">Success</span>
    <span class="badge text-bg-danger">Danger</span>
    <span class="badge text-bg-warning">Warning</span>
    <span class="badge text-bg-info">Info</span>
    <span class="badge text-bg-light">Light</span>
    <span class="badge text-bg-dark">Dark</span>
</div>
<div>
    <span class="badge rounded-pill text-bg-primary">Primary</span>
    <span class="badge rounded-pill text-bg-secondary">Secondary</span>
    <span class="badge rounded-pill text-bg-success">Success</span>
    <span class="badge rounded-pill text-bg-danger">Danger</span>
    <span class="badge rounded-pill text-bg-warning">Warning</span>
    <span class="badge rounded-pill text-bg-info">Info</span>
    <span class="badge rounded-pill text-bg-light">Light</span>
    <span class="badge rounded-pill text-bg-dark">Dark</span>
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

<template>
  <div class="mb-3 container-fluid components-fluid-area">
    <div class="row">
      <div class="col-12">
        <div class="documentation-block">
          <h5 class="text-white titlesub"><i class="lab la-bootstrap"></i> Botones</h5>
          <h6 class="mt-3 titlesub">¿Cómo funcionan?</h6>
          <p class="p-3 mb-0 pb-2 text-sm">
            The UIKIT includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.<br><br>
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
            <button type="button" class="btn btn-primary me-2 mb-2">Primary</button>
            <button type="button" class="btn btn-secondary me-2 mb-2">Secondary</button>
            <button type="button" class="btn btn-success me-2 mb-2">Success</button>
            <button type="button" class="btn btn-danger me-2 mb-2">Danger</button>
            <button type="button" class="btn btn-warning me-2 mb-2">Warning</button>
            <button type="button" class="btn btn-info me-2 mb-2">Info</button>
            <button type="button" class="btn btn-light me-2 mb-2">Light</button>
            <button type="button" class="btn btn-dark me-2 mb-2">Dark</button>

            <button type="button" class="btn btn-link">Link</button>
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
          <h6 class="mt-3 titlesub">Botones sin relleno</h6>
          <p class="p-3 text-sm">In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button.</p>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-12 mb-2">
        <h6 class="mt-3"><i class="las la-bolt"></i> Ejemplo en vivo</h6>
      </div>
      <div class="col-12">
        <div class="documentation-block">
            <button type="button" class="btn btn-outline-primary me-2 mb-2">Primary</button>
            <button type="button" class="btn btn-outline-secondary me-2 mb-2">Secondary</button>
            <button type="button" class="btn btn-outline-success me-2 mb-2">Success</button>
            <button type="button" class="btn btn-outline-danger me-2 mb-2">Danger</button>
            <button type="button" class="btn btn-outline-warning me-2 mb-2">Warning</button>
            <button type="button" class="btn btn-outline-info me-2 mb-2">Info</button>
            <button type="button" class="btn btn-outline-light me-2 mb-2">Light</button>
            <button type="button" class="btn btn-outline-dark me-2 mb-2">Dark</button>
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
    <div class="row mt-5">
      <div class="col-12">
        <div class="documentation-block">
          <h6 class="mt-3 titlesub">Botones por tamaño o desahabilitados</h6>
          <p class="p-3 text-sm">
            Fancy larger or smaller buttons? Add .btn-lg or .btn-sm for additional sizes.<br><br>
            Make buttons look inactive by adding the disabled boolean attribute to any "button" element. Disabled buttons have pointer-events: none applied to, preventing hover and active states from triggering.<br><br>
            "a (anchors)" don’t support the disabled attribute, so you must add the .disabled class to make it visually appear disabled.<br><br>
                Disabled buttons using  from triggering.<br><br>
             should include the aria-disabled="true" attribute to indicate the state of the element to assistive technologies.
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
            <button type="button" class="btn btn-primary btn-lg me-2 mb-2">Large button</button>
            <button type="button" class="btn btn-secondary btn-lg me-2 mb-2">Large button</button>
            <button type="button" class="btn btn-primary btn-sm me-2 mb-2">Small button</button>
            <button type="button" class="btn btn-secondary btn-sm me-2 mb-2">Small button</button>
            <button type="button" class="btn btn-primary me-2 mb-2" disabled>Primary button</button>
            <button type="button" class="btn btn-secondary me-2 mb-2" disabled>Button</button>
            <button type="button" class="btn btn-outline-dark me-2 mb-2" disabled>Primary button</button>
            <button type="button" class="btn btn-outline-secondary me-2 mb-2" disabled>Button</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="code-viewer-toolbar">
          <h6 class="text-md">Código de muestra</h6>
          <button @click="copyToClipboard(3)" class="copy-to-clip"><i class="las la-clipboard"></i></button>
        </div>
        <pre class="code-viewer">
          <code id="textToBecopied3">
            {{codeSample3}}
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<script>
export default {
  name: "ButtonsHtmlComponent",
  components: {
  },
  data() {
     return {
    codeSample1: 
      `
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
      `,
    codeSample2: 
      `
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
      `,
    codeSample3: 
      `
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
<button type="button" class="btn btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary" disabled>Button</button>
<button type="button" class="btn btn-outline-dark" disabled>Primary button</button>
<button type="button" class="btn btn-outline-secondary" disabled>Button</button>
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
    },
  }
};
</script>

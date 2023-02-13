<template>
  <div class="mb-3 container-fluid components-fluid-area">
    <div class="row">
      <div class="col-12">
        <div class="documentation-block">
          <h5 class="text-white titlesub"><i class="lab la-bootstrap"></i>Grupo de Botones</h5>
          <h6 class="mt-3 titlesub">¿Cómo funcionan?</h6>
          <p class="p-3 mb-0 pb-2 text-sm">
            Wrap a series of buttons with .btn in .btn-group. In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, this would be role="group", while toolbars should have a role="toolbar".<br><br>
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
            <div>
                <div class="btn-group">
                    <a href="javascript:void(0);" class="btn btn-primary active" aria-current="page">Active link</a>
                    <a href="javascript:void(0);" class="btn btn-primary">Link</a>
                    <a href="javascript:void(0);" class="btn btn-primary">Link</a>
                </div>
            </div>
            <div>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-danger">Left</button>
                    <button type="button" class="btn btn-warning">Middle</button>
                    <button type="button" class="btn btn-success">Right</button>
                </div>
            </div>
            <div>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-primary">Left</button>
                    <button type="button" class="btn btn-outline-primary">Middle</button>
                    <button type="button" class="btn btn-outline-primary">Right</button>
                </div>
            </div>
            <div>
                <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <button type="button" class="btn btn-primary">1</button>
                    <button type="button" class="btn btn-primary">2</button>

                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button type="button" class="btn btn-dark mb-0">Button</button>
                    <button type="button" class="btn btn-dark mb-0">Button</button>
                    <button type="button" class="btn btn-dark mb-0">Button</button>
                    <button type="button" class="btn btn-dark mb-0">Button</button>
                    <button type="button" class="btn btn-dark mb-0">Button</button>
                    <button type="button" class="btn btn-dark mb-0">Button</button>
                </div>
            </div>
            <div>
                <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                    <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked>
                    <label class="btn btn-outline-dark mb-0" for="vbtn-radio1">Radio 1</label>
                    <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off">
                    <label class="btn btn-outline-dark mb-0" for="vbtn-radio2">Radio 2</label>
                    <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off">
                    <label class="btn btn-outline-dark mb-0" for="vbtn-radio3">Radio 3</label>
                </div>
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
  name: "ButtonsGroupHtmlComponent",
  components: {
  },
  data() {
     return {
    codeSample1: 
`
<div>
    <div class="btn-group">
        <a href="javascript:void(0);" class="btn btn-primary active" aria-current="page">Active link</a>
        <a href="javascript:void(0);" class="btn btn-primary">Link</a>
        <a href="javascript:void(0);" class="btn btn-primary">Link</a>
    </div>
</div>
<div>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-danger">Left</button>
        <button type="button" class="btn btn-warning">Middle</button>
        <button type="button" class="btn btn-success">Right</button>
    </div>
</div>
<div>
    <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">Left</button>
        <button type="button" class="btn btn-outline-primary">Middle</button>
        <button type="button" class="btn btn-outline-primary">Right</button>
    </div>
</div>
<div>
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
        <button type="button" class="btn btn-primary">1</button>
        <button type="button" class="btn btn-primary">2</button>

        <div class="btn-group" role="group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
            </button>
            <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Dropdown link</a></li>
            <li><a class="dropdown-item" href="#">Dropdown link</a></li>
            </ul>
        </div>
    </div>
</div>
<div class="mb-3">
    <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
        <button type="button" class="btn btn-dark mb-0">Button</button>
        <button type="button" class="btn btn-dark mb-0">Button</button>
        <button type="button" class="btn btn-dark mb-0">Button</button>
        <button type="button" class="btn btn-dark mb-0">Button</button>
        <button type="button" class="btn btn-dark mb-0">Button</button>
        <button type="button" class="btn btn-dark mb-0">Button</button>
    </div>
</div>
<div>
    <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
        <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked>
        <label class="btn btn-outline-dark mb-0" for="vbtn-radio1">Radio 1</label>
        <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off">
        <label class="btn btn-outline-dark mb-0" for="vbtn-radio2">Radio 2</label>
        <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off">
        <label class="btn btn-outline-dark mb-0" for="vbtn-radio3">Radio 3</label>
    </div>
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

<template>
  <div class="mb-3 container-fluid components-fluid-area">
    <div class="row">
      <div class="col-12">
        <div class="documentation-block">
          <h5 class="text-white titlesub"><i class="lab la-bootstrap"></i> Dropdrowns y Variantes</h5>
          <h6 class="mt-3 titlesub">¿Cómo funcionan?</h6>
          <p class="p-3 mb-0 pb-2 text-sm">
           Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering<br><br>

            Wrap the dropdown’s toggle (your button or link) and the dropdown menu within .dropdown, or another element that declares position: relative. Dropdowns can be triggered from "a" or "button" elements to better fit your potential needs. 
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
            <div class="btn-group me-2 mb-2">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Acción #1</a></li>
                    <li><a class="dropdown-item disabled" href="#">Acción #2</a></li>
                    <li><a class="dropdown-item" href="#">Acción #3</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Acción #4</a></li>
                </ul>
            </div>
            <div class="btn-group me-2 mb-2">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Acción #1</a></li>
                    <li><a class="dropdown-item" href="#">Acción #2</a></li>
                    <li><a class="dropdown-item" href="#">Acción #3</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Acción #4</a></li>
                </ul>
            </div>
            <div class="btn-group me-2 mb-2">
                <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Acción #1</a></li>
                    <li><a class="dropdown-item" href="#">Acción #2</a></li>
                    <li><a class="dropdown-item" href="#">Acción #3</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Acción #4</a></li>
                </ul>
            </div>
            <div class="btn-group me-2 mb-2">
                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Acción #1</a></li>
                    <li><a class="dropdown-item" href="#">Acción #2</a></li>
                    <li><a class="dropdown-item" href="#">Acción #3</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Acción #4</a></li>
                </ul>
            </div>
            <div class="btn-group me-2 mb-2">
                <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Acción #1</a></li>
                    <li><a class="dropdown-item" href="#">Acción #2</a></li>
                    <li><a class="dropdown-item" href="#">Acción #3</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Acción #4</a></li>
                </ul>
            </div>
            <div class="btn-group me-2 mb-2">
                <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Acción #1</a></li>
                    <li><a class="dropdown-item" href="#">Acción #2</a></li>
                    <li><a class="dropdown-item" href="#">Acción #3</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Acción #4</a></li>
                </ul>
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

    <div class="row mt-5">
      <div class="col-12">
        <div class="documentation-block">
          <h6 class="mt-3 titlesub">Separados por un Botón</h6>
          <p class="p-3 text-sm">
            Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of .dropdown-toggle-split for proper spacing around the dropdown caret.<br><br>
            We use this extra class to reduce the horizontal padding on either side of the caret by 25% and remove the margin-left that’s added for regular button dropdowns. 
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
            <div class="btn-group me-2 mb-2">
                <button type="button" class="btn btn-primary">Dropdown</button>
                <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="visually-hidden">Abrir Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Acción #1</a></li>
                    <li><a class="dropdown-item" href="#">Acción #2</a></li>
                    <li><a class="dropdown-item" href="#">Acción #3</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Acción #4</a></li>
                </ul>
            </div>
            <div class="btn-group me-2 mb-2">
                <button type="button" class="btn btn-secondary">Dropdown</button>
                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="visually-hidden">Abrir Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Acción #1</a></li>
                    <li><a class="dropdown-item" href="#">Acción #2</a></li>
                    <li><a class="dropdown-item" href="#">Acción #3</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Acción #4</a></li>
                </ul>
            </div>
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
          <h6 class="mt-3 titlesub">DropUp</h6>
          <p class="p-3 text-sm">Trigger dropdown menus above elements by adding .dropup to the parent element.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mb-2">
        <h6 class="mt-3"><i class="las la-bolt"></i> Ejemplo en vivo</h6>
      </div>
      <div class="col-12">
        <div class="documentation-block">
            <div class="btn-group dropup me-2 mb-2">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropup
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Acción #1</a></li>
                    <li><a class="dropdown-item" href="#">Acción #2</a></li>
                    <li><a class="dropdown-item" href="#">Acción #3</a></li>
                </ul>
            </div>
            <div class="btn-group dropup me-2 mb-2">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropup
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Acción #1</a></li>
                    <li><a class="dropdown-item" href="#">Acción #2</a></li>
                    <li><a class="dropdown-item" href="#">Acción #3</a></li>
                </ul>
            </div>
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


    <div class="row mt-5">
      <div class="col-12">
        <div class="documentation-block">
          <h6 class="mt-3 titlesub">Dropend & Dropstart</h6>
          <p class="p-3 text-sm">
            Trigger dropdown menus at the right of the elements by adding .dropend to the parent element.<br><br>
            Trigger dropdown menus at the left of the elements by adding .dropstart to the parent element.
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
            <div class="btn-group dropend me-4 mb-2">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropend
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Acción #1</a></li>
                    <li><a class="dropdown-item" href="#">Acción #2</a></li>
                    <li><a class="dropdown-item" href="#">Acción #3</a></li>
                </ul>
            </div>
            <div class="btn-group dropstart me-2 mb-2">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropstart
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Acción #1</a></li>
                    <li><a class="dropdown-item" href="#">Acción #2</a></li>
                    <li><a class="dropdown-item" href="#">Acción #3</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="code-viewer-toolbar">
          <h6 class="text-md">Código de muestra</h6>
          <button @click="copyToClipboard(4)" class="copy-to-clip"><i class="las la-clipboard"></i></button>
        </div>
        <pre class="code-viewer">
          <code id="textToBecopied4">
            {{codeSample4}}
          </code>
        </pre>
      </div>
    </div>

  </div>
</template>
<script setup></script>
<script>

export default {
  name: "DropdownsHtmlComponent",
  components: {
  },
  data() {
     return {
    codeSample1: 
      `
<div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Acción #1</a></li>
        <li><a class="dropdown-item" href="#">Acción #2</a></li>
        <li><a class="dropdown-item" href="#">Acción #3</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Acción #4</a></li>
    </ul>
</div>
      `,
    codeSample2: 
      `
<div class="btn-group">
    <button type="button" class="btn btn-primary">Dropdown</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Abrir Dropdown</span>
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Acción #1</a></li>
        <li><a class="dropdown-item" href="#">Acción #2</a></li>
        <li><a class="dropdown-item" href="#">Acción #3</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Acción #4</a></li>
    </ul>
</div>
<div class="btn-group">
    <button type="button" class="btn btn-secondary">Dropdown</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Abrir Dropdown</span>
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Acción #1</a></li>
        <li><a class="dropdown-item" href="#">Acción #2</a></li>
        <li><a class="dropdown-item" href="#">Acción #3</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Acción #4</a></li>
    </ul>
</div>
      `,
    codeSample3: 
      `
<div class="btn-group dropup">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropup
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Acción #1</a></li>
        <li><a class="dropdown-item" href="#">Acción #2</a></li>
        <li><a class="dropdown-item" href="#">Acción #3</a></li>
    </ul>
</div>
<div class="btn-group dropup">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropup
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Acción #1</a></li>
        <li><a class="dropdown-item" href="#">Acción #2</a></li>
        <li><a class="dropdown-item" href="#">Acción #3</a></li>
    </ul>
</div>
      `,
    codeSample4: 
      `
<div class="btn-group dropend">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropend
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Acción #1</a></li>
        <li><a class="dropdown-item" href="#">Acción #2</a></li>
        <li><a class="dropdown-item" href="#">Acción #3</a></li>
    </ul>
</div>
<div class="btn-group dropstart">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropstart
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Acción #1</a></li>
        <li><a class="dropdown-item" href="#">Acción #2</a></li>
        <li><a class="dropdown-item" href="#">Acción #3</a></li>
    </ul>
</div>
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

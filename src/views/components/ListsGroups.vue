<template>
  <div class="mb-3 container-fluid components-fluid-area">
    <div class="row">
      <div class="col-12">
        <div class="documentation-block">
          <h5 class="text-white titlesub"><i class="lab la-bootstrap"></i> Listas & Grupos</h5>
          <h6 class="mt-3 titlesub">¿Cómo funcionan?</h6>
          <p class="p-3 mb-0 pb-2 text-sm">
           List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.
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
            <ul class="list-group mb-4">
              <li class="list-group-item">An item</li>
              <li class="list-group-item active">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul>

            <p>Con números</p>
            <ol class="list-group list-group-numbered">
              <li class="list-group-item">A list item</li>
              <li class="list-group-item">A list item</li>
              <li class="list-group-item">A list item</li>
            </ol>
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
          <h6 class="mt-3 titlesub">Con diseño custom y diseño horizontal</h6>
          <p class="p-3 text-sm">
            These work great with custom content as well.<br><br>
            Add .list-group-horizontal to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant .list-group-horizontal-{sm|md|lg|xl|xxl} to make a list group horizontal starting at that breakpoint’s min-width.
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
            <ol class="list-group list-group-numbered mb-3">
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
            </ol>

            <ul class="list-group list-group-horizontal">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">An item</li>
            </ul>

            <ul class="list-group list-group-horizontal">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">An item</li>
              <li class="list-group-item">An item</li>
            </ul>
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
          <h6 class="mt-3 titlesub">Diseño contenido extenso y forms</h6>
          <p class="p-3 text-sm">Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox utilities.<br><br>Place Bootstrap’s checkboxes and radios within list group items and customize as needed. You can use them without "label"s, but please remember to include an aria-label attribute and value for accessibility.<br><br>You can use .stretched-link on "label"s to make the whole list group item clickable.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mb-2">
        <h6 class="mt-3"><i class="las la-bolt"></i> Ejemplo en vivo</h6>
      </div>
      <div class="col-12">
        <div class="documentation-block">
          <div class="list-group mb-4">
            <a href="#" class="list-group-item list-group-item-action" aria-current="true">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small>And some small print.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small class="text-muted">And some muted small print.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small class="text-muted">And some muted small print.</small>
            </a>
          </div>

          <ul class="list-group mb-4">
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
              <label class="form-check-label mb-0" for="firstCheckbox">First checkbox</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
              <label class="form-check-label mb-0" for="secondCheckbox">Second checkbox</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
              <label class="form-check-label mb-0" for="thirdCheckbox">Third checkbox</label>
            </li>
          </ul>

          <ul class="list-group mb-4">
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
              <label class="form-check-label mb-0" for="firstRadio">First radio</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
              <label class="form-check-label mb-0" for="secondRadio">Second radio</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
              <label class="form-check-label mb-0" for="thirdRadio">Third radio</label>
            </li>
          </ul>

          <ul class="list-group">
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched" />
              <label class="form-check-label stretched-link mb-0" for="firstCheckboxStretched">First checkbox</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched" />
              <label class="form-check-label stretched-link mb-0" for="secondCheckboxStretched">Second checkbox</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
              <label class="form-check-label stretched-link mb-0" for="thirdCheckboxStretched">Third checkbox</label>
            </li>
          </ul>

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
          <h6 class="mt-3 titlesub">Por colores y Clases según su uso</h6>
          <p class="p-3 text-sm">
            Use contextual classes to style list items with a stateful background and color.
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
            <ul class="list-group">
              <li class="list-group-item">A simple default list group item</li>

              <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
              <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
              <li class="list-group-item list-group-item-success">A simple success list group item</li>
              <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
              <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
              <li class="list-group-item list-group-item-info">A simple info list group item</li>
              <li class="list-group-item list-group-item-light">A simple light list group item</li>
              <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
            </ul>
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
  name: "ListsGroupsHtmlComponent",
  components: {
  },
  data() {
     return {
    codeSample1: 
      `
<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item active">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
<ol class="list-group list-group-numbered">
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
</ol>
      `,
    codeSample2: 
      `
<ol class="list-group list-group-numbered ">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
</ol>

<ul class="list-group list-group-horizontal">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
</ul>

<ul class="list-group list-group-horizontal">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">An item</li>
</ul>
      `,
    codeSample3: 
      `
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </a>
</div>

<ul class="list-group mb-4">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
    <label class="form-check-label mb-0" for="firstCheckbox">First checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
    <label class="form-check-label mb-0" for="secondCheckbox">Second checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
    <label class="form-check-label mb-0" for="thirdCheckbox">Third checkbox</label>
  </li>
</ul>

<ul class="list-group mb-4">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
    <label class="form-check-label mb-0" for="firstRadio">First radio</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
    <label class="form-check-label mb-0" for="secondRadio">Second radio</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
    <label class="form-check-label mb-0" for="thirdRadio">Third radio</label>
  </li>
</ul>

<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched" />
    <label class="form-check-label stretched-link mb-0" for="firstCheckboxStretched">First checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched" />
    <label class="form-check-label stretched-link mb-0" for="secondCheckboxStretched">Second checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
    <label class="form-check-label stretched-link mb-0" for="thirdCheckboxStretched">Third checkbox</label>
  </li>
</ul>
      `,
    codeSample4: 
      `
<ul class="list-group">
  <li class="list-group-item">A simple default list group item</li>
  <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
  <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
  <li class="list-group-item list-group-item-success">A simple success list group item</li>
  <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
  <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
  <li class="list-group-item list-group-item-info">A simple info list group item</li>
  <li class="list-group-item list-group-item-light">A simple light list group item</li>
  <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
</ul>
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

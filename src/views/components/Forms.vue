<template>
  <div class="mb-3 container-fluid components-fluid-area">
    <div class="row">
      <div class="col-12">
        <div class="documentation-block">
          <h5 class="text-white titlesub"><i class="lab la-bootstrap"></i> Formularios e Inputs</h5>
          <h6 class="mt-3 titlesub">¿Cómo funcionan?</h6>
          <p class="p-3 mb-0 pb-2 text-sm">
           textual form controls like <code>input</code> and <code>textarea</code>s an upgrade with custom styles, sizing, focus states, and more.
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
            <div class="form-group">
              <label for="" class="fw-normal label-input">Nombre input</label>
              <input class="form-control mb-2" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
            </div>
        </div>
      </div>
      <div class="col-12">
        <div class="documentation-block">
            <input class="form-control form-control-lg mb-2" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
            <input class="form-control mb-2" type="text" placeholder="Default input" aria-label="default input example">
            <input class="form-control form-control-sm mb-2" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
            <input class="form-control mb-2" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled>
            <input class="form-control mb-2" type="text" value="Disabled readonly input" aria-label="Disabled input example" disabled readonly>
            <input class="form-control mb-2" type="text" value="Readonly input here..." aria-label="readonly input example" readonly>

            <textarea name="" id="" cols="30" rows="4" class="form-control mb-2"></textarea>
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
          <h6 class="mt-3 titlesub">Inputs de Carga, ColorPicker & DataList</h6>
          <p class="p-3 text-sm">
            Standard file inputs with new style, input for color picker and dataList optios picker.
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
            <div class="mb-3">
                <label for="formFile" class="form-label fw-normal">Default file input example</label>
                <input class="form-control" type="file" id="formFile">
            </div>
            <div class="mb-3">
                <label for="formFileMultiple" class="form-label fw-normal">Multiple files input example</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple>
            </div>
            <div class="mb-3">
                <label for="formFileDisabled" class="form-label fw-normal">Disabled file input example</label>
                <input class="form-control" type="file" id="formFileDisabled" disabled>
            </div>
            <div class="mb-3">
                <label for="formFileSm" class="form-label fw-normal">Small file input example</label>
                <input class="form-control form-control-sm" id="formFileSm" type="file">
            </div>
            <div class="mb-3">
                <label for="formFileLg" class="form-label fw-normal">Large file input example</label>
                <input class="form-control form-control-lg" id="formFileLg" type="file">
            </div>
            <div class="mb-3">
                <label for="exampleColorInput" class="form-label fw-normal">Color picker</label>
                <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
            </div>
            <div>
                <label for="exampleDataList" class="form-label fw-normal">Datalist example</label>
                <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
                <datalist id="datalistOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                </datalist>
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
        <div class="documentation-block pb-4">
          <h6 class="mt-3 titlesub">Seleccionables / Combos</h6>
          <!-- <p class="p-3 text-sm">Select options from a list</p> -->
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mb-2">
        <h6 class="mt-3"><i class="las la-bolt"></i> Ejemplo en vivo</h6>
      </div>
      <div class="col-12">
        <div class="documentation-block">
            <select class="form-select mb-3" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            <select class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            <select class="form-select mb-3" multiple aria-label="multiple select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            <select class="form-select mb-3" aria-label="Disabled select example" disabled>
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
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
        <div class="documentation-block pb-4">
          <h6 class="mt-3 titlesub">checkboxes & Radios</h6>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mb-2">
        <h6 class="mt-3"><i class="las la-bolt"></i> Ejemplo en vivo</h6>
      </div>
      <div class="col-12">
        <div class="documentation-block p-4">

            <!--Checkboxes-->
            <div class="form-check-holder">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                </label>
            </div>
            <div class="form-check-holder">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Checked checkbox
                </label>
            </div>

            <div class="form-check-holder">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminateDisabled" disabled>
                <label class="form-check-label" for="flexCheckIndeterminateDisabled">
                    Disabled indeterminate checkbox
                </label>
            </div>
            <div class="form-check-holderk">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
                <label class="form-check-label" for="flexCheckDisabled">
                    Disabled checkbox
                </label>
            </div>
            <div class="form-check-holder">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
                <label class="form-check-label" for="flexCheckCheckedDisabled">
                    Disabled checked checkbox
                </label>
            </div>

             <!--Checks en linea-->
            <div class="inline-checks-holder">
                <div class="form-check-holder form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                    <label class="form-check-label" for="inlineCheckbox1">1</label>
                </div>
                <div class="form-check-holder form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                    <label class="form-check-label" for="inlineCheckbox2">2</label>
                </div>
                <div class="form-check-holder form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                    <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
                </div>
            </div>
            
            <!--Radios-->
            <div class="form-radio-holder">
                <input class="form-check-input me-1" type="radio" name="flexRadioDefault" id="flexRadioDefault0" value="" checked>
                <label class="form-check-label mb-0" for="flexRadioDefault0">Zero radio</label>
            </div>
            <div class="form-radio-holder">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    Default radio
                </label>
            </div>
            <div class="form-radio-holder">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                    Default checked radio
                </label>
            </div>
            <div class="form-radio-holder">
                <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
                <label class="form-check-label" for="flexRadioDisabled">
                    Disabled radio
                </label>
            </div>
            <div class="form-radio-holder">
                <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
                <label class="form-check-label" for="flexRadioCheckedDisabled">
                    Disabled checked radio
                </label>
            </div>

            
            <!--Radios en linea-->
            <div class="inline-radios-holder">
                <div class="form-radio-holder form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                    <label class="form-check-label" for="inlineRadio1">1</label>
                </div>
                <div class="form-radio-holder form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio2">2</label>
                </div>
                <div class="form-radio-holder form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
                    <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
                </div>
            </div>


            <!--Switches-->
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled>
                <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled>
                <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
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

    <div class="row mt-5">
      <div class="col-12">
        <div class="documentation-block pb-4">
          <h6 class="mt-3 titlesub">Inputs con Addons</h6>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mb-2">
        <h6 class="mt-3"><i class="las la-bolt"></i> Ejemplo en vivo</h6>
      </div>
      <div class="col-12">
        <div class="documentation-block p-4">

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control addon-present" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>

        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="code-viewer-toolbar">
          <h6 class="text-md">Código de muestra</h6>
          <button @click="copyToClipboard(5)" class="copy-to-clip"><i class="las la-clipboard"></i></button>
        </div>
        <pre class="code-viewer">
          <code id="textToBecopied5">
            {{codeSample5}}
          </code>
        </pre>
      </div>
    </div>

  </div>
</template>
<script setup></script>
<script>

export default {
  name: "FormsHtmlComponent",
  components: {
  },
  data() {
     return {
    codeSample1: 
      `
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
<input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
<input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled>
<input class="form-control" type="text" value="Disabled readonly input" aria-label="Disabled input example" disabled readonly>
<input class="form-control" type="text" value="Readonly input here..." aria-label="readonly input example" readonly>

<textarea name="" id="" cols="30" rows="4" class="form-control mb-2"></textarea>
      `,
    codeSample2: 
      `
<div class="mb-3">
    <label for="formFile" class="form-label fw-normal">Default file input example</label>
    <input class="form-control" type="file" id="formFile">
</div>
<div class="mb-3">
    <label for="formFileMultiple" class="form-label fw-normal">Multiple files input example</label>
    <input class="form-control" type="file" id="formFileMultiple" multiple>
</div>
<div class="mb-3">
    <label for="formFileDisabled" class="form-label fw-normal">Disabled file input example</label>
    <input class="form-control" type="file" id="formFileDisabled" disabled>
</div>
<div class="mb-3">
    <label for="formFileSm" class="form-label fw-normal">Small file input example</label>
    <input class="form-control form-control-sm" id="formFileSm" type="file">
</div>
<div class="mb-3">
    <label for="formFileLg" class="form-label fw-normal">Large file input example</label>
    <input class="form-control form-control-lg" id="formFileLg" type="file">
</div>
<div class="mb-3">
    <label for="exampleColorInput" class="form-label fw-normal">Color picker</label>
    <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
</div>
<div>
    <label for="exampleDataList" class="form-label fw-normal">Datalist example</label>
    <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
    <datalist id="datalistOptions">
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Seattle" />
        <option value="Los Angeles" />
        <option value="Chicago" />
    </datalist>
</div>
      `,
    codeSample3: 
      `
<select class="form-select mb-3" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

<select class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

<select class="form-select mb-3" multiple aria-label="multiple select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

<select class="form-select mb-3" aria-label="Disabled select example" disabled>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
      `,
    codeSample4: 
      `
<!--Checkboxes-->
<div class="form-check-holder">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
        Default checkbox
    </label>
</div>
<div class="form-check-holder">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
    <label class="form-check-label" for="flexCheckChecked">
        Checked checkbox
    </label>
</div>

<div class="form-check-holder">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminateDisabled" disabled>
    <label class="form-check-label" for="flexCheckIndeterminateDisabled">
        Disabled indeterminate checkbox
    </label>
</div>
<div class="form-check-holderk">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
    <label class="form-check-label" for="flexCheckDisabled">
        Disabled checkbox
    </label>
</div>
<div class="form-check-holder">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
    <label class="form-check-label" for="flexCheckCheckedDisabled">
        Disabled checked checkbox
    </label>
</div>

    <!--Checks en linea-->
<div class="inline-checks-holder">
    <div class="form-check-holder form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
        <label class="form-check-label" for="inlineCheckbox1">1</label>
    </div>
    <div class="form-check-holder form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        <label class="form-check-label" for="inlineCheckbox2">2</label>
    </div>
    <div class="form-check-holder form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
        <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
    </div>
</div>

<!--Radios-->
<div class="form-radio-holder">
    <input class="form-check-input me-1" type="radio" name="flexRadioDefault" id="flexRadioDefault0" value="" checked>
    <label class="form-check-label mb-0" for="flexRadioDefault0">Zero radio</label>
</div>
<div class="form-radio-holder">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
        Default radio
    </label>
</div>
<div class="form-radio-holder">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
    <label class="form-check-label" for="flexRadioDefault2">
        Default checked radio
    </label>
</div>
<div class="form-radio-holder">
    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
    <label class="form-check-label" for="flexRadioDisabled">
        Disabled radio
    </label>
</div>
<div class="form-radio-holder">
    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
    <label class="form-check-label" for="flexRadioCheckedDisabled">
        Disabled checked radio
    </label>
</div>


<!--Radios en linea-->
<div class="inline-radios-holder">
    <div class="form-radio-holder form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">1</label>
    </div>
    <div class="form-radio-holder form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">2</label>
    </div>
    <div class="form-radio-holder form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
        <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
    </div>
</div>


<!--Switches-->
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
    <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled>
    <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
</div>
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled>
    <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div>
      `,
    codeSample5: 
      `
<div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">@</span>
    <input type="text" class="form-control addon-present" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
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

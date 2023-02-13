<template>
  <div class="mb-3 container-fluid components-fluid-area">
    <div class="row">
      <div class="col-12">
        <div class="documentation-block">
          <h5 class="text-white titlesub"><i class="lab la-bootstrap"></i> Toasters</h5>
          <h6 class="mt-3 titlesub">¿Cómo funcionan?</h6>
          <p class="p-3 mb-0 pb-2 text-sm">
           Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.<br><br>

           <b>Things to know when using the toast plugin:</b><br><br>

            Toasts are opt-in for performance reasons, so you must initialize them yourself.<br>
            Toasts will automatically hide if you do not specify autohide: false.<br><br>

            Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the .toast or .toast container
          </p>


          <table class="w100 table">
                <thead>
                    <tr>
                        <th>Clase</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>top-0 start-0</td>
                        <td>Top left</td>
                    </tr>
                    <tr>
                        <td>top-0 start-50 translate-middle-x</td>
                        <td>Top center</td>
                    </tr>
                    <tr>
                        <td>top-0 end-0</td>
                        <td>Top right</td>
                    </tr>
                    <tr>
                        <td>top-50 start-0 translate-middle-y</td>
                        <td>Middle left</td>
                    </tr>
                    <tr>
                        <td>top-50 start-50 translate-middle</td>
                        <td>Middle center</td>
                    </tr>
                    <tr>
                        <td>top-50 end-0 translate-middle-y</td>
                        <td>Middle right</td>
                    </tr>
                    <tr>
                        <td>bottom-0 start-0</td>
                        <td>Bottom left</td>
                    </tr>
                    <tr>
                        <td>bottom-0 start-50 translate-middle-x</td>
                        <td>Bottom center</td>
                    </tr>
                    <tr>
                        <td>bottom-0 end-0</td>
                        <td>Bottom right</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-12 mb-2">
        <h6 class="mt-3"><i class="las la-bolt"></i> Ejemplo en vivo</h6>
      </div>
      <div class="col-12">

        <div class="documentation-block">

            <button type="button" class="btn btn-primary" id="liveToastBtn">Mostrar toast</button>

            <div class="toast-container position-fixed top-50 start-50 translate-middle p-3">
                <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header text-bg-primary">
                        <img :src="avatar" class="rounded me-2 icon-img-toast" alt="...">
                        <strong class="me-auto">Edwin Marquez</strong>
                        <small>11 mins ago</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
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
import avatar from "@/assets/img/edwin-marquez.jpg";
import { Toast } from 'bootstrap';
export default {
  name: "ToastsHtmlComponent",
  components: {
  },
  data() {
     return {
    codeSample1: 
      `
<button type="button" class="btn btn-primary" id="liveToastBtn">Mostrar toast</button>

<div class="toast-container position-fixed top-50 start-50 translate-middle p-3">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header text-bg-primary">
            <img :src="avatar" class="rounded me-2 icon-img-toast" alt="...">
            <strong class="me-auto">Edwin Marquez</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            Hello, world! This is a toast message.
        </div>
    </div>
</div>
      `,
    codeSample2: 
      `
      `,
      avatar
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
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            const toast = new Toast(toastLiveExample)

            toast.show()
        })
    }
  },
};
</script>

<template name="inicio">
  {{#if currentUser}}
    <div class="row vspace">
      <div class="offset4 span4 text-center">
        <textarea id="texto" rows="5"></textarea>
      </div>
      <div class="span4">
        Instrucciones:
        <ul>
          <li><span class="label label-success">Enter</span>=enviar texto</li>
          <li><span class="label label-success">Ctrl+Enter</span>=nueva línea</li>
          <li>Puede utilizar código html, por ejemplo: Hola &lt;b&gt;Meteor&lt;/b&gt;</li>
        </ul>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="offset2 span8">
        {{> chatItems}}
      </div>
    </div>
  {{/if}}
</template>
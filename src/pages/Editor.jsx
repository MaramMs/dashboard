import React from 'react'
import { Inject,Toolbar, HtmlEditor, Image, Link, QuickToolbar, RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor'
import { Header } from '../components'
import { EditorData } from '../data/dummy'
const Editor = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-white'>

      <Header category='App' title='Editor'/>

      <RichTextEditorComponent
      
      >
        <EditorData />
        <Inject services={[Toolbar,HtmlEditor,Image,Link,QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor
# vue-flexable-dnd

_**A simple and powerful drag&drop component for Vue developers**_

> Thank you for install vue-flexable-dnd component ———  A drug and drop component developed for vue, which can sovle the problem that other dnd components can't do，like can use flex layout and sort mode

<!-- > 一个为vue开发的拖拽组件，解决了其他dnd组件无法进行弹性布局与排序模式的问题 -->

## 💡 Highlights
- Ability to use flex layout
- When there are many elements, excellent performance can be maintained
- There are two drag&drop modes: Replace and Sort
- Ability to customize internal styles and layout
- Flexible function slot
- More functions will be adapted in the future
## 💻 Gatting started
#### component install 
```
npm install vue-flexable-dnd
```
#### 📃 import into your page
```js
import VDComponent from 'vue-flexable-dnd';

export default{
    components:{
        VDComponent
    }
}
```
#### 🏭 import into your project
```js
import VDComeponent from 'vue-flexable-dnd';
import App from 'vue';

VDComponent.install(App).mount('App')
// after that, you can use <VDComponent> anywhere in proejct
```
#### 🐟 grammar
_HTML_

```  html
···
<VDContainer
    :width=350          //「Number」 outer container's width
    :animation=false    //「Boolean」 show animation or not while change the position of the target
    :data=data          //「Array【object】」 original data
    type="sort"         //「string」 sort | switch, 「sort」default, typeof sort mode
    @getData=funcName   //「function」 Callback function，Callback function to receive   array after modified
>
    <template v-slot:VDC="{data, index}">
        <div>
            <!-- edit your own components here -->
            {{data.objectParameter1}}
            {{data.objectParamerter2}}
        </div>
    </template>
</VDContainer>
···
```

JS
```js
// options style[选项式]:
export default {
    data() {
        return {
            data: [
                {
                    objectParameter1: 'anyThing',
                    objectParamerter2: 'anyThing2'
                },{
                    objectParameter1: 'anyThing3',
                    objectParamerter2: 'anyThing4'
                },

            ]
        }
    }
}
// Composition style[组合式]:
<script setup>
    const data = reactive([
                {
                    objectParameter1: 'anyThing',
                    objectParamerter2: 'anyThing2'
                },{
                    objectParameter1: 'anyThing3',
                    objectParamerter2: 'anyThing4'
                },

            ])
</script>
```
_if that doesnt work, please refer to the contents inside ```vue-flexable-dnd/examples/App.vue & vue-flexable-dnd/examples/main.js```_

_**Any 🤔️ issue or 👷 job for me：**_
> contact email: weijia618@outlook.com

if yor got any job to offer contain these frameworks below:
- vue 
- react
- flutter
- react-native
- node.js full stack dev.
- ios or android software development

telecommute：✅ 

part-time：✅

full-time job:  🇨🇳 chengdu 🐼

**contact me by email now ^_^**
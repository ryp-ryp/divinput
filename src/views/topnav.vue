<template>
    <div style="text-align:left;display: flex;">
        <div>
            虚拟列表的实现1
            <div
                class="list-view"
                :style="{
                    height: `${height}px`,
                }"
                ref="ddc"
                @scroll="handleScroll"
            >
                <div
                    class="list-view-phantom"
                    :style="{
                        height: contentHeight,
                    }"
                ></div>
                <ul ref="content" class="list-view-content">
                    <li
                        class="list-view-item"
                        :style="{
                            height: itemHeight + 'px',
                        }"
                        v-for="(item, index) in visibledata"
                        :key="index"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div ref="reference" class="reference" @dblclick="dbFn1" :contenteditable="contenteditable" @focusout="focusoutFn">{{text1}}</div>
            时间分片
            <button @click="clickFn">{{ceshishujuchijiuhua}}</button>
            <button @click="clickFn1">{{dasdad}}</button>
            <ul id ="container"></ul>
        </div>
    </div>
</template>
<script>
import * as asd from "web_information_center";
import { mapState, mapMutations } from "vuex";
export default {
    name: "ListView",
    data() {
        return {
            text1:"虚拟列表的实现1",
            contenteditable:false,
            visibledata: [],
        }
    },
    props: {
        data: {
            type: Array,
            default: function () {
                const list = [];
                for (let i = 0; i < 1000000; i++) {
                    list.push("列表" + i);
                }
                return list;
            },
        },
        height: {
            type: Number,
            default: 400,
        },
        itemHeight: {
            type: Number,
            default: 30,
        },
    },
    computed: {
        ...mapState(["ceshishujuchijiuhua","dasdad",'qiantaoleixing']),
        // 全部数据的高度
        contentHeight() {
            console.log(this.data.length, this.itemHeight);
            //这里最好填写全部数据的高度
            return this.data.length * this.itemHeight + "px";
        },
    },
    mounted() {
        console.log(111111,this.qiantaoleixing);
        this.$bus.$on('huishuan',(name) => { 
            this.name = name 
            console.log(this.name) 
        })
        console.log(asd);
        this.updateVisibledata();
        this.$nextTick(()=>{
            this.gaibianshuju( sessionStorage.getItem('dasdad') ? sessionStorage.getItem('dasdad') : this.ceshishujuchijiuhua)
        })
    },
    beforeRouterEnter(to,from,next){
        console.log(323131213,to)
    },
    methods: {
        dbFn1(){
            this.contenteditable = true

            const obj = this.$refs.reference
            // obj.focus();
            this.$nextTick(() => { 
                //1
                var sel = window.getSelection();
                if(sel){
                    var insetText = document.createTextNode('');
                    obj.appendChild(insetText)
                    var range = document.createRange();
                    range.selectNodeContents(obj);
                    range.setStart(insetText,insetText.length)
                    range.collapse(true); //为true必须写insetText
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
                //2
                /* var range = document.createRange();
                range.selectNodeContents(obj);
                range.collapse(false);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range); */

                //3
               /*  if (window.getSelection) {//ie11 10 9 ff safari
                    obj.focus(); //解决ff不获取焦点无法定位问题
                    var range = window.getSelection();//创建range
                    range.selectAllChildren(obj);//range 选择obj下所有子内容
                    range.collapseToEnd();//光标移至最后
                }
                else if (document.selection) {//ie10 9 8 7 6 5
                    var range = document.selection.createRange();//创建选择对象
                    //var range = document.body.createTextRange();
                    range.moveToElementText(obj);//range定位到obj
                    range.collapse(false);//光标移至最后
                    range.select();
                } */
             })
        },
        focusoutFn(){
            this.contenteditable = false
            this.text1 = this.$refs.reference.innerText
            this.$nextTick(() => { 
                console.log(this.text1,this.contenteditable,this.$refs.reference.innerText);
            })
        },
        clickFn(){
            sessionStorage.setItem('dasdad',"coushabi")
            this.gaibianshuju('coushabi')
        },
        clickFn1(){
            this.gaibianshuju1('coushabi')
        },
        // ...mapMutations('SYSTEM/certificateManage',['dataOrganizations']), //SYSTEM/certificateManage 分包
        ...mapMutations(['gaibianshuju','gaibianshuju1']),
        updateVisibledata(scrollTop) {
            scrollTop = scrollTop || 0;
            const visibleCount = Math.ceil(
                this.$el.clientHeight / this.itemHeight
            ); // 取得可见区域的可见列表项数量
            const start = Math.floor(scrollTop / this.itemHeight); // 取得可见区域的起始数据索引
            const end = start + visibleCount; // 取得可见区域的结束数据索引
            this.visibledata = this.data.slice(start, end); // 计算出可见区域对应的数据，让 Vue.js 更新
            this.$refs.content.style.webkitTransform = `translate3d(0, ${
                start * this.itemHeight
            }px, 0)`; // 把可见区域的 top 设置为起始元素在整个列表中的位置（使用 transform 是为了更好的性能）
        },
        handleScroll() {
            console.log(this.$refs.ddc.scrollTop,this.$el);
            const scrollTop = this.$refs.ddc.scrollTop;
            this.updateVisibledata(scrollTop);
        },
    },
};
</script>
<style lang="scss" scoped>
.list-view {
    overflow: auto;
    position: relative;
    border: 1px solid #aaa;
    width: 200px;
}
.list-view-phantom {
    border: 1px solid yellow;
    position: absolute;
    left: 0;
    top: 20px;
    right: 0;
    z-index: -1;
}
.list-view-content {
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
}
.list-view-item {
    padding: 5px;
    color: #666;
    line-height: 30px;
    box-sizing: border-box;
}
.reference{
    user-select: none;
}
</style>
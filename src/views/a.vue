<template>
    <div>
        <div @click="dda">
            登录点击
        </div>
        <div class="a">
            <div
                ref="divd"
                class="divaa"
                :contenteditable="contenteditable"
                @focusout="lostice11"
            >
                {{ shuju }}
            </div>
            <i
                class="edit-icon el-icon-edit-outline"
                style="cursor: pointer"
                @click="lostice"
            ></i>
        </div>
        <el-input
            ref="elinput"
            class="elinput"
            @blur="lostblur"
            :disabled="isShow"
            v-model="shuju"
            size="mini"
            @keydown.native="keydown"
            @keypress.native="DD"
        >
            <i
                slot="append"
                class="edit-icon el-icon-edit-outline"
                style="cursor: pointer"
                @click="showabled"
            ></i>
        </el-input>
        <ul>
            <li 
                v-for="item in imges" 
                :key="item.id" 
                :draggable="false"
                @mouseup="dragstart"
                @dragstart="dragstart1"
            >
                {{item.content}}
            </li>
        </ul>
        <div class="chuantou" style="overflow:auto">
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
            <div class="chuantoudiv">这是右侧的数据</div>
            <!-- <p style="display:inline-block">1111111111111111111111111111111111111111111111111111111</p> -->
            <div style="display:flex;">
                <div>222222222222</div>
                <div>33333333333</div>
                <div>444444444444</div>
            </div>
            <div class="div11">
                <el-tooltip v-if="showtooptile" class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                    <p ref="p">111111111111111111111111</p>
                </el-tooltip>
                <div title="ddddddddd">q111111111111111111111111</div>
                <div>111111111111111111111111</div>
            </div>
        </div>
        <!-- <iframe style="border:1px solid red;width:500px;height:400px" src="api/j_acegi_security_check?j_username=tangshihao&j_password=Pass@word78" frameborder="0"></iframe> -->
    </div>
</template>

<script>
// import dd from './a.js'
export default {
    data() {
        return {
            shuju: "dadasda",
            contenteditable: false,
            isShow: true,
            imges:[
                {
                    id:1,
                    content:"这是1"
                },
                {
                    id:2,
                    content:"这是2"
                },
                {
                    id:3,
                    content:"这是3"
                },
            ],
            radio:'1',
            showtooptile: false
        };
    },
    mounted() {
        console.log(this.data);
        // console.log(this.$refs.p.clientWidth);
        // console.log(this.$refs.p.scrollWidth);
        // this.$nextTick(()=>{
        //     if(this.$refs.p.clientWidth>this.$refs.p.scrollWidth){
        //         this.showtooptile = false
        //     }else{
        //         this.showtooptile = true
        //     }
        // })
    },
    beforeRouterEnter(to,from,next){
        console.log(to)
    },
    methods: {
        dda(){ 
            let fileUrl = 'http%3A%2F%2F10.2.5.63%3A8080%2Fcmdb-server%2Fvalidate%2Fquality%2Fresult%2Frule%2FexportByRuleId%3FruleId%3D4%26snc-token%3DKDCioNwgWBLLk6Z4K0d3f1LvKKLF5I05DjOyxz5baVqmqT%252Fcx4%252F1LvD0K44RujDTF58Xv3qoRhRtas9X3fpUMQ%253D%253D'
            let newFileUrl = encodeURIComponent(fileUrl)     
            window.open(`http://view.officeapps.live.com/op/view.aspx?src=${fileUrl}`, '_blank')

        },
        lostice() {
            this.contenteditable = true;
            this.$nextTick(() => {
                let jsDom = this.$refs.divd;
                jsDom.focus();
                if (
                    typeof window.getSelection != "undefined" &&
                    typeof document.createRange != "undefined"
                ) {
                    var range = document.createRange();
                    range.selectNodeContents(jsDom);
                    range.collapse(false);
                    var sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                } else if (
                    typeof document.body.createTextRange != "undefined"
                ) {
                    var textRange = document.body.createTextRange();
                    textRange.moveToElementText(jsDom);
                    textRange.collapse(false);
                    textRange.select();
                }
            });
        },
        lostice11() {
            console.log(this.$refs.divd.innerHTML);
            this.contenteditable = false;
        },
        showabled() {
            this.isShow = !this.isShow;
            this.$nextTick(() => {
                this.$refs.elinput.focus();
            });
        },
        lostblur() {
            this.isShow = !this.isShow;
        },
        keydown(e){
            console.log(e);
            if(e.keyCode === 13){
                console.log(111);
            }
        },
        DD(e){
            console.log(e);
            console.log(222);
        },
        dragstart(e){
            console.log(e.buttons);
            console.log(e.target);
            // console.log(document.querySelector('.content-main1').appendChild(e.target));
        },
        dragstart1(e){
            e.preventDefault();
            
            console.log(e.target);
            // console.log(document.querySelector('.content-main1').appendChild(e.target));
        }
    },
};
</script>
<style lang="less" scoped>
.a {
    display: flex;
}

.divaa {
    // border: 1px solid red;
    outline: none;
    margin-left: 20px;
    margin-right: 10px;
    // border: none;
    min-width: 20px;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
}

.elinput {
    cursor: pointer;
    width: 80%;
    padding: 0;
}
.chuantou{
    width: 200px;
    height: 200px;
    border: 1px solid red;
    position: relative;
    .chuantoudiv{
        background-color: rgba(0,0,255,.2);
        opacity: .5;
        position: absolute;
        color: gray;
        right: -5px;
        top: -8px;
        pointer-events: none;
    }
}
.div11{
    width: 100px;
    height: 100px;
    border: 1px solid green;
    p{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
}
</style>
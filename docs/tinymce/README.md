> https://www.jianshu.com/p/23badd25f6d2

将 `powerpaste`下载后放到 `static/tinymce4.7.5/plugins`目录下



![static/tinymce4.7.5/plugins](https://upload-images.jianshu.io/upload_images/2733312-4e0bd2df3836b201.png?imageMogr2/auto-orient/)





接着修改下面的文件 `plugins.js`



![tinymce/plugins.js](https://upload-images.jianshu.io/upload_images/2733312-b2e977ea0b697376.png?imageMogr2/auto-orient/)





将 plugins 里的 `paste`替换成 `powerpaste`。

相关的初始化配置：

```
initTinymce() {
    const _this = this
    window.tinymce.init({
    selector: `#${this.tinymceId}`,
    language: 'zh_CN',
    lineheight_formats: '1 1.5 1.75 2 3 4 5',
    font_formats: '宋体=宋体;微软雅黑=微软雅黑;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats',
    height: this.height,
    body_class: 'panel-body ',
    object_resizing: false,
    toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
    menubar: this.menubar,
    plugins: plugins,
    end_container_on_empty_block: true,
    powerpaste_word_import: 'clean',
    code_dialog_height: 450,
    code_dialog_width: 1000,
    advlist_bullet_styles: 'square',
    advlist_number_styles: 'default',
    imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
    default_link_target: '_blank',
    link_title: false,
    automatic_uploads: true,
    init_instance_callback: editor => {
        if (_this.value) {
        editor.setContent(_this.value)
        }
        _this.hasInit = true
        editor.on('NodeChange Change KeyUp SetContent', () => {
        this.hasChange = true
        this.$emit('input', editor.getContent())
        })
    }
    })
}
plugins.js
// Any plugins you want to use has to be imported
// Detail plugins list see https://www.tinymce.com/docs/plugins/
// Custom builds see https://www.tinymce.com/download/custom-builds/

const plugins = ['advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime legacyoutput link lists media nonbreaking noneditable pagebreak powerpaste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount lineheight']

export default plugins
```

##### 下载地址：

[TinyMCE.rar](https://links.jianshu.com/go?to=http%3A%2F%2Fwww.duckerkj.cn%2Fwp-content%2Fuploads%2F2018%2F09%2F262dc22a96ab92ac8026dde4f34df376.rar)
[powerPaste.zip](https://links.jianshu.com/go?to=http%3A%2F%2Fwww.duckerkj.cn%2Fwp-content%2Fuploads%2F2018%2F09%2Fd7f045952e11d997f0d600a346978a80.zip)

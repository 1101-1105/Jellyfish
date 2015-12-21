var ft;

var fileTransfer = {
    startUpload: function(fileUrl){

        var uploadServer = 'http://localhost:3001/upload';

        //Upload progress
        var text = '<div id="progress" class="progress"><span class="progress-bar"></span></div>';
        Jellyfish.modal({
            title: i18n.camera.image_uploading + ' <span class="percent"></span>',
            text: text,
            buttons: [{
                text: i18n.global.cancel,
                onClick: fileTransfer.abortUpload
            }]
        });

        /* global FileUploadOptions */
        var options = new FileUploadOptions();
        options.fileKey = 'upfile';
        options.fileName = fileUrl.substr(fileUrl.lastIndexOf('/') + 1);
        options.mimeType = 'image/jpeg';
        options.params = {};
        ft = new FileTransfer();
        ft.upload(fileUrl, encodeURI(uploadServer), fileTransfer.uploadSuccess , fileTransfer.uploadFail , options);

        ft.onprogress = fileTransfer.onprogress;
    },

    uploadSuccess: function (r) {
        Jellyfish.closeModal('.modal');

        navigator.camera.cleanup();

        var response = r.response ? JSON.parse(r.response) : '';

        Jellyfish.alert(response);
    },

    uploadFail: function (error) {
        Jellyfish.closeModal('.modal');

        /* global FileTransferError */
        var errText;
        switch (error.code){
            case FileTransferError.FILE_NOT_FOUND_ERR:
                errText = i18n.camera.file_not_found_err;
                break;
            case FileTransferError.INVALID_URL_ERR:
                errText = i18n.camera.invalid_url_err;
                break;
            case FileTransferError.CONNECTION_ERR:
                errText = i18n.camera.connection_err;
                break;
            case FileTransferError.ABORT_ERR:
                errText = i18n.camera.abort_err;
                break;
            case FileTransferError.NOT_MODIFIED_ERR:
                errText = i18n.camera.not_modified_err;
                break;
        }

        Jellyfish.alert(errText);
    },

    onprogress: function(progressEvent){
        if (progressEvent.lengthComputable) {
            var percent = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            $$('#progress').parents('.modal-inner').find('.modal-title .percent').html(percent + '%');
            $$('#progress').find('.progress-bar').css('width',percent + '%');
        }
    },

    abortUpload: function(){
        ft.abort();
    }
};

module.exports = fileTransfer;

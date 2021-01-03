$(document).ready(() => {
    const copyButton = $("#copyButton")

    copyButton.on("click", () => {
        console.log("foi!")

        const copyValue = copyButton.attr("aria-label")
        const temp = $("<input>")

        console.log("copyValue", copyValue)

        $("body").append(temp)
        temp.val(copyValue).select()
        document.execCommand("copy")
        temp.remove()

        toastr.options = {
            "closeButton": true,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": true,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr.info("Link copiado!", "Encurtador de Links")
    })
})
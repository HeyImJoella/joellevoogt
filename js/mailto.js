<script type="text/javascript">
    function loadEvents() {
        var mailString;
        function updateMailString() {
            mailString = '?subject=' + encodeURIComponent($('#subject').val())
                + '&body=' + encodeURIComponent($('#message').val());
            $('#mail-link').attr('href',  'mailto:joelle.iris@gmail.com' + mailString);
        }
        $( "#subject" ).focusout(function() { updateMailString(); });
        $( "#message" ).focusout(function() { updateMailString(); });
        updateMailString();
    }
</script>
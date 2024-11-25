/*
  Autor: @lfmc.vzl | Luis F. Marchán C.
  E-mail: lfmc.vzl@outlook.com
  Telegram: https://t.me/lfmc_vzl
*/
$(document).ready(function () {
    $('select.select2-hidden-accessible').each(function () {
        $(this).nextAll('label').toggleClass('active', $(this).val().length > 0);
    }).on('change', function () {
        $(this).nextAll('label').toggleClass('active', $(this).val().length > 0);
    });

    $('.select2-selection__rendered, .select2-search__field').on('focus blur', function (evento) {
        $(this).closest('.select-wrapper').find('.prefix').toggleClass('active', evento.type === 'focus');
    });
});
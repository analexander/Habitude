    $.get("/api/user_data").then(data => {
        $(".member-name").text(data.email);
        var date = moment().format('LL');
        $("#dateCmpt").text(date)
    })
//    var dt = $DateFormatter.getFormattedDate($grade.getAwardDate(), "MMMM dd, yyyy");


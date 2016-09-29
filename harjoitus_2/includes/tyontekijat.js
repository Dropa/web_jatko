
    var urli = "http://home.tamk.fi/~kujesa/webjatko/rest/index.php/employees";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var tyontekijat = JSON.parse(this.responseText);
            var i = 0;
            var taulu = "";
            while (tyontekijat[i]) {
                taulu += "<tr>";
                taulu += "<td>" + tyontekijat[i].id + "</td>";
                taulu += "<td>" + tyontekijat[i].fname + "</td>";
                taulu += "<td>" + tyontekijat[i].lname + "</td>";
                taulu += "<td>" + tyontekijat[i].dname + "</td>";
                taulu += "<td>" + tyontekijat[i].phone1 + "</td>";
                taulu += "<td>";


                taulu += "<button type='button' class='show-employee btn btn-group btn-info'";
                taulu += "data-id='" + tyontekijat[i].id + "' ";
                taulu += "data-toggle='modal' data-target='#showEmployee'>";
                taulu += "<span class='glyphicon glyphicon-eye-open'></span> Näytä";
                taulu += "</button>";

                taulu +="<button class='btn btn-group btn-warning'>";
                taulu += "<span class='glyphicon glyphicon-pencil'></span>";
                taulu += " Muokkaa</button>";

                taulu += "<button class='btn btn-group btn-danger'>";
                taulu += "<span class='glyphicon glyphicon-minus'></span>";
                taulu += " Poista</button></td>";

                taulu += "</tr>";
                i++;

            }
            document.getElementById("tablebody").innerHTML = taulu;
        }
    };
    xhttp.open('GET', urli, true);
    xhttp.send();

    $(document).on("click", ".show-employee", function () {
        var employee = $(this).data('id');
        var employeeurli = urli + "/" + employee;
        var xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var emp = JSON.parse(this.responseText).data;
                var ans = "";
                ans += "<p><b>ID:</b> " + emp.id + "</p>";
                ans += "<p><b>First name:</b> " + emp.fname + "</p>";
                ans += "<p><b>Last name:</b> " + emp.lname + "</p>";
                ans += "<p><b>Department:</b> " + emp.dname + " (" + emp.dep + ")" + "</p>";
                ans += "<p><b>Birthday:</b> " + emp.bday + "</p>";
                ans += "<p><b>E-mail:</b> " + emp.email + "</p>";
                ans += "<p><b>Salary:</b> " + emp.salary + "</p>";
                ans += "<p><b>Phone 1:</b> " + emp.phone1 + "</p>";
                ans += "<p><b>Phone 2:</b> " + emp.phone2 + "</p>";
                ans += "<p><b>First name:</b> " + emp.fname + "</p>";
                ans += "<p><img src=" + "http://home.tamk.fi/~kujesa/webjatko/rest/index.php/" + emp.image + ">" + "</p>";
                document.getElementById("employee-modal-body").innerHTML = ans;
            }
        };
        xhttp2.open('GET', employeeurli, true);
        xhttp2.send();
    });